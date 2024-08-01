"use client"
import React, { useState, useEffect } from 'react';
import Hero from './sections/hero';
import Service from './sections/Service';
import Preloader from './sections/Preloader';
import gsap from 'gsap';
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all';
import Navbar from '../components/Navbar';
import Diagram from './sections/Diagram';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function Landing() {
  const [preloader, setPreloader] = useState(true);

  useEffect(() => {
    const timeline = gsap.timeline({
      onComplete: () => setPreloader(false), // Hide preloader after animation
    });

    timeline.fromTo(
      '.preloader',
      { y: '0' },
      { y: '-100%', duration: 2, ease: 'power2.out',delay:1 }
    )

  
  }, []);

  return (
    <section className='main'>
      {preloader && (
        <div className={`preloader  absolute top-0 z-20 ${!preloader && 'hidden '}`}>
          <Preloader />
        </div>
      )}
      <div className={`hero-s absolute top-0 w-screen h-screen duration-1000  `}>
        <Navbar preloader={preloader} />
        <Hero preloader={preloader} />
        <Service />
        <Diagram />
      </div>
    </section>
  );
}

export default Landing;
