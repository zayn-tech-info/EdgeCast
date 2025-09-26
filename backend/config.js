const { ethers } = require("ethers");

const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const ABI = require("./PredictionMVP.json"); // ABI from compilation
const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, wallet);

module.exports = contract;
