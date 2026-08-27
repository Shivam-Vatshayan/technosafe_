import React from "react";
import SectionHeading from "./SectionHeading";
import "./Industries.css";

const items = [
  {
    number: "01",
    icon: "fa-solid fa-building",
    title: "Commercial",
    copy: "Offices, retail, malls & mixed-use buildings",
  },
  {
    number: "02",
    icon: "fa-solid fa-industry",
    title: "Industrial",
    copy: "Factories, warehouses & process plants",
  },
  {
    number: "03",
    icon: "fa-solid fa-hotel",
    title: "Hospitality",
    copy: "Hotels, restaurants & guest facilities",
  },
  {
    number: "04",
    icon: "fa-solid fa-hospital",
    title: "Healthcare",
    copy: "Hospitals, clinics & care environments",
  },
  {
    number: "05",
    icon: "fa-solid fa-graduation-cap",
    title: "Education",
    copy: "Schools, campuses & institutions",
  },
  {
    number: "06",
    icon: "fa-solid fa-server",
    title: "Critical Infrastructure",
    copy: "Data centres, utilities & high-value assets",
  },
];

export default function Industries() {
  return (
    <section className="ts-industries section">
      <div className="container">

        {/* Section Heading */}
        <SectionHeading
          eyebrow="Where we protect"
          title="Solutions shaped around <span>your environment.</span>"
          copy="Different buildings create different risks. Our systems are designed around how your people, assets and operations actually work."
          center
        />

        {/* Industries Grid */}
        <div className="ts-industries-grid">
          {items.map((item, index) => (
            <article
              className="ts-industry-card reveal"
              key={item.title}
              style={{
                "--delay": `${index * 80}ms`,
              }}
            >
              {/* Background Number */}
              <span className="ts-industry-number">
                {item.number}
              </span>

              {/* Top */}
              <div className="ts-industry-top">

                <div className="ts-industry-icon">
                  <i className={item.icon}></i>
                </div>

                <span className="ts-industry-arrow">
                  <i className="fa-solid fa-arrow-up-right"></i>
                </span>

              </div>

              {/* Content */}
              <div className="ts-industry-content">

                <span className="ts-industry-label">
                  INDUSTRY
                </span>

                <h3>{item.title}</h3>

                <p>{item.copy}</p>

              </div>

              {/* Bottom Line */}
              <div className="ts-industry-line">
                <span></span>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Information */}
        <div className="ts-industries-footer reveal">

          <div className="ts-industries-footer-icon">
            <i className="fa-solid fa-shield-halved"></i>
          </div>

          <div className="ts-industries-footer-content">
            <strong>
              Every environment has a different risk profile.
            </strong>

            <p>
              We engineer fire protection around your building,
              people and operational requirements.
            </p>
          </div>

          <div className="ts-industries-footer-arrow">
            <i className="fa-solid fa-arrow-right"></i>
          </div>

        </div>

      </div>
    </section>
  );
}