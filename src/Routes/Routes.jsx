import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root/Root";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/Authentication/SignIn";
import SignUp from "../Pages/Authentication/SignUp";
import AddJob from "../Pages/AddJob/AddJob";
import PostedJob from "../Pages/MyPostedJob/PostedJob";
import ErrorPage from "../Components/ErrorPage";
import PlaceBid from "../Pages/PlaceBid/PlaceBid";
import MyBid from "../Pages/PlaceBid/MyBid";
import UpdateMyBid from "../Pages/PlaceBid/UpdateMyBid";



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
        path: '/placeBid/:id',
        element: <PlaceBid></PlaceBid>,
        loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`)
      },
      {
        path: '/myBids',
        element: <MyBid></MyBid>,
      },
      {
        path: '/updateBid/:id',
        element: <UpdateMyBid></UpdateMyBid>,
        loader: ({ params }) => fetch(`http://localhost:5000/bids/${params.id}`)
      },
    ]
  },
]);

export default router;