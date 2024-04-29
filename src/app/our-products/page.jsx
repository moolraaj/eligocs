import { ProductPageApi, fetchAllportFolio } from "@/utils/apis/Apis"
import OurProductPage from "./component/OurProductPage";

export default async function page() {
    let ProductPageApiData= await ProductPageApi();
    let products = await fetchAllportFolio();
  return (
   <>
   <OurProductPage ProductPageApiData={ProductPageApiData} products={products} />
   </>
  )
}

