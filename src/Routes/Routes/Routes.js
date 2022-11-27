import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";

import Oppo from "../../Pages/Home/Categories/AllPhone/Oppo/Oppo";

import Samsung from "../../Pages/Home/Categories/AllPhone/Samsung/Samsung";
import Home from "../../Pages/Home/Home/Home";
import Category from "../../Pages/Home/HomeCategory/Category";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            // {
            //     path: '/samsung',
            //     element: <Samsung></Samsung>
            // },
            // {
            //     path: '/oppo',
            //     element: <Oppo></Oppo>
            // },

        ]
    },
    {
        path: '/dashboard',
        // element: <Dashboard></Dashboard>
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
    }

])

export default router;