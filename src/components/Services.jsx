import React from 'react'
import servicesImage from '../assets/Services.jpg'
import service1Image from '../assets/Service-1.jpg'
import service2Image from '../assets/Service-2.jpg'
import service3Image from '../assets/Service-3.jpg'
import logoImage from '../assets/Nav-repa-logo.png'

const Services = () => {
  const programs = [
    {
      id: 1,
      image: service1Image,
      title: 'Repa Program in',
      language: 'Nepali Language',
      alt: 'Monks in meditation session'
    },
    {
      id: 2,
      image: service2Image,
      title: 'Repa Program',
      language: 'Chinese Language',
      alt: 'Chinese meditation group'
    },
    {
      id: 3,
      image: service3Image,
      title: 'Repa Program',
      language: 'English Language',
      alt: 'English meditation session'
    }
  ]

  return (
    <section className="w-full">
      {/* Services Banner & Programs */}
      <div className="px-4 sm:px-8 lg:px-[70px] py-16 lg:py-20">
        {/* Services Banner */}
        <div 
          className="relative w-full max-w-[1780px] mx-auto overflow-hidden"
          style={{ 
            borderRadius: '20px',
            height: 'auto',
            minHeight: '500px'
          }}
        >
          {/* Background Image */}
          <img
            src={servicesImage}
            alt="Meditation retreat services"
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Content Container */}
          <div className="relative z-10 flex flex-col lg:flex-row items-start justify-between p-8 sm:p-12 lg:p-16 min-h-[500px] lg:min-h-[600px] xl:min-h-[700px]">
            {/* Left Content */}
            <div className="flex flex-col">
              {/* Section Label */}
              <p className="text-white/80 tracking-[0.2em] text-xs font-medium mb-4">
                OUR SERVICES
              </p>

              {/* Main Heading */}
              <h2 
                className="text-white text-4xl sm:text-5xl lg:text-6xl mb-2 leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                Repa Retreat
              </h2>
              <h3 
                className="text-white text-3xl sm:text-4xl lg:text-5xl italic mb-8 lg:mb-12"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                Service
              </h3>

              {/* View All Services Button */}
              <button className="flex items-center gap-3 bg-white rounded-full px-6 py-3 hover:bg-gray-100 transition-colors duration-300 w-fit">
                <div className="w-6 h-6 rounded-full bg-[#C17F24] flex items-center justify-center">
                  <svg 
                    className="w-2.5 h-2.5 text-white ml-0.5" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <span className="text-[#2D2D2D] tracking-[0.15em] text-xs font-semibold">
                  VIEW ALL SERVICES
                </span>
              </button>
            </div>

            {/* Right Content - Description */}
            <div className="mt-8 lg:mt-8 lg:max-w-md lg:text-right">
              <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                We invite you to join us in this transformative path of growth 
                and enlightenment.
              </p>
            </div>
          </div>
        </div>

        {/* Program Cards */}
        <div className="w-full max-w-[1780px] mx-auto mt-12 lg:mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {programs.map((program) => (
              <div key={program.id} className="flex flex-col">
                {/* Program Image */}
                <div className="overflow-hidden rounded-lg mb-4">
                  <img
                    src={program.image}
                    alt={program.alt}
                    className="w-full h-[300px] sm:h-[350px] lg:h-[400px] object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Program Title */}
                <h4 
                  className="text-xl sm:text-2xl text-[#2D2D2D] mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  {program.title}{' '}
                  <span className="italic text-[#C17F24]">{program.language}</span>
                </h4>

                {/* Learn More Button */}
                <div className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-6 h-6 rounded-full bg-[#C17F24] flex items-center justify-center group-hover:bg-[#a66a1c] transition-colors duration-300">
                    <svg 
                      className="w-2 h-2 text-white ml-0.5" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <span className="text-[#2D2D2D] tracking-[0.15em] text-xs font-semibold group-hover:text-[#C17F24] transition-colors duration-300">
                    LEARN MORE
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Inspirational Quote Section */}
      <div 
        className="relative w-full overflow-hidden py-12 lg:py-16"
        style={{ backgroundColor: '#F5F0E8' }}
      >
        {/* Decorative Wavy Line - Right Side */}
        <svg 
          className="absolute hidden lg:block pointer-events-none"
          style={{
            width: '120px',
            height: '100%',
            top: '0',
            right: '40px'
          }}
          viewBox="0 0 120 400"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M 60 0 
               C 100 50, 20 100, 60 150 
               C 100 200, 20 250, 60 300 
               C 100 350, 40 380, 60 400"
            stroke="url(#waveGradient)"
            strokeWidth="35"
            strokeLinecap="round"
            fill="none"
          />
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#A66D35" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#A66D35" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#A66D35" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-4 max-w-4xl mx-auto">
          {/* Logo Icon */}
          <div className="mb-6" style={{ width: '50px', height: '62px' }}>
            <img
              src={logoImage}
              alt="Repa Retreat Logo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Quote Text */}
          <p 
            className="text-center text-[#3D3D3D] text-xl sm:text-2xl lg:text-[28px] leading-relaxed italic"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Immerse yourself in your spiritual journey and 
            experience the supportive energy of the hills and 
            caves blessed by many masters
          </p>
        </div>
      </div>
    </section>
  )
}

export default Services
