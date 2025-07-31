import React from 'react';

const PrologueGallery = () => {
  const generateColumnImages = (columnName, heights) => {
    return Array.from({ length: heights.length }, (_, index) => ({
      src: `/grid/${columnName}-${['one', 'two', 'three', 'four', 'five', 'six'][index]}.png`,
      alt: `${columnName} ${index + 1}`,
      height: heights[index]
    }));
  };

  const columns = [
    { name: 'first', images: generateColumnImages('first', [470, 450, 478, 1050, 474, 498]) }, // Total: 3235px
    { name: 'second', images: generateColumnImages('second', [474, 1050, 474, 473, 470, 494]) }, // 3235px
    { name: 'third', images: generateColumnImages('third', [475, 475, 1050, 480, 480, 475]) }, // 3235px
    { name: 'four', images: generateColumnImages('four', [475, 475, 470, 1050, 485, 480]) }, // 3235px
    { name: 'six', images: generateColumnImages('six', [1050, 475, 475, 470, 490, 475]) } // 3235px
  ];

  return (
    <div 
      className="relative bg-gray-100"
      style={{ 
        width: '1955px', 
        height: '3200px',
      }}
    >
      {/* CSS for the painterly hover effect */}
      <style jsx>{`
        .image-container {
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          filter: none;
          transform: scale(1);
          box-shadow: none;
          position: relative;
          overflow: hidden;
        }
        
        .image-container:hover {
          filter: blur(1px) saturate(1.3) contrast(1.1) brightness(1.05);
          transform: scale(1.02);
          box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.3);
          z-index: 10;
        }
        
        .image-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.15) 0%,
            rgba(255, 255, 255, 0) 50%,
            rgba(0, 0, 0, 0.05) 50%,
            rgba(0, 0, 0, 0) 100%
          );
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
          mix-blend-mode: overlay;
        }
        
        .image-container:hover::before {
          opacity: 1;
        }
      `}</style>
      
      {/* Image Gallery Columns */}
      <div className="flex absolute inset-0 z-0">
        {columns.map((column) => (
          <div
            key={column.name}
            className="flex flex-col"
            style={{ 
              width: '391px',
              height: '100%' 
            }}
          >
            {column.images.map((image, imageIndex) => (
              <div
                key={`${column.name}-${imageIndex}`}
                className="image-container bg-gray-300 border border-gray-400 relative cursor-pointer"
                style={{
                  height: `${image.height}px`,
                  backgroundImage: `url(${image.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Sticky Container with top and bottom gap */}
<div className="relative z-10 h-[3200px] flex  justify-center">
  <div className="sticky top-[250px] flex items-center justify-center"
    style={{
      width: '800px',
      height: '800px',
      backgroundColor: '#001F1F',
        marginTop: '250px',
      marginBottom: '250px',
    }}
  >


            <div className="text-center px-14 py-10">
              <h1 
                className="text-green-400 text-4xl mb-8 tracking-wider"
                style={{ 
                  fontFamily: 'styreneB, serif',
                  fontWeight: 400,
                  letterSpacing: '0.1em'
                }}
              >
                PROLOGUE
              </h1>

              <div className="space-y-6">
                <p className="text-white text-xl leading-relaxed" style={{ fontFamily: 'styreneB, serif', fontWeight: 400 }}>
                  United Ummah is more than just a community centre it is a <br />
                  sanctuary for Muslims from every walk of life, a place where <br />
                  hearts meet, hands join, and faith flourishes.
                </p>
                <p className="text-white text-xl leading-relaxed" style={{ fontFamily: 'styreneB, serif', fontWeight: 400 }}>
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
                  letterSpacing: '0.05em'
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