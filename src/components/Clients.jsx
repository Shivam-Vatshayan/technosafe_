 
import React from "react";
import "./Clients.css";

const clients = [
  {
    name: "ACC",
    work: "Cement & Building Materials",
    logo: "/images/client1.jpeg",
  },
  {
    name: "DLF",
    work: "Commercial & Residential Real Estate",
    logo: "/images/client2.jpeg",
  },
  {
    name: "HMEL",
    work: "Refining & Petrochemicals",
    logo: "/images/client3.jpeg",
  },
  {
    name: "PSPCL",
    work: "Electricity & Power Services",
    logo: "/images/client4.jpeg",
  },
  {
    name: "LARSEN  & TURBO",
    work: "Infrastructure & Technology",
    logo: "/images/client5.jpeg",
  },
  {
    name: "WRIGLEY",
    work: "Chewing Gum Manufacturing",
    logo: "/images/client6.jpeg",
  },
  {
    name: "TOTECH",
    work: "Engineering Solutions & Services",
    logo: "/images/client7.jpeg",
  },
  {
    name: "INDRAPARASTA GAS LIMITED ",
    work: "Natural Gas Distribution",
    logo: "/images/client8.jpeg",
  },
  {
    name: "VARDHMAN",
    work: "Textile Manufacturing",
    logo: "/images/client9.jpeg",
  },
  {
    name: "CENTRIENT",
    work: "Pharmaceutical Manufacturing",
    logo: "/images/client10.jpeg",
  },
  {
    name: "PRIMO",
    work: "Engineering & Manufacturing",
    logo: "/images/client11.jpeg",
  },
  {
    name: "Vertex Engineering",
    work: "Industrial fire protection solutions",
    logo: "/images/client12.jpeg",
  },
  {
    name: "NPL Instruments",
    work: "Measurement & Metrology",
    logo: "/images/client13.jpeg",
  },
  {
    name: "GLENMARK Pharmaceuticals",
    work: "Pharmaceutical Research & Development",
    logo: "/images/client14.jpeg",
  },
  {
    name: "SUN FARMA",
    work: "Pharmaceutical Research & Development",
    logo: "/images/client15.jpeg",
  },
  {
    name: "LPGCL",
    work: "Electricity Generation & Distribution",
    logo: "/images/client16.jpeg",
  },
  {
    name: "OPAL",
    work: "Petrochemical Manufacturing",
    logo: "/images/client17.jpeg",
  },
  {
    name: "OPUS",
    work: "Industrial Solutions",
    logo: "/images/client18.jpeg",
  },
  {
    name: "IRCTC",
    work: "Railway Catering & Tourism",
    logo: "/images/client19.jpeg",
  },
  {
    name: "CIPLA",
    work: "Pharmaceutical Research & Development",
    logo: "/images/client20.jpeg",
  },
  {
    name: "TFIKA",
    work: "Manufacturing Solutions & Services",
    logo: "/images/client21.jpeg",
  },
  {
    name: "YOKOHMA",
    work: "Hotel fire protection & complianceRubber & Automotive Products",
    logo: "/images/client22.jpeg",
  },
  {
    name: "UFLEX",
    work: "Flexible Packaging Solutions",
    logo: "/images/client23.jpeg",
  },
  {
    name: "GROZ - BECKERT",
    work: "Textile Machinery & Needles",
    logo: "/images/client24.jpeg",
  },
  {
    name: "SURE-SAFETY",
    work: "Personal Protective Equipment",
    logo: "/images/client25.jpeg",
  },
  {
    name: "INDIAN OIL",
    work: "Refining & Petrochemicals",
    logo: "/images/client26.jpeg",
  },
  {
    name: "ACC",
    work: "Building Materials & Solutions",
    logo: "/images/client27.jpeg",
  },
  {
    name: "OPUS",
    work: "Industrial Solutions",
    logo: "/images/client18.jpeg",
  },
];


/* =========================================================
   SPLIT 28 CLIENTS INTO TWO ROWS
========================================================= */

const topClients = clients.slice(0, 14);
const bottomClients = clients.slice(14, 28);


/* =========================================================
   DUPLICATE FOR SEAMLESS INFINITE SCROLLING
========================================================= */

const topTrack = [...topClients, ...topClients];
const bottomTrack = [...bottomClients, ...bottomClients];


/* =========================================================
   CLIENT CARD
========================================================= */

function ClientCard({ client }) {
  return (
    <article className="ts-client-card">

      {/* =========================================
          CLIENT LOGO
      ========================================= */}

      <div className="ts-client-logo">

        {client.logo ? (
          <img
            src={client.logo}
            alt={`${client.name} logo`}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = "none";

              const placeholder =
                e.currentTarget.parentElement.querySelector(
                  ".ts-client-placeholder"
                );

              if (placeholder) {
                placeholder.style.display = "flex";
              }
            }}
          />
        ) : null}


        {/* =========================================
            FALLBACK PLACEHOLDER
        ========================================= */}

        <div
          className="ts-client-placeholder"
          style={{
            display: client.logo ? "none" : "flex",
          }}
        >
          <i className="fa-solid fa-building-shield"></i>
        </div>

      </div>


      {/* =========================================
          CLIENT INFORMATION
      ========================================= */}

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


      {/* =========================================
          ARROW
      ========================================= */}

      <div className="ts-client-arrow">
        <i className="fa-solid fa-arrow-up-right"></i>
      </div>

    </article>
  );
}


/* =========================================================
   MAIN CLIENTS COMPONENT
========================================================= */

export default function Clients() {
  return (
    <section className="ts-clients">

      {/* =========================================
          BACKGROUND ELEMENTS
      ========================================= */}

      <div className="ts-clients-glow ts-clients-glow-one"></div>

      <div className="ts-clients-glow ts-clients-glow-two"></div>


      {/* =========================================
          HEADER
      ========================================= */}

      <div className="container">

        <div className="ts-clients-head">

          {/* -----------------------------------------
              LEFT — HEADING
          ----------------------------------------- */}

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


          {/* -----------------------------------------
              RIGHT — DESCRIPTION
          ----------------------------------------- */}

          <div className="ts-clients-description">

            <p>
              From industrial facilities and hospitals to hotels,
              commercial spaces and critical infrastructure,
              TechnoSafe delivers dependable fire protection
              engineered around real-world risks.
            </p>

          </div>

        </div>

      </div>


      {/* =========================================
          TOP CAROUSEL
          LEFT TO RIGHT
      ========================================= */}

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


      {/* =========================================
          CENTER LABEL
      ========================================= */}

      <div className="ts-clients-middle">

        <span className="ts-clients-middle-line"></span>

        <span className="ts-clients-middle-text">
          FIRE SAFETY • PROTECTION • TRUST
        </span>

        <span className="ts-clients-middle-line"></span>

      </div>


      {/* =========================================
          BOTTOM CAROUSEL
          RIGHT TO LEFT
      ========================================= */}

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


      {/* =========================================
          BOTTOM CONTENT
      ========================================= */}

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

            <span>
              TECHNOSAFE
            </span>

            <i className="fa-solid fa-arrow-right"></i>

          </div>

        </div>

      </div>

    </section>
  );
}
 
 