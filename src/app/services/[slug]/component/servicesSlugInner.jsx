'use client'
import CallToAction from '@/app/call-to-action/callToAction'
import { allExportedApi } from '@/utils/apis/Apis'
import React, { useEffect, useState } from 'react'

function ServicesSlugInner({slug}) {
    console.log(slug)
    let api=allExportedApi()
   
    let[result,setResult]=useState([])
    const loadSingleServices=async()=>{
        let resp=await api.fetchSingleService(slug)
        setResult(resp)
    }
    useEffect(()=>{
        loadSingleServices()
    },[])
    console.log(result)

  return (
      <>
      
      <div className="page_top">
            {result.map((ele) => {
               const relatedServices = result.filter(relServices => relServices.slug !== ele.slug);
               return <div className="services_inner_template_wrapper" key={ele.id}>

                  <div className="portfolio_page_top_section career_inner_page_top">
                     <div className="portfolio_heading_image_wrapper">
                        <div className="portfolio_page_top_heading">
                           <h1>{ele.acf.services_title}</h1>
                        </div>
                        <div className="portfolio_page_top_image">
                           <img src={ele.acf.banner_image || emptyImage.src} alt={ele.acf.services_title} />
                           <div className="divider-yellow"></div>
                        </div>
                     </div>
                     <div className="portfolio_inner_top_right_section">
                        <div className="services_inner_heading">
                           <h1>{ele.acf.services_title}</h1>
                        </div>
                        <p>{ele.acf.service_inner_page_top_description}</p>
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
                  {Array.isArray(ele.acf?.inner_development_process) ? (
                           ele.acf.inner_development_process.map((process, index) => (
                              <div className={`process_flex_template process_template-${index % 2 === 0 ? "even" : "odd"}`} key={index}>
                                 <div className="process_left_section">
                                    <div className="inner_process_heading">
                                       <h1>{process.services_process_heading || "Process Heading"}</h1>
                                    </div>
                                    <div className="process_description">
                                       <p dangerouslySetInnerHTML={{ __html: process.services_process_description || "" }}></p>
                                    </div>
                                 </div>
                                 <div className="process_right_section">
                                    <div className="process_image">
                                       <img src={process.services_process_image || emptyImage.src} alt='services_process_image' />
                                    </div>
                                 </div>
                              </div>
                           ))
                        ) : (
                           ""
                        )}
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
  )
}

export default ServicesSlugInner
