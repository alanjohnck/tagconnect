
"use client"
import React from 'react';
import { useRef } from 'react'
import Words from '@/app/components/Words';
import { useScroll } from "framer-motion"


function Others() {
    const words = "On-Time Fixes,\n Just When You Need Them Most.".split(" ");
   const container = useRef<HTMLDivElement>(null);
   const { scrollYProgress } = useScroll({
       target: container,
       offset: ["start end", "center center"]
   });
  return (
    <section ref={container} className='w-screen h-[170vh] flex flex-col items-center justify-center'>
            <div  className='w-3/4 h-[70vh] flex items-center justify-center '>
                  <h1 className='h-fit  font-[500] text-[20px] leading-[22px] lg:text-[70px] lg:leading-[32px] tracking-[-0.5px] text-center'> 
                     {words.map((word, index) => (
                            <Words key={index} word={word} index={index} scrollYProgress={scrollYProgress} totalWords={words.length} />
                      ))}
                  </h1>
            </div>
            
            <div className='w-[90%] h-[100vh] flex flex-col md:flex-row items-center justify-center gap-4'>
                  <div className='w-screen md:w-[30%] h-full flex flex-col items-center justify-center border-2'>
                        <div className='w-full h-3/4 relative flex items-center justify-center text-white '>
                            <div className='absolute top-0 flex items-start justify-center w-full h-full'>
                                <h1 className=' text-center font-[500] text-[40px] '>Remote  Support</h1>
                            </div>
                            <img src='./auto1.jpg' className='w-full h-full object-cover' ></img>
                        </div>
                        <div className='w-full h-1/4 flex flex-col items-center justify-center gap-5 '>
                            <h2>Real-Time Remote Support</h2>
                            <hr className='w-full  border-3 border-black' />
                            <p className='text-black font-[400] text-[12px] leading-[16px] lg:text-[16px] lg:leading-[19px] text-center'>
                               Monitoring and Fixing Problems from Afar
                            </p>
                        </div>
                  </div>
                  <div className='w-screen md:w-[30%] h-full flex flex-col items-center justify-center border-2'>
                        <div className='w-full h-3/4 relative flex items-center justify-center text-black hover:text-white transition-all '>
                            <div className='absolute top-0 flex items-start justify-center w-full h-full'>
                                <h1 className=' text-center font-[500] text-[40px] '>Remote <br /> Support</h1>
                            </div>
                            <img src='./auto1.jpg' className='w-full h-full object-cover' ></img>
                        </div>
                        <div className='w-full h-1/4 flex flex-col items-center justify-center gap-5 '>
                            <h2>Real-Time Remote Support</h2>
                            <hr className='w-full  border-3 border-black' />
                            <p className='text-black font-[400] text-[12px] leading-[16px] lg:text-[16px] lg:leading-[19px] text-center'>
                               Monitoring and Fixing Problems from Afar
                            </p>
                        </div>
                  </div>
                  <div className='w-screen md:w-[30%] h-full flex flex-col items-center justify-center border-2'>
                        <div className='w-full h-3/4 relative flex items-center justify-center text-black hover:text-white transition-all '>
                            <div className='absolute top-0 flex items-start justify-center w-full h-full'>
                                <h1 className=' text-center font-[500] text-[40px] '>Remote <br /> Support</h1>
                            </div>
                            <img src='./auto1.jpg' className='w-full h-full object-cover' ></img>
                        </div>
                        <div className='w-full h-1/4 flex flex-col items-center justify-center gap-5 '>
                             <h2>Real-Time Remote Support</h2>
                            <hr className='w-full  border-3 border-black' />
                            <p className='text-black font-[400] text-[12px] leading-[16px] lg:text-[16px] lg:leading-[19px] text-center'>
                               Monitoring and Fixing Problems from Afar
                            </p>
                        </div>
                  </div>
            </div>
     
    </section>
  )
}

export default Others