import React from 'react'
import Button from './Button'

const ButtonList = () => {
     const list=["ALL", "Live", "Gaming", "Songs", "Live", "Soccer", "Cricket", "Cooking"];
  return (
        
    <div className='flex'>
    
         {
          list.map((e)=>(
            <Button id={e} name={e} />
          ))
         }
    </div>
  )
}

export default ButtonList