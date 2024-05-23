'use client'
import React from 'react'
import { Hourglass } from 'react-loader-spinner'
function loading() {
    return (
        <div className="parent_loader">
             <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={['#191C1B', 'blue']}
      />
            
        </div>


    )
}

export default loading
