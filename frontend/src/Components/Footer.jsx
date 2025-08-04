import React from 'react';

const Footer = () => {
  return (
    <footer className="text-white bg-gradient-to-b from-[#002726] to-[#0F201E] px-6 py-10 w-full">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Left Side: Logo + Copyright */}
        <div className="flex flex-col items-start gap-4">
          <img src="/images/footer-logo.png" alt="Ummah Logo" className="h-20 w-auto" />
          <p className="text-xs mt-12">COPYRIGHT 2018 — UNITED UMMAH</p>
        </div>

        {/* Right Side: 3 tightly packed columns */}
        <div className="flex flex-col sm:flex-row sm:space-x-0 gap-4 sm:gap-0">
          {/* Column 1: Chat Icon + Address + Buttons */}
          <div className="flex flex-col items-start gap-4 text-sm pr-4">
            <img src="/images/chat.png" alt="Chat Icon" className="w-10 h-10" />
            <div className="leading-relaxed">
              <p>2200 South Sheridan Way</p>
              <p>Mississauga, ON L5J 2M4</p>
              <p>905.403.8406</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="px-4 py-2 text-black bg-[#f0e4cf] font-semibold">
                CONTACT US
              </button>
              <button className="px-4 py-2 bg-black text-white text-xs">
                FUNERAL LINE: 1-905-403-ARAHZA
              </button>
            </div>
          </div>

          {/* Column 2: Mosque Icon + Location Text */}
          <div className="flex flex-col items-start gap-4 text-sm px-4">
            <img src="/images/mos.png" alt="Mosque Icon" className="w-10 h-10" />
            <div className="leading-relaxed">
              <p>Mississauga - ICC</p>
              <p>Toronto - Jami Mosque</p>
              <p>Yellowknife - ICYK</p>
              <p>Youth Hub - ICC</p>
            </div>
          </div>

          {/* Column 3: Social Icons stacked vertically */}
          <div className="flex flex-col items-start gap-5 text-sm pl-4">
            <img src="/images/fb.png" alt="Facebook" className="w-6 h-6" />
            <img src="/images/insta.png" alt="Instagram" className="w-6 h-6" />
            <img src="/images/yt.png" alt="YouTube" className="w-6 h-6" />
            <img src="/images/twitter.png" alt="Twitter" className="w-6 h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
