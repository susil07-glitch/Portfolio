import React from 'react'

const Footer = () => {
  return (
    <div>
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
  )
}

export default Footer
