

 
import { allExportedApi } from "@/utils/apis/Apis";
import AboutUs from "../components/About/AboutUs";


import './AboutPage.scss'

async function AboutPage() {
 
  const api=allExportedApi() 

   
    let result = await api.AboutApi();
    

  
  return (
    <>
      
        <AboutUs result={result}/>

     





    </>
  )
}

export default AboutPage


export async function generateMetadata(){
 
  let api=allExportedApi() 
  let data = await api.AboutApi() 
 
  const result=data.map((ele)=>{
      return{
          title:ele.title.rendered,
          description:ele.acf.top_para_first
           
      }
  })
   
  return{
      title:result[0].title,
      description:result[0].description,
      openGraph:{
        
      }
  }
}