import React from 'react'
import logoImage from '../assets/Nav-repa-logo.png'
import vectorSvg from '../assets/Vector.svg'
import Facebook from '../assets/Facebook.png'
import Instagram from '../assets/Instagram.png'
import YouTube from '../assets/YouTube.png'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="w-full pt-16" style={{ backgroundColor: '#F6F1EA' }}>
      {/* Main Footer Content */}
      <div className="relative py-12 lg:py-16 px-4 sm:px-8 lg:px-[70px] overflow-hidden">
        {/* Decorative Vector SVG - Left Side */}
        <div 
          className="absolute hidden lg:block pointer-events-none"
          style={{
            left: '0',
            top: '0',
            height: '100%',
            transform: 'rotate(3.95deg)',
            transformOrigin: 'top left'
          }}
        >
          <img
            src={vectorSvg}
            alt="Decorative vector"
            className="h-full w-auto"
            style={{
              filter: 'none'
            }}
          />
        </div>

        <div className="max-w-[1780px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Column 1 - Logo */}
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex flex-col items-center mb-6">
                <img
                  src={logoImage}
                  alt="Repa Retreat Logo"
                  className="w-56 h-56 object-contain mb-2"
                />
              </div>
            </div>

            {/* Column 2 - Address & Social */}
            <div>
              <h4 className="text-[#5A5A5A] font-semibold mb-3">Repa Retreat</h4>
              <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4">
                Lamagaun-09, Pharping,<br />
                Dakshinkali Municipality,<br />
                Kathmandu
              </p>
              
              {/* Social Icons */}
              <div className="flex items-center gap-3">
                {/* Facebook */}
                <a 
                  href="#" 
                  className="w-9 h-9 rounded-full flex items-center justify-center hover:border-[#C17F24] hover:text-[#C17F24] transition-colors duration-300"
                >
                  <img src={Facebook} alt="Facebook" className="w-9 h-9" />
                </a>
                {/* Instagram */}
                <a 
                  href="#" 
                  className="w-9 h-9 rounded-full flex items-center justify-center hover:border-[#C17F24] hover:text-[#C17F24] transition-colors duration-300"
                >
                  <img src={Instagram} alt="Instagram" className="w-9 h-9" />
                </a>
                {/* YouTube */}
                <a 
                  href="#" 
                  className="w-9 h-9 rounded-full  flex items-center justify-center hover:border-[#C17F24] hover:text-[#C17F24] transition-colors duration-300"
                >
                 <img src={YouTube} alt="YouTube" className="w-9 h-9" />
                </a>
              </div>
            </div>

            {/* Column 3 - Navigation Links */}
            <div>
              <nav className="flex flex-col gap-3">
                <a href="#" className="text-[#5A5A5A] text-sm hover:text-[#C17F24] transition-colors duration-300">
                  About Us
                </a>
                <a href="#" className="text-[#5A5A5A] text-sm hover:text-[#C17F24] transition-colors duration-300">
                  Accommodation
                </a>
                <a href="#" className="text-[#5A5A5A] text-sm hover:text-[#C17F24] transition-colors duration-300">
                  Repa Programs
                </a>
                <a href="#" className="text-[#5A5A5A] text-sm hover:text-[#C17F24] transition-colors duration-300">
                  Gallery
                </a>
                <a href="#" className="text-[#5A5A5A] text-sm hover:text-[#C17F24] transition-colors duration-300">
                  Workshops
                </a>
                <a href="#" className="text-[#5A5A5A] text-sm hover:text-[#C17F24] transition-colors duration-300">
                  Events
                </a>
                <a href="#" className="text-[#5A5A5A] text-sm hover:text-[#C17F24] transition-colors duration-300">
                  Contact us
                </a>
              </nav>
            </div>

            {/* Column 4 - Contact Info */}
            <div className="relative">
              <h4 
                className="text-2xl text-[#2D2D2D] mb-4"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                Join Repa Retreat
              </h4>
              <div className="flex flex-col gap-2 text-[#5A5A5A] text-sm">
                <p>Phone : +977 984-9229999</p>
                <p>Business Cell : +977 984-9229999</p>
                <p>Email : repa.retreat@gmail.com</p>
              </div>

              {/* Scroll to Top Button */}
              <button 
                onClick={scrollToTop}
                className="absolute -right-4 lg:right-0 top-0 w-12 h-12 bg-[#5A5A5A] rounded-xl flex items-center justify-center hover:bg-[#C17F24] transition-colors duration-300"
              >
                <svg 
                  className="w-5 h-5 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 15l7-7 7 7" 
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#D4C4B0] py-4 px-4 sm:px-8 lg:px-[70px]">
        <div className="max-w-[1780px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-[#5A5A5A] text-xs">
            © Copyright 2025 Repa Retreat
          </p>
          <p className="text-[#5A5A5A] text-xs">
            Website by{' '}
            <a href="#" className="text-[#C17F24] hover:underline">
              Imagio Creations
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

