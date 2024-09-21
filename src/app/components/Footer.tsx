import React from 'react'

function Footer() {
  return (
    <div className='w-screen h-screen bg-black flex items-center justify-center'>
        <div className='flex flex-col items-center justify-center gap-10'>
            <h1 className='text-8xl text-white font-bold'>Ready</h1>
            <h1 className='text-8xl text-white font-bold'>When</h1>
            <h1 className='text-8xl text-white font-bold'>You Are.</h1>
            <hr className='w-screen border-2 ' />
        </div>
    </div>
  )
}

export default Footer