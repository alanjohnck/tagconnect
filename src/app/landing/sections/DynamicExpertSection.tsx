
"use client"
import React from 'react';
import { useRef } from 'react'
import Words from '@/app/components/Words';
import { useScroll } from "framer-motion"

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
  const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start .5", "end .6 "]
  });
  const words = "Your Dynamic Expert".split(" ");
  return (
  <div className='w-screen h-auto flex items-center justify-center'>
    <div ref={container}  className='w-[96%] h-[150vh] flex flex-col gap-5 items-center justify-start bg-white'>
      <div className='w-screen h-[50vh] flex justify-center items-center'>
        <h1 className='font-[500] text-[20px] leading-[22px] lg:text-[70px] lg:leading-[32px] tracking-[-0.5px]'>
            {words.map((word, index) => (
                  <Words key={index} word={word} index={index} scrollYProgress={scrollYProgress} totalWords={words.length} />
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
            <div className='w-1/4 h-full flex items-center justify-center'>
               <img src={item.imgSrc} className='object-cover text-center w-fit h-fit' ></img>
            </div>
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
