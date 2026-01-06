import React from 'react'
import { useEffect,useState,useRef } from 'react';
import { motion,useInView } from 'framer-motion';

const HeroSection = () => {

    // display the text in writing style //


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
    

 // fade motion //

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
  return (
    <div>
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
            <TypingText  className="flex flex-col md:flex-row gap-6 justify-center items-center" text="Frontend Developer " speed={100}/></div>
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
    </div>
  )
}

export default HeroSection
