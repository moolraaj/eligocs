import { ServiceApi } from "@/utils/apis/Apis";
import ServicesPage from "./component/servicesPage";

 

 

 
export default async function Services() {


    let data=await ServiceApi()
    console.log(data)

    

    return (
        <>
        <ServicesPage data={data}/>
        </>
    );
}


