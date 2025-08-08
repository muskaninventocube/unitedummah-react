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
        const response = await axios.get(
          `https://api.aladhan.com/v1/timingsByCity/${today}?city=Karachi&country=Pakistan&method=2`
        );
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
        const fajrTomorrow = dayjs()
          .add(1, 'day')
          .hour(Number(fajrHr))
          .minute(Number(fajrMin))
          .second(0);
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
    <header className="sticky top-0 z-50 w-full overflow-hidden">
      {/* MAIN NAVIGATION ROW */}
      <div className="bg-[#002726] px-3 py-3 md:px-6 lg:px-12 mx-auto max-w-[95%] flex justify-between items-center">
        {/* Logo */}
        <img
          src="/images/header-logo.png"
          alt="United Ummah Logo"
          className="h-8 md:h-16 xl:h-20 w-auto z-10 relative"
        />

        {/* Hamburger */}
        <div className="xl:hidden block">
          <button onClick={() => setIsMobileMenuOpen(true)} className="text-white p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center justify-between w-full ml-8 gap-x-15">
          <nav className="flex items-center space-x-5 lg:space-x-8 text-white text-[10px] lg:text-[14px] font-medium">
            {["HOME", "ABOUT US", "OUR PROGRAMS", "EVENTS", "COMMUNITY SERVICES", "CONTACT"].map((item, index) => {
              const anchors = ["#home", "#about-us", "#programs", "#events", "#services", "#contact"];
              return (
                <a key={index} href={anchors[index]} className="hover:opacity-80 transition-opacity tracking-wide">
                  {item}
                </a>
              );
            })}
          </nav>

          {/* Countdown + Donate */}
          <div className="relative flex items-center ml-auto gap-x-4 lg:gap-x-6 -right-12">
            <div className="absolute left-0 right-0 h-[75px] bg-[#90BC5D] rounded-full z-0"></div>

            <div className="relative flex items-center z-10 px-4 md:pl-6 md:pr-2 h-[75px]">
              <div className="text-black mr-4 whitespace-nowrap">
                <div className="text-sm font-medium">Islamic Centre of Canada (ICC)</div>
                <div className="text-lg font-bold">NEXT PRAYER: {nextPrayer.name.toUpperCase()}</div>
              </div>

              <div className="flex gap-x-2">
                {[nextPrayer.hrs, nextPrayer.mins, nextPrayer.secs].map((val, i) => (
                  <div key={i} className="flex flex-col items-center mx-1">
                    <span className="text-black font-bold text-lg">{val}</span>
                    <span className="text-black font-semibold text-xs">{["HRS", "MIN", "SEC"][i]}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={handleDonateClick}
              className={`h-[75px] w-[160px] lg:w-[200px] flex items-center justify-center font-semibold text-lg transition-all duration-300 ease-in-out rounded-full z-10 ${
                isClicked
                  ? 'scale-105 bg-[#bf8c4b]'
                  : 'bg-[#f1e8da] text-black hover:bg-[#bf8c4b] hover:scale-105'
              }`}
            >
              DONATE NOW
            </button>
          </div>
        </div>
      </div>

      {/* PRAYER + DONATE CAPSULE FOR <1460px */}
      <div className="xl:hidden w-full px-2 pt-2 pb-3 relative bg-transparent">
        <div className="mx-auto max-w-[95%] relative bg-transparent">
          {/* Background Capsule */}
          <div className="absolute inset-x-0 h-[55px] bg-[#90BC5D] rounded-full z-0"></div>

          {/* Content Row */}
          <div className="relative flex items-center justify-between z-10 px-4 h-[55px]">
            {/* Left side */}
            <div className="text-black flex flex-col justify-center text-[9px] leading-tight">
              <div className="font-medium">Islamic Centre of Canada (ICC)</div>
              <div className="font-bold">NEXT PRAYER: {nextPrayer.name.toUpperCase()}</div>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-x-2">
              <div className="flex gap-x-1">
                {[nextPrayer.hrs, nextPrayer.mins, nextPrayer.secs].map((val, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <span className="text-black font-bold text-xs">{val}</span>
                    <span className="text-black font-semibold text-[8px]">{["HRS", "MIN", "SEC"][i]}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={handleDonateClick}
                className={`h-[55px] w-[120px] -mr-4 text-[10px] flex items-center justify-center font-semibold transition-all duration-300 ease-in-out rounded-full z-10 ${
                  isClicked
                    ? 'scale-105 bg-[#bf8c4b]'
                    : 'bg-[#f1e8da] text-black hover:bg-[#bf8c4b] hover:scale-105'
                }`}
              >
                DONATE NOW
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center w-full px-4 py-8 space-y-6 text-black text-lg">
          {["HOME", "ABOUT US", "OUR PROGRAMS", "EVENTS", "COMMUNITY SERVICES", "CONTACT"].map((item, index) => {
            const anchors = ["#home", "#about-us", "#programs", "#events", "#services", "#contact"];
            return (
              <a
                key={index}
                href={anchors[index]}
                className="hover:opacity-80 transition"
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
