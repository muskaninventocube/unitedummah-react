import React, { useState, useEffect } from 'react';

const Counter = ({ target, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target);
    const incrementTime = Math.abs(Math.floor(duration / end));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, incrementTime);
    return () => clearInterval(timer);
  }, [target, duration]);

  return <>{count.toLocaleString()}</>;
};

const CommunityEventsStats = () => {
  return (
    <div className="relative w-full py-16 bg-[#002626]">
     {/* Top Blur */}
      <div
        className="absolute"
        style={{
          width: "100%",
          maxWidth: "100vw",
          height: "250px",
          top: "-280px",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "#041a10ff",
          filter: "blur(100px)",
          zIndex: 1,
        }}
      />

    {/* Bottom Shadow going downwards */}
<div
  className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
  style={{
    width: '1920px',
    height: '250px',
    bottom: '0', // component ke bilkul end par
    transform: 'translateY(100px)', // thoda neeche push
    background: 'linear-gradient(to bottom, rgba(4, 49, 49, 0.6), transparent)',
    filter: 'blur(100px)', // backdropFilter ki jagah direct blur
    zIndex: 1,
  }}
/>

      {/* Main content container */}
      <div
        className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 py-10 rounded-lg w-full"
        style={{
          backgroundColor: '#001F1F',
        }}
      >
        {/* Mosque Icon */}
        <div className="flex justify-center mb-8">
          <img
            src="/images/mosque.png"
            alt="Mosque icon"
            className="w-16 h-16 object-contain"
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
          Community Events
        </h2>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {/* 1st Stat */}
          <div>
            <div
              className="mb-4"
              style={{ fontFamily: 'Times New Roman, serif', fontSize: '48px', color: '#F1E8DA' }}
            >
              <Counter target={100000} duration={2000} />
              <span style={{ fontSize: '32px' }}>+</span>
            </div>
            <div className="text-sm text-gray-300 leading-relaxed">
              Attendees across all<br />
              events/programs
            </div>
          </div>

          {/* 2nd Stat */}
          <div>
            <div
              className="mb-4"
              style={{ fontFamily: 'Times New Roman, serif', fontSize: '48px', color: '#F1E8DA' }}
            >
              <Counter target={10000} duration={2000} />
              <span style={{ fontSize: '32px' }}>+</span>
            </div>
            <div className="text-sm text-gray-300 leading-relaxed">
              Attendees at weekly<br />
              programs
            </div>
          </div>

          {/* 3rd Stat */}
          <div>
            <div
              className="mb-4"
              style={{ fontFamily: 'Times New Roman, serif', fontSize: '48px', color: '#F1E8DA' }}
            >
              <Counter target={600} duration={2000} />
              <span style={{ fontSize: '32px' }}>+</span>
            </div>
            <div className="text-sm text-gray-300 leading-relaxed">
              Camp Attendees
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityEventsStats;
