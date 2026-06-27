import React from "react";
import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  // display the text in writing style //

  const TypingText = ({ text, speed =2000 }) => {
    const [displayedLetters, setDisplayedLetters] = useState([]);

    useEffect(() => {
      let index = 0;
      const interval = setInterval(() => {
        if (index < text.length) {
          const currentChar = text.charAt(index);
          setDisplayedLetters((prev) => [...prev, currentChar]);
          index++;
        } else {
          clearInterval(interval);
        }
      }, speed);

      return () => clearInterval(interval);
    }, [text, speed]);




    return (
      <h1 className="text-3xl font-bold flex flex-wrap">
        {displayedLetters.map((char, index) => (
          <span key={index} className={`${setDisplayedLetters}`}>
            {char === " " ? "\u00A0" : char}
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
      <section className="min-h-screen flex items-center justify-center relative z-10 pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className=" text-center space-y-8">
            <div className="frontline flex flex-col-reverse lg:flex-row items-center justify-between gap-12 ">
              <div className="intro mt-10 lg:mt-20 w-full lg:w-1/2 text-center lg:text-left">
                <div className="orbitron text-4xl sm:text-4xl lg:text-5xl font-cursive mb-4">
                  <span className="neon-text">Hi 👋 , i'm Sushil</span>
                </div>

                {/*Typing text animation */}
                <div className="text-xl sm:text-2xl lg:text-3xl text-cyan-500 mb-1">
                  <div className="h-13 font-bold">
                    <Typewriter
                      words={[
                        "Frontend Developer ..... ",
                        "Tech Innovator ...... ",
                        "React- Developer .....",

                      ]}
                      loop={4}
                      cursor
                      cursorStyle="|"
                      typeSpeed={200}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </div>
                </div>


                <div className="aboutIntro text-base sm:text-lg lg:text-xl font-light text-white leading-8">
                  A Passionate Frontend Developer who enjoys building clean and
                  intuitive web applications.
                  <br /> I love working with React and modern UI tools to create
                  experiences that users actually enjoy using.
                </div>
                <FadeInSection delay={0.8}>
                  <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center lg:justify-start items-center mt-10">
                    <a href="sushilcv.pdf">
                      <button
                        type="download"
                        className="border-2 border-cyan-400 px-8 sm:px-10 lg:px-12 py-3 sm:py-4 text-base sm:text-lg lg:text-xl font-poppins text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
                      >
                        DOWNLOAD CV
                      </button>
                    </a>
                    <button className="border-2 border-cyan-400 px-8 sm:px-10 lg:px-12 py-3 sm:py-4 text-base sm:text-lg lg:text-xl font-poppins text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105">
                      VIEW PROJECTS
                    </button>
                  </div>
                </FadeInSection>
              </div>

              {/* image section*/}

              <FadeInSection delay={0.6}>
                <div className="relative mt-10 lg:mt-0 flex justify-center w-full ">
                  <div className="pulse-ring w-60 h-60 sm:w-72 sm:h-72 lg:w-100 lg:h-100" />
                  <div
                    className="pulse-ring w-60 h-60 sm:w-72 sm:h-72 lg:w-100 lg:h-100"
                    style={{ animationDelay: "2s" }}
                  />
                       <div className=" -z-30 w-60 h-60 sm:w-72 sm:h-72 lg:w-100 lg:h-100 rounded-full mx-auto  overflow-hidden">
                       <img
                       src="/susil22.png"
                       alt="ss.code"
                       className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </FadeInSection>
            </div>


            {/* Stats */}
            <FadeInSection delay={0.3}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 lg:mt-32">
                <div className="border-2 border-cyan-400 p-5 sm:p-6 rounded-lg hover:bg-blue-800 transition-all duration-300 transform hover:scale-105">
                  <div className="orbitron text-2xl font-bold neon-text mb-2 ">
                    0.5+
                  </div>
                  <div className="text-cyan-200">Years Experience</div>
                </div>
                <div className="border-2 border-cyan-400 p-6 rounded-lg hover:bg-blue-800 hover:text-slate-900 transition-all duration-300 transform hover:scale-105">
                  <div className="orbitron text-xl sm:text-2xl lg:text-3xl font-bold">
                    7+
                  </div>
                  <div className="text-cyan-200">Projects Done</div>
                </div>
                <div className="border-2 border-cyan-400 p-6 rounded-lg hover:bg-blue-800 hover:text-slate-900 transition-all duration-300 transform hover:scale-105">
                  <div className="orbitron text-2xl font-bold neon-text mb-2">
                    90%
                  </div>
                  <div className="text-cyan-200">Success Rate</div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
