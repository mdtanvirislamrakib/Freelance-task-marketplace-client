
import {
  createBrowserRouter,
} from "react-router";
import HomeLayout from "../HomeLayout/HomeLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            index: true,
            Component: Home,
        }
    ]
  },
]);