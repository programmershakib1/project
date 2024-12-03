import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import MainLayout from "../components/MainLayout/MainLayout";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import SignIn from "../components/SignIn/SignIn";
import Register from "../components/Register/Register";
import StartLearning from "../components/StartLearning/StartLearning";
import Tutorials from "../components/Tutorials/Tutorials";
import AboutUs from "../components/AboutUs/AboutUs";
import MyProfile from "../components/MyProfile/MyProfile";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";
import LessonDetail from "../components/LessonDetail/LessonDetail";
import ForgetPassword from "../components/ForgetPassword/ForgetPassword";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/document.json')
            },
            {
                path: '/startLearning',
                element: <StartLearning></StartLearning>,
                loader: () => fetch('/lesson.json')
            },
            {
                path: '/detail/:id',
                element: <PrivateRoute><LessonDetail></LessonDetail></PrivateRoute>,
                loader: async ({params}) => {
                    const res = await fetch('/lingoBingo.json')
                    const data = await res.json()
                    const lesson = data.filter(d => d.lesson_no == params.id)
                    return lesson
                }
            },
            {
                path: '/tutorials',
                element: <PrivateRoute><Tutorials></Tutorials></PrivateRoute>
            },
            {
                path: '/aboutUs',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/myProfile',
                element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>
            },
            {
                path: '/SignIn',
                element: <SignIn></SignIn>
            },
            {
                path: '/SignUp',
                element: <Register></Register>
            },
            {
                path: '/updateProfile',
                element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
            },
            {
                path: '/forgetPassword',
                element: <ForgetPassword></ForgetPassword>
            }
        ]
    }
])

export default router;