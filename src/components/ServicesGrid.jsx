import React from "react";
import { Link } from "react-router-dom";
import "./ServicesGrid.css";

const services = [
  {
    icon: "fa-solid fa-magnifying-glass-chart",
    num: "01",
    title: "Fire Risk Assessment",
    copy: "Identify fire hazards, vulnerable areas and safety gaps with practical recommendations tailored to your facility.",
    image: "images/fire-risk-assessment.png",
  },
  {
    icon: "fa-solid fa-bell",
    num: "02",
    title: "Fire Alarm & Detection",
    copy: "Reliable conventional and addressable fire alarm systems designed for early detection and rapid emergency response.",
    image: "images/fire-alarm.png",
  },
  {
    icon: "fa-solid fa-droplet",
    num: "03",
    title: "Hydrant & Sprinkler Systems",
    copy: "Professionally engineered hydrant, sprinkler, pump-room and fire suppression systems for dependable protection.",
    image: "images/hydrant-sprinkler.png",
  },
  {
    icon: "fa-solid fa-fire-extinguisher",
    num: "04",
    title: "Fire Extinguishers",
    copy: "Supply, installation and servicing of suitable fire extinguishers for different fire risks and applications.",
    image: "images/fire-extinguisher.jpg",
  },
  {
    icon: "fa-solid fa-screwdriver-wrench",
    num: "05",
    title: "Installation & AMC",
    copy: "Complete installation, testing, commissioning and preventive maintenance to keep your fire systems operational.",
    image: "images/installation-amc.png",
  },
  {
    icon: "fa-solid fa-graduation-cap",
    num: "06",
    title: "Fire Safety Training",
    copy: "Practical fire drills, extinguisher training, evacuation planning and emergency response awareness for your team.",
    image: "images/fire-training.jpg",
  },
];

export default function ServicesGrid() {
  const getAssetPath = (path) => {
    return `${import.meta.env.BASE_URL}${path}`;
  };

  return (
    <section className="ts-services-section">

      <div className="ts-services-container">

        {/* =====================================================
            SECTION HEADING
        ===================================================== */}

        <div className="ts-services-heading">

          <div className="ts-services-eyebrow">
            <span></span>
            OUR CAPABILITIES
          </div>

          <h2>
            Complete fire protection.
            <span> Built for every risk.</span>
          </h2>

          <p>
            From identifying risks to protecting people, property and
            operations, TechnoSafe delivers end-to-end fire safety
            solutions engineered for reliable performance.
          </p>

        </div>


        {/* =====================================================
            SERVICES GRID
        ===================================================== */}

        <div className="ts-services-grid">

          {services.map((service) => (

            <article
              className="ts-service-card"
              key={service.title}
            >

              {/* IMAGE */}

              <div className="ts-service-image">

                <img
                  src={getAssetPath(service.image)}
                  alt={service.title}
                  loading="lazy"
                />

                <div className="ts-service-shade"></div>

              </div>


              {/* TOP */}

              <div className="ts-service-top">

                <span className="ts-service-number">
                  {service.num}
                </span>

                <div className="ts-service-icon">
                  <i className={service.icon}></i>
                </div>

              </div>


              {/* CONTENT */}

              <div className="ts-service-body">

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.copy}
                </p>

                <Link
                  className="ts-service-link"
                  to="/services"
                >
                  View Service

                  <i className="fa-solid fa-arrow-right"></i>
                </Link>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}