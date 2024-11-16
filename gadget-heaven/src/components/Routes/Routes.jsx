import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Home/Home";
import GadgetCards from "../GadgetCards/GadgetCards";
import GadgetDetails from "../GadgetDetails/GadgetDetails";
import Dashboard from "../Dashboard/Dashboard";
import Statistics from "../Statistics/Statistics";
import ErrorPage from "../ErrorPage/ErrorPage";
import NewRoute from "../NewRoute/NewRoute";
import SingUp from "../SingUp/SingUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SingIn from "../SingIn/SingIn";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('../categories.json'),
                children: [
                    {
                        path: '/',
                        element: <GadgetCards></GadgetCards>,
                        loader: () => fetch('../gadget.json'),
                    },
                    {
                        path: '/category/:category',
                        element: <GadgetCards></GadgetCards>,
                        loader: () => fetch('../gadget.json'),
                    }
                ]
            },
            {
                path: '/details/:id',
                element: <GadgetDetails></GadgetDetails>,
                loader: () => fetch('../gadget.json'),
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>,
                loader: () => fetch('../gadget.json'),
            },
            {
                path: '/dashboard',
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            },
            {
                path: '/documents',
                element: <NewRoute></NewRoute>,
            },
            {
                path: '/singUp',
                element: <SingUp></SingUp>
            },
            {
                path: '/singIn',
                element: <SingIn></SingIn>
            }
        ]
    }
]);

export default routes;