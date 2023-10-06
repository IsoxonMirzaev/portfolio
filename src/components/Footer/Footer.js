import React from "react";
import { BsGithub, BsLinkedin, BsTelegram } from "react-icons/bs";

function Footer() {
  return (
    <div>
      <footer className="text-white flex justify-between py-5 flex-wrap items-center px-10">
        <div>
          <h1>Made by Isoxon Mirzayev</h1>
        </div>
        <div>
          <p>CopyRight © 2023</p>
        </div>
        <div className="flex gap-10 text-2xl">
          <a href="https://github.com/IsoxonMirzaev" target="blank" className="cursor-pointer">
            <BsGithub />
          </a>
          <a href="https://www.linkedin.com/in/isoxon-mirzayev-0ab045283/" target="_blank">
            <BsLinkedin />
          </a>
          <a href="https://web.telegram.org/k/#@ISOXON_WEB_FRONTEND" target="_blank">
            <BsTelegram />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
