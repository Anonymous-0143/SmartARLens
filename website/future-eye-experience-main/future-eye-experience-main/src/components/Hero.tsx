
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 300);
  }, []);

  return (
    <div className="relative min-h-[100vh] flex items-center overflow-hidden grid-bg">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-radial from-dark-900/90 via-dark-800 to-dark-900"></div>
      
      {/* Grid overlay background with data lines animation */}
      <div className="absolute inset-0 opacity-20"></div>
      
      {/* Content */}
      <div className="container-width relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className={`lg:w-1/2 text-center lg:text-left transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-neon-blue uppercase border border-neon-blue rounded-full mb-6">
              Future of Vision
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Smart AR Lenses – <span className="text-neon-blue">See the Future</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
              Experience the world with revolutionary augmented reality contact lenses. 
              Seamlessly blend digital information with your natural vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="btn-primary">Explore Features</Button>
              <Button className="btn-secondary">Shop Now</Button>
            </div>
          </div>
          
          <div className={`lg:w-1/2 flex justify-center transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            {/* Eye animation with AR overlay */}
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex items-center justify-center">
              {/* Ripple animations */}
              <div className="absolute inset-0 rounded-full border border-neon-blue/30 animate-ripple"></div>
              <div className="absolute inset-0 rounded-full border border-neon-blue/20 animate-ripple" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute inset-0 rounded-full border border-neon-blue/10 animate-ripple" style={{ animationDelay: '1s' }}></div>
              
              {/* Eye with AR lens */}
              <div className="relative w-[200px] h-[200px] md:w-[260px] md:h-[260px] rounded-full bg-dark-700 overflow-hidden shadow-xl animate-float">
                {/* Iris */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] md:w-[180px] md:h-[180px] rounded-full bg-dark-600">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] md:w-[160px] md:h-[160px] rounded-full" 
                       style={{ background: 'radial-gradient(circle, #2b5876 0%, #111827 100%)' }}>
                    {/* Pupil */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50px] h-[50px] md:w-[70px] md:h-[70px] rounded-full bg-black">
                      {/* Reflection */}
                      <div className="absolute top-1/4 left-1/4 w-[15px] h-[15px] md:w-[20px] md:h-[20px] rounded-full bg-white opacity-70"></div>
                    </div>
                    
                    {/* AR interface elements */}
                    <div className="absolute inset-0 rounded-full animate-pulse-glow">
                      <div className="absolute top-[30%] left-0 w-full h-[1px] bg-neon-blue/70"></div>
                      <div className="absolute top-0 left-[30%] w-[1px] h-full bg-neon-blue/70"></div>
                      <div className="absolute top-[70%] left-0 w-full h-[1px] bg-neon-blue/70"></div>
                      <div className="absolute top-0 left-[70%] w-[1px] h-full bg-neon-blue/70"></div>
                      
                      {/* Data indicators */}
                      <div className="absolute top-[10%] right-[10%] w-[30px] h-[30px] rounded-md border border-neon-blue/70 flex items-center justify-center">
                        <div className="w-[15px] h-[15px] bg-neon-blue/30 rounded-sm"></div>
                      </div>
                      <div className="absolute bottom-[20%] left-[15%] w-[40px] h-[6px] bg-neon-blue/50 rounded-md"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[30px] h-[50px] rounded-full border-2 border-white/30 flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
