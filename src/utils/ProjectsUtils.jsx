import React from 'react';
import {IoMdLink} from 'react-icons/io';

import {FaExternalLinkAlt} from 'react-icons/fa';

const ProjectsUtils = ({title, body, technology}) => {
    return (
        <div>
              <div className="min-h-full p-6 mb-3 text-purple-400 bg-white rounded-lg shadow-2xl hover:bg-purple-400 hover:text-white">
                  <div className="flex justify-between my-6">
                    <FaExternalLinkAlt size="1.5rem" />
                    <IoMdLink size="2rem"/>
                  </div>
                    <h5 className="mt-6 mb-2">{title}</h5>
                    <p className="mb-10">{body}</p>

                    
                    <div className="h-1 mt-24 mb-2 bg-purple-400 hover:bg-white"></div>
                    <p>{technology}</p>
                </div>  
        </div>
    )
}

export default ProjectsUtils
