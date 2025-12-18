import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import router from "./Routes/router";
import "./index.css";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./Context/AuthProvider";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    <Toaster></Toaster>
    </AuthProvider>
  </StrictMode>
);
