// "use client"
// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const steps = [
//   { name: 'Requirements', icon: '📋', description: 'Define project scope' },
//   { name: 'Design', icon: '🎨', description: 'Create architecture' },
//   { name: 'Development', icon: '💻', description: 'Write code' },
//   { name: 'Testing', icon: '🧪', description: 'Ensure quality' },
//   { name: 'Deployment', icon: '🚀', description: 'Release to production' },
//   { name: 'Maintenance', icon: '🔧', description: 'Ongoing support' }
// ];

// const SDLCOptimisticFlow = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     const stepElements = container.querySelectorAll('.step');
//     const lines = container.querySelectorAll('.connection-line');

//     gsap.set(stepElements, { autoAlpha: 0, y: 20 });
//     gsap.set(lines, { scaleY: 0 });

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: container,
//         start: 'top center',
//         end: 'bottom center',
//         scrub: 1,
//       }
//     });

//     stepElements.forEach((step, index) => {
//       tl.to(step, {
//         autoAlpha: 1,
//         y: 0,
//         duration: 0.5,
//         ease: 'back.out(1.7)',
//       }, index * 0.2);

//       if (index < stepElements.length - 1) {
//         tl.to(lines[index], {
//           scaleY: 1,
//           duration: 0.5,
//           ease: 'none',
//         }, '>-0.3');
//       }
//     });
//   }, []);

//   return (
//     <div className="bg-gray-50 min-h-screen flex items-center justify-center p-8">
//       <div ref={containerRef} className="max-w-2xl w-full bg-white shadow-lg rounded-xl p-8">
//         <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">SDLC Workflow</h2>
//         <div className="relative flex flex-col items-center">
//           {steps.map((step, index) => (
//             <React.Fragment key={index}>
//               <div className="step w-64 bg-white border border-purple-200 rounded-lg p-4 mb-4 flex items-center">
//                 <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4">
//                   <span className="text-xl">{step.icon}</span>
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-700">{step.name}</h3>
//                   <p className="text-sm text-gray-500">{step.description}</p>
//                 </div>
//               </div>
//               {index < steps.length - 1 && (
//                 <div className="connection-line w-0.5 h-8 bg-purple-300 mb-4 transform origin-top"></div>
//               )}
//             </React.Fragment>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SDLCOptimisticFlow;