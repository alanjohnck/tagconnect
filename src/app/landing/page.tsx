import React from 'react'
// import Hero from './sections/Hero'
import HMISection from './sections/HMISection'
import DynamicExpertSection from './sections/DynamicExpertSection'
import FeaturesSection from './sections/FeaturesSection'
import Others from './sections/Others'

function Landing() {
  return (
    <>
      {/* <Hero /> */}
      <div className='w-screen h-screen flex flex-col items-center justify-center font-bold text-5xl text-center'>
        In Progress
        Expert engineers crafting seamless HMI experiences
      </div>
      <HMISection />
      <DynamicExpertSection />
      <Others />
    </>
  )
}

export default Landing