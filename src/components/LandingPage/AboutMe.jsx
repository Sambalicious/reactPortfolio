import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import {motion, AnimatePresence} from 'framer-motion'

const containerVariants={
    hidden:{
      opacity:0,
      x:'100vw'
    },
    visible:{
      opacity:1,
      x:0,
      transition:{
        type:'spring',
        delay:1.5
      }
    },
    exit:{
      x:'-100vw',
      transition:{ease:'easeInOut'}
    }
  }


const AboutMe = () => {
    return (
        <>
        <ScrollAnimation animateIn='bounceInRight'  animateOut='bounceOutLeft'>
            <AnimatePresence exitBeforeEnter >
        <motion.div  className="text-center px-4 mx-4 mt-10 md:flex"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit='exit'
        >
            <div className="md:mr-2">
                <img src="https://i.ibb.co/vZQy9dt/undraw-code-thinking-1jeh.png" alt="man_operating_a_computer"/>
            </div>
            <div className="justify-center -mt-10 md:mt-4">
                <div className="mb-4 text-4xl font-extrabold text-center hover:text-purple-400">About Me</div>
                <div className="mt-2  text-purple-600">I am a passionate, self taught web developer with keen interest in innovative design</div>
                <div className="text-purple-600"> implementation and understanding of technique geared towards optimum user experience.</div>
                <div className="text-purple-600">I am result driven, so, I attach great importance to everything I do.</div>
            </div>      
            
        </motion.div>
        </AnimatePresence>
        </ScrollAnimation> 
        </>
    )
}

export default AboutMe
