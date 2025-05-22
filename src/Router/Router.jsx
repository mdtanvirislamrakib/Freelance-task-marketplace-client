
import {
  createBrowserRouter,
} from "react-router";
import HomeLayout from "../HomeLayout/HomeLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import PrivetRoute from "../Provider/PrivetRoute";
import AddTask from "../Pages/AddTask";
import BrowseTask from "../Pages/BrowseTask";
import MyPostedTask from "../Pages/MyPostedTask";
import Loader from "../Components/Loader";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
          index: true,
          loader: () => fetch('http://localhost:5000/tasks'),
          hydrateFallbackElement: <Loader></Loader>,
          Component: Home,
        },
        {
          path: '/signup',
          Component: Signup,
        },
        {
          path: '/login',
          Component: Login,
        },
        {
          path: '/add-task',
          element: <PrivetRoute>
            <AddTask></AddTask>
          </PrivetRoute>
        },
        {
          path: '/browse-tasks',
          loader: () => fetch('http://localhost:5000/browse-collection'),
          hydrateFallbackElement: <Loader></Loader>,
          element: <BrowseTask></BrowseTask>,
        },
        {
          path: "/my-posted-tasks",
          element: <PrivetRoute>
            <MyPostedTask></MyPostedTask>
          </PrivetRoute>
        }
    ]
  },
]);