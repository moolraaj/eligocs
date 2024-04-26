
'use client'
 
import { ServiceApi, fetchAllServices } from '@/utils/apis/Apis';
import Link from 'next/link';
 
import { useEffect, useState } from 'react';

export default function  Services() {
    const [services, setServices] = useState([]);  
    const [servicesdata, setServicesdata] =useState([])

    const loadServices = async () => {
        let url = await  fetchAllServices()
        setServices(url)  
        console.log(url)
    };
    const loadServicesdata = async () => {
        let url = await  ServiceApi();
        setServicesdata(url)  
        console.log(url)
    };
    useEffect(() => {
        loadServices()
        loadServicesdata();
    }, []);
    
    return (
        <>
        <div className='home_section_outer'>
            
            {servicesdata.map((item, index) => (
            <div className="service" key={index}>
                {/* Render service information */}
                <h2>{item.acf.our_services_first_heading}</h2>
                <h3>{item.acf.our_services_second_heading}</h3>
                <p>{item.acf.our_services_top_paragraph}</p>
                <button><Link href={item.acf.get_in_touch_button}>Get In Touch</Link></button>
                <img src={item.acf.our_services_top_image.url} alt="Top Image" />
                <h3>{item.acf.our_service_main_heading}</h3>
                {services.map((item, index) => (
                <div  key={index}>
                    
                        <ul>
                            <li>
                                
                                <Link href={item.acf.services_link} className="trans_redirecttion">{item.acf.services_title}</Link>
                            </li>
                            <li>
                                <img src={item.acf.services_image} alt="" />
                            </li>
                            <li>
                                <Link href={`services/${item.slug}`}>Read More</Link>
                            </li>
                        </ul>
                  
                </div>
            ))}

             

                {/* Render FAQs */}
                <h4>{item.acf.faq_outer_heading}</h4>
                {item.acf.our_service_faqs.map((faq, faqIndex) => (
                    <div className="faq" key={faqIndex}>
                        <h5>{faq.faq__tittle}</h5>
                        <img src={faq.show_faq.url} alt="FAQ Image" />
                        <p>{faq.faq_response}</p>
                    </div>
                ))}
            </div>
        ))}
            </div>
        </>
    );
}

 
