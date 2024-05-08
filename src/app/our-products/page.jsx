import { allExportedApi } from "@/utils/apis/Apis";
import OurProductPage from "./component/OurProductPage";

 

 

export default async function page() {

 
  return (
    <>
      <OurProductPage />
    </>
  )
}


// generate dynamic sco title and desriptions
export async function generateMetadata(){
  let api=allExportedApi() 
  const data = await api.ProductPageApi(); 
   
  const result=data.map((ele)=>{
      return{
          title:ele.title.rendered,
          description:ele.acf.product_page_description
           
      }
  })
 
  return{
      title:result[0].title,
      description:result[0].description,
      openGraph:{

      }
  }
}

