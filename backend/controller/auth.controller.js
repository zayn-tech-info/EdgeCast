const express = require("express");
const { verifyMessage } = require("ethers");
const jwt = require("jsonwebtoken");

const nonces = {};

//  Get nonce

const nonce = async (req, res) => {
  const { address } = req.params;
  const nonce = Math.floor(Math.random() * 1e6).toString();
  nonce[address.toLowerCase()] = nonce;

  res.json({ nonce });
};

// Verify signature
const verifyNonce = async (req, res) => {
  const { address, signature } = req.body;

  const nonce = nonce[address.toLowerCase()];

  if (!nonce) {
    return res.status(400).json({
      status: false,
      message: "Nonce not found",
    });
  }

  try {
    const recovered = verifyMessage(nonce, signature);
    if (recovered.toLowerCase() === address.toLowerCase()) {
      delete nonces[address.toLowerCase()];

      const token = jwt.sign({ address }, JWT_SECRET, { expiresIn: "1h" });

      return res.json({ success: true, token });
    } else {
      return res.status(401).json({ error: "Signature mismatch" });
    }
  } catch (err) {
    return res.status(400).json({ error: "Verification failed" });
  }
};

const protectRoute = async (req, res) => {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ error: "No token found" });

  const token = auth.split(" ")[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return res.json({ message: "Welcome!", address: decoded.address });
  } catch {
    return res.status(401).json({ error: "Invalid token" });
  }
};

module.exports = { nonce, protectRoute, verifyNonce };
