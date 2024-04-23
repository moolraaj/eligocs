
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

function Services() {
    const [services, setServices] = useState([]);

    const loadServices = async () => {
        let url = await fetch('https://api.eligo.cloud/wp-json/wp/v2/services?fields=acf&acf_format=standard');
        let data = await url.json();
        setServices(data);
    };

    useEffect(() => {
        loadServices();
    }, []);

    // Sort services array in ascending order based on service ID
    const sortedServices = [...services].sort((a, b) => a.id - b.id);

    return (
        <>
            {sortedServices.map((item, index) => (
                <div className="trans_number" key={index}>
                    <Link href={`services/${item.slug}`}>
                        <ul className='transformation_wrapper'  >
                            <li>
                                <h4>{index+1}</h4>
                            </li>
                            <li>
                                <a href={item.acf.services_link} className="trans_redirecttion">{item.acf.services_title}</a>
                            </li>
                            <li>
                                <img src={item.acf.services_image} alt="" srcSet="" />
                            </li>
                        </ul>
                    </Link>
                </div>
            ))}
        </>
    );
}

export default Services;
