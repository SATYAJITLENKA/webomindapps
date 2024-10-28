import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import LogoA from "../assets/LogoA.png";

const Footer = () => {
  return (
    <div className="h-screen bg-[#011740] text-center text-white overflow-hidden">
      <h4 className="text-4xl  font-medium pt-12">
        Leverage technology to streamline <br /> credit-linked insurance
      </h4>
      <p className="my-4">
        Share a few quick details to understand how we can best help.
      </p>
      <div className="flex items-center justify-center">
        <button className="flex items-center gap-1 bg-white py-2 px-4 text-[#003DB8] font-medium rounded-full">
           Lets Talk <IoIosArrowForward />
        </button>
      </div>

      <div className="bg-white py-4 max-w-[1100px] h-full mt-20 m-auto">
        <div className="flex justify-between px-6 items-center">
          <div>
            <a href="#" className="text- text-2xl font-bold">
              <img src={LogoA} className="h-10" alt="" />
            </a>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter
                className="text-gray-600 hover:text-blue-500"
                size={24}
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                className="text-gray-600 hover:text-blue-700"
                size={24}
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                className="text-gray-600 hover:text-pink-500"
                size={24}
              />
            </a>
          </div>
        </div>
        <hr className="my-4 border-gray-300" />
        <div className="px-6 grid grid-cols-2 md:grid-cols-4 gap-4 ">
          <div className="flex flex-col gap-3 items-center justify-center text-start mt-9">
            <h4 className="font-bold -ms-9 text-black">Products</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="#link1" className="text-gray-600 hover:text-blue-500">
                  Retail Insurance
                </a>
              </li>
              <li>
                <a href="#link2" className="text-gray-600 hover:text-blue-500">
                  LendPro
                </a>
              </li>
              <li>
                <a href="#link2" className="text-gray-600 hover:text-blue-500">
                  EmbedPro
                </a>
              </li>
              <li>
                <a href="#link2" className="text-gray-600 hover:text-blue-500">
                  Console
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3 items-center justify-center text-start mt-9">
            <h4 className="font-bold -ms-9 text-black">Products</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="#link1" className="text-gray-600 hover:text-blue-500">
                  Retail Insurance
                </a>
              </li>
              <li>
                <a href="#link2" className="text-gray-600 hover:text-blue-500">
                  LendPro
                </a>
              </li>
              <li>
                <a href="#link2" className="text-gray-600 hover:text-blue-500">
                  EmbedPro
                </a>
              </li>
              <li>
                <a href="#link2" className="text-gray-600 hover:text-blue-500">
                  Console
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3 items-center justify-center text-start mt-9">
            <h4 className="font-bold -ms-9 text-black">Products</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="#link1" className="text-gray-600 hover:text-blue-500">
                  Retail Insurance
                </a>
              </li>
              <li>
                <a href="#link2" className="text-gray-600 hover:text-blue-500">
                  LendPro
                </a>
              </li>
              <li>
                <a href="#link2" className="text-gray-600 hover:text-blue-500">
                  EmbedPro
                </a>
              </li>
              <li>
                <a href="#link2" className="text-gray-600 hover:text-blue-500">
                  Console
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3 items-center justify-center text-start mt-9">
            <h4 className="font-bold -ms-9 text-black">Products</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="#link1" className="text-gray-600 hover:text-blue-500">
                  Retail Insurance
                </a>
              </li>
              <li>
                <a href="#link2" className="text-gray-600 hover:text-blue-500">
                  LendPro
                </a>
              </li>
              <li>
                <a href="#link2" className="text-gray-600 hover:text-blue-500">
                  EmbedPro
                </a>
              </li>
              <li>
                <a href="#link2" className="text-gray-600 hover:text-blue-500">
                  Console
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
