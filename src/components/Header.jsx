import React from 'react'
import Navbar from './Navbar'
import headerImage from '../assets/Header.jpg'

const Header = () => {
  return (
    <header className="relative w-full h-screen max-h-[1080px] mx-auto overflow-hidden">
      {/* Background Image */}
      <img
        src={headerImage}
        alt="Mountain landscape with person in yoga pose"
        className="absolute inset-0 w-full h-full object-cover opacity-85"
      />

      {/* Navbar positioned at top */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Navbar />
      </div>

      {/* Text Overlay - Right side */}
      <div className="absolute right-12 top-1/2 transform -translate-y-1/2 z-10 max-w-xl">
        <p 
          className="text-white text-4xl md:text-5xl lg:text-6xl font-medium mb-6 italic"
          style={{ fontFamily: "'Canela Trial', serif" }}
        >
          Embrace your
          <br />
          Deep spiritual journey
        </p>
        <p className="text-white/90 text-base md:text-lg leading-relaxed font-extralight"
          style={{ fontFamily: "Inter" }}
        >
          In the hills where the Great Lotus Born was enlightened, where
          <br />
          beneath lies the Kathmandu valley
        </p>
      </div>

      {/* Scroll Indicator - Bottom center */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </header>
  )
}

export default Header
