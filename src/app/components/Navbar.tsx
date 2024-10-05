"use client"
import React from 'react'

function Navbar() {

  return (
    <nav className='w-[98%] h-[8vh] flex justify-start items-center  bg-black  text-white rounded-md shadow-sm border-1'>
       <div className='w-[10%]  flex'>
          {/* <div className=' flex justify-center items-center backdrop-blur-md'>
            <img src='./Logo_Tagdynamix.webp' className='w-fit '></img>
          </div>   */}
       </div>
       <div className='w-[80%] '>
         <ul className='flex gap-6 text-lg justify-center items-center'>
           <li>Platform</li>
           <a href='/AboutUS'>About Us</a>
           <li>Contact</li>
         </ul>
       </div>
      
    </nav>
  )
}

export default Navbar