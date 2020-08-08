import React, {useState} from 'react';
import {motion} from 'framer-motion'
import { Link, animateScroll as scroll } from 'react-scroll';


const Navbar = () => {
    const [show, setShow] = useState(true);
    return ( 
        <>
            <nav id="nav" className="flex flex-wrap items-center fixed top-0 justify-between p-3 pl-3 bg-purple-400 ">
                          
                          <motion.div className="items-center flex-shrink-0 mr-6 text-white lg:flex"
                               drag
                               dragConstraints={{left:0, top: 0, right:0, bottom:0}}
                               dragElastic={0.7}
                          
                               //event
                               onClick={()=>scroll.scrollToTop()}
                               
                               >
                          
                          
                          
                            <img rel="preconnect" src="https://i.ibb.co/0XYfdNc/Group-1.png" alt="brand_logo"/>
                          
                          </motion.div>
                          
                          <div onClick={()=>setShow(!show)} className={ show ? "block lg:hidden": undefined }>
                              <button className="flex p-3 font-bold text-white border border-white rounded hover:text-white hover:border-white">
                              <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                              </button>
                          </div>
                          <div className="block w-full md:flex lg:items-center md:justify-center lg:w-auto">
                          <div  className={show ? "text-base mt-4 md:flex-grow": 'hidden' } >              
                              
                              <Link to="home" className="block mt-4 mb-4 mr-6 font-bold text-white lg:inline-block lg:mt-0 hover:text-teal-200"
                              whilehover={{scale:1.1,originX:0}}
                              transition={{type:'spring', stiffness:120}}
                              >
                                <motion.div
                                   //framer animation
                                  whileHover={{scale:1.1,originX:0}}
                                  transition={{type:'spring', stiffness:120}}>
                                      HOME
                                  </motion.div>
                                 
                                  
                              </Link>
                              <motion.a target="_blank" href="https://drive.google.com/file/d/1MUK1s3-5dOBPK1DV4mytV95m_Pk9bie0/view?usp=drivesdk" className="block mb-4 mr-6 font-bold text-white lg:inline-block lg:mt-0 hover:text-teal-200"
                              whileHover={{scale:1.1,originX:0}}
                              transition={{type:'spring', stiffness:120}}>
                                  RESUME
                              </motion.a>
                              <Link to="projects" className="block mb-4 mr-6 font-bold text-white lg:inline-block lg:mt-0 hover:text-teal-200"
                              //scroll animation
                                  smooth={true}
                                  duration={1000}
                                  delay={200}
                                  isDynamic={true}>
                             
                              <motion.div
                               //framer animation
                              whileHover={{scale:1.1,originX:0}}
                              transition={{type:'spring', stiffness:120}}>
                                  PROJECTS
                              </motion.div>
                             
                              </Link>
                              <Link to="contact" className="block mt-4 mr-4 font-bold text-white lg:inline-block lg:mt-0 hover:text-teal-200"
                                   //scroll animation
                                   smooth={true}
                                   duration={1000}
                                   delay={200}
                                   isDynamic={true}>
                                   <motion.div
                                   //framer animation
                                  whileHover={{scale:1.1,originX:0}}
                                  transition={{type:'spring', stiffness:120}}>
                                      CONTACTS
                                  </motion.div>
                                 
                                  </Link>
                              </div>
                          </div>
                          </nav>
                          
        
        </>
     );
}
 
export default Navbar;







////ORIGINAL


