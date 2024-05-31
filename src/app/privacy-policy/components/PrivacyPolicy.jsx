import React from 'react';

function PrivacyPolicy({data}) {
  return (
    <>
    <div className="privacy_policy_outer page_top footer_pages">
        <div className="privacy_policy_inner">
            {data.map((ele,index)=>{
                return  <div className='privacy_policies_data' key={index} dangerouslySetInnerHTML={{__html: ele.acf.privacy_policies}}></div>;
            })}
           
        </div>
    </div>
    </>
  )
}

export default PrivacyPolicy;