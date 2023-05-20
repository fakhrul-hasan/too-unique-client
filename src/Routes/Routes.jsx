import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../components/Pages/Home";
import Blogs from "../components/Pages/Blogs";
import ErrorPage from "../components/Pages/ErrorPage";
import AddToy from "../components/Pages/AddToy";
import AllToys from "../components/Pages/AllToys";
import ToyDetails from "../components/Pages/ToyDetails";
import PrivateRoute from "./PrivateRoute";
import MyToys from "../components/Pages/MyToys/MyToys";
import UpdateToy from "../components/Pages/UpdateToy";

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
          loader: ()=>fetch('https://too-unique-server.vercel.app/totalToys')
        },
        {
          path: 'toyDetails/:id',
          element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
          loader: ({params})=>fetch(`https://too-unique-server.vercel.app/toyDetails/${params.id}`)
        },
        {
          path: 'myToys',
          element: <MyToys></MyToys>
        },
        {
          path: 'updateToy/:id',
          element: <UpdateToy></UpdateToy>,
          loader: ({params})=>fetch(`https://too-unique-server.vercel.app/toyDetails/${params.id}`)

        }
      ]
    },
  ]);

  export default router;