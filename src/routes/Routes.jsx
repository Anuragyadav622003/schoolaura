import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";

// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Layout from "./components/Layout";
// import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Wrapper component (e.g., Navbar, Footer)
    children: [
      { path: "", element: <Home/> },
  
    ],
  },
  { path: "*", element: <NotFound /> }, // 404 Page
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
