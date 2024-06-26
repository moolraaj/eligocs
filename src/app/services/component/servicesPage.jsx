'use client'
import { allExportedApi } from "@/utils/apis/Apis.jsx"
import Link from "next/link"
import ServicesFaq from "./ServicesFaq"
import '../../about/AboutPage.scss'
import { useEffect, useState } from "react"
import TestimonialSection from "@/app/components/Home/home-sections/Testimonial"
import { emptyImage } from "../../../../public/assets/images"
import { useRouter } from "next/navigation"

export default function ServicesPage() {
    const router = useRouter()
    const api = allExportedApi()
    const [services, setServices] = useState([])
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const loadAllServices = async () => {
        try {
            const resp = await api.fecthAllParentservices()
            setServices(resp)
        } catch (error) {
            console.error("Failed to load services", error)
        }
    }

    const loadServiceApi = async () => {
        try {
            const response = await api.ServiceApi()
            setData(response)
        } catch (error) {
            console.error("Failed to load service API data", error)
        }
    }

    useEffect(() => {
        const loadData = async () => {
            await loadAllServices()
            await loadServiceApi()
            setLoading(false)
        }
        loadData()
    }, [])

    const allServices = [...services].reverse()

    return (
        <>
            {loading ? (
                <div className="page_top">
                     <p className="loading_data">Loading...</p>
                </div>
            ) : (
                data && data.map((ele) => (
                    <div className="service_main_div" key={ele.id}>
                        <div className="service_page_wrapper">
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
                                        <button onClick={() => router.push('/contact')}>Get in touch</button>
                                    </div>
                                </div>
                                <div className="service_page_right_section">
                                    <img src={ele.acf.our_service_banner_image || emptyImage.src} alt="service_banner_image" />
                                </div>
                            </div>
                            <div className="show_all_services_section">
                                <div className="all_services_left_section">
                                    <h1>{ele.acf.our_service_main_heading}</h1>
                                </div>
                                <div className="all_services_right_section">
                                    {allServices && allServices.map((e) => (
                                        <div className="services_flex_wrapper" key={e.id}>
                                            <div className="all_services_outer">
                                                <div className="service_both_sections">
                                                    <div className="services_gif">
                                                        <img src={e.acf.service_gif.url || emptyImage.src} alt="service_gif" />
                                                    </div>
                                                    <div className="services_content_area">
                                                        <div className="service_content_heading">
                                                            <h1>{e.acf.services_title}</h1>
                                                        </div>
                                                        <div className="service_content_description">
                                                            <div dangerouslySetInnerHTML={{ __html: e.acf.services_description.slice(0, 150) }}></div>
                                                        </div>
                                                    </div>
                                                    <div className="services_navigation">
                                                        <Link href={`/services/${e.slug}`}>
                                                            Read more
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="services_show_servicefaqs">
                            <ServicesFaq faqs={ele.acf.our_service_faqs} outerHeading={ele.acf.faq_outer_heading} />
                        </div>
                        <div className="testimonial_service content">
                            <div className="services_page_testimonials">
                                <TestimonialSection ele={ele} />
                            </div>
                        </div>
                    </div>
                ))
            )}
        </>
    )
}
