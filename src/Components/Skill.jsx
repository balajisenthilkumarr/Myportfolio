import React from "react";
import SkillCard from "./Skilcard";
import { Element } from "react-scroll";

const skillsData = [
  {
    skillName: "JavaScript",
    description: "Powerful language for building interactive web applications.",
    icon: <i className="fa-brands fa-js"></i>,
  },
  {
    skillName: "React",
    description: "A library for building user interfaces with reusable components.",
    icon: "⚛️",
  },
  {
    skillName: "Node.js",
    description: "Server-side JavaScript runtime for scalable applications.",
    icon: <i className="fa-brands fa-node"></i>,
  },
  {
    skillName: "Java",
    description: "Versatile language used for backend, AI, and scripting.",
    icon: <i className="fa-brands fa-java"></i>,
  },
  {
    skillName: "SQL",
    description: "Language for managing and querying databases.",
    icon: <i className="fa-solid fa-database"></i>,
  },
];

const Skill = () => {
  return (
    <Element id="skills" className="bg-gray-900 py-12 md:h-screen opacity-100 translate-y-2- animate-fade-ou"
  data-visible="false">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-indigo-600 text-center mb-8">
          My Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skillsData.map((skill, index) => (
            <SkillCard
              key={index}
              skillName={skill.skillName}
              description={skill.description}
              icon={skill.icon}
            />
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Skill;
