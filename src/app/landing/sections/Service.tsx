"use client"
import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'

function Service() {
  let  Heading = "SERVICES"
  let characters = Heading.split('');
useGSAP(()=>{

    const timeline = gsap.timeline({
      scrollTrigger:{
        trigger:'.service',
        start:"top top",
        end:"bottom top",
        pin:true,
        scrub:.1,
        markers:true
      }
    })
    timeline
    // .to(".char",{
    //   y:20,
    //   stagger:.05,
    //   duration:.1,
    //   delay:.1,
    //   scale:0,
     
    // })
    .fromTo(".service-section",{x:"-100%"},{x:"0",duration:1.5,ease:"power1.in",scrollTrigger:{trigger:'.service-section ',start:"top top",scrub:true,}})


},[])


  return (
    <div className='service w-screen h-suto flex flex-col items-center justify-center text-[#6C757D] p-4 ' >
      <div className='flex  h-[10vh] p-2 '>
      {characters.map((char) => (
        <h1 key={char} className=' flex text-4xl bg-transparent font-bold border-b-2 '>{char}</h1>
      ))}
      </div>
        {/* <h1 className='title text-4xl p-2  font-bold'>SERVICES</h1> */}
      <div className='service-section w-[100vw] h-[100vh] flex scroll-smooth z-20 '>

        <div className='first-service w-[100vw] h-[90vh]  flex flex-col items-center justify-center p-4'>
            <div className='flex w-screen h-full  '>
             <div className='w-1/2 bg-blue-400 p-2'>
             </div>
             <div className='w-1/2 flex flex-col items-center justify-start border-2'>
                <h1 className='text-4xl p-2 font-bold '>HMI DEBUGGING</h1>
                <p>
                    We provide HMI debugging services for Rockwell Automation, Siemens, and InTouch.
                </p>
             </div>
            </div> 
        </div>

        <div className='second-service w-[100vw] h-[90vh]flex flex-col items-center p-4 justify-center '>
            <div className='flex w-screen h-full '>
             <div className='w-1/2 bg-red-400 '>
             </div>
             <div className='w-1/2 flex flex-col items-center justify-start border-2'>
                <h1 className='text-4xl p-2 font-bold '>Custom HMI Development</h1>
                <p>
                    We develop custom HMI solutions for your business needs.
                </p>
             </div>
            </div> 
        </div>
    </div>

    </div>
  )
}

export default Service