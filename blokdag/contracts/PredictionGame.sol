// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract PredictionMarket is Ownable, ReentrancyGuard {
    struct Pool {
        address creator;
        uint256 low;       // price lower bound (uint, e.g. USD * 1e8)
        uint256 high;      // price upper bound (uint, e.g. USD * 1e8)
        uint256 expiry;    // unix timestamp
        uint256 yesTotal;  // wei total bet on YES (in range)
        uint256 noTotal;   // wei total bet on NO (out of range)
        bool resolved;
        bool inRange;      // outcome
        uint256 finalPrice; // price posted at resolution (same units as low/high)
    }

    uint256 public poolCount;
    mapping(uint256 => Pool) public pools;

    // user stakes per pool
    mapping(uint256 => mapping(address => uint256)) public yesBets;
    mapping(uint256 => mapping(address => uint256)) public noBets;

    event PoolCreated(uint256 indexed poolId, address indexed creator, uint256 low, uint256 high, uint256 expiry);
    event BetPlaced(uint256 indexed poolId, address indexed user, bool yes, uint256 amount);
    event PoolResolved(uint256 indexed poolId, uint256 finalPrice, bool inRange);
    event Claimed(uint256 indexed poolId, address indexed user, uint256 amount);
    event Refunded(uint256 indexed poolId, address indexed user, uint256 amount);

    /* ========== CREATE / BET ========== */

    function createPool(uint256 low, uint256 high, uint256 expiry) external returns (uint256) {
        require(low < high, "low < high required");
        require(expiry > block.timestamp, "expiry in past");

        poolCount += 1;
        pools[poolCount] = Pool({
            creator: msg.sender,
            low: low,
            high: high,
            expiry: expiry,
            yesTotal: 0,
            noTotal: 0,
            resolved: false,
            inRange: false,
            finalPrice: 0
        });

        emit PoolCreated(poolCount, msg.sender, low, high, expiry);
        return poolCount;
    }

    function betYes(uint256 poolId) external payable {
        Pool storage p = pools[poolId];
        require(p.expiry != 0, "pool not exist");
        require(block.timestamp < p.expiry, "pool expired");
        require(msg.value > 0, "stake required");

        yesBets[poolId][msg.sender] += msg.value;
        p.yesTotal += msg.value;

        emit BetPlaced(poolId, msg.sender, true, msg.value);
    }

    function betNo(uint256 poolId) external payable {
        Pool storage p = pools[poolId];
        require(p.expiry != 0, "pool not exist");
        require(block.timestamp < p.expiry, "pool expired");
        require(msg.value > 0, "stake required");

        noBets[poolId][msg.sender] += msg.value;
        p.noTotal += msg.value;

        emit BetPlaced(poolId, msg.sender, false, msg.value);
    }

    /* ========== RESOLVE (ADMIN) ========== */

    function resolvePool(uint256 poolId, uint256 finalPrice) external onlyOwner {
        Pool storage p = pools[poolId];
        require(p.expiry != 0, "pool not exist");
        require(block.timestamp >= p.expiry, "too early to resolve");
        require(!p.resolved, "already resolved");

        p.finalPrice = finalPrice;
        if (finalPrice >= p.low && finalPrice <= p.high) {
            p.inRange = true;
        } else {
            p.inRange = false;
        }
        p.resolved = true;

        emit PoolResolved(poolId, finalPrice, p.inRange);
    }

    /* ========== CLAIM / REFUND ========== */

    function claim(uint256 poolId) external nonReentrant {
        Pool storage p = pools[poolId];
        require(p.expiry != 0, "pool not exist");
        require(p.resolved, "not resolved");

        uint256 userYes = yesBets[poolId][msg.sender];
        uint256 userNo = noBets[poolId][msg.sender];

        uint256 winnersTotal;
        uint256 losersTotal;

        if (p.inRange) {
            winnersTotal = p.yesTotal;
            losersTotal  = p.noTotal;
        } else {
            winnersTotal = p.noTotal;
            losersTotal  = p.yesTotal;
        }

        // Case: no winners at all -> refunds to everyone
        if (winnersTotal == 0) {
            // refund if user staked on either side
            uint256 refundAmount = 0;
            if (userYes > 0) {
                refundAmount = userYes;
                yesBets[poolId][msg.sender] = 0;
            } else if (userNo > 0) {
                refundAmount = userNo;
                noBets[poolId][msg.sender] = 0;
            } else {
                revert("no stake to refund");
            }

            (bool sent, ) = msg.sender.call{value: refundAmount}("");
            require(sent, "refund failed");
            emit Refunded(poolId, msg.sender, refundAmount);
            return;
        }

        // Winners exist: compute payout = original stake + proportional share of losers pool
        uint256 payout = 0;

        if (p.inRange && userYes > 0) {
            // user on winning side
            // payout = userYes + (losersTotal * userYes) / winnersTotal
            payout = userYes + (losersTotal * userYes) / winnersTotal;
            yesBets[poolId][msg.sender] = 0;
        } else if (!p.inRange && userNo > 0) {
            payout = userNo + (losersTotal * userNo) / winnersTotal;
            noBets[poolId][msg.sender] = 0;
        } else {
            revert("no winnings for caller");
        }

        (bool success, ) = msg.sender.call{value: payout}("");
        require(success, "transfer failed");
        emit Claimed(poolId, msg.sender, payout);
    }

    /* ========== VIEWS ========== */

    function getPool(uint256 poolId) external view returns (
        address creator, uint256 low, uint256 high, uint256 expiry,
        uint256 yesTotal, uint256 noTotal, bool resolved, bool inRange, uint256 finalPrice
    ) {
        Pool storage p = pools[poolId];
        return (p.creator, p.low, p.high, p.expiry, p.yesTotal, p.noTotal, p.resolved, p.inRange, p.finalPrice);
    }

    function getUserBets(uint256 poolId, address user) external view returns (uint256 yesAmount, uint256 noAmount) {
        return (yesBets[poolId][user], noBets[poolId][user]);
    }

    // Allow contract to receive ETH accidentally (not used in logic)
    receive() external payable {}
}
