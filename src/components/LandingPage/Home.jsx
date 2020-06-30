import React from 'react';
import {motion} from 'framer-motion';
import ReactTypingEffect from 'react-typing-effect';

const buttonVariant = {
    hover:{
      scale: 1.1,
      transition:{
        duration:0.3,
        yoyo:Infinity
      },
      textShadow: '0px 0px 8px rgb(255, 255, 255)',
      boxShadow: '0px 0px 8px rgb(255, 255, 255)',
  
    }
  }

  const imgVariant ={
      hidden:{
          opacity:0,
          x:'-100vw'
      },
      visible:{
          opacity:1,
          x:0,
          transition:{
              types:"spring",
              delay:0.1,
              when:'beforeChildren',
              staggerChildren:2
          }
      }
  }

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
        mass:0.4,
        damping: 8,
        delay:0.1,
        when: 'beforeChildren',
        staggerChildren: 2,
        stiffness:300
      }
    }
}
const Home = () => {
    return ( 
        <>
        <div className="flex flex-col-reverse justify-center mb-6 md:mb-10 md:mt-20 md:flex-row">
            <motion.div className="mx-4 md:mt-32"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                
            >      <div className='mt-4 mb-2 text-2xl font-extrabold'> <ReactTypingEffect cursor=" " typingDelay={5000} eraseDelay={500000} text="Hello, I am" /></div>
               <div className="text-lg font-extrabold"><ReactTypingEffect cursor=" " typingDelay={5000} eraseDelay={500000} text="SAMUEL AYEGBUSI" /></div>
               <div className="mb-8 font-thin md:mr-3 hover:text-blue-300"><ReactTypingEffect typingDelay={5000} text="I write codes on the frontend side" /></div>
                
                <motion.button class="bg-purple-400 text-white font-bold py-2 px-6 rounded inline-flex items-center"
                 variants={buttonVariant}
                 whileHover='hover'
                 animate='visible'>
                <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                <span>Download Resume</span>
            </motion.button>
            </motion.div>
            <motion.div className="flex justify-start "
                variants={imgVariant}
                initial="hidden"
                animate="visible"
                >
                <img src="https://i.ibb.co/jLBwTM9/undraw-developer-activity-bv83.png" alt="man_operating_a_computer"/>
            </motion.div>

            
        </div>
       
        </>
    
     );
}
 
export default Home;