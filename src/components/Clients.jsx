import React from "react";
import "./Clients.css";

const clients = [
  {
    name: "Apex Manufacturing",
    work: "Plant fire protection & hydrant upgrade",
    logo: "",
  },
  {
    name: "UrbanNest Hotels",
    work: "Detection, alarm & emergency lighting",
    logo: "",
  },
  {
    name: "NorthGate Logistics",
    work: "Warehouse risk assessment & suppression",
    logo: "",
  },
  {
    name: "CareFirst Hospitals",
    work: "Fire audit, training & AMC",
    logo: "",
  },
  {
    name: "MetroPoint Offices",
    work: "Addressable fire alarm system",
    logo: "",
  },
  {
    name: "EduSphere Campus",
    work: "Evacuation planning & safety drills",
    logo: "",
  },
  {
    name: "PrimeTech Industries",
    work: "Industrial fire detection & suppression",
    logo: "",
  },
  {
    name: "GreenCore Energy",
    work: "Fire safety systems & emergency response",
    logo: "",
  },
  {
    name: "Skyline Residency",
    work: "Hydrant, sprinkler & alarm systems",
    logo: "",
  },
  {
    name: "GrandVista Hotels",
    work: "Complete fire safety compliance",
    logo: "",
  },
  {
    name: "Medicare Health",
    work: "Fire audit & safety infrastructure",
    logo: "",
  },
  {
    name: "Vertex Engineering",
    work: "Industrial fire protection solutions",
    logo: "",
  },
  {
    name: "BluePeak Towers",
    work: "Fire alarm & emergency lighting",
    logo: "",
  },
  {
    name: "RapidMove Logistics",
    work: "Warehouse fire risk management",
    logo: "",
  },
  {
    name: "FutureTech Campus",
    work: "Campus-wide fire safety planning",
    logo: "",
  },
  {
    name: "Central Plaza",
    work: "Commercial fire protection systems",
    logo: "",
  },
  {
    name: "Nova Manufacturing",
    work: "Hydrant & sprinkler installation",
    logo: "",
  },
  {
    name: "EliteCare Medical",
    work: "Fire safety audit & AMC services",
    logo: "",
  },
  {
    name: "UrbanSquare",
    work: "Fire detection & evacuation systems",
    logo: "",
  },
  {
    name: "WestLine Warehousing",
    work: "Suppression & warehouse safety",
    logo: "",
  },
  {
    name: "TechVista Solutions",
    work: "Addressable fire alarm solution",
    logo: "",
  },
  {
    name: "RoyalStay Hotels",
    work: "Hotel fire protection & compliance",
    logo: "",
  },
  {
    name: "IndustrialCore",
    work: "Process plant fire protection",
    logo: "",
  },
  {
    name: "CityCare Hospital",
    work: "Fire audit & emergency preparedness",
    logo: "",
  },
  {
    name: "PrimeSquare Mall",
    work: "Mall-wide fire safety infrastructure",
    logo: "",
  },
  {
    name: "NextGen Education",
    work: "Safety drills & evacuation planning",
    logo: "",
  },
  {
    name: "Axis Business Park",
    work: "Integrated fire detection system",
    logo: "",
  },
  {
    name: "SecureBuild Group",
    work: "Fire protection design & maintenance",
    logo: "",
  },
];


/* Split 28 clients into two rows */
const topClients = clients.slice(0, 14);
const bottomClients = clients.slice(14, 28);


/* Duplicate for seamless infinite scrolling */
const topTrack = [...topClients, ...topClients];
const bottomTrack = [...bottomClients, ...bottomClients];


function ClientCard({ client }) {
  return (
    <article className="ts-client-card">

      {/* Logo */}
      <div className="ts-client-logo">

        {client.logo ? (
          <img
            src={client.logo}
            alt={`${client.name} logo`}
            loading="lazy"
          />
        ) : (
          <div className="ts-client-placeholder">
            <i className="fa-solid fa-building-shield"></i>
          </div>
        )}

      </div>


      {/* Client Info */}
      <div className="ts-client-info">

        <span className="ts-client-type">
          CLIENT
        </span>

        <h3>
          {client.name}
        </h3>

        <p>
          {client.work}
        </p>

      </div>


      {/* Arrow */}
      <div className="ts-client-arrow">
        <i className="fa-solid fa-arrow-up-right"></i>
      </div>

    </article>
  );
}


export default function Clients() {
  return (
    <section className="ts-clients">

      {/* Background Elements */}
      <div className="ts-clients-glow ts-clients-glow-one"></div>
      <div className="ts-clients-glow ts-clients-glow-two"></div>


      <div className="container">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="ts-clients-head">

          <div className="ts-clients-heading">

            <span className="ts-clients-eyebrow">
              <span></span>
              OUR CLIENTS
            </span>

            <h2>
              Trusted where{" "}
              <span>failure isn't an option.</span>
            </h2>

          </div>


          <div className="ts-clients-description">

            <p>
              From industrial facilities and hospitals to hotels,
              commercial spaces and critical infrastructure,
              TechnoSafe delivers dependable fire protection
              engineered around real-world risks.
            </p>

            <div className="ts-clients-stat">

              <strong>28+</strong>

              <span>
                Projects &amp; organisations protected
              </span>

            </div>

          </div>

        </div>

      </div>


      {/* =================================================
          TOP CAROUSEL — LEFT TO RIGHT
      ================================================= */}

      <div className="ts-client-carousel ts-client-carousel-top">

        <div className="ts-client-track ts-client-track-forward">

          {topTrack.map((client, index) => (
            <ClientCard
              client={client}
              key={`top-${client.name}-${index}`}
            />
          ))}

        </div>

      </div>


      {/* =================================================
          GAP / CENTER LABEL
      ================================================= */}

      <div className="ts-clients-middle">

        <span className="ts-clients-middle-line"></span>

        <span className="ts-clients-middle-text">
          FIRE SAFETY • PROTECTION • TRUST
        </span>

        <span className="ts-clients-middle-line"></span>

      </div>


      {/* =================================================
          BOTTOM CAROUSEL — RIGHT TO LEFT
      ================================================= */}

      <div className="ts-client-carousel ts-client-carousel-bottom">

        <div className="ts-client-track ts-client-track-reverse">

          {bottomTrack.map((client, index) => (
            <ClientCard
              client={client}
              key={`bottom-${client.name}-${index}`}
            />
          ))}

        </div>

      </div>


      {/* =================================================
          BOTTOM CONTENT
      ================================================= */}

      <div className="container">

        <div className="ts-clients-footer">

          <div className="ts-clients-footer-icon">
            <i className="fa-solid fa-shield-halved"></i>
          </div>

          <div className="ts-clients-footer-content">

            <strong>
              Protection designed around your environment.
            </strong>

            <p>
              Every project starts with understanding your
              building, people, operations and risk profile.
            </p>

          </div>

          <div className="ts-clients-footer-badge">
            <span>TECHNOSAFE</span>
            <i className="fa-solid fa-arrow-right"></i>
          </div>

        </div>

      </div>

    </section>
  );
}