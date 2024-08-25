"use client"
import React from 'react'

function Navbar() {

  return (
    <nav className='flex justify-start items-center gap-5 p-4 bg-black text-white'>
       <div className='w-fit  flex'>
          <div className='h-full flex justify-center items-center'>
            <img src='./Logo_Tagdynamix.webp' className='w-30 h-10'></img>
          </div>  
       </div>
       <div className='w-[80%] '>
         <ul className='flex gap-6 text-lg justify-center items-center'>
           <li>Platform</li>
           <li>About Us</li>
           <li>Contact</li>
         </ul>
       </div>
    </nav>
  )
}

export default Navbar