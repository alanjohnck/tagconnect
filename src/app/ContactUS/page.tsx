"use client"
import React, { useRef } from 'react'
import Navbar from '../components/Navbar'


function Contact() {
  //  const form = useRef<HTMLFormElement>();

// const sendEmail = (e: { preventDefault: () => void; }) => {
//   e.preventDefault();
//   if(form.current){
//   console.log(form.current);
//   emailjs
//     .sendForm('service_c5egj1i', 'template_wljc6bw', form.current, {
//       publicKey: '-5tSLl8wEmxntDbEl',
//     })
//     .then(
//       () => {
//         console.log('SUCCESS!');
//       },
//       (error: { text: any; }) => {
//         console.log('FAILED...', error.text);
//       },
//     );
// }
// };
  return (
    <div className='w-screen h-auto flex flex-col items-center bg-[#EEF3ED]'>

    <div className='p-2 h-[40] w-full flex items-center justify-center sticky top-5'>
      <Navbar />
    </div>
  
    <div className='h-[10rem] w-screen' />
  
    <div className='w-full h-screen flex flex-col items-center justify-around'>
  
      <div className='w-[85%] font-bold flex justify-around'>
        <h1 className='font-bold'>Talk with</h1>
        <h1 className='rotate-90 font-bold'>↑</h1>
        <h1 className='font-bold'>an expert</h1>
      </div>
  
      <div className='w-full h-[70%] flex'>
        <div className='w-3/4 h-full p-4 flex justify-center '>
          <form className='flex flex-col w-1/2 gap-4'>
            <input type='text' name="user_name" id='name' className='rounded-md p-2' placeholder='Your name' />
            <input type='email' name="user_email" id='email' className='rounded-md p-2' placeholder='Your email' />
            <textarea id='message' name="message" className='rounded-md p-2' placeholder='Your description' />
            <input type="submit" value="Send" className='rounded-md p-2 bg-black text-white' />
          </form>
        </div>
        <div className='w-1/2 h-full flex flex-col gap-5 p-4'>
          <p className='w-3/4'>We are ready to connect and collaborate, bringing our expertise to drive your success. Let&#39;s work together to achieve your goals and push the boundaries of what&#39;s possible.</p>
          <hr className='w-full border-1 border-black' />
          <p className='font-bold italic'>tagdynamix@gmail.com</p>
        </div>
      </div>
    </div>
  </div>
  
  
  )
}

export default Contact