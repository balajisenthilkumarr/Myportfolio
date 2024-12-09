import React from "react";

function Footer() {
  const navLinks = [
    { id: "home", label: "Home" },
    { id: "aboutus", label: "About" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-10">
      {/* Container */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Branding and Description */}
        <div>
          <h2 className="text-3xl font-bold mb-2">Balaji's Portfolio</h2>
          <p className="text-gray-400">
            Welcome to my personal portfolio. Stay connected to explore my
            journey, skills, and projects.
          </p>
          <p className="text-gray-400 mt-4">
            Let’s connect on social media and collaborate!
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="text-gray-400 hover:text-blue-500"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Contact Me</h3>
          <p className="text-gray-400">
            <i className="fas fa-envelope mr-2"></i>
            balajisenthilkumar151@gmail.com
          </p>
          <p className="text-gray-400 mt-2">
            <i className="fas fa-map-marker-alt mr-2"></i>
            Coimbatore, Tamil Nadu, India
          </p>
          <div className="flex space-x-6 mt-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 text-2xl"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/balaji--senthilkumar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 text-2xl"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
