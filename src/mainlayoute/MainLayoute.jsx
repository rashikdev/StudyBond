import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollBtn from "../components/ScrollBtn";

const MainLayoute = () => {
  return (
    <div>
      <Navbar></Navbar>
      <ScrollBtn></ScrollBtn>
      <Outlet />
      <Footer></Footer>
    </div>
  );
};

export default MainLayoute;
