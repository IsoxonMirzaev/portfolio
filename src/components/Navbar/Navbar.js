import React from "react";
import { Link } from "react-scroll";
import { FaGithub, FaTelegram, FaLinkedin } from "react-icons/fa";
  
function Navbar() {
  return (
    <div>
      <nav className="flex justify-between py-5 px-20 bg-transparent text-white w-full z-10 fixed">
        <div className="w-1/3">
          <ul className="flex gap-5 text-center">
            <li>
              <Link to="home" className="cursor-pointer" smooth>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" className="cursor-pointer" smooth>
                About
              </Link>
            </li>
            <li>
              <Link to="projects" className="cursor-pointer" smooth>
                Projects
              </Link>
            </li>
            <li>
              <Link to="experience" className="cursor-pointer" smooth>
                Experience
              </Link>
            </li>
          </ul>
        </div>
        <Link className="text-4xl font italic w-1/3 text-center">Mirzayev</Link>
        <div className="w-1/3">
          <ul className="flex gap-5 text-center">
            <li>
              <a href="https://t.me/Isoxon_Mirzayev_Web" target="_blank">
                <FaTelegram className="text-3xl" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/isoxon-mirzayev-0ab045283/"
                target="_blank"
              >
                <FaLinkedin className="text-3xl" />
              </a>
            </li>
            <li>
              <a href="https://github.com/IsoxonMirzaev" target="_blank">
                <FaGithub className="text-3xl" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
