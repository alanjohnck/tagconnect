"use client"
import Link from 'next/link'
import React from 'react'

function Navbar() {

  return (
    <nav className='w-[98%] h-[8vh] flex justify-start items-center  bg-black  text-white rounded-lg shadow-sm border-1'>
       <div className='w-[10%] h-fit flex px-4'>
          <div className='w-8 md:w-8 lg:w-6 h-6 flex justify-center items-center '>
            <Link href="/landing"><img src='./LogoWhiteNonTransperent.png' className='w-fit object-fit'></img></Link>
          </div>  
       </div>
       <div className='w-[80%] '>
         <ul className='flex gap-6 text-lg justify-center items-center'>
           <li>Platform</li>
           <Link href="/AboutUS">About</Link>
           <Link href="/ContactUS">Contact</Link>
         </ul>
       </div>
      
    </nav>
  )
}

export default Navbar