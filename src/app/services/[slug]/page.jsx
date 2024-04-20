'use client'
import React, { useEffect, useState } from 'react';

function ServicePage({ params }) {
    const { slug } = params;
    const [services, setServices] = useState([]);
    console.log(slug);

    useEffect(() => {
        const fetchServices = async () => {
            if (slug) {
                try {
                    const response = await fetch(`https://api.eligo.cloud/wp-json/wp/v2/services?slug=${slug}&_fields=acf,date&acf_format=standard`);
                    if (response.ok) {
                        const data = await response.json();
                        setServices(data);
                        console.log(data);
                    } else {
                        console.error('Failed to fetch service data');
                    }
                } catch (error) {
                    console.error('Error fetching service data:', error);
                }
            }
        };

        fetchServices();
    }, [slug]);

    if (services.length === 0) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            {services.map((ele) => (
                <div  key={ele.id}>
                    <h1>{ele.acf.services_title}</h1>
                    <p>{ele.acf.services_description}</p>
                    <img src={ele.acf.services_image} alt="" />
                    <h1>{ele.acf.date}</h1>
                </div>
            ))}
        </div>
    );
}

export default ServicePage;
