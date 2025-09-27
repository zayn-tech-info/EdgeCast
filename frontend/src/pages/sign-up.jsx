import React, { useState } from "react";
import { useAuthStore } from "../stores/useAuthStores";
import MetaIcon from "../assets/icons/metamaskIcon.png";
import { useNavigate } from "react-router-dom";
import WalletBtn from "../components/walletBtn";

const SignUp = () => {
  const { signup } = useAuthStore();
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  const user = {
    id: Date.now(),
    name: userName,
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    signup(user);
    console.log(user);
    console.log(user.name);
  };

  return (
    <div className="flex items-center justify-center bg-middleGray  h-[100vh]">
      <form
        action=""
        className="bg-white lg:w-[35%] md:w-[55%] md:h-[70%] h-[90%] flex flex-col items-center justify-center w-[90%] rounded-2xl px-5 lg:py-10 md:py-6 py-4"
      >
        <h1 className="text-3xl font-semibold">Welcome</h1>
        <p className="text-2xl">Sign Up</p>
        <WalletBtn />

        <p className="py-4 text-sm font-light">Or</p>
        <div className="flex flex-col w-[80%] gap-1">
          <label htmlFor="" className="font-medium text-sm">
            Username
          </label>
          <input
            type="text"
            placeholder="Enter your username"
            className="rounded-md border-middleGray border-[1px] py-2 px-3"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <button
          onClick={handleSignUp}
          className="bg-[#000000] cursor-pointer w-[80%] py-2 rounded-md text-white mt-5"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
