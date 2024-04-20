'use client'

import React, { useEffect, useState } from 'react';

function ServicePage({ params }) {
    const { id } = params;
    const [service, setService] = useState(null);

    
   

    useEffect(() => {
        const fetchService = async () => {
            if (id) {
                try {
                    const response = await fetch(`https://api.eligo.cloud/wp-json/wp/v2/services/${id}?fields=acf,date&acf_format=standard`);
                    if (response.ok) {
                        const data = await response.json();
                        setService(data);
                        console.log(data);
                    } else {
                        console.error('Failed to fetch service data');
                    }
                } catch (error) {
                    console.error('Error fetching service data:', error);
                }
            }
        };

        fetchService();
    }, [id]);

    if (!service) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            <h1>{service.acf.services_title}</h1>
            <p>{service.acf.services_description}</p>
            <img src={service.acf.services_image} alt="" />
            <h1>{service.acf.date}</h1>
             
        </div>
    );
}

export default ServicePage;
