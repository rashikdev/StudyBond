import React, { use, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import userLogo from "../assets/user.png";
import Hamburger from "hamburger-react";
import { AuthContext } from "../context/AuthProvider";
import toast from "react-hot-toast";
import ThemeToggleBtn from "./ThemeToggleBtn";
import { motion } from "motion/react";
const Navbar = () => {
  const { user, logoutUser } = use(AuthContext);
  const [isOpen, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  const handleMenu = () => {
    setOpen(!isOpen);
  };

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        toast.success("Logout Successfully");
      })
      .catch(() => {
        toast.error("Logout Failed");
      });
  };

  // useEffect(() => {
  //   if (show) {
  //     const timeout = setTimeout(() => {
  //       setShow(false);
  //     }, 4000);
  //     return () => clearTimeout(timeout);
  //   }
  // }, [show]);

  // const theme = document.documentElement.getAttribute("data-theme") === "black";
  return (
    <div className="fixed top-0 left-0 w-full z-[999]">
      <div className="flex justify-between items-center md:py-3 py-1 md:px-7 px-4 rounded-full mt-5 relative mx-2 md:mx-0 backdrop-blur-md">
        <button onClick={handleMenu} className="md:hidden">
          <Hamburger size={26}></Hamburger>
        </button>
        {isOpen && (
          <div className="w-30 h-[30vh] bg-white/10 backdrop-blur-lg absolute left-0 top-20">
            <ul className="flex flex-col gap-1 p-3 text-[10px]">
              <NavLink
                to="/"
                onClick={() => setOpen(false)}
                className={({ isActive }) => (isActive ? "" : "")}
              >
                Home
              </NavLink>
              <NavLink
                to="/assignments"
                onClick={() => setOpen(false)}
                className={({ isActive }) => (isActive ? "" : "")}
              >
                Assignments
              </NavLink>
              {user && (
                <>
                  <NavLink
                    to="/pending-assignments"
                    onClick={() => setOpen(false)}
                    className={({ isActive }) => (isActive ? "" : "")}
                  >
                    Pending Assignments
                  </NavLink>
                  <NavLink
                    to="/dashboard"
                    onClick={() => setOpen(false)}
                    className={({ isActive }) => (isActive ? "" : "")}
                  >
                    Dashboard
                  </NavLink>
                </>
              )}
            </ul>
          </div>
        )}
        <Link to="/">
          <h1 className={`md:text-2xl font-semibold uppercase`}>Study Bond</h1>
        </Link>
        <div>
          <ul className="gap-6 hidden md:flex items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "border-2 rounded-full px-4 py-1" : ""
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/assignments"
              className={({ isActive }) =>
                isActive ? "border-2 rounded-full px-4 py-1" : ""
              }
            >
              Assignments
            </NavLink>
            {user && (
              <>
                <NavLink
                  to="/pending-assignments"
                  className={({ isActive }) =>
                    isActive ? "border-2 rounded-full px-4 py-1" : ""
                  }
                >
                  Pending Assignments
                </NavLink>
              </>
            )}
          </ul>
        </div>
        <div className="absolute hidden lg:block lg:right-108">
          <ThemeToggleBtn></ThemeToggleBtn>
        </div>
        <div className="absolute hidden lg:block right-70 border-r-2 border-l-2 rounded-full px-4 py-1 hover:scale-105 cursor-pointer transition-all duration-300">
          <NavLink>Dashboard</NavLink>
        </div>
        <div>
          <div className="flex items-center gap-5">
            {user && (
              <div className="tooltip tooltip-left" data-tip={user.displayName}>
                <img
                  onClick={() => setShow(!show)}
                  className="w-10 h-10 rounded-full border-2 cursor-pointer"
                  src={user?.photoURL ? user.photoURL : userLogo}
                  alt={user.displayName}
                />
              </div>
            )}
            <div>
              {user ? (
                <Link to="/login">
                  <button
                    onClick={handleLogout}
                    className="border-2 text-red-500 rounded-full px-4 py-1 cursor-pointer"
                  >
                    Logout
                  </button>
                </Link>
              ) : (
                <Link to="/login">
                  <button className="border-2 rounded-full px-4 py-1 cursor-pointer">
                    Login
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
        {show && (
          <motion.div
            initial={{ opacity: 0, scale: 0, y: -200 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute right-0 top-20 px-4 py-8 bg-white/70 backdrop-blur-md rounded-lg text-black"
          >
            <ul className="flex flex-col gap-3 font-semibold overflow-hidden">
              <Link to="/create-assignment" onClick={() => setShow(false)}>
                <motion.li
                  initial={{ opacity: 0, scale: 0, x: -200 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 0.9, delay: 0.1 }}
                  className="cursor-pointer hover:bg-gray-400 rounded-md px-2"
                >
                  Create Assignment
                </motion.li>
              </Link>
              <Link onClick={() => setShow(false)}>
                <motion.li
                  initial={{ opacity: 0, x: -200 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.9, delay: 0.5 }}
                  className="cursor-pointer hover:bg-gray-400 rounded-md px-2"
                >
                  My Submitted Assignments
                </motion.li>
              </Link>
            </ul>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
