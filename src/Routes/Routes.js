
import Home from "../pages/Homes/Home/Home";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import Prouct from "../pages/Prouct/Prouct";

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
                element:<Prouct></Prouct>,
                loader: ({params}) => fetch(`http://localhost:5000/allProduct/${params.id}`)
            },

            {
                path:'*',
                element:<ErrorPage></ErrorPage>
            }
        ]
    }
])


export default router;