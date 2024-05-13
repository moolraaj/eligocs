'use client'
import { allExportedApi } from '@/utils/apis/Apis';
import React, { useEffect, useState } from 'react';


 
function Testimonial() {
    const [testimonials, setTestimonials] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0); 
    let api=allExportedApi()
    

    const loadTestimonials = async () => {
        try {
            const response = await api.fetchTestimonial()
            console.log(response)
            setTestimonials(response);
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
            {testimonials.map((ele, index) => (
                 
                     <div
                        className={`testimonial_wrap ${index === currentSlide ? 'active' : ''}`}
                        key={index}
                        
                    >
                        <div className="testi_image">
                            <img src={ele.acf.client_image} alt={ele.acf.client_name} />
                            
                        </div>
                        <div className="testimonial_asking">
                            <p>{ele.acf.client_description}</p>
                        </div>
                        <div className="testimonial_name">
                            <h1>{ele.acf.client_name}</h1>
                        </div>
                        <div className="testimonial_address">
                            <p>{ele.acf.client_location}</p>
                        </div>
                    </div>
                 
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
