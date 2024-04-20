import Allposts from "@/app/components/Newposts/AllPosts";

export async function generateStaticParams() {
  const res = await fetch("https://api.eligo.cloud/wp-json/wp/v2/testimonial");
  const data = await res.json();

  return data.map((post) => ({
    id: post.id.toString(),
  }));
}
async function getPost(id) {
  const res = await fetch(
    `https://api.eligo.cloud/wp-json/wp/v2/testimonial/${id}`
  );
  const data = await res.json();
  return data;
}
export default async function postPage({ params }) {
  const post = await getPost(params.id)
  console.log({ post });
  return (
    <>
      <h1>Seperate products</h1>
      <Allposts noButton key={post.acf.testimonials[0].client_name} id={post.id} acf={post.acf} />
    </>
  );
}
