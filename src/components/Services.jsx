import React from 'react'
import servicesImage from '../assets/Services.jpg'
import service1Image from '../assets/Service-1.jpg'
import service2Image from '../assets/Service-2.jpg'
import service3Image from '../assets/Service-3.jpg'
import logoImage from '../assets/Logo.png'
import Arrow from '../assets/Arrow.png'
import Vector from '../assets/Vector2.png'


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
      <div className="px-4 sm:px-8 lg:px-[70px] lg:pt-64 pb-16 lg:pb-20">
        {/* Services Banner */}
        <div 
          className="relative w-full max-w-[1780px] mx-auto overflow-hidden"
          style={{ 
            borderRadius: '20px',
            height: '600px',
            minHeight: '300px'
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
          <div className="relative  z-10 flex flex-col lg:flex-row items-start justify-between p-8 sm:p-12 lg:p-16 min-h-[500px] lg:min-h-[600px] xl:min-h-[700px]">
            {/* Left Content */}
            <div className="flex flex-col ">
              {/* Section Label */}
              <p className="text-white/80 tracking-[0.2em] text-xs font-medium mb-4">
                OUR SERVICES
              </p>

              {/* Main Heading */}
              <h2 
                className="text-white text-4xl sm:text-5xl lg:text-6xl mb-2 leading-tight"
                style={{ fontFamily: "Canela Trial" }}
              >
                Repa Retreat
              </h2>
              <h3 
                className="text-white text-3xl sm:text-4xl lg:text-5xl italic mb-8 lg:mb-12"
                style={{ fontFamily: "Canela Trial" }}
              >
                Service
              </h3>

              {/* View All Services Button */}
              <button className="flex items-center gap-3 bg-white rounded-full px-6 py-3 hover:bg-gray-100 transition-colors duration-300 w-fit">
                <div className="w-6 h-6  flex items-center justify-center">
                 <img src={Arrow} alt="Arrow" className="w-6 h-6" />
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
                  <div className="w-6 h-6  flex items-center justify-center ">
                    <img src={Arrow} alt="Arrow" className="w-6 h-6" />
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
        <div 
          className="absolute lg:block pointer-events-none"
          style={{
            right: '0',
            top: '0',
            height: '100%',
            transformOrigin: 'center left',
            width: 'auto',
            zIndex: 1
          }}
        >
          <img
            src={Vector}
            alt="Decorative vector"
            className="h-full w-auto"
            style={{ 
              maxWidth: '150px',
              display: 'block'
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-4 max-w-4xl mx-auto">
          {/* Logo Icon */}
          <div className="mb-4" style={{ width: '60px', height: '60px' }}>
            <img
              src={logoImage}
              alt="Repa Retreat Logo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Quote Text */}
          <p 
            className="text-center text-[#3D3D3D] text-xl sm:text-2xl lg:text-[28px] leading-relaxed font-normal"
            style={{ fontFamily: "Canela Trial" }}
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
