import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Store from "../pages/Store";
import { FC } from "react";

const AppRoutes:FC=()=> {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/store"
          element={
            <Layout>
              <Store />
            </Layout>
          }
        />
        <Route
          path="/cart"
          element={
            <Layout>
              <Cart />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}
export default AppRoutes;