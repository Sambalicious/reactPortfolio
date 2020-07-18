import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import ProjectsUtils from '../../utils/ProjectsUtils';


const Projects = () => {
    return ( 
       
        <div id="projects" className="mx-5 my-16 md:my-20 md:mx-20">
           
             <h2 className="my-3 text-4xl font-extrabold text-center hover:text-purple-400"
             data-aos="fade-in" 
             data-aos-offset="100"
            data-aos-easing="ease-in-cubic" 
             data-aos-duration="1000"
             data-aos-delay="30">Projects</h2>
            
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
                    body={'A create-react-app Computer based test with lifelines such as 50/50; this takes two wrong option and a hint; this takes away one wrong option one at a time.'}
                    technology={'Technologies: React, SCSS, Git'} 
                    link1={'https://cbt-app.netlify.app/'}
                    link2={'https://github.com/Sambalicious/reactQuizApp'}
                />

                <ProjectsUtils 
                    title={'Venture Garden Group Interns Page'}
                    body={'A create-react-app for Interns\' registration and source of Information about  join Venture Garden Group Virtual Internship.'}
                    technology={'Technologies:MongoDB, Node, React, Bootstrap'}
                    link1={'https://vgg-internship-website.herokuapp.com/'}
                    link2={'https://github.com/Sambalicious/VGG_landing_page'}
                />

                <ProjectsUtils 
                    title={'Luxury Hotel'}
                    body={'A website Template for Hotel companies. Customers can browse room prices, checkout hotel\'s facilities and also book their favourite rooms.'}
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
                    body={'A create-react-app that keeps track of user\'s income and expenses. Once the App is ready, it will help to keep track of transactions and stores inflows and outflows of money'}
                    technology={'Technologies: React, Context API'}
                    link1={'https://e-pocket.netlify.app/'}
                    link2={'https://github.com/Sambalicious/moneyCalc'}
                 />


            </div>
          
        </div>
       
     );
}
 
export default Projects;