import React from 'react';
import {motion} from 'framer-motion'

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


const Home = () => {
    return ( 
        <>
        <div className="flex flex-col-reverse justify-around mb-6 md:flex-row">
            <div className="mx-4 md:mt-32">
                <h1 className='mt-4 mb-2 text-2xl font-extrabold hover:text-blue-500'>Hello, I am</h1>
                <h2 className="text-lg font-extrabold">SAMUEL AYEGBUSI</h2> 
                <p  className="mb-8 font-thin hover:text-blue-300">I write codes on the frontend side</p>

                <motion.button class="bg-purple-400 text-white font-bold py-2 px-6 rounded inline-flex items-center"
                 variants={buttonVariant}
                 whileHover='hover'
                 animate='visible'>
                <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                <span>Download Resume</span>
            </motion.button>
            </div>
            <div className="flex justify-start ">
                <img src="https://i.ibb.co/jLBwTM9/undraw-developer-activity-bv83.png" alt="man_operating_a_computer"/>
            </div>

            
        </div>
       
        </>
    
     );
}
 
export default Home;