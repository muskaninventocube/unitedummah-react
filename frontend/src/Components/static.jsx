import React, { useEffect } from 'react';

const PrologueGallery = () => {
  const generateColumnImages = (columnName, heights) => {
    return Array.from({ length: heights.length }, (_, index) => ({
      src: `/grid/${columnName}-${['one', 'two', 'three', 'four', 'five', 'six'][index]}.png`,
      alt: `${columnName} ${index + 1}`,
      height: heights[index]
    }));
  };

  // Responsive height configurations - 6 images per column, total height ~3000px
  const getColumnHeights = () => ({
    desktop: {
      first: [470, 450, 478, 1050, 474, 498],
      second: [474, 1050, 474, 473, 470, 494],
      third: [475, 475, 1050, 480, 480, 475],
      four: [475, 475, 470, 1050, 485, 480],
      six: [1050, 475, 475, 470, 490, 475]
    },
    tablet: {
      first: [450, 430, 458, 950, 454, 478],
      second: [454, 950, 454, 453, 450, 474],
      third: [455, 455, 950, 460, 460, 455],
      four: [455, 455, 450, 950, 465, 460],
      six: [950, 455, 455, 450, 470, 455]
    },
    mobile: {
      first: [420, 400, 428, 850, 424, 448],
      second: [424, 850, 424, 423, 420, 444],
      third: [425, 425, 850, 430, 430, 425],
      four: [425, 425, 420, 850, 435, 430],
      six: [850, 425, 425, 420, 440, 425]
    }
  });

  const columnHeights = getColumnHeights();

  // 5 columns with 6 images each
  const columns = [
    { name: 'first', images: generateColumnImages('first', columnHeights.desktop.first) },
    { name: 'second', images: generateColumnImages('second', columnHeights.desktop.second) },
    { name: 'third', images: generateColumnImages('third', columnHeights.desktop.third) },
    { name: 'four', images: generateColumnImages('four', columnHeights.desktop.four) },
    { name: 'six', images: generateColumnImages('six', columnHeights.desktop.six) }
  ];

  // Set custom CSS variable for each image from its data attribute
  useEffect(() => {
    document.querySelectorAll('.image-container').forEach((el) => {
      const bg = el.getAttribute('data-bg');
      el.style.setProperty('--bg-img', `url(${bg})`);
    });
  }, []);

  return (
    <div 
      className="relative bg-gray-100 w-full"
      style={{
        height: 'clamp(2400px, 300vh, 3200px)', // Responsive but maintains ~3000px structure
      }}
    >
      <style jsx>{`
        .image-container {
          position: relative;
          overflow: hidden;
          transition: all 300ms linear;
          transform: translateX(0) scale(1);
        }

        .image-container:hover {
          transform: translateX(20px) scale(1.02);
          filter: brightness(1.05) contrast(1.1);
          z-index: 10;
        }

        @media (max-width: 768px) {
          .image-container:hover {
            transform: translateX(10px) scale(1.01);
          }
        }

        .image-container::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: var(--bg-img);
          background-size: cover;
          background-position: center;
          opacity: 0;
          mix-blend-mode: multiply;
          transition: opacity 300ms linear;
          z-index: 20;
          pointer-events: none;

          /* Mask settings for ripped effect */
          mask-image: url('/images/ripped-mask.png');
          mask-size: cover;
          mask-repeat: no-repeat;
          mask-position: center;
          -webkit-mask-image: url('/images/ripped-mask.png');
          -webkit-mask-size: cover;
          -webkit-mask-repeat: no-repeat;
          -webkit-mask-position: center;
        }

        .image-container:hover::after {
          opacity: 1;
        }

        /* Responsive column layout */
        .gallery-columns {
          display: flex;
          height: 100%;
          gap: clamp(2px, 0.5vw, 8px);
          padding: clamp(4px, 1vw, 16px);
        }

        .gallery-column {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: clamp(1px, 0.2vw, 4px);
        }
      `}</style>

      {/* Image Gallery - 5 Columns with 6 images each */}
      <div className="gallery-columns absolute inset-0 z-0">
        {columns.map((column) => (
          <div
            key={column.name}
            className="gallery-column"
          >
            {column.images.map((image, imageIndex) => (
              <div
                key={`${column.name}-${imageIndex}`}
                className="image-container bg-gray-300 border border-gray-400 relative cursor-pointer"
                data-bg={image.src}
                style={{
                  height: `clamp(${columnHeights.mobile[column.name][imageIndex]}px, ${columnHeights.tablet[column.name][imageIndex] / 8}vw, ${image.height}px)`,
                  backgroundImage: `url(${image.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Sticky Container - Centered content */}
      <div className="relative z-10 h-full flex justify-center">
        <div
          className="sticky bg-[#001F1F]"
          style={{
            top: 'clamp(150px, 25vh, 400px)',
            width: 'clamp(320px, 85vw, 800px)',
            height: 'clamp(600px, 70vh, 800px)',
            marginTop: 'clamp(200px, 30vh, 500px)',
            marginBottom: 'clamp(200px, 30vh, 500px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div className="text-center px-6 sm:px-10 lg:px-14 py-6 sm:py-8 lg:py-10">
            <h1
              className="text-green-400 mb-4 sm:mb-6 lg:mb-8 tracking-wider"
              style={{
                fontFamily: 'styreneB, serif',
                fontWeight: 400,
                letterSpacing: '0.1em',
                fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
              }}
            >
              PROLOGUE
            </h1>

            <div className="space-y-4 sm:space-y-6">
              <p
                className="text-white leading-relaxed"
                style={{
                  fontFamily: 'styreneB, serif',
                  fontWeight: 400,
                  fontSize: 'clamp(0.875rem, 2.5vw, 1.25rem)',
                  lineHeight: '1.6',
                }}
              >
                United Ummah is more than just a community centre it is a{' '}
                <span className="hidden sm:inline"><br /></span>
                sanctuary for Muslims from every walk of life, a place where{' '}
                <span className="hidden sm:inline"><br /></span>
                hearts meet, hands join, and faith flourishes.
              </p>
              <p
                className="text-white leading-relaxed"
                style={{
                  fontFamily: 'styreneB, serif',
                  fontWeight: 400,
                  fontSize: 'clamp(0.875rem, 2.5vw, 1.25rem)',
                  lineHeight: '1.6',
                }}
              >
                Here, every soul is valued, every story is honoured, and{' '}
                <span className="hidden sm:inline"><br /></span>
                every gathering feels like a homecoming minus the awkward{' '}
                <span className="hidden sm:inline"><br /></span>
                cousin and the overcooked biryani. From our youth and{' '}
                <span className="hidden sm:inline"><br /></span>
                elders to families seeking connection, United Ummah stands{' '}
                <span className="hidden sm:inline"><br /></span>
                as a testament to the beauty of togetherness, a beacon of{' '}
                <span className="hidden sm:inline"><br /></span>
                hope, and a safe harbour where faith and unity intertwine in{' '}
                <span className="hidden sm:inline"><br /></span>
                the most graceful way.
              </p>
            </div>

            <button
              className="mt-6 sm:mt-8 bg-white text-black px-4 sm:px-6 lg:px-8 py-2 sm:py-3 font-medium tracking-wide hover:bg-gray-100 transition-colors duration-300 text-sm sm:text-base"
              style={{
                fontFamily: 'styreneB, serif',
                fontWeight: 500,
                letterSpacing: '0.05em',
              }}
            >
              KNOW MORE ABOUT US
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrologueGallery;