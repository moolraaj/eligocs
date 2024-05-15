 
 
import { allExportedApi } from "@/utils/apis/Apis";
import HomePage from "./home/homepage";
 
 
export default function Home() {   
  return (
    <>
    
    <HomePage />

    
      
        
       

    </>
  );
}

// export async function generateMetadata(){
 
//   let api=allExportedApi()   
//   let data = await api.HomeApi() 
  
//   const result=data.map((ele)=>{
//       return{
//           title:ele.title.rendered,
//           description:ele.acf.about_para_first
           
//       }
//   })
  
//   return{
//       title:result[0].title,
//       description:result[0].description,
//       openGraph:{
        
//       }
//   }
// }
