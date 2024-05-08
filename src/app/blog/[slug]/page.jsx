import { allExportedApi } from "@/utils/apis/Apis";
import BlogSlug from "./component/blogSlug";




export default async function Page({ params }) {
    let api=allExportedApi()
    const { slug } = params;

     


    let data = await api.SingleBlogPost(slug)
    console.log(data)

    return (
        <>
            <BlogSlug data={data} />
        </>
    );
}


export async function generateStaticParams() {
    let api=allExportedApi()
    let data = await api.AllBlogPOsts();
    return data.map((ele) => ({
        slug: ele.slug
    }));
}


export async function generateMetadata({params}){
    let {slug}=params
    let api=allExportedApi()
    let data = await api.SingleBlogPost(slug)
    console.log(data)
    let result=data.map((ele)=>{
      return{
        title:ele.title.rendered,
        description:ele.acf.blog_post_tittle
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