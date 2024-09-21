
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
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top top",
                end: "+=20",
                scrub: 0.5,
                onLeaveBack: () => {
                    gsap.to(words, {
                        color: "#E2ECE2",
                        duration: 0.4
                    });
                }
            }
        });

        tl.to(words, {
            color: "#FF6E3D", // Brighter orange
            stagger: 0.08,
            duration: 0.3,
            ease: "power2.in",
        })
        .to(words, {
            color: "#000",
            stagger: 0.05,
            duration: 0.2,
            ease: "power2.in",
        });
    }

  }, []);


  const wordsArray = "Your Dynamic Expert".split(" ");
  return (
  <div className='w-screen h-auto flex items-center justify-center'>
    <div   className='w-[96%] h-[150vh] flex flex-col gap-5 items-center justify-start bg-[#EEF3ED]'>
      <div ref={container} className='w-screen h-[40vh] flex justify-center items-center'>
           <h1 ref={textRef} className='font-onsite w-3/4 text-[35px] leading-[38px] lg:text-[65px] lg:leading-[62px] font-[500] tracking-[-2px] text-center'>
              {wordsArray.map((word, index) => (
                  <span key={index} className="word text-[#E2ECE2] inline-block mx-1 font-9xl font-900 pt-4 pb-4">
                       {word}
                  </span>
              ))}
            </h1>
      </div>

      <div className='w-[96%] h-[100vh] flex flex-col justify-evenly items-center '>
        {expertData.map((item) => (
          // <div className='w-full h-full flex justify-center items-center'>
          <div key={item.id} className='w-full h-1/2 flex justify-center items-center  border-t-[.5px] border-t-black'>
            <div className='w-1/2 h-full gap-5 flex items-center justify-start text-center'>
              <span className='font-mdio font-[500] text-[10px] leading-[10px] text-body w-[40px] lg:w-1/3 mt-[3px] lg:mt-0 shrink-0 text-slate-500'>{item.id}</span>
              <h2 className='text-[14px] leading-[16px] lg:text-[16px] lg:leading-[19px] font-[500] text-black'>{item.title}</h2>
            </div>
            {/* <div className='w-1/4 h-full flex items-center justify-center p-2'>
               <img src={item.imgSrc} className='object-cover text-center w-fit h-fit' ></img>
            </div> */}
            <div className='w-1/4 h-full flex items-center justify-start'>
              <p className='text-[#989B97] font-[400] text-[14px] leading-[16px] lg:text-[16px] lg:leading-[19px] text-body'>{item.description}</p>
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
