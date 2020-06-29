import React from 'react';




const Home = () => {
    return ( 
        <>
        <div className="md:flex justify-center sm:justify-around">
            <div className="md:mt-32 mx-4">
                <h1 className='font-extrabold mt-4 mb-2 text-2xl  hover:text-blue-500'>Hello, I am</h1>
                <h2 className="font-extrabold text-lg">SAMUEL AYEGBUSI</h2> 
                <p  className="font-thin mb-8  hover:text-blue-300">I write codes on the frontend side</p>

                <button class="bg-purple-400 text-white font-bold py-2 px-6 rounded inline-flex items-center">
                <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                <span>Download Resume</span>
            </button>
            </div>
            <div className="hidden md:block ">
                <img src="https://i.ibb.co/jLBwTM9/undraw-developer-activity-bv83.png" alt="man_operating_a_computer"/>
            </div>

            
        </div>
       
        </>
    
     );
}
 
export default Home;