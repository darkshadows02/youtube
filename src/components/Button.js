import React from 'react'

const Button = ({name}) => {
  return (
    <div> 
      <button className=' bg-gray-300 rounded-lg px-5 py-2 m-3'>{name}</button>
    </div>
  )
}

export default Button