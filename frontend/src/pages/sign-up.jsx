import React from "react";
import { useAuthStore } from "../stores/useAuthStores";
import MetaIcon from "../assets/icons/metamaskIcon.png";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { signup } = useAuthStore();
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    signup();
  };
  return (
    <div className="flex items-center justify-center bg-middleGray  h-[100vh]">
      <form
        action=""
        className="bg-white lg:w-[35%] md:w-[55%] md:h-[85%] h-[80%] flex flex-col items-center w-[90%] rounded-2xl px-5 py-10"
      >
        <h1 className="text-3xl font-semibold">Welcome</h1>
        <p className="text-2xl">Sign Up</p>
        <div className="bg-middleGray/50 shadow-sm cursor-pointer mt-3 justify-center flex items-center gap-2 py-2 rounded-md w-[60%] mx-auto">
          <img src={MetaIcon} alt="" className="w-[1rem]" />
          <p className="text-sm ">Connect EVM wallet</p>
        </div>
        <p className="py-4 text-sm font-light">Or</p>

        <div className="flex flex-col w-[80%] gap-1">
          <label htmlFor="" className="font-medium text-sm">
            Email
          </label>
          <input
            type="text"
            placeholder="Enter your email"
            className="rounded-md border-middleGray border-[1px] py-2 px-3"
          />
        </div>
        <div className="flex flex-col py-2 w-[80%] gap-1">
          <label htmlFor="" className="font-medium text-sm">
            Password
          </label>
          <input
            type="text"
            placeholder="Enter your password"
            className="rounded-md border-middleGray placeholder:text-sm border-[1px] py-2 px-3"
          />
        </div>
        <div className="flex flex-col w-[80%] gap-1">
          <label htmlFor="" className="font-medium placeholder:text-sm text-sm">
            Confirm Password
          </label>
          <input
            type="text"
            placeholder="Confirm your password"
            className="rounded-md border-middleGray placeholder:text-sm border-[1px] py-2 px-3"
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
