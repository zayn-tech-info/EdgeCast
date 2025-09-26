const express = require("express");
const {
  nonce,
  verifyNonce,
  protectRoute,
} = require("../controller/auth.controller");

const route = express.Router();

route.get("/nonce/:address", nonce);
route.post("/verify", verifyNonce);
route.get("/protected", protectRoute);
