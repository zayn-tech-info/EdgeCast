import React from "react";
import MetaIcon from "../assets/icons/metamaskIcon.png";
import { useAuthStore } from "../stores/useAuthStores";
import WalletBtn from "../components/walletBtn";

const Login = () => {
  const { login } = useAuthStore();
  return (
    <div className="flex items-center justify-center bg-middleGray  h-[100vh]">
      <form
        action=""
        className="bg-white md:w-[35%] md:h-[85%] h-[80%] flex flex-col items-center w-[80%] rounded-2xl px-5 py-10"
      >
        <h1 className="text-3xl font-semibold">Welcome Back</h1>
        <p className="text-2xl">Sign In</p>
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
          />
        </div>
        <button className="bg-[#000000] w-[80%] py-2 rounded-md text-white mt-5">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
