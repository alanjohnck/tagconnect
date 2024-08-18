"use client"
import React, { } from 'react'
import { motion, MotionValue,  useTransform } from "framer-motion"


const Words = ({ word, index, totalWords,scrollYProgress }: { word: string, index: number, totalWords: number,scrollYProgress:MotionValue<number> }) => {
    const start = (index * 0.1);
    const middle = (start + 0.1);
    const ThreeQuarter = (middle+0.1 ); // Short transition to orange
    const end = (ThreeQuarter+0.1); // Return to black after orange

    const color = useTransform(scrollYProgress, [start, middle,ThreeQuarter, end], ["#E2ECE2","#ed5729","#ed5729" ,"#000"]);

    return (
        <motion.span style={{ color }} className='inline-block mx-1 font-9xl font-900 pt-4 pb-4'>
            {word}
        </motion.span>
    );
}

export default Words;