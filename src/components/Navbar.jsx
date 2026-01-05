import React, { useState } from 'react'
import logoImage from '../assets/Nav-repa-logo.png'
import menuIcon from '../assets/Menu.png'
import flagImage from '../assets/flag.png'
import joinImage from '../assets/Join.png'

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  return (
    <>
      <nav className="relative w-full py-6 sm:py-8 px-4 sm:px-10 lg:px-16">
        {/* Navbar Content */}
        <div className="relative z-10 flex items-center justify-between w-full">
          {/* Left Section - Menu Button and Nav Links */}
          <div className="flex items-center gap-3 sm:gap-6">
            {/* Menu Button */}
            <button 
              onClick={toggleSidebar}
              className="flex items-center gap-1.5 sm:gap-2 bg-white rounded-full px-3 sm:px-5 py-2 sm:py-2.5 hover:bg-gray-50 transition-colors shadow-sm"
            >
              <img src={menuIcon} alt="Menu Icon" className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="text-gray-800 font-inter font-normal text-xs sm:text-sm tracking-wide hidden sm:inline">
                MENU
              </span>
            </button>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-4 lg:gap-6">
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
          <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20">
            <img
              src={logoImage}
              alt="REPA RETREAT Logo"
              className="h-16 sm:h-20 lg:h-24 object-contain"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </div>

          {/* Right Section - Language Selector and Join Now */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Language Selector */}
            <div className="hidden sm:flex items-center gap-2 text-white cursor-pointer hover:text-white/80 transition-colors">
              <img
                src={flagImage}
                alt="Flag"
                className="w-5 h-3.5 sm:w-6 sm:h-4 rounded-sm overflow-hidden object-cover"
              />
              <span className="font-sans font-medium text-xs sm:text-sm">En</span>
              <svg
                className="w-2.5 h-2.5 sm:w-3 sm:h-3"
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
            <button className="flex items-center gap-1.5 sm:gap-2 bg-white rounded-full px-3 sm:px-5 py-2 sm:py-2.5 hover:bg-gray-50 transition-colors shadow-sm">
              <img src={joinImage} alt="Join Icon" className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="text-gray-800 font-sans font-medium text-xs sm:text-sm tracking-wide hidden sm:inline">
                JOIN NOW
              </span>
            </button>
          </div>
        </div>
        
        {/* Horizontal Line Separator */}
        <div className="absolute bottom-0 left-0 w-full border-b border-white/50"></div>
      </nav>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 transition-opacity duration-300"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <img
              src={logoImage}
              alt="REPA RETREAT Logo"
              className="h-12 object-contain"
            />
            <span className="text-[#C17F24] tracking-[0.2em] text-sm font-semibold">
              REPA RETREAT
            </span>
          </div>
          <button
            onClick={closeSidebar}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Sidebar Navigation Links */}
        <nav className="flex flex-col p-6">
          <a
            href="#about"
            onClick={closeSidebar}
            className="text-[#2D2D2D] font-inter font-medium text-base py-4 border-b border-gray-100 hover:text-[#C17F24] transition-colors"
          >
            About Us
          </a>
          <a
            href="#rooms"
            onClick={closeSidebar}
            className="text-[#2D2D2D] font-inter font-medium text-base py-4 border-b border-gray-100 hover:text-[#C17F24] transition-colors"
          >
            Rooms
          </a>
          <a
            href="#programs"
            onClick={closeSidebar}
            className="text-[#2D2D2D] font-inter font-medium text-base py-4 border-b border-gray-100 hover:text-[#C17F24] transition-colors"
          >
            Programs
          </a>
          <a
            href="#workshop"
            onClick={closeSidebar}
            className="text-[#2D2D2D] font-inter font-medium text-base py-4 border-b border-gray-100 hover:text-[#C17F24] transition-colors"
          >
            Workshop
          </a>
          <a
            href="#accommodation"
            onClick={closeSidebar}
            className="text-[#2D2D2D] font-inter font-medium text-base py-4 border-b border-gray-100 hover:text-[#C17F24] transition-colors"
          >
            Accommodation
          </a>
          <a
            href="#contact"
            onClick={closeSidebar}
            className="text-[#2D2D2D] font-inter font-medium text-base py-4 border-b border-gray-100 hover:text-[#C17F24] transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Sidebar Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200">
          <div className="flex items-center gap-2 text-[#5A5A5A] mb-4">
            <img
              src={flagImage}
              alt="Flag"
              className="w-6 h-4 rounded-sm overflow-hidden object-cover"
            />
            <span className="font-sans font-medium text-sm">English</span>
          </div>
          <button className="w-full flex items-center justify-center gap-2 bg-[#C17F24] text-white rounded-full px-5 py-2.5 hover:bg-[#a66a1c] transition-colors shadow-sm">
            <img src={joinImage} alt="Join Icon" className="w-4 h-4" />
            <span className="font-sans font-medium text-sm tracking-wide">
              JOIN NOW
            </span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Navbar
