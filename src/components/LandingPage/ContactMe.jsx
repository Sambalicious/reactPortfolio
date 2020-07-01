import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { IconContext } from "react-icons";
import {MdMailOutline} from 'react-icons/md';
import {FaPhoneAlt} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import {FaFacebookSquare} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa';
import {FaStackOverflow} from 'react-icons/fa'
const ContactMe = () => {
    return (
        <ScrollAnimation animateIn='bounceInRight'  animateOut='bounceOutLeft'>
        <div id="contact" className="py-6 text-center text-white bg-purple-400">
            <div className="pb-2 text-lg font-bold">GET IN TOUCH</div>
            <div><span className="flex justify-center"><span className="mr-2"><FaPhoneAlt size={'1rem'} /></span>07033098551</span></div>
           <a rel="noopener noreferrer"  target="_blank" href="mailto:stemitope370@gmail.com">
            <span className="flex justify-center"><span className="mr-2"><MdMailOutline size={'1.5rem'} /></span>Stemitope370@gmail.com</span>
            </a>
            <div className="flex justify-center ">
            <IconContext.Provider value={{size:"1.5rem", className:"mr-4 my-2"}}>
                <a rel="noopener noreferrer"   target="_blank" href="https://github.com/Sambalicious">
                <FaGithub />
                </a>
                <a rel="noopener noreferrer"  target="_blank" href="https://facebook.com/cixtein">
                <FaFacebookSquare />
                </a>
                <a rel="noopener noreferrer"  target="_blank" href="https://twitter.com/sambalicious_sa">
                <FaTwitter />
                </a>
                <a  rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/samuel-ayegbusi-355169104/">
                <FaLinkedinIn />
                </a>
                <a  rel="noopener noreferrer"  target="_blank" href="https://stackoverflow.com/users/12493766/sambalicious">
                <FaStackOverflow />
                </a>

            </IconContext.Provider>
            </div>
            <a href="#nav">
                <div className="flex justify-end mb-2"> <button className="  py-2 px-4 text-white top">Back To Top</button></div>
               </a>
            <div className="flex justify-between">

               <div className="flex justify-start ml-4 text-xs text-white">Designed by Esther Ilori</div>
            
            <div className="flex justify-end mr-6 text-xs text-white">Copyright <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} />  2020</div>
            </div>
        </div>
        </ScrollAnimation>
    )
}

export default ContactMe
