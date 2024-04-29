import { ServiceApi } from "@/utils/apis/Apis";
import ServicesPage from "./component/servicesPage";
import Layout from "../common/layout/lauout";
 

 

 

 
 async function Services() {


    let data=await ServiceApi()
    console.log(data)

    

    return (
        <>
        <Layout>
        <ServicesPage data={data}/>
        </Layout>
        </>
    );
}

export default Services


