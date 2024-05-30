// import React, { useEffect, useState, useRef } from 'react';

// const InternTestimonial = React.memo(({ testimonials }) => {
//     const { internship_testimonials } = testimonials.acf;
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const [isPlaying, setIsPlaying] = useState(true);
//     const intervalRef = useRef(null);
//     const playerRefs = useRef([]);

//     useEffect(() => {
//         if (isPlaying) {
//             intervalRef.current = setInterval(() => {
//                 setCurrentSlide(prevSlide => (prevSlide + 1) % internship_testimonials.length);
//             }, 3500);
//         } else {
//             clearInterval(intervalRef.current);
//         }
//         return () => clearInterval(intervalRef.current);
//     }, [isPlaying, internship_testimonials.length]);

//     useEffect(() => {
//         window.onYouTubeIframeAPIReady = () => {
//             playerRefs.current = internship_testimonials.map((_, index) => {
//                 return new window.YT.Player(`player-${index}`, {
//                     events: {
//                         'onStateChange': onPlayerStateChange,
//                     },
//                 });
//             });
//         };
    
//         const tag = document.createElement('script');
//         tag.src = "https://www.youtube.com/iframe_api";
//         tag.setAttribute('origin', window.location.origin);
//         const firstScriptTag = document.getElementsByTagName('script')[0];
//         firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    
//         return () => {
//             playerRefs.current.forEach(player => player.destroy());
//         };
//     }, [internship_testimonials]);
    

//     const onPlayerStateChange = event => {
//         if (event.data === window.YT.PlayerState.PLAYING) {
//             setIsPlaying(false);
//         } else if (event.data === window.YT.PlayerState.PAUSED || event.data === window.YT.PlayerState.ENDED) {
//             setIsPlaying(true);
//         }
//     };

//     const handleMouseEnter = () => {
//         setIsPlaying(false);
//     };

//     const handleMouseLeave = () => {
//         setIsPlaying(true);
//     };

//     return (
//         <div className="testimonial_slider intern_testi_wrapper" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//             {internship_testimonials.map((ele, index) => (
//                 <div
//                     key={index}
//                     className={`slide ${index === currentSlide ? 'active' : ''}`}
//                     style={{ display: index === currentSlide ? 'block' : 'none' }}
//                 >
//                     <h1>{ele.student_name}</h1>
//                     <h1>{ele.course_period}</h1>
//                     <div>
//                         <iframe
//                             id={`player-${index}`}
//                             src={`https://www.youtube.com/embed/${getYouTubeID(ele.youtube_link)}?enablejsapi=1`}
//                             height="350px"
//                             width="300px"
//                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                             allowFullScreen
//                         ></iframe>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// });

// function getYouTubeID(url) {
//     const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
//     const match = url.match(regExp);
//     return match ? match[1] : null;
// }

// export default InternTestimonial;



import React, { useState } from 'react';

const InternTestimonial = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!testimonials || !testimonials.acf || !testimonials.acf.internship_testimonials || testimonials.acf.internship_testimonials.length === 0) {
    return <div>No testimonials available.</div>;
  }

  const handlePrevious = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? testimonials.acf.internship_testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex === testimonials.acf.internship_testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const testimonial = testimonials.acf.internship_testimonials[currentIndex] || {};

  const getYouTubeID = url => {
    const regExp = /^(?:(?:https?:)?\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  const youtubeID = getYouTubeID(testimonial.youtube_link);

  return (
    <div className='interns_info_outer'>
      <div className="interns_info"><p>Student Name: {testimonial.student_name}</p>
      <p>Course Name: {testimonial.course_name}</p>
      <p>Course Period: {testimonial.course_period}</p></div>
      
      <div className='testimonial_video_player'>
        {youtubeID ? (
          <iframe
            id={`player-${currentIndex}`}
            src={`https://www.youtube.com/embed/${youtubeID}?enablejsapi=1`}
            height="350px"
            max-width="700px"
            width="100%"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
            <div style={{maxWidth: '720px', width: '100%',height: '350px',display: 'flex', justifyContent: 'center', alignItems: 'center',border: '1px solid'}}> No video available.</div> 
        )}
      </div>
      <div>
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default InternTestimonial;
