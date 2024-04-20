import PostButton from "./PostButton";

export default function Allposts({ acf, id, noButton =false }) {
    // Extracting data from the acf prop
    const { testimonials } = acf;
    const { client_name, client_designation, client_description, client_image, client_location } = testimonials[0];

    return (
        <div className="post">
            <h2>{client_name}</h2>
            <p>{client_designation}</p>
            <p>{client_description}</p>
            <p>{client_location}</p>
            {client_image && <img src={client_image} alt={client_name} />}
            <p>Post ID: {id}</p>
            {
                !noButton && <PostButton id={id} />
            }
            
        </div>
    );
}
