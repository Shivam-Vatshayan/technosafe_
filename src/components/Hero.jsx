import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
  FaPlay,
  FaShieldAlt,
} from "react-icons/fa";
import "./Hero.css";

const API_URL = import.meta.env.VITE_API_URL || "";

const BACKEND_VIDEO = API_URL
  ? `${API_URL}/videos/hero_video.mp4`
  : "/videos/hero_video.mp4";

export default function Hero() {
  const [videoError, setVideoError] = useState(false);

  return (
    <section className="hero">

      {/* =====================================================
          BACKGROUND VIDEO
      ===================================================== */}

      {!videoError && (
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/assets/hero-poster.jpg"
          onError={() => setVideoError(true)}
        >
          <source
            src={BACKEND_VIDEO}
            type="video/mp4"
          />

          <source
            src="/videos/fire-safety-hero.mp4"
            type="video/mp4"
          />

          Your browser does not support the video tag.
        </video>
      )}


      {/* =====================================================
          VIDEO OVERLAY
      ===================================================== */}

      <div className="hero-overlay"></div>

      <div className="hero-gradient"></div>


      {/* =====================================================
          CENTER CONTENT
      ===================================================== */}

      <div className="hero-content">

        <div className="hero-copy">

          {/* Badge */}

          <div className="hero-badge">

            <span className="badge-dot"></span>

            <FaShieldAlt />

            <span>
              COMPLETE FIRE SAFETY SOLUTIONS
            </span>

          </div>


          {/* Main Heading */}

          <h1>
            Protecting People.
            <br />

            <span>
              Protecting What Matters.
            </span>
          </h1>


          {/* Description */}

          <p className="hero-description">
            Complete fire protection solutions designed to protect
            people, property and businesses — from fire detection
            and suppression to safety audits, emergency training
            and preventive maintenance.
          </p>


          {/* CTA Buttons */}

          <div className="hero-actions">

            <Link
              to="/contact"
              className="hero-btn hero-btn-primary"
            >
              <span>
                Get a Free Safety Audit
              </span>

              <FaArrowRight />

            </Link>


            <Link
              to="/products"
              className="hero-btn hero-btn-secondary"
            >

              <span className="play-icon">
                <FaPlay />
              </span>

              <span>
                Explore Our Solutions
              </span>

            </Link>

          </div>


          {/* Trust Points */}

          <div className="hero-trust">

            <div className="trust-item">

              <FaCheckCircle />

              <span>
                ISO 9001:2015 Certified
              </span>

            </div>


            <div className="trust-item">

              <FaCheckCircle />

              <span>
                Complete Fire Protection
              </span>

            </div>


            <div className="trust-item">

              <FaCheckCircle />

              <span>
                24/7 Emergency Support
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}