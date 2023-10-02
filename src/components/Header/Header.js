import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import Avatar from "../../images/portfolio.jpg";
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
        className="flex flex-wrap justify-around text-center lg:text-left pt-40 h-screen text-white"
      >
        <div className="mt-10">
          <h1 className="text-4xl font-medium">Hi There !</h1>
          <h1 className="text-3xl mt-1">
            I'm <span>Isoxon Mirzayev</span>
          </h1>
          <h1 className="text-3xl mb-5 mt-1">I'm a Junior Developer</h1>
          <span className="text-xl italic font-medium pt-5">{text}</span>
          <a
            href="https://t.me/isoxonwebfrontend"
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
      <div className="w-14 h-14 mt-52 md:-mt-16 cursor-pointer rounded-full bg-[#93B1A6] p-4 text-2xl text-white animate-bounce m-auto">
        <Link to="about" smooth duration={700}>
          <GoMoveToBottom />
        </Link>
      </div>
    </>
  );
}

export default Header;
