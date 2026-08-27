import React from "react";
import { Link } from "react-router-dom";
import "./InnerPage.css";

const productSections = [
  {
    title: "Fire Protection",
    description:
      "Complete fire protection equipment for detection, prevention, first response and emergency control.",
    direction: "left",
    products: [
      {
        name: "Fire Extinguishers",
        image: "/images/products/fire-extinguishers.jpg",
        text: "ABC, CO₂, Foam and Clean Agent fire extinguishers."
      },
      {
        name: "Fire Alarm & Detection",
        image: "/images/products/fire-alarm.jpg",
        text: "Addressable panels, detectors, MCPs, sounders and modules."
      },
      {
        name: "Hydrant & Sprinkler Systems",
        image: "/images/products/hydrant-sprinkler.jpg",
        text: "Hydrant, hose reel, sprinkler and water-based protection equipment."
      },
      {
        name: "Fire Fighting Equipment",
        image: "/images/products/fire-fighting-equipment.jpg",
        text: "Fire blankets, hose accessories and emergency response equipment."
      }
    ]
  },

  {
    title: "Personal Protective Equipment",
    description:
      "Workplace PPE designed to protect personnel against everyday industrial and occupational hazards.",
    direction: "right",
    products: [
      {
        name: "Eye & Face Protection",
        image: "/images/products/eye-face-protection.jpg",
        text: "Safety goggles, spectacles, face shields and splash protection."
      },
      {
        name: "Head Protection",
        image: "/images/products/head-protection.jpg",
        text: "Industrial safety helmets, bump caps and helmet accessories."
      },
      {
        name: "Hand Protection",
        image: "/images/products/hand-protection.jpg",
        text: "Cut, heat, chemical and general-purpose industrial gloves."
      },
      {
        name: "Foot Protection",
        image: "/images/products/foot-protection.jpg",
        text: "Safety shoes, boots and protective industrial footwear."
      },
      {
        name: "Protective Clothing",
        image: "/images/products/protective-clothing.jpg",
        text: "Coveralls, flame-resistant and high-visibility protective clothing."
      },
      {
        name: "Fall Protection Systems",
        image: "/images/products/fall-protection.jpg",
        text: "Harnesses, lanyards, lifelines and anchorage systems."
      }
    ]
  },

  {
    title: "Emergency & Spill Response",
    description:
      "Emergency equipment that helps teams respond quickly and safely to workplace incidents.",
    direction: "left",
    products: [
      {
        name: "Emergency Eye & Safety Showers",
        image: "/images/products/safety-showers.jpg",
        text: "Emergency eye wash stations, safety showers and combined units."
      },
      {
        name: "Spill Containment Solutions",
        image: "/images/products/spill-containment.jpg",
        text: "Spill kits, absorbents, trays and containment equipment."
      },
      {
        name: "Emergency Response Kits",
        image: "/images/products/emergency-response.jpg",
        text: "Ready-to-use equipment for workplace emergency situations."
      },
      {
        name: "Safety Signs & Evacuation",
        image: "/images/products/safety-signs.jpg",
        text: "Safety signage, evacuation aids and emergency identification."
      }
    ]
  },

  {
    title: "Hazardous Area Safety",
    description:
      "Specialized equipment for environments where electrical equipment must meet hazardous-area safety requirements.",
    direction: "right",
    products: [
      {
        name: "Intrinsically Safe Flashlights",
        image: "/images/products/intrinsically-safe-flashlights.jpg",
        text: "Intrinsically safe torches and industrial lighting solutions."
      },
      {
        name: "Explosion Protected Lighting",
        image: "/images/products/explosion-protected-lighting.jpg",
        text: "Specialized lighting solutions for hazardous working environments."
      },
      {
        name: "Industrial Inspection Lights",
        image: "/images/products/inspection-lights.jpg",
        text: "Portable inspection lighting for demanding industrial applications."
      }
    ]
  },

  {
    title: "Safe Storage Solutions",
    description:
      "Purpose-built storage solutions for safer handling, segregation and organization of hazardous materials.",
    direction: "left",
    products: [
      {
        name: "Safety Storage Cabinets",
        image: "/images/products/safety-cabinets.jpg",
        text: "Safety cabinets for organized storage of hazardous materials."
      },
      {
        name: "Chemical Storage",
        image: "/images/products/chemical-storage.jpg",
        text: "Storage solutions designed for controlled chemical handling."
      },
      {
        name: "Flammable Storage",
        image: "/images/products/flammable-storage.jpg",
        text: "Dedicated storage solutions for flammable substances."
      },
      {
        name: "Safety Containers",
        image: "/images/products/safety-containers.jpg",
        text: "Durable containers for safer handling and workplace storage."
      }
    ]
  }
];


