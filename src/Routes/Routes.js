
import DashboardLayout from "../Layout/DashboardLayout";
import AddSeller from "../pages/DashBoard/AddSeller/AddSeller";
import AllUser from "../pages/DashBoard/AllUsers/AllUser";
import MangeSeller from "../pages/DashBoard/ManageSeller/MangeSeller";
import MyOrder from "../pages/DashBoard/MyOrder/MyOrder";
import Home from "../pages/Homes/Home/Home";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import Prouct from "../pages/Prouct/Prouct";
import AdminRoute from "./AdminRoute/AdminRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");
const { default: Blog } = require("../pages/Blog/Blog");
const { default: ErrorPage } = require("../pages/ErrorPage/ErrorPage");

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'*',
                element:<ErrorPage></ErrorPage>
            }
            ,

            {
                path:'/login',
                element:<Login></Login>
            },

            {
                path:'/register',
                element:<Register></Register>
            },

            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/category/:id',
                element:<PrivateRoute><Prouct></Prouct></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/allProduct/${params.id}`)
            },

            ]
    },

    {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
            {
                path:'/dashboard',
                element:<MyOrder></MyOrder>
            },
            {
                path:'/dashboard/allusers',
                element:<AdminRoute><AllUser></AllUser></AdminRoute>
            },

            {
                path:'/dashboard/addseller',
                element:<AdminRoute><AddSeller></AddSeller></AdminRoute>
            },
            {
                path:'/dashboard/managesellers',
                element:<AdminRoute><MangeSeller></MangeSeller></AdminRoute>
            }
        ]
    }
])


export default router;