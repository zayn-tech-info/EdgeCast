const express = require("express");
const Guess = require("../models/Guess");
const GameClosed = require("../models/GameClosed");
const User = require("../models/User");
const Round = require("../models/Round");
const { getSimplePrices, getMarketChart, getTopCoins } = require("../services/price");

const router = express.Router();

router.get("/summary", async (_req, res) => {
  try {
    const [guesses, rounds] = await Promise.all([
      Guess.countDocuments({}),
      GameClosed.countDocuments({}),
    ]);
    const lastRound = await GameClosed.findOne({}).sort({ blockNumber: -1 });
    res.json({ guesses, rounds, lastRound });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.get("/guesses", async (req, res) => {
  try {
    const page = Math.max(parseInt(req.query.page || "1"), 1);
    const limit = Math.min(Math.max(parseInt(req.query.limit || "20"), 1), 100);
    const skip = (page - 1) * limit;
    const q = {};
    if (req.query.contract) q.contract = String(req.query.contract).toLowerCase();
    const itemsRaw = await Guess.find(q).sort({ blockNumber: -1 }).skip(skip).limit(limit).lean();
    const addresses = [...new Set(itemsRaw.map((i) => i.player))];
    const users = await User.find({ address: { $in: addresses } }).lean();
    const nameByAddr = Object.fromEntries(users.map((u) => [u.address, u.username]));
    const items = itemsRaw.map((i) => ({ ...i, username: nameByAddr[i.player] || null }));
    const total = await Guess.countDocuments({});
    res.json({ page, limit, total, items });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.get("/winners", async (req, res) => {
  try {
    const items = await GameClosed.find({}).sort({ blockNumber: -1 }).limit(50);
    res.json({ items });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.get("/leaderboard", async (req, res) => {
  try {
    const match = {};
    if (req.query.contract) match.contract = String(req.query.contract).toLowerCase();
    // Winners grouped by address (optionally filtered by contract)
    const agg = await GameClosed.aggregate([
      { $match: match },
      { $group: { _id: "$winner", wins: { $sum: 1 } } },
      { $sort: { wins: -1 } },
      { $limit: 50 },
    ]);
    const addresses = agg.map((a) => a._id);
    const users = await User.find({ address: { $in: addresses } }).lean();
    const nameByAddr = Object.fromEntries(users.map((u) => [u.address, u.username]));
    const items = agg.map((a) => ({ address: a._id, wins: a.wins, username: nameByAddr[a._id] || null }));
    res.json({ items });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;

// CoinGecko visualization endpoints
router.get("/prices", async (req, res) => {
  try {
    const ids = String(req.query.ids || "ethereum,bitcoin").split(",").map((s) => s.trim()).filter(Boolean);
    const vs = String(req.query.vs || "usd");
    const data = await getSimplePrices(ids, vs);
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.get("/market-chart", async (req, res) => {
  try {
    const id = String(req.query.id || "ethereum");
    const vs = String(req.query.vs || "usd");
    const days = Number(req.query.days || 1);
    const interval = String(req.query.interval || "hourly");
    const data = await getMarketChart(id, vs, days, interval);
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.get("/top-coins", async (req, res) => {
  try {
    const vs = String(req.query.vs || "usd");
    const perPage = Number(req.query.perPage || 25);
    const page = Number(req.query.page || 1);
    const data = await getTopCoins(vs, perPage, page);
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});


