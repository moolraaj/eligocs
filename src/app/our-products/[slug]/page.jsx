
import Productslug from '../[slug]/component/productslug'
import { fetchAllportFolio, fetchSingleportFolio } from "@/utils/apis/Apis";



export default async function Page({ params }) {
    const { slug } = params;

    console.log(slug)


    let data = await fetchSingleportFolio(slug)
    console.log(data)

    return (
        <>
            <Productslug data={data} />
        </>
    );
}


export async function generateStaticParams() {
    let data = await fetchAllportFolio();
    return data.map((ele) => ({
        slug: ele.slug
    }));
}





