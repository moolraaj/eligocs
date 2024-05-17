import { allExportedApi } from "@/utils/apis/Apis";
import BlogSlug from "./component/blogSlug";




export default async function Page({ params }) {
    let api=allExportedApi()
    const { slug } = params;

     


    let data = await api.SingleBlogPost(slug);


    return (
        <>
            <BlogSlug data={data} />
        </>
    );
}


export async function generateStaticParams() {
    let api=allExportedApi()
    let data = await api.AllBlogPOsts();
    let {blogs}=data
    return blogs.map((ele) => ({
        slug: ele.slug
    }));
}


export async function generateMetadata({params}){
    let {slug}=params
    let api=allExportedApi()
    let data = await api.SingleBlogPost(slug)
  
    let result=data.map((ele)=>{
      return{
        title:ele.title.rendered,
        description:ele.acf.blog_post_tittle
      }
    })
  
    return{
      title:result[0].title,
      description:result[0].description,
      openGraph:{
  
      }
    }
  
  }