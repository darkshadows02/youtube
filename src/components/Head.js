import React, { useEffect, useRef, useState } from 'react'
import {useDispatch, useSelector} from "react-redux";
import {toggleMenu} from "../utils/appSlice"
   import { SEARCH } from '../utils/constrant';
import { chacheResult } from '../utils/searchSlice';
 
const Head = () => {
      const dispatch=useDispatch();
      const [searchquery, setsearchquery]=useState("");
      const [suggestion, setsuggest]=useState([]);
      const [showsuggestion, setshowsuggestion]=useState(false);
       const searchCache=useSelector((store)=>store.search);
    const toggleMenuHandler=()=>{
        dispatch(toggleMenu());
    }
    useEffect(()=>{
    const timer=  setTimeout(()=>{
        if(searchCache[searchquery]){
          setsuggest(searchCache[searchquery]);
        }else{
     getSearchSuggestion()}},
      200);
         return ()=>{
            clearTimeout(timer);
         }
    }, [searchquery])
   const getSearchSuggestion= async()=>{
          const data= await fetch(SEARCH+searchquery);
          const json=await data.json();
          setsuggest(json[1]);
          dispatch(chacheResult({
            [searchquery]:json[1]
          }))
   }
   
  return (
    <div className='grid  grid-flow-col p-5 shadow-lg'> 
       <div className='flex col-span-1'>
           <img onClick={()=>toggleMenuHandler()} className='h-7 cursor-pointer' src="https://www.svgrepo.com/show/313139/hamburger-menu.svg" />
         <a href='/'>  <img className='h-14 ml-5  -mt-3 ' src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg" /> </a> 
       </div>
       <div className='col-span-10  px-20'>
           <div> 
           <input type='text' value={searchquery} onChange={(e)=>{setsearchquery(e.target.value)}} className='w-1/2 border border-gray-400 py-2 px-2  rounded-l-full  relative '
              onFocus= {()=>setshowsuggestion(true)}
              onBlur={()=>setshowsuggestion(false)}
           />
           <button className=' border border-gray-400 py-2 px-5  rounded-r-full bg-slate-300'>
                 🔍
            </button>
            </div>
            { suggestion.length>0 && showsuggestion &&
            <div className=' absolute bg-white  w-[27rem] py-2 px-2 shadow-lg rounded-lg border border-gray-200'>
                <ul>
                    {
                      suggestion.map((s, index)=>(
                        <li key={index} className='py-3 shadow-sm hover:bg-slate-100'>🔍 {s}</li>
                      ))
                    } 
                </ul>
            </div>
            }
       </div>
       <div className='col-span-1'>
          <img className='h-8' src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png" />
       </div>
    </div>
  )
}

export default Head