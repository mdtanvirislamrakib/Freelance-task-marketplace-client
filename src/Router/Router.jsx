
import {
  createBrowserRouter,
} from "react-router";
import Loader from "../Components/Loader";
import TaskDetails from "../Components/TaskDetails";
import HomeLayout from "../HomeLayout/HomeLayout";
import AddTask from "../Pages/AddTask";
import BrowseTask from "../Pages/BrowseTask";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import MyPostedTask from "../Pages/MyPostedTask";
import Signup from "../Pages/Signup";
import UpdateTask from "../Pages/UpdateTask";
import PrivetRoute from "../Provider/PrivetRoute";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
          index: true,
          loader: () => fetch('https://freelance-task-marketplace-server-peach.vercel.app/tasks'),
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
          loader: () => fetch('https://freelance-task-marketplace-server-peach.vercel.app/browse-collection'),
          hydrateFallbackElement: <Loader></Loader>,
          element: <BrowseTask></BrowseTask>,
        },
        {
          path: '/task-details/:id',
          loader: ({params}) => fetch(`https://freelance-task-marketplace-server-peach.vercel.app/task-details/${params.id}`),
          hydrateFallbackElement: <Loader></Loader>,
          element: <PrivetRoute>
            <TaskDetails></TaskDetails>
          </PrivetRoute>
        },
        {
          path: "/my-posted-tasks/:email",
          loader: ({params}) => fetch(`https://freelance-task-marketplace-server-peach.vercel.app/my-posted-tasks/${params.email}`),
          hydrateFallbackElement: <Loader></Loader>,
          element: <PrivetRoute>
            <MyPostedTask></MyPostedTask>
          </PrivetRoute>
        },
        {
          path: "/update-task/:id",
          loader: ({params}) => fetch(`https://freelance-task-marketplace-server-peach.vercel.app/task-details/${params.id}`),
          hydrateFallbackElement: <Loader></Loader>,
          Component: UpdateTask
        }
    ]
  },
]);