import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Tuitions from "../Pages/Tuition/Tuitions";
import Tutors from "../Pages/Tutor/Tutors";

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
]);
export default router;
