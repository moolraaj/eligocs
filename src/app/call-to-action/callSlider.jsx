import React, { useState, useEffect } from "react";
import { gsap } from "gsap";

const CallSlider = ({ slider }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slider.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [slider.length]);

  useEffect(() => {
    const activeSlide = document.getElementById(`slide-${currentIndex}`);
    if (!activeSlide) return;

    gsap.to(activeSlide, { opacity: 1, duration: 0.5 });

    return () => {
      gsap.to(activeSlide, { opacity: 0, duration: 0.5 });
    };
  }, [currentIndex, slider]);

  return (
    <div className="journy-image-container">
      {slider.map((image, index) => (
        <div
          className="call_slider_image"
          key={index}
          style={{
            display: index === currentIndex ? "block" : "none",
            opacity: index === currentIndex ? 1 : 0
          }}
        >
          <img
            id={`slide-${index}`}
            src={image}
            alt={`Slide ${index}`}
          />
        </div>
      ))}
    </div>
  );
};

export default CallSlider;
