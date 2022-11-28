import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import ManageProducts from "../../Pages/Dashboard/ManageProducts/ManageProducts";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";

import Oppo from "../../Pages/Home/Categories/AllPhone/Oppo/Oppo";

import Samsung from "../../Pages/Home/Categories/AllPhone/Samsung/Samsung";
import Home from "../../Pages/Home/Home/Home";
import Category from "../../Pages/Home/HomeCategory/Category";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
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

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
                // element: <AllUsers></AllUsers>

            },
            {
                path: '/dashboard/addproduct',
                // element: <AdminRoute> <AddProduct></AddProduct></AdminRoute>
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/manageproducts',
                // element: <AdminRoute><ManageProducts></ManageProducts></AdminRoute>
                element: <ManageProducts></ManageProducts>
            }
        ]
    }

])

export default router;