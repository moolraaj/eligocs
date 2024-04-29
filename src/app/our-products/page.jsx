import { allExportedApi } from "@/utils/apis/Apis"
import OurProductPage from "./component/OurProductPage";

export default async function page() {

  let api = allExportedApi()
  let ProductPageApiData = await api.ProductPageApi();
  let products = await api.fetchAllportFolio();
  return (
    <>
      <OurProductPage ProductPageApiData={ProductPageApiData} products={products} />
    </>
  )
}

