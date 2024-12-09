import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  const handleClick = (id) => {
    setActive(id);
    setIsOpen(false); // Close mobile menu on click
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navdata = [
    { id: "home", label: "Home" },
    { id: "aboutus", label: "About" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      {/* Navbar Container */}
      <div className="container mx-auto flex justify-between items-center py-6 px-7 md:py-8">
        {/* Logo and Name */}
        <a
          href="#home"
          className="flex items-center space-x-3 text-3xl font-extrabold text-gray-800 hover:text-blue-500"
        >
          <i className="fa-brands fa-java w-10 h-13 object-contain"></i>
          
           
          <span>Balaji Senthilkumar</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navdata.map((item) => (
            <li key={item.id}>
              <ScrollLink
                to={item.id}
                smooth={true}
                duration={500}
                offset={-85} // Offset for fixed navbar height
                onClick={() => handleClick(item.id)}
                className={`cursor-pointer text-2xl font-bold px-2 py-2 ${
                  active === item.id
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                } transition-all`}
              >
                {item.label}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700 hover:text-blue-500 focus:outline-none"
          onClick={toggleMenu}
        >
          <span className="text-2xl">&#9776;</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-gray-800 text-white flex flex-col items-center justify-center space-y-4 py-6">
          {navdata.map((item) => (
            <li key={item.id}>
              <ScrollLink
                to={item.id}
                smooth={true}
                duration={500}
                offset={-85}
                onClick={() => handleClick(item.id)}
                className={`block text-lg font-medium ${
                  active === item.id
                    ? "text-blue-400"
                    : "text-white hover:text-blue-400"
                }`}
              >
                {item.label}
              </ScrollLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
