import React from 'react'

function CareerPage({data}) {
  return (
   <>
   <div className="page_top">
    <div className="career_page_outer">
        <div className="career_page_inner">
            {data.map((ele,index)=>{
                return <div key={index} className="career_page_wrapper">
                    <img src={ele.acf.career_page_header_image} alt="career_page_header_image" />
                </div>
            }) 
            }
        </div>
    </div>
   </div>
   </>
  )
}

export default CareerPage