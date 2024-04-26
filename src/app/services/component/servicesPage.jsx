 
import { fetchAllServices } from "@/utils/apis/Apis"
import Link from "next/link"


export default async function ServicesPage({ data }) {

    let services=await fetchAllServices()
    console.log(services)


    console.log(data)
    return (
        <>
            {
                data.map((ele) => {
                    return <div className="service_page_wrapper" key={ele.id}>

                        <div className="top_service_top_section_wrapper">

                            <div className="service_page_left_section">
                                <div className="service_top_heading_first">

                                    <h1>{ele.acf.our_services_first_heading}</h1>
                                </div>
                                <div className="service_top_sub_heading">
                                    <h1>{ele.acf.our_services_second_heading}</h1>
                                </div>

                                <div className="service_top_decription">
                                    <p>{ele.acf.our_services_top_paragraph}</p>
                                </div>

                                <div className="service_navigate_button">
                                    <button>get in touch</button>
                                </div>
                            </div>

                            <div className="service_page_right_section">
                                <img src={ele.acf.our_service_banner_image} alt="" />
                            </div>

                        </div>


                        <div className="show_all_services_section">
                            <div className="all_services_left_section">
                                <h1>{ele.acf.our_service_main_heading}</h1>
                            </div>
                            <div className="all_services_right_section">
                                {
                                    services.map((e)=>{
                                        return  <div className="services_flex_wrapper" key={e.id}>

                                            <div className="all_services_outer">
                                                <div className="service_icon">
                                                    <img src={ele.acf.services_icons} alt="" />
                                                </div>
                                            <div className="service_both_sections">
                                                <div className="services_content_area">
                                                    <div className="service_content_heading">
                                                        <h1>{e.acf.services_title}</h1>
                                                        
                                                    </div>
                                                    <div className="service_content_description">
                                                        <p>{e.acf.services_description.slice(0,150)}</p>

                                                    </div>
                                                </div>

                                                <div className="services_navigation">
                                                    <Link href={`/services/${e.slug}`}>read more</Link>
                                                </div>
                                                </div>

                                            </div>

                                        </div>

                                    })

                                }
                            </div>
                        </div>


                        <div className="services_faqs_wrapper">
                            <div className="services_faq_left_section">
                                <h1>{ele.acf.faq_outer_heading}</h1>
                            </div>
                            <div className="services_faq_right_section">
                                {ele.acf.our_service_faqs.map((faq,index)=>{
                                    return  <div className="services_faq_outer" key={index}>
                                    <div className="servies_question">
                                        <h1>{faq.faq__tittle}</h1>
                                    </div>
                                    <div className="services_answer">
                                        <p>{faq.faq_response}</p>
                                    </div>
                                </div>
                                })}
                               
                            </div>
                        </div>


                        <div className="services_show_testimonials">
                            
                        </div>
                    </div>
                })
            }

        </>
    )
}

 
