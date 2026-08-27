import React from "react";
import { Link } from "react-router-dom";
import "./AboutPreview.css";

export default function AboutPreview() {
  const features = [
    {
      icon: "fa-solid fa-fire-extinguisher",
      title: "Complete Fire Protection",
      copy: "End-to-end fire protection solutions including extinguishers, hydrants, sprinklers and suppression systems, designed around your property's specific needs."
    },
    {
      icon: "fa-solid fa-bell",
      title: "Early Detection & Alarm",
      copy: "Advanced fire detection and alarm systems designed to identify hazards early, deliver timely alerts and support a rapid emergency response."
    },
    {
      icon: "fa-solid fa-screwdriver-wrench",
      title: "Installation, Testing & AMC",
      copy: "Professional installation, testing, commissioning and preventive maintenance to keep your fire safety systems reliable, compliant and ready."
    }
  ];

  return (
    <section className="ts-about-preview">

      <div className="ts-about-container">

        {/* =====================================================
            IMAGE SIDE
        ===================================================== */}

        <div className="ts-about-media">

          <div className="ts-about-image-wrap">

            <img
              src="/images/about_img.png"
              alt="Professional fire safety engineer inspecting a fire protection system"
            />

            <div className="ts-about-image-overlay"></div>

            {/* FIRE SAFETY STAMP */}

            <div className="ts-about-stamp">

              <i className="fa-solid fa-shield-halved"></i>

              <strong>FIRE</strong>

              <span>SAFETY</span>

            </div>


            {/* MINI TRUST BADGE */}

            <div className="ts-about-mini">

              <i className="fa-solid fa-circle-check"></i>

              Safety engineered. Professionally delivered.

            </div>

          </div>

        </div>


        {/* =====================================================
            CONTENT SIDE
        ===================================================== */}

        <div className="ts-about-copy">

          {/* SECTION HEADING */}

          <div className="section-heading">

            <div className="section-eyebrow">
              <span></span>
              WHY TECHNOSAFE
            </div>

            <h2>
              Protecting what matters,
              <span> before it’s too late.</span>
            </h2>

            <p>
              TechnoSafe delivers professionally engineered fire protection
              solutions for residential, commercial and industrial environments.
              From system design and installation to testing, compliance and
              annual maintenance, we provide dependable solutions that help
              protect people, property and business continuity.
            </p>

          </div>


          {/* =================================================
              FEATURES
          ================================================= */}

          <div className="ts-about-feature-list">

            {features.map((feature) => (
              <div
                className="ts-about-feature"
                key={feature.title}
              >

                <div className="ts-about-feature-icon">

                  <i className={feature.icon}></i>

                </div>


                <div className="ts-about-feature-content">

                  <h3>
                    {feature.title}
                  </h3>

                  <p>
                    {feature.copy}
                  </p>

                </div>

              </div>
            ))}

          </div>


          {/* =================================================
              CTA
          ================================================= */}

          <Link
            className="ts-about-link"
            to="/services"
          >
            Explore Our Services

            <i className="fa-solid fa-arrow-right"></i>

          </Link>

        </div>

      </div>

    </section>
  );
}