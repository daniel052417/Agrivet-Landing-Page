import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Branches = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const branches = [
    {
      name: 'Lawaan 2 Branch',
      address: 'Talisay Avenue, Lawaan 2, Talisay City',
      phone: '+63 917 123 4567',
      hours: 'Mon-Sat: 7:00 AM - 6:00 PM',
      image: '🏪',
      color: 'from-blue-500 to-cyan-500',
      mapUrl: '#',
    },
    {
      name: 'San Isidro Branch',
      address: 'Talisay Avenue, San Isidro, Talisay City',
      phone: '+63 917 234 5678',
      hours: 'Mon-Sat: 7:00 AM - 6:00 PM',
      image: '🏬',
      color: 'from-green-500 to-emerald-500',
      mapUrl: '#',
    },
    {
      name: 'Poblacion Branch',
      address: 'Talisay Avenue, Poblacion, Talisay City',
      phone: '+63 917 345 6789',
      hours: 'Mon-Sat: 7:00 AM - 6:00 PM',
      image: '🏢',
      color: 'from-purple-500 to-pink-500',
      mapUrl: '#',
    },
  ];

  return (
    <section ref={sectionRef} id="branches" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
            <MapPin className="w-4 h-4 mr-2" />
            Find Us
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
              Branch Locations
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visit any of our branches across Talisay City for quality products and expert service
          </p>
        </div>

        {/* Branches Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {branches.map((branch, index) => (
            <div
              key={index}
              onClick={() => setSelectedBranch(index)}
              className={`group cursor-pointer transform transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              } ${selectedBranch === index ? 'scale-105' : 'hover:scale-105'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full ${
                  selectedBranch === index ? 'ring-4 ring-green-500' : ''
                }`}
              >
                {/* Branch Header with Gradient */}
                <div className={`bg-gradient-to-r ${branch.color} p-6 text-white`}>
                  <div className="text-6xl mb-4 text-center">{branch.image}</div>
                  <h3 className="text-xl font-bold text-center">{branch.name}</h3>
                </div>

                {/* Branch Info */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{branch.address}</p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <a href={`tel:${branch.phone}`} className="text-gray-700 hover:text-green-600 transition-colors">
                      {branch.phone}
                    </a>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <p className="text-gray-700">{branch.hours}</p>
                  </div>

                  <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors duration-300 font-medium">
                    <Navigation size={18} />
                    <span>Get Directions</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Map Section */}
        <div
          className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Map Placeholder */}
            <div className="aspect-video bg-gradient-to-br from-green-100 via-emerald-100 to-teal-100 flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="w-16 h-16 mx-auto mb-4 text-green-600" />
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Interactive Map</h4>
                <p className="text-gray-600 mb-6">
                  Embed Google Maps here showing all branch locations
                </p>
                <div className="inline-flex items-center space-x-2 px-6 py-3 bg-white rounded-lg shadow-md">
                  <span className="text-green-600 font-semibold">
                    Currently showing: {branches[selectedBranch].name}
                  </span>
                </div>
              </div>
            </div>

            {/* Map Info Bar */}
            <div className="bg-gray-50 p-6 border-t border-gray-200">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">All branches in Talisay City</p>
                    <p className="text-lg font-bold text-gray-900">Easy to reach and accessible</p>
                  </div>
                </div>
                <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  View on Google Maps
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Service Hours Banner */}
        <div
          className={`mt-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white text-center transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <Clock className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">We're Here When You Need Us</h3>
          <p className="text-lg text-white/90">
            Open Monday to Saturday, 7:00 AM - 6:00 PM across all branches
          </p>
        </div>
      </div>
    </section>
  );
};

export default Branches;