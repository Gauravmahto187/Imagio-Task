import React from 'react'
import blockA from '../assets/Block-A.jpg'
import blockB from '../assets/Block-B.jpg'
import blockC from '../assets/Block-C.jpg'
import reviewImage from '../assets/Review.jpg'
import reviewBg from '../assets/Review-bg.svg'
import logoImage from '../assets/Nav-repa-logo.png'
import upcomingImage from '../assets/Upcoming-program.jpg'
import participationImage from '../assets/Program-participation.jpg'

const Accommodation = () => {
  const blocks = [
    {
      id: 'A',
      image: blockA,
      alt: 'Block Building A - Meditation space'
    },
    {
      id: 'B',
      image: blockB,
      alt: 'Block Building B - Wellness area'
    },
    {
      id: 'C',
      image: blockC,
      alt: 'Block Building C - Outdoor retreat'
    }
  ]

  return (
    <section 
      className="w-full"
      style={{ backgroundColor: '#F5F0E8' }}
    >
      {/* Accommodation Section */}
      <div className="py-16 lg:py-24 px-4 sm:px-8 lg:px-[70px]">
        <div className="max-w-[1780px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            {/* Section Label */}
            <p className="text-[#C17F24] tracking-[0.25em] text-xs font-semibold mb-4">
              ACCOMMODATION
            </p>

            {/* Main Title */}
            <h2 
              className="text-4xl sm:text-5xl lg:text-6xl text-[#2D2D2D]"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              <span className="italic">Your Stay</span>
              {' '}at Repa Retreat
            </h2>
          </div>

          {/* Block Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {blocks.map((block) => (
              <div 
                key={block.id} 
                className="relative overflow-hidden rounded-2xl cursor-pointer group"
                style={{ aspectRatio: '430/672' }}
              >
                {/* Image */}
                <img
                  src={block.image}
                  alt={block.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Text Overlay */}
                <div className="absolute bottom-8 left-0 right-0 text-center text-white">
                  <p 
                    className="text-2xl sm:text-3xl italic mb-1"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                  >
                    Block (Building)
                  </p>
                  <p 
                    className="text-4xl sm:text-5xl font-medium"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                  >
                    {block.id}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Review/Testimonial Section */}
      <div 
        className="relative py-16 lg:py-24 px-4 sm:px-8 lg:px-[70px] overflow-hidden"
        style={{ 
          backgroundImage: `url(${reviewBg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-[1780px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left - Image */}
            <div className="relative w-full lg:w-[45%] max-w-[500px]">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={reviewImage}
                  alt="Meditation retreat participant"
                  className="w-full h-auto object-cover"
                />
                
                {/* Logo Watermark */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <img
                    src={logoImage}
                    alt="Repa Retreat"
                    className="w-6 h-8 object-contain opacity-80"
                  />
                  <div className="text-white/80">
                    <p className="text-[10px] font-medium">Repa</p>
                    <p className="text-[10px] font-medium -mt-0.5">Retreat</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Review Content */}
            <div className="w-full lg:w-[55%] lg:max-w-[550px]">
              <div className="flex items-start gap-4">
                {/* Google Icon */}
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-10 h-10" viewBox="0 0 48 48">
                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
                  </svg>
                </div>

                {/* Review Text */}
                <div className="flex-1">
                  <p 
                    className="text-[#5A5A5A] text-sm italic leading-relaxed mb-4"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                  >
                    Words can hardly describe the incredible time I had at the Repa Retreat. I can warmly recommend this magical place to anyone seeking peace and renewal.
                  </p>
                  <p 
                    className="text-[#5A5A5A] text-sm italic leading-relaxed"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                  >
                    The campus is enchanting, and the entire program is designed with so much thought and love, down to the smallest details. The teachers and staff are truly wonderful people who create an atmosphere of care...
                  </p>
                </div>
              </div>

              {/* Reviewer Info */}
              <div className="mt-8 flex items-start gap-3">
                {/* Closing Quote */}
                <span 
                  className="text-[#C17F24] text-4xl leading-none"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  "
                </span>
                <div>
                  <p 
                    className="text-[#C17F24] text-2xl sm:text-3xl mb-1"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                  >
                    Claire Thompson
                  </p>
                  <p className="text-[#C17F24] text-xs tracking-wider">
                    — READ MORE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <div className="w-full px-4 sm:px-8 lg:px-[70px]">
        <div className="max-w-[1780px] mx-auto">
          <hr className="border-t border-[#D4C4B0]" />
        </div>
      </div>

      {/* Upcoming Programs Section */}
      <div className="relative py-16 lg:py-24 px-4 sm:px-8 lg:px-[70px] overflow-hidden">
        {/* Decorative Wavy Line - Left Side */}
        <svg 
          className="absolute hidden lg:block pointer-events-none"
          style={{
            width: '80px',
            height: '100%',
            top: '0',
            left: '20px'
          }}
          viewBox="0 0 80 400"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M 40 0 
               C 80 50, 0 100, 40 150 
               C 80 200, 0 250, 40 300 
               C 80 350, 20 380, 40 400"
            stroke="url(#upcomingWaveGradient)"
            strokeWidth="30"
            strokeLinecap="round"
            fill="none"
          />
          <defs>
            <linearGradient id="upcomingWaveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#A66D35" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#A66D35" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#A66D35" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>

        <div className="max-w-[1780px] mx-auto">
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
            {/* Left - Title */}
            <div className="lg:w-[20%]">
              <h2 
                className="text-4xl sm:text-5xl text-[#2D2D2D] leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                Upcoming
              </h2>
              <h3 
                className="text-3xl sm:text-4xl text-[#2D2D2D] italic"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                Programs
              </h3>
            </div>

            {/* Center - Image */}
            <div className="lg:w-[35%]">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={upcomingImage}
                  alt="Upcoming meditation programs"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right - Program List */}
            <div className="lg:w-[45%] space-y-8">
              {/* Program 1 */}
              <div>
                <h4 
                  className="text-xl text-[#2D2D2D] mb-1"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  Profound Inner Principle Retreat
                </h4>
                <p className="text-[#C17F24] text-sm mb-3">
                  27 February - 2 March 2025
                </p>
                <div className="flex items-center gap-2 cursor-pointer group">
                  <div className="w-5 h-5 rounded-full bg-[#C17F24] flex items-center justify-center group-hover:bg-[#a66a1c] transition-colors duration-300">
                    <svg 
                      className="w-1.5 h-1.5 text-white ml-0.5" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <span className="text-[#2D2D2D] tracking-[0.15em] text-xs font-semibold group-hover:text-[#C17F24] transition-colors duration-300">
                    VIEW FORM
                  </span>
                </div>
              </div>

              {/* Program 2 */}
              <div>
                <h4 
                  className="text-xl text-[#2D2D2D] mb-1"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  The 1st Repa Buddhist Council
                </h4>
                <p className="text-[#C17F24] text-sm mb-3">
                  3 March - 7 March 2025
                </p>
                <div className="flex items-center gap-2 cursor-pointer group">
                  <div className="w-5 h-5 rounded-full bg-[#C17F24] flex items-center justify-center group-hover:bg-[#a66a1c] transition-colors duration-300">
                    <svg 
                      className="w-1.5 h-1.5 text-white ml-0.5" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <span className="text-[#2D2D2D] tracking-[0.15em] text-xs font-semibold group-hover:text-[#C17F24] transition-colors duration-300">
                    VIEW FORM
                  </span>
                </div>
              </div>

              {/* Program 3 */}
              <div>
                <h4 
                  className="text-xl text-[#2D2D2D] mb-1"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  Offering Mandala of the four<br />preliminary Practices
                </h4>
                <p className="text-[#C17F24] text-sm mb-3">
                  9 March - 11 March 2025
                </p>
                <div className="flex items-center gap-2 cursor-pointer group">
                  <div className="w-5 h-5 rounded-full bg-[#C17F24] flex items-center justify-center group-hover:bg-[#a66a1c] transition-colors duration-300">
                    <svg 
                      className="w-1.5 h-1.5 text-white ml-0.5" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <span className="text-[#2D2D2D] tracking-[0.15em] text-xs font-semibold group-hover:text-[#C17F24] transition-colors duration-300">
                    VIEW FORM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Horizontal Line */}
      <div className="w-full px-4 sm:px-8 lg:px-[70px]">
        <div className="max-w-[1780px] mx-auto">
          <hr className="border-t border-[#D4C4B0]" />
        </div>
      </div>

      {/* Program Participation Section */}
      <div className="relative w-full h-[500px] sm:h-[550px] lg:h-[600px] overflow-hidden">
        {/* Background Image */}
        <img
          src={participationImage}
          alt="Meditation practice with singing bowl"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Content Card - Right Side */}
        <div className="absolute inset-0 flex items-center justify-end px-4 sm:px-8 lg:px-[70px]">
          <div 
            className="w-full max-w-[450px] p-8 sm:p-10 lg:p-12 rounded-2xl"
            style={{ 
              backgroundColor: 'rgba(245, 240, 232, 0.85)',
              backdropFilter: 'blur(10px)'
            }}
          >
            {/* Title */}
            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl text-[#2D2D2D] leading-tight mb-2"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Program
            </h2>
            <h3 
              className="text-2xl sm:text-3xl lg:text-4xl text-[#2D2D2D] italic mb-6"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Participation
            </h3>

            {/* Description */}
            <p className="text-[#5A5A5A] text-sm leading-relaxed mb-8">
              The Repa Program is committed to guiding individuals through a profound spiritual journey with a blend of virtual and in-person experiences. We invite you to join us in this transformative path of growth and enlightenment.
            </p>

            {/* Join Button */}
            <button className="flex items-center gap-3 bg-white rounded-full px-6 py-3 hover:bg-gray-50 transition-colors duration-300 shadow-sm">
              <svg 
                className="w-4 h-4 text-[#2D2D2D]" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" 
                />
              </svg>
              <span className="text-[#2D2D2D] tracking-[0.15em] text-xs font-semibold">
                JOIN REPA RETREAT
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Accommodation
