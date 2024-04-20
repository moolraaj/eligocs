'use client';
import { useRouter } from "next/navigation";

export default function PostButton({id}){
    const router = useRouter();
    function handleClick() {
        router.push(`/Posts/${id}`)
    }

    return(
        <div className="PostButton">
            <button onClick={handleClick}>see post</button>
        </div>
    )
}