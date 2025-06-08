import React from "react";
import errorGif from "../assets/error.gif";
import { Link } from "react-router";
const ErrorPage = () => {
  return (
    <div className="relative w-screen overflow-hidden h-screen top-0 left-0">
      <img src={errorGif} alt="" />
      <Link to="/">
        <button
          className="absolute top-7/8 left-4/9
      border border-[#0dac17c3] px-4 py-2 rounded-full shadow-[0_0_15px_#0dac17c3] cursor-pointer"
        >
          Take Me Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
