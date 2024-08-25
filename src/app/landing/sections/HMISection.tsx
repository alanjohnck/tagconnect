"use client"
import React, { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Words from '@/app/components/Words';

gsap.registerPlugin(ScrollTrigger);

const InfoBlock = ({ title, content }: { title: string, content: string }) => (
    <div className='w-[20%] h-full font-thin flex flex-col items-start justify-center text-balance gap-2'>
        <span className='font-[500]'>{title}</span>
        <p className='text-[#989B97] font-[400] text-[14px] leading-[16px] lg:text-[16px] lg:leading-[19px] text-body'>
            {content}
        </p>
    </div>
);

function HMISection() {
    const container = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    const wordsArray = "Custom HMI and SCADA development on any platform".split(" ");

    const infoBlocks = [
        { title: 'T01', content: 'Intuitive Interfaces, Minimal code and maximum performance' },
        { title: 'T02', content: 'Simplified User Experiences, Optimized Architectures' },
        { title: 'T03', content: 'Crafting Quality Frameworks for Seamless Automation' }
    ];

    useEffect(() => {
        const words = textRef.current?.querySelectorAll(".word");

        if (words) {
            gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 100px",
                    end: "top 200px",
                    scrub:.5,
                    markers: true
                }
            })
            .to(words,{
                onStart:()=>{
                    gsap.to(words, {
                        color: "#ed5729", // Final color to black
                        stagger: 0.1, // Slightly faster stagger for final transition
                        ease: "power1.in",
                    });
                }
                ,
                onComplete:()=>{
                    gsap.to(words, {
                        color: "#000", // Transition to black
                        ease: "power1.in",
                        stagger:.1,
                        
                         // Time for the transition to black
                    });
                }
                // Time for the transition to orange
            })
            // .to(words, {
            //     color: "#ed5729", // Transition to orange
            //     stagger: {
            //         each: 0.2, // Control the stagger for smooth animation
            //     },
            //     ease: "power1.inOut",
            //     // Time for the transition to orange
            // })
          
        }
    }, []);


    return (
        <section className='w-screen h-screen flex flex-col items-center justify-center'>
            <div ref={container} className='w-[96%] h-1/2 bg-[#EEF3ED] flex flex-col items-center justify-end gap-5 rounded-sm'>
                <div className='h-1/2 flex items-center justify-center text-[#E2ECE2]'>
                    <h1 ref={textRef} className='font-onsite w-3/4 text-[35px] leading-[38px] lg:text-[65px] lg:leading-[62px] font-[500] tracking-[-2px] text-center'>
                        {wordsArray.map((word, index) => (
                            <span key={index} className="word inline-block mx-1 font-9xl font-900 pt-4 pb-4">
                                {word}
                            </span>
                        ))}
                    </h1>
                </div>
            </div>
            <div className='w-[96%] h-1/2 bg-[#EEF3ED] flex justify-center items-end p-4 gap-2 flex-wrap'>
                <div className='w-[30%] h-full flex items-center justify-center'>
                    <h2 className='font-[400] text-[20px] leading-[22px] lg:text-[30px] lg:leading-[32px] tracking-[-0.5px]'>
                        Team of HMI/ SCADA & data management specialists
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
