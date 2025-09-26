import React from "react";
// import X from "../assets/icons/x.png";
// import Instagram from "../assets/icons/instagram.png";
// import Facebook from "../assets/icons/facebook.png";
// import Linkedin from "../assets/icons/linkedin.png";

const Footer = () => {
  return (
    <div className="lg:pl-[19rem] lg:px-16 md:px-10 px-2 border-t-[1px] py-5 border-t-gray-200">
      <div className="flex md:flex-row flex-col gap-6 md:gap-0   justify-between ">
        <div>
          <h1 className="text-xl font-semibold text-[#0F2E0E]">About Us</h1>
          <p className="font-[300] text-sm md:w-[50%] pt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exe
          </p>
        </div>

        <div className="flex text-sm font-[300] items-start md:w-[50%] gap-4 justify-between md:flex-row flex-col">
          <ul className="md:w-[50%] flex flex-col gap-2">
            <li className="tet-2xl pb-3 font-semibold text-[#0F2E0E]">
              Quick Links
            </li>
            <li>Cart</li>
            <li>Home</li>
            <li>Wishlist</li>
          </ul>
          <ul className="md:w-[50%] flex flex-col gap-3">
            <li className="tet-2xl font-semibold text-[#0F2E0E] pb-3">
              Contact Us
            </li>
            <li>seyecollet@gmail.com</li>
            <li>0816-6782-879</li>
            <li>5, Mawe Road, adeniji Street, Lekki, Marwa</li>
          </ul>
        </div>
      </div>

      <div className="flex items-center gap-1 mt-4">
        {/* <img src={X} alt="" className="w-[1rem]" />
        <img src={Linkedin} alt="" className="w-[1rem]" />
        <img src={Facebook} alt="" className="w-[1rem]" />
        <img src={Instagram} alt="" className="w-[1rem]" /> */}
      </div>
    </div>
  );
};

export default Footer;
