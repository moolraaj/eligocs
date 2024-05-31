import React from 'react';

function TermsAndConditions({data}) {
  return (
    <>
    <div className="terms_and_conditions_outer page_top footer_pages">
        <div className="terms_and_conditions_inner">
            {data.map((ele,index)=>{
                return  <div className='t_c_data' key={index} dangerouslySetInnerHTML={{__html: ele.acf.terms_and_conditions}}></div>;
            })}
           
        </div>
    </div>
    </>
  )
}

export default TermsAndConditions