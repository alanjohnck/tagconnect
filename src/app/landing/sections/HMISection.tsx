"use client"
import React, { useRef } from 'react'
import {motion,useScroll, useTransform} from "framer-motion"
function HMISection() {
    const container = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target:container,
        offset: ["start end", "end start"]  // Start when container top reaches viewport top, end when container bottom reaches viewport bottom
    })
    
    const opacity = useTransform(scrollYProgress, [0, 1], [0,1])
    const color = useTransform(scrollYProgress, [0,.5], ["#fff", "#F58120"]);
    const scale = useTransform(scrollYProgress, [0, .5], [0,.2]);
  return (
    <div ref={container} className='w-screen h-screen  flex flex-col items-center justify-start gap-5 '>
{/**HMI Screen section */}
        <div className='h-1/2 w-screen  flex items-center justify-center p-4'>
             <motion.div style={{backgroundColor:color}} className='w-[30%] h-3/4 flex bg-black rounded-md p-8 '>
                <div className='h-full w-3/4 bg-white rounded-md flex items-center justify-center'>
                    <motion.img src='./touchhmi.png' className='scale-20' style={{scale}}></motion.img>
                </div>
                <div className='h-full w-1/4 flex flex-col gap-2 items-center justify-between'>
                     <div className='w-4 h-4 rounded-full bg-white' />
                     <div className='w-4 h-4 rounded-full bg-white' />
                     <div className='w-4 h-4 rounded-full bg-white' />
                     <div className='w-4 h-4 rounded-full bg-white' />
                     {/* <div className='w-4 h-4 rounded-full bg-white' /> */}
                </div>
             </motion.div>
        </div>
{/**HMI Screen section */}
        <div>
            <h1 className='text-4xl font-black'>
                  Custom HMI/SCADA development on any platform
            </h1>
        </div>
        <div className='flex justify-center items-center p-4 gap-2 w-screen h-[30vh]'>
              <div className='w-[30%] h-full flex items-center justify-center'>
                  <h2 className='font-semibold text-2xl text-balance'>
                    Team of HMI/ SCADA & data management specialist
                  </h2>
              </div>
              <div className='w-[20%] h-full font-thin flex flex-col items-start justify-center text-balance gap-2'>
                  <span>T01</span>
                  <p >
                     Intuitive Interfaces, Minimal code and maximum performance
                  </p>
              </div>
              <div className='w-[20%] h-full font-thin flex flex-col items-start justify-center text-balance gap-2'>
                  <span>T02</span>
                  <p>
                     Simplified User Experiences, Optimized Architectures
                  </p>
              </div>
              <div className='w-[20%] h-full font-thin flex flex-col items-start justify-center text-balance gap-2'>
                  <span>T03</span>
                  <p>
                    Crafting Quality Frameworks for Seamless Automation
                  </p>
              </div>
        </div>
        <hr className='w-screen h-2' />
    </div>
  )
}

export default HMISection