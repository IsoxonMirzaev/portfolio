import React from "react";
import Img1 from "../../images/clock.png";
import Img2 from "../../images/game.png";
import Img3 from "../../images/tourism.png";
import Img4 from "../../images/travelar.png";
import { GoMoveToBottom } from "react-icons/go";
import { Link } from "react-scroll";

function Projects() {
  return (
    <>
      <div name="projects">
        <div>
          <h1 className="font text-5xl text-center mt-10 text-white">
            Projects
          </h1>
        </div>
        <p> </p>
        <div>
          <div className="flex justify-center  gap-10 mt-5 flex-wrap">
            <a href="https://clock-uzbekistan.netlify.app/" target="_blank" className="w-[500px]">
              <img src={Img1} alt="" />
            </a>
            <a href="https://quick-summer-game.netlify.app/" target="_blank" className="w-[500px]">
              <img src={Img2} alt="" />
            </a>
          </div>
          <div className="flex justify-center pb-10 gap-10 mt-5 flex-wrap">
            <a href="https://www.al-rashidtourism.uz/" target="_blank" className="w-[500px]">
              <img src={Img3} alt="" />
            </a>
            <a href="https://travelar-site.netlify.app/" target="_blank" className="w-[500px]">
              <img src={Img4} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="w-14 h-14 mt-5 cursor-pointer rounded-full bg-[#93B1A6] p-4 text-2xl text-white animate-bounce m-auto">
        <Link to="experience" smooth duration={700}>
          <GoMoveToBottom />
        </Link>
      </div>
    </>
  );
}

export default Projects;
