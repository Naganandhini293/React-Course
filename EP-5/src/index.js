import React, { lazy, Suspense, use, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Header from "./components/Header";

import "./index.css";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantItem from "./components/RestaurantItem";
import UserContext from "./utils/UserContext";
// import Grocery from "./components/Grocery";
import { Provider } from "react-redux";
import AppStore from "./utils/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
    const [userName, setUserName] = useState("Default");
    useEffect(() => {
        //API to fetch logged in details with input
        setUserName("Naganandhini");
    }, []);
    return (
        <>
            <Provider store={AppStore}>
                <UserContext.Provider
                    value={{ loggedInUser: userName, setUserName }}
                >
                    <Header />
                    <Outlet />
                </UserContext.Provider>
            </Provider>
        </>
    );
};

const appRoute = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/grocery",
                element: (
                    <Suspense fallback={<h1>Loading</h1>}>
                        <Grocery />
                    </Suspense>
                ),
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantItem />,
            },
        ],
        errorElement: <Error />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
//Redering Function Component
root.render(<RouterProvider router={appRoute} />);
