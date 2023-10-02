import React from "react";
import { GoMoveToBottom } from "react-icons/go";
import { Link } from "react-scroll";

function About() {
  return (
    <>
      <div name="about" className="h-screen pt-20">
        <h1 className="text-center my-10 text-5xl font text-white">About Me</h1>
        <p className="w-2/3 text-center m-auto text-white text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
          aspernatur suscipit laudantium, ad aliquid est deleniti autem sint
          explicabo libero blanditiis magnam error quod fugit maiores ut ipsam
          ea mollitia? Est praesentium molestiae aliquam pariatur animi cumque,
          temporibus minus consequuntur nulla repellendus debitis quo eos,
          aperiam culpa. Repellat, facilis fugit.
        </p>
        <p className="w-2/3 text-center m-auto text-white text-xl mt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
          aspernatur suscipit laudantium, ad aliquid est deleniti autem sint
          explicabo libero blanditiis magnam error quod fugit maiores ut ipsam
          ea mollitia? Est praesentium molestiae aliquam pariatur animi cumque,
          temporibus minus consequuntur nulla repellendus debitis quo eos,
          aperiam culpa. Repellat, facilis fugit.
        </p>
      </div>
      <div className="w-14 h-14 mt-20 md:-mt-40 cursor-pointer rounded-full bg-[#93B1A6] p-4 text-2xl text-white animate-bounce m-auto">
        <Link to="projects" smooth duration={700}>
          <GoMoveToBottom />
        </Link>
      </div>
    </>
  );
}

export default About;
