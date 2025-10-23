import { ArrowRight, Play } from 'lucide-react';
import { useEffect, useState } from 'react';
import store from '../assets/store.jpg';
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></span>
              <span className="text-sm font-medium text-gray-700">
                Trusted by 1000+ Farmers & Pet Owners
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Empowering{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
                Farmers
              </span>{' '}
              and{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
                Pet Owners
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Manage your supplies, shop online, and monitor your Agrivet business with our integrated system.{' '}
              <span className="font-semibold text-gray-900">Anytime, Anywhere.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                <span className="font-semibold">Shop Now</span>
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </button>

              <button className="group flex items-center justify-center space-x-2 px-8 py-4 bg-white text-gray-900 rounded-xl border-2 border-gray-200 hover:border-green-500 hover:shadow-lg transition-all duration-200">
                <Play size={20} className="text-green-600" />
                <span className="font-semibold">Watch Demo</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-gray-200">
              <div>
                <p className="text-3xl font-bold text-gray-900">10+</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">3</p>
                <p className="text-sm text-gray-600">Branch Locations</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">500+</p>
                <p className="text-sm text-gray-600">Products</p>
              </div>
            </div>
          </div>

          {/* Right Content - Image Placeholder */}
          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <div className="relative">
              {/* Main Image Card */}
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <div className="aspect-square bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">
                          <img
                src={store}
                alt="Store"
                className="rounded-2xl shadow-2xl w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">4.9/5</p>
                    <p className="text-xs text-gray-600">Customer Rating</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 animate-float animation-delay-2000">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📦</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Fast Delivery</p>
                    <p className="text-xs text-gray-600">Same Day Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-gray-400 rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;