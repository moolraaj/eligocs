import { allExportedApi } from "@/utils/apis/Apis";
import BlogSlug from "./component/blogSlug";




export default async function Page({ params }) {
    let api=allExportedApi()
    const { slug } = params;

    console.log(slug)


    let data = await api.SingleBlogPost(slug)
    console.log(data)

    return (
        <>
            <BlogSlug data={data} />
        </>
    );
}


export async function generateStaticParams() {
    let api=allExportedApi()
    let data = await api.AllBlogPOsts();
    return data.map((ele) => ({
        slug: ele.slug
    }));
}