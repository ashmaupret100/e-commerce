import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/home-page/home-page.tsx";
import ProductDetailPage from "./pages/product-detail-page/product-detail.tsx";
import ProductListPage from "./pages/product-list-page/product-list-page.tsx";
import Register from "./pages/register/register.tsx";
import SignIn from "./pages/sign-in/sigin-in.tsx";
import ErrorPage from "./pages/error-page/error-page.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/each-item",
    element: <ProductDetailPage />,
  },
  {
    path: "/Products",
    element: <ProductListPage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/error",
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
