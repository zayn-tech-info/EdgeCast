const mongoose = require("mongoose");

const guessSchema = new mongoose.Schema(
  {
    player: { type: String, index: true, required: true },
    guess: { type: String, required: true }, // store as string to avoid JS precision loss
    valueWei: { type: String, required: true },
    txHash: { type: String, index: true, required: true },
    blockNumber: { type: Number, index: true, required: true },
    timestamp: { type: Number, index: true, required: true },
    chainId: { type: Number, index: true, required: true },
    contract: { type: String, index: true, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Guess", guessSchema);


