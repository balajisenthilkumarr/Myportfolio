import React from "react";

const ProjectCard = ({ image, title, description, demoLink, codeLink }) => {
  return (
    <div className="w-full p-3">
      <div
        className="relative group bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl 
        transition-all duration-500 transform group-hover:scale-120 group-hover:h-[450px] group-hover:w-[300px]"
      >
        {/* Project Thumbnail */}
        <div className="relative overflow-hidden h-[500px]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover 
            transition-transform duration-500 transform group-hover:scale-110"
          />
        </div>

        {/* Title */}
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </div>

        {/* Hidden Layer for Description and Buttons */}
        <div
          className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 p-4 text-center text-white 
          opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        >
          <p className="text-lg font-bold- mb-4">{description}</p>
          <div className="flex justify-center gap-4 ">
            <a
              href={demoLink}
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-800 
              transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
            <a
              href={codeLink}
              className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-800 
              transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
