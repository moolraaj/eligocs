import React from 'react'
import InnerSinglePage from './components/innerSinglePage'

function page({params}) {
    let {slug,innerslug}=params
    


  return (
    <>
    <InnerSinglePage slug={slug} innerslug={innerslug}/>
    </>
  )
}

export default page
