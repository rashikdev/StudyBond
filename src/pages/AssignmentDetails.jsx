import React from "react";
import { useLoaderData } from "react-router";

const AssignmentDetails = () => {
  const assignment = useLoaderData();
  const { thumbnail, title, description, difficulty, marks, dueDate } =
    assignment;
  const getBadgeColor = () => {
    if (difficulty === "Easy") return "bg-green-200 text-green-800";
    if (difficulty === "Medium") return "bg-yellow-200 text-yellow-800";
    return "bg-red-200 text-red-800";
  };
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 md:mt-30 mt-16 mb-5">
      <div className="bg-gray-900 shadow-lg rounded-2xl p-6">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold mb-2">{title}</h2>
          <span
            className={`inline-block px-4 font-semibold py-1 rounded-full ${getBadgeColor()}`}
          >
            {difficulty}
          </span>
        </div>
        <p className="mb-4">{description}</p>
        
        <div className="flex items-center justify-between mb-6">
          <span className="text-sm">
            Due Date: <strong>{dueDate}</strong>
          </span>
          <span className="text-sm">
            Marks: <strong>{marks}</strong>
          </span>
        </div>
        <button className="w-full bg-green-500 hover:bg-green-600 text-white text-lg font-semibold py-2 rounded-md cursor-pointer">
          Take Assignment
        </button>
      </div>
    </div>
  );
};

export default AssignmentDetails;
