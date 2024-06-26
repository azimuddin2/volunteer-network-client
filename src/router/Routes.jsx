import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Register from "../pages/Login/Register/Register";
import Login from "../pages/Login/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Events from "../pages/Events/Events";
import Blog from "../pages/Blog/Blog";
import Dashboard from "../layout/Dashboard";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'events',
                element: <PrivateRoute>
                    <Events></Events>
                </PrivateRoute>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            }
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
    {
        path: 'dashboard',
        element: <PrivateRoute>
            <Dashboard></Dashboard>
        </PrivateRoute>,
        children: [],
    },
]);

export default router;