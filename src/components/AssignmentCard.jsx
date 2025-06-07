import React, { use, useEffect } from "react";
import { MdDeleteForever } from "react-icons/md";
import { RiTimelineView } from "react-icons/ri";
import { RxUpdate } from "react-icons/rx";
import { motion } from "motion/react";
import { Link } from "react-router";
const AssignmentCard = ({ assignment, handleDelete }) => {
  const { thumbnail, title, marks, difficulty, _id } = assignment;

  const getBadgeColor = () => {
    if (difficulty === "Easy") return "bg-green-200 text-green-800";
    if (difficulty === "Medium") return "bg-yellow-200 text-yellow-800";
    return "bg-red-200 text-red-800";
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-gray-800 text-white shadow-md rounded-2xl overflow-hidden"
    >
      <img
        src={thumbnail}
        alt={title}
        className="w-full max-h-60 object-cover hover:scale-105 transition duration-300"
      />
      <div className="p-4 space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{title}</h3>
          <span
            className={`inline-block px-3 py-1 text-sm rounded-full ${getBadgeColor()}`}
          >
            {difficulty}
          </span>
        </div>
        <p className="text-sm">
          Marks: <span className="font-medium">{marks}</span>
        </p>
        <div className="flex items-center justify-end gap-10">
          <button
            onClick={() => handleDelete(_id, assignment)}
            data-tip="Delete"
            className="tooltip tooltip-error cursor-pointer"
          >
            <MdDeleteForever size={30} color="red" />
          </button>
          <button
            data-tip="Update"
            className="tooltip tooltip-warning cursor-pointer"
          >
            <RxUpdate size={25} color="yellow" />
          </button>
          <Link to={`/assignment/${_id}`}>
            <button
              data-tip="View"
              className="tooltip tooltip-info cursor-pointer"
            >
              <RiTimelineView
                size={27}
                color="LightBlue"
                className="rounded-2xl"
              />
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default AssignmentCard;
