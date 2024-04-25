
'use client'
 
import { fetchAllServices } from '@/utils/apis/Apis';
import Link from 'next/link';
 
import { useEffect, useState } from 'react';

export default function  ServiceComponent() {
    const [services, setServices] = useState([]);  

    const loadServices = async () => {
        let url = await  fetchAllServices()
        setServices(url)  
        console.log(url)
    };

    useEffect(() => {
        loadServices()
    }, []);
    return (
        <>
            {services.map((item, index) => (
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

 
