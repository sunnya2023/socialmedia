import React from "react";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const LayOut = () => {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default LayOut;
