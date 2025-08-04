import React, { useEffect } from 'react';

const PrologueGallery = () => {
  const generateColumnImages = (columnName, heights) => {
    return Array.from({ length: heights.length }, (_, index) => ({
      src: `/grid/${columnName}-${['one', 'two', 'three', 'four', 'five', 'six'][index]}.png`,
      alt: `${columnName} ${index + 1}`,
      height: heights[index]
    }));
  };

  const columns = [
    { name: 'first', images: generateColumnImages('first', [470, 450, 478, 1050, 474, 498]) },
    { name: 'second', images: generateColumnImages('second', [474, 1050, 474, 473, 470, 494]) },
    { name: 'third', images: generateColumnImages('third', [475, 475, 1050, 480, 480, 475]) },
    { name: 'four', images: generateColumnImages('four', [480, 480, 470, 1050, 485, 480]) },
    { name: 'six', images: generateColumnImages('six', [1050, 475, 475, 470, 490, 475]) }
  ];

  // 🔧 Set custom CSS variable for each image from its data attribute
  useEffect(() => {
    document.querySelectorAll('.image-container').forEach((el) => {
      const bg = el.getAttribute('data-bg');
      el.style.setProperty('--bg-img', `url(${bg})`);
    });
  }, []);

  return (
    <div
      className="relative bg-gray-100"
      style={{
        width: '1955px',
        height: '3200px',
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
      `}</style>

      {/* Image Gallery Columns */}
      <div className="flex absolute inset-0 z-0">
        {columns.map((column) => (
          <div
            key={column.name}
            className="flex flex-col"
            style={{
              width: '391px',
              height: '100%',
            }}
          >
            {column.images.map((image, imageIndex) => (
              <div
                key={`${column.name}-${imageIndex}`}
                className="image-container bg-gray-300 border border-gray-400 relative cursor-pointer"
                data-bg={image.src}
                style={{
                  height: `${image.height}px`,
                  backgroundImage: `url(${image.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Sticky Container with top and bottom gap */}
      <div className="relative z-10 h-[3200px] flex justify-center">
        <div
          className="sticky top-[250px] flex items-center justify-center"
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
                letterSpacing: '0.1em',
              }}
            >
              PROLOGUE
            </h1>

            <div className="space-y-6">
              <p
                className="text-white text-xl leading-relaxed"
                style={{
                  fontFamily: 'styreneB, serif',
                  fontWeight: 400,
                }}
              >
                United Ummah is more than just a community centre it is a <br />
                sanctuary for Muslims from every walk of life, a place where <br />
                hearts meet, hands join, and faith flourishes.
              </p>
              <p
                className="text-white text-xl leading-relaxed"
                style={{
                  fontFamily: 'styreneB, serif',
                  fontWeight: 400,
                }}
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
      </div>
    </div>
  );
};

export default PrologueGallery;
