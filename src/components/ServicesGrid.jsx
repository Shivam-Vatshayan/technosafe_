import React from "react";
import { Link } from "react-router-dom";
import "./ServicesGrid.css";

const services = [
  {
    icon: "fa-solid fa-magnifying-glass-chart",
    num: "01",
    title: "Eye and Face protection",
    copy: " Reliable protective solutions designed to shield eyes and face from dust, debris, sparks, chemicals, and other workplace hazards while ensuring comfort and clear visibility.",
    image: "images/Eye and Face protection.jpeg",
  },
  {
    icon: "fa-solid fa-bell",
    num: "02",
    title: "Fall Protection",
    copy: "Reliable safety solutions designed to protect workers from falls and provide secure support during work at heights.",
    image: "images/Fall Protection.jpeg",
  },
  {
    icon: "fa-solid fa-droplet",
    num: "03",
    title: "Protective clothing",
    copy: " Durable protective wear designed to safeguard workers from workplace hazards while providing comfort, flexibility, and reliable protection.",
    image: "images/Protective clothing.jpeg",
  },
  {
    icon: "fa-solid fa-fire-extinguisher",
    num: "04",
    title: "Emergency Eye and Body Showers",
    copy: " Essential emergency safety equipment designed to quickly rinse away hazardous chemicals and contaminants from the eyes and body.",
    image: "images/Emergency Eye and Body Showers.jpeg",
  },
  {
    icon: "fa-solid fa-screwdriver-wrench",
    num: "05",
    title: "Anchorage Solutions",
    copy: " Reliable anchorage systems designed to provide secure attachment and dependable support for workers operating at heights.sential protec or emergency situations.",
    image: "images/Anchorage Solutions.jpeg",
  },
  {
    icon: "fa-solid fa-graduation-cap",
    num: "06",
    title: "Safe storage for flammable liquids",
    copy: "Secure storage solutions designed to safely contain flammable liquids, reduce fire risks, and protect people and workplaces.",
    image: "images/Safe storage for flammable liquids..jpeg",
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