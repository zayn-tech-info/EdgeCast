export default async function main(hre) {
  console.log("Starting deployment...");
  const PredictionGame = await hre.ethers.getContractFactory("PredictionGame");
  const game = await PredictionGame.deploy(
    hre.ethers.parseEther("0.01"), // Entry fee
    86400 // Duration: 24 hours
  );

  await game.waitForDeployment();
  console.log(`PredictionGame deployed to: ${game.target}`);
}