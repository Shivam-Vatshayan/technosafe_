import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
  FaPlay,
  FaShieldAlt,
} from "react-icons/fa";
import "./Hero.css";

/* =========================================================
   API
========================================================= */

const API_URL = import.meta.env.VITE_API_URL || "";


/* =========================================================
   GITHUB PAGES / LOCAL ASSETS
========================================================= */

const BASE_URL = import.meta.env.BASE_URL;

const LOCAL_VIDEO =
  `${BASE_URL}videos/hero_video.mp4`;

const FALLBACK_VIDEO =
  `${BASE_URL}videos/fire-safety-hero.mp4`;

const HERO_POSTER =
  `${BASE_URL}assets/hero-poster.jpg`;


/* =========================================================
   BACKEND VIDEO
========================================================= */

const BACKEND_VIDEO = API_URL
  ? `${API_URL}/videos/hero_video.mp4`
  : null;


/* =========================================================
   HERO COMPONENT
========================================================= */

export default function Hero() {

  const [videoSource, setVideoSource] = useState(
    BACKEND_VIDEO || LOCAL_VIDEO
  );

  const [videoError, setVideoError] = useState(false);


  /* =======================================================
     VIDEO ERROR HANDLER
  ======================================================= */

  const handleVideoError = () => {

    /*
      Backend video failed
      → Try local hero video
    */

    if (
      BACKEND_VIDEO &&
      videoSource === BACKEND_VIDEO
    ) {
      setVideoSource(LOCAL_VIDEO);
      return;
    }


    /*
      Local hero video failed
      → Try fallback video
    */

    if (videoSource === LOCAL_VIDEO) {
      setVideoSource(FALLBACK_VIDEO);
      return;
    }


    /*
      Everything failed
      → Show poster only
    */

    setVideoError(true);
  };


  return (
    <section className="hero">

      {/* =====================================================
          BACKGROUND VIDEO
      ===================================================== */}

      {!videoError && (

        <video
          key={videoSource}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={HERO_POSTER}
          onError={handleVideoError}
          aria-hidden="true"
        >

          <source
            src={videoSource}
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
          HERO CONTENT
      ===================================================== */}

      <div className="hero-content">

        <div className="hero-copy">


          {/* =================================================
              BADGE
          ================================================= */}

          <div className="hero-badge">

            <span className="badge-dot"></span>

            <FaShieldAlt />

            <span>
              COMPLETE FIRE SAFETY SOLUTIONS
            </span>

          </div>


          {/* =================================================
              MAIN HEADING
          ================================================= */}

          <h1>

            Protecting People.

            <br />

            <span>
              Protecting What Matters.
            </span>

          </h1>


          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <p className="hero-description">

            Complete fire protection solutions designed to protect
            people, property and businesses — from fire detection
            and suppression to safety audits, emergency training
            and preventive maintenance.

          </p>


          {/* =================================================
              CTA BUTTONS
          ================================================= */}

          <div className="hero-actions">


            {/* PRIMARY CTA */}

            <Link
              to="/contact"
              className="hero-btn hero-btn-primary"
            >

              <span>
                Get a Free Safety Audit
              </span>

              <FaArrowRight />

            </Link>


            {/* SECONDARY CTA */}

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


          {/* =================================================
              TRUST POINTS
          ================================================= */}

          <div className="hero-trust">


            {/* TRUST 01 */}

            <div className="trust-item">

              <FaCheckCircle />

              <span>
                ISO 9001:2015 Certified
              </span>

            </div>


            {/* TRUST 02 */}

            <div className="trust-item">

              <FaCheckCircle />

              <span>
                Complete Fire Protection
              </span>

            </div>


            {/* TRUST 03 */}

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