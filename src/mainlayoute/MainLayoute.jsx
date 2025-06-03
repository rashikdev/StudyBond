import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainLayoute = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet />
      <h3>footer</h3>
    </div>
  );
};

export default MainLayoute;
