
import React from 'react'
import BlogPage from './component/BlogPage'
import { allExportedApi } from '@/utils/apis/Apis';
 

export default async function page() {

  let api=allExportedApi()

 
    let blogPageData = await api.BlogPageApi();   
 

 
    
 
  
  return (
   <>
   <BlogPage blogPageData={blogPageData}/>
   </>
  )
}

export async function generateMetadata(){
  let api=allExportedApi()
  let data = await api.BlogPageApi(); 
 
  let result=data.map((ele)=>{
    return{
      title:ele.title.rendered,
      description:ele.acf.blog_page_description
    }
  })
  console.log(result[0])
  return{
    title:result[0].title,
    description:result[0].description,
    openGraph:{

    }
  }

}

