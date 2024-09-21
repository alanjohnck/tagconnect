"use client"
import React from 'react'
// import Hero from './sections/Hero'
// import HMISection from './sections/HMISection'
// import DynamicExpertSection from './sections/DynamicExpertSection'
// import UNSSection from './sections/UNSSection'
// import HowWeDo from './sections/HowWeDo'
// import SupportSection from './sections/SupportSection'
// import Others from './sections/Others'
// import DataSection from './sections/Others'

function Landing() {
  return (
    <>
      {/* <Hero /> */}
      {/* <div className='w-screen h-screen flex flex-col items-center justify-center font-bold text-5xl text-center bg-black'>
        In Progress
        Expert engineers crafting seamless HMI experiences
      </div>
      <HMISection />

      <DynamicExpertSection />
      <hr className="w-screen h-2" />

      <UNSSection />
      <hr className="w-screen h-2" />
      <HowWeDo />

      <Others />
      <SupportSection /> */}
     <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-100">
      <div className="loader mb-4"></div>
      <h1 className="text-4xl font-bold mb-4">Website Under Progress</h1>
      <p className="text-lg text-gray-600">Our expert engineers are crafting seamless HMI experiences.</p>
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
    </>
  )
}

export default Landing