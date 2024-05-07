import { allExportedApi } from "@/utils/apis/Apis.jsx";
import Serviceslug from "./component/Serviceslug";
 


export default async function Page({ params }) {
    let api=allExportedApi()
    const { slug } = params;
    console.log(slug);
    const data = await api.fetchSingleService(slug);
    console.log(data);

    let services=await api.fetchAllServices()
    console.log(services)


    

    return (
        <>
             <Serviceslug data={data} services={services} />
        </>
    );
}


export async function generateStaticParams() {
    const api = allExportedApi();
    const result = await api.fetchAllServices();
    return result.map(ele => ({
        slug: ele.slug
    }));
}


