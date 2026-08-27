import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./VideoSection.css";

export default function VideoSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = async () => {
    if (!videoRef.current) return;

    try {
      await videoRef.current.play();
      setIsPlaying(true);
    } catch (error) {
      console.error("Video could not be played:", error);
    }
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <section className="ts-video-section">

      <div className="ts-video-container">

        {/* =========================================
            LEFT CONTENT
        ========================================= */}
        <div className="ts-video-copy">

          <span className="ts-video-eyebrow">
            <span className="ts-video-eyebrow-dot"></span>
            Inside The Work
          </span>

          <h2>
            Protection that works
            <span> when it matters.</span>
          </h2>

          <p>
            Fire safety is more than equipment. It is a complete system
            of planning, engineering, installation, testing and
            continuous maintenance.
          </p>

          <p className="ts-video-copy-small">
            Take a closer look at how TechnoSafe engineers and maintains
            reliable fire protection systems for real-world environments.
          </p>

          <div className="ts-video-actions">

            <Link
              to="/about"
              className="ts-video-link"
            >
              Discover TechnoSafe
              <i className="fa-solid fa-arrow-right"></i>
            </Link>

            <div className="ts-video-trust">
              <i className="fa-solid fa-shield-halved"></i>
              <span>Engineered for safety</span>
            </div>

          </div>

        </div>


        {/* =========================================
            RIGHT VIDEO
        ========================================= */}
        <div className="ts-video-media">

          <div className="ts-video-frame">

            <video
              ref={videoRef}
              className="ts-video-player"
              poster="/images/fire-safety-poster.png"
              playsInline
              preload="metadata"
              onPause={handlePause}
              onEnded={handleVideoEnd}
              aria-label="TechnoSafe fire safety operations"
            >
              <source
                src="/videos/fire-safety.mp4"
                type="video/mp4"
              />

              Your browser does not support the video tag.
            </video>


            {/* VIDEO DARK OVERLAY */}
            <div
              className={`ts-video-frame-overlay ${
                isPlaying ? "ts-video-frame-overlay-hidden" : ""
              }`}
            ></div>


            {/* PLAY BUTTON */}
            {!isPlaying && (
              <button
                type="button"
                className="ts-video-play"
                onClick={handlePlay}
                aria-label="Play TechnoSafe fire safety video"
              >
                <span className="ts-video-play-ring"></span>

                <span className="ts-video-play-circle">
                  <i className="fa-solid fa-play"></i>
                </span>
              </button>
            )}


            {/* VIDEO LABEL */}
            <div className="ts-video-label">
              <span className="ts-video-label-dot"></span>
              TechnoSafe Operations
            </div>


            {/* VIDEO CORNER */}
            <div className="ts-video-corner">
              <i className="fa-solid fa-expand"></i>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}