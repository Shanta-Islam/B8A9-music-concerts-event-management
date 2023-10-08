import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import EventServiceDetails from "../pages/EventServiceDetails/EventServiceDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('/events.json')
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/event-details/:id",
        element: <EventServiceDetails></EventServiceDetails>,
        loader: ()=> fetch('/events.json')
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
  },
]);

export default router;