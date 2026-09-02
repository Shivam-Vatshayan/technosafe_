
import React from "react";
import { Link } from "react-router-dom";
import "./InnerPage.css";

/* =========================================================
   BASE URL
========================================================= */

const BASE_URL = import.meta.env.BASE_URL;


/* =========================================================
   IMAGE HELPER
========================================================= */

const getImagePath = (path) => {
  if (!path) return "";

  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("/")
  ) {
    return path;
  }

  return `${BASE_URL}${path}`;
};


/* =========================================================
   PRODUCT DATA
   ALL PRODUCTS ARE BASED ON PROVIDED IMAGES
========================================================= */

const productSections = [

  /* =========================================================
     FIRE PROTECTION
  ========================================================= */

  {
    title: "Fire Protection",

    description:
      "Professional fire protection equipment designed for rapid response, fire control and emergency preparedness.",

    direction: "left",

    products: [

      {
        name: "Portable Monitor",

        image: "images/PORTABLE MONITOR.jpeg",

        icon: "fa-solid fa-fire-extinguisher",

        text:
          "Portable fire monitoring equipment designed for controlled and effective fire suppression."
      },

      {
        name: "Multi Purpose Nozzle",

        image: "images/MULTI PURPOSE NOZZLE.jpeg",

        icon: "fa-solid fa-faucet",

        text:
          "Versatile fire-fighting nozzle designed for efficient water delivery and controlled fire suppression."
      },

      {
        name: "Fire Fighter Flashlight",

        image: "images/FIRE FIGHTER FLASHLIGHT.jpeg",

        icon: "fa-solid fa-lightbulb",

        text:
          "Reliable emergency flashlight designed to provide clear illumination during fire-fighting and emergency operations."
      },

      {
        name: "Forehead Flashlight",

        image: "images/FOREHEAD FLASHLIGHT.jpeg",

        icon: "fa-solid fa-lightbulb",

        text:
          "Hands-free lighting solution for emergency response, inspection and industrial safety applications."
      },

      {
        name: "Safety Flashlight",

        image: "images/SAFETY FLASHLIGHT.jpeg",

        icon: "fa-solid fa-lightbulb",

        text:
          "Industrial safety flashlight designed for dependable visibility in demanding work environments."
      },

      {
        name: "Fireman Boots",

        image: "images/FIREMAN BOOTS.jpeg",

        icon: "fa-solid fa-shoe-prints",

        text:
          "Protective fire-fighting boots designed to provide durable foot protection in demanding emergency environments."
      }

    ]
  },


  /* =========================================================
     PERSONAL PROTECTIVE EQUIPMENT
  ========================================================= */

  {
    title: "Personal Protective Equipment",

    description:
      "Protective equipment designed to help safeguard personnel from chemical, electrical, impact, heat and workplace hazards.",

    direction: "right",

    products: [

      {
        name: "Chemical Protection Glass",

        image: "images/CHEMICAL PROTECTION GLASS.png",

        icon: "fa-solid fa-glasses",

        text:
          "Protective eyewear designed to shield eyes from chemical splashes and hazardous substances."
      },

      {
        name: "Autoclave Goggles",

        image: "images/AUTOCLAVE GOOGLES.png",

        icon: "fa-solid fa-glasses",

        text:
          "Protective goggles designed for applications involving heat, steam and splash hazards."
      },

      {
        name: "Gas Cutting Goggles",

        image: "images/GAS CUTTING GOOGLES.png",

        icon: "fa-solid fa-glasses",

        text:
          "Protective eyewear designed to help shield eyes from sparks, heat and harmful radiation during gas cutting."
      },

      {
        name: "General Spectacles",

        image: "images/GENERAL SPECTACLES.png",

        icon: "fa-solid fa-glasses",

        text:
          "Protective safety spectacles designed for everyday workplace eye protection against dust and debris."
      },

      {
        name: "Hand Welding Shield",

        image: "images/HAND WELDING SHIELD.png",

        icon: "fa-solid fa-shield-halved",

        text:
          "Hand-held welding protection designed to protect the face and eyes from welding sparks, heat and radiation."
      },

      {
        name: "Face Shield",

        image: "images/FACE SHIELD.png",

        icon: "fa-solid fa-shield-halved",

        text:
          "Full-face protective shield designed to provide additional protection against splashes, particles and workplace hazards."
      },

      {
        name: "Helmet Face Shield",

        image: "images/HELMET FACE SHIELD.png",

        icon: "fa-solid fa-helmet-safety",

        text:
          "Helmet-mounted face protection designed to provide additional facial protection during industrial operations."
      },

      {
        name: "Auto Darkening",

        image: "images/AUTO DARKENING.png",

        icon: "fa-solid fa-helmet-safety",

        text:
          "Auto-darkening welding protection designed to improve visibility and protect against intense welding light."
      },

      {
        name: "Premium Safety Helmet",

        image: "images/PREMIUM SAFETY HELMET.png",

        icon: "fa-solid fa-helmet-safety",

        text:
          "Premium industrial safety helmet designed to provide reliable head protection in demanding workplaces."
      },

      {
        name: "Safety Helmet",

        image: "images/SAFETY HELMET.png",

        icon: "fa-solid fa-helmet-safety",

        text:
          "Industrial safety helmet designed to protect personnel against common workplace impact hazards."
      },

      {
        name: "Safety Helmet With Head Lamp",

        image: "images/SAFETY HELMET WITH HEAD LAMP.png",

        icon: "fa-solid fa-helmet-safety",

        text:
          "Safety helmet with integrated head lamp for improved visibility during low-light industrial operations."
      },

      {
        name: "Chemical Gloves",

        image: "images/CHEMICAL GLOVES.jpeg",

        icon: "fa-solid fa-hand",

        text:
          "Protective gloves designed to provide hand protection during chemical handling and related applications."
      },

      {
        name: "Cut Resistant Gloves",

        image: "images/CUT RESISTANT GLOVES.jpeg",

        icon: "fa-solid fa-hand",

        text:
          "Cut-resistant hand protection designed for applications involving sharp edges and cutting hazards."
      },

      {
        name: "Electric Gloves",

        image: "images/ELECTRIC GLOVES.jpeg",

        icon: "fa-solid fa-bolt",

        text:
          "Electrical protective gloves designed for suitable electrical safety applications and personnel protection."
      },

      {
        name: "Heat Resistant Gloves",

        image: "images/HEAT RESISTANT GLOVES.jpeg",

        icon: "fa-solid fa-temperature-high",

        text:
          "Heat-resistant gloves designed to help protect hands during high-temperature industrial applications."
      },

      {
        name: "Lab Nitrile Gloves",

        image: "images/LAB NITRILE GLOVES.jpeg",

        icon: "fa-solid fa-hand",

        text:
          "Nitrile protective gloves designed for laboratory, handling and general workplace applications."
      },

      {
        name: "Safety Shoes",

        image: "images/SAFETY SHOES.jpeg",

        icon: "fa-solid fa-shoe-prints",

        text:
          "Protective safety footwear designed to provide dependable foot protection in industrial environments."
      },

      {
        name: "PVC Shoes",

        image: "images/PVC SHOES.jpeg",

        icon: "fa-solid fa-shoe-prints",

        text:
          "Durable PVC protective footwear designed for demanding workplace and industrial applications."
      },

      {
        name: "Dielectric Shoes",

        image: "images/DIELECTRIC SHOES.png",

        icon: "fa-solid fa-bolt",

        text:
          "Dielectric protective footwear designed for applications requiring additional electrical insulation protection."
      }

    ]
  },


  /* =========================================================
     EMERGENCY & SPILL RESPONSE
  ========================================================= */

  {
    title: "Emergency & Spill Response",

    description:
      "Emergency response equipment designed to provide immediate support during workplace incidents, contamination and spill situations.",

    direction: "left",

    products: [

      {
        name: "Emergency Eye Shower",

        image: "images/EYE SHOWER.png",

        icon: "fa-solid fa-shower",

        text:
          "Emergency eye wash equipment designed to provide immediate flushing support following eye contamination."
      },

      {
        name: "Portable Eye Wash",

        image: "images/PORTABLEYE WASH.png",

        icon: "fa-solid fa-eye",

        text:
          "Portable emergency eye wash solution designed for quick access to eye flushing facilities."
      },

      {
        name: "Wall Mounted Eyewash",

        image: "images/WALL MOUNTED EYEWASH.png",

        icon: "fa-solid fa-eye",

        text:
          "Wall-mounted emergency eyewash equipment designed for accessible workplace eye protection."
      },

      {
        name: "Safety Shower",

        image: "images/SAFETY SHOWER.png",

        icon: "fa-solid fa-shower",

        text:
          "Emergency safety shower designed to provide rapid decontamination support during hazardous exposure."
      },

      {
        name: "Cabinet Shower Unicare",

        image: "images/CABINET SHOWER UNICARE.png",

        icon: "fa-solid fa-shower",

        text:
          "Emergency shower cabinet solution designed for accessible workplace decontamination and emergency response."
      },

      {
        name: "Spill Kit",

        image: "images/SPILL KIT.png",

        icon: "fa-solid fa-kit-medical",

        text:
          "Spill response kit designed to help contain and manage workplace liquid spills quickly and safely."
      },

      {
        name: "4 Drum Pallet",

        image: "images/4 DRUM PALLET.png",

        icon: "fa-solid fa-box",

        text:
          "Spill containment pallet designed to support safe storage and containment of multiple drums."
      }

    ]
  },


  /* =========================================================
     HAZARDOUS AREA & FALL PROTECTION
  ========================================================= */

  {
    title: "Hazardous Area & Fall Protection",

    description:
      "Specialized safety equipment designed for hazardous environments, working at height and demanding industrial operations.",

    direction: "right",

    products: [

      {
        name: "Safety Flashlight",

        image: "images/SAFETY FLASHLIGHT.jpeg",

        icon: "fa-solid fa-lightbulb",

        text:
          "Industrial lighting solution designed to provide dependable illumination in demanding work environments."
      },

      {
        name: "Fire Fighter Flashlight",

        image: "images/FIRE FIGHTER FLASHLIGHT.jpeg",

        icon: "fa-solid fa-lightbulb",

        text:
          "Emergency lighting solution designed for visibility during fire-fighting and rescue operations."
      },

      {
        name: "Harness",

        image: "images/HARNESS.jpeg",

        icon: "fa-solid fa-person-falling",

        text:
          "Full-body safety harness designed to provide fall protection for suitable work-at-height applications."
      },

      {
        name: "Retrievable Blocks",

        image: "images/RETRIEVABLE BLOCKS.jpeg",

        icon: "fa-solid fa-person-falling",

        text:
          "Retrieval and fall protection equipment designed to support safer work-at-height operations."
      },

      {
        name: "Davit Arm System",

        image: "images/DEVIT ARM SYSTEM.jpeg",

        icon: "fa-solid fa-person-falling",

        text:
          "Davit arm system designed to support controlled access, fall protection and retrieval applications."
      }

    ]
  },


  /* =========================================================
     SAFE STORAGE & LABORATORY SOLUTIONS
  ========================================================= */

  {
    title: "Safe Storage & Laboratory Solutions",

    description:
      "Purpose-built solutions for safer storage, chemical segregation and controlled laboratory environments.",

    direction: "left",

    products: [

      {
        name: "Chemical Storage Cabinet",

        image: "images/FOR FLAMABLES ACIDS,BASE &TOXICS.jpeg",

        icon: "fa-solid fa-flask",

        text:
          "Storage solution designed for organized handling and segregation of hazardous chemicals."
      },

      {
        name: "Flammable Storage Cabinet",

        image: "images/FOR FLAMABLES.jpeg",

        icon: "fa-solid fa-fire",

        text:
          "Dedicated storage solution designed for safer organization and handling of flammable substances."
      },

      {
        name: "Document & File Storage",

        image: "images/FOR DOCUMENTS AND FILES.jpeg",

        icon: "fa-solid fa-folder-open",

        text:
          "Dedicated storage solution designed for organized protection and management of documents and files."
      },

      {
        name: "Lab Faucet",

        image: "images/LAB FAUCET.png",

        icon: "fa-solid fa-faucet",

        text:
          "Laboratory faucet solution designed for controlled water supply in laboratory and technical environments."
      }

    ]
  }

];


