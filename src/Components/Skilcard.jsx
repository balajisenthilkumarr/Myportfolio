import React from "react";

const SkillCard = ({ skillName, description, icon }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-11 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
      <div className="text-indigo-800 text-4xl mb-3">{icon}</div>
      <h3 className="text-xl font-semibold text-indigo-800">{skillName}</h3>
      <p className="text-gray-600 text-x mt-2">{description}</p>
    </div>
  );
};

export default SkillCard;
