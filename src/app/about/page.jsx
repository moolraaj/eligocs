

 
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