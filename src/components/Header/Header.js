import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import Avatar from "../../images/portfolio.png";
import { GoMoveToBottom } from "react-icons/go";
import { Link } from "react-scroll";

function Header() {
  const [text] = useTypewriter({
    words: [
      "Frontend Developer",
      "React JS Developer",
      "Programmer",
      "Men Dasturchiman",
    ],
    loop: 0,
  });
  return (
    <>
      <div
        name="home"
        className="flex flex-wrap justify-around text-center lg:text-left pt-40 h-[75vh] text-white"
      >
        <div className="mt-10">
          <h1 className="text-4xl font-medium">Hi There !</h1>
          <h1 className="text-3xl mt-1">
            I'm <span>Isoxon Mirzayev</span>
          </h1>
          <h1 className="text-3xl mb-5 mt-1">I'm a Junior Developer</h1>
          <span className="text-xl italic font-medium pt-5">{text}</span>
          <a
            href="https://t.me/Isoxon_Mirzayev_Web"
            target="_blank"
            className="block w-52 h-10 bg-black/40 rounded-md mt-6 text-center pt-2"
          >
            Contact me by Telegram
          </a>
        </div>
        <div>
          <img
            src={Avatar}
            alt=""
            className="w-96 h-96 object-cover rounded-xl mt-10 md:-mt-10"
          />
        </div>
      </div>
    </>
  );
}

export default Header;
