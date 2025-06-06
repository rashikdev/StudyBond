import React, { use, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import userLogo from "../assets/user.png";
import Hamburger from "hamburger-react";
import { AuthContext } from "../context/AuthProvider";
import toast from "react-hot-toast";
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
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center md:py-3 py-1 md:px-7 px-4 rounded-full md:mt-10 mt-5 relative mx-2 md:mx-0 backdrop-blur-md">
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
        <div className="absolute hidden lg:block right-70 border-r-2 border-l-2 rounded-full px-4 py-1 hover:scale-105 cursor-pointer transition-all duration-300">
          <NavLink>Dasheboard</NavLink>
        </div>
        <div>
          <div className="flex items-center gap-5">
            {user && (
              <div
                className="tooltip tooltip-left"
                data-tip={user.displayName}
              >
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
          <div className="absolute top-20 right-5 bg-white/20 p-2 rounded">
            <ul className="flex flex-col gap-1">
              <Link onClick={() => setShow(false)}>
                <li>Create Assignment</li>
              </Link>
              <Link onClick={() => setShow(false)}>
                <li>My Attempted Assignments</li>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
