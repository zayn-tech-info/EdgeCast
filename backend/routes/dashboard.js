const express = require("express");
const Guess = require("../models/Guess");
const GameClosed = require("../models/GameClosed");

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
    const items = await Guess.find({}).sort({ blockNumber: -1 }).skip(skip).limit(limit);
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

module.exports = router;


