import React from "react";
import "./Contact.css";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Backend/API later yahan connect kar sakte ho
    alert("Thank you! Your enquiry has been received.");
  };

  return (
    <main className="ts-contact-page">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="ts-contact-hero">
        <div className="container">
          <div className="ts-contact-hero-content">

            <span className="ts-contact-eyebrow">
              <i className="fa-solid fa-circle"></i>
              Contact TechnoSafe
            </span>

            <h1>
              Let's build a safer{" "}
              <span>workplace.</span>
            </h1>

            <p>
              Tell us about your facility, safety requirements or upcoming
              project. Our team will help you identify the right fire and
              workplace safety solution.
            </p>

            <div className="ts-contact-hero-line">
              <span></span>
              <small>ENGINEERED PROTECTION • RELIABLE RESPONSE</small>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          CONTACT MAIN
      ===================================================== */}
      <section className="ts-contact-main">
        <div className="container">

          <div className="ts-contact-layout">

            {/* =================================================
                LEFT — FORM
            ================================================= */}
            <div className="ts-contact-form-box">

              <div className="ts-contact-form-head">

                <span className="ts-contact-label">
                  Request a callback
                </span>

                <h2>
                  Tell us about
                  <span> your site.</span>
                </h2>

                <p>
                  Share your requirement and our team will get back to you
                  with the right next step.
                </p>

              </div>


              <form
                className="ts-contact-form"
                onSubmit={handleSubmit}
              >

                <div className="ts-form-grid">

                  {/* Name */}
                  <div className="ts-form-group">
                    <label htmlFor="name">
                      Full Name
                    </label>

                    <div className="ts-input-wrap">
                      <i className="fa-solid fa-user"></i>

                      <input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        required
                      />
                    </div>
                  </div>


                  {/* Company */}
                  <div className="ts-form-group">
                    <label htmlFor="company">
                      Company
                    </label>

                    <div className="ts-input-wrap">
                      <i className="fa-solid fa-building"></i>

                      <input
                        id="company"
                        type="text"
                        placeholder="Company name"
                      />
                    </div>
                  </div>


                  {/* Phone */}
                  <div className="ts-form-group">
                    <label htmlFor="phone">
                      Phone Number
                    </label>

                    <div className="ts-input-wrap">
                      <i className="fa-solid fa-phone"></i>

                      <input
                        id="phone"
                        type="tel"
                        placeholder="+91 98130 55906"
                        required
                      />
                    </div>
                  </div>


                  {/* Email */}
                  <div className="ts-form-group">
                    <label htmlFor="email">
                      Email Address
                    </label>

                    <div className="ts-input-wrap">
                      <i className="fa-solid fa-envelope"></i>

                      <input
                        id="email"
                        type="email"
                        placeholder="sales@technosafe.in"
                        required
                      />
                    </div>
                  </div>


                  {/* Service */}
                  <div className="ts-form-group ts-form-full">
                    <label htmlFor="service">
                      What do you need?
                    </label>

                    <div className="ts-input-wrap">
                      <i className="fa-solid fa-shield-halved"></i>

                      <select
                        id="service"
                        defaultValue=""
                        required
                      >
                        <option value="" disabled>
                          Select a service
                        </option>

                        <option>
                          Fire Safety Audit
                        </option>

                        <option>
                          Fire Alarm & Detection
                        </option>

                        <option>
                          Fire Protection Systems
                        </option>

                        <option>
                          Emergency Eye & Safety Showers
                        </option>

                        <option>
                          Spill Containment Solutions
                        </option>

                        <option>
                          PPE & Safety Equipment
                        </option>

                        <option>
                          Fall Protection Systems
                        </option>

                        <option>
                          Safe Storage Solutions
                        </option>

                        <option>
                          AMC & Preventive Maintenance
                        </option>

                        <option>
                          Safety Training
                        </option>
                      </select>

                      <i className="fa-solid fa-chevron-down ts-select-arrow"></i>
                    </div>
                  </div>


                  {/* Message */}
                  <div className="ts-form-group ts-form-full">
                    <label htmlFor="message">
                      Message
                    </label>

                    <div className="ts-textarea-wrap">
                      <i className="fa-solid fa-message"></i>

                      <textarea
                        id="message"
                        rows="5"
                        placeholder="Tell us about your facility, location and requirement..."
                      ></textarea>
                    </div>
                  </div>

                </div>


                <button
                  className="ts-contact-submit"
                  type="submit"
                >
                  <span>Send enquiry</span>

                  <i className="fa-solid fa-arrow-right"></i>
                </button>

                <p className="ts-form-note">
                  <i className="fa-solid fa-lock"></i>
                  Your information is used only to respond to your enquiry.
                </p>

              </form>

            </div>


            {/* =================================================
                RIGHT — CONTACT INFORMATION
            ================================================= */}
            <aside className="ts-contact-sidebar">

              {/* Image */}
              <div className="ts-contact-image">

                <img
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85"
                  alt="Modern commercial facility"
                />

                <div className="ts-contact-image-overlay"></div>

                <div className="ts-contact-image-content">
                  <span>
                    SAFETY STARTS WITH A CONVERSATION
                  </span>

                  <strong>
                    Protect people.
                    <br />
                    Protect property.
                  </strong>
                </div>

              </div>


              {/* Contact Info */}
              <div className="ts-contact-info">

                <div className="ts-contact-company">
                  <span className="ts-contact-company-icon">
                    <i className="fa-solid fa-shield-halved"></i>
                  </span>

                  <div>
                    <h3>TechnoSafe Solutions</h3>

                    <p>
                      Fire & workplace safety solutions
                    </p>
                  </div>
                </div>


                {/* Address */}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Plot+No+51+Sundernagar+Naraingarh+Road+Ambala+City+Haryana+134003"
                  target="_blank"
                  rel="noreferrer"
                  className="ts-contact-detail"
                >
                  <span>
                    <i className="fa-solid fa-location-dot"></i>
                  </span>

                  <div>
                    <small>VISIT US</small>

                    <p>
                      Plot No. 51, Sundernagar,
                      <br />
                      Naraingarh Road,
                      <br />
                      Ambala City, Haryana 134003
                    </p>
                  </div>
                </a>


                {/* Phone */}
                <a
                  href="tel:+919813055906"
                  className="ts-contact-detail"
                >
                  <span>
                    <i className="fa-solid fa-phone"></i>
                  </span>

                  <div>
                    <small>CALL US</small>

                    <p>
                      +91 98130 55906
                    </p>
                  </div>
                </a>


                {/* Email */}
                <a
                  href="mailto:sales@technosafe.in"
                  className="ts-contact-detail"
                >
                  <span>
                    <i className="fa-solid fa-envelope"></i>
                  </span>

                  <div>
                    <small>EMAIL US</small>

                    <p>
                      sales@technosafe.in
                    </p>
                  </div>
                </a>


                {/* Socials */}
                <div className="ts-contact-social-row">

                  <span>CONNECT WITH US</span>

                  <div>

                    <a href="#" aria-label="Instagram">
                      <i className="fa-brands fa-instagram"></i>
                    </a>

                    <a href="#" aria-label="Facebook">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>

                    <a href="#" aria-label="LinkedIn">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>

                  </div>

                </div>

              </div>

            </aside>

          </div>


          {/* =================================================
              BOTTOM TRUST STRIP
          ================================================= */}
          <div className="ts-contact-trust-strip">

            <div>
              <i className="fa-solid fa-shield-halved"></i>

              <span>
                Safety-first engineering
              </span>
            </div>

            <div>
              <i className="fa-solid fa-clock"></i>

              <span>
                Prompt response
              </span>
            </div>

            <div>
              <i className="fa-solid fa-screwdriver-wrench"></i>

              <span>
                Complete safety solutions
              </span>
            </div>

            <div>
              <i className="fa-solid fa-headset"></i>

              <span>
                Expert support
              </span>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}