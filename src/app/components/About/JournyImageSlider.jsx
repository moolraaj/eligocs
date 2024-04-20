// import React, { useRef, useEffect } from "react";
// import { gsap } from "gsap";

// // Import images
// import journyImg1 from "../../assets/aboutpageAssets/success-journy-one.jpg";
// import journyImg2 from "../../assets/aboutpageAssets/success-journy-two.jpg";
// import journyImg3 from "../../assets/aboutpageAssets/success-journy-three.jpg";
// import journyImg4 from "../../assets/aboutpageAssets/success-journy-four.jpg";

// const JournyImages = [journyImg1, journyImg2, journyImg3, journyImg4];

// const JournyImageSlider = () => {
//   const imageRef = useRef(null);

//   useEffect(() => {
//     let currentIndex = 0;

//     const interval = setInterval(() => {
//       const nextIndex = (currentIndex + 1) % JournyImages.length;

//       // Use GSAP for smooth transition
//       gsap.to(imageRef.current, {
//         duration: 1, // Duration of the transition (in seconds)
//         opacity: 0.5, // Fade out the current image
//         onComplete: () => {
//           // Update image source and fade in the new image
//           imageRef.current.src = JournyImages[nextIndex];
//           gsap.to(imageRef.current, { duration: 1, opacity: 1 }); // Fade in the new image
//         }
//       });

//       currentIndex = nextIndex;
//     }, 3000); // Change image every 3 seconds (adjust as needed)

//     return () => clearInterval(interval);
//   }, []); // No dependencies, run only once

//   return (
//     <div className="journy-image-container">
//       <img
//         ref={imageRef}
//         src={JournyImages[0]} // Start with the first image
//         alt="Journy Image"
//         style={{ width: "100%", height: "auto" }}
//       />
//     </div>
//   );
// };

// export default JournyImageSlider;




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
    if (!currentImages || currentImages.length === 0) return;

    const currentImage = currentImages[currentImageIndex];

    // Animate image transition
    gsap.to(imageRef.current, {
      duration: 1,
      opacity: 0,
      onComplete: () => {
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
