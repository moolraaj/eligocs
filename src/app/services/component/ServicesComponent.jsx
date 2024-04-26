'use client'
import { useEffect, useState } from 'react';
 
 
import { fetchAllServices } from '@/utils/apis/Apis';
import ServiceChild from './ServiceChild';

export default function ServicesComponent() {
    const [services, setServices] = useState([]);

    const loadServices = async () => {
        let url = await fetchAllServices()
        setServices(url)
        console.log(url)
    };

    useEffect(() => {
        loadServices()
    }, []);

    return (
        <>
         
            <ServiceChild services={services} />
        </>
    );
}


