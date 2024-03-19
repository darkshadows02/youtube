import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
const Sidebar = () => {
       const toggle=useSelector((store)=>store.app.isMenuOpen);
  return toggle && (
    <div className='p-5  shadow-lg w-48'> 
     <Link to="/"><h1 className='font-bold'>Home</h1> </Link>
       <h1 className='font-bold'>Shorts</h1>
       <h1 className='font-bold'>Subscriptions</h1>
        
        <h1 className='font-bold pt-5'>You</h1>
          <ul>
            <li>History</li>
            <li>Watch leter</li>
            <li>liked video</li>
          </ul>

          <h1 className='font-bold pt-5'>Subscriptions</h1>
          <ul>
            <li>Browse channels</li>
          </ul>
          

          <h1 className='font-bold pt-5'>Explore</h1>
          <ul>
            <li>Trending</li>
            <li>Shopping</li>
            <li>Music</li>
            <li>Movies</li>
            <li>Live</li>
            <li>Gaming</li>
            <li>News</li>
            <li>Sports</li>
            <li>Courses</li>
            <li>Fashion & Beauty</li>
            <li>Podcast</li>
          </ul>

          <h1 className='font-bold pt-5'>More From Youtube</h1>
          <ul>
            <li>Youtube Premium</li>
            <li>Youtube Music</li>
            <li>Youtube Kids</li>
          </ul>
    </div>
  )
}

export default Sidebar