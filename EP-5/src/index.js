import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";

import Header from "./components/Header";

import "./index.css";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantItem from "./components/RestaurantItem";


const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet/>
    </>
  );
};

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <About/>
      }, 
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantItem/>
      }
    ],
    errorElement: <Error/>
  },
  

])

const root = ReactDOM.createRoot(document.getElementById("root"));
//Redering Function Component
root.render(<RouterProvider router={appRoute}/>);
