import React from "react";

function About() {
  return (
    <>
      <div name="about" className="h-screen">
        <h1 className="text-center mb-10 text-5xl font text-white">About Me</h1>
        <p className="w-2/3 h-40 text-center m-auto text-white text-xl">
          I am Isokhan Mirzayev. I am 12 years old. I started web programming in
          4th grade. I currently know Html, Css, Javascript, Tailwind, Sass,
          React, and NextJS.
        </p>
        <p className="w-2/3 h-40 text-center m-auto text-white text-xl mt-10">
          My address is Namangan city of Uzbekistan, Obod neighborhood, 1 house.
          My phone number is +998 90 752 95 02
        </p>
      </div>
    </>
  );
}

export default About;
