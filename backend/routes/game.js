const express = require("express");
const router = express.Router();
const { getProvider, getWallet, getContract } = require("../services/ethers");
const { getEthUsdPrice, getAssetUsdPrice } = require("../services/price");
const Round = require("../models/Round");
const { ethers } = require("ethers");

function getAddressOrThrow() {
  const addr = process.env.PREDICTIONGAME_ADDRESS;
  if (!addr) throw new Error("PREDICTIONGAME_ADDRESS env var not set");
  return addr;
}

router.get("/health", (_req, res) => {
  res.json({ ok: true });
});

router.get("/info", async (_req, res) => {
  try {
    const provider = getProvider();
    const address = getAddressOrThrow();
    const game = getContract(address, provider);
    const [owner, entryFee, deadline, balance] = await Promise.all([
      game.owner(),
      game.entryFee(),
      game.deadline(),
      provider.getBalance(address),
    ]);
    // Expose price scale so frontend can submit guesses in cents
    const priceScale = 100; // cents
    res.json({ owner, entryFee: entryFee.toString(), deadline: Number(deadline), balance: balance.toString(), priceScale });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.get("/players", async (_req, res) => {
  try {
    const provider = getProvider();
    const address = getAddressOrThrow();
    const game = getContract(address, provider);
    const countBn = await game.players.length().catch(() => null);
    // If public array getter doesn't expose length(), fallback by events (optional). For now, just return unknown.
    res.json({ count: countBn ? Number(countBn) : null });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.post("/close", async (req, res) => {
  try {
    const { actualPrice } = req.body || {};
    if (actualPrice === undefined) return res.status(400).json({ error: "actualPrice required" });
    const provider = getProvider();
    const wallet = getWallet(provider);
    if (!wallet) return res.status(400).json({ error: "PRIVATE_KEY not set for closing" });
    const address = getAddressOrThrow();
    const game = getContract(address, wallet);
    const tx = await game.closeGame(BigInt(actualPrice));
    const receipt = await tx.wait();
    res.json({ txHash: receipt.hash, status: receipt.status });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Submit a guess: expects body { guess: number }
router.post("/submit-guess", async (req, res) => {
  try {
    const { guess } = req.body || {};
    if (guess === undefined) return res.status(400).json({ error: "guess required" });
    const provider = getProvider();
    const wallet = getWallet(provider);
    if (!wallet) return res.status(400).json({ error: "PRIVATE_KEY not set for submit-guess sender" });
    const address = getAddressOrThrow();
    const game = getContract(address, wallet);
    const fee = await game.entryFee();
    const tx = await game.submitGuess(BigInt(guess), { value: fee });
    const receipt = await tx.wait();
    res.json({ txHash: receipt.hash, status: receipt.status });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Close game with price fetched from CoinGecko
router.post("/close-game", async (req, res) => {
  try {
    const provider = getProvider();
    const wallet = getWallet(provider);
    if (!wallet) return res.status(400).json({ error: "PRIVATE_KEY not set for closing" });
    const overrideAddress = req.query.contract ? String(req.query.contract).toLowerCase() : null;
    const address = overrideAddress || getAddressOrThrow();
    const game = getContract(address, wallet);
    let assetId = "ethereum";
    const round = await Round.findOne({ contract: address });
    if (round?.assetId) assetId = round.assetId;
    const priceUsd = await getAssetUsdPrice(assetId);
    // Convert to integer cents (price with 2 decimals)
    const actualPrice = BigInt(Math.round(priceUsd * 100));
    const tx = await game.closeGame(actualPrice);
    const receipt = await tx.wait();
    res.json({ assetId, priceUsd, priceScale: 100, actualPrice: actualPrice.toString(), txHash: receipt.hash, status: receipt.status });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Game status: pot, deadline, entries
router.get("/game-status", async (_req, res) => {
  try {
    const provider = getProvider();
    const address = getAddressOrThrow();
    const game = getContract(address, provider);
    const [entryFee, deadline, balance] = await Promise.all([
      game.entryFee(),
      game.deadline(),
      provider.getBalance(address),
    ]);
    res.json({
      potWei: balance.toString(),
      entryFeeWei: entryFee.toString(),
      deadline: Number(deadline),
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});


module.exports = router;


