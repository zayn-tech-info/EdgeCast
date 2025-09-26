require("dotenv").config();
const express = require("express");
const { ethers } = require("ethers");
const app = express();
app.use(express.json());

// ---- CONFIG ----


// ---- ROUTES ----

// Get all pools (basic info)
app.get("/pools", async (req, res) => {
  try {
    const poolCount = await contract.poolCount();
    let pools = [];
    for (let i = 0; i < poolCount; i++) {
      const p = await contract.pools(i);
      pools.push({
        id: i,
        low: p.low.toString(),
        high: p.high.toString(),
        expiry: p.expiry.toString(),
        totalYes: p.totalYes.toString(),
        totalNo: p.totalNo.toString(),
        resolved: p.resolved,
        outcome: p.outcome,
      });
    }
    res.json(pools);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching pools");
  }
});

// Create a pool
app.post("/create", async (req, res) => {
  try {
    const { low, high, expiry } = req.body;
    const tx = await contract.createPool(low, high, expiry);
    await tx.wait();
    res.json({ success: true, txHash: tx.hash });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating pool");
  }
});

// Resolve pool (admin only)
app.post("/resolve", async (req, res) => {
  try {
    const { poolId, finalPrice } = req.body;
    const tx = await contract.resolvePool(poolId, finalPrice);
    await tx.wait();
    res.json({ success: true, txHash: tx.hash });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error resolving pool");
  }
});

// ---- START ----
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
