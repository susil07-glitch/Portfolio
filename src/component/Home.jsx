
import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

import Navbar from './Navbar'
import Footer from './Footer'
import Contact from './Contact'


// for showing typing text style //

const TypingText = ({ text, speed = 100 }) => {
  const [displayedLetters, setDisplayedLetters] = useState([]);

useEffect(() => {
  let index = 0;
  const interval = setInterval(() => {
    if (index < text.length) {
      const currentChar = text.charAt(index);
      setDisplayedLetters((prev) => [...prev, currentChar]);
      index++;
    } else {
      console.log('Typing complete.');
      clearInterval(interval);
    }
  }, speed);

  return () => clearInterval(interval);
}, [text, speed]);



  return (
    <h1 className="text-3xl font-bold flex flex-wrap">
      {displayedLetters.map((char, index) => (
        <span key={index} className={`${setDisplayedLetters}`}>
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
      <span className="text-white animate-pulse">|</span>
    </h1>
  );
};


// for scrolling effect //



const FadeInSection = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};

// main section //

const Home = ()=> {
  
  return (
    <div>
        <Navbar/>
          {/* Hero Section */}
    <section  className="min-h-screen flex items-center justify-center relative z-10 pt-20">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="relative inline-block mb-12">
            <div className="pulse-ring w-80 h-80" />
            <div className="pulse-ring w-80 h-80" style={{animationDelay: '2s'}} />
            <div className="relative w-80 h-80 mx-auto hologram rounded-full overflow-hidden">
              <img src="/sushil.jpeg" alt="ss.code" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="orbitron text-4xl md:text-4xl font-cursive mb-4">
            <span className="neon-text">Sushil Sharma</span><br />
          
          </div>
          <div className="text-1xl md:text-2xl text-cyan-200 mb-1">
            <div className="h-13">
            <TypingText  className="flex flex-col md:flex-row gap-6 justify-center items-center" text="Frontend Developer and  UX/UI Designer " speed={100}/></div>
          </div> 
          <FadeInSection delay={0.4}>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
           <a href="sushilcv.pdf"> <button  type="download" className="border-2 border-cyan-400 px-12 py-4 text-xl font-poppins text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105">
              DOWNLOAD CV
            </button></a>
           <button className="border-2 border-cyan-400 px-12 py-4 text-xl font-poppins text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105">
              VIEW PROJECTS
            </button>
            
          </div>
          {/* Stats */}
          
          <div className="grid grid-cols-3 gap-8 mt-10 ">
            <div className="border-2 border-cyan-400 p-6 rounded-lg hover:bg-blue-800 hover:text-slate-900 transition-all duration-300 transform hover:scale-105">
              <div className="orbitron text-2xl font-bold neon-text mb-2 ">0.5+</div>
              <div className="text-cyan-200">Years Experience</div>
            </div>
            <div className="border-2 border-cyan-400 p-6 rounded-lg hover:bg-blue-800 hover:text-slate-900 transition-all duration-300 transform hover:scale-105">
              <div className="orbitron text-2xl font-bold neon-text mb-2">7+</div>
              <div className="text-cyan-200">Projects Done</div>
            </div>
            <div className="border-2 border-cyan-400 p-6 rounded-lg hover:bg-blue-800 hover:text-slate-900 transition-all duration-300 transform hover:scale-105">
              <div className="orbitron text-2xl font-bold neon-text mb-2">90%</div>
              <div className="text-cyan-200">Success Rate</div>
            </div>
           
          </div>
           </FadeInSection>
        </div>
      </div>
    </section>
   
    
    {/* About section */}
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="orbitron text-5xl font-bold neon-text mb-4">ABOUT ME</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto" />
        </div>
        <FadeInSection delay={0.5}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="">
            <div className=" p-8 rounded-lg">
              <img src="/susil.jpeg" alt="sushil kumar sharma " className="w-120 h-full object-cover rounded-lg bg-none" />
            </div>
          </div>
             {/* change here  */}
           
          <div className="fade- space-y-6">
            <h3 className="text-3xl font-bold text-white mb-4">Frontend Developer &amp; Tech Innovator</h3>
            <p className="text-lg text-gray-300 ">
              Welcome to my digital realm! I'm Sushil Sharma a passionate Frontend developer with over 0.5 years of experience crafting cutting-edge web solutions. My journey in the tech world has been fueled by an insatiable curiosity for emerging technologies and a commitment to delivering exceptional user experiences.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              From responsive front-end interfaces to real world problem solving with web designing , I specialize in creating seamless digital experiences that push the boundaries of what's possible on the web. My expertise spans across modern frameworks, cloud technologies, and innovative development practices.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="hologram p-4 rounded-lg text-center">
                <div className="text-2xl font-bold neon-text">Frontend</div>
                <div className="text-sm text-gray-400">HTML,CSS,JAVASCRIPT ,REACT.JS</div>
              </div>
              <div className="hologram p-4 rounded-lg text-center">
                <div className="text-2xl font-bold neon-text">Designing</div>
                <div className="text-sm text-gray-400">UX/UI</div>
              </div>
             
            </div>
          </div>
          
        </div>
        </FadeInSection>
      </div>
    </section>
    {/* Skills Section */}
    <section id="skills" className="py-20 relative z-10 ">
      <div className=" max-w-7xl mx-auto px-6 lg:px-8 ">
        <div className="text-center mb-16">
          <h2 className="orbitron text-5xl font-bold neon-text mb-4">SKILLS</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto" />
        </div>
        <FadeInSection delay={0.4}>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="fade-">
            <h3 className="text-2xl font-bold text-cyan-300 mb-8">Technical Skills</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-semibold">HTML</span>
                  <span className="text-cyan-400">95%</span>
                </div>
                <div className="skill-bar h-3">
                  <div className="skill-progress" style={{width: '95%'}} />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-semibold">CSS & Tailwind</span>
                  <span className="text-cyan-400">92%</span>
                </div>
                <div className="skill-bar h-3">
                  <div className="skill-progress" style={{width: '92%'}} />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-semibold">JavaScript</span>
                  <span className="text-cyan-400">80%</span>
                </div>
                <div className="skill-bar h-3">
                  <div className="skill-progress" style={{width: '80%'}} />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-semibold">React.js</span>
                  <span className="text-cyan-400">80%</span>
                </div>
                <div className="skill-bar h-3">
                  <div className="skill-progress" style={{width: '80%'}} />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-semibold">UX & UI</span>
                  <span className="text-cyan-400">90%</span>
                </div>
                <div className="skill-bar h-3">
                  <div className="skill-progress" style={{width: '90%'}} />
                </div>
              </div>
            </div>
          </div>
          <div className="fade-">
            <h3 className="text-2xl font-bold text-cyan-300 mb-8">Professional Skills</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-semibold">Problem Solving</span>
                  <span className="text-cyan-400">98%</span>
                </div>
                <div className="skill-bar h-3">
                  <div className="skill-progress" style={{width: '98%'}} />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-semibold">Team Leadership</span>
                  <span className="text-cyan-400">87%</span>
                </div>
                <div className="skill-bar h-3">
                  <div className="skill-progress" style={{width: '87%'}} />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-semibold">Project Management</span>
                  <span className="text-cyan-400">91%</span>
                </div>
                <div className="skill-bar h-3">
                  <div className="skill-progress" style={{width: '91%'}} />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-semibold">Client Communication</span>
                  <span className="text-cyan-400">94%</span>
                </div>
                <div className="skill-bar h-3">
                  <div className="skill-progress" style={{width: '94%'}} />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-semibold">Innovation</span>
                  <span className="text-cyan-400">96%</span>
                </div>
                <div className="skill-bar h-3">
                  <div className="skill-progress" style={{width: '96%'}} />
                </div>
              </div>
            </div>
          </div>
        </div>
        </FadeInSection>
      </div>
    </section>
    <Contact/>
    <Footer/>
</div>
  )
}

export default Home
