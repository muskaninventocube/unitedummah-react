import React, { useState, useEffect } from 'react';

const Counter = ({ target, totalDuration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const end = parseInt(target);

    // Calculate start value so big numbers don't take too long
    let startValue;
    if (end > 50000) startValue = end - 200;      // e.g., 100000 → starts at 99800
    else if (end > 5000) startValue = end - 200;  // e.g., 10000 → starts at 9800
    else startValue = 0;                          // small numbers start from 0

    let current = startValue;
    setCount(startValue);

    const totalSteps = end - startValue;
    const incrementTime = Math.max(1, Math.floor(totalDuration / totalSteps));

    const timer = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, totalDuration]);

  return <>{count.toLocaleString()}</>;
};

const CommunityEventsStats = () => {
  const totalAnimationTime = 3000; // 3 seconds for all

  return (
    <div className="relative w-full py-16 bg-[#002626]">
      {/* Top Blur */}
      <div
        className="absolute"
        style={{
          width: '100%',
          maxWidth: '100vw',
          height: '250px',
          top: '-280px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#041a10ff',
          filter: 'blur(100px)',
          zIndex: 1,
        }}
      />

      {/* Main content container */}
      <div
        className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 py-10 rounded-lg w-full"
        style={{ backgroundColor: '#001F1F' }}
      >
        {/* Mosque Icon */}
        <div className="flex justify-center mb-8">
          <img
            src="/images/mosque.png"
            alt="Mosque icon"
            className="w-20 h-20 object-contain md:w-28 md:h-28"
          />
        </div>

        {/* Title */}
        <h2
          className="text-center mb-16"
          style={{
            fontFamily: "'Orpheus Pro', serif",
            fontWeight: 300,
            fontSize: '32px',
            color: '#F1E8DA',
          }}
        >
          <span className="text-[32px] md:text-[50px]">Community Events</span>
        </h2>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {/* 1st Stat */}
          <div>
            <div className="mb-4" style={{ fontFamily: 'Times New Roman, serif', fontSize: '48px', color: '#F1E8DA' }}>
              <Counter target={100000} totalDuration={totalAnimationTime} />
              <span style={{ fontSize: '32px' }}>+</span>
            </div>
            <div className="text-sm text-gray-300 leading-relaxed">
              Attendees across all
              <br />
              events/programs
            </div>
          </div>

          {/* 2nd Stat */}
          <div>
            <div className="mb-4" style={{ fontFamily: 'Times New Roman, serif', fontSize: '48px', color: '#F1E8DA' }}>
              <Counter target={10000} totalDuration={totalAnimationTime} />
              <span style={{ fontSize: '32px' }}>+</span>
            </div>
            <div className="text-sm text-gray-300 leading-relaxed">
              Attendees at weekly
              <br />
              programs
            </div>
          </div>

          {/* 3rd Stat */}
          <div>
            <div className="mb-4" style={{ fontFamily: 'Times New Roman, serif', fontSize: '48px', color: '#F1E8DA' }}>
              <Counter target={600} totalDuration={totalAnimationTime} />
              <span style={{ fontSize: '32px' }}>+</span>
            </div>
            <div className="text-sm text-gray-300 leading-relaxed">
              Camp Attendees
            </div>
          </div>
        </div>
      </div>

      {/* Mobile-specific width */}
      <style jsx>{`
        @media (max-width: 500px) {
          .relative.z-10 {
            max-width: 90% !important;
          }
        }
      `}</style>
    </div>
  );
};

export default CommunityEventsStats;
