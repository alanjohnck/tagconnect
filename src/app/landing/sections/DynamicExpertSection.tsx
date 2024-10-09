
"use client"
import React from 'react';
import { useRef } from 'react'
import Words from '@/app/components/Words';
import { useScroll } from "framer-motion"
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const expertData = [
  {
    id: 'T01',
    title: 'Debugging',
    description: 'We understand the problem, review system logs, identify issues, and fix them',
    imgSrc:"./debug.gif"
  },
  {
    id: 'T02',
    title: 'Migration',
    description: 'We assess system, plan and design, migrate data and graphics, then test and validate',
  },
  {
    id: 'T03',
    title: 'Optimization',
    description: 'We analyze performance, plan and design, optimize code and enhance interfaces',
    imgSrc:"./gear.gif"
  },
];

function DynamicExpertSection() {
  const container = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
      const words = textRef.current?.querySelectorAll(".word");

      if (words) {
          gsap.timeline({
              scrollTrigger: {
                  trigger: container.current,
                  start: "top top",
                  end: "+=20",
                  scrub: 0.5,
                  onLeaveBack: () => {
                      gsap.set(words, {
                          color: "#E2ECE2", // Reset to initial color immediately
                      });
                  },
              },
          })
          .to(words, {
              backgroundImage: "linear-gradient(60deg, #fc6045, #fcae45, #9e64f5, #50d0e6)",
              WebkitBackgroundClip: "text",
              color: "transparent", // Brighter color
              stagger: 0.15,
              duration: 2,
              ease: "power2.in",
          })
          .to(words, {
              color: "#000",
              stagger: 0.1,
              duration: 0.5,
              ease: "power2.in",
          })
          ;
      }
  }, []);


  const wordsArray = "Your\tDynamic\tExpert".split(" ");
  return (
  <div className='w-screen h-[150vh] flex flex-col items-center justify-center '>
    <div className='h-full w-full  pl-6 pr-6 '>
      {/* <div ref={container} className='w-full h-[50vh] bg-gray-400 flex items-center justify-center '>
               <hh3>Image Section</hh3>
      </div> */}
      <div  className='w-full h-[50vh] flex justify-center items-center  bg-white'>
           <h1 ref={textRef} className='font-onsite w-3/4 text-center'>
              {wordsArray.map((word, index) => (
                  <span key={index} className="word text-black inline-block mx-1 font-9xl font-900 pt-4 pb-4">
                       {word}
                  </span>
              ))}
            </h1>
      </div>
      <div className='w-full h-[100vh] flex flex-col justify-evenly items-center border-b-2  bg-white'>
        {expertData.map((item) => (
          <div key={item.id} className='w-[90%] h-1/2 flex justify-center items-center  border-t-[.5px] border-t-black'>

            <div className='w-1/2 h-full gap-10 flex items-center justify-start  text-center '>
                <div className='w-1/2 h-1/2 flex justify-between items-center'>
                   <p className='font-mdio  text-slate-500'>{item.id}</p>

                   <div className='w-3/4 h-full flex justify-start items-center'>
                      <h2 className='font-[400] '>{item.title}</h2>
                   </div>                   
                </div>  
            </div>
          
            <div className='w-[30%] h-full flex items-center justify-start'>
              <p className='text-[#989B97] '>{item.description}</p>
            </div>
          </div>
          // </div> 
        ))}
      </div>

    </div>
    </div> 
  );
}

export default DynamicExpertSection;
