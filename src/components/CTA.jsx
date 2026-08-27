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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Enquiry submitted:", formData);

    // Backend/API yaha connect kar sakte ho
    alert("Thank you! Our safety expert will contact you shortly.");

    setFormData({
      name: "",
      company: "",
      phone: "",
      requirement: "",
    });
  };

  return (
    <section className="ts-cta">

      {/* Background Effects */}
      <div className="ts-cta-glow ts-cta-glow-one"></div>
      <div className="ts-cta-glow ts-cta-glow-two"></div>

      <div className="container">

        <div className="ts-cta-box">

          {/* =========================================
              LEFT CONTENT
          ========================================= */}

          <div className="ts-cta-left">

            <span className="ts-cta-eyebrow">
              <span className="ts-cta-dot"></span>
              FIRE SAFETY CONSULTATION
            </span>

            <h2>
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


            {/* Benefits */}

            <div className="ts-cta-benefits">

              <div className="ts-cta-benefit">

                <div className="ts-cta-benefit-icon">
                  <i className="fa-solid fa-shield-halved"></i>
                </div>

                <div>
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

                <div>
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

                <div>
                  <strong>Ongoing Support</strong>
                  <span>
                    AMC, testing & maintenance
                  </span>
                </div>

              </div>

            </div>


            {/* Trust */}

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

              <span>GET STARTED</span>

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

              {/* Name */}

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
                    required
                  />

                </div>

              </div>


              {/* Company */}

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
                  />

                </div>

              </div>


              {/* Phone */}

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
                    required
                  />

                </div>

              </div>


              {/* Requirement */}

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


              {/* Submit */}

              <button
                type="submit"
                className="ts-cta-submit"
              >

                <span>
                  Talk to a safety expert
                </span>

                <i className="fa-solid fa-arrow-right"></i>

              </button>


              <p className="ts-cta-form-note">
                <i className="fa-solid fa-lock"></i>
                Your information is kept confidential.
              </p>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}