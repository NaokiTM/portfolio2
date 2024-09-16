import React from 'react'
import "@/app/eye.css"

function Eye() {
  return (
    <div className='eye-container'>
        <div className='sclera'>
            <div className='iris iris-animation'>
                <div className='iris-shadow'></div>
                <div className='pupil'></div>
            </div>
        </div>
    </div>
  )
}

export default Eye