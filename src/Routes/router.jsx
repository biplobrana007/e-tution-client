import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Tuitions from "../Pages/Tuition/Tuitions";
import Tutors from "../Pages/Tutor/Tutors";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import DashboardLayout from "../Layouts/DashboardLayout";



const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path:"/tuitions",
        element:<Tuitions></Tuitions>
      },
      {
        path: "/tutors",
        element:<Tutors></Tutors>
      }
    ],
  },
  {
    path:"login",
    Component: Login
  },
  {
    path:"register",
    Component: Register
  },
  {
    path:"dashboard",
    Component: DashboardLayout,
  }
]);
export default router;
