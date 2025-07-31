import React from 'react';

export default function UpcomingEvents() {
  const events = [
    {
      id: 1,
      title: "Community Iftar",
      date: "August 15, 2025",
      description: "Join us for a blessed evening of breaking bread together.",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&crop=center",
      position: "left"
    },
    {
      id: 2,
      title: "Youth Leadership Summit",
      date: "September 5, 2025",
      description: "Empowering tomorrow's leaders today.",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop&crop=center",
      position: "right"
    },
    {
      id: 3,
      title: "Charity Drive",
      date: "October 10, 2025",
      description: "Extending our hand to those who need it most.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop&crop=center",
      position: "right"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-light text-gray-800 mb-8 tracking-wide">
            Upcoming Events
          </h1>
          <div className="max-w-2xl">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              At United Ummah, every gathering is more than just an event — it's a chance to strengthen bonds, 
              share blessings, and grow together in faith. From inspiring lectures and vibrant youth activities to 
              community Iftars and charity drives, our events are thoughtfully crafted to bring hearts closer and 
              uplift every member of our Ummah.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Come as you are, bring your family and friends, and be part of moments that create memories — 
              and sometimes questionable chai art. There's always a seat for you here.
            </p>
          </div>
        </div>

        {/* Events Grid */}
        <div className="space-y-24">
          {events.map((event, index) => (
            <div 
              key={event.id} 
              className={`flex flex-col ${event.position === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'} 
                         items-center gap-12 lg:gap-16`}
            >
              {/* Image Container */}
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="relative group">
                  <div 
                    className="w-[420px] h-[258px] overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-3xl"
                    style={{
                      background: `url(${event.image}) center/cover`,
                      borderRadius: '210px 210px 0 0'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>

              {/* Content Container */}
              <div className={`w-full lg:w-1/2 ${event.position === 'left' ? 'lg:pl-8' : 'lg:pr-8'} text-center lg:text-left`}>
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-5xl font-light text-gray-800 tracking-wide leading-tight">
                    {event.title}
                  </h2>
                  <p className="text-xl text-gray-600 font-light tracking-wide">
                    {event.date}
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed max-w-md mx-auto lg:mx-0">
                    {event.description}
                  </p>
                  <div className="pt-4">
                    <button className="group relative px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium tracking-wide rounded-full 
                                     transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:from-orange-600 hover:to-red-600">
                      <span className="relative z-10">Learn More</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-24 text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-white/20">
            <h3 className="text-3xl font-light text-gray-800 mb-6 tracking-wide">
              Join Our Community
            </h3>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              Stay connected with our vibrant community and never miss an opportunity to grow, learn, and give back together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium tracking-wide rounded-full 
                               transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Subscribe to Updates
              </button>
              <button className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-medium tracking-wide rounded-full 
                               transform transition-all duration-300 hover:scale-105 hover:border-gray-400 hover:bg-gray-50">
                View All Events
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}