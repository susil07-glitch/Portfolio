import React from 'react';
import Project from './Project';


const All = () => {
  return (
    <div>
  <div>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>S.sushil- Web-Developer</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
    <style dangerouslySetInnerHTML={{__html: "\n    * {\n      font-family: 'Space Grotesk', sans-serif;\n    }\n\n    .orbitron {\n      font-family: 'Orbitron', monospace;\n    }\n\n    body {\n      background: radial-gradient(ellipse at center, #0f172a 0%, #020617 100%);\n      overflow-x: hidden;\n    }\n\n    /* Matrix Animation */\n    .matrix-code {\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      z-index: -1;\n      opacity: 0.1;\n    }\n\n    /* Cyber Grid */\n    .cyber-grid {\n      background-image: \n        linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),\n        linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px);\n      background-size: 50px 50px;\n      z-index: -1;\n    }\n\n    /* Hologram Effect */\n    .hologram {\n      background: rgba(6, 182, 212, 0.05);\n      border: 1px solid rgba(6, 182, 212, 0.3);\n      backdrop-filter: blur(10px);\n      box-shadow: 0 0 20px rgba(6, 182, 212, 0.2);\n    }\n\n    /* Neon Text */\n    .neon-text {\n      color: #06b6d4;\n      text-shadow: 0 0 10px #06b6d4, 0 0 20px #06b6d4, 0 0 30px #06b6d4;\n    }\n\n    /* Floating Orbs */\n    .floating-orb {\n      position: fixed;\n      background: radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, transparent 70%);\n      border-radius: 50%;\n      animation: float 8s ease-in-out infinite;\n      pointer-events: none;\n      z-index: -1;\n    }\n\n    @keyframes float {\n      0%, 100% { transform: translateY(0px) rotate(0deg); }\n      50% { transform: translateY(-30px) rotate(180deg); }\n    }\n\n    /* Pulse Ring */\n    .pulse-ring {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      border: 2px solid rgba(6, 182, 212, 0.5);\n      border-radius: 50%;\n      animation: pulse 3s ease-out infinite;\n    }\n\n    @keyframes pulse {\n      0% {\n        transform: translate(-50%, -50%) scale(1);\n        opacity: 1;\n      }\n      100% {\n        transform: translate(-50%, -50%) scale(1.5);\n        opacity: 0;\n      }\n    }\n\n    /* Glitch Effect */\n    .glitch {\n      position: relative;\n      animation: glitch 2s linear infinite;\n    }\n\n    @keyframes glitch {\n      2%, 64% { transform: translate(2px, 0) skew(0deg); }\n      4%, 60% { transform: translate(-2px, 0) skew(0deg); }\n      62% { transform: translate(0, 0) skew(5deg); }\n    }\n\n    /* Skill Bars */\n    .skill-bar {\n      background: rgba(6, 182, 212, 0.1);\n      border: 1px solid rgba(6, 182, 212, 0.3);\n      border-radius: 10px;\n      overflow: hidden;\n      position: relative;\n    }\n\n    .skill-progress {\n      background: linear-gradient(90deg, #06b6d4, #0891b2);\n      height: 100%;\n      border-radius: 10px;\n      position: relative;\n      overflow: hidden;\n    }\n\n    .skill-progress::after {\n      content: '';\n      position: absolute;\n      top: 0;\n      left: -100%;\n      width: 100%;\n      height: 100%;\n      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);\n      animation: shimmer 2s infinite;\n    }\n\n    @keyframes shimmer {\n      0% { left: -100%; }\n      100% { left: 100%; }\n    }\n\n    /* Project Cards */\n    .project-card {\n      background: rgba(6, 182, 212, 0.05);\n      border: 1px solid rgba(6, 182, 212, 0.2);\n      backdrop-filter: blur(10px);\n      transition: all 0.3s ease;\n    }\n\n    .project-card:hover {\n      border-color: rgba(6, 182, 212, 0.5);\n      box-shadow: 0 0 30px rgba(6, 182, 212, 0.3);\n      transform: translateY(-10px);\n    }\n\n    /* Typing Animation */\n    @keyframes typing {\n      from { width: 0; }\n      to { width: 100%; }\n    }\n\n    @keyframes blink {\n      50% { border-color: transparent; }\n    }\n\n    .typing {\n      width: 0;\n      animation: typing 3s steps(40, end), blink 0.75s step-end infinite;\n      white-space: nowrap;\n      overflow: hidden;\n      border-right: 3px solid #06b6d4;\n    }\n\n    /* Scroll Animations */\n    .fade-in {\n      opacity: 0;\n      transform: translateY(30px);\n      transition: all 0.6s ease;\n    }\n\n    .fade-in.visible {\n      opacity: 1;\n      transform: translateY(0);\n    }\n\n    /* Contact Form */\n    .cyber-input {\n      background: rgba(6, 182, 212, 0.05);\n      border: 1px solid rgba(6, 182, 212, 0.3);\n      color: white;\n      transition: all 0.3s ease;\n    }\n\n    .cyber-input:focus {\n      outline: none;\n      border-color: #06b6d4;\n      box-shadow: 0 0 20px rgba(6, 182, 212, 0.3);\n    }\n\n    /* Smooth Scrolling */\n    html {\n      scroll-behavior: smooth;\n    }\n  " }} />
    {/* Matrix Background */}
    <div className="matrix-code" id="matrix" />
    {/* Cyber Grid Background */}
    <div className="fixed inset-0 cyber-grid" />
    {/* Floating Orbs */}
    <div class="fixed top-90 left-40">
  <div class="w-32 h-32 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-full opacity-10 blur-md animate-float"></div>
</div>

    <div className="floating-orb w-40 h-40 top-10 left-10" style={{animationDelay: '3s'}} />
    <div className="floating-orb w-50 h-50 top-1/3 right-20" style={{animationDelay: '2s'}} />
    <div className="floating-orb w-30 h-30 bottom-20 left-1/4" style={{animationDelay: '5s'}} />
    <div className="floating-orb w-20 h-20 top-2/3 right-1/3" style={{animationDelay: '1s'}} />
    {/* Navigation */}
    <nav className="fixed top-0 w-full z-50 bg-cyan-700 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          <div className="orbitron text-2xl font-bold neon-text">
            &lt;Sushil.Code/&gt;
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-cyan-400 transition-all duration-300 relative group">HOME<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" /></a>
            <a href="#about" className="hover:text-cyan-400 transition-all duration-300 relative group">ABOUT<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" /></a>
            <a href="#skills" className="hover:text-cyan-400 transition-all duration-300 relative group">SKILLS<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" /></a>
            <a href="./project" className="hover:text-cyan-400 transition-all duration-300 relative group">PROJECTS<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" /></a>
            <a href="#contact" className="hover:text-cyan-400 transition-all duration-300 relative group">CONTACT<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" /></a>
          </div>
          <button id="mobile-menu" className="md:hidden text-2xl">≡</button>
        </div>
      </div>
      <div id="mobile-nav" className="md:hidden hidden hologram">
        <div className="px-6 py-4 space-y-4">
          <a href="#home" className="block hover:text-cyan-400 transition-colors">HOME</a>
          <a href="#about" className="block hover:text-cyan-400 transition-colors">ABOUT</a>
          <a href="#skills" className="block hover:text-cyan-400 transition-colors">SKILLS</a>
          <a href="./project" className="block hover:text-cyan-400 transition-colors">PROJECTS</a>
          <a href="#contact" className="block hover:text-cyan-400 transition-colors">CONTACT</a>
        </div>
      </div>
    </nav>
    {/* Hero Section */}
    <section id="home" className="min-h-screen flex items-center justify-center relative z-10 pt-20">
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
          <div className="text-2xl md:text-3xl text-cyan-200 mb-2">
            <div id="typing-text" className="h-12">Coding the Future, Engineering the Web</div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button className="border-2 border-cyan-400 px-12 py-4 text-xl font-poppins text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105">
              DOWNLOAD CV
            </button>
            <button className="border-2 border-cyan-400 px-12 py-4 text-xl font-poppins text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105">
              VIEW PROJECTS
            </button>
          </div>
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-10 ">
            <div className="border-2 border-cyan-400 p-6 rounded-lg hover:bg-blue-800 hover:text-slate-900 transition-all duration-300 transform hover:scale-105">
              <div className="orbitron text-4xl font-bold neon-text mb-2 ">0.5+</div>
              <div className="text-cyan-200">Years Experience</div>
            </div>
            <div className="border-2 border-cyan-400 p-6 rounded-lg hover:bg-blue-800 hover:text-slate-900 transition-all duration-300 transform hover:scale-105">
              <div className="orbitron text-4xl font-bold neon-text mb-2">7+</div>
              <div className="text-cyan-200">Projects Done</div>
            </div>
            <div className="border-2 border-cyan-400 p-6 rounded-lg hover:bg-blue-800 hover:text-slate-900 transition-all duration-300 transform hover:scale-105">
              <div className="orbitron text-4xl font-bold neon-text mb-2">90%</div>
              <div className="text-cyan-200">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* About Section */}
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="orbitron text-5xl font-bold neon-text mb-4">ABOUT ME</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto" />
        </div>
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
      </div>
    </section>
    {/* Skills Section */}
    <section id="skills" className="py-20 relative z-10 ">
      <div className=" max-w-7xl mx-auto px-6 lg:px-8 ">
        <div className="text-center mb-16">
          <h2 className="orbitron text-5xl font-bold neon-text mb-4">SKILLS</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto" />
        </div>
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
      </div>
    </section>
    {/* Projects Section */}
    <section id="projects" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="orbitron text-5xl font-bold neon-text mb-4">PROJECTS</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="project-card p-6 rounded-lg fade-">
            <div className="relative mb-4 overflow-hidden rounded-lg">
              <img src="/ZEROTH.png" alt="Real-time Collaboration Tool" className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110" />
            </div>
            <h3 className="text-xl font-bold text-cyan-300 mb-2">Mini-DataBase In C</h3>
            <p className="text-gray-400 mb-4">A simple console-based mini database system written in C. It allows users to add, view, search, and delete student records using binary file handling.
</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-cyan-900/50 text-cyan-300 text-sm rounded-full">C-Language</span>
             
            </div>
            <button className="w-full hologram py-2 text-cyan-400 hover:text-white transition-colors">VIEW PROJECT</button>
          </div>
       {/* project 2 */}
           <div className="project-card p-6 rounded-lg fade-">
            <div className="relative mb-4 overflow-hidden rounded-lg">
              <img src="/TICTACTOE.png"alt="Real-time Collaboration Tool" className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110" />
            </div>
            <h3 className="text-xl font-bold text-cyan-300 mb-2">TIC-TAC-TOE GAME </h3>
            <p className="text-gray-400 mb-4">A classic Tic Tac Toe game built using pure HTML, CSS, and JavaScript. Two players take turns marking X and O on a 3×3 grid. The first to get three in a row wins!</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-cyan-900/50 text-cyan-300 text-sm rounded-full">HTML</span>
              <span className="px-3 py-1 bg-cyan-900/50 text-cyan-300 text-sm rounded-full">CSS</span>
              <span className="px-3 py-1 bg-cyan-900/50 text-cyan-300 text-sm rounded-full">JAVASCRIPT</span>
            </div>
            <button className="w-full hologram py-2 text-cyan-400 hover:text-white transition-colors">VIEW PROJECT</button>
          </div>
          {/* project 3 */}
          <div className="project-card p-6 rounded-lg fade-">
            <div className="relative mb-4 overflow-hidden rounded-lg">
              <img src="CONVERTER.png" alt="Real-time Collaboration Tool" className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110" />
            </div>
            <h3 className="text-xl font-bold text-cyan-300 mb-2">CURRENCY-CONVERTER</h3>
            <p className="text-gray-400 mb-4">A sleek and interactive Currency Converter web application built with HTML, CSS, and JavaScript, using a real-time currency exchange API to fetch accurate rates.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-cyan-900/50 text-cyan-300 text-sm rounded-full">HTML</span>
              <span className="px-3 py-1 bg-cyan-900/50 text-cyan-300 text-sm rounded-full">CSS</span>
              <span className="px-3 py-1 bg-cyan-900/50 text-cyan-300 text-sm rounded-full">JAVASCRIPT</span>
            </div>
            <button className="w-full hologram py-2 text-cyan-400 hover:text-white transition-colors">VIEW PROJECT</button>
          </div>
           {/* project 4 */}
           <div className="project-card p-6 rounded-lg fade-">
            <div className="relative mb-4 overflow-hidden rounded-lg">
              <img src="portfolio.png" alt="Real-time Collaboration Tool" className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110" />
            </div>
            <h3 className="text-xl font-bold text-cyan-300 mb-2">Personal-Portfolio</h3>
            <p className="text-gray-400 mb-4">A modern and responsive personal portfolio website built using ReactJS, Tailwind CSS, HTML, and CSS. It showcases projects, skills, and contact information in a clean and interactive design.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-cyan-900/50 text-cyan-300 text-sm rounded-full">HTML</span>
              <span className="px-3 py-1 bg-cyan-900/50 text-cyan-300 text-sm rounded-full">Tailwind CSS</span>
              <span className="px-3 py-1 bg-cyan-900/50 text-cyan-300 text-sm rounded-full">REACT.JS</span>
            </div>
            <button className="w-full hologram py-2 text-cyan-400 hover:text-white transition-colors">VIEW PROJECT</button>
          </div>
        </div>
      </div>
    </section>
    {/* Contact Section */}
    <section id="contact" className=" py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 ">
        <div className="text-center mb-16">
          <h2 className="orbitron text-5xl font-bold neon-text mb-4">CONTACT</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto" />
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="fade-">
            <h3 className="text-2xl font-bold text-cyan-300 mb-8">Get In Touch</h3>
            <p className="text-lg text-gray-300 mb-8">
              Ready to transform your ideas into reality? Let's collaborate and build something extraordinary together. Whether you need a cutting-edge web application, mobile solution, or innovative tech consultation, I'm here to help bring your vision to life.
            </p>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 hologram rounded-full flex items-center justify-center">
                  <span className="text-cyan-400 text-xl">📧</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Email</div>
                  <div className="text-cyan-400">contact=susilsharma7257@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 hologram rounded-full flex items-center justify-center">
                  <span className="text-cyan-400 text-xl">📱</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Phone</div>
                  <div className="text-cyan-400">+9779811725722 </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 hologram rounded-full flex items-center justify-center">
                  <span className="text-cyan-400 text-xl">📍</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Location</div>
                  <div className="text-cyan-400">Koshi zone ,Dharan </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 hologram rounded-full flex items-center justify-center">
                  <span className="text-cyan-400 text-xl">💼</span>
                </div>
                <div>
                  <div className="text-white font-semibold">LinkedIn</div>
                  <div className="text-cyan-400">https://www.linkedin.com/in/sushil-sharma-5389b9321/</div>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="text-xl font-bold text-cyan-300 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 hologram rounded-full flex items-center justify-center text-cyan-400 hover:text-white transition-colors">📘</a>
                <a href="#" className="w-12 h-12 hologram rounded-full flex items-center justify-center text-cyan-400 hover:text-white transition-colors">🐦</a>
                <a href="#" className="w-12 h-12 hologram rounded-full flex items-center justify-center text-cyan-400 hover:text-white transition-colors">📷</a>
                <a href="#" className="w-12 h-12 hologram rounded-full flex items-center justify-center text-cyan-400 hover:text-white transition-colors">💻</a>
              </div>
            </div>
          </div>
          <div className="fade-">
            <form className="hologram p-8 rounded-lg space-y-6">
              <h3 className="text-2xl font-bold text-cyan-300 mb-6">Send Message</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-semibold mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 cyber-input rounded-lg" placeholder="Sushi Kumar  " />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 cyber-input rounded-lg" placeholder="Sharma " />
                </div>
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 cyber-input rounded-lg" placeholder="susil..@example.com" />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">Subject</label>
                <input type="text" className="w-full px-4 py-3 cyber-input rounded-lg" placeholder="Project Discussion" />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">Message</label>
                <textarea rows={5} className="w-full px-4 py-3 cyber-input rounded-lg resize-none" placeholder="Tell me about your project..." defaultValue={""} />
              </div>
              <button type="submit" className="w-full py-4 hologram text-xl font-bold neon-text hover:bg-cyan-900/30 transition-all duration-300 transform hover:scale-105">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    {/* Footer */}
    <footer className="py-12 border-t bg-black border-cyan-900/30 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="orbitron text-2xl font-bold neon-text mb-4">
              &lt;SS.CODE/&gt;
            </div>
            <p className="text-gray-400">
              Crafting digital experiences that push the boundaries of innovation and technology.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-cyan-300 mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Mobile Apps</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold text-cyan-300 mb-4">Technologies</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">HTML</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Css</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Javascript</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">React.js</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold text-cyan-300 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About</a></li>
              <li><a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-cyan-900/30 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 SUSHIL CODE . All rights reserved. | Designed with ❤️ and passion
          </p>
        </div>
      </div>
    </footer>
  </div>
    </div>

  )
}

export default All
