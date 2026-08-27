import React from "react";
import "./Partners.css";

const partners = [
  {
    name: "SafeGuard",
    logo: null,
  },
  {
    name: "Honeywell",
    logo: null,
  },
  {
    name: "Notifier",
    logo: null,
  },
  {
    name: "Siemens",
    logo: null,
  },
  {
    name: "Tyco",
    logo: null,
  },
  {
    name: "Kidde",
    logo: null,
  },
  {
    name: "Johnson Controls",
    logo: null,
  },
  {
    name: "Minimax",
    logo: null,
  },
  {
    name: "Bosch",
    logo: null,
  },
  {
    name: "Viking",
    logo: null,
  },
  {
    name: "FirePro",
    logo: null,
  },
];

export default function Partners() {
  /*
    Duplicate partners for seamless infinite carousel
  */
  const carouselItems = [...partners, ...partners];

  return (
    <section className="ts-partners section-sm">

      {/* ================================
          SECTION LABEL
      ================================= */}

      <div className="container">

        <div className="ts-partners-label">

          <span className="ts-partners-line"></span>

          <span>Partners</span>

          <span className="ts-partners-line"></span>

        </div>

      </div>


      {/* ================================
          PARTNERS CAROUSEL
      ================================= */}

      <div className="ts-partners-carousel">

        <div className="ts-partners-track">

          {carouselItems.map((partner, index) => (

            <div
              className="ts-partner"
              key={`${partner.name}-${index}`}
            >

              {/* Partner Logo */}
              <div className="ts-partner-logo">

                {partner.logo ? (

                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    loading="lazy"
                  />

                ) : (

                  <div
                    className="ts-partner-placeholder"
                    aria-label={`${partner.name} logo placeholder`}
                  >
                    <i className="fa-solid fa-shield-halved"></i>
                  </div>

                )}

              </div>


              {/* Partner Name */}
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