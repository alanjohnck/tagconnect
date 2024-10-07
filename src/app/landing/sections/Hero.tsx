"use client"
import Navbar from '@/app/components/Navbar';
import { TextHoverEffect } from '@/app/components/ui/text-hover-effect';
import React from 'react';

function Hero() {
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center bg-white'>
      <div className='p-2 h-[40] w-full flex items-center justify-center sticky top-5'>
        <Navbar />
      </div>
      <div className='h-[40rem]'>
       <TextHoverEffect text='tagdynamix' />
      </div>
    </div>
  );
}

export default Hero;