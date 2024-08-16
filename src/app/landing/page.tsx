import React from 'react'
// import Hero from './sections/Hero'
import HMISection from './sections/HMISection'
import DynamicExpertSection from './sections/DynamicExpertSection'

function Landing() {
  return (
    <>
      {/* <Hero /> */}
      <div className='w-screen h-screen flex items-center justify-center font-bold text-5xl text-center'>Expert engineers crafting seamless HMI experiences
      </div>
      <HMISection />
      <DynamicExpertSection />
      {/* <FeaturesSection /> */}
    </>
  )
}

export default Landing