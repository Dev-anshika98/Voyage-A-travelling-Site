import React from "react";
// import { Link } from "react-router-dom";
import banner from "../assets/banner2.png";

const Banner = () => {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center h-screen py-36 bg-fixed"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="container">
        <h1 className="text-6xl capitalize text-gray-800 font-bold mb-4 mt-36 ml-8">
         VOYAGE
        </h1>
        <p className="text-3xl  text-black  font-semibold mb-4 ml-8">
          Discover diverse travel adventures, making your journeyy unforgettable.
        </p>
        <div class="sm:space-x-4 space-x-0 flex flex-col items-center sm:flex-row sm:ml-8">
                {/* <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
              <button className="hover:bg-[#55bbff] bg-gray-800 w-[140px] h-[50px]   rounded-md font-medium my-4 py-3 text-white hover:text-black">
                  SIGN UP
              </button>
                </a> */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
              <button className="hover:bg-blue-300 bg- gray-800   w-[140px] h-[50px]  rounded-md font-bold my-4 py-3 text-black hover:text-black">
                  KNOW MORE ->
              </button>
                </a>
            </div>
        
      </div>
    </div>
  );
};

export default Banner;
