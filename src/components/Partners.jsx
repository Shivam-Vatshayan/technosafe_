import React from "react";
import "./Partners.css";

const partners = [
  {
    name: "SafeGuard",
    logo: "",
  },
  {
    name: "Honeywell",
    logo: "",
  },
  {
    name: "Notifier",
    logo: "",
  },
  {
    name: "Siemens",
    logo: "",
  },
  {
    name: "Tyco",
    logo: "",
  },
  {
    name: "Kidde",
    logo: "",
  },
  {
    name: "Johnson Controls",
    logo: "",
  },
  {
    name: "Minimax",
    logo: "",
  },
  {
    name: "Bosch",
    logo: "",
  },
  {
    name: "Viking",
    logo: "",
  },
  {
    name: "FirePro",
    logo: "",
  },
];

export default function Partners() {
  /*
    Duplicate list for seamless infinite carousel
  */
  const carouselItems = [...partners, ...partners];

  return (
    <section className="ts-partners section-sm">
      <div className="container">

        {/* Section Label */}
        <div className="ts-partners-label">
          <span className="ts-partners-line"></span>

          <span>
             
            Partners
          </span>

          <span className="ts-partners-line"></span>
        </div>

      </div>

      {/* Carousel */}
      <div className="ts-partners-carousel">

        <div className="ts-partners-track">

          {carouselItems.map((partner, index) => (
            <div
              className="ts-partner"
              key={`${partner.name}-${index}`}
            >
              <div className="ts-partner-logo">

                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    loading="lazy"
                  />
                ) : (
                  <i className="fa-solid fa-shield-halved"></i>
                )}

              </div>

              <span className="ts-partner-name">
                {partner.name}
              </span>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}