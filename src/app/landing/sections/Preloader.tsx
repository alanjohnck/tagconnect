"use client"
import { useGSAP } from '@gsap/react';
import Head from 'next/head'
import React from 'react'
import gsap from 'gsap';
function Preloader() {
  let  Heading = "TagConnect"
  let characters = Heading.split('');
  useGSAP(()=>{
    gsap.to(".char",{
      y:40,
      stagger:.05,
      duration:.1,
      delay:.1
    })
  })
 
  return (
    <>
    <section className='w-screen h-screen bg-[#212529] text-white flex flex-col items-center justify-center'>
        <div>
            
        </div>
        <div className='flex m-2'>
            {characters.map((char) => (
              <h1 key={char} className='char text-[6rem] leading-[5.9rem] '>{char}</h1>
            ))}
           {/* <hr className='border-[white]' /> */}
        </div>


    </section>
    </>
  )
}

export default Preloader