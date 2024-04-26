 
import Navbar from './navbar/page'
import Footer from './footer/page'
import { fetchHeaderFooter } from '@/utils/apis/Apis';

export default async function SingleLayout({ children }) {

   

    
        let response=await fetchHeaderFooter()
        let data=await response.data
<<<<<<< HEAD
        
=======
        // console.log(data)
>>>>>>> 9a7babdf52cd6a32b11e7cb01bbf4b63ccf7ae7e
  
    

    

    return (
        <>
            <Navbar data={data}/>
            {children}
            <Footer />
            
        </>
    )
}

 
