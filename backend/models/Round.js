const mongoose = require("mongoose");

const roundSchema = new mongoose.Schema(
  {
    contract: { type: String, unique: true, index: true, required: true },
    assetId: { type: String, index: true, required: true }, // e.g., "ethereum", "bitcoin"
    title: { type: String, required: true }, // display name for dashboard
    chainId: { type: Number, index: true, required: true },
    entryFeeWei: { type: String, required: true },
    deadline: { type: Number, required: true },
    createdBy: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Round", roundSchema);
