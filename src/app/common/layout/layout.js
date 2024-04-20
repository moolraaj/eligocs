import React from 'react'
import Navbar from '../navbar/page'
import Footer from '../footer/page'
 

function Layout({children}) {
  return (
    <>
    <Navbar/>
    {children}
    <Footer/>
    
    </>
  )
}

export default Layout