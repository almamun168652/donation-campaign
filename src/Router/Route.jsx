import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../Pages/Error/ErrorPage";
import HomePage from "../Pages/Home/HomePage";
import Donation from "../Pages/donation/donation";
import Statistics from "../Pages/Statistics/Statistics";
import SeeDetails from "../Pages/SeeDetails/SeeDetails";


const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>
            },
            {
                path: '/donation',
                element: <Donation></Donation>
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            },
            {
                path: '/donation/:id',
                element: <SeeDetails></SeeDetails>
            }
        ]
    }
])

export default myCreatedRoute;