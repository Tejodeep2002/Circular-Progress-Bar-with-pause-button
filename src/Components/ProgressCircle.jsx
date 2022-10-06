import React from 'react'
import '../App.css'

function ProgressCircle({progressvalue}) {
  return (
        <div className='ProgressCircle' 
        style={{
          background: `conic-gradient(red ${progressvalue*3.6}deg, white 0deg)`
        }}>
          <div className='ProgressCircle-front'>
            <div className='Progress-value'>{progressvalue}</div>
          </div>
        </div>
  )
}

export default ProgressCircle
