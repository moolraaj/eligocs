import React from 'react';
import { useRouter } from 'next/router';

function Page() {
    const router = useRouter();
    const { id } = router.query;

    console.log(id);

    return (
        <>
            <h1>{id}</h1>
        </>
    );
}

export default Page;
