import React from "react";
// import { useNavigate } from "react-router-dom";
// import Avatar from "../assets/icons/avatar.png";
// import Notification from "../assets/icons/Notification.png";
import Usd from "../assets/icons/usd.jpeg";
import Notification from "../assets/icons/notification.png";
import Gmail from "../assets/icons/gmail.png";
import Avatar from "../assets/icons/avatar.png";
import { useNavigate } from "react-router";
import { IoMenuSharp } from "react-icons/io5";
import { useAuthStore } from "../stores/useAuthStores";
import ThemeToggle from "./themeToggle";
import { IoMdNotificationsOutline } from "react-icons/io";

const MainHeader = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  return (
    // <header className="fixed top-0  right-[10px] w-full pt-[20px] pb-4 h-[6.5rem] bg-[#f3f3f3]  z-40">
    <div className="bg-white dark:bg-secondaryBlack dark:text-white border-b-[1px] border-b-gray-200 dark:border-b-secondaryBlack fixed top-0 right-0 md:w-[88%] md:pl-28 px-3 w-full md:px-10 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3 lg:hidden">
        <button onClick={toggleSidebar} className=" text-2xl">
          <IoMenuSharp />
        </button>
      </div>

      <p className=" dark:text-white text-black">
        <span className="pr-1">Welcome back,</span>
        {user?.name}
      </p>
      <div className="flex items-center gap-3">
        <form
          action=""
          className="border border-gray-200 dark:border-gray-800 px-2 py-[0.35rem] bg-white text-gray-400 dark:text-white dark:bg-secondaryBlack rounded-md hidden md:flex items-center gap-2 "
        >
          <img
            src={Usd}
            className="w-[1.3rem] h-[1.3rem] rounded-full"
            alt=""
          />
          <select name="" id="" className="text-sm">
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
        </form>
        <button
          onClick={() => navigate("/wallet")}
          className="bg-lightBlue duration-300 py-2 transition-colors hover:bg-blue-400 ease-in-out cursor-pointer text-sm px-7 rounded-md text-white"
        >
          Wallet
        </button>
        <IoMdNotificationsOutline className="text-black dark:text-white text-2xl" />
        {/* <img src={Gmail} alt="" /> */}
        <ThemeToggle />
        <img
          src={Avatar}
          className="w-[1.6rem]"
          alt=""
          onClick={() => navigate("/landing-page")}
        />
      </div>
    </div>
    // </header>
  );
};

export default MainHeader;
