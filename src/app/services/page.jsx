import { allExportedApi } from "@/utils/apis/Apis.jsx";
import ServicesPage from "./component/servicesPage";
 
 

 

 

 
 async function Services() {

    let api=allExportedApi()



    let data=await api.ServiceApi()
    console.log(data)

    

    return (
        <>
       
        <ServicesPage data={data}/>
       
        </>
    );
}

export default Services


