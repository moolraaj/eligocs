
import Productslug from '../[slug]/component/productslug'
import { allExportedApi } from "@/utils/apis/Apis";



export default async function Page({ params }) {
    let api=allExportedApi()
    const { slug } = params;

    console.log(slug)


    let data = await api.fetchSingleportFolio(slug)
    console.log(data)

    return (
        <>
            <Productslug data={data} />
        </>
    );
}


export async function generateStaticParams() {
    let api=allExportedApi()
    let data = await api.fetchAllportFolio();
    return data.map((ele) => ({
        slug: ele.slug
    }));
}





