import React from 'react'

function AboutHero() {
  return (
    <div className='w-screen h-screen flex flex-col '>
      <div className='w-full h-1/2 flex flex-col'>
            <div className='w-full h-3/4 flex items-center p-8'>
                 <h1 className='w-1/2 font-bold'>
                     Where You Meet 
                     Passionate Experts Who 
                     Collaborate to Engineer
                  </h1>
            </div>
            <div className='w-full h-1/4 flex justify-evenly'>
                  {
                    Array.from({ length: 40 }).map((_, index) => (
                      <div key={index} className='border-2 h-1/4 bg-black '>
                      </div>
                    ))
                  }
            </div>
      </div>
      <div className='w-full h-1/2 flex'>
            <div className='w-1/2 h-full'>

            </div>
            <div className='w-1/2 h-full flex  p-8 '>
                 <p className='w-1/2 font-medium leading-normal'>
                    We are dedicated to consistently advancing the development, optimization and integration of HMI and SCADA systems to deliver the best available features to benefit our clients.
                 </p>
            </div>
      </div>
    </div>
  )
}

export default AboutHero