import React from 'react';
import {IoMdLink} from 'react-icons/io';

import {FaExternalLinkAlt} from 'react-icons/fa';

const ProjectsUtils = ({title, body, technology}) => {
    return (
        <div>
              <div className="shadow-2xl min-h-full mb-3  p-6 bg-white text-purple-400">
                  <div className="flex my-6 justify-between">
                    <FaExternalLinkAlt size="1.5rem" />
                    <IoMdLink size="2rem"/>
                  </div>
                    <h5 className="mb-2 mt-6">{title}</h5>
                    <p className="mb-10">{body}</p>

                    
                    <div className="h-1 mt-24 mb-2 bg-purple-400"></div>
                    <p>{technology}</p>
                </div>  
        </div>
    )
}

export default ProjectsUtils
