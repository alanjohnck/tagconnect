import React from 'react'
import Hero from './sections/Hero'
import SmoothScroll from '../components/SmoothScroll'
import HMISection from './sections/HMISection'
import DynamicExpertSection from './sections/DynamicExpertSection'
import FeaturesSection from './sections/FeaturesSection' // Import the FeaturesSection component

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