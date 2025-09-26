const express = require("express");
const router = express.Router();
const { getProvider, getWallet, getContract } = require("../services/ethers");

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
    res.json({ owner, entryFee: entryFee.toString(), deadline: Number(deadline), balance: balance.toString() });
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

module.exports = router;


