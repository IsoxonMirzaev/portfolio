import React from "react";
import { Link } from "react-scroll";
import { BiHomeAlt2 } from "react-icons/bi";
import { GoPerson } from "react-icons/go";
import { BsBriefcase, BsClipboardData } from "react-icons/bs";

function Navbar() {
  return (
    <div>
      <nav className="flex justify-between py-5 px-20 bg-[#183D3D] text-white w-full z-10 text-center fixed"> 
        <Link className="text-3xl font italic m-auto">Mirzayev</Link>
      </nav>
      <div className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
        <div className="container mx-auto">
          <div className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto flex px-5 justify-between text-2xl text-white/50 items-center">
            <Link to="home" smooth duration={500} className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
              <BiHomeAlt2 />
            </Link>
            <Link to="about" smooth duration={500} className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
              <GoPerson />
            </Link>
            <Link to="projects" smooth duration={500} className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
              <BsBriefcase />
            </Link>
            <Link to="experience" smooth duration={500} className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
              <BsClipboardData />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
