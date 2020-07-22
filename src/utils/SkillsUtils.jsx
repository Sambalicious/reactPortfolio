import React from 'react';
import {motion } from 'framer-motion';



const SkillsUtils = ({skill}) => {
    return (
        <div
        data-aos="zoom-out-left" 
        data-aos-offset="100"
        data-aos-easing="ease-in-cubic" 
        data-aos-duration="1000"
        delay="20"
        >
        
            <motion.div className="px-8 py-3 my-6 overflow-x-hidden text-center text-white bg-purple-400 rounded-sm shadow-2xl hover:bg-white hover:text-purple-400"
                whileHover={{scale:1.1,originX:0}}
                transition={{type:'spring', stiffness:300}}
            >
                {skill}
            </motion.div>
       
        </div>
    )
}

export default SkillsUtils
