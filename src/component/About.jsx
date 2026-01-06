import React from 'react'
import { useRef } from 'react';
import { motion,useInView } from 'framer-motion';

const About = () => {

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
    </div>
  )
}

export default About
