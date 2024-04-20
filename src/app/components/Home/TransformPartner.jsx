import React, { useEffect, useState } from 'react';

function TransformPartner() {
    const [img, setImg] = useState([]);
    const [error, setError] = useState(null);
     
    useEffect(() => {
        const loadImage = async () => {
            try {
                const url = await fetch(`https://api.eligo.cloud/wp-json/wp/v2/media`);
                if (!url.ok) {
                    throw new Error('Failed to fetch image');
                }
                const data = await url.json();
                setImg(data);
                console.log( data);
            } catch (error) {
                console.error('Error loading image:', error);
                setError(error.message);
            }
        };

        loadImage();
    }, []); 

    return (
        <>
            
            { img.map((ele) => (
                <img key={ele.id} src={ele.source_url} alt={ele.source_url} />
            ))}
        </>
    );
}

export default TransformPartner;
