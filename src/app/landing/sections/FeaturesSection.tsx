"use client"
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';

interface FeatureItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imgSrc: string;
}

const data: FeatureItem[] = [
  // ... (your data array remains unchanged)
  {
    id: "A01",
    title: "Fully automated production",
    subtitle: "Qualifieqd Workflow",
    description: "Built-in calibration technology, robotics, AI, automated post-processing and sort+stack, and a host of other features make lights-out operation possible.",
    imgSrc: "/gear.gif"
  },
 
];

const FeaturesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const sectionRect = section.getBoundingClientRect();
      const scrollProgress = -sectionRect.top / (sectionRect.height - window.innerHeight);
      const newIndex = Math.min(Math.floor(scrollProgress * data.length), data.length - 1);
      
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
        controls.start({ y: `-${newIndex * 100}%` });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeIndex, controls]);

  return (
    <div ref={sectionRef} className="relative">
      <div className="grid grid-cols-2 gap-[140px]">
        {/* Left Column - Text Content */}
        <div className="pl-[7vw]">
          <ul className="flex flex-col gap-[70px] lg:gap-[100vh]">
            {data.map((item, index) => (
              <li key={index} className="relative">
                <div className="flex flex-col justify-center gap-[100px]">
                  <div className="relative">
                    <h1 className="font-onsite text-[35px] leading-[38px] lg:text-[65px] lg:leading-[62px] font-[500] tracking-[-3px]">
                      {item.title.split(' ').map((line, i) => (
                        <span key={i}>{line}<br /></span>
                      ))}
                    </h1>
                    <div className="absolute bottom-[-50px] h-[1px] w-full bg-body opacity-50"></div>
                  </div>
                  <div className="flex">
                    <p data-speed=".5" className="font-mdio font-[500] text-[10px] leading-[10px] text-body w-[110px] shrink-0 pt-[5px]">
                      {item.id}
                    </p>
                    <div className="flex flex-col gap-[20px] w-[250px] shrink-0">
                      <p data-speed=".8" className="text-[14px] leading-[16px] lg:text-[16px] lg:leading-[19px] text-black font-[500]">
                        {item.subtitle}
                      </p>
                      <p data-speed=".10"className="font-[400] text-[14px] leading-[16px] lg:text-[16px] lg:leading-[19px] text-black">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column - Stacked Images */}
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.div 
            className="relative w-full h-full"
            initial={{ y: 0 }}
            animate={controls}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {data.map((item, index) => (
              <motion.div 
                key={index}
                className="absolute top-0 left-0 w-full h-full"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30, delay: index * 0.2 }}
              >
                <img
                  src="/gear.gif"
                  className="w-fit h-fit"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;