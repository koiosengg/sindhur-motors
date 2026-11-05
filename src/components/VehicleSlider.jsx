import React, { useState, useRef, useEffect } from "react";

// 4 Desktop background images
import D1 from "../assets/Home/VehicleSlider/1-desktop.webp";
import D2 from "../assets/Home/VehicleSlider/2-desktop.webp";
import D3 from "../assets/Home/VehicleSlider/3-desktop.webp";
import D4 from "../assets/Home/VehicleSlider/4-desktop.webp";

// 8 Mobile vehicle card images
import M1 from "../assets/Home/VehicleSlider/1-mobile.webp";
import M2 from "../assets/Home/VehicleSlider/2-mobile.webp";
import M3 from "../assets/Home/VehicleSlider/3-mobile.webp";
import M4 from "../assets/Home/VehicleSlider/4-mobile.webp";
import M5 from "../assets/Home/VehicleSlider/5-mobile.webp";
import M6 from "../assets/Home/VehicleSlider/6-mobile.webp";
import M7 from "../assets/Home/VehicleSlider/7-mobile.webp";
import M8 from "../assets/Home/VehicleSlider/8-mobile.webp";

const desktopSlides = [
  { id: 1, title: "Made for Living", image: D1 },
  { id: 2, title: "Made for Living", image: D2 },
  { id: 3, title: "Made for Living", image: D3 },
  { id: 4, title: "Made for Living", image: D4 },
];

const mobileSlides = [
  { id: 1, title: "Made for Living", image: M1 },
  { id: 2, title: "Made for Living", image: M2 },
  { id: 3, title: "Made for Living", image: M3 },
  { id: 4, title: "Made for Living", image: M4 },
  { id: 5, title: "Made for Living", image: M5 },
  { id: 6, title: "Made for Living", image: M6 },
  { id: 7, title: "Made for Living", image: M7 },
  { id: 8, title: "Made for Living", image: M8 },
];

export default function VehicleSlider() {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 1200;
    }
    return false;
  });

  const [currentDesktop, setCurrentDesktop] = useState(0);
  const [currentMobile, setCurrentMobile] = useState(0);
  const touchStartX = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const current = isMobile ? currentMobile : currentDesktop;
  const slides = isMobile ? mobileSlides : desktopSlides;
  const setCurrent = isMobile ? setCurrentMobile : setCurrentDesktop;

  const isStart = current === 0;
  const isEnd = current === slides.length - 1;

  const prevSlide = () => {
    if (!isStart) {
      setCurrent((prev) => prev - 1);
    }
  };

  const nextSlide = () => {
    if (!isEnd) {
      setCurrent((prev) => prev + 1);
    }
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();
    touchStartX.current = null;
  };

  return (
    <section
      className="vehicle-slider"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Desktop Background cycle layers (hidden under 1200px) */}
      <div className="slider-bg-desktop-group">
        {desktopSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slider-bg ${index === currentDesktop ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
            aria-hidden={index !== currentDesktop}
          />
        ))}
      </div>

      <div className="slider-content">
        <div className="slider-badge">
          <span className="slider-badge-line" />
          <span className="slider-badge-text">Built for Becoming</span>
        </div>
      </div>

      {/* Mobile vehicle card stage (hidden >= 1200px) */}
      <div className="slider-mobile-stage">
        <div
          className="slider-mobile-track"
          style={{ transform: `translateX(-${currentMobile * 100}%)` }}
        >
          {mobileSlides.map((slide, index) => (
            <div key={slide.id} className="slider-mobile-slide">
              <img
                src={slide.image}
                alt={`Vehicle ${index + 1}`}
                className="slider-mobile-img"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="slider-footer">
        <div className="slider-footer-spacer" />
        <h2 className="slider-title">
          {slides[current]?.title || "Made for Living"}
        </h2>
        <div className="slider-controls">
          <button
            type="button"
            onClick={prevSlide}
            disabled={isStart}
            className={`slider-arrow-btn ${isStart ? "inactive" : ""}`}
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M2.873 8.25H15V6.75H2.873L8.56925 1.05375L7.5 0L0 7.5L7.5 15L8.56925 13.9462L2.873 8.25Z"
                fill={
                  isStart
                    ? "var(--color-Text-Black-400, #383838)"
                    : "var(--color-BG-White, #FFF)"
                }
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={nextSlide}
            disabled={isEnd}
            className={`slider-arrow-btn ${isEnd ? "inactive" : ""}`}
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M12.127 8.25H0V6.75H12.127L6.43075 1.05375L7.5 0L15 7.5L7.5 15L6.43075 13.9462L12.127 8.25Z"
                fill={
                  isEnd
                    ? "var(--color-Text-Black-400, #383838)"
                    : "var(--color-BG-White, #FFF)"
                }
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
