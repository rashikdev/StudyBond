import { createBrowserRouter } from "react-router";
import MainLayoute from "../mainlayoute/MainLayoute";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Assignments from "../pages/Assignments";

export const Router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayoute,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "/assignments",
        Component: Assignments,
        loader: () =>
          fetch("http://localhost:5000/assignments").then((res) => res.json()),
        hydrateFallbackElement: <div>Loading...</div>,
      },
    ],
  },
]);
