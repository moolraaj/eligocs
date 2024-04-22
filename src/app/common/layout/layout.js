'use client'
import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/page'
import Footer from '../footer/page'




function Layout({ children }) {
  const [data, setData] = useState(false)
  


  useEffect(() => {
    setData(true)
    
  }, [])


  if (!data) {
    return <h1 className="loader">Please wait, loading...</h1>;
  }

   


  return (
    <>
      <>
        <Navbar />
        {children}
        <Footer />
      </>


    </>
  )
}

export default Layout