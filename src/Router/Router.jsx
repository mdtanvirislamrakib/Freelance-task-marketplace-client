
import {
  createBrowserRouter,
} from "react-router";
import HomeLayout from "../HomeLayout/HomeLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
          index: true,
          Component: Home,
        },
        {
          path: '/signup',
          Component: Signup,
        },
        {
          path: '/login',
          Component: Login,
        }
    ]
  },
]);