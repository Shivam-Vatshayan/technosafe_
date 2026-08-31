 
import React, { useEffect, useRef, useState } from "react";
import "./VideoCarousel.css";

/* =========================================================
   TECHNOSAFE — VIDEO CAROUSEL
   GitHub Pages + Vite Compatible
========================================================= */

const videos = [
  `${import.meta.env.BASE_URL}videos/video1.mp4`,
  `${import.meta.env.BASE_URL}videos/video2.mp4`,
  `${import.meta.env.BASE_URL}videos/video3.mp4`,
  `${import.meta.env.BASE_URL}videos/video4.mp4`,
  `${import.meta.env.BASE_URL}videos/video5.mp4`,
  `${import.meta.env.BASE_URL}videos/video6.mp4`,
  `${import.meta.env.BASE_URL}videos/video7.mp4`,
  `${import.meta.env.BASE_URL}videos/video8.mp4`,
  `${import.meta.env.BASE_URL}videos/video9.mp4`,
  `${import.meta.env.BASE_URL}videos/video10.mp4`,
];


/* =========================================================
   VIDEO CAROUSEL
========================================================= */

const VideoCarousel = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  const videoRefs = useRef([]);


  /* =======================================================
     NEXT VIDEO
  ======================================================= */

  const nextVideo = () => {
    setActiveIndex(
      (current) => (current + 1) % videos.length
    );
  };


  /* =======================================================
     PREVIOUS VIDEO
  ======================================================= */

  const previousVideo = () => {
    setActiveIndex(
      (current) =>
        (current - 1 + videos.length) % videos.length
    );
  };


  /* =======================================================
     PAUSE OTHER VIDEOS
  ======================================================= */

  const handleVideoPlay = (index) => {

    videoRefs.current.forEach((video, i) => {

      if (video && i !== index) {
        video.pause();
      }

    });

    setActiveIndex(index);
  };


  /* =======================================================
     PAUSE VIDEO WHEN SLIDE CHANGES
  ======================================================= */

  useEffect(() => {

    videoRefs.current.forEach((video, index) => {

      if (video && index !== activeIndex) {
        video.pause();
      }

    });

  }, [activeIndex]);


  /* =======================================================
     KEYBOARD CONTROLS
  ======================================================= */

  useEffect(() => {

    const handleKeyDown = (event) => {

      if (event.key === "ArrowLeft") {
        previousVideo();
      }

      if (event.key === "ArrowRight") {
        nextVideo();
      }

    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

    };

  }, []);


  /* =======================================================
     COMPONENT
  ======================================================= */

  return (
    <section className="ts-video-section">

      {/* BACKGROUND GLOW */}

      <div className="ts-video-glow ts-video-glow-one"></div>

      <div className="ts-video-glow ts-video-glow-two"></div>


      {/* MAIN CONTAINER */}

      <div className="container">


        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <div className="ts-video-heading">

          <span className="ts-video-eyebrow">

            <span></span>

            OUR VIDEOS

          </span>


          <h2>
            See What We{" "}
            <span>Have to Say.</span>
          </h2>


          <p>
            Explore our latest videos and discover more
            about TechnoSafe, our fire safety solutions,
            services and expertise.
          </p>

        </div>


        {/* =================================================
            VIDEO CAROUSEL
        ================================================= */}

        <div className="ts-video-carousel-wrapper">


          {/* PREVIOUS BUTTON */}

          <button
            type="button"
            className="ts-video-arrow ts-video-prev"
            onClick={previousVideo}
            aria-label="Previous video"
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>


          {/* VIDEO LIST */}

          <div className="ts-video-carousel">

            {videos.map((video, index) => {

              let position = "ts-video-hidden";


              /* ACTIVE */

              if (index === activeIndex) {

                position = "ts-video-active";

              }


              /* PREVIOUS */

              else if (
                index ===
                (activeIndex - 1 + videos.length) %
                  videos.length
              ) {

                position = "ts-video-prev-card";

              }


              /* NEXT */

              else if (
                index ===
                (activeIndex + 1) % videos.length
              ) {

                position = "ts-video-next-card";

              }


              return (

                <article
                  className={`ts-video-card ${position}`}
                  key={`${video}-${index}`}
                >

                  <div className="ts-video-frame">

                    <video
                      ref={(element) => {
                        videoRefs.current[index] =
                          element;
                      }}
                      src={video}
                      controls
                      playsInline
                      preload={
                        index === activeIndex
                          ? "auto"
                          : "metadata"
                      }
                      onPlay={() =>
                        handleVideoPlay(index)
                      }
                      onError={(event) => {

                        console.error(
                          `Unable to load video ${
                            index + 1
                          }:`,
                          event.currentTarget.src
                        );

                      }}
                    />

                    {/* VIDEO NUMBER */}

                    <span className="ts-video-number">

                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}

                    </span>

                  </div>

                </article>

              );

            })}

          </div>


          {/* NEXT BUTTON */}

          <button
            type="button"
            className="ts-video-arrow ts-video-next"
            onClick={nextVideo}
            aria-label="Next video"
          >
            <i className="fa-solid fa-arrow-right"></i>
          </button>

        </div>

      </div>

    </section>
  );
};


export default VideoCarousel;

