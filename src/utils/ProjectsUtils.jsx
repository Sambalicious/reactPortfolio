import React from 'react';
import {motion} from 'framer-motion'
import {IoMdLink} from 'react-icons/io';
import ScrollAnimation from 'react-animate-on-scroll';
import {FaExternalLinkAlt} from 'react-icons/fa';

const ProjectsUtils = ({title, body, technology, link1, link2}) => {
    return (
        <div>
               <ScrollAnimation animateIn="bounceInRight"  animateOut="bounceOutLeft">
              <motion.div className="min-h-full p-6 mb-3 text-purple-400 bg-white rounded-lg shadow-2xl hover:bg-purple-400 hover:text-white"
                 whileHover={{scale:1.05,originX:0}}
                 transition={{type:'spring', stiffness:200}}
              >
                  <div className="flex justify-between my-6">
                  <a href={link1} target="_blank" rel="noopener noreferrer">
                     <FaExternalLinkAlt size="1.5rem" />
                    </a>
                    <a href={link2} target="_blank" rel="noopener noreferrer">
                      <IoMdLink size="2rem"/>
                    </a>
                  </div>
                    <h5 className="mt-6 font-bold mb-2">{title}</h5>
                    <p className="mb-10">{body}</p>

                    
                    <div className="h-1 mt-24 mb-2 bg-purple-400 hover:bg-white"></div>
                    <p>{technology}</p>
                </motion.div>  
                </ScrollAnimation>
        </div>
    )
}

export default ProjectsUtils
