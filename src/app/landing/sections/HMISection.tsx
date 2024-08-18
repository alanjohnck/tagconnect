"use client"
import React, { useRef } from 'react'
import { motion, useScroll } from "framer-motion"
import Words from '@/app/components/Words';

//This contains the information/features about the solutions
const InfoBlock = ({ title, content }:{title:string,content:string}) => (
    <div className='w-[20%] h-full font-thin flex flex-col items-start justify-center text-balance gap-2'>
        <span className='font-[500]'>{title}</span>
        <p className='text-[#989B97] font-[400] text-[14px] leading-[16px] lg:text-[16px] lg:leading-[19px] text-body'>
            {content}
        </p>
    </div>
);


function HMISection() {
  //Y progress for the text to be animated ans the words animation on the components folder
    const container = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start .5", "end .7"]
    });

    const wordsArray = "Custom HMI and SCADA development on any platform".split(" ");

    const infoBlocks = [
        { title: 'T01', content: 'Intuitive Interfaces, Minimal code and maximum performance' },
        { title: 'T02', content: 'Simplified User Experiences, Optimized Architectures' },
        { title: 'T03', content: 'Crafting Quality Frameworks for Seamless Automation' }
    ];

    return (
        <section className='w-screen h-screen flex flex-col items-center justify-center'>
            <div ref={container} className='w-[96%] h-1/2 bg-[#EEF3ED] flex flex-col items-center justify-end gap-5 rounded-sm'>
                <div className='h-1/2 flex items-center justify-center'>
                    <h1 className='font-onsite w-3/4 text-[35px] leading-[38px] lg:text-[65px] lg:leading-[62px] font-[500] tracking-[-2px] text-center'>
                        {wordsArray.map((word, index) => (
                            <Words key={index} word={word} index={index} scrollYProgress={scrollYProgress} totalWords={wordsArray.length} />
                        ))}
                    </h1>
                </div>
            </div>
            <div className='w-[96%] h-1/2 bg-[#EEF3ED] flex justify-center items-end p-4 gap-2 flex-wrap'>
                <div className='w-[30%] h-full flex items-center justify-center'>
                    <h2 className='font-[400] text-[20px] leading-[22px] lg:text-[30px] lg:leading-[32px] tracking-[-0.5px]'>
                        Team of HMI/ SCADA & data management specialist 
                    </h2>
                </div>
                {infoBlocks.map((block, index) => (
                    <InfoBlock key={index} title={block.title} content={block.content} />
                ))}
            </div>
        </section>
    );
}

export default HMISection;
