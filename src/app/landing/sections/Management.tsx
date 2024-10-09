"use client"

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ChartLine } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const textSections = [
  "Historical data",
  "Custom reporting",
  "Data analytics",
  "Alarm & Events"
];

const images = [
  { src: "/auto1.jpg", alt: "robotic arm 1" },
  { src: "/auto2.jpg", alt: "robotic arm 2" },
  { src: "/auto1.jpg", alt: "robotic arm 3" },
  { src: "/auto2.jpg", alt: "robotic arm 4" },
];

export default function Management() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const sections = gsap.utils.toArray('.image-section') as HTMLElement[]

    sections.forEach((section, i) => {
      gsap.to(section, {
        zIndex: i + 1,
        scrollTrigger: {
          trigger: `.text-section:nth-child(${i + 1})`,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        },
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div className="w-screen flex flex-col items-center justify-center px-6">
      <div className="bg-[#EEF3ED] w-full">
        <div className="w-full flex justify-center">
          <h1 className="font-onsite w-1/2 m-[5vh] text-center">Manage and view every data captured</h1>
        </div>

        <div className="relative w-full flex">
          {/* Left Scrollable Text Section */}
          <div className="w-[96%] lg:w-1/2 relative z-10">
            {textSections.map((text, index) => (
              <div key={index} className="text-section min-h-screen flex flex-col justify-center p-10">
                <h2 className="font-onsite w-3/4 m-[5vh] text-[35px] leading-[38px] lg:text-[65px] lg:leading-[62px] font-[500] tracking-[-2px] text-center">
                  {text}
                </h2>
              </div>
            ))}
          </div>

          {/* Right Sticky Image Section */}
          <div className="w-[96%] lg:w-1/2 h-screen sticky top-0">
            <div className="w-full h-screen relative">
              {images.map((image, index) => (
                <div key={index} className="image-section absolute inset-0 scale-95">
                  {index === 0 ? <ChartLine /> : <img src={image.src} alt={image.alt} className="object-cover w-full h-full" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
