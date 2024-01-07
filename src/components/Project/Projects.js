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
      <div name="projects" className="pt-20">
        <div>
          <h1 className="font text-5xl text-center text-white">
            Projects
          </h1>
        </div>
        <div>
          <div className="flex justify-center gap-10 mt-5 flex-wrap">
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
    </>
  );
}

export default Projects;
