import React from 'react';
import portfolio from '../../utils/portfolio.png'



const Home = () => {
    return ( 
        <>
        <div className="bg-gray-100 md:flex justify-center sm:justify-around">
            <div className="md:mt-32 mx-4">
                <h1 className='font-extrabold mt-4 mb-2 text-2xl hover:text-white hover:text-blue-500'>Hello,</h1>
                <h2 className="font-bold text-lg hover:text-white hover:text-blue-300">I am Samuel.</h2> 
                <p  className="font-thin hover:text-white hover:text-blue-300">A Frontend Developer from Nigeria.</p>
            <p className="font-light hover:text-white hover:text-blue-300">I write codes that makes people happy</p></div>
            <div className="hidden md:block ">
                <img src={portfolio} alt="samuel"/>
            </div>

        </div>
        </>
     );
}
 
export default Home;