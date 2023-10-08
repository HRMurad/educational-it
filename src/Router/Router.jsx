import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home";
import Root from "../Components/Root";
import Services from "../Components/Services";
import DetailService from "../Components/DetailService";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ProductBuyRegForm from "../Components/ProductBuyRegForm";
import DisplayDetailsService from "../Components/DisplayDetailsService";
import PrivateRoutes from "./PrivateRoutes";
import About from "../Address/About";
import Contact from "../Address/Contact";
import Policy from "../Address/Policy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        loader: () => fetch("/itEducation.json"),
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/detailService/:id",
        loader: () => fetch("/itEducation.json"),
        element: (
          <PrivateRoutes>
            <DetailService></DetailService>
          </PrivateRoutes>
        ),
      },

      {
        path: "/productRegForm",
        element: <ProductBuyRegForm></ProductBuyRegForm>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/policy",
        element: <Policy></Policy>,
      },
    ],
  },
]);
export default router;
