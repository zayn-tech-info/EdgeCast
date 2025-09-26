const mongoose = require("mongoose");

const closedSchema = new mongoose.Schema(
  {
    actualPrice: { type: String, required: true },
    winner: { type: String, index: true, required: true },
    payoutWei: { type: String, required: true },
    txHash: { type: String, index: true, required: true },
    blockNumber: { type: Number, index: true, required: true },
    timestamp: { type: Number, index: true, required: true },
    chainId: { type: Number, index: true, required: true },
    contract: { type: String, index: true, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("GameClosed", closedSchema);


