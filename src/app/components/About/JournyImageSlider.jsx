
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

const JournyImageSlider = ({ result }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentSliderIndex, setCurrentSliderIndex] = useState(0);

  const imageRef = useRef(null);

  useEffect(() => {
    if (!result || !result.acf || !result.acf.journy_image_slider) return;

    const sliders = result.acf.journy_image_slider;
    const currentSlider = sliders[currentSliderIndex];
    const images = Object.values(currentSlider);
    setCurrentImages(images);

    // Reset image index when a new slider is displayed
    setCurrentImageIndex(0);

    // Automatically advance to the next slider once all images in the current slider are shown
    const sliderInterval = setInterval(() => {
      setCurrentSliderIndex(prevIndex => (prevIndex + 1) % sliders.length);
    }, images.length * 3000); // Advance to the next slider after showing all images

    // Clear the interval when component unmounts or when the result changes
    return () => clearInterval(sliderInterval);
  }, [result, currentSliderIndex]);

  useEffect(() => {
    if (!currentImages || currentImages.length === 0 || !imageRef.current) return;
  
    const currentImage = currentImages[currentImageIndex];
    if (!currentImage || !currentImage.url) return; // Ensure currentImage and its url are defined
  
    // Animate image transition
    gsap.to(imageRef.current, {
      duration: 1,
      opacity: 0,
      onComplete: () => {
        // Ensure imageRef.current is still valid before modifying it
        if (!imageRef.current) return;
        
        imageRef.current.src = currentImage.url; // Use the url property of the current image
        gsap.to(imageRef.current, { duration: 1, opacity: 1 });
      }
    });
  
    // Move to the next image in the current slider
    const imageInterval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % currentImages.length);
    }, 3000);
  
    // Clear the interval when component unmounts or when the images change
    return () => clearInterval(imageInterval);
  }, [currentImages, currentImageIndex]);
  
  

  if (!currentImages || currentImages.length === 0) {
    return null;
  }

  return (
    <div className="journy-image-container">
      <img
        ref={imageRef}
        src={currentImages[currentImageIndex].url} // Use the url property of the current image
        alt="Journy Image"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
};

export default JournyImageSlider;
