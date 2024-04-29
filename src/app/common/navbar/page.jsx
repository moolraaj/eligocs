import React from 'react'

import dynamic from 'next/dynamic'

const NavbarCompo=dynamic(
  ()=> import ('./component/navbarCompo'),
  {
    ssr:false
  }
)

function Navbar({data}) {
  return (
     <>
     <NavbarCompo data={data}/>
     </>
  )
}

export default Navbar
