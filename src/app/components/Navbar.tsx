"use client"
import React from 'react'

function Navbar() {

  return (
    <nav className='w-screen h-[10vh] flex justify-start items-center gap-5  bg-black text-white'>
       <div className='w-[10%]  flex'>
          {/* <div className=' flex justify-center items-center backdrop-blur-md'>
            <img src='./Logo_Tagdynamix.webp' className='w-fit '></img>
          </div>   */}
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