import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../components/Pages/Home";
import Blogs from "../components/Pages/Blogs";
import ErrorPage from "../components/Pages/ErrorPage";
import AddToy from "../components/Pages/AddToy";

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
        }
      ]
    },
  ]);

  export default router;