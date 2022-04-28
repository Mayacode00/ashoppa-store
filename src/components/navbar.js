import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaRegUser,
  FaShoppingBag,
  FaSearch,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <>
      <div className="font-body">
        <div className="bg-gray-700 text-slate-100 h-16 items-center flex">
          <div className="px-2 cursor-pointer lg:hidden" onClick={handleClick}>
            {!nav ? (
              <FaBars size={20} style={{ color: " #7080090" }} />
            ) : (
              <FaTimes size={20} style={{ color: " #7080090" }} />
            )}
          </div>
          <h1 className="text-xl font-bold md:text-3xl pl-2">ASOPPA</h1>
          <div
            className="flex ml-4 justify-evenly px-2
           border-slate-100 border-x h-full md:w-60 "
          >
            <Link to="/women" className="nav-hover">
              WOMEN
            </Link>
            <Link to="/men" className="nav-hover">
              MEN
            </Link>
          </div>
          <div className="w-36 flex justify-between items-center pl-5 pr-2 h-full">
            <FaRegUser
              style={{ color: "#C0C2C9" }}
              className="h-full w-12 p-4 hover:border rounded-lg"
            />
            <FaShoppingBag style={{ color: "#C0C2C9" }} />
          </div>
        </div>
        <div className="flex items-center px-1">
          <input
            className="p-2 mr-2 items-center font-inherit rounded-xl w-10/12 border border-slate-600"
            type="text"
            placeholder="Search for items and brands"
          />
          <FaSearch size={20} style={{ color: " #5053w59" }} className="cursor-pointer hover:text-slate-700"/>
        </div>
        <ul className={!nav ? "hidden" : "nav-md"}>
          <li className="li-style">New in</li>
          <li className="li-style">Clothing</li>
          <li className="li-style">Dresses</li>
          <li className="li-style">Shoes</li>
          <li className="li-style">Sportswear</li>
          <li className="li-style">Accessories</li>
          <li className="li-style">Trending now</li>
          <li className="li-style">Top shop</li>
          <li className="li-style">Face + Body</li>
          <li className="li-style">Brands</li>
          <li className="li-style">MarketPlace</li>
        </ul>
        <ul className="bg-slate-600 px-5 py-2 text-slate-100 text-sm hidden lg:flex justify-evenly">
          <li>New in</li>
          <li>Clothing</li>
          <li>Dresses</li>
          <li>Shoes</li>
          <li>Sportswear</li>
          <li>Accessories</li>
          <li>Trending now</li>
          <li>Top shop</li>
          <li>Face + Body</li>
          <li>Brands</li>
          <li>MarketPlace</li>
        </ul>

        <div className="bg-lime-300 flex justify-between px-5 py-1 items-center text-xs lg:text-sm">
          <p className="promo">WOMEN</p>
          <h1 className="text-center">
            UP TO 70% OFF EVERYTHING!<br></br> ALL HERE AT ASHOPPA SPRING FLING
          </h1>
          <p className="promo">MEN</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
