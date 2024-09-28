"use client"

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ChartLine } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Management() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const sections = gsap.utils.toArray('.image-section') as HTMLElement[]
    
    sections.forEach((section, i) => {
      gsap.to(section, {
        zIndex: i + 1, // Increment z-index to bring the image to the front

        scrollTrigger: {
          trigger: `.text-section:nth-child(${i + 1})`, // Trigger based on the left side text section
          start: 'top center', // Start when the top of the section hits the center of the viewport
          end: 'bottom center', // End when the bottom of the section hits the center
          scrub: true, // Smooth transition as you scroll

        },
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill()) // Cleanup GSAP triggers on unmount
    }
  }, [])

  return (
    <div className=" w-screen flex flex-col items-center justify-center ">
      <div className='flex justify-center'>
        <h1 className='font-onsite w-3/4 m-[5vh]  text-center'>Manage and view every data captured </h1>
      </div>
      <div className='relative w-[96%] flex'>
      {/* Left Scrollable Text Section */}
      <div className="w-[96%] lg:w-1/2 relative z-10">
        <div className="text-section min-h-screen flex flex-col justify-center p-10 ">
          <h2 className="font-onsite w-3/4 m-[5vh] text-[35px] leading-[38px] lg:text-[65px] lg:leading-[62px] font-[500] tracking-[-2px] text-center">Historical data</h2>
          {/* <p>Built-in calibration technology, robotics, AI, and automated post-processing...</p> */}
        </div>
        <div className="text-section min-h-screen flex flex-col justify-center p-10 ">
          <h2 className="font-onsite w-3/4 m-[5vh] text-[35px] leading-[38px] lg:text-[65px] lg:leading-[62px] font-[500] tracking-[-2px] text-center">Custom reporting</h2>
          {/* <p>Faster throughput and larger part capabilities with modern robotics.</p> */}
        </div>
        <div className="text-section min-h-screen flex flex-col justify-center p-10 ">
          <h2 className="font-onsite w-3/4 m-[5vh] text-[35px] leading-[38px] lg:text-[65px] lg:leading-[62px] font-[500] tracking-[-2px] text-center">Data analytics </h2>
          {/* <p>Achieve higher precision with our latest automation technology.</p> */}
        </div>
        <div className="text-section min-h-screen flex flex-col justify-center p-10 ">
          <h2 className="font-onsite w-3/4 m-[5vh] text-[35px] leading-[38px] lg:text-[65px] lg:leading-[62px] font-[500] tracking-[-2px] text-center">Alarm & Events </h2>
          {/* <p>Our automated processes ensure continuous production without interruptions.</p> */}
        </div>
      </div>

      {/* Right Sticky Image Section */}
      <div className="w-[96%] lg:w-1/2 h-screen sticky top-0">
        <div className='w-full h-screen relative'>
          {/* Images stacked on top of each other */}
          <div className="image-section absolute inset-0 scale-95 flex justify-center ite ">
            {/* <img src="/auto1.jpg" alt="robotic arm 1" className="object-cover w-full h-full" /> */}
                <ChartLine />
          </div>
          <div className="image-section absolute inset-0 scale-95">
            <img src="/auto2.jpg" alt="robotic arm 2" className="object-cover w-full h-full" />
          </div>
          <div className="image-section absolute inset-0 scale-95">
            <img src="/auto1.jpg" alt="robotic arm 3" className="object-cover w-full h-full" />
          </div>
          <div className="image-section absolute inset-0 scale-95">
            <img src="/auto2.jpg" alt="robotic arm 4" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
      </div> 
    </div>
  )
}
