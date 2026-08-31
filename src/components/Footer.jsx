import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const logoPath = `${import.meta.env.BASE_URL}images/technosafe-logo.jpeg`;

  return (
    <footer className="ts-footer">

      {/* Background glow */}
      <div className="ts-footer-glow ts-footer-glow-left"></div>
      <div className="ts-footer-glow ts-footer-glow-right"></div>

      <div className="container">

        <div className="ts-footer-main">

          {/* BRAND */}
          <div className="ts-footer-brand">

            <Link to="/" className="ts-footer-logo-wrap">
              <img
                className="ts-footer-logo"
                src={logoPath}
                alt="TechnoSafe Solutions"
              />
            </Link>

            <p className="ts-footer-description">
              Engineered fire safety solutions for people,
              property and uninterrupted business.
            </p>

            {/* Trust badge */}
            <div className="ts-footer-trust">
              <span className="ts-footer-trust-icon">
                <i className="fa-solid fa-shield-halved"></i>
              </span>

              <span>
                Protection you can depend on.
              </span>
            </div>

            {/* Socials */}
            <div className="ts-footer-socials">

              <a
                href="#"
                aria-label="Instagram"
                className="ts-footer-social"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="ts-footer-social"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>

              <a
                href="mailto:sales@technosafe.in"
                aria-label="Email"
                className="ts-footer-social"
              >
                <i className="fa-solid fa-envelope"></i>
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="ts-footer-social"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>

            </div>

          </div>


          {/* COMPANY */}
          <div className="ts-footer-column">

            <h4>Company</h4>

            <div className="ts-footer-links">
              <Link to="/about">About Us</Link>
              <Link to="/services">Services</Link>
              <Link to="/contact">Contact</Link>
            </div>

          </div>


          {/* SOLUTIONS */}
          <div className="ts-footer-column">

            <h4>Solutions</h4>

            <div className="ts-footer-links">

              <Link to="/products">
                Fire Extinguishers
              </Link>

              <Link to="/products">
                Fire Alarm Systems
              </Link>

              <Link to="/products">
                Hydrant Systems
              </Link>

              <Link to="/products">
                PPE &amp; Safety Kits
              </Link>

            </div>

          </div>


          {/* CONTACT */}
          <div className="ts-footer-column ts-footer-contact">

            <h4>Reach us</h4>

            <div className="ts-footer-contact-list">

              {/* ADDRESS */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Plot+No.+51+Sundernagar+Naraingarh+Road+Ambala+City+Haryana+134003"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="ts-footer-contact-icon">
                  <i className="fa-solid fa-location-dot"></i>
                </span>

                <span>
                  Plot No. 51,
                  <br />
                  Sundernagar, Naraingarh Road,
                  <br />
                  Ambala City, Haryana – 134003
                </span>
              </a>


              {/* PHONE */}
              <a href="tel:+919813055906">

                <span className="ts-footer-contact-icon">
                  <i className="fa-solid fa-phone"></i>
                </span>

                <span>
                  +91 98130 55906
                </span>

              </a>


              {/* EMAIL */}
              <a href="mailto:sales@technosafe.in">

                <span className="ts-footer-contact-icon">
                  <i className="fa-solid fa-envelope"></i>
                </span>

                <span>
                  sales@technosafe.in
                </span>

              </a>

            </div>

          </div>

        </div>


        {/* FOOTER CTA STRIP */}
        <div className="ts-footer-strip">

          <span className="ts-footer-strip-line"></span>

          <span className="ts-footer-strip-text">
            FIRE SAFETY • ENGINEERED PROTECTION • TRUST
          </span>

          <span className="ts-footer-strip-line"></span>

        </div>

      </div>


      {/* BOTTOM */}
      <div className="ts-footer-bottom">

        <div className="container ts-footer-bottom-inner">

          <p>
            © 2026 TechnoSafe Solutions.
            All rights reserved.
          </p>

          <span>
            Safety first. Always.
          </span>

        </div>

      </div>

    </footer>
  );
}