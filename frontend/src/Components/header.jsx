import React, { useState } from 'react';

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleDonateClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300); // Reset after zoom animation
  };

  return (
    <header className="w-full" style={{ backgroundColor: '#002726' }}>
      <div className="flex items-center justify-between px-6 py-4 rounded-full mx-4 shadow-md" style={{ backgroundColor: '#002726' }}>
        
        {/* Logo Section */}
        <div className="flex items-center">
          <img 
            src="/images/header-logo.png" 
            alt="United Ummah Logo" 
            className="h-12 w-auto"
          />
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {["HOME", "ABOUT US", "OUR PROGRAMS", "EVENTS", "COMMUNITY SERVICES", "CONTACT"].map((item, index) => (
            <a
              key={index}
              href="#"
              className="text-[#f0bc7a] hover:opacity-80 transition-opacity text-sm tracking-wide"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Prayer Time and Donate Section */}
        <div className="flex items-center space-x-4">
          {/* Prayer Time Box */}
          <div 
            className="px-4 py-2 rounded-full text-sm flex flex-col justify-center"
            style={{ backgroundColor: '#90BC5D' }}
          >
            <div className="text-white leading-tight">
              <div className="text-xs">Islamic Centre of Canada (ICC)</div>
              <div className="font-semibold text-sm">NEXT PRAYER: FAJR</div>
            </div>
            <div className="flex items-center space-x-2 mt-1">
              {["00", "00", "49"].map((val, i) => (
                <div key={i} className="flex space-x-1">
                  <span className="bg-white text-black px-2 py-1 rounded text-xs font-bold">{val}</span>
                  <span className="text-white text-xs">{["HRS", "MIN", "SEC"][i]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Donate Now Button */}
          <button 
            onClick={handleDonateClick}
            className={`px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 ease-in-out transform ${
              isClicked ? 'scale-110 bg-[#bf8c4b]' : 'bg-[#F1E8DA] text-[#002726] hover:bg-[#bf8c4b] hover:text-white'
            }`}
          >
            DONATE NOW
          </button>
        </div>

        {/* Mobile Menu Button */}
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
