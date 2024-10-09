import React from 'react'
// import Hero from './sections/Hero'
import HMISection from './sections/HMISection'
import DynamicExpertSection from './sections/DynamicExpertSection'
import UNSSection from './sections/UNSSection'
import SupportSection from './sections/SupportSection'
import Management from './sections/Management'
import Hero from './sections/Hero'
import MESSection from './sections/MESSection'
import DataAnalyticsSection from './sections/DataAnalyticsSection'


function Landing() {
  return (
    <div>
      {/* <Hero /> */}
      <Hero />
      <MESSection/>
      <DataAnalyticsSection />
      <HMISection />
      <DynamicExpertSection />
      <Management />
      <br></br>
      <hr className="w-screen h-2" />
      <br></br>
      <SupportSection />
      <br></br>
      <hr className="w-screen h-2" />
      <br></br>
      <UNSSection />
    </div>
  )
}

export default Landing