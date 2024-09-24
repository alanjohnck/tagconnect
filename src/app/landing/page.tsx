import React from 'react'
// import Hero from './sections/Hero'
import HMISection from './sections/HMISection'
import DynamicExpertSection from './sections/DynamicExpertSection'
import UNSSection from './sections/UNSSection'
import HowWeDo from './sections/HowWeDo'
import SupportSection from './sections/SupportSection'
import Management from './sections/Management'
import Hero from './sections/Hero'


function Landing() {
  return (
    <div>
      {/* <Hero /> */}
      <Hero />
      <HMISection />

      <DynamicExpertSection />
      {/* <hr className="w-screen h-2" /> */}
      <Management />
      {/* <hr className="w-screen h-2" /> */}

      <UNSSection />
      
      <HowWeDo />
      <br></br>
      <hr className="w-screen h-2" />
      <br></br>


      <SupportSection />
    </div>
  )
}

export default Landing