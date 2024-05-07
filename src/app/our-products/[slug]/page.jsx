
import dynamic from 'next/dynamic';

import { allExportedApi } from "@/utils/apis/Apis";


const Productslug = dynamic(
    () => import('../[slug]/component/productslug'),
    {
        ssr: false
    }
)


export default async function Page({ params }) {
    let api = allExportedApi()
    const { slug } = params;

    let data = await api.fetchSingleportFolio(slug)
    let allportFolioProducts = await api.fetchAllportFolio(slug)
    let allProducts = await api.AllProducts(slug)
    return (
        <>
            <Productslug data={data} allportFolioProducts={allportFolioProducts} allProducts={allProducts} />
        </>
    );
}


export async function generateStaticParams() {
    let api = allExportedApi()
    let data = await api.AllProducts();
    return data.map((ele) => ({
        slug: ele.slug
    }));
}





