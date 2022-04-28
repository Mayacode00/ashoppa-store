import React from "react";
import Man from "../img/men.avif";
import Gbl from "../img/gbl.avif";
import Polo from "../img/polo.avif";
import Unisex from "../img/unisex.avif";
import Mentile from "../img/men-tile1.avif";
import Mentiles from "../img/men-tile-2.avif";
import Berg from "../img/berghaus.avif";
import Footer from "../components/footer";

const Men = () => {
  return (
    <>
      <div className="flex mx-0 cursor-default h-96 md:h-half md:mx-10">
        <div className="md:w-half">
          <img
            src={Man}
            className="translate-y-28 absolute h-64 right-0 md:static md:translate-y-0 md:h-half md:w-half"
          />
        </div>
        <div className="bg-gradient-to-b from-green-400 to-teal-400 w-full md:w-9/12">
          <h1 className="p-6 text-5xl font-black lg:text-8.5xl md:text-8xl font-bold">
            THE SHOPPA SPRING<br></br> FLING
          </h1>
          <p className="font-bold  py-2 pl-6 lg:text-5xl md:text-3xl">
            UP TO 70% OFF ALL
          </p>
          <p className="bg-white absolute border-black border w-fit p-1 font-medium text-xs md:ml-5">
            Limited time only, while stock last, Styles marked down as shown
          </p>
        </div>
      </div>
      <div className="my-10 place-content-center mx-5 flex flex-wrap">
        <div className="img-style">
          <img src={Polo} alt="cloth" />
          <h1 className="h1-style">POLO RALPH LAUREN</h1>
          <p className="p-style">Horse play</p>
        </div>
        <div className="img-style">
          <img src={Unisex} alt="cloth" />
          <h1 className="h1-style">NIKE-STALGIA</h1>
          <p className="p-style">The retro collection</p>
        </div>
        <div className="img-style">
          <img src={Gbl} alt="cloth" />
          <h1 className="h1-style">HOLIDAY PRINTS</h1>
          <p className="p-style">Home + Away</p>
        </div>
        <div className="img-style">
          <img src={Berg} alt="cloth" />
          <h1 className="h1-style">BERGHAUS</h1>
          <p className="p-style">The logo to know</p>
        </div>
      </div>
      <div className="mx-6 place-content-center text-center flex flex-wrap">
        <div>
          <img src={Mentile} alt="photo" className="img-style-three" />
          <h1 className="h1-style">KICKS IN</h1>
          <p className="p-style">Wavy looks</p>
          <button className="btn-style">SHOP NOW</button>
        </div>
        <div>
          <img src={Mentiles} alt="photo" className="img-style-three" />
          <h1 className="h1-style">VINTAGE WORD UP</h1>
          <p className="p-style">Ft. new ASHOPPA Unrvlld Supply</p>
          <button className="btn-style">SHOP NOW</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Men;
