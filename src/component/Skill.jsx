import React from 'react'
import { useRef } from 'react';
import { motion,useInView } from 'framer-motion';

const Skill = () => {


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
      
    </div>
  )
}

export default Skill
