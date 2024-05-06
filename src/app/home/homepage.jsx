
 
import { allExportedApi } from '@/utils/apis/Apis'

 
 
import HomeCompo from '../components/Home/Home';
const api = allExportedApi()

 
export default async function HomePage() {
    
        const result = await api.HomeApi()
 





    return (
        <HomeCompo result={result} />
    )
}

