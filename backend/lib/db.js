const mongoose = require("mongoose");

const connectTODB = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("Database connected successfully");
  } catch (error) {
    console.log(`An error occurred: ${error.message}`);
  }
};

module.exports = connectTODB;
