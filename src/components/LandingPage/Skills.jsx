import React from 'react';
import {motion} from 'framer-motion'

import SkillsUtils from '../../utils/SkillsUtils'


const skillVariant = {
    hidden:{
        opacity:0
    },
    visible:{
        opacity: 1,
        transition:{
            type:"spring", delay:0.3, stiffness:200
        }
    }
}
const Skills = () => {
    return (
       
        <div className="my-12 bg-white overflow-x-hidden">  
         
       
            <div className="mt-3 mb-6 text-4xl font-extrabold text-center hover:text-purple-400"
            data-aos="slide-right" 
            data-aos-offset="100"
           data-aos-easing="ease-in-cubic" 
            data-aos-duration="1000"
           >
                Skills
               
                </div>
            
            <motion.div class="lg:grid grid-cols-3 md:grid-cols-2 my-6 col-gap-10 row-gap-2 mx-6 md:mx-20"
                variants={skillVariant}
                initial="hidden"
                animate="visible"
                >
                <SkillsUtils skill={'HTML5'} />
                <SkillsUtils skill={'CSS3 & SASS'} />
                <SkillsUtils skill={'Javascript(ES5/ES6+)'} />
                <SkillsUtils skill={'Git & Github'} />
                <SkillsUtils skill={'Firebase'} />
                <SkillsUtils skill={'MongoDB'} />
                <SkillsUtils skill={'Redux'} />
                <SkillsUtils skill={'React'} />
                <SkillsUtils skill={'JQuery'} />
                <SkillsUtils skill={'REST API'} />
                <SkillsUtils skill={'Bootstrap'} />
                <SkillsUtils skill={'TailwindCSS'} />
            </motion.div>
           
        </div>
  
    )
}

export default Skills
