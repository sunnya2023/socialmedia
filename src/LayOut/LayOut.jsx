import React from "react";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from '../pages/home/Home';
import Profile from '../pages/profile/Profile';
import ChatBox from '../pages/chatBox/ChatBox';

//components...

import Nav from '../components/nav/Nav';
import LeftBar from '../components/leftBar/LeftBar';
import RightBar from '../components/rightBar/RightBar';

const LayOut = () => {


  //Feed ....
const Feed =()=>{
  return (
    <>
        <Nav/>
    <main>
      <LeftBar/>
      <div className="container">
        <Outlet/>
      </div>
      <RightBar/>
    </main>
    </>
  )

}

//Router.....
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Feed/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/profile/:id',
          element:<Profile/>
        },
        {
          path:'/chatbox/:id',
          element:<ChatBox/>
        },
      ]
    },
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
