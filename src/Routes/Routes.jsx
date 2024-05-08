import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root/Root";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/Authentication/SignIn";
import SignUp from "../Pages/Authentication/SignUp";
import AddJob from "../Pages/AddJob/AddJob";
import PostedJob from "../Pages/MyPostedJob/PostedJob";
import ErrorPage from "../Components/ErrorPage";
import PlaceBid from "../Pages/MyPostedJob/PlaceBid";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            index: true,
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/jobs')
        },
        {
            path: '/login',
            element: <SignIn></SignIn>
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        },
        {
          path: '/addjob',
          element: <AddJob></AddJob>
        },
        {
          path: '/postedJob',
          element: <PostedJob></PostedJob>,
          loader: () => fetch('http://localhost:5000/jobs')
        },
        {
          path: '/placeBid',
          element: <PlaceBid></PlaceBid>
        }
      ]
    },
  ]);

  export default router;