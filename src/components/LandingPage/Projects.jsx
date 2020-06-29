import React from 'react';
import ProjectsUtils from '../../utils/ProjectsUtils';


const Projects = () => {
    return ( 
        <div id="projects" className="m-12">
             <h2 className="text-center font-extrabold text-4xl my-10">Projects</h2>
            <div class="lg:grid grid-cols-3 row-gap-5 col-gap-10">
                <ProjectsUtils
                    title={'Learn It'}
                    body={'Learn IT is an educational platform that mimicks some of the functionalities of Udemy. Instrustors can Log-In with their google credentials and create course content on their dashboard while students can add their favourite courses to their dashboard for easy access.'}
                    technology={'Technologies: React Hooks,Git, Heroku, Cloudinary API, imgurAPI, JSON server, TailwindCSS, Context API'}
               />

                <ProjectsUtils
                    title={'Computer based test App'} 
                    body={'A create-react-app Computer based test with lifelines such as 50/50: this takes two wrong option and a hint: this takes away one wrong option one at a time.'}
                    technology={'Technologies: React, SCSS, Git'} 
                />

                <ProjectsUtils 
                    title={'Venture Garden Group Interns Page'}
                    body={'A Registration App for intern for registration and it provides them with all they need to know about the Venture Garden Group virtual Internship'}
                    technology={'Technologies: React, Bootstrap'}
                />

                <ProjectsUtils 
                    title={'Luxury Hotel'}
                    body={'A website Template for Hotel companies. Built on a design to sharpen my Frontend skills'}
                    technology={'Technologies: HTML, CSS, Bootstrap, Git'}
                />

                <ProjectsUtils 
                    title={'Recreate'}
                    body={'A recreation booking startUp app that provides service that seemlessly find recreation center nearby on Google Map and enable customer\'s booking  '}
                    technology={'Technologies: Git, Bootstrap, React'}
                />

                <ProjectsUtils
                    title={'MyWallet'}
                    body={'A create react App built to strength my knowledge of Hooks and Context API'}
                    technology={'Technologies: MongoDB, Node, Express, React, Context API'}
                 />


            </div>
        </div>
     );
}
 
export default Projects;