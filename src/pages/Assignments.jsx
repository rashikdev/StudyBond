import React, { useState } from "react";
import AssignmentCard from "../components/AssignmentCard";
import { useLoaderData } from "react-router";
import { motion } from "motion/react";

const Assignments = () => {
  const initialAssignments = useLoaderData();
  const [assignments, setAssignments] = useState(initialAssignments);
  return (
    <div className="w-11/12 mx-auto mt-40 mb-10">
      <div className="w-11/12 mx-auto mb-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl font-bold text-text-white mb-4"
        >
          Browse Assignments
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl mx-auto mb-6"
        >
          Discover all available assignments, filter by difficulty, and find
          tasks that challenge and grow your skills. Use the search box to find
          a specific one quickly.
        </motion.p>
        <input
          type="search"
          placeholder="Search by title ..."
          className="w-full md:w-1/2 px-4 py-2 my-5 border-1 border-gray-500 rounded-full outline-none"
        />
      </div>
      <div className="flex justify-end items-center gap-2 mb-8"><h4 className="font-semibold text-xl">Filter :</h4>
          <select name="difficulty" className="border-1 border-gray-500 p-1 rounded-2xl bg-black text-white">
            <option value="All">All</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {assignments.map((assignment) => (
          <AssignmentCard
            key={assignment._id}
            assignment={assignment}
          ></AssignmentCard>
        ))}
      </div>
    </div>
  );
};

export default Assignments;
