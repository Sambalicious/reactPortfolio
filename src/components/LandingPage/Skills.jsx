import React from 'react';
import SkillsUtils from '../../utils/SkillsUtils'

const Skills = () => {
    return (
        <div className="bg-white">  
            <h2 className="text-center text-4xl mt-3 font-extrabold mb-10">Skills</h2>
            <div class="lg:grid grid-cols-3 col-gap-20 row-gap-10 mx-20">
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
            </div>
            
        </div>
    )
}

export default Skills
