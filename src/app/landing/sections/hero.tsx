
"use client"
import React, { useEffect } from 'react'
import gsap from 'gsap'; // <-- import GSAP
import { useGSAP } from '@gsap/react'; // <-- import the hook from our React package


gsap.registerPlugin(useGSAP);

function Hero({preloader}:{preloader:boolean}) {

  //The animation after preloader
useGSAP(()=>{
  if(preloader){
      const t1= gsap.timeline(
        {
          scrollTrigger:{
            trigger:".hero",
            // start:"top top",
            // end:"bottom top",
            // pin:true,
            // markers:true
          }
        }
      )

      t1.fromTo(".hero",{scale:0,opacity:0},{scale:1,opacity:2,visibility:"visible",duration:3,ease:"power1"})
        .fromTo(".streamline",{width:"0",opacity:0},{width:"80%",opacity:1,duration:3});
  }
},[preloader])


  return (
    <section className={`hero   w-screen h-screen bg-[white] flex flex-col justify-start items-center gap-4`}>
        <div className='h-[30vh]'>
        </div>
        <div className='screen flex flex-col gap-2 text-center items-center justify-center '>
            <h1 className='text-[#6C757D] text-4xl font-semi-bold'>
               Streamlining Automation Service for Everyone
            </h1>
            <hr className='streamline border-2 border-black text-center ' style={{width:"0",opacity:0}} />
            <p  className='text-[#6C757D] text-sm font-thick'>
                Streamlining your automation solutions with expert support 
                <br />
                <span className='service-line' style={{width:"0"}}>
                for Rockwell Automation, Siemens, and InTouch.
                </span>
            </p>
        </div>
    </section>
  )
}

export default Hero