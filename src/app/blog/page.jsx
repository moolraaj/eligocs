
import React from 'react'
import { allExportedApi } from '@/utils/apis/Apis';
import { BlogScoData } from './component/blogScoMetaData';

import dynamic from "next/dynamic";
 

 
 
const BlogPage=dynamic(
  ()=> import  ("./component/BlogPage"),
  {
    ssr:true
  }
)

export default async function page() {

  let api=allExportedApi()

 
    let blogPageData = await api.BlogPageApi(); 
  
  return (
   <>
   <BlogPage blogPageData={blogPageData}/>
   </>
  )
}



