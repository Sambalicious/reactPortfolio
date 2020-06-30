import React, {useState} from 'react';
import {motion} from 'framer-motion'



const Navbar = () => {
    const [show, setShow] = useState(true);
    return ( 
        <>
                        <nav className="flex flex-wrap items-center pl-3 justify-between p-3 bg-purple-400 ">
                          
            <motion.div className="items-center flex-shrink-0  mr-6 text-white lg:flex"
                 drag
                 dragConstraints={{left:0, top: 0, right:0, bottom:0}}
                 dragElastic={0.7}>
              <img src="https://i.ibb.co/0XYfdNc/Group-1.png" alt="brand_logo"/>
            </motion.div>

            <div onClick={()=>setShow(!show)} className={ show ? "block lg:hidden": undefined }>
                <button className="flex  p-3 text-white border border-white font-bold rounded hover:text-white hover:border-white">
                <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div className="block w-full md:flex lg:items-center md:justify-center lg:w-auto">
            <div  className={show ? "text-base mt-4 md:flex-grow": 'hidden' } >              
                
                <motion.a href="#home" className="block mt-4 mb-4 mr-6 font-bold text-white lg:inline-block lg:mt-0 hover:text-teal-200"
                whileHover={{scale:1.1,originX:0}}
                transition={{type:'spring', stiffness:120}}
                >
                
                    HOME
                </motion.a>
                <motion.a href="#resume" className="block mb-4 mr-6 font-bold text-white lg:inline-block lg:mt-0 hover:text-teal-200"
                whileHover={{scale:1.1,originX:0}}
                transition={{type:'spring', stiffness:120}}>
                    RESUME
                </motion.a>
                <motion.a href="#projects" className="block mb-4 mr-6 font-bold text-white lg:inline-block lg:mt-0 hover:text-teal-200"
                whileHover={{scale:1.1,originX:0}}
                transition={{type:'spring', stiffness:120}}>
                    PROJECTS
                </motion.a>
                <motion.a href="#contact" className="block mt-4 mr-4 font-bold text-white lg:inline-block lg:mt-0 hover:text-teal-200"
                whileHover={{scale:1.1,originX:0}}
                transition={{type:'spring', stiffness:120}}>
                    CONTACT
                </motion.a>
                </div>
            </div>
            </nav>

        </>
     );
}
 
export default Navbar;