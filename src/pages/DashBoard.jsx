import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import flower from "../assets/flower.jpg";
import { IoCheckmarkDone } from "react-icons/io5";
import { IoIosCloseCircleOutline, IoMdLogOut } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { CgMenuRound } from "react-icons/cg";
import { Link } from "react-router";
import ThemeToggleBtn from "../components/ThemeToggleBtn";
import { motion } from "motion/react";
import useAxiosSecure from "../hooks/useAxiosSecure";
const DashBoard = () => {
  const axiosSecure = useAxiosSecure();
  const { user, logoutUser } = use(AuthContext);
  const [assignments, setAssignments] = useState([]);
  const [notes, setNotes] = useState("");

  const [open, setOpen] = useState(false);

  useEffect(() => {
    axiosSecure.get(`/submitedassignments?email=${user?.email}`).then((res) => {
      setAssignments(res.data);
    });
  }, []);
  const pending = assignments.filter((a) => a.status === "pending");
  const completed = assignments.filter((a) => a.status === "complete");
  const marks = completed.map((a) => a.givenMark);
  const mark = marks.reduce((a, b) => a + b, 0);
  const avg = completed.length ? mark / completed.length : 0;

  return (
    <div className="w-11/12 min-h-[50vh] mx-auto lg:mt-30 md:mt-10 mt-5 flex flex-col lg:flex-row gap-5">
      <div className="lg:w-[30%] flex flex-col items-center">
        <div className="h-[40vh] relative w-full rounded-2xl">
          <img
            src={flower}
            alt=""
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="w-[350px] h-[250px] backdrop-blur-sm flex items-center justify-evenly p-5 rounded-2xl text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <img src={user?.photoURL} alt="" className="rounded-xl w-[100px]" />
            <div>
              <h3 className="text-2xl font-semibold">{user?.displayName}</h3>
              <p className="">{user?.email}</p>
            </div>
          </div>
        </div>
        <div className="relative w-full mt-8 flex gap-5 md:gap-10 lg:gap-3 justify-between">
          <div className="w-fit gap-12 flex flex-col justify-center">
            <CgMenuRound
              onClick={() => setOpen(!open)}
              size={40}
              className={`cursor-pointer ${
                open
                  ? "-rotate-90 transition duration-500"
                  : "transition duration-500"
              }`}
            />
            <Link to="/" className="text-zinc-400">
              <FaHome size={35} />
            </Link>
            <ThemeToggleBtn />
            <Link onClick={logoutUser} to="/login">
              <IoMdLogOut size={35} color="red" />
            </Link>
          </div>
          {open && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute top-0 right-0 w-[85%] h-full transparent backdrop-blur-sm p-5"
            >
              <div className="flex flex-col justify-evenly h-full text-white font-semibold">
                <button></button>
                <Link to="/create-assignment" className="w-fit">
                  <motion.button
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="rounded-md  decoration-[red] hover:underline hover:text-[red] underline-offset-4 px-3  border-l-2 w-fit cursor-pointer"
                  >
                    Create Assignment
                  </motion.button>
                </Link>
                <Link to="/assignments" className="w-fit">
                  <motion.button
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="rounded-md  decoration-[red] hover:underline hover:text-[red] underline-offset-4 px-3  border-l-2 w-fit cursor-pointer"
                  >
                    All Assignments
                  </motion.button>
                </Link>
                <Link to="/pending-assignments" className="w-fit">
                  <motion.button
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="rounded-md  decoration-[red] hover:underline hover:text-[red] underline-offset-4 px-3  border-l-2 w-fit cursor-pointer"
                  >
                    Review Assignments
                  </motion.button>
                </Link>
                <Link to="/my-assignments" className="w-fit">
                  <motion.button
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="rounded-md  decoration-[red] hover:underline hover:text-[red] underline-offset-4 px-3  border-l-2 w-fit cursor-pointer"
                  >
                    My Attempted Assignments
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          )}
          <div className="w-full rounded-xl">
            <motion.div
              className="bg-zinc-900 p-4 rounded-xl text-white shadow-md h-full w-full max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl font-bold mb-3 text-yellow-400">
                📝 Task Notes
              </h2>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Write your tasks, reminders or notes here..."
                className="w-full h-32 p-3 bg-zinc-700 rounded-lg text-white placeholder-gray-400 outline-none resize-none focus:ring-2 focus:ring-yellow-400"
              ></textarea>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="border-2 border-base-300 lg:w-[70%] rounded-2xl space-y-20 p-5">
        <h2 className="text-3xl font-bold text-yellow-400">
          Assignment Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 lg:gap-20">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
            <Link
              to="/my-assignments"
              className="hover:scale-95 transition duration-300"
            >
              <div className="border-2 w-70 h-40 flex flex-col justify-evenly items-center rounded-2xl border-green-700 p-2">
                <h2 className="font-semibold">Submitted Assignments</h2>
                <div className="h-20 w-20 rounded-xl flex gap-6 justify-center items-center text-4xl font-bold">
                  <span>{assignments.length}</span>
                </div>
              </div>
            </Link>
            <Link
              to="/my-assignments"
              className="hover:scale-95 transition duration-300"
            >
              <div className="border-2 w-70 h-40 flex flex-col justify-evenly items-center rounded-2xl border-green-700 p-2">
                <h2 className="text-green-400 font-semibold">
                  Completed Assignments
                </h2>
                <div className="h-20 w-20 rounded-xl flex gap-4 md:gap-6 justify-center items-center text-4xl font-bold">
                  <span>{completed.length}</span>
                  <span className="text-green-400">
                    <IoCheckmarkDone />
                  </span>
                </div>
              </div>
            </Link>
            <Link
              to="/my-assignments"
              className="hover:scale-95 transition duration-300"
            >
              <div className="border-2 w-70 h-40 flex flex-col justify-evenly items-center rounded-2xl border-green-700 p-2">
                <h2 className="text-red-400 font-semibold">
                  Pending Assignments
                </h2>
                <div className="h-20 w-20 rounded-xl flex gap-4 md:gap-6 justify-center items-center text-4xl font-bold">
                  <span>{pending.length}</span>
                  <span>
                    <IoIosCloseCircleOutline color="red" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <div
              className="radial-progress text-2xl font-bold text-green-400"
              style={{
                "--value": avg,
                "--size": "12rem",
                "--thickness": "1.5rem",
              }}
              aria-valuenow={avg}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {avg}%
            </div>
            <h2 className="font-bold text-gray-500">Average Marks</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
