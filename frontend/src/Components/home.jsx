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
    <div className="absolute top-0 right-0 z-30 max-[450px]:mt-[120px]">
  <img
    src="/images/right-corner.png"
    alt="Community gathering"
    className="
      w-[320px] h-[250px] object-cover 
      max-[1200px]:w-[300px] max-[1200px]:h-[280px] 
      max-[500px]:w-[220px] max-[500px]:h-auto max-[500px]:right-0
    "
  />
</div>


        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/home-back.png')" }}
        >
          <div className="absolute inset-0 bg-white bg-opacity-30"></div>
        </div>

        
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
   <div
  className="relative flex items-center justify-center mt-20 w-full max-w-7xl mx-auto 
  min-h-[500px] max-h-[600px] 
  max-[600px]:min-h-[250px] max-[600px]:max-h-[250px] 
  sm:min-h-[250px] md:min-h-[500px] 
  [@media(max-width:1200px)]:min-h-[300px] [@media(max-width:1200px)]:max-h-[300px] 
  [@media(min-width:1600px)]:min-h-[400px] [@media(min-width:1600px)]:max-w-[85rem]"
  style={{ backgroundColor: '#DED7CE' }}
>


        {/* Top Left Mask */}
        <img
          src="/images/mask.png"
          alt="Mask Top Left"
          className="absolute top-0 left-0 w-[150px] h-auto sm:w-[200px] md:w-[250px]"
        />

        {/* Bottom Right Mask */}
        <img
          src="/images/mask2.png"
          alt="Mask Bottom Right"
          className="absolute bottom-0 right-0 w-[200px] h-auto sm:w-[250px] md:w-[300px]"
        />

        {/* Top Right Text - Increased font size */}
<div
  className="
    absolute top-16 right-4 
    sm:top-12 sm:right-8 
    text-xl sm:text-2xl md:text-3xl 
    uppercase tracking-widest text-[#272625] 
    max-[500px]:top-8
  "
  style={{ fontFamily: "'Inter', sans-serif" , fontWeight: 300}}
>
  TOGETHER , WE RISE
</div>

{/* Main Heading */}
<h1
  className="
    text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
    text-[#272625] leading-tight text-start px-4 
    -ml-5 sm:-ml-20 md:-ml-14 lg:-ml-20 
    [@media(min-width:1600px)]:-ml-[400px]  /* more left on big screens */
    max-[500px]:ml-4 capitalize 
  "
  style={{ fontFamily: "'Orpheus Pro', serif", fontWeight: 300 }}
>
  building a stronger <br /> ummah
</h1>


</div>


            {/* Below image */}
           <div className="absolute -bottom-12 right-[600px] max-[1400px]:right-[300px] max-[1200px]:right-0 max-[500px]:bottom-2">
  <img
    src="/images/below.png"
    alt="Below content"
    className="w-50 h-50 object-contain 
               max-[600px]:w-[300px] 
               max-[500px]:h-[180px] max-[500px]:w-[200px]"
  />
</div>

<div className="absolute -bottom-12 -left-10 max-[500px]:bottom-2">
  <img
    src="/images/left.png"
    alt="Left corner"
    className="w-50 h-50 object-cover 
               max-[600px]:w-[200px] max-[600px]:h-[150px] 
               max-[500px]:w-[150px] max-[500px]:h-[120px]"
  />
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