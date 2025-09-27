# 🎯 EdgeCast — Crypto Prediction Game

EdgeCast is a decentralized prediction game where users stake crypto and guess future coin prices. Built with Solidity smart contracts, a Node.js backend, and a clean API layer, it enables transparent, trustless gameplay powered by blockchain.

---

## 🚀 Features

- 🧠 Predict future crypto prices (e.g., BTC, ETH)
- 💰 Stake tokens to enter prediction rounds
- 🥇 Win rewards based on accuracy
- 🔗 Smart contract integration via Hardhat
- 🌐 RESTful backend API for frontend and Postman testing
- 📊 Dashboard routes for tracking rounds, users, and payouts

---

## 🛠️ Tech Stack

| Layer        | Tools & Frameworks                  |
|--------------|-------------------------------------|
| Smart Contract | Solidity, Hardhat                  |
| Backend API   | Node.js, Express, Ethers.js, dotenv |                 |
| Testing       | Postman, Hardhat test suite        |

---

## 📁 Project Structure  
EdgeCast/ ├── blokdag/              # Smart contracts & deployment │   ├── contracts/ │   ├── scripts/ │   ├── test/ │   └── hardhat.config.ts ├── backend/              # Backend API │   ├── routes/ │   ├── models/ │   ├── app.js │   └── server.js


---

## ⚙️ Setup Instructions

### 1. Clone the repo
```bash
git clone https://github.com/zayn-tech-info/EdgeCast.git
cd EdgeCast
cd blokdag
npm install

cd ../backend
npm install
Create a .env file in backend/
PORT=3000
RPC_URL=https://your-node-url
CONTRACT_ADDRESS=0xYourContractAddress
PRIVATE_KEY=your-wallet-private-key
. Run the backend server
node server.js

🧪 Testing with Postman
- Import the API collection
- Set base URL to http://localhost:3000
- Use JSON body for POST requests
