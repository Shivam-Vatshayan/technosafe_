import React, { useRef, useState } from "react";
import "./VideoCarousel.css";

const videos = [
  "/videos/video1.mp4",
  "/videos/video2.mp4",
  "/videos/video3.mp4",
  "/videos/video4.mp4",
  "/videos/video5.mp4",
  "/videos/video6.mp4",
  "/videos/video7.mp4",
  "/videos/video8.mp4",
  "/videos/video9.mp4",
  "/videos/video10.mp4",
];

const VideoCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef([]);

  const nextVideo = () => {
    setActiveIndex((current) => (current + 1) % videos.length);
  };

  const previousVideo = () => {
    setActiveIndex(
      (current) => (current - 1 + videos.length) % videos.length
    );
  };

  const handleVideoPlay = (index) => {
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) {
        video.pause();
      }
    });

    setActiveIndex(index);
  };

  return (
    <section className="video-section">
      <div className="video-container">

        {/* Section Heading */}
        <div className="video-heading">
          <span className="video-label">OUR VIDEOS</span>

          <h2>
            See What We{" "}
            <span>Have to Say</span>
          </h2>

          <p>
            Watch our latest videos and discover more about our
            work, services and experiences.
          </p>
        </div>

        {/* Video Carousel */}
        <div className="video-carousel-wrapper">

          {/* Previous Button */}
          <button
            type="button"
            className="video-arrow video-prev"
            onClick={previousVideo}
            aria-label="Previous video"
          >
            &#10094;
          </button>

          {/* Videos */}
          <div className="video-carousel">
            {videos.map((video, index) => {
              let position = "video-hidden";

              if (index === activeIndex) {
                position = "video-active";
              } else if (
                index ===
                (activeIndex - 1 + videos.length) % videos.length
              ) {
                position = "video-prev-card";
              } else if (
                index === (activeIndex + 1) % videos.length
              ) {
                position = "video-next-card";
              }

              return (
                <div
                  className={`video-card ${position}`}
                  key={video}
                >
                  <video
                    ref={(element) => {
                      videoRefs.current[index] = element;
                    }}
                    src={video}
                    controls
                    playsInline
                    preload="metadata"
                    onPlay={() => handleVideoPlay(index)}
                  />
                </div>
              );
            })}
          </div>

          {/* Next Button */}
          <button
            type="button"
            className="video-arrow video-next"
            onClick={nextVideo}
            aria-label="Next video"
          >
            &#10095;
          </button>

        </div>

        {/* Dots */}
        <div className="video-dots">
          {videos.map((_, index) => (
            <button
              type="button"
              key={index}
              className={`video-dot ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show video ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default VideoCarousel;