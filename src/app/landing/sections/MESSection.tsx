"use client"
import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
    
const InfoBlock = ({ indexOfDesc, content,subhead}: { indexOfDesc: string, content: string,subhead:string }) => (
    <div className='w-[20%] h-1/2 font-thin flex flex-col items-start justify-start text-balance gap-2'>
        <h3 className='font-bold '>{subhead}</h3>
        <p className='font-[500]'>{indexOfDesc}</p>
        <p className='text-[#989B97] w-3/4 text-body'>{content}</p>
    </div>
);
gsap.registerPlugin(ScrollTrigger);

function MESSection() {
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

    const wordsArray = "HMI,\tSCADA\t&\tMES".split(" ");
    const infoBlocks = [
        { indexOfDesc: 'T01',subhead:'High performance', content: 'High performance screens, Minimal code and maximum performance' },
        { indexOfDesc: 'T02',subhead:'Easy to use',content: 'Simplified user interface, Optimized architectures for better performance' },
        { indexOfDesc: 'T03',subhead:'Clear', content: 'Crafting quality frameworks for seamless automation' }
    ];
  return (
    <section className='w-screen h-[150vh] flex flex-col items-stretch justify-center pt-6 pl-6 pr-6'>
          <div ref={container} className='w-full h-[50vh] flex items-center justify-center '>
                <img src='./web.gif' className='h-full w-1/2 object-fit'></img>
          </div>
          <div className='w-auto h-[100vh]'>
            <div className='w-full h-1/2 flex flex-col items-center justify-end bg-white'>
                <div className='w-full h-1/2 flex flex-col items-center justify-center'>
                <p>visualization</p>
                <h1 
                  ref={textRef}
                  className="font-onsite w-screen md:w-[80%] text-center font-medium tracking-tight text-black"
                >
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
                            10X Faster
                        </h2>
                    </div>
                    {infoBlocks.map((block, index) => (
                        <InfoBlock key={index} indexOfDesc={block.indexOfDesc} content={block.content} subhead={block.subhead} />
                    ))}
                </div>
            </div>
          </div>

        </section>
  )
}

export default MESSection