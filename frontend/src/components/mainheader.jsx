import React from "react";
// import { useNavigate } from "react-router-dom";
// import Avatar from "../assets/icons/avatar.png";
// import Notification from "../assets/icons/Notification.png";
import Search from "../assets/icons/search.png";
import Notification from "../assets/icons/notification.png";
import Gmail from "../assets/icons/gmail.png";
import Avatar from "../assets/icons/avatar.png";
import { useNavigate } from "react-router";
import { IoMenuSharp } from "react-icons/io5";

const MainHeader = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  return (
    // <header className="fixed top-0  right-[10px] w-full pt-[20px] pb-4 h-[6.5rem] bg-[#f3f3f3]  z-40">
    <div className="bg-white fixed top-0 right-0 md:w-[88%] md:pl-28 px-3 w-full md:px-10 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3 lg:hidden">
        <button onClick={toggleSidebar} className=" text-2xl">
          <IoMenuSharp />
        </button>
      </div>

      <form
        action=""
        className="border border-gray-200 px-3 bg-white rounded-lg hidden md:flex items-center gap-2 w-[30%] md:w-[40%]"
      >
        <img src={Search} className="w-[0.8rem]" alt="" />
        <input
          type="text"
          placeholder="Search"
          className="py-2 outline-none  rounded-md"
        />
      </form>
      <div className="flex items-center gap-3">
        <img src={Notification} alt="" />
        <img src={Gmail} alt="" />
        <img src={Avatar} className="w-[1.6rem]" alt="" />
        <p className="text-sm">John Doe</p>
      </div>
    </div>
    // </header>
  );
};

export default MainHeader;
