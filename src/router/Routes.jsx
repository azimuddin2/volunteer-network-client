import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Register from "../pages/Login/Register/Register";
import Login from "../pages/Login/Login/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
        ],
    },
    {
        path: 'register',
        element: <Register></Register>
    },
    {
        path: 'login',
        element: <Login></Login>
    },
]);

export default router;