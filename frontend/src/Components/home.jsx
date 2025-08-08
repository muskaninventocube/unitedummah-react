import React, { useRef, useState, useEffect } from 'react';

const UmmahHeroSection = () => {
  const scrollRef = useRef(null);
  const [isMobileView, setIsMobileView] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const events = [...Array(5)].map((_, idx) => ({
    id: idx,
    day: `1${idx}`,
    month: "AUG",
    title: "NIGHT WITH SHAYKH",
    subtitle: "CHILDREN'S STORY",
    speaker: "HOSAM HELAL",
  }));

  // Detect mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 1200);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollLeft = () => {
    if (isMobileView) {
      setCurrentIndex((prev) => Math.max(prev - 2, 0));
    } else {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (isMobileView) {
      setCurrentIndex((prev) => Math.min(prev + 2, events.length - 2));
    } else {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const visibleEvents = isMobileView
    ? events.slice(currentIndex, currentIndex + 2)
    : events;

  return (
    <>
      <div className="relative min-h-[120vh] w-full overflow-hidden">
        {/* Right Corner Image */}
        <div className="absolute top-0 right-0 z-30">
          <img
            src="/images/right-corner.png"
            alt="Community gathering"
            className="w-[500px] h-[250px] object-cover max-[1200px]:w-[400px] max-[1200px]:h-[400px]"
          />
        </div>

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/background.png')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
          <div className="relative flex items-center justify-center mt-20 -right-8">
            {/* Center Image */}
            <img
              src="/images/center.png"
              alt="Building A Stronger Ummah"
              className="w-[100%] object-contain mx-auto max-[600px]:min-h-[1000px] max-[600px]:max-h-[2000px]"
              style={{ minHeight: '700px', maxHeight: '750px' }}
            />

            {/* Below image */}
            <div className="absolute -bottom-12 right-[600px] max-[1400px]:right-[300px] max-[1200px]:right-0">
              <img
                src="/images/below.png"
                alt="Below content"
                className="w-50 h-50 object-contain max-[600px]:w-[150px] max-[500px]:h-[300px]"
              />
            </div>

            {/* Left Image */}
            <div className="absolute -bottom-12 -left-10">
              <img
                src="/images/left.png"
                alt="Left corner"
                className="w-50 h-50 object-cover max-[600px]:w-[150px] max-[600px]:h-[200px]"
              />
            </div>
          </div>
        </div>

        {/* Events Section */}
        <div className="relative z-20 flex flex-col items-start -ml-0 -mt-16">
          <div className="w-[810px] max-[1200px]:w-full py-4 px-2">
            {/* Header */}
            <div className="flex items-center justify-between p-2 border-b border-black text-white bg-black pb-2 px-4 rounded-t">
              <h2 className="text-sm font-semibold tracking-wider uppercase">
                UPCOMING EVENTS & PROGRAMS
              </h2>
              <div className="flex gap-2">
                <button
                  onClick={scrollLeft}
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2">
                    <polyline points="15,18 9,12 15,6"></polyline>
                  </svg>
                </button>
                <button
                  onClick={scrollRight}
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2">
                    <polyline points="9,18 15,12 9,6"></polyline>
                  </svg>
                </button>
              </div>
            </div>

            {/* Events List */}
            <div
              ref={scrollRef}
              className={`bg-[#f5ede4] divide-x divide-gray-400 
                ${isMobileView
                  ? "flex flex-col divide-x-0 divide-y"
                  : "flex overflow-x-auto"
                }`}
            >
              {visibleEvents.map((event) => (
                <div
                  key={event.id}
                  className={`flex items-center gap-4 px-4 py-4
                    ${isMobileView ? "w-full" : "min-w-[400px]"}`}
                >
                  <div
                    className="text-center px-4 py-3 rounded text-black font-bold"
                    style={{ backgroundColor: '#7FBA84' }}
                  >
                    <div className="text-2xl font-bold italic">{event.day}</div>
                    <div className="text-xs uppercase">{event.month}</div>
                  </div>
                  <div className="flex-1 flex justify-between items-start">
                    <div>
                      <div className="text-xs uppercase tracking-wide mb-1 text-black font-medium">
                        {event.subtitle}
                      </div>
                      <div className="text-sm font-bold mb-1 text-black">
                        {event.title}
                      </div>
                      <div className="text-sm text-black">{event.speaker}</div>
                    </div>
                    <button
                      className="ml-4 px-5 py-3 mt-2 text-xs font-bold text-white rounded hover:opacity-90 transition-opacity uppercase"
                      style={{ backgroundColor: '#041b06ff' }}
                    >
                      LEARN MORE
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UmmahHeroSection;
