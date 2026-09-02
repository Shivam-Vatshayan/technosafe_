 
import React, { useEffect } from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import FloatingContact from "./components/FloatingContact";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Contact from "./pages/Contact";


/* =========================================================
   SCROLL TO PAGE TOP ON EVERY ROUTE CHANGE
========================================================= */

function RouteScrollTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [pathname]);

  return null;
}


/* =========================================================
   APP
========================================================= */

export default function App() {
  return (
    <div className="app-shell">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <Navbar />


      {/* =====================================================
          FLOATING PHONE + WHATSAPP
      ===================================================== */}

      <FloatingContact />


      {/* =====================================================
          RESET SCROLL WHEN CHANGING PAGE
      ===================================================== */}

      <RouteScrollTop />


      {/* =====================================================
          BACK TO TOP BUTTON
      ===================================================== */}

      <ScrollToTop />


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
 
