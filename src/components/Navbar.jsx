import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const links = [
  ["/", "Home"],
  ["/about", "About"],
  ["/services", "Services"],
  ["/products", "Products"],
  ["/contact", "Contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="ts-nav">

      {/* TOP BAR */}
      <div className="ts-nav-top">
        <div className="container ts-nav-top-inner">

          <div className="ts-nav-top-left">
            <span>
              <i className="fa-solid fa-shield-halved"></i>
              Fire Safety & Protection Solutions
            </span>

            <span className="ts-nav-separator"></span>

            <a href="mailto:sales@technosafe.in">
              <i className="fa-solid fa-envelope"></i>
              sales@technosafe.in
            </a>
          </div>

          <a href="tel:+919813055906">
            <i className="fa-solid fa-phone"></i>
            +91 98130 55906
          </a>

        </div>
      </div>


      {/* MAIN NAV */}
      <nav className="ts-nav-main">

        <div className="container ts-nav-inner">

          {/* LOGO */}
          <NavLink
            to="/"
            className="ts-nav-logo"
            onClick={() => setOpen(false)}
          >
            <img
              src="/images/technosafe-logo.png"
              alt="TechnoSafe Solutions"
            />
          </NavLink>


          {/* DESKTOP / MOBILE LINKS */}
          <div className={`ts-nav-menu ${open ? "open" : ""}`}>

            <div className="ts-nav-links">

              {links.map(([path, label]) => (
                <NavLink
                  key={path}
                  to={path}
                  end={path === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "ts-nav-link active"
                      : "ts-nav-link"
                  }
                >
                  {label}
                </NavLink>
              ))}

            </div>


            <NavLink
              to="/contact"
              className="ts-nav-button"
              onClick={() => setOpen(false)}
            >
              Get Safety Audit
              <i className="fa-solid fa-arrow-right"></i>
            </NavLink>

          </div>


          {/* MOBILE BUTTON */}
          <button
            type="button"
            className="ts-nav-toggle"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>

      </nav>

    </header>
  );
}