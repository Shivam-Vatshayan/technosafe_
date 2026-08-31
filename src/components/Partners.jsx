 
import React from "react";
import "./Partners.css";

const partners = [
  {
    name: "Uni Care",
    logo: "images/partner1.jpeg",
  },
  {
    name: "LAKELAND",
    logo: "images/partner2.jpeg",
  },
  {
    name: "DELTAPLUS",
    logo: "images/partner3.jpeg",
  },
  {
    name: "uvex",
    logo: "images/partner4.jpeg",
  },
  {
    name: "Fuel",
    logo: "images/partner5.jpeg",
  },
  {
    name: "Perf",
    logo: "images/partner6.jpeg",
  },
  {
    name: "pig",
    logo: "images/partner7.jpeg",
  },
  {
    name: "Newpig",
    logo: "images/partner8.jpeg",
  },
  {
    name: "Sure Safety",
    logo: "images/partner9.jpeg",
  },
  {
    name: "Honeywell",
    logo: "images/partner10.jpeg",
  },
  {
    name: "Fuel",
    logo: "images/partner4.jpeg",
  },
];

/*
  GitHub Pages + Vite compatible image path
  Automatically adds the Vite base path.
*/
const getImagePath = (path) => {
  return `${import.meta.env.BASE_URL}${path}`;
};

export default function Partners() {
  /*
    Duplicate partners for seamless infinite carousel
  */
  const carouselItems = [...partners, ...partners];

  return (
    <section className="ts-partners section-sm">

      {/* =================================
          SECTION LABEL
      ================================= */}
      <div className="container">
        <div className="ts-partners-label">

          <span className="ts-partners-line"></span>

          <span>Our Partners</span>

          <span className="ts-partners-line"></span>

        </div>
      </div>

      {/* =================================
          PARTNERS CAROUSEL
      ================================= */}
      <div className="ts-partners-carousel">

        <div className="ts-partners-track">

          {carouselItems.map((partner, index) => (

            <div
              className="ts-partner"
              key={`${partner.name}-${index}`}
            >

              {/* =================================
                  PARTNER IMAGE BOX
              ================================= */}
              <div className="ts-partner-logo">

                {partner.logo ? (
                  <img
                    src={getImagePath(partner.logo)}
                    alt={`${partner.name} logo`}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";

                      const placeholder =
                        e.currentTarget.nextElementSibling;

                      if (placeholder) {
                        placeholder.style.display = "flex";
                      }
                    }}
                  />
                ) : null}

                {/* =================================
                    FALLBACK PLACEHOLDER
                ================================= */}
                <div
                  className="ts-partner-placeholder"
                  aria-label={`${partner.name} logo placeholder`}
                  style={{
                    display: partner.logo ? "none" : "flex",
                  }}
                >
                  <i className="fa-solid fa-shield-halved"></i>
                </div>

              </div>

              {/* =================================
                  PARTNER NAME
              ================================= */}
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
 
