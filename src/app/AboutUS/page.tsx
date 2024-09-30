import React from 'react'
import AboutHero from './sections/AboutHero'
import Vision from './sections/Vision'
import Goals from './sections/Goals'


function page() {
  return (
    <>
      
      <AboutHero />
      <hr className='border-1' />
      <Vision />
      <hr className='border-1' />
      <Goals />
      <hr className='border-1' />
    </>
  )
}

export default page