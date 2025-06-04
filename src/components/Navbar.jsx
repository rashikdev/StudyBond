import React, { useState } from "react";
import ThemeToggleBtn from "./ThemeToggleBtn";
import { Link, NavLink } from "react-router";
// import userlogo from "../assets/user.png";
import Hamburger from "hamburger-react";
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/">Assignments</NavLink>
    </>
  );
  const handleMenu = () => {
    setOpen(!isOpen);
  };
  return (
    <div className="flex justify-between items-center md:py-3 py-1 md:px-7 px-4 border rounded-full mt-10 relative">
      <button onClick={handleMenu} className="md:hidden">
        <Hamburger size={26}></Hamburger>
      </button>
      {isOpen && (
        <div className="w-30 h-[30vh] bg-[red] absolute left-0 top-20">
          <ul className="flex flex-col gap-1">{links}</ul>
        </div>
      )}
      <h1 className="md:text-2xl font-semibold uppercase">Study Bond</h1>
      <div>
        <ul className="gap-6 hidden md:flex">{links}</ul>
      </div>
      <div>
        <div className="flex items-center gap-5">
          {/* <img
            src={userlogo}
            alt="logo"
            className="w-10 rounded-full border-3 border-green-500"
          /> */}
          <Link to="/login">
            <button className="border-2 rounded-full px-4 py-1 cursor-pointer">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
