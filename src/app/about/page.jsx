


import AboutUs from "../components/About/AboutUs";


import './AboutPage.scss'
import { AboutScoData } from "../components/About/aboutMetadata";

async function AboutPage() {
 
  return (
    <>
      
        <AboutUs/>

     





    </>
  )
}

export default AboutPage


export async function generateMetadata(){
 let metadata=await AboutScoData()
 return  metadata
   
}