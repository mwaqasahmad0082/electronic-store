
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Vesite from "./pages/Vesite";
import Discount from "./pages/Discount";
import Slider from "./pages/Slider";
import Services from "./pages/Services";
import Contect from "./pages/Contect";
import Layout from "./pages/Layout";

function App() {
  const router = createBrowserRouter([
   
    {
      path: "/",
      element: (
        <Layout>
          <About />
        </Layout>
      ),
    },
    {
      path: "/about",
      element: (
        <Layout>
          <About />
        </Layout>
      ),
    },
    {
      path: "/product",
      element: (
        <Layout>
          <Product />
        </Layout>
      ),
    },
    {
      path: "/vesite",
      element: (
        <Layout>
          <Vesite />
        </Layout>
      ),
    },
    {
      path: "/discount",
      element: (
        <Layout>
          <Discount />
        </Layout>
      ),
    },
    {
      path: "/slider",
      element: (
        <Layout>
          <Slider />
        </Layout>
      ),
    },
    {
      path: "/services",
      element: (
        <Layout>
          <Services />
        </Layout>
      ),
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;