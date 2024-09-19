import React from 'react'
// import Hero from './sections/Hero'
import HMISection from './sections/HMISection'
import DynamicExpertSection from './sections/DynamicExpertSection'
import UNSSection from './sections/UNSSection'
import HowWeDo from './sections/HowWeDo'

function Landing() {
  return (
    <>
      {/* <Hero /> */}
      <div className='w-screen h-screen flex flex-col items-center justify-center font-bold text-5xl text-center bg-black'>
        In Progress
        Expert engineers crafting seamless HMI experiences
      </div>
      <HMISection />
      <hr className="w-screen h-2" />

      <DynamicExpertSection />
      <hr className="w-screen h-2" />

      <UNSSection />
      <hr className="w-screen h-2" />
      <HowWeDo />

      {/* <Others /> */}
    </>
  )
}

export default Landing