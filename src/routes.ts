import { createBrowserRouter } from "react-router";
import Root from "@/Root";
import Home from "@/pages/Home";
import AllProducts from "@/pages/AllProducts";
import ProductDetail from "@/pages/ProductDetail";
import AboutUs from "@/pages/AboutUs";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "produtos", Component: AllProducts },
      { path: "produtos/:slug", Component: ProductDetail },
      { path: "sobre", Component: AboutUs },
    ],
  },
]);
