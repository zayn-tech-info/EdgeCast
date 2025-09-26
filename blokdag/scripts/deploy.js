const hre = require("hardhat");

async function main() {
  const PredictionMarket = await hre.ethers.getContractFactory(
    "PredictionMarket"
  );
  const pm = await PredictionMarket.deploy();
  await pm.deployed();
  console.log("PredictionMarket deployed to:", pm.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
