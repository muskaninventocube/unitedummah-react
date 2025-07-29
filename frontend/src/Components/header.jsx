import React, { useState } from 'react';

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleDonateClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300); // Reset animation
  };

  return (
    <header className="w-full" style={{ backgroundColor: '#002726' }}>
      <div className="flex items-center justify-between px-6 py-4 rounded-full mx-4 shadow-md" style={{ backgroundColor: '#002726' }}>
        
        {/* Logo Section */}
        <div className="flex items-center">
          <img 
            src="/images/header-logo.png" 
            alt="United Ummah Logo" 
            className="h-16 w-auto" // increased height for bigger logo
          />
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {["HOME", "ABOUT US", "OUR PROGRAMS", "EVENTS", "COMMUNITY SERVICES", "CONTACT"].map((item, index) => (
            <a
              key={index}
              href="#"
              className="text-[#ffffff] hover:opacity-80 transition-opacity text-sm tracking-wide"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Prayer + Donate Button */}
        <div className="flex items-center bg-[#90BC5D] rounded-full pl-5 pr-2 py-2 space-x-4">
          {/* Prayer Info */}
          <div className="text-white leading-tight">
            <div className="text-xs">Islamic Centre of Canada (ICC)</div>
            <div className="font-semibold text-sm">NEXT PRAYER: FAJR</div>
            <div className="flex items-center space-x-2 mt-1">
              {["00", "00", "49"].map((val, i) => (
                <div key={i} className="flex space-x-1">
                  <span className="bg-white text-black px-2 py-1 rounded text-xs font-bold">{val}</span>
                  <span className="text-white text-xs">{["HRS", "MIN", "SEC"][i]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Donate Button */}
          <button 
            onClick={handleDonateClick}
            className={`ml-2 h-full px-6 py-5 font-semibold text-sm tracking-wide transition-all duration-300 ease-in-out transform rounded-full ${
              isClicked
                ? 'scale-105 bg-[#bf8c4b] text-white'
                : 'bg-[#f1e8da] text-[#002726] hover:bg-[#bf8c4b] hover:text-white'
            }`}
          >
            DONATE NOW
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
