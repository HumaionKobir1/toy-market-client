import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AddToy from "../pages/AddToy/AddToy";
import MyToy from "../pages/MyToy/MyToy";
import ViewDetails from "../pages/ViewDetails/ViewDetails";
import AllToys from "../pages/AllToys/AllToys";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signUp',
          element: <SignUp></SignUp>
        },
        {
          path: '/addToy',
          element: <AddToy></AddToy>
        },
        {
          path: '/myToy',
          element: <PrivateRoute><MyToy></MyToy></PrivateRoute>
        },
        {
          path: 'details/:id',
          element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
          loader: ({params})=> fetch(`http://localhost:5000/allToy/${params.id}`)
        },
        {
          path: '/allToys',
          element: <AllToys></AllToys>,
          loader: ()=> fetch('http://localhost:5000/allToy')
        }
    ]
  },
]);

export default router;