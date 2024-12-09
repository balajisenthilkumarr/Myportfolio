import React from 'react';
import ProjectCard from './Projectscard'; // Ensure the path is correct
import image1 from "../assets/project1.png";
import { Element } from 'react-scroll';

const projects = [
  {
    title: "Movie Watchlist",
    description: "A movie tracking app to manage your favorite movies.",
    image: image1,
    demoLink: "https://movieapp-eight-rho.vercel.app/",
    codeLink: "https://github.com/balajisenthilkumarr/MOVIEAPP",
  },
  {
    title: "ToDo List",
    description: "An app to track and organize your daily tasks.",
    image: "https://codingartistweb.com/wp-content/uploads/2021/02/To-Do-list-small-01.png",
    demoLink: "https://demo-link.com",
    codeLink: "https://github.com/balajisenthilkumarr/TODO",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase my work and skills.",
    image: "https://via.placeholder.com/150",
    demoLink: "https://demo-link.com",
    codeLink: "https://github.com/balajisenthilkumarr/Portfolio",
  },
];

const ProjectSection = () => {
  return (
    <Element id="projects"className="py-12 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-indigo-600 mb-8">My Projects</h2>
        {/* Grid layout for projects */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6 space-x-2 ">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              demoLink={project.demoLink}
              codeLink={project.codeLink}
            />
          ))}
        </div>
      </div>
    </Element>
  );
};

export default ProjectSection;
