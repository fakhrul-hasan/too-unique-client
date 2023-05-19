import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../components/Pages/Home";
import Blogs from "../components/Pages/Blogs";
import ErrorPage from "../components/Pages/ErrorPage";
import AddToy from "../components/Pages/AddToy";
import AllToys from "../components/Pages/AllToys";
import ToyDetails from "../components/Pages/ToyDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'blogs',
            element: <Blogs></Blogs>
        },
        {
          path: 'addToy',
          element: <AddToy></AddToy>
        },
        {
          path: 'allToys',
          element: <AllToys></AllToys>,
          loader: ()=>fetch('http://localhost:3000/totalToys')
        },
        {
          path: 'toyDetails/:id',
          element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
          loader: ({params})=>fetch(`http://localhost:3000/toyDetails/${params.id}`)
        }
      ]
    },
  ]);

  export default router;