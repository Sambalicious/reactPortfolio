import React from 'react'
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
        <div id="contact" className="bg-purple-400 text-center text-white font-semibold py-6">
            <div className="font-extrabold text-2xl pb-2">GET IN TOUCH</div>
            <div><span className="flex justify-center"><span className="mr-2"><FaPhoneAlt size={'1rem'} /></span>07033098551</span></div>
            <span className="flex justify-center"><span className="mr-2"><MdMailOutline size={'2rem'} /></span>Stemitope370@gmail.com</span>
            <div className="flex justify-center ">
            <IconContext.Provider value={{size:"1.5rem", className:"mr-4 my-2"}}>
                <FaGithub />
                <FaFacebookSquare />
                <FaTwitter />
                <FaLinkedinIn />
                <FaStackOverflow />
            </IconContext.Provider>
            </div>
            <div className="flex justify-end text-white mr-6 text-xs">Copyright <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} />  2020</div>
        </div>
    )
}

export default ContactMe
