import React from "react";
import Gown from "../img/gowns.avif";
import Corset from "../img/top-corset.avif";
import Fluffy from "../img/fluffy-dress.avif";
import Top from "../img/topshop.avif";
import Heels from "../img/heels.avif";
import Beach from "../img/beach.avif";
import Hair from "../img/hair.avif";
import Footer from "../components/footer";
const Women = () => {
  return (
    <>
      <div className="flex mx-0 cursor-default h-96 md:h-half md:mx-10">
        <div className="md:w-half">
          <img
            src={Gown}
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
      <div className="flex my-10 mx-5 place-content-center flex-wrap">
        <div className="img-style">
          <img src={Corset} alt="cloth" />
          <h1 className="h1-style">TOP OF THE CROPS</h1>
          <p className="p-style">Night-out needs</p>
        </div>
        <div className="img-style">
          <img src={Fluffy} alt="cloth" />
          <h1 className="h1-style">FEEL-GOOD DRESSES</h1>
          <p className="p-style">Bare-leg season </p>
        </div>
        <div className="img-style">
          <img src={Top} alt="cloth" />
          <h1 className="h1-style">TOPSHOP</h1>
          <p className="p-style">One word: iconic</p>
        </div>
        <div className="img-style">
          <img src={Heels} alt="cloth" />
          <h1 className="h1-style">SKY-HIGH HEELS</h1>
          <p className="p-style">Bearing your sole</p>
        </div>
      </div>
      <div className="flex mx-6 place-content-center text-center flex-wrap">
        <div>
          <img src={Beach} alt="photo" className="img-style-three" />
          <h1 className="h1-style">SURFs UP</h1>
          <p className="p-style">Seas of the day</p>
          <button className="btn-style">SHOP NOw</button>
        </div>
        <div>
          <img src={Hair} alt="photo" className="img-style-three" />
          <h1 className="h1-style">ASHOPPA LUXE</h1>
          <p className="p-style">The luxe life you choose</p>
          <button className="btn-style">SHOP THE BRAND</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Women;
