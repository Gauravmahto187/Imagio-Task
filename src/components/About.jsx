import React from 'react'
import aboutImage1 from '../assets/About-1.jpg'
import aboutImage2 from '../assets/About-2.jpg'
import aboutImage3 from '../assets/About-3.jpg'
import aboutImage4 from '../assets/About-4.jpg'

const About = () => {
  return (
    <section className="relative w-full bg-white pt-12 sm:pt-16 lg:pt-20 pb-32 sm:pb-40 lg:pb-60 overflow-visible">
      {/* Section Title */}
      <p className="text-center text-[#C17F24] tracking-[0.25em] text-xs font-semibold mb-6 px-4">
        ABOUT REPA RETREAT
      </p>

      {/* Main Content - Centered */}
      <div className="relative max-w-[600px] mx-auto text-center z-20 px-4">
        {/* Main Heading */}
        <h2 
          className="text-3xl sm:text-4xl md:text-5xl text-[#2D2D2D] mb-2 leading-tight"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          Tranquil Sanctuary for
        </h2>
        <h3 
          className="text-2xl sm:text-3xl md:text-4xl text-[#C17F24] mb-6 sm:mb-8 italic"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          Meditation Retreats
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-[500px] mx-auto">
          Repa Retreat is an extraordinary place for meditation, healing and connecting. Its 
          tranquil and secluded location overlooking the Kathmandu valley makes it ideal for 
          both group retreats as well as solitary retreats.
        </p>

        {/* Learn More Button */}
        <div className="flex items-center justify-center gap-3 cursor-pointer group">
          <div className="w-7 h-7 rounded-full border-2 border-[#C17F24] flex items-center justify-center group-hover:bg-[#C17F24] transition-colors duration-300">
            <svg 
              className="w-2.5 h-2.5 text-[#C17F24] group-hover:text-white transition-colors duration-300 ml-0.5" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
          <span className="text-[#2D2D2D] tracking-[0.2em] text-xs font-semibold">
            LEARN MORE
          </span>
        </div>
      </div>

      {/* Desktop Images (xl: 1280px+) - Keep exact sizes */}
      {/* Image 1 - Desktop */}
      <div 
        className="absolute z-10 hidden xl:block overflow-hidden rounded-md"
        style={{ 
          left: '80px',
          top: '200px',
          width: '280px', 
          height: '330px' 
        }}
      >
        <img
          src={aboutImage1}
          alt="Indoor meditation and yoga practice"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Image 2 - Desktop */}
      <div 
        className="absolute z-10 hidden xl:block overflow-hidden rounded-md"
        style={{ 
          right: '80px',
          top: '120px',
          width: '280px', 
          height: '380px' 
        }}
      >
        <img
          src={aboutImage2}
          alt="Outdoor meditation session with prayer flags"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Image 3 - Desktop */}
      <div 
        className="absolute z-10 hidden xl:block overflow-hidden rounded-md"
        style={{ 
          left: '30%',
          bottom: '-180px',
          width: '250px', 
          height: '350px'
        }}
      >
        <img
          src={aboutImage3}
          alt="Meditation with Buddha statue"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Image 4 - Desktop */}
      <div 
        className="absolute z-10 hidden xl:block overflow-hidden rounded-md"
        style={{ 
          right: '30%',
          bottom: '-100px',
          width: '280px', 
          height: '330px'
        }}
      >
        <img
          src={aboutImage4}
          alt="Outdoor group meditation session"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Large Tablet Images (lg: 1024px - 1279px) - ~75% scale */}
      {/* Image 1 - Large Tablet */}
      <div 
        className="absolute z-10 hidden lg:block xl:hidden overflow-hidden rounded-md"
        style={{ 
          left: '40px',
          top: '150px',
          width: '210px', 
          height: '248px' 
        }}
      >
        <img
          src={aboutImage1}
          alt="Indoor meditation and yoga practice"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Image 2 - Large Tablet */}
      <div 
        className="absolute z-10 hidden lg:block xl:hidden overflow-hidden rounded-md"
        style={{ 
          right: '40px',
          top: '90px',
          width: '210px', 
          height: '285px' 
        }}
      >
        <img
          src={aboutImage2}
          alt="Outdoor meditation session with prayer flags"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Image 3 - Large Tablet */}
      <div 
        className="absolute z-10 hidden lg:block xl:hidden overflow-hidden rounded-md"
        style={{ 
          left: '28%',
          bottom: '-135px',
          width: '188px', 
          height: '263px'
        }}
      >
        <img
          src={aboutImage3}
          alt="Meditation with Buddha statue"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Image 4 - Large Tablet */}
      <div 
        className="absolute z-10 hidden lg:block xl:hidden overflow-hidden rounded-md"
        style={{ 
          right: '28%',
          bottom: '-75px',
          width: '210px', 
          height: '248px'
        }}
      >
        <img
          src={aboutImage4}
          alt="Outdoor group meditation session"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Medium Tablet Images (md: 768px - 1023px) - ~60% scale */}
      {/* Image 1 - Medium Tablet */}
      <div 
        className="absolute z-10 hidden md:block lg:hidden overflow-hidden rounded-md"
        style={{ 
          left: '20px',
          top: '120px',
          width: '168px', 
          height: '198px' 
        }}
      >
        <img
          src={aboutImage1}
          alt="Indoor meditation and yoga practice"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Image 2 - Medium Tablet */}
      <div 
        className="absolute z-10 hidden md:block lg:hidden overflow-hidden rounded-md"
        style={{ 
          right: '20px',
          top: '70px',
          width: '168px', 
          height: '228px' 
        }}
      >
        <img
          src={aboutImage2}
          alt="Outdoor meditation session with prayer flags"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Image 3 - Medium Tablet */}
      <div 
        className="absolute z-10 hidden md:block lg:hidden overflow-hidden rounded-md"
        style={{ 
          left: '25%',
          bottom: '-108px',
          width: '150px', 
          height: '210px'
        }}
      >
        <img
          src={aboutImage3}
          alt="Meditation with Buddha statue"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Image 4 - Medium Tablet */}
      <div 
        className="absolute z-10 hidden md:block lg:hidden overflow-hidden rounded-md"
        style={{ 
          right: '25%',
          bottom: '-60px',
          width: '168px', 
          height: '198px'
        }}
      >
        <img
          src={aboutImage4}
          alt="Outdoor group meditation session"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Mobile/Small Tablet Images Grid (below md) */}
      <div className="md:hidden mt-12 px-4">
        <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
          <div className="rounded-md overflow-hidden shadow-md">
            <img 
              src={aboutImage1} 
              alt="Indoor meditation" 
              className="w-full h-48 sm:h-56 object-cover" 
            />
          </div>
          <div className="rounded-md overflow-hidden shadow-md">
            <img 
              src={aboutImage2} 
              alt="Outdoor meditation" 
              className="w-full h-48 sm:h-56 object-cover" 
            />
          </div>
          <div className="rounded-md overflow-hidden shadow-md">
            <img 
              src={aboutImage3} 
              alt="Buddha meditation" 
              className="w-full h-56 sm:h-64 object-cover" 
            />
          </div>
          <div className="rounded-md overflow-hidden shadow-md">
            <img 
              src={aboutImage4} 
              alt="Group meditation" 
              className="w-full h-56 sm:h-64 object-cover" 
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
