import React from 'react'
import "@/app/eye.css"

function Eye() {
  return (
    <div className='eye-container'>
        <div className='sclera'>
            <div className='iris'>
                <div className='tail1'></div>
                {/* <div className='tail2'></div>
                <div className='tail3'></div> */}
                <div className='iris-shadow'></div>
                <div className='pupil'>
                    <div className='inner-tail1'></div>
                    <div className='inner-tail2'></div>
                    <div className='inner-tail3'></div>
                    <div className='inner-pupil'></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Eye