const express = require("express");
const { ethers } = require("ethers");
const User = require("../models/User");

const router = express.Router();

// POST /api/users/register { address, username, signature }
// message to sign: `I am <address> binding username <username>`
router.post("/register", async (req, res) => {
  try {
    const { address, username, signature } = req.body || {};
    if (!address || !username || !signature) return res.status(400).json({ error: "address, username, signature required" });

    const message = `I am ${address.toLowerCase()} binding username ${username}`;
    let recovered;
    try {
      recovered = ethers.verifyMessage(message, signature);
    } catch (e) {
      return res.status(400).json({ error: "invalid signature" });
    }
    if (recovered.toLowerCase() !== address.toLowerCase()) {
      return res.status(400).json({ error: "signature does not match address" });
    }

    const doc = await User.findOneAndUpdate(
      { address: address.toLowerCase() },
      { address: address.toLowerCase(), username },
      { upsert: true, new: true }
    );
    res.json({ ok: true, user: doc });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;


