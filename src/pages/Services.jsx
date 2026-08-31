import React from "react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import "./InnerPage.css";

const BASE_URL = import.meta.env.BASE_URL;

const services = [
  {
    no: "01",
    icon: "fa-solid fa-triangle-exclamation",
    title: "Fire Risk Assessment",
    text: "Identify hazards, evaluate risks and create a clear action plan for improving fire safety.",
  },
  {
    no: "02",
    icon: "fa-solid fa-bell",
    title: "Fire Alarm & Detection",
    text: "Addressable and conventional fire alarm systems with detectors, MCPs, sounders and panels.",
  },
  {
    no: "03",
    icon: "fa-solid fa-droplet",
    title: "Hydrant & Sprinkler Systems",
    text: "Complete hydrant and sprinkler solutions including pumps, tanks, hose reels and accessories.",
  },
  {
    no: "04",
    icon: "fa-solid fa-cloud",
    title: "Fire Suppression Systems",
    text: "Specialized suppression solutions for server rooms, electrical areas and high-value assets.",
  },
  {
    no: "05",
    icon: "fa-solid fa-fire-extinguisher",
    title: "Fire Extinguisher Services",
    text: "Supply, installation, inspection, refilling and servicing of fire extinguishers.",
  },
  {
    no: "06",
    icon: "fa-solid fa-screwdriver-wrench",
    title: "AMC & Maintenance",
    text: "Planned inspection, testing and preventive maintenance to keep systems operational.",
  },
  {
    no: "07",
    icon: "fa-solid fa-clipboard-check",
    title: "Fire Safety Audit",
    text: "Professional audits to identify safety gaps, operational risks and improvement areas.",
  },
  {
    no: "08",
    icon: "fa-solid fa-graduation-cap",
    title: "Fire Safety Training",
    text: "Practical extinguisher training, evacuation drills and emergency response awareness.",
  },
  {
    no: "09",
    icon: "fa-solid fa-file-shield",
    title: "Compliance & Documentation",
    text: "Inspection records, checklists, asset registers, drawings and audit documentation.",
  },
  {
    no: "10",
    icon: "fa-solid fa-lightbulb",
    title: "Emergency Lighting",
    text: "Emergency luminaires, exit signs and evacuation wayfinding for safer movement.",
  },
  {
    no: "11",
    icon: "fa-solid fa-door-closed",
    title: "Passive Fire Protection",
    text: "Fire doors, fire stopping and compartmentation solutions to help contain fire and smoke.",
  },
  {
    no: "12",
    icon: "fa-solid fa-gauge-high",
    title: "Fire Pump Testing",
    text: "Inspection and performance testing of fire pumps, pressure systems and related equipment.",
  },
];

const process = [
  {
    number: "01",
    title: "Assess",
    text: "Understand your facility and identify the key risks.",
    icon: "fa-solid fa-magnifying-glass",
  },
  {
    number: "02",
    title: "Design",
    text: "Develop a practical solution around your environment.",
    icon: "fa-solid fa-compass-drafting",
  },
  {
    number: "03",
    title: "Implement",
    text: "Install, test and commission the required systems.",
    icon: "fa-solid fa-screwdriver-wrench",
  },
  {
    number: "04",
    title: "Maintain",
    text: "Keep every critical safety system ready.",
    icon: "fa-solid fa-shield-heart",
  },
];

export default function Services() {
  return (
    <main className="ts-services-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="ts-services-hero">

        <div className="container">

          <div className="ts-services-hero-inner">

            <div className="ts-services-hero-copy">

              <span className="ts-services-eyebrow">
                <span></span>
                TECHNOSAFE SERVICES
              </span>

              <h1>
                Fire safety built for
                <strong> real environments.</strong>
              </h1>

              <p>
                From assessment and engineering to installation,
                training and maintenance, we provide practical
                fire protection solutions designed around your
                facility and its people.
              </p>

              <div className="ts-services-hero-actions">

                <Link
                  to="/contact"
                  className="ts-services-btn-primary"
                >
                  Discuss Your Requirement

                  <i className="fa-solid fa-arrow-right"></i>
                </Link>

                <Link
                  to="/products"
                  className="ts-services-btn-outline"
                >
                  Explore Products
                </Link>

              </div>

            </div>


            {/* =================================================
                HERO VISUAL
            ================================================= */}

            <div className="ts-services-hero-visual">

              <div className="ts-services-ring ts-ring-one"></div>

              <div className="ts-services-ring ts-ring-two"></div>


              <div className="ts-services-hero-center">

                <i className="fa-solid fa-shield-halved"></i>

                <span>FIRE</span>

                <strong>SAFETY</strong>

              </div>


              <div className="ts-services-floating ts-floating-one">

                <i className="fa-solid fa-bell"></i>

                <span>
                  Detection
                </span>

              </div>


              <div className="ts-services-floating ts-floating-two">

                <i className="fa-solid fa-fire-extinguisher"></i>

                <span>
                  Protection
                </span>

              </div>


              <div className="ts-services-floating ts-floating-three">

                <i className="fa-solid fa-screwdriver-wrench"></i>

                <span>
                  Maintenance
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="ts-services-section">

        <div className="container">

          <div className="ts-services-heading">

            <SectionHeading
              eyebrow="OUR CAPABILITIES"
              title="One partner for <span>complete protection.</span>"
              copy="Our services cover the complete lifecycle of your fire-safety infrastructure — from identifying risk to keeping every system operational."
              center
            />

          </div>


          <div className="ts-services-grid">

            {services.map((service) => (

              <article
                className="ts-service-card"
                key={service.no}
              >

                {/* Background Number */}

                <span className="ts-service-bg-number">
                  {service.no}
                </span>


                {/* Card Top */}

                <div className="ts-service-card-top">

                  <div className="ts-service-icon">

                    <i className={service.icon}></i>

                  </div>

                  <span className="ts-service-number">
                    {service.no}
                  </span>

                </div>


                {/* Card Content */}

                <div className="ts-service-card-content">

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.text}
                  </p>

                </div>


                {/* Card Footer */}

                <div className="ts-service-card-footer">

                  <span>
                    EXPLORE SERVICE
                  </span>

                  <i className="fa-solid fa-arrow-right"></i>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="ts-services-process">

        <div className="container">

          <div className="ts-process-header">

            <div>

              <span className="ts-services-eyebrow">

                <span></span>

                OUR APPROACH

              </span>

              <h2>
                From risk to
                <strong> readiness.</strong>
              </h2>

            </div>


            <p>
              A structured approach helps us deliver safety systems
              that are practical, reliable and easier to maintain.
            </p>

          </div>


          <div className="ts-process-grid">

            {process.map((item) => (

              <article
                className="ts-process-item"
                key={item.number}
              >

                <span className="ts-process-number">
                  {item.number}
                </span>


                <div className="ts-process-icon">

                  <i className={item.icon}></i>

                </div>


                <h3>
                  {item.title}
                </h3>


                <p>
                  {item.text}
                </p>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT STRIP
      ===================================================== */}

      <section className="ts-services-contact-strip">

        <div className="container">

          <div className="ts-services-contact-inner">

            <div className="ts-contact-icon">

              <i className="fa-solid fa-headset"></i>

            </div>


            <div className="ts-contact-content">

              <span>
                NEED EXPERT GUIDANCE?
              </span>

              <h3>
                Let's identify the right solution for your facility.
              </h3>

            </div>


            <Link
              to="/contact"
              className="ts-contact-button"
            >
              Contact TechnoSafe

              <i className="fa-solid fa-arrow-right"></i>

            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
