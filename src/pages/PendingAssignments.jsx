import React, { use, useEffect, useState } from "react";
import { motion } from "motion/react";
import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthProvider";
import Spinner from "../components/Spinner";
import useAxiosSecure from "../hooks/useAxiosSecure";
const PendingAssignments = () => {
  const axiosSecure = useAxiosSecure();
  const [assignments, setAssignments] = useState([]);
  const [open, setOpen] = useState(false);
  const { user, loading } = use(AuthContext);
  const [singleAssignment, setSingleAssignment] = useState(null);
  const [assignmentsLoading, setAssignmentsLoading] = useState(true);

  const getSingleAssignment = (id) => {
    axiosSecure.get(`/submitedassignments/${id}`).then((res) => {
      const assignment = res.data;
      if (user?.email === assignment?.email) {
        return toast.error("You cannot mark your own assignment");
      }
      setSingleAssignment(assignment);
      setOpen(true);
    });
  };
  if (loading) {
    return <Spinner></Spinner>;
  }
  const handleUpdate = (e, id) => {
    e.preventDefault();
    const form = e.target;
    const givenMark = parseInt(form.givenMark.value);
    const feedback = form.feedback.value;
    const data = { givenMark, feedback };
    axiosSecure
      .patch(`/submitedassignment/${id}`, data)
      .then((res) => {
        if (res.data.modifiedCount) {
          toast.success("Assignment marked successfully");
          setAssignments((prev) => prev.filter((item) => item._id !== id));
          setOpen(false);
        }
      })
      .catch((error) => {
        toast.error("Failed to mark the assignment");
      });
  };
  useEffect(() => {
    setAssignmentsLoading(true);
    axiosSecure
      .get(`/submitedassignments?status=pending`)
      .then((res) => setAssignments(res.data));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  setTimeout(() => {
    setAssignmentsLoading(false);
  }, 1000);

  return (
    <div className="md:w-11/12 min-h-[calc(100vh-250px)] mx-auto md:mt-30 mt-20">
      <div className="p-6 flex flex-col justify-center items-center gap-10">
        <div className="text-center my-8">
          <h1 className="text-2xl md:text-3xl font-semibold text-yellow-400">
            Review Submissions
          </h1>
          <p className="text-gray-400 mt-2 text-sm md:text-base">
            These are the pending assignments awaiting evaluation.
          </p>
        </div>
        {/* table for md and above */}
        <div className="w-full hidden md:block">
          {assignmentsLoading ? (
            <div className="text-white text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span className="loading loading-spinner text-green-500 w-12 h-12"></span>
            </div>
          ) : (
            <table className="table">
              {/* head */}
              <thead className="">
                <tr className="text-xl">
                  <th>#</th>
                  <th>Assignment</th>
                  <th>Examinee</th>
                  <th>Marks</th>
                </tr>
              </thead>
              <tbody>
                {assignments.map((assignment, index) => (
                  <tr key={assignment._id}>
                    <th>{index + 1}</th>
                    <td>{assignment.title}</td>
                    <td>{assignment.examinee}</td>
                    <td>{assignment.marks}</td>
                    <td className="flex justify-center">
                      <button
                        onClick={() => getSingleAssignment(assignment._id)}
                        className="px-4 py-2 rounded-full cursor-pointer shadow-[0_0_20px_#0dac17b8] font-semibold bg-black text-white"
                      >
                        Give mark
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        {/* table for mobile */}
        <div className="md:hidden space-y-4">
          {assignmentsLoading ? (
            <div className="text-white text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span className="loading loading-spinner text-green-500 w-12 h-12"></span>
            </div>
          ) : (
            <>
              {assignments.map((assignment, index) => (
                <div
                  key={assignment._id}
                  className="border border-green-300 rounded-xl p-3 space-y-3"
                >
                  <p className="font-semibold">
                    Assignment : {assignment.title}
                  </p>
                  <p className="">
                    <span className="font-medium">Examinee:</span>{" "}
                    {assignment.examinee}
                  </p>

                  <div className="flex justify-between">
                    <p className="">
                      <span className="font-medium">Total Marks:</span>{" "}
                      {assignment.marks}
                    </p>
                    <button
                      onClick={() => getSingleAssignment(assignment._id)}
                      className="text-white px-2 py-[2px] rounded-lg cursor-pointer shadow-[0_0_20px_#0dac17b8] font-semibold bg-black"
                    >
                      Give mark
                    </button>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed h-[100vh] w-[100vw] top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-black/20 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="fixed top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 inset-0 bg-gray-700  rounded-2xl md:p-6 p-4 w-[99vw] h-fit md:w-[50vw] md:h-fit text-white"
            >
              <div className="md:space-y-6 pb-5">
                <h2 className="text-2xl font-bold mb-4">
                  Give Mark for{" "}
                  <span className="text-[#0ccb26]">
                    "{singleAssignment?.title}"
                  </span>
                </h2>
                <h3 className="break-words">
                  <span className="font-bold text-yellow-500">
                    Google Docs Link:{" "}
                  </span>
                  <a
                    href={singleAssignment?.docsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline break-words"
                  >
                    {singleAssignment?.docsLink}
                  </a>
                </h3>
                <h3 className="break-words">
                  <span className="font-bold text-yellow-500">Notes:</span>{" "}
                  <span className="text-gray-400">
                    {singleAssignment?.notes}
                  </span>
                </h3>
              </div>
              <form onSubmit={(e) => handleUpdate(e, singleAssignment?._id)}>
                <label htmlFor="mark" className="font-bold">
                  Mark ( highest : {singleAssignment?.marks} )
                </label>
                <input
                  type="number"
                  name="givenMark"
                  required
                  placeholder="Assignment Mark"
                  min={0}
                  max={singleAssignment?.marks}
                  className="w-full border rounded-xl p-3 my-3"
                />
                <label className="font-bold">Feedback</label>
                <textarea
                  required
                  name="feedback"
                  minLength={20}
                  type="text"
                  placeholder="Assignment Feedback"
                  className="w-full border rounded-xl my-3 p-3"
                  rows="4"
                />
                <div className="flex mt-5 justify-end gap-10 font-semibold">
                  <motion.button
                    whileTap={{ scale: 0.3 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setOpen(false)}
                    className="px-7 py-2 rounded-full cursor-pointer transition-all hover:shadow-[0_0_10px_white] bg-red-700"
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.3 }}
                    transition={{ duration: 0.2 }}
                    type="submit"
                    className="px-7 py-2 rounded-full cursor-pointer transition-all hover:shadow-[0_0_10px_white] bg-gradient-to-br from-black to-green-500"
                  >
                    Submit
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default PendingAssignments;
