import { fetchAllServices, fetchSingleService } from "@/utils/apis/Apis.jsx";
import ServiceSlug from "./component/ServiceSlug";
 


export default async function Page({ params }) {
    const { slug } = params;
    console.log(slug);
    const data = await fetchSingleService(slug);
    console.log(data);

    let services=await fetchAllServices()
    console.log(services)


    

    return (
        <>
             <ServiceSlug data={data} services={services} />
        </>
    );
}


export async function generateStaticParams() {
    const result = await fetchAllServices();
    return result.map(ele => ({
        slug: ele.slug
    }));
}


