import { allExportedApi } from '@/utils/apis/Apis'
import React from 'react'
import ContactPage from './component/contactUs'

async function page() {
  let api=allExportedApi()
  let data=await api.contactUsPageApi()
  console.log(data)
  return (
    <>
    <ContactPage data={data}/>
    </>
  )
}

export default page

