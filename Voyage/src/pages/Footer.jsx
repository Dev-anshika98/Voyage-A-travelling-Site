import React from "react";
import { FaGithubSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className= "bg-gray-800 w-[1240px] mx-auto mt-28 py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className='w-full text-3xl font-bold text-[#36afff]'>VOYAGE</h1>
        <p className='py-2'>A website for tourism industry</p>
        <p className=''>Made with ❤ </p>
        <div className='flex justify-between md:w-[75%] my-6'>
        <a href="#" className="transition duration-300 ease-in-out hover:scale-125 hover:text-[#ff35a7]" target="blank">
            <FaInstagram size={30} />
          </a>
          <a href="#" className="transition duration-300 ease-in-out hover:scale-125 hover:text-[#36afff]" target="blank">
            
            <FaTwitterSquare size={30} />
          </a>
          <a href="#" className="transition duration-300 ease-in-out hover:scale-125 hover:text-[#2ddc3c]" target="blank">
            <FaGithubSquare size={30} />
          </a></div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-[#36afff]">SUPPORT</h6>
          <ul>

            <a href="/guide" className="pb-2">
              <li className="pt-2 w-max text-sum hover:border-b hover:border-[#36afff]">Guides</li>
            </a>
            <a href="/reviews" className="pb-2">
              <li className="pt-2 w-max text-sum hover:border-b hover:border-[#36afff]">Reviews</li>
            </a>
            <a href="/faq" className="pb-2">
              <li className="pt-2 w-max text-sum hover:border-b hover:border-[#36afff]">FAQ</li>
            </a>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-[#36afff]">FOLLOW US</h6>
          <ul>
            <a href="#" className="pb-2">
              <li className="pt-2 w-max text-sum hover:border-b hover:border-[#36afff]">Facebook</li>
            </a>
            <a href="#"className="pb-2" target="blank">
              <li className="pt-2 w-max text-sum hover:border-b hover:border-[#36afff]">Twitter</li>
            </a>
            <a href="#" className="pb-2" target="blank">
              <li className="pt-2 w-max text-sum hover:border-b hover:border-[#36afff]">Instagram</li>
            </a>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-[#36afff]">LEGAL</h6>
          <ul>
            <a href="/policy" className="pb-2" target="blank">
              <li className="pt-2 w-max text-sum hover:border-b hover:border-[#36afff]">Privacy Policy</li>
            </a>
            <a href="/terms" className="pb-2">
              <li className="pt-2 w-max text-sum hover:border-b hover:border-[#36afff]">Terms&Conditions</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;