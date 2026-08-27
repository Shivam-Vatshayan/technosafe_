import React from "react";
import { Link } from "react-router-dom";
import "./ProductsShowcase.css";

const products = [
  {
    title: "Fire Extinguishers",
    copy: "ABC, DCP, CO₂, foam and clean-agent extinguishers for different fire risks.",
    icon: "fa-solid fa-fire-extinguisher",
    image: "/images/fire-extinguisher.jpg"
  },
  {
    title: "Fire Alarm Systems",
    copy: "Conventional and addressable panels, smoke detectors, MCPs and alarm accessories.",
    icon: "fa-solid fa-bell",
    image: "/images/fire-alarm-system.png"
  },
  {
    title: "Hydrant Equipment",
    copy: "Hose reels, landing valves, hydrant accessories and essential firefighting equipment.",
    icon: "fa-solid fa-faucet-drip",
    image: "/images/hydrant-equipment.png"
  },
  {
    title: "Fire Safety Kits",
    copy: "Emergency kits, PPE, safety signage and essential evacuation equipment.",
    icon: "fa-solid fa-kit-medical",
    image: "/images/fire-safety-kits.png"
  }
];

export default function ProductsShowcase() {
  return (
    <section className="ts-products-section">

      <div className="ts-products-container">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="ts-products-head">

          <div className="ts-products-heading">

            <div className="ts-products-eyebrow">
              <span></span>
              PRODUCTS & EQUIPMENT
            </div>

            <h2>
              Fire safety equipment.
              <span> Ready when it matters.</span>
            </h2>

            <p>
              Explore dependable fire protection equipment selected for
              performance, reliability and the specific safety requirements
              of your facility.
            </p>

          </div>


          {/* VIEW ALL BUTTON */}

          <Link
            className="ts-products-btn"
            to="/products"
          >
            View All Products

            <i className="fa-solid fa-arrow-right"></i>
          </Link>

        </div>


        {/* =====================================================
            PRODUCTS GRID
        ===================================================== */}

        <div className="ts-products-grid">

          {products.map((product) => (

            <article
              className="ts-product-card"
              key={product.title}
            >

              {/* IMAGE */}

              <div className="ts-product-image">

                <img
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                />

                <div className="ts-product-image-overlay"></div>


                {/* PRODUCT ICON */}

                <div className="ts-product-icon">

                  <i className={product.icon}></i>

                </div>

              </div>


              {/* CONTENT */}

              <div className="ts-product-content">

                <h3>
                  {product.title}
                </h3>

                <p>
                  {product.copy}
                </p>

                <Link
                  className="ts-product-link"
                  to="/products"
                >
                  Explore Range

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