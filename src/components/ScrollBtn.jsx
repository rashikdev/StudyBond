import React from "react";
import { RiScrollToBottomLine } from "react-icons/ri";

const ScrollBtn = () => {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 left-2 cursor-pointer z-50 flex items-center flex-col opacity-55"
    >
      <RiScrollToBottomLine size={30} className="rotate-180" />
      <p className="text-sm hidden md:block">Back to top</p>
    </button>
  );
};

export default ScrollBtn;
