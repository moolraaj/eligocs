import React from 'react'
import Services from "@/app/services/page";
function TransformationSection({ele}) {

  return (
    <>
   <div className="page_outer transform_section_outer scrolling">
            <div className="page_inner transform_section_inner">
              <div className="home_transformation_wrapper">
                <div className="trans_flex">
                  <div className="trans_left_section">
                    <h1>{ele.acf.transformation_top_heading}</h1>
                  </div>
                  <div className="trans_right_section">
                    <Services />
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default TransformationSection
