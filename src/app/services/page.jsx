
import { allExportedApi } from "@/utils/apis/Apis";
import ServicesPage from "./component/servicesPage";
 
 

 

 

 
function Services() {

  
    return (
        <>
       
        <ServicesPage/>
       
        </>
    );
}

export default Services



// generate dynamic sco title and desriptions
export async function generateMetadata(){
    let api=allExportedApi() 
    const data = await api.ServiceApi();
    const result=data.map((ele)=>{
        return{
            title:ele.title.rendered,
            description:ele.acf.our_services_top_paragraph
             
        }
    })
    return{
        title:result[0].title,
        description:result[0].description,
        openGraph:{

        }
    }
}


