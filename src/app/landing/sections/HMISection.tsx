"use client";
import React, { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const InfoBlock = ({ title, content }: { title: string, content: string }) => (
    <div className='w-[20%] h-1/2 font-thin flex flex-col items-start justify-start text-balance gap-2'>
        <h3 className='font-[500]'>{title}</h3>
        <p className='text-[#989B97] w-3/4 text-body'>{content}</p>
    </div>
);

function HMISection() {
    const container = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const words = textRef.current?.querySelectorAll(".word");

        if (words) {
            gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: "top top",
                    end: "+=30",
                    scrub: 0.4,
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
                color: "transparent",
                stagger: 0.2,
                duration: 2,
                ease: "power2.in",
            })
            .to(words, {
                color: "#000",
                stagger: 0.2,
                duration: 2,
                ease: "power2.in",
            })
            ;
        }
    }, []);

    const wordsArray = "Custom\tHMI\tand\tSCADA\tdevelopment\ton\tany\tplatform".split(" ");

    const infoBlocks = [
        { title: 'T01', content: 'Intuitive Interfaces, Minimal code and maximum performance' },
        { title: 'T02', content: 'Simplified User Experiences, Optimized Architectures' },
        { title: 'T03', content: 'Crafting Quality Frameworks for Seamless Automation' }
    ];

    return (
        <section className='w-screen h-[150vh] flex flex-col items-stretch justify-center pt-6 pl-6 pr-6'>
          <div ref={container} className='w-full h-[75vh] flex items-center justify-center '>
                <img src='./web.gif' className='h-full w-1/2 object-fit'></img>
          </div>
          <div  className='w-auto h-[100vh]'>
            <div className='w-full h-1/2 flex flex-col items-center justify-end bg-white'>
                <div  ref={textRef}  className='h-1/2 flex items-center justify-center'>
                <h1 className="font-onsite w-screen md:w-[80%] text-center font-medium tracking-tight text-[#E2ECE2]">
                    {wordsArray.map((word, index) => (
                        <span key={index} className="word text-[#E2ECE2] inline-block px-2 font-9xl font-900 pt-4 pb-4">
                            {word}
                        </span>
                    ))}
                </h1>
                </div>
            </div>

            <div className='h-1/2 w-full flex justify-center items-center bg-white border-b-2'>
                <div className='h-1/2 w-full flex items-center justify-center gap-3'>
                    <div className='w-[50%] h-1/2 flex items-start justify-end'>
                        <h2 className='w-[90%] font-[400] '>
                            Team of HMI/ SCADA & data management specialists
                        </h2>
                    </div>
                    {infoBlocks.map((block, index) => (
                        <InfoBlock key={index} title={block.title} content={block.content} />
                    ))}
                </div>
            </div>
          </div>

        </section>
    );
}

export default HMISection;
