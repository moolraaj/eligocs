'use client'
import React, { useEffect, useState } from 'react';


 
function Testimonial() {
    const [testimonials, setTestimonials] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);

    const loadTestimonials = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/testimonial`);
            const data = await response.json();
            setTestimonials(data.map(ele => ele.acf.testimonials));
        } catch (error) {
            console.error('Error fetching testimonials:', error);
        }
    };

    useEffect(() => {
        loadTestimonials();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(currentSlide => (currentSlide + 1) % testimonials.length);
        }, 3500);
        return () => clearInterval(interval);
    }, [testimonials.length]);

  

    return (
        <div className="testimonial_slider">
            {testimonials.map((testimonialsArr, index) => (
                testimonialsArr.map((testimonial, innerIndex) => (
                    <div
                        className={`testimonial_wrap ${index === currentSlide ? 'active' : ''}`}
                        key={innerIndex}
                        
                    >
                        <div className="testi_image">
                            <img src={testimonial.client_image} alt={testimonial.client_name} />
                            
                        </div>
                        <div className="testimonial_asking">
                            <p>{testimonial.client_description}</p>
                        </div>
                        <div className="testimonial_name">
                            <h1>{testimonial.client_name}</h1>
                        </div>
                        <div className="testimonial_address">
                            <p>{testimonial.client_location}</p>
                        </div>
                    </div>
                ))
            ))}
            <div className="dots">
                {testimonials.map((_, index) => (
                    <span
                        key={index}
                        className={index === currentSlide ? 'dot active' : 'dot'}
                        onClick={() => setCurrentSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
}

export default Testimonial;
