"use client"
import { TextHoverEffect } from '@/app/components/ui/text-hover-effect';
import React from 'react';

function Hero() {
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center bg-black'>
      <div className='h-[40rem]'>
       <TextHoverEffect text='TAGDYNAMIX' />
      </div>
    </div>
  );
}

export default Hero;