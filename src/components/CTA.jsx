 
import React, { useState } from "react";
import "./CTA.css";

export default function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    requirement: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Enquiry submitted:", formData);

    alert(
      "Thank you! Our safety expert will contact you shortly."
    );

    setFormData({
      name: "",
      company: "",
      phone: "",
      requirement: "",
    });
  };

  return (
    <section className="ts-cta">

      {/* =========================================
          BACKGROUND EFFECTS
      ========================================= */}

      <div className="ts-cta-grid"></div>

      <div className="ts-cta-glow ts-cta-glow-one"></div>
      <div className="ts-cta-glow ts-cta-glow-two"></div>


      <div className="container">

        <div className="ts-cta-box">

          {/* =========================================
              TOP ACCENT
          ========================================= */}

          <div className="ts-cta-accent-line"></div>


          {/* =========================================
              LEFT CONTENT
          ========================================= */}

          <div className="ts-cta-left">

            <span className="ts-cta-eyebrow">
              <span className="ts-cta-dot"></span>
              FIRE SAFETY CONSULTATION
            </span>


            <h2 className="ts-cta-title">
              Protect what
              <br />
              <span>matters most.</span>
            </h2>


            <p className="ts-cta-description">
              Every facility has different risks. Our fire safety
              specialists help you identify vulnerabilities and
              build the right protection strategy for your people,
              property and operations.
            </p>


            {/* =========================================
                BENEFITS
            ========================================= */}

            <div className="ts-cta-benefits">

              <div className="ts-cta-benefit">

                <div className="ts-cta-benefit-icon">
                  <i className="fa-solid fa-shield-halved"></i>
                </div>

                <div className="ts-cta-benefit-content">
                  <strong>Risk Assessment</strong>

                  <span>
                    Identify critical fire risks
                  </span>
                </div>

              </div>


              <div className="ts-cta-benefit">

                <div className="ts-cta-benefit-icon">
                  <i className="fa-solid fa-fire-extinguisher"></i>
                </div>

                <div className="ts-cta-benefit-content">
                  <strong>Safety Solutions</strong>

                  <span>
                    Systems designed for your facility
                  </span>
                </div>

              </div>


              <div className="ts-cta-benefit">

                <div className="ts-cta-benefit-icon">
                  <i className="fa-solid fa-screwdriver-wrench"></i>
                </div>

                <div className="ts-cta-benefit-content">
                  <strong>Ongoing Support</strong>

                  <span>
                    AMC, testing & maintenance
                  </span>
                </div>

              </div>

            </div>


            {/* =========================================
                TRUST
            ========================================= */}

            <div className="ts-cta-trust">

              <span className="ts-cta-trust-icon">
                <i className="fa-solid fa-check"></i>
              </span>

              <span>
                Speak with a qualified fire safety expert
              </span>

            </div>

          </div>


          {/* =========================================
              RIGHT FORM
          ========================================= */}

          <div className="ts-cta-form-wrap">

            <div className="ts-cta-form-head">

              <span className="ts-cta-form-label">
                GET STARTED
              </span>

              <h3>
                Request a consultation
              </h3>

              <p>
                Tell us a little about your requirement.
              </p>

            </div>


            <form
              className="ts-cta-form"
              onSubmit={handleSubmit}
            >

              {/* NAME */}

              <div className="ts-cta-field">

                <label htmlFor="cta-name">
                  Your name
                </label>

                <div className="ts-cta-input">

                  <i className="fa-regular fa-user"></i>

                  <input
                    id="cta-name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                  />

                </div>

              </div>


              {/* COMPANY */}

              <div className="ts-cta-field">

                <label htmlFor="cta-company">
                  Company / organisation
                </label>

                <div className="ts-cta-input">

                  <i className="fa-regular fa-building"></i>

                  <input
                    id="cta-company"
                    type="text"
                    name="company"
                    placeholder="Company name"
                    value={formData.company}
                    onChange={handleChange}
                    autoComplete="organization"
                  />

                </div>

              </div>


              {/* PHONE */}

              <div className="ts-cta-field">

                <label htmlFor="cta-phone">
                  Phone number
                </label>

                <div className="ts-cta-input">

                  <i className="fa-solid fa-phone"></i>

                  <input
                    id="cta-phone"
                    type="tel"
                    name="phone"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    required
                  />

                </div>

              </div>


              {/* REQUIREMENT */}

              <div className="ts-cta-field">

                <label htmlFor="cta-requirement">
                  What do you need help with?
                </label>

                <div className="ts-cta-input ts-cta-select">

                  <i className="fa-solid fa-fire-flame-curved"></i>

                  <select
                    id="cta-requirement"
                    name="requirement"
                    value={formData.requirement}
                    onChange={handleChange}
                    required
                  >

                    <option value="">
                      Select requirement
                    </option>

                    <option value="Fire Audit">
                      Fire Audit
                    </option>

                    <option value="Fire Alarm System">
                      Fire Alarm System
                    </option>

                    <option value="Fire Fighting System">
                      Fire Fighting System
                    </option>

                    <option value="Hydrant & Sprinkler">
                      Hydrant & Sprinkler
                    </option>

                    <option value="AMC & Maintenance">
                      AMC & Maintenance
                    </option>

                    <option value="Training & Drills">
                      Training & Drills
                    </option>

                    <option value="Other">
                      Other Requirement
                    </option>

                  </select>

                </div>

              </div>


              {/* SUBMIT */}

              <button
                type="submit"
                className="ts-cta-submit"
              >

                <span>
                  Talk to a safety expert
                </span>

                <i className="fa-solid fa-arrow-right"></i>

              </button>


              {/* CONFIDENTIAL NOTE */}

              <p className="ts-cta-form-note">

                <i className="fa-solid fa-lock"></i>

                <span>
                  Your information is kept confidential.
                </span>

              </p>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}
 
