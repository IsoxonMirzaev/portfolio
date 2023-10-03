import React from "react";
import Img1 from "../../images/html-logo.png";
import Img2 from "../../images/css-logo.png";
import Img3 from "../../images/js-logo.png";
import Img4 from "../../images/tailwind-logo.png";
import Img5 from "../../images/react-logo.png";
import Img6 from "../../images/github-logo.png";
import { Link } from "react-scroll";
import {AiOutlineVerticalAlignTop} from "react-icons/ai"

function Experience() {
  return (
    <div name="experience">
      <div>
        <h1 className="font text-5xl text-white text-center mt-10">
          My Experience
        </h1>
      </div>
      <p className="text-xl text-white text-center mt-5">
        These are the things I have learned and work with
      </p>
      <div className="flex justify-center gap-10 mt-5 flex-wrap">
        <img src={Img1} className="w-[200px] h-[200px]" alt="" />
        <img src={Img2} className="w-[200px] h-[200px]" alt="" />
        <img src={Img3} className="w-[200px] h-[200px]" alt="" />
      </div>
      <div className="flex justify-center gap-10 mt-10 flex-wrap">
        <img src={Img4} className="w-[200px] h-[200px]" alt="" />
        <img src={Img5} className="w-[200px] h-[200px]" alt="" />
        <img src={Img6} className="w-[200px] h-[200px]" alt="" />
      </div>
    </div>
  );
}

export default Experience;