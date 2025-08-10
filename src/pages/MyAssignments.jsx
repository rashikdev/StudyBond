import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Spinner from "../components/Spinner";
import { motion } from "motion/react";

const MyAssignments = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = use(AuthContext);
  const [myAssignments, setMyAssignments] = useState([]);
  const [assignmentsLoading, setAssignmentsLoading] = useState(true);

  useEffect(() => {
    setAssignmentsLoading(true);
    axiosSecure.get(`/submitedassignments?email=${user?.email}`).then((res) => {
      setMyAssignments(res.data);
      setAssignmentsLoading(false);
    });
  }, []);

  if (assignmentsLoading) {
    return <Spinner></Spinner>;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 12,
      },
    },
  };

  return (
    <div className="w-11/12 mx-auto mt-30 min-h-[60vh]">
      <div>
        <div className="p-4 max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold my-10 text-green-500">
            My Submitted Assignments
          </h2>
          {myAssignments.length === 0 ? (
            <p className="text-gray-500 text-center pt-30 rounded-xl ">
              You have not submitted any assignments yet.
            </p>
          ) : (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            >
              {myAssignments.map((assignment) => (
                <motion.div
                  variants={itemVariants}
                  key={assignment._id}
                  className="bg-gray-800 shadow-lg rounded-xl p-5 border-l-5 border-r-5 border-green-500"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {assignment.title}
                  </h3>
                  <p className="text-gray-300 mb-1">
                    <span className="font-medium">Status:</span>{" "}
                    <span
                      className={`px-2 py-[3px] rounded-full text-xs font-bold ${
                        assignment.status === "pending"
                          ? "bg-yellow-400 text-yellow-800"
                          : "bg-green-400 text-green-800"
                      }`}
                    >
                      {assignment.status}
                    </span>
                  </p>
                  <p className="text-gray-300 mb-1">
                    <span className="font-medium">Assignment Marks:</span>{" "}
                    <span className="text-green-400 font-semibold">
                      {assignment.marks}
                    </span>
                  </p>
                  <p className="text-gray-300 mb-1">
                    <span className="font-medium">Your Achive Marks:</span>{" "}
                    <span
                      className={`${
                        assignment.givenMark
                          ? "text-green-400"
                          : "text-orange-400"
                      }`}
                    >
                      {assignment.givenMark ?? "Not Given Yet"}
                    </span>
                  </p>
                  {assignment.feedback && (
                    <p className="text-gray-300 mt-2">
                      <span className="font-medium">Feedback: </span>
                      <span className="text-green-400">
                        {assignment.feedback}
                      </span>
                    </p>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyAssignments;
