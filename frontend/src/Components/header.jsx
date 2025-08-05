import React, { useEffect, useState } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [nextPrayer, setNextPrayer] = useState({ name: '', hrs: '00', mins: '00', secs: '00' });
  const [prayerTimes, setPrayerTimes] = useState([]);

  const handleDonateClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300);
  };

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      try {
        const today = dayjs().format('DD-MM-YYYY');
        const response = await axios.get(`https://api.aladhan.com/v1/timingsByCity/${today}?city=Karachi&country=Pakistan&method=2`);
        const timings = response.data.data.timings;

        const formatted = [
          { name: 'Fajr', time: timings.Fajr },
          { name: 'Dhuhr', time: timings.Dhuhr },
          { name: 'Asr', time: timings.Asr },
          { name: 'Maghrib', time: timings.Maghrib },
          { name: 'Isha', time: timings.Isha },
        ];

        setPrayerTimes(formatted);
      } catch (error) {
        console.error('Failed to fetch prayer times:', error);
      }
    };

    fetchPrayerTimes();
  }, []);

  useEffect(() => {
    const updateCountdown = () => {
      if (!prayerTimes.length) return;

      const now = dayjs();
      let next = null;

      for (let i = 0; i < prayerTimes.length; i++) {
        const [hr, min] = prayerTimes[i].time.split(':');
        const prayerTime = dayjs().hour(Number(hr)).minute(Number(min)).second(0);

        if (now.isBefore(prayerTime)) {
          next = { name: prayerTimes[i].name, time: prayerTime };
          break;
        }
      }

      if (!next) {
        const [fajrHr, fajrMin] = prayerTimes[0].time.split(':');
        const fajrTomorrow = dayjs().add(1, 'day').hour(Number(fajrHr)).minute(Number(fajrMin)).second(0);
        next = { name: prayerTimes[0].name, time: fajrTomorrow };
      }

      const diffSec = next.time.diff(now, 'second');
      const hrs = String(Math.floor(diffSec / 3600)).padStart(2, '0');
      const mins = String(Math.floor((diffSec % 3600) / 60)).padStart(2, '0');
      const secs = String(diffSec % 60).padStart(2, '0');

      setNextPrayer({ name: next.name, hrs, mins, secs });
    };

    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [prayerTimes]);

return (
  <header className="w-full bg-[#002726] overflow-x-hidden">
    <div className="flex justify-between items-center px-4 md:px-6 lg:px-8 xl:px-10 mx-auto max-w-[1800px] py-2 w-full">

      {/* Logo */}
      <div className="flex items-center flex-shrink-0">
        <img
          src="/images/header-logo.png"
          alt="United Ummah Logo"
          className="h-12 sm:h-14 md:h-16 w-auto transition-all duration-300"
        />
      </div>

      {/* Nav (Desktop only) */}
      <nav className="hidden lg:flex items-center justify-center flex-grow space-x-4 text-white text-sm font-medium">
        {["HOME", "ABOUT US", "OUR PROGRAMS", "EVENTS", "COMMUNITY SERVICES", "CONTACT"].map((item, index) => {
          const anchors = ["#home", "#about-us", "#programs", "#events", "#services", "#contact"];
          return (
            <a key={index} href={anchors[index]} className="hover:opacity-80 transition whitespace-nowrap">
              {item}
            </a>
          );
        })}
      </nav>

      {/* Right Side Controls (Donate + Hamburger) */}
      <div className="flex items-center ml-auto space-x-2 md:space-x-4">

        {/* Countdown + Donate (Tablet and up) */}
        <div className="hidden md:flex items-center relative flex-shrink-0">
          {/* Green capsule background */}
          <div className="absolute left-0 right-0 h-[52px] bg-[#90BC5D] rounded-full z-0"></div>

          {/* Countdown */}
          <div className="relative flex items-center z-10 px-4 h-[52px]">
            <div className="text-black mr-2 whitespace-nowrap">
              <div className="text-[11px] font-medium">Islamic Centre of Canada (ICC)</div>
              <div className="text-[13px] font-bold">NEXT PRAYER: {nextPrayer.name.toUpperCase()}</div>
            </div>
            <div className="flex gap-x-1">
              {[nextPrayer.hrs, nextPrayer.mins, nextPrayer.secs].map((val, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span className="text-black font-bold text-[13px]">{val}</span>
                  <span className="text-black text-[10px] font-medium">{["HRS", "MIN", "SEC"][i]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Donate Button */}
          <button
            onClick={handleDonateClick}
            className={`h-[58px] w-[120px] flex items-center justify-center font-semibold text-[13px] transition-all duration-300 ease-in-out rounded-full z-10 ml-2 ${
              isClicked
                ? 'scale-105 bg-[#bf8c4b]'
                : 'bg-[#f1e8da] text-black hover:bg-[#bf8c4b] hover:scale-105'
            }`}
          >
            DONATE
          </button>
        </div>

        {/* Hamburger (Tablet & Mobile only) */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setIsMobileMenuOpen(true)} className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    {/* Mobile/Tablet Fullscreen Menu */}
    {isMobileMenuOpen && (
      <div className="fixed inset-0 bg-white z-50 w-full h-full overflow-y-auto flex flex-col items-center justify-center px-4 py-8 space-y-6 text-black text-lg">
        {["HOME", "ABOUT US", "OUR PROGRAMS", "EVENTS", "COMMUNITY SERVICES", "CONTACT"].map((item, index) => {
          const anchors = ["#home", "#about-us", "#programs", "#events", "#services", "#contact"];
          return (
            <a
              key={index}
              href={anchors[index]}
              className="hover:opacity-80 transition text-xl sm:text-2xl"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          );
        })}

        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="mt-6 px-6 py-2 border border-black rounded-full text-sm hover:bg-black hover:text-white transition"
        >
          Close Menu
        </button>
      </div>
    )}
  </header>
);

};

export default Header;
