import React from "react";
import { Link, Element } from "react-scroll";
import contact from "../assets/cantact_img.jpg"; // Make sure this path is correct
import emailjs from "emailjs-com";

const ContactForm = () => {
  return (
    <section
      id="contact"
      className="bg-blue-50 py-20 px-5 md:px-20 flex flex-col items-center w-full h-full scroll-smooth"
    >
      <h1 className="text-5xl font-bold pt-3 text-center mb-10 text-black">
        <span className="text-purple-700">Get In</span> Touch
      </h1>
      {/* Main Container */}
      <Element
        id="contact"
        className="relative w-full flex justify-center items-center "
      >
        {/* Flex Container to Align Image and Form Side by Side */}
        <div className="flex w-full pb-40 items-center justify-center space-x-10 flex-col-reverse md:flex-row">
          {/* Image on the Left */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <img
              src={contact} // Replace with your image URL
              alt="Contact Illustration"
              className="rounded-lg shadow-md w-full h-[300px] md:h-[500px] object-cover"
            />
          </div>

          {/* Form on the Right */}
          <form
            className="bg-white shadow-lg rounded-lg p-9 w-full md:w-1/3"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* Name Field */}
            <div className="flex items-center border-b border-gray-300 py-2 mb-6">
              <span className="text-xl text-gray-400 mr-3">
                <i className="fas fa-user"></i>
              </span>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-2 text-lg border-none focus:outline-none focus:ring-0"
                required
              />
            </div>

            {/* Email Field */}
            <div className="flex items-center border-b border-gray-300 py-2 mb-6">
              <span className="text-xl text-gray-400 mr-3">
                <i className="fas fa-envelope"></i>
              </span>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-2 text-lg border-none focus:outline-none focus:ring-0"
                required
              />
            </div>

            {/* Phone Field */}
            <div className="flex items-center border-b border-gray-300 py-2 mb-6">
              <span className="text-xl text-gray-400 mr-3">
                <i className="fas fa-phone"></i>
              </span>
              <input
                type="tel"
                placeholder="Phone"
                className="w-full px-2 text-lg border-none focus:outline-none focus:ring-0"
                required
              />
            </div>

            {/* Message Field */}
            <div className="flex items-center border-b border-gray-300 py-2 mb-6">
              <span className="text-xl text-gray-400 mr-3">
                <i className="fas fa-comment-dots"></i>
              </span>
              <textarea
                placeholder="Message"
                className="w-full px-2 text-lg border-none focus:outline-none focus:ring-0 h-24"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white text-lg font-medium py-3 rounded-lg transition duration-300 flex justify-center items-center"
            >
              Submit <i className="fas fa-paper-plane ml-2"></i>
            </button>
          </form>
        </div>
      </Element>
    </section>
  );
};

export default ContactForm;
