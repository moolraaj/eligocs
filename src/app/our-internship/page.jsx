import { allExportedApi } from "@/utils/apis/Apis";
import OurInternshipsPage from "./component/OurInternshipsPage";

 

 

export default async function page() {

 
  return (
    <>
      <OurInternshipsPage/>
    </>
  )
}


// generate dynamic sco title and desriptions
export async function generateMetadata(){
  let api=allExportedApi() 
  const data = await api.internshipPageApi(); 
   
  const result=data.map((ele)=>{
      return{
          title:ele.title.rendered,
          description:ele.acf.internship_description
           
      }
  })
 
  return{
      title:result[0].title,
      description:result[0].description,
      openGraph:{

      }
  }
}

