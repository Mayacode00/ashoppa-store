import React from "react";
import Bckgrd from "../img/landing.jpg";
import Bckgrd2 from "../img/landing2.avif";
import Bckgrd3 from "../img/landing3.avif";
import Bckgrd4 from "../img/landing4.avif";
import { Link } from "react-router-dom";
import Navbar from "./navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="">
        <div className="px-5 flex overflow-x-scroll">
          <img className="img-style-three" src={Bckgrd} alt="/" />
          <img className="img-style-three" src={Bckgrd2} alt="/" />
          <img className="img-style-three" src={Bckgrd3} alt="/" />
          <img className="img-style-three" src={Bckgrd4} alt="/" />
        </div>
        <div className="text-center my-6">
          <Link
            className="border-black border p-3 hover:text-cyan-500 transition ease-in"
            to="/women"
          >
            SHOP WOMEN
          </Link>
          <Link
            className="border-black border p-3 ml-2 hover:text-cyan-500 transition ease-in"
            to="/men"
          >
            SHOP MEN
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
