import React from "react";

const Educationcard = ({ institution, course, duration, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <h1 className="text-4xl font-semibold text-indigo-800 mb-2">{institution}</h1>
      <p className="text-gray-700  text-2xl font-medium">{course}</p>
      <p className="text-lg text-gray-500 mb-4">{duration}</p>
      <p className="text-white text-xl bg-green-700">{description}</p>
    </div>
  );
};

export default Educationcard;
