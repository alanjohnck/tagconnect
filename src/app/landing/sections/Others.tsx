"use client"
import React, { useEffect, useRef, useState } from 'react';

const sections = [
  { title: 'Historical data', emoji: '📊' },
  { title: 'Custom reporting', emoji: '📝' },
  { title: 'Alarm & Events', emoji: '🚨' },
  { title: 'Electronic signature', emoji: '✍️' },
  { title: 'Data analytics', emoji: '📈' },
];
const Frame = () =>{
  <div className='h-screen w-[80%] bg-slate-50 '>

  </div>
}
const DataSection: React.FC = () => {

  return (
    <div className='h-screen w-screen'>
      <div>
           <Frame />
      </div>
    </div>
  );
};

export default DataSection;