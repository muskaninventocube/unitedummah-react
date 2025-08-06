import React from 'react';

const PrologueGallery = () => {
  const generateColumnImages = (columnName, heights) => {
    return Array.from({ length: heights.length }, (_, index) => {
      const name = ['one', 'two', 'three', 'four', 'five', 'six'][index];
      return {
        src: `/grid/${columnName}-${name}.png`,
        hoverSrc: `/grid/${columnName}-${name}-hover.png`,
        alt: `${columnName} ${index + 1}`,
        height: heights[index],
      };
    });
  };

  const columns = [
    { name: 'first', images: generateColumnImages('first', [470, 300, 455, 1050, 490, 300]) },
    { name: 'second', images: generateColumnImages('second', [474, 1030, 460, 450, 400, 494]) },
    { name: 'third', images: generateColumnImages('third', [475, 460, 1050, 450, 480, 475]) },
    { name: 'four', images: generateColumnImages('four', [490, 440, 450, 1050, 695, 340]) },
    { name: 'six', images: generateColumnImages('six', [1050, 445, 475, 490, 720, 105]) },
  ];

  return (
    <div className="relative bg-gray-100" style={{ width: '1955px', height: '3200px' }}>
      {/* Hover logic */}
      <style jsx>{`
        .image-container {
          position: relative;
          overflow: hidden;
          transition: transform 300ms ease;
        }

        .image-container:hover {
          transform: scale(1.03);
          z-index: 5;
        }

        .image-container img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: opacity 0.3s ease;
        }

        .hover-image {
          opacity: 0;
        }

        .image-container:hover .hover-image {
          opacity: 1;
        }

        .image-container:hover .main-image {
          opacity: 0;
        }
      `}</style>

      {/* Image Gallery Columns */}
      <div className="flex absolute inset-0 z-0">
        {columns.map((column) => (
          <div
            key={column.name}
            className="flex flex-col"
            style={{ width: '391px', height: '100%' }}
          >
            {column.images.map((image, index) => (
              <div
                key={`${column.name}-${index}`}
                className="image-container border border-gray-400 cursor-pointer"
                style={{ height: `${image.height}px` }}
              >
                <img src={image.src} alt={image.alt} className="main-image" />
                <img src={image.hoverSrc} alt={`${image.alt} hover`} className="hover-image" />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Scroll container for PROLOGUE */}
      <div className="pointer-events-none relative z-10 flex flex-col items-center" style={{ height: '2900px' }}>
        {/* Top Spacer */}
        <div style={{ height: '250px' }} />

        {/* Sticky PROLOGUE */}
        <div className="sticky top-[250px]  flex items-center justify-center" style={{ height: '800px' }}>
          <div
            style={{
              width: '800px',
              height: '800px',
              backgroundColor: '#001F1F',
              pointerEvents: 'auto',
            }}
            className="flex items-center justify-center"
          >
            <div className="text-center px-14 py-10 text-white">
              <h1
                className="text-green-400 text-4xl mb-8 tracking-wider"
                style={{
                  fontFamily: 'styreneB, serif',
                  fontWeight: 400,
                  letterSpacing: '0.1em',
                }}
              >
                PROLOGUE
              </h1>

              <div className="space-y-6">
                <p
                  className="text-white text-xl leading-relaxed"
                  style={{ fontFamily: 'styreneB, serif', fontWeight: 400 }}
                >
                  United Ummah is more than just a community centre it is a <br />
                  sanctuary for Muslims from every walk of life, a place where <br />
                  hearts meet, hands join, and faith flourishes.
                </p>
                <p
                  className="text-white text-xl leading-relaxed"
                  style={{ fontFamily: 'styreneB, serif', fontWeight: 400 }}
                >
                  Here, every soul is valued, every story is honoured, and <br />
                  every gathering feels like a homecoming minus the awkward <br />
                  cousin and the overcooked biryani. From our youth and <br />
                  elders to families seeking connection, United Ummah stands <br />
                  as a testament to the beauty of togetherness, a beacon of <br />
                  hope, and a safe harbour where faith and unity intertwine in <br />
                  the most graceful way.
                </p>
              </div>

              <button
                className="mt-8 bg-white text-black px-8 py-3 font-medium tracking-wide hover:bg-gray-100 transition-colors duration-300"
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
           <div style={{ height: '250px' }} />
        </div>

        {/* Bottom Spacer */}
       
      </div>
    </div>
  );
};

export default PrologueGallery;
