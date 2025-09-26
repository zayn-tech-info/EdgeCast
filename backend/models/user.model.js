const mongoose = require("mongoose");
const validator = require("validator");

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please enter your first name"],
    },
    lastName: {
      type: String,
      required: [true, "Please enter your last name"],
    },
    email: {
      type: String,
      required: [true, "Email is a required field"],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, "Please enter a valid email address"],
    },  
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
      select: false,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    profilepic: {
      type: String,
      default: "",
    },
    walletAddress: {
      type: String,
      require: [true, "Please provide your wallet address"],
    },
    passwordChangedAt: {
      type: Date,
    },
    active: {
      default: true,
      type: Boolean,
    },
    resetPasswordToken: String,
    resetTokenExpires: Date,
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
