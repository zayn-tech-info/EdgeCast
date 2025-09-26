const mongoose = require("mongoose");

async function connectMongo() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI not set");
  await mongoose.connect(uri, { dbName: process.env.MONGODB_DB || "edgecast" });
  return mongoose.connection;
}

module.exports = { connectMongo };


