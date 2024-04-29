import { allExportedApi } from '@/utils/apis/Apis'
import React from 'react'
import BlogPage from './component/BlogPage';

export default async function page() {
  let api=allExportedApi()

    let blogPageData= await api.BlogPageApi();
    let  allBlogPosts = await api.AllBlogPOsts();
  return (
   <>
   <BlogPage blogPageData={blogPageData} allBlogPosts={allBlogPosts} />
   </>
  )
}

