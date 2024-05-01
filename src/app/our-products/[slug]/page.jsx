
import Productslug from '../[slug]/component/productslug'
import { allExportedApi } from "@/utils/apis/Apis";



export default async function Page({ params }) {
    let api=allExportedApi()
    const { slug } = params;

    let data = await api.fetchSingleportFolio(slug)
   let allportFolioProducts =await api.fetchAllportFolio(slug)
    return (
        <>
            <Productslug data={data} allportFolioProducts={allportFolioProducts} />
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





