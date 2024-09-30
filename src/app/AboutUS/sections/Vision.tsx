import React from 'react'

function Vision() {
  return (
    <div className='w-screen h-screen flex flex-col '>
      <div className='w-full h-1/4 flex flex-col'>
            <div className='w-full h-3/4 flex items-center p-8'>
                 <h1 className='w-1/2 font-bold'>
                     Our Vision
                  </h1>
            </div>
      </div>
      <div className='w-full h-1/2 flex'>
            <div className='w-1/2 h-full'>

            </div>
            <div className='w-1/2 h-full flex flex-col justify-evenly'>
                 <h2 className='font-bold'>Smart Visual Zero Lag</h2>
                 <p className='w-3/4 font-medium leading-normal'>
                 Our vision is to drive the future of industrial automation by developing innovative and optimized HMI and SCADA systems. We focus on creating solutions that can seamlessly integrate with the latest technologies with zero lag. This will enable industries to operate more efficiently and gain deeper insights into their processes. we promise your delight.
                 </p>
            </div>
      </div>
    </div>
  )
}

export default Vision