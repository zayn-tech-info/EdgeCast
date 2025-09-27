import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import MainHeader from "../components/mainheader";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";

const DashboardLayout: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  return (
    <>
      <div className="flex ">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="flex-1 min-h-screen bg-gray-50 dark:bg-secondaryBlack text-black dark:text-white text-left lg:ml-52 md:w-[83%] w-full px-3 md:pr-[0.8rem] md:pl-8 md:px-0 md:right-0 absolute">
          <MainHeader toggleSidebar={toggleSidebar} />
          <main className="md:mt-18 pt-16 md:pt-0  ">
            <Outlet />
          </main>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default DashboardLayout;
