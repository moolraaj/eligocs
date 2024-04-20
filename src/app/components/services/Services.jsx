
import React, { useEffect, useState } from 'react'

function Services() {

    const [services, setServices] = useState([])


    const loadServices = async () => {
        let url = await fetch('https://api.eligo.cloud/wp-json/wp/v2/services?fields=acf&acf_format=standard')
        let data = await url.json()
        setServices(data)
        console.log(data)

    }

    useEffect(() => {
        loadServices()
    }, [])



    return (
        <>



 
 
            {services.map((item, index) => (
                <div className="trans_number" key={index}>
                    <ul className='transformation_wrapper'>
                        <li>
                            <h4>{item.acf.services_number}</h4>
                        </li>
                        <li>
                            <a href={item.acf.services_link} className="trans_redirecttion">{item.acf.services_title}</a>
                        </li>
                    </ul>
                </div>
            ))}

        </>
    )
}

export default Services
