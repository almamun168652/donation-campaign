import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../Pages/Error/ErrorPage";
import HomePage from "../Pages/Home/HomePage";
import Statistics from "../Pages/Statistics/Statistics";
import SeeDetails from "../Pages/SeeDetails/SeeDetails";
import Donation from "../Pages/Donation/Donation";


const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>,
                loader: ()=> fetch('/donation.json')
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
                path: '/details/:id',
                element: <SeeDetails></SeeDetails>,
                loader: ()=> fetch('/donation.json')
            }
        ]
    }
])

export default myCreatedRoute;