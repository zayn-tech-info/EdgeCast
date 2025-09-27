import React from "react";
import { NavLink } from "react-router-dom";

import { useAuthStore } from "../stores/useAuthStores";
import { MdOutlineDashboard } from "react-icons/md";
import { MdInsertChartOutlined } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
import { CiWallet } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
// import { LiaTimesSolid } from "react-icons/lia";
import { MdArrowBackIos } from "react-icons/md";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const { logout } = useAuthStore();
  const navMenu = [
    {
      id: 1,
      path: `/`,
      link: "dashboard",
      text: "Dashboard",
      icon: <MdOutlineDashboard />,
    },
    {
      id: 2,
      path: `/predictions`,
      link: "Predictions",
      text: "Predictions",
      icon: <MdInsertChartOutlined />,
    },
    {
      id: 3,
      path: `/watchlist`,
      link: "Watchlist",
      text: "Watchlist",
      icon: <CiBookmark />,
    },
    {
      id: 4,
      path: `/wallet`,
      link: "Wallet",
      text: "Wallet",
      icon: <CiWallet />,
    },
  ];
  return (
    <aside
      className={`fixed top-0 left-0  h-full bg-white dark:bg-primaryBlack dark:text-white border-r-[1px] dark:border-r-primaryBlack border-r-gray-200 text-black w-64 transform ${
        isOpen ? "translate-x-0" : "-translate-x-64"
      } transition-transform lg:translate-x-0 lg:w-64 z-50`}
    >
      {/* mobile */}
      <div className="pt-4 px-4 flex justify-between items-center lg:hidden">
        <div className="flex w-full items-center justify-between pb-4 pl-2 md:px-3">
          <h1 className="text-xl font-semibold ">EDGECAST</h1>

          <div
            onClick={toggleSidebar}
            className={` text-[0.9rem] pl-3 pr-2 rounded-full bg-black text-white text-center border-gray-400 py-[0.6rem] font-semibold ${
              isOpen && "-mr-8"
            }`}
          >
            <MdArrowBackIos />
          </div>
        </div>
      </div>

      <nav className=" h-[95vh]">
        <div className="hidden pl-3 pt-6 lg:block">
          <h1 className="text-xl font-semibold px-3 pb-4 ">EDGECAST</h1>
        </div>
        <div className="flex justify-between flex-col h-[90%]">
          <div className="flex flex-col space-between  justify-between">
            {navMenu.map((menu) => (
              <NavLink
                to={menu?.path}
                className={({ isActive }) =>
                  `cursor-pointer  mx-3 h-12 flex px-3 mb-1 items-center hover:bg-blue-400 hover:text-white gap-2 transition-colors duration-300 ease-in-out rounded-md ${
                    isActive
                      ? " bg-lightBlue dark:bg-lightBlue text-white"
                      : "text-[#000000] dark:text-white "
                  }`
                }
                key={menu?.id}
              >
                <p>{menu.icon}</p>
                <p>{menu?.text}</p>
              </NavLink>
            ))}
          </div>
          <div
            className="text-secondaryBlack dark:text-white cursor-pointer mx-3 flex items-center gap-2"
            onClick={logout}
          >
            <CiLogout />
            <span className="">Log out</span>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
