"use client"
import React, { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
                color: "#0B2F9F", // Brighter orange
                stagger: 0.2,
                duration: 1,
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

    const wordsArray = "Custom HMI and SCADA development on any platform".split(" ");

    const infoBlocks = [
        { title: 'T01', content: 'Intuitive Interfaces, Minimal code and maximum performance' },
        { title: 'T02', content: 'Simplified User Experiences, Optimized Architectures' },
        { title: 'T03', content: 'Crafting Quality Frameworks for Seamless Automation' }
    ];

    return (
        <section className='min-w-screen h-screen flex flex-col items-center justify-center'>
          <div className='h-full pt-6 pl-6 pr-6'>
            <div ref={container} className='w-full h-1/2 flex flex-col items-center justify-end  bg-[#EEF3ED]'>
                <div className='h-1/2 flex items-center justify-center'>
                    <h1 ref={textRef} className='font-onsite w-3/4 text-[35px] leading-[38px] lg:text-[65px] lg:leading-[62px] font-[500] tracking-[-2px] text-center'>
                        {wordsArray.map((word, index) => (
                            <span key={index} className="word text-[#E2ECE2] inline-block mx-1 font-9xl font-900 pt-4 pb-4">
                                {word}
                            </span>
                        ))}
                    </h1>
                </div>
            </div>

            <div className=' h-1/2 flex justify-center items-end gap-2 flex-wrap bg-[#EEF3ED]'>
                <div className='w-[30%] h-full flex items-center justify-center'>
                    <h2 className='font-[400] text-[20px] leading-[22px] lg:text-[30px] lg:leading-[32px] tracking-[-0.5px]'>
                        Team of HMI/ SCADA & data management specialists
                    </h2>
                </div>
                {infoBlocks.map((block, index) => (
                    <InfoBlock key={index} title={block.title} content={block.content} />
                ))}
            </div>
           </div>
        </section>
    );
}

export default HMISection;