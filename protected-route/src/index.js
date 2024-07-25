import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Teams from "./Teams";
import Login from "./Login";
import Logout from "./Logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/teams",
        element: <Teams />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/logout",
        element: <Logout />
      }
    ]
  },


]


)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // <RouterProvider router={router}>
    <App />
  // </RouterProvider>


);


