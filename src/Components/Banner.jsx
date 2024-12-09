import React from "react";
import { Element } from "react-scroll";
import PorifleImg from "./PorifleImg";

function Banner() {
  return (
    <>
      <Element id="home" className="bg-gray-900 text-white min-h-screen">
        <div className="lg:flex lg:h-screen lg:items-start px-9 pt-32">
          {" "}
          {/* Added pt-32 to push content below the navbar */}
          <div className="lg:w-1/2 max-w-3xl text-left ">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent sm:text-6xl md:text-7xl">
              Hi There,
              <span className="sm:block"> I'm BalajiSenthilkumar </span>
            </h1>
            <div>
              <h1 className="text-5xl font-bold mb-9 mt-3">
                I am into Fulstackdevelpoment
              </h1>
            </div>
            <div>
              <a
                className="group inline-flex items-center justify-between rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-purple-600 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75 transform transition duration-200 hover:scale-110"
                href="https://drive.google.com/drive/folders/1sCYQJ9ii14CWbLcTtssYDXfHyrlki_K1"
              >
                <span className="block rounded-full bg-transparent px-8 py-3 text-xl font-medium">
                  View My Certification
                </span>

                {/* Right Arrow Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 ml-1" // Adjust size and margin as needed
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
              <div className=" ml-4 my-7 flex-row space-x-7 h-40 ">
                <a href="https://github.com/balajisenthilkumarr">
                  <i className="fa-brands fa-github text-5xl"></i>
                </a>

                <a href="https://www.linkedin.com/in/balaji--senthilkumar">
                  <i className="fa-brands fa-linkedin text-5xl"></i>
                </a>
                <a href="mailto:balajisenthilkumar151@gmail.com">
                  <i className="fa-solid fa-envelope text-5xl"></i>
                </a>
                <a href="https://wa.me/917708277646">
                  <i className="fa-brands fa-whatsapp text-5xl"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 mx-auto flex justify-end relative">
            <PorifleImg />
          </div>
        </div>
      </Element>
    </>
  );
}

export default Banner;
