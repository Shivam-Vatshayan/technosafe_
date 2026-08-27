import React from "react";
import SectionHeading from "../components/SectionHeading";
import "./InnerPage.css";

export default function About() {
  const aboutImage = `${import.meta.env.BASE_URL}images/about_image.png`;

  return (
    <main className="ts-about">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="ts-about-hero">
        <div className="container">

          <div className="ts-about-hero-content">

            <span className="eyebrow">
              About TechnoSafe
            </span>

            <h1>
              Engineering confidence into{" "}
              <span>every safety system.</span>
            </h1>

            <p>
              TechnoSafe delivers engineered fire protection solutions
              designed to protect people, property and business continuity.
              From system design and installation to testing and maintenance,
              we focus on dependable safety at every stage.
            </p>

            <div className="ts-about-hero-meta">

              <div>
                <strong>18+</strong>
                <span>Years of expertise</span>
              </div>

              <div>
                <strong>12K+</strong>
                <span>Sites protected</span>
              </div>

              <div>
                <strong>42+</strong>
                <span>Cities covered</span>
              </div>

              <div>
                <strong>98%</strong>
                <span>Client retention</span>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          WHO WE ARE
      ===================================================== */}

      <section className="ts-about-intro">

        <div className="container">

          <div className="ts-about-intro-grid">

            {/* IMAGE */}

            <div className="ts-about-visual">

              <div className="ts-about-image-frame">

                <img
                  src={aboutImage}
                  alt="TechnoSafe professional team"
                  loading="lazy"
                />

                <div className="ts-about-image-overlay"></div>

              </div>


              {/* Experience badge */}

              <div className="ts-about-experience">

                <span className="ts-about-experience-icon">
                  <i className="fa-solid fa-shield-halved"></i>
                </span>

                <div>
                  <strong>18+</strong>
                  <span>Years of experience</span>
                </div>

              </div>


              <div className="ts-about-visual-accent"></div>

            </div>


            {/* CONTENT */}

            <div className="ts-about-content">

              <SectionHeading
                eyebrow="Who we are"
                title="From risk to <span>readiness.</span>"
                copy="Our approach combines practical engineering, quality products and disciplined maintenance to create fire protection systems that remain ready when they are needed most."
              />

              <p className="ts-about-description">
                Every facility has its own risks, people, processes and
                operational requirements. That's why we build fire safety
                solutions around the actual environment rather than relying
                on a one-size-fits-all approach.
              </p>


              {/* CHECK LIST */}

              <div className="ts-about-check-grid">

                <div className="ts-about-check">

                  <span>
                    <i className="fa-solid fa-check"></i>
                  </span>

                  <div>
                    <strong>Site-specific engineering</strong>

                    <p>
                      Solutions designed around your facility and risk profile.
                    </p>
                  </div>

                </div>


                <div className="ts-about-check">

                  <span>
                    <i className="fa-solid fa-check"></i>
                  </span>

                  <div>
                    <strong>Quality-controlled installation</strong>

                    <p>
                      Professional installation with attention to every detail.
                    </p>
                  </div>

                </div>


                <div className="ts-about-check">

                  <span>
                    <i className="fa-solid fa-check"></i>
                  </span>

                  <div>
                    <strong>Testing & commissioning</strong>

                    <p>
                      Systems tested to ensure dependable performance.
                    </p>
                  </div>

                </div>


                <div className="ts-about-check">

                  <span>
                    <i className="fa-solid fa-check"></i>
                  </span>

                  <div>
                    <strong>Preventive maintenance</strong>

                    <p>
                      Ongoing service to keep your protection systems ready.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          OUR PROCESS
      ===================================================== */}

      <section className="ts-about-process">

        <div className="container">

          <div className="ts-about-process-heading">

            <span className="eyebrow">
              How we work
            </span>

            <h2>
              A complete approach to
              <span> fire protection.</span>
            </h2>

            <p>
              From the first site assessment to long-term maintenance,
              every stage is focused on creating dependable protection.
            </p>

          </div>


          <div className="ts-about-process-grid">

            <article className="ts-about-process-card">

              <span className="ts-about-process-number">
                01
              </span>

              <div className="ts-about-process-icon">
                <i className="fa-solid fa-magnifying-glass-chart"></i>
              </div>

              <h3>Assess</h3>

              <p>
                Identify hazards, vulnerabilities and the specific
                requirements of your facility.
              </p>

            </article>


            <article className="ts-about-process-card">

              <span className="ts-about-process-number">
                02
              </span>

              <div className="ts-about-process-icon">
                <i className="fa-solid fa-compass-drafting"></i>
              </div>

              <h3>Engineer</h3>

              <p>
                Develop practical fire protection solutions based on
                your environment and operational needs.
              </p>

            </article>


            <article className="ts-about-process-card">

              <span className="ts-about-process-number">
                03
              </span>

              <div className="ts-about-process-icon">
                <i className="fa-solid fa-screwdriver-wrench"></i>
              </div>

              <h3>Implement</h3>

              <p>
                Install, integrate and commission systems with
                professional attention to detail.
              </p>

            </article>


            <article className="ts-about-process-card">

              <span className="ts-about-process-number">
                04
              </span>

              <div className="ts-about-process-icon">
                <i className="fa-solid fa-shield-heart"></i>
              </div>

              <h3>Maintain</h3>

              <p>
                Keep your systems operational through inspection,
                testing and preventive maintenance.
              </p>

            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY TECHNOSAFE
      ===================================================== */}

      <section className="ts-about-values">

        <div className="container">

          <div className="ts-about-values-heading">

            <span className="eyebrow">
              Why TechnoSafe
            </span>

            <h2>
              Safety isn't just a product.
              <span> It's a responsibility.</span>
            </h2>

          </div>


          <div className="ts-about-values-grid">

            <article className="ts-about-value-card">

              <span className="ts-about-value-number">
                01
              </span>

              <div className="ts-about-value-icon">
                <i className="fa-solid fa-compass-drafting"></i>
              </div>

              <h3>
                Engineered
              </h3>

              <p>
                Every solution starts with understanding the environment,
                hazards and operational requirements.
              </p>

            </article>


            <article className="ts-about-value-card">

              <span className="ts-about-value-number">
                02
              </span>

              <div className="ts-about-value-icon">
                <i className="fa-solid fa-award"></i>
              </div>

              <h3>
                Dependable
              </h3>

              <p>
                We focus on reliable products, professional installation
                and systems built for long-term performance.
              </p>

            </article>


            <article className="ts-about-value-card">

              <span className="ts-about-value-number">
                03
              </span>

              <div className="ts-about-value-icon">
                <i className="fa-solid fa-people-group"></i>
              </div>

              <h3>
                People First
              </h3>

              <p>
                Our solutions are designed around protecting people,
                property and business continuity.
              </p>

            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          COMMITMENT
      ===================================================== */}

      <section className="ts-about-commitment">

        <div className="container">

          <div className="ts-about-commitment-box">

            <div className="ts-about-commitment-content">

              <span className="eyebrow">
                Our commitment
              </span>

              <h2>
                Protection designed for
                <span> real-world readiness.</span>
              </h2>

              <p>
                We believe fire safety is not just about installing
                equipment. It is about creating systems, processes and
                awareness that help people respond with confidence
                when it matters most.
              </p>

            </div>


            <div className="ts-about-commitment-points">

              <span>
                <i className="fa-solid fa-circle-check"></i>
                Reliable systems
              </span>

              <span>
                <i className="fa-solid fa-circle-check"></i>
                Professional service
              </span>

              <span>
                <i className="fa-solid fa-circle-check"></i>
                Preventive approach
              </span>

              <span>
                <i className="fa-solid fa-circle-check"></i>
                Safety-first mindset
              </span>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}