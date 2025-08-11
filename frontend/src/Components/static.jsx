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
    <div className="relative w-full min-h-screen sm:min-h-[2000px] px-4 sm:px-8">

      {/* Top Shadow */}
      <div
        className="absolute"
        style={{
          width: 'auto',
          height: '250px',
          top: '-180px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#001F1F', // match this to current bg
          filter: 'blur(100px)',
          zIndex: 1,
        }}
      />

      {/* Hover logic */}
     <style >{`
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
    object-position: center;
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
        {columns.map((column, i) => (
          <div
            key={column.name}
            className={`flex flex-col ${i > 1 ? 'hidden sm:flex' : ''}`}
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
      <div className="pointer-events-none relative z-10 flex flex-col items-center pb-20 sm:pb-40" style={{ height: '2900px' }}>

        {/* Top Spacer */}
        <div className="h-[150px] sm:h-[200px] md:h-[250px]" />

        {/* Sticky PROLOGUE */}
        <div className="sticky top-[150px] sm:top-[200px] md:top-[250px] flex items-center justify-center h-[600px] sm:h-[700px] md:h-[800px] w-full">
          <div
            className="w-[90%] sm:w-[500px] md:w-[650px] lg:w-[800px] h-[600px] sm:h-[700px] md:h-[800px] bg-[#001F1F] pointer-events-auto flex items-center justify-center"
          >
            <div className="text-center px-4 sm:px-8 md:px-14 py-6 sm:py-8 md:py-10 text-white">
              <h1
                className="text-green-400 text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 tracking-wider"
                style={{
                  fontFamily: 'styreneB, serif',
                  fontWeight: 400,
                  letterSpacing: '0.1em',
                }}
              >
                PROLOGUE
              </h1>

              <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-xl leading-relaxed">
                <p
                  className="text-white"
                  style={{ fontFamily: 'styreneB, serif', fontWeight: 400 }}
                >
                  United Ummah is more than just a community centre it is a 
                  sanctuary for Muslims from every walk of life, a place where 
                  hearts meet, hands join, and faith flourishes.
                </p>
                <p
                  className="text-white"
                  style={{ fontFamily: 'styreneB, serif', fontWeight: 400 }}
                >
                  Here, every soul is valued, every story is honoured, and 
                  every gathering feels like a homecoming minus the awkward
                  cousin and the overcooked biryani. From our youth and 
                  elders to families seeking connection, United Ummah stands 
                  as a testament to the beauty of togetherness, a beacon of 
                  hope, and a safe harbour where faith and unity intertwine in 
                  the most graceful way.
                </p>
              </div>

              <button
                className="mt-6 sm:mt-8 bg-white text-black px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-medium tracking-wide hover:bg-gray-100 transition-colors duration-300"
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

        {/* Bottom Spacer */}
        <div className="h-[150px] sm:h-[200px] md:h-[250px]" />
      </div>
    </div>
  );
};

export default PrologueGallery;