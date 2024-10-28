import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import HeroOne from "../assets/HeroOne.jpg";
import HeroTwo from "../assets/HeroTwo.png";


const HeroSection = () => {
  return (
    <>
      <div className="container m-auto">
        <div className="flex h-[80vh] items-center">
          <div className="w-1/2">
            <h4 className="text-5xl font-bold">
              Distribute and manage <br /> insurance business in <br />
              <span className="text-[#EE1B30]">one platform</span>
            </h4>
            <p className="mt-7">
              Manage your insurance business seamlessly using Webomindapps{" "}
              <br /> assurance platform. Increase revenue, expand product
              offerings.
            </p>
            <button className="flex items-center gap-2 bg-[#EE1B30] mt-6 py-2 px-3 text-white rounded-full">
               Schedule Demo <IoIosArrowForward />
            </button>
          </div>

          <div className="w-1/2 relative">
          <img src={HeroOne} alt="" />
          <img src={HeroTwo} className="absolute h-44 -left-28 top-52" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
