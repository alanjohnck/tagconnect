import React from 'react'
import Hero from './sections/Hero'
import SmoothScroll from '../components/SmoothScroll'
import HMISection from './sections/HMISection'
import DynamicExpertSection from './sections/DynamicExpertSection'

function Landing() {
  return (
    <>
      <Hero />
      <HMISection />
      <DynamicExpertSection />
    </>
  )
}

export default Landing