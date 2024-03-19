import React, { useEffect } from 'react'
import { closeMenu } from '../utils/appSlice';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';
import LiveChate from './LiveChate';
const WatchPage = () => {
    const dispatch=useDispatch();
      const [searchParams]=useSearchParams();
        console.log(searchParams.get("v"));
       useEffect(()=>{
        dispatch(closeMenu());
       }, []);
  return (
    <div className='flex flex-col w-full'> 
    <div className='px-5 mt-5 flex w-full'> 
       <div> 
       <iframe width="800" height="450" 
          className=' rounded-lg shadow-md'
       src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="YouTube video player"
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen>
        </iframe>
        </div>
        <div className='w-full'>
         <LiveChate />
        </div>
    </div>
       <CommentContainer />
    </div>
  )
}

export default WatchPage