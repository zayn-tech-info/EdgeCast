const express = require("express");
const { getProvider, getContract, getFactory, getWallet } = require("../services/ethers");
const Round = require("../models/Round");

const router = express.Router();

// POST /api/rounds/register { contract, assetId, title }
router.post("/register", async (req, res) => {
  try {
    const { contract, assetId, title } = req.body || {};
    if (!contract || !assetId || !title) return res.status(400).json({ error: "contract, assetId, title required" });
    const provider = getProvider();
    const game = getContract(contract, provider);
    const [entryFee, deadline] = await Promise.all([game.entryFee(), game.deadline()]);
    const { chainId } = await provider.getNetwork();
    const doc = await Round.findOneAndUpdate(
      { contract: contract.toLowerCase() },
      {
        contract: contract.toLowerCase(),
        assetId,
        title,
        chainId: Number(chainId),
        entryFeeWei: entryFee.toString(),
        deadline: Number(deadline),
      },
      { upsert: true, new: true }
    );
    res.json({ ok: true, round: doc });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// GET /api/rounds/list?assetId=ethereum
router.get("/list", async (req, res) => {
  try {
    const q = {};
    if (req.query.assetId) q.assetId = String(req.query.assetId);
    const rounds = await Round.find(q).sort({ createdAt: -1 });
    res.json({ rounds });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;
// POST /api/rounds/deploy { assetId, title, entryFeeWei, durationSec }
router.post("/deploy", async (req, res) => {
  try {
    const { assetId, title, entryFeeWei, durationSec } = req.body || {};
    if (!assetId || !title || !entryFeeWei || !durationSec) return res.status(400).json({ error: "assetId, title, entryFeeWei, durationSec required" });
    const provider = getProvider();
    const wallet = getWallet(provider);
    if (!wallet) return res.status(400).json({ error: "PRIVATE_KEY not set for deployment" });
    const factory = getFactory(wallet);
    const contract = await factory.deploy(BigInt(entryFeeWei), BigInt(durationSec));
    const receipt = await contract.deploymentTransaction().wait();
    const address = await contract.getAddress();
    const { chainId } = await provider.getNetwork();
    const round = await Round.findOneAndUpdate(
      { contract: address.toLowerCase() },
      {
        contract: address.toLowerCase(),
        assetId,
        title,
        chainId: Number(chainId),
        entryFeeWei: String(entryFeeWei),
        deadline: Number((await getContract(address, provider).deadline())),
      },
      { upsert: true, new: true }
    );
    res.json({ ok: true, address, txHash: receipt.hash, round });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});


