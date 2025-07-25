import React from 'react'
import { Link } from 'react-router'
import Home from './Home'
import Project from './Project'
import Contact from './Contact'
import { useState } from 'react'

const Navbar = () => {

   const[isOpen,setIsOpen]=useState(false);

  return (
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
      <div className="max-w-8xl mx-auto px-5 lg:px-6">
        <div className="flex items-center justify-between h-12">
        <a href="#"><button> <div className="orbitron text-2xl font-bold black-text">
            &lt;SS.CODE/&gt;
          </div>
          </button></a>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-cyan-400 transition-all duration-300 relative group">HOME<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" /></a>
            <a href="#about" className="hover:text-cyan-400 transition-all duration-300 relative group">ABOUT<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" /></a>
            <a href="#skills" className="hover:text-cyan-400 transition-all duration-300 relative group">SKILLS<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" /></a>
            <Link to="/project" className="hover:text-cyan-400 transition-all duration-300 relative group">PROJECTS<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" /></Link>
            <Link to="/contact" className="hover:text-cyan-400 transition-all duration-300 relative group">CONTACT<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" /></Link>
          </div>       
              <button onClick={() => setIsOpen(isOpen)}  id="mobile-menu" className="md:hidden text-3xl">≡</button>
        </div>
      </div>
      <div  id="mobile-nav" className="md:hidden hidden hologram">
        <div className="px-6 py-4 space-y-4">
          <Link to="/" className="block hover:text-cyan-400 transition-colors">HOME</Link>
          <a href="#about" className="block hover:text-cyan-400 transition-colors">ABOUT</a>
          <a href="#skills" className="block hover:text-cyan-400 transition-colors">SKILLS</a>
          <a href="/project" className="block hover:text-cyan-400 transition-colors">PROJECTS</a>
          <a href="#contact" className="block hover:text-cyan-400 transition-colors">CONTACT</a>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
