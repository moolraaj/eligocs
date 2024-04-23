import { fetchServices, fetchSingleService } from "@/utils/apis/Apis";

export default async function ServicePage({ params }) {
    const { slug } = params;
    console.log(slug);


    const data = await fetchSingleService(slug)
    console.log(data)


    if (!data) {
        return <h1>Loading...</h1>;
    }

    return (
        <>

        </>
    );
}








export async function generateStaticPr({ slug }) {
    const data = await fetchServices(slug);
    return data.map(ele => ({ slug: ele.acf.slug }));
}

