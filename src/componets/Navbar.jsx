import LogoA from "../assets/LogoA.png";
import { IoIosArrowForward } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="shadow-lg">
      <div className="container m-auto flex justify-between items-center p-4">
        <a href="#" className="text- text-2xl font-bold">
          <img src={LogoA} className="h-10" alt="" />
        </a>
        <ul className="flex gap-9 items-center font-normal">
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Industries</a>
          </li>
          <li>
            <a href="#">Company</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
          <li>
            <button className="flex items-center gap-2 bg-[#EE1B30] py-2 px-3 text-white rounded-full">
              Schedule Demo <IoIosArrowForward />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
