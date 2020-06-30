import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import ProjectsUtils from '../../utils/ProjectsUtils';


const Projects = () => {
    return ( 
       
        <div id="projects" className="mx-5 md:my-20 my-16 md:mx-20">
            <ScrollAnimation animateIn="bounceInRight"  animateOut="bounceOutLeft">
             <h2 className="my-3 text-4xl font-extrabold text-center hover:text-purple-400">Projects</h2>
             </ScrollAnimation>
            <div class="lg:grid grid-cols-3 row-gap-5 col-gap-10">
                <ProjectsUtils
                    title={'Learn It'}
                    body={'Learn IT is an educational platform that mimicks some of the functionalities of Udemy. Instructors can create course and Students can access courses.'}
                    technology={'Technologies: React, Cloudinary API, imgurAPI, TailwindCSS, Context API'}
                    link1={'https://learnit20.herokuapp.com/'}
                    link2={'https://github.com/Sambalicious/learn-It'}
               />

                <ProjectsUtils
                    title={'Computer based test App'} 
                    body={'A create-react-app Computer based test with lifelines such as 50/50: this takes two wrong option and a hint: this takes away one wrong option one at a time.'}
                    technology={'Technologies: React, SCSS, Git'} 
                    link1={'https://cbt-app.netlify.app/'}
                    link2={'https://github.com/Sambalicious/reactQuizApp'}
                />

                <ProjectsUtils 
                    title={'Venture Garden Group Interns Page'}
                    body={'A Registration App for intern for registration and it provides them with all they need to know about the Venture Garden Group virtual Internship.'}
                    technology={'Technologies: React, Bootstrap'}
                    link1={'https://vgg-internship.herokuapp.com/'}
                    link2={'https://github.com/Sambalicious/VGG_landing_page'}
                />

                <ProjectsUtils 
                    title={'Luxury Hotel'}
                    body={'A website Template for Hotel companies. Built on a design to sharpen my Frontend skills.'}
                    technology={'Technologies: HTML, CSS, Bootstrap, Git'}
                    link1={'https://luxury-hotel.netlify.app/'}
                    link2={'https://github.com/Sambalicious/Hng-TeamFury-facility'}
                />

                <ProjectsUtils 
                    title={'Recreate'}
                    body={'A recreation booking startUp app that provides service that seemlessly find recreation center nearby on Google Map and enable customer\'s booking.  '}
                    technology={'Technologies: Git, Bootstrap, React'}
                    link1={'https://recreate.netlify.app/'}
                    link2={'https://github.com/Sambalicious/recreational_app_frontend_staging'}
                />

                <ProjectsUtils
                    title={'MyWallet'}
                    body={'A create react App built to strength my knowledge of Hooks and Context API'}
                    technology={'Technologies: MongoDB, Node, Express, React, Context API'}
                    link1={'https://e-pocket.netlify.app/'}
                    link2={'https://github.com/Sambalicious/moneyCalc'}
                 />


            </div>
          
        </div>
       
     );
}
 
export default Projects;