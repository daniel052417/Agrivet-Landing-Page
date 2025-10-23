import { Target, Eye, Award, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const features = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Our Mission',
      description: 'To provide quality farm and pet care products that empower our community to grow and thrive.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'Our Vision',
      description: 'To be the leading Agrivet service provider in the region, trusted by farmers and pet owners.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Our Values',
      description: 'Quality, integrity, and customer satisfaction guide everything we do.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Our Community',
      description: 'Serving Talisay City and beyond with dedication and expertise for over 10 years.',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
              AgriVet
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            For over 10 years, we've been providing quality farm and pet care products across Talisay City.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div
            className={`transform transition-all duration-1000 delay-200 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <div className="text-8xl mb-4">🏪</div>
                    <p className="text-2xl font-bold mb-2">Store Photo</p>
                    <p className="text-white/80">Our Talisay Branch</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-green-100 rounded-2xl -z-10"></div>
            </div>
          </div>

          {/* Text Content */}
          <div
            className={`transform transition-all duration-1000 delay-400 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Helping Our Community Grow
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              AgriVet has been a trusted partner for farmers and pet owners throughout Talisay City. 
              We understand the unique needs of our agricultural community and provide comprehensive 
              solutions for both farm and companion animal care.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our commitment goes beyond just selling products. We offer expert advice, quality 
              assurance, and a customer-first approach that has made us the go-to choice for 
              agricultural and veterinary supplies in the region.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-xl p-4">
                <p className="text-3xl font-bold text-green-600 mb-1">10+</p>
                <p className="text-sm text-gray-700">Years of Service</p>
              </div>
              <div className="bg-emerald-50 rounded-xl p-4">
                <p className="text-3xl font-bold text-emerald-600 mb-1">3</p>
                <p className="text-sm text-gray-700">Branch Locations</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-green-500 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <div
                className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;