import React from 'react';
import {motion } from 'framer-motion'


const Loader ={
    animationTwo:{
        y:[0, -40],
        x:0,
        transition:{
            y:{
                yoyo:Infinity,
                duration:0.25,
                ease: "easeOut"
            }
        }
    }
}
const LoaderTwo = () => {
   
    return (
        <>
        <motion.div className="loader"
            variants={Loader}
            animate='animationTwo'
        >
            
        </motion.div>
        </>
    )
}

export default LoaderTwo
