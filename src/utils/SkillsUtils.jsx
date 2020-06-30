import React from 'react';
import {motion } from 'framer-motion';
import ScrollAnimation from 'react-animate-on-scroll';

const SkillsUtils = ({skill}) => {
    return (
        <>
         <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
        <motion.div className="px-8 py-3 my-6 text-center text-white bg-purple-400 rounded-sm shadow-2xl hover:bg-white hover:text-purple-400"
             whileHover={{scale:1.1,originX:0}}
             transition={{type:'spring', stiffness:300}}
        >{skill}</motion.div>
        </ScrollAnimation>
        </>
    )
}

export default SkillsUtils
