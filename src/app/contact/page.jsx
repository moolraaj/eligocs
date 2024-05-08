import { allExportedApi } from '@/utils/apis/Apis'
import React from 'react'
import ContactPage from './component/contactUs'

async function page() {
  let api=allExportedApi()
  let data=await api.contactUsPageApi()
  console.log(data)
  return (
    <>
    <ContactPage data={data}/>
    </>
  )
}

export default page


export async function generateMetadata(){
 
  let api=allExportedApi()    
  let data = await api.contactUsPageApi() 
  
  const result=data.map((ele)=>{
      return{
          title:ele.title.rendered,
          description:'this is contact us page'
           
      }
  })
  
  return{
      title:result[0].title,
      description:result[0].description,
      openGraph:{
        
      }
  }
}

