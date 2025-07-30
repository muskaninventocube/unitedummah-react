import React from 'react';

const PrologueGallery = () => {
  // Generate image URLs for each column
  const generateColumnImages = (columnName) => {
    return Array.from({ length: 6 }, (_, index) => ({
      src: `/grid/${columnName}-${['one', 'two', 'three', 'four', 'five', 'six'][index]}.png`,
      alt: `${columnName} ${index + 1}`
    }));
  };

  const columns = [
    { name: 'first', images: generateColumnImages('first') },
    { name: 'second', images: generateColumnImages('second') },
    { name: 'third', images: generateColumnImages('third') },
    { name: 'four', images: generateColumnImages('four') },
    { name: 'six', images: generateColumnImages('six') }
  ];

  return (
    <div 
      className="relative bg-gray-100"
      style={{ 
        width: '1955px', 
        height: '3235px',
        overflow: 'hidden'
      }}
    >
      {/* Image Gallery Columns */}
      <div className="flex absolute inset-0">
        {columns.map((column, columnIndex) => (
          <div
            key={column.name}
            className="flex flex-col"
            style={{ 
              width: '391px', 
              height: '3384px'
            }}
          >
            {column.images.map((image, imageIndex) => (
              <div
                key={`${column.name}-${imageIndex}`}
                className="bg-gray-300 border border-gray-400 flex items-center justify-center"
                style={{
                  height: `${564}px`, // 3384 / 6 = 564px per image
                  backgroundImage: `url(${image.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Central Overlay Container */}
      <div 
        className="absolute flex items-center justify-center"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#001F1F',
          width: '800px',
          height: '600px',
          zIndex: 10
        }}
      >
        <div className="text-center px-12 py-8">
          {/* Prologue Title */}
          <h1 
            className="text-yellow-400 text-4xl mb-8 tracking-wider"
            style={{ 
              fontFamily: 'styreneB, serif',
              fontWeight: 400,
              letterSpacing: '0.1em'
            }}
          >
            PROLOGUE
          </h1>

          {/* Main Content */}
          <div className="space-y-6">
            <p 
              className="text-white text-lg leading-relaxed"
              style={{ 
                fontFamily: 'styreneB, serif',
                fontWeight: 400,
                lineHeight: '1.6'
              }}
            >
              United Ummah is more than just a community centre it is a <br />
              sanctuary for Muslims from every walk of life, a place where <br />
              hearts meet, hands join, and faith flourishes.
            </p>

            <p 
              className="text-white text-lg leading-relaxed"
              style={{ 
                fontFamily: 'styreneB, serif',
                fontWeight: 400,
                lineHeight: '1.6'
              }}
            >
              Here, every soul is valued, every story is honoured, and <br />
              every gathering feels like a homecoming minus the awkward <br />
              cousin and the overcooked biryani. From our youth and  <br />
              elders to families seeking connection, United Ummah stands <br />
              as a testament to the beauty of togetherness, a beacon of <br />
              hope, and a safe harbour where faith and unity intertwine in <br />
              the most graceful way.
            </p>
          </div>

          {/* Button */}
          <button 
            className="mt-8 bg-white text-black px-8 py-3 font-medium tracking-wide hover:bg-gray-100 transition-colors duration-300"
            style={{ 
              fontFamily: 'styreneB, serif',
              fontWeight: 500,
              letterSpacing: '0.05em'
            }}
          >
            KNOW MORE ABOUT US
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrologueGallery;