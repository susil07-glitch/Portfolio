import React from 'react'
import { Typewriter } from 'react-simple-typewriter';

const Typing = () => {
  return (
    <div>
    <h1 className="text-3xl font-bold text-cyan-400">
      I'm a{' '}
      <span className="text-white">
        <Typewriter
          words={['Developer', 'Designer', 'Freelancer', 'React Lover']}
          loop={0}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
    </h1>
    </div>
  )
}

export default Typing
