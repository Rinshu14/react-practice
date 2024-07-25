import React, { Children } from 'react'
import Home from './Home'
import About from './About'
import Login from './Login'
import Header from './Header'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
const PublicRoutes = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/about",
            element: <About />
        },

        {
            path: "/login",
            element: <Login />
        },

    ]
    )


    return (
        <RouterProvider router={router} />


    )
}

export default PublicRoutes