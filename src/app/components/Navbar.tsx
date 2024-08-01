"use client"
import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
function Navbar({preloader}:{preloader:boolean}) {

useGSAP(()=>{
   if(preloader){
   const t1= gsap.timeline(
      {
        scrollTrigger:{
          trigger:".nav",
          // start:"top top",
          // end:"bottom top",
          // pin:true,
          // markers:true
        }
      }
    )

    t1.fromTo(".nav",{scale:0,opacity:0},{scale:1,opacity:2,visibility:"visible",duration:3,ease:"power1"})
   }
},[preloader])


  return (
    <nav className='flex justify-center items-center p-4'>
    <div className='nav w-[95vw] h-[10vh] flex items-center bg-white border-2  '>
          <div className='w-[30vw] flex justify-start p-4'>
              <div className='w-7 h-5 flex flex-col gap-1 '>
                 <hr className='w-full border-2 border-[#343A40]' />
                 <hr className='w-full border-2 border-[#343A40]' />
                 <hr className='w-full border-2 border-[#343A40]' />
              </div>
          </div>
          <div className=' w-[40vw] flex justify-center  '>
             <h1>
                <span className='text-[#343A40] text-3xl font-bold '>Tag</span><span className='text-[#343A40] text-3xl font-bold '>Connect</span>

             </h1>
          </div>
          <div className='w-[30vw] flex justify-center gap-10 font-semibold'>
               <h2>Home</h2>
               <h2>About</h2>
               <h2>Solution</h2>
               <h2>Contact</h2>
          </div>
    </div>
    </nav>
  )
}

export default Navbar