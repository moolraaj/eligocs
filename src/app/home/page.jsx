
import { allExportedApi } from '@/utils/apis/Apis'

import dynamic from 'next/dynamic';
const api = allExportedApi()

const HomeCompo = dynamic(





    () => import('../components/Home/Home'),
    {
        ssr: false
    }
)




export default async function HomePage() {








    const result = await api.HomeApi()








    return (




        <HomeCompo result={result} />




    )
}

