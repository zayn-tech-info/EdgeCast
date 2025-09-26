const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    address: { type: String, unique: true, index: true, required: true },
    username: { type: String, index: true, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);


