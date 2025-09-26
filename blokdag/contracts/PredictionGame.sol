// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract PredictionGame {
    address public owner;
    uint256 public deadline;
    uint256 public entryFee;
    address[] public players;
    mapping(address => uint256) public guesses;
    mapping(address => bool) public hasGuessed;
    bool public gameClosed;

    event GuessSubmitted(address indexed player, uint256 guess, uint256 value);
    event GameClosed(uint256 actualPrice, address indexed winner, uint256 payout);

    constructor(uint256 _entryFee, uint256 _duration) {
        owner = msg.sender;
        entryFee = _entryFee;
        deadline = block.timestamp + _duration;
        gameClosed = false;
    }

    function submitGuess(uint256 guess) external payable {
        require(block.timestamp < deadline, "Game closed");
        require(msg.value == entryFee, "Incorrect entry fee");
        require(!hasGuessed[msg.sender], "Already guessed");

        guesses[msg.sender] = guess;
        hasGuessed[msg.sender] = true;
        players.push(msg.sender);

        emit GuessSubmitted(msg.sender, guess, msg.value);
    }

    function closeGame(uint256 actualPrice) external {
        require(msg.sender == owner, "Only owner can close");
        require(block.timestamp >= deadline, "Too early");
        require(!gameClosed, "Already closed");
        require(players.length > 0, "No players");

        address winner;
        uint256 closestDiff = type(uint256).max;

        for (uint i = 0; i < players.length; i++) {
            uint256 diff = absDiff(guesses[players[i]], actualPrice);
            if (diff < closestDiff) {
                closestDiff = diff;
                winner = players[i];
            }
        }

        gameClosed = true;
        uint256 payout = address(this).balance;
        (bool success, ) = payable(winner).call{value: payout}("");
        require(success, "Payout failed");

        emit GameClosed(actualPrice, winner, payout);
    }

    function absDiff(uint256 a, uint256 b) internal pure returns (uint256) {
        return a > b ? a - b : b - a;
    }
}
