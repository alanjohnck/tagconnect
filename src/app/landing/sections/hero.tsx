"use client";
import React, { } from "react";

const Hero = () => {


 // const words = paragraph.split(" ");

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-around">
        <h1 className=" text-5xl font-bold">
        Expert engineers crafting seamless HMI experiences
        </h1>
        {/* <p className="text-white text-4xl font-bold">{paragraph}</p> */}
    </div>
    // <div className="w-screen h-[200vh] " ref={ele}>
    //   <div className="w-screen h-screen" />
    //   <p className="flex flex-wrap gap-2 text-balanced p-5  text-center  " >
    //     {words.map((word, index) => {
    //       const start = index / words.length;
    //       const end = start + 1 / words.length;
    //       return (
    //         <Word key={index} range={[start, end]} progress={scrollYProgress} >
    //           {word}
    //         </Word>
    //       );
    //     })}
    //   </p>
    // </div>
  )
};

export default Hero;

// const Word = ({
//   children,
//   range,
//   progress,
// }: {
//   children: string;
//   range: [number, number];
//   progress: any;
// }) => {
//     const opacity =useTransform(progress,range,[1,0.3])
//     const color = useTransform(progress, range, ["#ff6600", "#fff",]);
//     const delay =useTransform(progress,range,[0,1])
//   return (
//     <motion.span style={{  color,opacity }} transition={{delay:Number(delay)*.05}}  className="text-8xl font-semibold">
//       {children}
//     </motion.span>
//   );
// };
