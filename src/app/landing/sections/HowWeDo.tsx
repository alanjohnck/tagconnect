"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { name: 'Requirement', review: ''},
  { name: 'Architecture', review: '' },
  { name: 'Design', review: 'Design Review' },
  { name: 'Code', review: 'Code Review' },
  { name: 'Module Test', review: '' },
  { name: 'Integration Test', review: '' },
  { name: 'Factory Acceptance Test', review: '' },
  { name: 'Site Acceptance Test', review: '' },
  { name: 'Training & Support', review: '' },
];

const HowWeDo: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      const stepElements = containerRef.current.querySelectorAll('.step');
      const lineElement = containerRef.current.querySelector('.line');
      const dotElements = containerRef.current.querySelectorAll('.dot');

      timelineRef.current = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub:1,
          once:true,
        },
      });

      // Animate the line
      timelineRef.current.to(lineElement, { 
        scaleX: 1, 
        duration: 1, 
        ease: "power1" 
      });

      // Animate each step
      stepElements.forEach((step, index) => {
        const dot = dotElements[index];
        const text = step.querySelector('p');
        const review = step.querySelector('p:last-child');

        timelineRef.current!
          .to(dot, { 
            scale: 1, 
            backgroundColor: '#FF6E3D', 
            duration: 0.3 
          }, `-=${index ? 0.1 : 0}`)
          .to(text, { 
            opacity: 1, 
            y: 0, 
            duration: 0.3 
          }, '<')
          .to(review, { 
            opacity: 1, 
            y: 0, 
            duration: 0.3 
          }, '<');

        if (index <= stepElements.length - 1) {
          timelineRef.current!.to(dot, { 
            scale: 1, 
            backgroundColor: '#FF6E3D', 
            duration: 0.3 
          }, '+=0.2');
        }
      });
    }

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, []);

  return (
    <div className='w-screen h-[120vh] flex items-center  '>
    <div ref={containerRef} className="w-screen flex flex-col justify-center tems-center  sticky  mx-auto p-8  ">
      <div className="mb-16 flex flex-col items-center justify-center">
        <h1 className="font-onsite w-3/4 m-[5vh] text-[35px] leading-[38px] lg:text-[65px] lg:leading-[62px] font-[500] tracking-[-2px] text-center">How we do</h1>
        <p className='text-[#989B97] font-[400] text-[14px] leading-[16px] lg:text-[16px] lg:leading-[19px] text-body'>We follow Software development life cycle</p>
      </div>
      <div className="relative">
        <div className="line absolute top-4 left-0 w-full h-1 bg-gray-300 transform origin-left scale-x-0"></div>
        <div className="flex justify-between ">
          {steps.map((step, index) => (
            <div key={index} className="step flex flex-col items-center">
              <div className="dot w-8 h-8 rounded-full bg-gray-400 mb-4 transform scale-0"></div>
              <p className="text-lg font-medium text-center opacity-0 transform translate-y-4">{step.name}</p>
              {step.review && (
                <p className="text-sm text-gray-500 mt-2 opacity-0 transform translate-y-4">{step.review}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default HowWeDo;