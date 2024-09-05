import React from 'react'
// import Hero from './sections/Hero'
import HMISection from './sections/HMISection'
import DynamicExpertSection from './sections/DynamicExpertSection'
import Others from './sections/Others'
import UNSSection from './sections/UNSSection'

function Landing() {
  return (
    <>
      {/* <Hero /> */}
      <div className='w-screen h-screen flex flex-col items-center justify-center font-bold text-5xl text-center bg-black'>
        In Progress
        Expert engineers crafting seamless HMI experiences
      </div>
      <HMISection />
      <DynamicExpertSection />
      <UNSSection />
      <Others />
    </>
  )
}

export default Landing