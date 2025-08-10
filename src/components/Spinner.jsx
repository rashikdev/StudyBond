import React from "react";

const Spinner = () => {
  return (
    <div className="h-[calc(100vh-50px)] w-screen flex items-center justify-center overflow-hidden">
      <div className="h-full w-full flex items-center justify-center">
        <span className="loader"></span>
      </div>
    </div>
  );
};

export default Spinner;
