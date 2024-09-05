"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const UNSSection = () => {
  const sectionRef = useRef(null);
  const circleRef = useRef(null);
  const nodesRef = useRef<HTMLDivElement[]>([]);
  const linesRef = useRef<SVGLineElement[]>([]);
  const nodes = [
    { name: 'Machine', icon: '🚜' },
    { name: 'Maintenance', icon: '🔧' },
    { name: 'Product', icon: '📦' },
    { name: 'ERP', icon: '💼' },
    { name: 'Process', icon: '⚙️' },
    { name: 'MES', icon: '🏭' },
    { name: 'P&ID', icon: '📊' },
    { name: 'CRM', icon: '🤝' },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const circle = circleRef.current;
    const nodeElements = nodesRef.current;
    const lineElements = linesRef.current;

    gsap.set(nodeElements, { autoAlpha: 0, scale: 0 });
    gsap.set(lineElements, { autoAlpha: 0, drawSVG: "0%" });

    const radius = 180; // Increased radius for more space

    gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      }
    })
    .to(circle, { scale: 1, duration: 1, ease: 'power2.out' })
    .to(nodeElements, { 
      autoAlpha: 1, 
      scale: 1, 
      stagger: 0.1,
      duration: 0.5,
      ease: 'back.out(1.7)'
    })
    .to(lineElements, {
      autoAlpha: 1,
      drawSVG: "100%",
      stagger: 0.1,
      duration: 0.5,
      ease: 'power1.inOut'
    });

    nodeElements.forEach((node, index) => {
      const angle = index * (2 * Math.PI / nodes.length);
      gsap.to(node, {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        scrollTrigger: {
          trigger: section,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        }
      });
    });
  }, []);

  return (
    <div ref={sectionRef} className="w-screen h-[500vh] flex flex-col justify-start items-center">
      <div className='sticky top-0 h-[100vh] flex flex-col justify-center items-center '>
        <h1 className="text-4xl font-bold mb-12">Integrating Common Industrial Components into UNS</h1>
        <div className="relative w-[500px] h-[500px]">
          <svg className="absolute inset-0 w-full h-full ">
            {nodes.map((_, index) => (
              <line
                key={index}
                ref={el => linesRef.current[index] = el}
                x1="250" y1="250"
                x2={250 + Math.cos(index * (2 * Math.PI / nodes.length)) * 180}
                y2={250 + Math.sin(index * (2 * Math.PI / nodes.length)) * 180}
                stroke="#FF6E3D"
                strokeWidth="2"
                strokeDasharray="5,5"
                
                
              />
            ))}
          </svg>
          <div ref={circleRef} className="absolute inset-0 m-auto w-32 h-32 bg-white drop-shadow-md rounded-full flex items-center justify-center text-black text-2xl font-bold">
            UNS
          </div>
          {nodes.map((node, index) => (
            <div
              key={node.name}
              ref={el => nodesRef.current[index] = el}
              className="absolute inset-0 m-auto w-20 h-20 bg-[#FF6E3D] rounded-full shadow-lg flex flex-col items-center justify-center"
            >
              <span className="text-2xl">{node.icon}</span>
              <span className="text-xs mt-1 text-white font-bold">{node.name}</span>
            </div>
          ))}
        </div>
        <h1>Unify your data with a modern distributed architecture, eliminating silos and providing a single, centralized access point for all enterprise systems</h1>
      </div>
    </div>
  );
};

export default UNSSection;