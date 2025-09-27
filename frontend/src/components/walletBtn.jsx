import { useEffect, useState } from "react";
import { ethers } from "ethers";
import MetaIcon from "../assets/icons/metamaskIcon.png";

const WalletBtn = () => {
  const [account, setAccount] = useState(null);

  async function connectWallet(e) {
    e.preventDefault();
    if (window.ethereum) {
      // Check MetaMask
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        if (accounts && accounts.length > 0) {
          setAccount(accounts[0]);
        } else {
          console.log("No account returned");
        }
        setAccount(accounts[0]);
      } catch (err) {
        console.error("User rejected request:", err);
      }
    } else {
      alert("MetaMask not detected. Install it from https://metamask.io");
    }
  }

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        setAccount(accounts[0] || null);
      });
    }
    console.log(account);
  }, []);

  return (
    <button
      onClick={!account ? connectWallet : undefined}
      className="bg-middleGray/50 shadow-sm cursor-pointer mt-3 justify-center flex items-center gap-2 py-2 rounded-md w-[60%] mx-auto"
    >
      <img src={MetaIcon} alt="" className="w-[1rem]" />
      <p className="text-sm ">
        {account
          ? `Connected: ${account.slice(0, 6)}...`
          : "Connect EVM Wallet"}
      </p>
    </button>
  );
};

export default WalletBtn;
