


import CallToAction from "@/app/_call-to-action/callToAction";
import Link from "next/link";



function ServiceSlug({ data, services }) {

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
                           <img src={ele.acf.banner_image} alt={ele.acf.services_title} />
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
                           <p>{ele.acf.services_description}</p>
                        </div>
                     </div>
                     <div className="services_right_sec">
                        <h1>{ele.acf.related_services_heading}</h1>

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

                  {ele.acf.inner_development_process.map((ele, index) => (
                     <div className="process_flex_template" key={index}>
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
                              <img src={ele.services_process_image} alt='' />
                           </div>
                        </div>
                     </div>
                  ))}

                  <div className="services_dont_miss_out">
                     <div className="services_missout_heading">
                        <h1>{ele.acf.dont_miss_out_heading}</h1>
                     </div>
                     <div className="servives_missout_description">
                        <p>{ele.acf.dont_miss_out_description}</p>
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

export default ServiceSlug;
