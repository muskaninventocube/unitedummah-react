import React, { useState, useEffect, useRef } from 'react';

const PrologueGallery = () => {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate the transform based on scroll position within the component
  const getTransform = () => {
    if (!containerRef.current) return 'translateY(0px)';
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const containerTop = containerRef.current.offsetTop;
    const containerHeight = containerRef.current.offsetHeight;
    const windowHeight = window.innerHeight;
    const greenBoxHeight = 850;
    
    // When the component enters the viewport
    const componentStart = containerTop - windowHeight;
    const componentEnd = containerTop + containerHeight;
    
    // Calculate scroll progress within the component bounds
    const relativeScroll = Math.max(0, scrollY - componentStart);
    const totalScrollableDistance = componentEnd - componentStart - windowHeight;
    const scrollProgress = Math.min(1, relativeScroll / totalScrollableDistance);
    
    // Available movement space (container height - green box height - top and bottom margins)
    const availableMovement = containerHeight - greenBoxHeight - 300; // 150px top + 150px bottom
    const moveDistance = scrollProgress * availableMovement;
    
    return `translateY(${moveDistance}px)`;
  };
  const generateColumnImages = (columnName, heights) => {
    return Array.from({ length: heights.length }, (_, index) => {
      const baseName = ['one', 'two', 'three', 'four', 'five', 'six'][index];
      const hasHover =
        columnName === 'first' &&
        ['one', 'two', 'three'].includes(baseName); // only first-three have hover
      return {
        src: `/grid/${columnName}-${baseName}.png`,
        hoverSrc: hasHover ? `/grid/${columnName}-${baseName}-hover.png` : null,
        alt: `${columnName} ${index + 1}`,
        height: heights[index],
      };
    });
  };

  const getColumnHeights = () => ({
    desktop: {
      first: [470, 450, 478, 1050, 474, 498],
      second: [474, 1050, 474, 473, 470, 494],
      third: [475, 475, 1050, 480, 480, 475],
      four: [475, 475, 470, 1050, 485, 480],
      six: [1050, 475, 475, 470, 490, 475],
    },
    tablet: {
      first: [450, 430, 458, 950, 454, 478],
      second: [454, 950, 454, 453, 450, 474],
      third: [455, 455, 950, 460, 460, 455],
      four: [455, 455, 450, 950, 465, 460],
      six: [950, 455, 455, 450, 470, 455],
    },
    mobile: {
      first: [420, 400, 428, 850, 424, 448],
      second: [424, 850, 424, 423, 420, 444],
      third: [425, 425, 850, 430, 430, 425],
      four: [425, 425, 420, 850, 435, 430],
      six: [850, 425, 425, 420, 440, 425],
    },
  });

  const columnHeights = getColumnHeights();

  const columns = [
    { name: 'first', images: generateColumnImages('first', columnHeights.desktop.first) },
    { name: 'second', images: generateColumnImages('second', columnHeights.desktop.second) },
    { name: 'third', images: generateColumnImages('third', columnHeights.desktop.third) },
    { name: 'four', images: generateColumnImages('four', columnHeights.desktop.four) },
    { name: 'six', images: generateColumnImages('six', columnHeights.desktop.six) },
  ];

  return (
    <div 
      ref={containerRef}
      className="relative bg-gray-100 w-full" 
      style={{ height: 'clamp(2400px, 300vh, 3200px)' }}
    >
      {/* Inline styles to control hover swap */}
      <style>{`
        .hover-container {
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }
        .hover-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
        }
        .hover-container .hover-img {
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0;
          z-index: 1;
        }
        .hover-container:hover .hover-img {
          opacity: 1;
        }
        .hover-container:hover .main-img {
          opacity: 0;
          transform: scale(1.02);
        }
        @media (max-width: 768px) {
          .hover-container:hover .main-img {
            transform: scale(1.01);
          }
        }
      `}</style>

      {/* Image Gallery Columns */}
      <div className="absolute inset-0 z-0 flex gap-[0.5vw] p-[1vw]">
        {columns.map((column) => (
          <div key={column.name} className="flex flex-col gap-[0.2vw] flex-1">
            {column.images.map((image, index) => (
              <div
                key={`${column.name}-${index}`}
                className="hover-container border border-gray-400 bg-gray-300"
                style={{
                  height: `clamp(${columnHeights.mobile[column.name][index]}px, ${
                    columnHeights.tablet[column.name][index] / 8
                  }vw, ${image.height}px)`,
                }}
              >
                {image.hoverSrc ? (
                  <>
                    <img src={image.src} alt={image.alt} className="main-img" />
                    <img src={image.hoverSrc} alt={`${image.alt} hover`} className="hover-img" />
                  </>
                ) : (
                  <img src={image.src} alt={image.alt} className="main-img" />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Center section with smooth bounded movement */}
      <div 
        className="relative z-10 flex justify-center"
        style={{ 
          paddingTop: '150px',
          paddingBottom: '150px',
          height: '100%'
        }}
      >
        <div
          className="bg-[#001F1F] flex items-center justify-center transition-transform duration-75 ease-out"
          style={{
            width: 'clamp(350px, 65vw, 700px)',
            height: 'clamp(700px, 70vh, 850px)',
            transform: getTransform(),
          }}
        >
          <div className="text-center px-6 sm:px-10 lg:px-16 py-6 sm:py-10 lg:py-12">
            <h1
              className="text-green-400 mb-4 sm:mb-6 lg:mb-8 tracking-wider"
              style={{
                fontFamily: 'styreneB, serif',
                fontWeight: 400,
                letterSpacing: '0.1em',
                fontSize: 'clamp(1.8rem, 4.5vw, 2.5rem)',
              }}
            >
              PROLOGUE
            </h1>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-white leading-relaxed" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.3rem)', lineHeight: '1.6' }}>
                United Ummah is more than just a community centre. It is a{' '}
                <span className="hidden sm:inline"><br /></span>
                sanctuary for Muslims from every walk of life, a place where hearts meet, hands join, and faith flourishes.
              </p>
              <p className="text-white leading-relaxed" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.3rem)', lineHeight: '1.6' }}>
                Here, every soul is valued, every story is honoured, and every gathering feels like a homecoming minus the awkward cousin and the overcooked biryani. From our youth and elders to families seeking connection, United Ummah stands as a testament to the beauty of togetherness, a beacon of hope, and a safe harbour where faith and unity intertwine in the most graceful way.
              </p>
            </div>

            <button className="mt-6 sm:mt-8 bg-white text-black px-6 py-3 font-medium tracking-wide hover:bg-gray-100 transition duration-300 text-base">
              KNOW MORE ABOUT US
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrologueGallery;