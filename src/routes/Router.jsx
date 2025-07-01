import { createBrowserRouter } from "react-router";
import MainLayoute from "../mainlayoute/MainLayoute";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Assignments from "../pages/Assignments";
import PrivateRoute from "./PrivateRoute";
import AssignmentDetails from "../pages/AssignmentDetails";
import CreateAssignment from "../pages/CreateAssignment";
import Spinner from "../components/Spinner";
import ErrorPage from "../components/ErrorPage";
import PendingAssignments from "../pages/PendingAssignments";
import MyAssignments from "../pages/MyAssignments";
import DashBoard from "../pages/DashBoard";
import AboutSection from "../pages/AboutSection";
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
        path: "about",
        Component: AboutSection,
      },
      {
        path: "/assignments",
        Component: Assignments,
        loader: () =>
          fetch("https://study-bond-server.vercel.app/assignments").then(
            (res) => res.json()
          ),
        hydrateFallbackElement: <Spinner></Spinner>,
      },
      {
        path: "/assignment/:id",
        element: (
          <PrivateRoute>
            <AssignmentDetails></AssignmentDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/create-assignment",
        element: (
          <PrivateRoute>
            <CreateAssignment></CreateAssignment>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-assignments",
        element: (
          <PrivateRoute>
            <MyAssignments></MyAssignments>
          </PrivateRoute>
        ),
      },
      {
        path: "/pending-assignments",
        element: (
          <PrivateRoute>
            <PendingAssignments></PendingAssignments>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoard></DashBoard>
      </PrivateRoute>
    ),
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);
