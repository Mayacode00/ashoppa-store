import React from "react";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-200 border mt-10 p-8 justify-between md:flex">
        <div className="mb-5">
          <h2 className="h2-style">HELP & INFORMATION</h2>
          <div className="div-display">
            <p className="p-style-two">Help</p>
            <p className="p-style-two">Track Order</p>
            <p className="p-style-two">Delivery & returns</p>
          </div>
        </div>
        <div className="mb-5">
          <h2 className="h2-style">ABOUT ASHOPPA</h2>
          <div className="div-display">
            <p className="p-style-two">About Us</p>
            <p className="p-style-two">Careers in ASHOPPA</p>
            <p className="p-style-two">Corporate responsibiliy</p>
            <p className="p-style-two">Investors' site</p>
          </div>
        </div>
        <div className="mb-5">
          <h2 className="h2-style">MORE FROM ASHOPPA</h2>
          <div className="div-display">
            <p className="p-style-two">Mobile and AShOPPA apps</p>
            <p className="p-style-two">ASHOPPA Marketplace</p>
            <p className="p-style-two">Gift vouchers</p>
            <p className="p-style-two">Black friday</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 text-xs p-5 flex items-center justify-between">
        <div className="flex items-center">
          <FaRegCopyright size={10} className="mr-2" />
          <p className="">2022 ASHOPPA</p>
        </div>
        <div className="flex justify-evenly md:w-60">
          <p>Privacy & Cookies</p>
          <p className="border-gray-300 border-x px-2">Ts' & Cs'</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
