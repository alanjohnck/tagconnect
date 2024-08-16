import React from 'react'
import Hero from './sections/Hero'
import HMISection from './sections/HMISection'
import DynamicExpertSection from './sections/DynamicExpertSection'

function Landing() {
  return (
    <>
      <Hero />
      <HMISection />
      <DynamicExpertSection />
      {/* <FeaturesSection /> */}
    </>
  )
}

export default Landing