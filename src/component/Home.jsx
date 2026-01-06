
import React from 'react';


import Navbar from './Navbar'
import Footer from './Footer'
import Contact from './Contact'
import Skill from './Skill';
import About from './About';
import HeroSection from './HeroSection';


const Home = ()=> {
  
  return (
    <div>
    <Navbar/>
   <HeroSection/>
   <About/>
   <Skill/>
   <Contact/>
   <Footer/>
</div>
  )
}

export default Home
