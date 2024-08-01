"use client"
import { useGSAP } from '@gsap/react';
import Head from 'next/head'
import React from 'react'
import gsap from 'gsap';
function Preloader() {
    
  useGSAP(()=>{
    gsap.fromTo(".preloader-text",{
       scale:0
    },
    {   
        scale:1,
        y:0,
        stagger:.05,
        duration:.1,
    })
  },[])
 
  return (
    <>
    <Head>
      <script  src="https://unpkg.com/split-type"></script>
    </Head>
    <section className='w-screen h-screen bg-[#212529] text-white flex flex-col items-center justify-center'>
        <div>
            
        </div>
        <div>
            <h1 id="preloader-text" className='preloader text-[6rem] leading-[5.9rem] p-2 ' >TagConnect</h1>
           {/* <hr className='border-[white]' /> */}
        </div>


    </section>
    </>
  )
}

export default Preloader