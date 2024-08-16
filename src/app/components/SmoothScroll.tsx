"use client"
import React from 'react'
import { ReactLenis} from '@studio-freight/react-lenis'

function SmoothScroll({children}:{children:React.ReactNode}) {
  return (
    <ReactLenis root options={{
        lerp:.1,
        duration:3,
        

    }}>
      {children}
    </ReactLenis>
  )
}

export default SmoothScroll