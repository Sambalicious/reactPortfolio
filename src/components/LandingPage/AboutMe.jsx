import React from 'react'
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
        <div
          data-aos="zoom-out-down" 
          data-aos-offset="200"
          data-aos-easing="ease-in-cubic" 
          data-aos-duration="2000"
        >
        
            
        <div  className="justify-center px-4 mx-6 mt-20 text-center md:flex"
           
        >
            <div className="md:mr-5">
                <img rel="preconnect" src="https://i.ibb.co/vZQy9dt/undraw-code-thinking-1jeh.png" alt="man_is_code_thinking"/>
            </div>
            <div className="-mt-10 align-center md:mt-4">
                <div className="mb-4 text-4xl font-extrabold hover:text-purple-400">About Me</div>
                <div className="mt-2 text-purple-600">I am a passionate, self taught web developer with keen interest in innovative design</div>
                <div className="text-purple-600"> implementation and understanding of technique geared towards optimum user experience.</div>
                <div className="text-purple-600">I am result driven, so, I attach great importance to everything I do.</div>
            </div>      
            
        </div>
       

        </div>
    )
}

export default AboutMe