/* =========================================================
   PRODUCT CARD
========================================================= */

function ProductCard({ product }) {
  return (
    <article className="ts-product-card">

      <img
        src={product.image}
        alt={product.name}
        className="ts-product-card-image"
      />

      <div className="ts-product-card-overlay"></div>

      <div className="ts-product-card-icon">
        <i className="fa-solid fa-shield-halved"></i>
      </div>

      <div className="ts-product-card-content">

        <span className="ts-product-card-label">
          SAFETY EQUIPMENT
        </span>

        <h3>{product.name}</h3>

        <p>{product.text}</p>

        <Link
          to="/contact"
          className="ts-product-card-link"
        >
          Enquire Now
          <i className="fa-solid fa-arrow-right"></i>
        </Link>

      </div>

    </article>
  );
}


/* =========================================================
   PRODUCTS PAGE
========================================================= */

export default function Products() {
  return (
    <main className="ts-products-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="ts-products-hero">

        <div className="container">

          <div className="ts-products-hero-content">

            <span className="ts-products-eyebrow">
              <span></span>
              PRODUCTS & SAFETY EQUIPMENT
            </span>

            <h1>
              Equipment built around
              <strong> workplace safety.</strong>
            </h1>

            <p>
              Explore our complete range of fire protection,
              personal protective equipment, emergency response
              and industrial safety solutions.
            </p>

            <div className="ts-products-hero-stats">

              <div>
                <strong>05</strong>
                <span>Product Groups</span>
              </div>

              <div>
                <strong>30+</strong>
                <span>Safety Solutions</span>
              </div>

              <div>
                <strong>24/7</strong>
                <span>Protection Focus</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PRODUCT CATALOGUE
      ===================================================== */}

      <section className="ts-products-content">

        <div className="container">

          <div className="ts-products-intro">

            <span>
              OUR PRODUCT RANGE
            </span>

            <h2>
              Complete protection.
              <strong> One place.</strong>
            </h2>

            <p>
              From fire protection and PPE to emergency response,
              hazardous-area equipment and safe storage solutions,
              discover products selected around real workplace risks.
            </p>

          </div>


          {/* =================================================
              CATEGORIES
          ================================================= */}

          {productSections.map((section) => (

            <section
              className="ts-product-section"
              key={section.title}
            >

              <div className="ts-product-section-head">

                <div className="ts-product-section-title">

                  <div>

                    <span className="ts-product-section-label">
                      SAFETY SOLUTIONS
                    </span>

                    <h2>
                      {section.title}
                    </h2>

                  </div>

                </div>

                <p>
                  {section.description}
                </p>

              </div>


              {/* =================================================
                  ALTERNATING CAROUSEL
              ================================================= */}

              <div className="ts-product-carousel-wrapper">

                <div
                  className={`ts-product-carousel ${
                    section.direction === "right"
                      ? "ts-carousel-right"
                      : "ts-carousel-left"
                  }`}
                >

                  {/* First set */}

                  <div className="ts-product-carousel-track">

                    {section.products.map((product, index) => (

                      <ProductCard
                        key={`first-${section.title}-${index}`}
                        product={product}
                      />

                    ))}

                  </div>


                  {/* Duplicate set */}

                  <div
                    className="ts-product-carousel-track"
                    aria-hidden="true"
                  >

                    {section.products.map((product, index) => (

                      <ProductCard
                        key={`second-${section.title}-${index}`}
                        product={product}
                      />

                    ))}

                  </div>

                </div>

              </div>

            </section>

          ))}

        </div>

      </section>


      {/* =====================================================
          CONTACT STRIP
      ===================================================== */}

      <section className="ts-products-bottom">

        <div className="container">

          <div className="ts-products-bottom-box">

            <div className="ts-products-bottom-icon">
              <i className="fa-solid fa-shield-halved"></i>
            </div>

            <div>

              <span>
                NEED THE RIGHT EQUIPMENT?
              </span>

              <h2>
                Find the right protection for your facility.
              </h2>

              <p>
                Share your application or safety requirement
                with our team and get guidance on suitable
                equipment and protection solutions.
              </p>

            </div>

            <Link
              to="/contact"
              className="ts-products-bottom-btn"
            >
              Talk to an Expert
              <i className="fa-solid fa-arrow-right"></i>
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}