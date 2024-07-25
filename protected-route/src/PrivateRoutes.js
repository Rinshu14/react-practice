import React, { Children } from 'react'
import { Navigate, Outlet, RouterProvider } from 'react-router-dom'
import Logout from './Logout'
import Contact from './Contact'
import Teams from './Teams'
import { createBrowserRouter } from "react-router-dom";
import Home from './Home'



const PrivateRoutes = ({isLogin}) => {


    const router = createBrowserRouter([

{
        path : "/",
        element: <Home/>,
        Children:[


            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/teams",
                element: <Teams />
            },
            {
                path: "/logout",
                element: <Logout />
            },

        ]

    }

    ]


    )
    console.log("in private Rout")
    return (
      
     isLogin? <Outlet/> :<Navigate to='/login'/>



    )
}

export default PrivateRoutes