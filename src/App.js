import React from 'react';
import Navbar from './components/Navigation/Navbar';
import Home from './components/LandingPage/Home';
import Projects from './components/LandingPage/Projects';
import AboutMe from './components/LandingPage/AboutMe';
import Skills from './components/LandingPage/Skills';
import ContactMe from './components/LandingPage/ContactMe';


function App() {
  return (
    <div>
        <Navbar />
        <Home />
        <AboutMe />
        <Skills />
        <Projects/>
        <ContactMe />   
       
    </div>
  );
}

export default App;
