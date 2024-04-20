import Allposts from "../components/Newposts/AllPosts";

async function getPosts() {
    const response = await fetch('https://api.eligo.cloud/wp-json/wp/v2/testimonial');
    const data = await response.json();
    return data;
}

export default async function Products() {
    const ourTestimonials = await getPosts();

    return (
        <>
            <h1>Posts</h1>
            {ourTestimonials.length > 0 && (
                ourTestimonials.map(({id, acf }) => (
                    <Allposts key={acf.testimonials[0].client_name} id={id} acf={acf} />
                ))
            )}
        </>
    );
}