/* =========================================================
   PRODUCT CARD
========================================================= */

function ProductCard({ product }) {

  const imageSrc = getImagePath(product.image);

  return (
    <article className="ts-product-card">

      {/* =================================================
          PRODUCT IMAGE
      ================================================= */}

      <div className="ts-product-card-image-wrapper">

        {imageSrc ? (

          <img
            src={imageSrc}
            alt={product.name}
            className="ts-product-card-image"
            loading="lazy"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />

        ) : (

          <div className="ts-product-card-image-placeholder">

            <i className={product.icon}></i>

          </div>

        )}

        <div className="ts-product-card-overlay"></div>

        <div className="ts-product-card-icon">

          <i className={product.icon}></i>

        </div>

      </div>


      {/* =================================================
          CONTENT
      ================================================= */}

      <div className="ts-product-card-content">

        <span className="ts-product-card-label">
          SAFETY EQUIPMENT
        </span>

        <h3>
          {product.name}
        </h3>

        <p>
          {product.text}
        </p>

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

              PRODUCTS &amp; SAFETY EQUIPMENT

            </span>


            <h1>

              Equipment built around

              <strong>
                workplace safety.
              </strong>

            </h1>


            <p>

              Explore our complete range of fire protection,
              personal protective equipment, emergency response,
              hazardous-area protection, fall protection and
              safe storage solutions.

            </p>


            {/* HERO STATS */}

            <div className="ts-products-hero-stats">

              <div>

                <strong>
                  05
                </strong>

                <span>
                  Product Groups
                </span>

              </div>


              <div>

                <strong>
                  39+
                </strong>

                <span>
                  Safety Solutions
                </span>

              </div>


              <div>

                <strong>
                  24/7
                </strong>

                <span>
                  Protection Focus
                </span>

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


          {/* =================================================
              INTRO
          ================================================= */}

          <div className="ts-products-intro">

            <span>
              OUR PRODUCT RANGE
            </span>

            <h2>

              Complete protection.

              <strong>
                One place.
              </strong>

            </h2>

            <p>

              From fire protection and PPE to emergency response,
              hazardous-area protection, fall protection and safe
              storage solutions, discover products selected around
              real workplace risks.

            </p>

          </div>


          {/* =================================================
              PRODUCT SECTIONS
          ================================================= */}

          {productSections.map((section) => (

            <section
              className="ts-product-section"
              key={section.title}
            >


              {/* =================================================
                  SECTION HEADER
              ================================================= */}

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
                  CAROUSEL
              ================================================= */}

              <div className="ts-product-carousel-wrapper">

                <div
                  className={`ts-product-carousel ${
                    section.direction === "right"
                      ? "ts-carousel-right"
                      : "ts-carousel-left"
                  }`}
                >

                  {/* =================================================
                      FIRST SET
                  ================================================= */}

                  <div className="ts-product-carousel-track">

                    {section.products.map((product, index) => (

                      <ProductCard
                        key={`first-${section.title}-${index}`}
                        product={product}
                      />

                    ))}

                  </div>


                  {/* =================================================
                      DUPLICATE SET
                  ================================================= */}

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
          BOTTOM CTA
      ===================================================== */}

      <section className="ts-products-bottom">

        <div className="container">

          <div className="ts-products-bottom-box">


            {/* ICON */}

            <div className="ts-products-bottom-icon">

              <i className="fa-solid fa-shield-halved"></i>

            </div>


            {/* CONTENT */}

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


            {/* BUTTON */}

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

