import React from 'react'
import logoImage from '../assets/Nav-repa-logo.png'
import menuIcon from '../assets/Menu.png'
import flagImage from '../assets/flag.png'
import joinImage from '../assets/Join.png'

const Navbar = () => {
  return (
    <nav className="relative w-full py-4 px-6 lg:px-12">
      {/* Navbar Content */}
      <div className="relative z-10 flex items-center justify-between w-full">
        {/* Left Section - Menu Button and Nav Links */}
        <div className="flex items-center gap-6">
          {/* Menu Button */}
          <button className="flex items-center gap-2 bg-white rounded-full px-5 py-2.5 hover:bg-gray-50 transition-colors shadow-sm">
            <img src={menuIcon} alt="Menu Icon" className="w-4 h-4" />
            <span className="text-gray-800 font-inter font-normal text-sm tracking-wide">
              MENU
            </span>
          </button>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#rooms"
              className="text-white font-inter font-normal hover:text-white/80 transition-colors text-sm"
            >
              Rooms
            </a>
            <a
              href="#programs"
              className="text-white font-inter font-normal hover:text-white/80 transition-colors text-sm"
            >
              Programs
            </a>
            <a
              href="#workshop"
              className="text-white font-inter font-normal hover:text-white/80 transition-colors text-sm"
            >
              Workshop
            </a>
            <a
              href="#contact"
              className="text-white font-inter font-normal hover:text-white/80 transition-colors text-sm"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Center Section - Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center ">
          <img
            src={logoImage}
            alt="REPA RETREAT Logo"
            className="h-20 lg:h-24 object-contain"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </div>

        {/* Right Section - Language Selector and Join Now */}
        <div className="flex items-center gap-4">
          {/* Language Selector */}
          <div className="hidden sm:flex items-center gap-2 text-white cursor-pointer hover:text-white/80 transition-colors">
            <img
              src={flagImage}
              alt="Flag"
              className=" w-6 h-4 rounded-sm overflow-hidden object-cover"
            />
            <span className="font-sans font-medium text-sm">En</span>
            <svg
              className="w-3 h-3"
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

          {/* Join Now Button */}
          <button className="flex items-center gap-2 bg-white rounded-full px-5 py-2.5 hover:bg-gray-50 transition-colors shadow-sm">
            <img src={joinImage} alt="Join Icon" className="w-4 h-4" />
            <span className="text-gray-800 font-sans font-medium text-sm tracking-wide">
              JOIN NOW
            </span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
