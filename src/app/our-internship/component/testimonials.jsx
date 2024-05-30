import React, { useEffect, useState, useRef } from 'react';

const InternTestimonial = React.memo(({ testimonials }) => {
    const { internship_testimonials } = testimonials.acf;
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const intervalRef = useRef(null);
    const playerRefs = useRef([]);

    useEffect(() => {
        if (isPlaying) {
            intervalRef.current = setInterval(() => {
                setCurrentSlide(prevSlide => (prevSlide + 1) % internship_testimonials.length);
            }, 3500);
        } else {
            clearInterval(intervalRef.current);
        }
        return () => clearInterval(intervalRef.current);
    }, [isPlaying, internship_testimonials.length]);

    useEffect(() => {
        window.onYouTubeIframeAPIReady = () => {
            playerRefs.current = internship_testimonials.map((_, index) => {
                return new window.YT.Player(`player-${index}`, {
                    events: {
                        'onStateChange': onPlayerStateChange,
                    },
                });
            });
        };
    
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        tag.setAttribute('origin', window.location.origin);
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    
        return () => {
            playerRefs.current.forEach(player => player.destroy());
        };
    }, [internship_testimonials]);
    

    const onPlayerStateChange = event => {
        if (event.data === window.YT.PlayerState.PLAYING) {
            setIsPlaying(false);
        } else if (event.data === window.YT.PlayerState.PAUSED || event.data === window.YT.PlayerState.ENDED) {
            setIsPlaying(true);
        }
    };

    const handleMouseEnter = () => {
        setIsPlaying(false);
    };

    const handleMouseLeave = () => {
        setIsPlaying(true);
    };

    return (
        <div className="testimonial_slider intern_testi_wrapper" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {internship_testimonials.map((ele, index) => (
                <div
                    key={index}
                    className={`slide ${index === currentSlide ? 'active' : ''}`}
                    style={{ display: index === currentSlide ? 'block' : 'none' }}
                >
                    <h1>{ele.student_name}</h1>
                    <h1>{ele.course_period}</h1>
                    <div>
                        <iframe
                            id={`player-${index}`}
                            src={`https://www.youtube.com/embed/${getYouTubeID(ele.youtube_link)}?enablejsapi=1`}
                            height="350px"
                            width="300px"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            ))}
        </div>
    );
});

function getYouTubeID(url) {
    const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : null;
}

export default InternTestimonial;
