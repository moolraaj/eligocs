'use client'
import React from 'react'
// import { Hourglass } from 'react-loader-spinner'
import ddd from '../../../assets/loader/loader.gif';


function Loader() {
  return (

    <div className="loader">
      {/* <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={['#191C1B', 'blue']}
      /> */}

      <img src={ddd.src} alt='loader' />

    </div>



  )
}

export default Loader
