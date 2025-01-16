import { createBrowserRouter } from "react-router-dom";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import ErrorPage from "../Pages/ErrorPage";
import AddBook from "../Pages/AddBook";
import AllBooks from "../Pages/AllBooks";
import UpdateBook from "../Components/UpdateBook";
import PrivetRoute from "./PrivetRoute";
import CategoryBooks from "../Components/CategoryBooks";
import DetailsBook from "../Components/DetailsBook";
import BorrowedBooks from "../Pages/BorrowedBooks";


const Router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayouts></HomeLayouts>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/all-book',
          element:<PrivetRoute><AllBooks></AllBooks></PrivetRoute>,
          loader: () => fetch('http://localhost:3000/books')
        },
        {
          path:'/add-book',
          element:<PrivetRoute><AddBook></AddBook></PrivetRoute>,
        },
        {
          path:'/borrowed-book',
          element:<PrivetRoute><BorrowedBooks></BorrowedBooks></PrivetRoute>,
        },
        {
          path:'/updatebook/:id',
          element:<UpdateBook></UpdateBook>,
          loader: ({params}) => fetch(`http://localhost:3000/books/${params.id}`)
        },
        {
          path:'/details/:id',
          element:<PrivetRoute><DetailsBook></DetailsBook></PrivetRoute>,
          loader: ({params}) => fetch(`http://localhost:3000/books/${params.id}`)
        },
        {
          path:'/category/:name',
          element:<PrivetRoute><CategoryBooks></CategoryBooks></PrivetRoute>,
          loader: ({params}) => fetch(`http://localhost:3000/books?category=${params.name}`)
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'*',
          element:<ErrorPage></ErrorPage>
        }
      ]
    },
  ]);
export default Router;