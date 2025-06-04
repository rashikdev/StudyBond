import { createBrowserRouter } from "react-router";
import MainLayoute from "../mainlayoute/MainLayoute";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";

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
    ],
  },
]);
