import React, { useEffect } from "react";
import { Element } from "react-scroll";
import PorifleImg from "../assets/balaji.jpeg";

const About = () => {
  useEffect(() => {
    // Add hover effect to skill tags dynamically
    const skillTags = document.querySelectorAll(".bg-indigo-100");
    skillTags.forEach((tag) => {
      tag.addEventListener("mouseover", () => {
        tag.classList.remove("bg-indigo-100", "text-black");
        tag.classList.add("bg-blue-900", "text-white");
      });
      tag.addEventListener("mouseout", () => {
        tag.classList.remove("bg-blue-900", "text-white");
        tag.classList.add("bg-indigo-100", "text-black");
      });
    });
  }, []);

  return (
    // Add `scroll-margin-top` to ensure proper spacing during scrolling
    <Element
      id="aboutus"
      className="bg-gradient-to-r from-indigo-800 to-blue-900 min-h-screen flex items-center justify-center p-4 "
    >
      <div className="bg-white dark:bg-white-800 rounded-xl shadow-2xl max-w-5xl w-full py-20 px-20 transition-all duration-300 animate-fade-in">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 text-center mb-8 md:mb-0">
            <img
              src={PorifleImg}
              alt="Profile"
              className="rounded-full w-64 h-64 mx-auto mb-4 border-4 border-indigo-800 dark:border-blue-900 transition-transform duration-300 hover:scale-105"
            />
            <h1 className="text-5xl font-bold text-black mb-2">I'm Balaji</h1>
            <p className="text-xl text-black">Passionate Web Developer</p>
            <a
          href="https://drive.google.com/drive/folders/1Kz9A1HvYVYL1Gihlp-TwsSKHjHTFgDnj"  // Replace this with your resume URL or file path
          target="_blank"  // Optional: Opens in a new tab
          rel="noopener noreferrer"  // Optional: For security when using target="_blank"
        >
            <button className="mt-4 bg-indigo-800 text-white px-6 py-3 rounded-e-full hover:bg-blue-900 transition-colors duration-300 text-lg">
              Resume
            </button>
            </a>
           
          </div>
          <div className="md:w-2/3 md:pl-8">
            <h1 className="text-5xl font-semibold text-black mb-4">About Me</h1>
            <p className="text-lg text-black mb-6">
            Hey👋! A dedicated developer passionate about creating high-performance, scalable systems. Skilled in Java Development and Mern Stack, I love solving complex problems and optimizing backend solutions.
            Constantly learning and pushing the boundaries of what's possible in development, I thrive in collaborative environments, contributing to and learning from my peers
            </p>
            <h2 className="text-2xl font-semibold text-black mb-4">Skills</h2>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-indigo-100 text-black px-4 py-2 rounded-full text-md">
                JavaScript
              </span>
              <span className="bg-indigo-100 text-black px-4 py-2 rounded-full text-md">
                React
              </span>
              <span className="bg-indigo-100 text-black px-4 py-2 rounded-full text-md">
                Node.js
              </span>
              <span className="bg-indigo-100 text-black px-4 py-2 rounded-full text-md">
                Express.js
              </span>
              <span className="bg-indigo-100 text-black px-4 py-2 rounded-full text-md">
                SQL
              </span>
            </div>
            <h2 className="text-2xl font-semibold text-black mb-4">
              Contact Information
            </h2>
            <ul className="space-y-3 text-lg text-black">
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-3 text-black"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                balajisenthilkumar151@gmail.com
              </li>
              <li className="flex items-center space-x-3">
                <i className="space-x-6 fa-solid fa-graduation-cap"></i>
                <span>MCET - Pollachi</span>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-3 text-black"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                Pollachi, TamilNadu, India
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;
