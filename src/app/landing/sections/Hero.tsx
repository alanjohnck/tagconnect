"use client"
import React from 'react';

function Hero() {
  return (
    <div className='min-w-screen h-screen flex flex-col items-center justify-center bg-gray-100'>
      <div className='loader mb-4'></div>
      <h1 className='text-4xl font-bold mb-4'>Website Under Construction</h1>
      {/* <p className='text-lg text-gray-600'>Our expert engineers are crafting seamless HMI experiences.</p> */}
      <style jsx>{`
        .loader {
          border: 16px solid #f3f3f3;
          border-top: 16px solid #3498db;
          border-radius: 50%;
          width: 120px;
          height: 120px;
          animation: spin 2s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default Hero;