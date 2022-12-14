
import DashboardLayout from "../Layout/DashboardLayout";
import Blog from "../pages/Blog/Blog";
import AddProduct from "../pages/DashBoard/AddProduct/AddProduct";

import AddSeller from "../pages/DashBoard/AddSeller/AddSeller";
import AllUser from "../pages/DashBoard/AllUsers/AllUser";
import MangeSeller from "../pages/DashBoard/ManageSeller/MangeSeller";
import MyOrder from "../pages/DashBoard/MyOrder/MyOrder";
import MyProduct from "../pages/DashBoard/MyProduct/Myproduct";
import Payment from "../pages/DashBoard/Payment/Payment";
import Home from "../pages/Homes/Home/Home";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import Prouct from "../pages/Prouct/Prouct";
import AdminRoute from "./AdminRoute/AdminRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import SellerRoute from "./SellerRoute/SellerRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");

const { default: ErrorPage } = require("../pages/ErrorPage/ErrorPage");

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            

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
                loader: ({params}) => fetch(`https://secondhand-seller-server.vercel.app/allProduct/${params.id}`)
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
            },
            {
                path:'/dashboard/payment/:id',
                element:<AdminRoute><Payment></Payment></AdminRoute>,
                loader: ({params}) => fetch(`https://secondhand-seller-server.vercel.app/bookings/${params.id}`)
            },

            {
                path:'/dashboard/addproduct',
                element:<AddProduct></AddProduct>
            },

            {
                path:'/dashboard/myproduct',
                element:<MyProduct></MyProduct>
            },
        ]
    }
])


export default router;