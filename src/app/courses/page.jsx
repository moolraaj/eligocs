 
import { allExportedApi } from "@/utils/apis/Apis";
import CoursesPage from "./component/CoursesPage";


export default async function page() {


  return (
   <>
   <CoursesPage />
   </>
  )
}

export async function generateMetadata(){
  let api=allExportedApi() 
  let data = await api.CoursesPageApi() 
 
   
  const result=data.map((ele)=>{
      return{
          title:ele.title.rendered,
          description:ele.acf.courses_page_description
           
      }
  })
 
  return{
      title:result[0].title,
      description:result[0].description,
      openGraph:{
        
      }
  }
}

