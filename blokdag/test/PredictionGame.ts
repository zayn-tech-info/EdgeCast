import { expect } from "chai";
import { ethers } from "hardhat";

describe("PredictionGame", function () {
  async function deployFixture(entryFeeEth: string = "0.01", durationSec: number = 3600) {
    const [owner, p1, p2] = await ethers.getSigners();
    const PredictionGame = await ethers.getContractFactory("PredictionGame", owner);
    const game = await PredictionGame.deploy(ethers.parseEther(entryFeeEth), BigInt(durationSec));
    await game.waitForDeployment();
    return { owner, p1, p2, game };
  }

  it("sets constructor params", async () => {
    const { owner, game } = await deployFixture();
    expect(await game.owner()).to.equal(owner.address);
    expect(await game.entryFee()).to.equal(ethers.parseEther("0.01"));
    const deadline = await game.deadline();
    expect(deadline).to.be.a("bigint");
  });

  it("accepts zero as a valid guess and records event", async () => {
    const { p1, game } = await deployFixture();
    await expect(game.connect(p1).submitGuess(0n, { value: ethers.parseEther("0.01") }))
      .to.emit(game, "GuessSubmitted")
      .withArgs(p1.address, 0n, ethers.parseEther("0.01"));
  });

  it("rejects incorrect entry fee", async () => {
    const { p1, game } = await deployFixture();
    await expect(game.connect(p1).submitGuess(1n, { value: 0n })).to.be.revertedWith("Incorrect entry fee");
  });

  it("prevents duplicate guesses", async () => {
    const { p1, game } = await deployFixture();
    await game.connect(p1).submitGuess(10n, { value: ethers.parseEther("0.01") });
    await expect(
      game.connect(p1).submitGuess(11n, { value: ethers.parseEther("0.01") })
    ).to.be.revertedWith("Already guessed");
  });

  it("reverts closeGame when no players", async () => {
    const { owner, game } = await deployFixture();
    // fast-forward time to after deadline
    const deadline = await game.deadline();
    await ethers.provider.send("evm_setNextBlockTimestamp", [Number(deadline) + 1]);
    await ethers.provider.send("evm_mine", []);
    await expect(game.connect(owner).closeGame(100n)).to.be.revertedWith("No players");
  });

  it("selects closest guess and pays out, emits GameClosed", async () => {
    const { owner, p1, p2, game } = await deployFixture();
    await game.connect(p1).submitGuess(100n, { value: ethers.parseEther("0.01") });
    await game.connect(p2).submitGuess(120n, { value: ethers.parseEther("0.01") });

    const deadline = await game.deadline();
    await ethers.provider.send("evm_setNextBlockTimestamp", [Number(deadline) + 1]);
    await ethers.provider.send("evm_mine", []);

    const balanceBefore = await ethers.provider.getBalance(p2.address);
    // actual price 119 -> p2 is closer (diff 1 vs 19)
    await expect(game.connect(owner).closeGame(119n))
      .to.emit(game, "GameClosed").withArgs(119n, p2.address, ethers.parseEther("0.02"));

    const balanceAfter = await ethers.provider.getBalance(p2.address);
    expect(balanceAfter - balanceBefore).to.equal(ethers.parseEther("0.02"));
  });
});


