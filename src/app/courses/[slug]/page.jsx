import { allExportedApi } from "@/utils/apis/Apis";
import CourseSlug from "./component/courseslug";



export default async function Page({ params }) {
    let api=allExportedApi()
    const { slug } = params;

    console.log(slug)


    let data = await api.fetchSingleCourse(slug)
    console.log(data)

    return (
        <>
            <CourseSlug data={data} />
        </>
    );
}


export async function generateStaticParams() {
    let api=allExportedApi()
    let data = await api.AllCourses();
    return data.map((ele) => ({
        slug: ele.slug
    }));
}


export async function generateMetadata({params}){
    let {slug}=params
    let api=allExportedApi() 
    let data = await api.fetchSingleCourse(slug) 
   
    const result=data.map((ele)=>{
        return{
            title:ele.title.rendered,
            description:ele.acf.course_short_intro
             
        }
    })
     
    return{
        title:result[0].title,
        description:result[0].description,
        openGraph:{
          
        }
    }
  }