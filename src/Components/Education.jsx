import React from "react";
import EducationCard from "./Educationcard";
import { Element } from "react-scroll";

const educationData = [
  {
    institution: "DR Mahalingam College Of Engineering and Technology",
    course: "Bachelor Of  Computer Science and Engineering",
    duration: "2021 - 2025",
    description: "Pursuing",
  },
  {
    institution: "JSR Higher Seconadary School",
    course: "Computer Science",
    duration: "2018 - 2020",
    description: "Completed",
  },
];

const Education = () => {
  return (
    <Element id="education" className="bg-gray-100 py-12  min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <div>
        <h2 className="text-7xl font-semibold text-indigo-800 text-center mb-8">
        <i className="fa-solid fa-graduation-cap space-x-2"></i>
          Education
        </h2>
         <h4 className="text-center text-2xl text-gray-700">
        Education is not the learning of facts, but the training of the mind to think.
      </h4>
        </div>
        
        <div className="flex flex-col space-y-6 overflow-x-auto ">
  {educationData.map((edu, index) => (
    <EducationCard
      key={index}
      institution={edu.institution}
      course={edu.course}
      duration={edu.duration}
      description={edu.description}
    />
  ))}
</div>
     
      </div>
    </Element>
  );
};

export default Education;
