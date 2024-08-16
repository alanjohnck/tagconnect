"use client"
import React from 'react'

function Navbar() {

  return (
    <nav className='flex justify-start items-center gap-5 p-4 '>
       <div className='w-[10%] h-fit'>
            <h1 className='text-2xl font-bold'>Tagdynamix</h1>
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