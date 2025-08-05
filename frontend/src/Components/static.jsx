import React from 'react';

const PrologueGallery = () => {
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
    <div className="relative bg-gray-100 w-full" style={{ height: 'clamp(2400px, 300vh, 3200px)' }}>
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

      {/* Sticky center section */}
      <div className="relative z-10 h-full flex justify-center items-center">
        <div
          className="sticky bg-[#001F1F]"
          style={{
            top: '150px',
            width: 'clamp(400px, 85vw, 1000px)',
            height: 'clamp(800px, 80vh, 1000px)',
            marginTop: '150px',
            marginBottom: '150px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div className="text-center px-8 sm:px-12 lg:px-20 py-8 sm:py-12 lg:py-16">
            <h1
              className="text-green-400 mb-4 sm:mb-6 lg:mb-8 tracking-wider"
              style={{
                fontFamily: 'styreneB, serif',
                fontWeight: 400,
                letterSpacing: '0.1em',
                fontSize: 'clamp(2rem, 5vw, 3rem)',
              }}
            >
              PROLOGUE
            </h1>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-white leading-relaxed" style={{ fontSize: 'clamp(1.125rem, 3vw, 1.5rem)', lineHeight: '1.6' }}>
                United Ummah is more than just a community centre. It is a{' '}
                <span className="hidden sm:inline"><br /></span>
                sanctuary for Muslims from every walk of life, a place where hearts meet, hands join, and faith flourishes.
              </p>
              <p className="text-white leading-relaxed" style={{ fontSize: 'clamp(1.125rem, 3vw, 1.5rem)', lineHeight: '1.6' }}>
                Here, every soul is valued, every story is honoured, and every gathering feels like a homecoming — minus the awkward cousin and the overcooked biryani.
              </p>
            </div>

            <button className="mt-6 sm:mt-8 bg-white text-black px-8 py-4 font-medium tracking-wide hover:bg-gray-100 transition duration-300 text-lg">
              KNOW MORE ABOUT US
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrologueGallery;
