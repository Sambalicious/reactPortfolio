import React from 'react';


const Navbar = () => {
    return ( 
        <>
                        <nav className="bg-purple-400 flex items-center justify-between flex-wrap p-2 ">
            <div className="lg:flex items-center flex-shrink-0 text-white ml-2 mr-6">
              <img src="https://i.ibb.co/0XYfdNc/Group-1.png" alt="brand_logo"/>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div className="w-full block  md:flex md:justify-end md:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow mr-4">
                <a href="#home" className="block font-bold mt-4 lg:inline-block lg:mt-0 hover:text-teal-200 text-white mr-4">
                    HOME
                </a>
                <a href="#resume" className="block mt-4 font-bold lg:inline-block lg:mt-0 hover:text-teal-200 text-white mr-4">
                    RESUME
                </a>
                <a href="#projects" className="block  font-bold mt-4 lg:inline-block lg:mt-0 hover:text-teal-200 text-white mr-4">
                    PROJECTS
                </a>
                <a href="#contact" className="block  font-bold mt-4 lg:inline-block lg:mt-0 hover:text-teal-200 text-white">
                    CONTACT
                </a>
                </div>
            </div>
            </nav>

        </>
     );
}
 
export default Navbar;