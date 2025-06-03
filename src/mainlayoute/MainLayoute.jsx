import React from "react";
import { Outlet } from "react-router";

const MainLayoute = () => {
  return (
    <div>
      <h2>navbar</h2>
      <Outlet />
      <h3>footer</h3>
    </div>
  );
};

export default MainLayoute;
