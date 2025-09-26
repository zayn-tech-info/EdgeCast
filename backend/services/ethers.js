const { ethers } = require("ethers");
const path = require("path");
const fs = require("fs");

function getProvider() {
  const rpcUrl = process.env.RPC_URL || "http://127.0.0.1:8545";
  return new ethers.JsonRpcProvider(rpcUrl);
}

function getWallet(provider) {
  const pk = process.env.PRIVATE_KEY;
  if (!pk) return null;
  return new ethers.Wallet(pk, provider);
}

function getArtifact() {
  // Prefer workspace artifact if available, else require a copied ABI file path
  const artifactPath = path.join(
    __dirname,
    "..",
    "..",
    "blokdag",
    "artifacts",
    "contracts",
    "PredictionGame.sol",
    "PredictionGame.json"
  );
  // Fallback to project-level artifacts if backend sits next to blokdag
  const altArtifactPath = path.join(
    __dirname,
    "..",
    "..",
    "blokdag",
    "artifacts",
    "contracts",
    "PredictionGame.sol",
    "PredictionGame.json"
  );
  const candidates = [artifactPath, altArtifactPath].filter(Boolean);
  for (const p of candidates) {
    try {
      if (fs.existsSync(p)) {
        const json = JSON.parse(fs.readFileSync(p, "utf8"));
        return json;
      }
    } catch (_) {}
  }
  // As a last resort, allow ABI to be provided via environment variable
  if (process.env.PREDICTIONGAME_ABI_JSON) {
    try {
      const parsed = JSON.parse(process.env.PREDICTIONGAME_ABI_JSON);
      return { abi: parsed };
    } catch (e) {
      throw new Error("Invalid PREDICTIONGAME_ABI_JSON env var");
    }
  }
  throw new Error("PredictionGame ABI not found. Compile contracts and ensure artifacts are available or set PREDICTIONGAME_ABI_JSON env var.");
}

function getContract(address, signerOrProvider) {
  const { abi } = getArtifact();
  return new ethers.Contract(address, abi, signerOrProvider);
}

function getFactory(signer) {
  const { abi, bytecode } = getArtifact();
  if (!bytecode) throw new Error("Artifact bytecode missing. Recompile in blokdag.");
  return new ethers.ContractFactory(abi, bytecode, signer);
}

module.exports = { getProvider, getWallet, getContract, getFactory };


