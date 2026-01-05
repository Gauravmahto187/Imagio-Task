import React from 'react'
import programImage1 from '../assets/program-1.jpg'
import programImage2 from '../assets/program-2.jpg'
import logoImage from '../assets/Nav-repa-logo.png'
import Arrow from '../assets/Arrow.png'

const Program = () => {
  return (
    <section className="w-full bg-white py-16 lg:py-24 px-4 sm:px-8 lg:px-[70px]">
      <div className="max-w-[1780px] mx-auto">
        {/* Top Section - Header & Description */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-12 lg:mb-16">
          {/* Left - Title */}
          <div className="mb-8 lg:mb-0">
            {/* Section Label */}
            <p className="text-[#C17F24] tracking-[0.25em] text-xs font-semibold mb-4">
              REPA PROGRAM
            </p>

            {/* Main Heading */}
            <h2 
              className="text-4xl sm:text-5xl lg:text-6xl text-[#2D2D2D] leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              A Comprehensive
            </h2>
            <h3 
              className="text-3xl sm:text-4xl lg:text-5xl text-[#C17F24] italic"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Spiritual Journey
            </h3>
          </div>

          {/* Right - Description */}
          <div className="lg:max-w-md lg:pt-8">
            <p className="text-[#5A5A5A] text-sm leading-relaxed">
              The Repa Program is divided into two main phases: preliminary and advanced practices. The preliminary phase lasts 1 year and 4 months, while the entire program spans 7 years.
            </p>
          </div>
        </div>

        {/* Program 1 - Preliminary Practices (Card on Left, Image on Right) */}
        <div className="relative mb-16 lg:mb-24">
          {/* Main Image */}
          <div className="lg:ml-[200px] relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={programImage1}
                alt="Monks in meditation practice"
                className="w-full h-[400px] sm:h-[500px] lg:h-[550px] object-cover"
              />
            </div>
          </div>

          {/* Overlay Card - Left */}
          <div 
            className="lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 
                       bg-[#F8F5F0] p-8 lg:p-10 rounded-lg
                       mt-6 lg:mt-0 lg:w-[350px]
                       shadow-lg"
          >
            {/* Card Title */}
            <h4 
              className="text-2xl sm:text-3xl text-[#2D2D2D] mb-4 font-extrabold"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Preliminary{' '}
              <span className="italic text-gray-500">Practices</span>
            </h4>

            {/* Card Description */}
            <p className="text-[#5A5A5A] text-sm leading-relaxed mb-6">
              The Repa Program is divided into two main phases: preliminary and advanced practices. The preliminary phase lasts 1 year and 4 months, while the entire program spans 7 years.
            </p>

            {/* Learn More Button */}
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="w-6 h-6 rounded-full bg-[#C17F24] flex items-center justify-center group-hover:bg-[#a66a1c] transition-colors duration-300">
                <img src={Arrow} alt="Arrow" className="w-6 h-6" />
              </div>
              <span className="text-[#2D2D2D] tracking-[0.15em] text-xs font-semibold group-hover:text-[#C17F24] transition-colors duration-300">
                LEARN MORE
              </span>
            </div>
          </div>
        </div>

        {/* Program 2 - Advanced Practices (Image on Left, Card on Right) */}
        <div className="relative">
          {/* Main Image */}
          <div className="lg:mr-[200px] relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={programImage2}
                alt="Advanced meditation teachings"
                className="w-full h-[400px] sm:h-[500px] lg:h-[550px] object-cover"
              />
              
              {/* Logo Watermark - Bottom Left of Image */}
              <div className="absolute bottom-6 left-6 flex items-center gap-2">
                <img
                  src={logoImage}
                  alt="Repa Retreat"
                  className="w-8 h-10 object-contain opacity-80"
                />
                <div className="text-white/80">
                  <p className="text-xs font-medium">Repa</p>
                  <p className="text-xs font-medium -mt-1">Retreat</p>
                </div>
              </div>
            </div>
          </div>

          {/* Overlay Card - Right */}
          <div 
            className="lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 
                       bg-[#F8F5F0] p-8 lg:p-10 rounded-lg
                       mt-6 lg:mt-0 lg:w-[350px]
                       shadow-lg"
          >
            {/* Card Title */}
            <h4 
              className="text-2xl sm:text-3xl text-[#2D2D2D] mb-4 font-extrabold"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Advanced{' '}
              <span className="italic text-gray-500">Practices</span>
            </h4>

            {/* Card Description */}
            <p className="text-[#5A5A5A] text-sm leading-relaxed mb-6">
              The Repa Program is divided into two main phases: preliminary and advanced practices. The preliminary phase lasts 1 year and 4 months, while the entire program spans 7 years.
            </p>

            {/* Learn More Button */}
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="w-6 h-6 rounded-full bg-[#C17F24] flex items-center justify-center group-hover:bg-[#a66a1c] transition-colors duration-300">
              <img src={Arrow} alt="Arrow" className="w-6 h-6" />
              </div>
              <span className="text-[#2D2D2D] tracking-[0.15em] text-xs font-semibold group-hover:text-[#C17F24] transition-colors duration-300">
                LEARN MORE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Program
