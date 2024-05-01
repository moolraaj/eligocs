import { allExportedApi } from "@/utils/apis/Apis"

import dynamic from "next/dynamic";


const OurProductPage = dynamic(
  () => import("./component/OurProductPage"),
  {
    ssr: false
  }
)

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

