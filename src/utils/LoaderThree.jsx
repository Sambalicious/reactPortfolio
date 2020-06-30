import React from 'react'
import {motion} from 'framer-motion'

const Loader ={
    animationTwo:{
        y:[0, -60],
        x:0,
        transition:{
            y:{
               yoyo:Infinity,
                duration:0.1,
                ease: "easeOut"
            }
        }
    }
}
const LoaderThree = () => {
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

export default LoaderThree
