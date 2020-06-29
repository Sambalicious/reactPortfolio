import React from 'react';
import {motion } from 'framer-motion';

const SkillsUtils = ({skill}) => {
    return (
        <>
        <motion.div className="px-6 py-3 my-6 text-center text-white bg-purple-400 rounded-sm shadow-2xl hover:bg-white hover:text-purple-400"
             whileHover={{scale:1.1,originX:0}}
             transition={{type:'spring', stiffness:300}}
        >{skill}</motion.div>
        </>
    )
}

export default SkillsUtils
