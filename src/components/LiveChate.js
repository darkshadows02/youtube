import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
 import generate, { makeid } from '../utils/helper';
const LiveChate = () => {
       const dispatch=useDispatch();
       const chatMessages=useSelector((store)=> store.chat.message)
       const [Livemessage, setLivemessage]=useState("");
       useEffect(()=>{
            const i=setInterval(
                ()=>{
              dispatch(addMessage({
                name:generate(),
                message:makeid(12)
            }
              ))
       }, 2000)
          return ()=>{
            clearInterval(i);
          }
       }, [])
  return  (
    <> 
    <div className='ml-2 p-2  w-full h-[450px] bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'> 
    {
        chatMessages.map((s)=>(
            <ChatMessage name={s.name} message={s.message} />
        ))
    } 
    </div>
      <form className='w-full ml-2 p-2  rounded-lg  bg-slate-100'
         onSubmit={
             (e)=>{
                e.preventDefault();
                dispatch(addMessage({
                    name:"suraj kumar",
                    message:Livemessage
                }))
                setLivemessage('');
             }
              
         }
       > 
            <input className='ml-5 px-2 w-96' type='text'   onChange={(e)=>{setLivemessage(e.target.value)}} />
            <button className='ml-5 px-3 rounded-md py-1 mr-2 bg-black text-white'>Send</button>
      </form>
    </>
  )
}

export default LiveChate