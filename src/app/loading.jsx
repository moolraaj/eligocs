'use client'
import React from 'react'
import { Watch } from 'react-loader-spinner'
function loading() {
    return (
        <div className="parent_loader">
            <Watch
                visible={true}
                height="150"
                width="150"
                radius="48"
                color="#EAAA00"
                ariaLabel="watch-loading"


            />
        </div>


    )
}

export default loading
