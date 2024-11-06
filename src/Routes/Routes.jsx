import { createBrowserRouter } from "react-router-dom";

import Home from "./../components/Home";
import Statistics from "./../components/Statistics";
import Dashboard from "./../components/Dashboard";
import ProductCategory from "../components/ProductCategory";
import ProductDetails from "../components/ProductDetails";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../components/Error/ErrorPage";
import AboutUs from "../components/AboutUs";
import Wishlists from "../components/Wishlists";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,

        loader: () => fetch("/categories.json"),
        children: [
          {
            path: "/",
            element: <ProductCategory></ProductCategory>,
            loader: () => fetch("/products.json"),
          },
          {
            path: "/ProductCards/:category",
            element: <ProductCategory></ProductCategory>,
            loader: () => fetch("/products.json"),
          },
        ],
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/aboutus",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        loader: () => fetch("/products.json"),
      },
      {
        path: "/details/:PId",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch("/products.json"),
      },
    ],
  },
]);

export { routes };
