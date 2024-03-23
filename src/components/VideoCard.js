import React from 'react'

const VideoCard = ({info}) => {
    // console.log(info);
    const {snippet, statistics}= info;
    const {channelTitle, title, thumbnails}=snippet;
  return (
    <div className='m-1 p-2 w-72 h-[370px]'> 
            <img className=' rounded-lg shadow-lg ' src={thumbnails.medium.url} />
          <ul>
             <li className='font-bold py-2 '>{title}</li> 
             <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li> 
       </ul>    
    </div>
  )
}

export default VideoCard