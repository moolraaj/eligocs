'use client'
import { fetchAllServices } from "@/utils/apis/Apis";
import ServiceComponent from "./component/ServiceComponent";


import { useEffect, useState } from 'react';
export default function Services() {
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
            <ServiceComponent services={services} />
        </>
    );
}


