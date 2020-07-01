import React from 'react';
import {motion} from 'framer-motion'
import ScrollAnimation from 'react-animate-on-scroll';
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
       
        <div className="my-12 bg-white">  
         <ScrollAnimation animateIn='fadeIn'  animateOut='fadeOut'>
       
            <div className="mt-3 mb-6  text-4xl font-extrabold text-center hover:text-purple-400">
                Skills
               
                </div>
            
            <motion.div class="lg:grid grid-cols-3 md:grid-cols-2 my-6 col-gap-10 row-gap-2 mx-6 md:mx-20"
                variants={skillVariant}
                initial="hidden"
                animate="visible"
                >
                <SkillsUtils skill={'HTML5'} />
                <SkillsUtils skill={'CSS3 & SCSS'} />
                <SkillsUtils skill={'Javascript(ES5/ES6+)'} />
                <SkillsUtils skill={'Git & Github'} />
                <SkillsUtils skill={'Firebase'} />
                <SkillsUtils skill={'MongoDB'} />
                <SkillsUtils skill={'Redux'} />
                <SkillsUtils skill={'React'} />
                <SkillsUtils skill={'JQuery'} />
                <SkillsUtils skill={'REST API'} />
                <SkillsUtils skill={'Boostrap'} />
                <SkillsUtils skill={'TailwindCSS'} />
            </motion.div>
            </ScrollAnimation>
        </div>
  
    )
}

export default Skills
