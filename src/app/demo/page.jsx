import { fetchscodata } from "./metadata";

export default function Page() {
    const metadata = fetchscodata();

    console.log(metadata);

    return (
        <>
            <body>
                <h1>Welcome to the Eligocs Home Page</h1>
            </body>
        </>
    );
}

export async function generateMetadata() {
    const metadata = await fetchscodata();
    return metadata;
}
