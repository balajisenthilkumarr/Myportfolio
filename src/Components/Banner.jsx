import React from "react";
import { Element } from "react-scroll";
import PorifleImg from "./PorifleImg";

function Banner() {
  return (
    <Element id="home" className="bg-gray-900 text-white min-h-screen">
      <div className="lg:flex lg:h-screen lg:items-center px-6 sm:px-9 pt-24 sm:pt-32">
        {/* Text Section */}
        <div className="lg:w-1/2 max-w-3xl text-center lg:text-left px-4 sm:px-8">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl md:text-7xl">
            Hi There,
            <span className="sm:block"> I'm BalajiSenthilkumar </span>
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 mt-4">
            I Am Into MERN Stack Development
          </h2>
          {/* Certification Button */}
          <a
            className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-purple-600 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75 transform transition duration-200 hover:scale-110"
            href="https://drive.google.com/drive/folders/1sCYQJ9ii14CWbLcTtssYDXfHyrlki_K1"
          >
            <span className="block rounded-full bg-transparent px-8 py-3 text-lg sm:text-xl font-medium">
              View My Certification
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 ml-2 sm:w-6 sm:h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 6l6 6-6 6"
              />
            </svg>
          </a>

          {/* Social Icons */}
          <div className="flex flex-wrap justify-center lg:justify-start space-x-5 mt-6 sm:mt-8">
            <a
              href="https://github.com/balajisenthilkumarr"
              className="text-3xl sm:text-xl lg:text-5xl hover:text-gray-400 transition-transform transform hover:scale-110"
              aria-label="GitHub"
            >
              <i className="fa-brands fa-github"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/balaji--senthilkumar"
              className="text-3xl sm:text-4xl lg:text-5xl hover:text-blue-400 transition-transform transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="mailto:balajisenthilkumar151@gmail.com"
              className="text-3xl sm:text-4xl lg:text-5xl hover:text-red-400 transition-transform transform hover:scale-110"
              aria-label="Email"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
            <a
              href="https://wa.me/917708277646"
              className="text-3xl sm:text-4xl lg:text-5xl hover:text-green-400 transition-transform transform hover:scale-110"
              aria-label="WhatsApp"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>

        {/* Profile Image Section */}
        <div className="lg:w-1/2 mx-auto mt-12 lg:mt-0 flex justify-center lg:justify-end relative">
          <PorifleImg />
        </div>
      </div>
    </Element>
  );
}

export default Banner;
