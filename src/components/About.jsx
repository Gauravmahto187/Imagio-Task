import React from 'react'
import aboutImage1 from '../assets/About-1.jpg'
import aboutImage2 from '../assets/About-2.jpg'
import aboutImage3 from '../assets/About-3.jpg'
import aboutImage4 from '../assets/About-4.jpg'

const About = () => {
  return (
    <section className="relative w-full bg-white pt-16 lg:pt-20 pb-40 lg:pb-60 overflow-visible">
      {/* Section Title */}
      <p className="text-center text-[#C17F24] tracking-[0.25em] text-xs font-semibold mb-6">
        ABOUT REPA RETREAT
      </p>

      {/* Main Content - Centered */}
      <div className="relative max-w-[600px] mx-auto text-center z-20 px-4">
        {/* Main Heading */}
        <h2 
          className="text-4xl md:text-5xl text-[#2D2D2D] mb-2 leading-tight"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          Tranquil Sanctuary for
        </h2>
        <h3 
          className="text-3xl md:text-4xl text-[#C17F24] mb-8 italic"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          Meditation Retreats
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-[500px] mx-auto">
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

      {/* Desktop Images */}
      {/* Image 1 - Left Side (Indoor yoga scene) - 392x459 */}
      <div 
        className="absolute left-0 top-[100px] z-10 hidden xl:block overflow-hidden"
        style={{ width: '280px', height: '350px' }}
      >
        <img
          src={aboutImage1}
          alt="Indoor meditation and yoga practice"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Image 2 - Right Side (Outdoor meditation with prayer flags) - 392x521 */}
      <div 
        className="absolute right-0 top-[80px] z-10 hidden xl:block overflow-hidden rounded-l-3xl"
        style={{ width: '300px', height: '380px' }}
      >
        <img
          src={aboutImage2}
          alt="Outdoor meditation session with prayer flags"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Image 3 - Bottom Center-Left (Buddha statue meditation) - rounded top */}
      <div 
        className="absolute z-10 hidden xl:block overflow-hidden"
        style={{ 
          width: '220px', 
          height: '320px',
          left: '28%',
          bottom: '-80px',
          borderRadius: '110px 110px 8px 8px'
        }}
      >
        <img
          src={aboutImage3}
          alt="Meditation with Buddha statue"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Image 4 - Bottom Center-Right (Outdoor group meditation) */}
      <div 
        className="absolute z-10 hidden xl:block overflow-hidden rounded-lg"
        style={{ 
          width: '250px', 
          height: '300px',
          right: '22%',
          bottom: '-50px'
        }}
      >
        <img
          src={aboutImage4}
          alt="Outdoor group meditation session"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Tablet Images (lg screens) */}
      <div 
        className="absolute left-0 top-[100px] z-10 hidden lg:block xl:hidden overflow-hidden"
        style={{ width: '200px', height: '260px' }}
      >
        <img src={aboutImage1} alt="Indoor meditation" className="w-full h-full object-cover" />
      </div>
      <div 
        className="absolute right-0 top-[80px] z-10 hidden lg:block xl:hidden overflow-hidden rounded-l-2xl"
        style={{ width: '220px', height: '290px' }}
      >
        <img src={aboutImage2} alt="Outdoor meditation" className="w-full h-full object-cover" />
      </div>
      <div 
        className="absolute z-10 hidden lg:block xl:hidden overflow-hidden"
        style={{ width: '160px', height: '240px', left: '25%', bottom: '-60px', borderRadius: '80px 80px 8px 8px' }}
      >
        <img src={aboutImage3} alt="Buddha meditation" className="w-full h-full object-cover" />
      </div>
      <div 
        className="absolute z-10 hidden lg:block xl:hidden overflow-hidden rounded-lg"
        style={{ width: '180px', height: '220px', right: '18%', bottom: '-40px' }}
      >
        <img src={aboutImage4} alt="Group meditation" className="w-full h-full object-cover" />
      </div>

      {/* Mobile/Small Tablet Images Grid */}
      <div className="lg:hidden mt-12 px-4">
        <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
          <div className="rounded-lg overflow-hidden">
            <img src={aboutImage1} alt="Indoor meditation" className="w-full h-48 object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img src={aboutImage2} alt="Outdoor meditation" className="w-full h-48 object-cover" />
          </div>
          <div className="rounded-t-full rounded-b-lg overflow-hidden">
            <img src={aboutImage3} alt="Buddha meditation" className="w-full h-56 object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img src={aboutImage4} alt="Group meditation" className="w-full h-56 object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
