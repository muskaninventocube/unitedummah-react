import React, { useState, useEffect } from 'react';

const Counter = ({ target, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target);
    const incrementTime = Math.max(1, Math.floor(duration / end)); // avoid 0ms
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

<<<<<<< Updated upstream
      
  
=======
{/* Bottom Shadow going into next section */}
<div
  className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
  style={{
    width: '1920px',
    height: '250px',
    bottom: '-250px', // thoda neeche push taaki agle section me jaye
    background: 'linear-gradient(to top, rgba(1, 41, 41, 0.6), transparent)',
    filter: 'blur(100px)',
    zIndex: 1,
  }}
/>


>>>>>>> Stashed changes
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
          <span className="text-[32px] md:text-[56px]">Community Events</span>
        </h2>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {/* 1st Stat */}
          <div>
            <div
              className="mb-4"
              style={{
                fontFamily: 'Times New Roman, serif',
                fontSize: '48px',
                color: '#F1E8DA',
              }}
            >
              <Counter target={100000} duration={300} /> {/* Faster */}
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
            <div
              className="mb-4"
              style={{
                fontFamily: 'Times New Roman, serif',
                fontSize: '48px',
                color: '#F1E8DA',
              }}
            >
              <Counter target={10000} duration={300} /> {/* Faster */}
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
            <div
              className="mb-4"
              style={{
                fontFamily: 'Times New Roman, serif',
                fontSize: '48px',
                color: '#F1E8DA',
              }}
            >
              <Counter target={600} duration={300} /> {/* Faster */}
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
