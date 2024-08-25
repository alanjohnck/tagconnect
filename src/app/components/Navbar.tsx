"use client"
import React from 'react'

function Navbar() {

  return (
    <nav className='flex justify-start items-center gap-5 p-4 bg-black text-white'>
       <div className='w-[20%]  flex'>
          <div className=' flex'>
            <img src='./LogoWhite1.svg' className='w-10 h-10'></img>
          </div> 
          <div>
            <img src="./Tagdynamix.svg" className='w-20 h-10'></img>
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