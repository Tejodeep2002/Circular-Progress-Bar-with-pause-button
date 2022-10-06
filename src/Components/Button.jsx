import React from 'react'

function Button(props) {
  
  return (
    <>
      <button className='button' onClick={props.function}>{props.Name}</button>
    </>
  )
}

export default Button
