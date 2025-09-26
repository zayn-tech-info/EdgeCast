const { getProvider, getContract } = require("./ethers");
const Guess = require("../models/Guess");
const GameClosed = require("../models/GameClosed");

async function getChainId(provider) {
  const { chainId } = await provider.getNetwork();
  return Number(chainId);
}

function toNumber(bnLike) {
  if (typeof bnLike === "bigint") return Number(bnLike);
  return Number(bnLike);
}

async function backfill(contract, fromBlock) {
  const provider = contract.runner;
  const chainId = await getChainId(provider);
  const address = await contract.getAddress();

  // GuessSubmitted(address indexed player, uint256 guess, uint256 value)
  const guessFilter = contract.filters.GuessSubmitted();
  const guessLogs = await contract.queryFilter(guessFilter, fromBlock, "latest");
  for (const l of guessLogs) {
    const { player, guess, value } = l.args;
    const b = await provider.getBlock(l.blockNumber);
    await Guess.updateOne(
      { txHash: l.transactionHash },
      {
        player: player.toLowerCase(),
        guess: guess.toString(),
        valueWei: value.toString(),
        txHash: l.transactionHash,
        blockNumber: l.blockNumber,
        timestamp: b?.timestamp || 0,
        chainId,
        contract: address.toLowerCase(),
      },
      { upsert: true }
    );
  }

  // GameClosed(uint256 actualPrice, address indexed winner, uint256 payout)
  const closeFilter = contract.filters.GameClosed();
  const closeLogs = await contract.queryFilter(closeFilter, fromBlock, "latest");
  for (const l of closeLogs) {
    const { actualPrice, winner, payout } = l.args;
    const b = await provider.getBlock(l.blockNumber);
    await GameClosed.updateOne(
      { txHash: l.transactionHash },
      {
        actualPrice: actualPrice.toString(),
        winner: winner.toLowerCase(),
        payoutWei: payout.toString(),
        txHash: l.transactionHash,
        blockNumber: l.blockNumber,
        timestamp: b?.timestamp || 0,
        chainId,
        contract: address.toLowerCase(),
      },
      { upsert: true }
    );
  }
}

async function subscribe(contract) {
  const provider = contract.runner;
  const chainId = await getChainId(provider);
  const address = await contract.getAddress();

  contract.on("GuessSubmitted", async (player, guess, value, evt) => {
    const b = await provider.getBlock(evt.blockNumber);
    await Guess.updateOne(
      { txHash: evt.transactionHash },
      {
        player: player.toLowerCase(),
        guess: guess.toString(),
        valueWei: value.toString(),
        txHash: evt.transactionHash,
        blockNumber: evt.blockNumber,
        timestamp: b?.timestamp || 0,
        chainId,
        contract: address.toLowerCase(),
      },
      { upsert: true }
    );
  });

  contract.on("GameClosed", async (actualPrice, winner, payout, evt) => {
    const b = await provider.getBlock(evt.blockNumber);
    await GameClosed.updateOne(
      { txHash: evt.transactionHash },
      {
        actualPrice: actualPrice.toString(),
        winner: winner.toLowerCase(),
        payoutWei: payout.toString(),
        txHash: evt.transactionHash,
        blockNumber: evt.blockNumber,
        timestamp: b?.timestamp || 0,
        chainId,
        contract: address.toLowerCase(),
      },
      { upsert: true }
    );
  });
}

async function initIndexer() {
  const provider = getProvider();
  const address = process.env.PREDICTIONGAME_ADDRESS;
  if (!address) throw new Error("PREDICTIONGAME_ADDRESS not set");
  const contract = getContract(address, provider);
  const fromBlock = process.env.INDEX_FROM_BLOCK ? Number(process.env.INDEX_FROM_BLOCK) : 0;
  await backfill(contract, fromBlock);
  await subscribe(contract);
}

module.exports = { initIndexer };


