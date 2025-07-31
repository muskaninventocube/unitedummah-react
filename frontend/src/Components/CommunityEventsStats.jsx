import React from 'react';

const CommunityEventsStats = () => {
  return (
    <div className="relative w-full py-32 bg-[#002626]">
      {/* Bottom Shadow (spread outward but only downward) */}
      <div
        className="absolute"
        style={{
          width: '2200px',
          height: '200px',
          bottom: '-150px', // push it further down
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#002626',
          filter: 'blur(60px)',
          zIndex: 0,
        }}
      />

    
      <div
        className="absolute"
        style={{
          width: '2200px',
          height: '200px',
          top: '-100px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#002626',
          filter: 'blur(60px)',
          zIndex: 0,
        }}
      />

      {/* Main content container */}
      <div
        className="relative z-10 mx-auto max-w-6xl px-6 py-20 rounded-lg"
        style={{
          backgroundColor: '#001F1F',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        {/* Mosque Icon */}
        <div className="flex justify-center mb-8">
          <img
            src="/images/mosque.png"
            alt="Mosque icon"
            className="w-18 h-18 object-contain"
          />
        </div>

        {/* Title */}
        <h2 className="text-white text-3xl font-light text-center mb-16">
          Community Events
        </h2>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="text-white">
            <div className="text-5xl font-light mb-4">
              100,000<span className="text-4xl">+</span>
            </div>
            <div className="text-sm text-gray-300 leading-relaxed">
              Attendees across all<br />
              events/programs
            </div>
          </div>
          <div className="text-white">
            <div className="text-5xl font-light mb-4">
              10,000<span className="text-4xl">+</span>
            </div>
            <div className="text-sm text-gray-300 leading-relaxed">
              Attendees at weekly<br />
              programs
            </div>
          </div>
          <div className="text-white">
            <div className="text-5xl font-light mb-4">
              600<span className="text-4xl">+</span>
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
