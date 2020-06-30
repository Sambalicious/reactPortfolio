import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

const AboutMe = () => {
    return (
        <>
        <ScrollAnimation animateIn='fadeIn'  animateOut='fadeOut'>
        <div  className="text-center px-4 mx-4 mt-4 md:flex">
            <div className="md:mr-2">
                <img src="https://i.ibb.co/vZQy9dt/undraw-code-thinking-1jeh.png" alt="man_operating_a_computer"/>
            </div>
            <div className="justify-center -mt-10 md:mt-4">
                <div className="mb-4 text-4xl font-extrabold text-center hover:text-purple-400">About Me</div>
                <div className="mt-2  text-purple-600">I am a passionate, self taught web developer with keen interest in innovative design</div>
                <div className="text-purple-600"> implementation and understanding of technique geared towards optimum user experience.</div>
                <div className="text-purple-600">I am result driven, so, I attach great importance to everything I do.</div>
            </div>      
            
        </div>
       
        </ScrollAnimation> 
        </>
    )
}

export default AboutMe
