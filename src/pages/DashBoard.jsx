import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import flower from "../assets/flower.jpg";
import axiosSecure from "../utils/axiosSecure";
import { IoCheckmarkDone } from "react-icons/io5";
import { IoIosCloseCircleOutline, IoMdLogOut } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { CgMenuRound } from "react-icons/cg";
import { Link } from "react-router";
import ThemeToggleBtn from "../components/ThemeToggleBtn";
const DashBoard = () => {
  const { user } = use(AuthContext);
  const [assignments, setAssignments] = useState([]);
  useEffect(() => {
    axiosSecure.get(`/submitedassignments?email=${user?.email}`).then((res) => {
      setAssignments(res.data);
    });
  }, []);
  const pending = assignments.filter((a) => a.status === "pending");
  const completed = assignments.filter((a) => a.status === "complete");
  const marks = completed.map((a) => a.marks);
  const mark = marks.reduce((a, b) => a + b, 0);
  const avg = mark / completed.length;
  console.log(avg);
  return (
    <div className="w-11/12 min-h-[50vh] mx-auto mt-30 flex gap-5">
      <div className="w-[30%] flex flex-col items-center">
        <div className="h-[40vh] relative w-full rounded-2xl">
          <img
            src={flower}
            alt=""
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="w-[350px] h-[250px] backdrop-blur-sm flex items-center justify-evenly p-5 rounded-2xl text-white border-2 border-gray-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <img src={user?.photoURL} alt="" className="rounded-xl w-[100px]" />
            <div>
              <h3 className="text-2xl font-semibold">{user?.displayName}</h3>
              <p className="">{user?.email}</p>
            </div>
          </div>
        </div>
        <div className="w-full mt-8 flex gap-3 justify-between">
          <div className="w-fit gap-12 flex flex-col justify-center">
            <CgMenuRound size={40}className="text-green-400" />
            <Link to="/" className="text-zinc-400">
              <FaHome size={35} />
            </Link>
            <ThemeToggleBtn />
            <IoMdLogOut size={40} color="red" />
          </div>
          <div className="border w-full rounded-xl">
            
          </div>
        </div>
      </div>
      <div className="border-2 border-base-300 w-[70%] rounded-2xl space-y-20 p-5">
        <h2 className="text-3xl font-bold text-yellow-400">
          Assignment Overview
        </h2>
        <div className="flex justify-center items-center gap-6">
          <div className="border-2 w-70 h-40 flex flex-col justify-evenly items-center rounded-2xl border-green-700 p-2">
            <h2 className="font-semibold">Submitted Assignments</h2>
            <div className="h-20 w-20 rounded-xl flex gap-6 justify-center items-center text-4xl font-bold">
              <span>{assignments.length}</span>
            </div>
          </div>
          <div className="border-2 w-70 h-40 flex flex-col justify-evenly items-center rounded-2xl border-green-700 p-2">
            <h2 className="text-green-400 font-semibold">
              Completed Assignments
            </h2>
            <div className="h-20 w-20 rounded-xl flex gap-6 justify-center items-center text-4xl font-bold">
              <span>{completed.length}</span>
              <span className="text-green-400">
                <IoCheckmarkDone />
              </span>
            </div>
          </div>
          <div className="border-2 w-70 h-40 flex flex-col justify-evenly items-center rounded-2xl border-green-700 p-2">
            <h2 className="text-red-400 font-semibold">Pending Assignments</h2>
            <div className="h-20 w-20 rounded-xl flex gap-6 justify-center items-center text-4xl font-bold">
              <span>{pending.length}</span>
              <span>
                <IoIosCloseCircleOutline color="red" />
              </span>
            </div>
          </div>
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
  );
};

export default DashBoard;
