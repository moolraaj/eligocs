

'use client'
import CallToAction from "@/app/call-to-action/callToAction";
import { allExportedApi } from "@/utils/apis/Apis";
import Link from "next/link";
import { useEffect, useState } from "react";
import emptyImage from '../../../assets/empty.jpg'


function ServicesInnerSlug({ slug }) {
   let api = allExportedApi()






   let [data, setData] = useState([])
   let [services, setServices] = useState([])


   const funcLoadSingleSrvices = async () => {
      const response = await api.fetchSingleService(slug);
      setData(response)
   }
   const funcLoadAllSrvices = async () => {
      let response = await api.fetchAllServices()
      setServices(response)
   }
   useEffect(() => {
      funcLoadSingleSrvices()
      funcLoadAllSrvices()
   }, [])

   return (
      <>
         <div className="page_top">
            {data.map((ele) => {
               const relatedServices = services.filter(relServices => relServices.slug !== ele.slug);
               return <div className="services_inner_template_wrapper" key={ele.id}>

                  <div className="portfolio_page_top_section">
                     <div className="portfolio_heading_image_wrapper">
                        <div className="portfolio_page_top_heading">
                           <h1>{ele.acf.services_title}</h1>
                        </div>
                        <div className="portfolio_page_top_image">
                           <img src={ele.acf.banner_image || emptyImage.src} alt={ele.acf.services_title} />
                           <div className="divider-yellow"></div>
                        </div>
                     </div>
                  </div>

                  <div className="serices_flex_template">
                     <div className="services_left_sec">
                        <div className="services_inner_heading">
                           <h1>{ele.acf.services_inner_heading}</h1>
                        </div>
                        <div className="services_inner_description">
                           <span dangerouslySetInnerHTML={{ __html: ele.acf.services_description }}></span>
                        </div>
                     </div>
                     <div className="services_right_sec">
                        <h1>Related Services</h1>
                        <div className="related-services">
                           {
                              relatedServices.map((items) => {
                                 return <div key={items.id}>

                                    <ul>
                                       <li>
                                          <Link href={`/services/${items.slug}`}>{items.acf.services_title}</Link>
                                       </li>
                                    </ul>
                                 </div>

                              })
                           }
                        </div>
                     </div>
                  </div>

                  <div className="services_development_process_wrapper">
                     {ele.acf.inner_development_process.map((ele, index) => (
                        <div className={`process_flex_template process_template-${index % 2 === 0 ? "even" : "odd"}`}
                           key={index}>
                           <div className="process_left_section">
                              <div className="inner_process_heading">
                                 <h1>{ele.services_process_heading}</h1>
                              </div>
                              <div className="process_description">
                                 <p dangerouslySetInnerHTML={{ __html: ele.services_process_description }}></p>
                              </div>
                           </div>
                           <div className="process_right_section">
                              <div className="process_image">
                                 <img src={ele.services_process_image || emptyImage.src} alt='services_process_image' />
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
                  <div className="services_dont_miss_out">
                     <div className="services_missout_heading">
                        <h1>{ele.acf.dont_miss_out_heading}</h1>
                     </div>
                     <div className="servives_missout_description">
                        <div dangerouslySetInnerHTML={{__html:ele.acf.dont_miss_out_description}}></div>
                     </div>
                  </div>



               </div>
            })}
         </div>
         <div className="call_outer inner_services">
            <div className="inner_call">
               <CallToAction />
            </div>

         </div>

      </>
   );
}

export default ServicesInnerSlug;
