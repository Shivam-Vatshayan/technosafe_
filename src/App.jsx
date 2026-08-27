import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Contact from "./pages/Contact";


export default function App() {
  return (
    <div className="app-shell">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <Navbar />


      {/* =====================================================
          PAGE ROUTES
      ===================================================== */}

      <main>

        <Routes>

          {/* =================================================
              HOME
          ================================================= */}

          <Route
            path="/"
            element={<Home />}
          />


          {/* =================================================
              ABOUT
          ================================================= */}

          <Route
            path="/about"
            element={<About />}
          />


          {/* =================================================
              SERVICES
          ================================================= */}

          <Route
            path="/services"
            element={<Services />}
          />


          {/* =================================================
              PRODUCTS
          ================================================= */}

          <Route
            path="/products"
            element={<Products />}
          />


          {/* =================================================
              CONTACT
          ================================================= */}

          <Route
            path="/contact"
            element={<Contact />}
          />


          {/* =================================================
              INVALID URL
              → REDIRECT TO HOME
          ================================================= */}

          <Route
            path="*"
            element={
              <Navigate
                to="/"
                replace
              />
            }
          />

        </Routes>

      </main>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />

    </div>
  );
}