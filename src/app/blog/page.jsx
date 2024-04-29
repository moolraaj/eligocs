import { AllBlogPOsts, BlogPageApi } from '@/utils/apis/Apis'
import BlogPage from './component/BlogPage';

export default async function page() {

    let blogPageData= await BlogPageApi();
    let  allBlogPosts = await AllBlogPOsts();
  return (
   <>
   <BlogPage blogPageData={blogPageData} allBlogPosts={allBlogPosts} />
   </>
  )
}

