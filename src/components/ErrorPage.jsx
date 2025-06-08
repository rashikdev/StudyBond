import React from "react";
import errorGif from "../assets/error.gif";
import { Link } from "react-router";
const ErrorPage = () => {
  return (
    <div className="relative w-screen overflow-hidden h-screen top-0 left-0">
      <img src={errorGif} alt="" />
      <Link to="/">
        <button
          className="absolute md:top-7/8 md:left-4/9 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:transform-none md:translate-x-0 md:translate-y-0
      border border-[#0dac17c3] px-4 py-2 rounded-full shadow-[0_0_15px_#0dac17c3] hover:shadow-[0_0_30px_#0dac17c3] cursor-pointer transition-all duration-200"
        >
          Take Me Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
