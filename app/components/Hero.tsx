import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 py-24 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.2),transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.2),transparent_70%)]"></div>
      <h1
        className={`text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg transition-opacity duration-1000 ${
          isVisible ? 'opacity-100 animate-fade-slide' : 'opacity-0'
        }`}
      >
        Hunt the Best Deals in Style
      </h1>
      <p
        className={`mt-6 text-xl text-gray-100 max-w-2xl mx-auto transition-opacity delay-200 duration-1000 ${
          isVisible ? 'opacity-100 animate-fade-slide' : 'opacity-0'
        }`}
      >
        Compare prices across marketplaces with a futuristic twist.
      </p>
      <button
        className="mt-10 px-8 py-4 bg-white text-blue-600 dark:text-purple-600 font-semibold rounded-full shadow-neon dark:shadow-neon-dark hover:bg-opacity-90 transition-all duration-300 animate-pulse-glow"
      >
        Dive In
      </button>
    </div>
  );
};

export default Hero;