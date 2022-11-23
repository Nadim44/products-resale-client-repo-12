import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Oppo from "../../Pages/Home/Categories/AllPhone/Oppo/Oppo";

import Samsung from "../../Pages/Home/Categories/AllPhone/Samsung/Samsung";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";

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
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/samsung',
                element: <Samsung></Samsung>
            },
            {
                path: '/oppo',
                element: <Oppo></Oppo>
            },

        ]
    },

])

export default router;