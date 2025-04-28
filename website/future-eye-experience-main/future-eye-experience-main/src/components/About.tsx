
import { Eye, CircuitBoard, Shield, Gauge } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-dark-900">
      <div className="container-width">
        <div className="text-center mb-16">
          <span className="text-neon-blue text-sm uppercase tracking-wider font-medium">About the Technology</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">What Are Smart AR Lenses?</h2>
          <div className="mt-4 mx-auto w-24 h-1 bg-neon-blue rounded"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="glass-card p-8 rounded-xl animate-fade-in">
            <p className="text-gray-300 mb-6">
              Smart AR Lenses represent the pinnacle of wearable technology, merging advanced microelectronics with 
              ophthalmological innovation. Unlike traditional smartglasses or headsets, these lenses sit directly on your 
              eyes, providing an unobtrusive and seamless augmented reality experience.
            </p>
            <p className="text-gray-300 mb-6">
              Each lens contains microscopic displays, sensors, and wireless communication hardware powered by 
              revolutionary energy-harvesting technology. The result is a device that enhances your natural vision 
              with digital information while remaining virtually invisible to others.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex flex-col items-center text-center p-4 bg-dark-800 rounded-lg">
                <Eye className="text-neon-blue mb-3" size={32} />
                <h3 className="font-semibold">Precision Optics</h3>
                <p className="text-sm text-gray-400 mt-2">8K resolution micro-displays with 120° field of view</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-dark-800 rounded-lg">
                <CircuitBoard className="text-neon-blue mb-3" size={32} />
                <h3 className="font-semibold">5nm Processor</h3>
                <p className="text-sm text-gray-400 mt-2">Neural engine with advanced AI capabilities</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-dark-800 rounded-lg">
                <Shield className="text-neon-blue mb-3" size={32} />
                <h3 className="font-semibold">Bio-compatible</h3>
                <p className="text-sm text-gray-400 mt-2">Medical-grade materials for extended wear</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-dark-800 rounded-lg">
                <Gauge className="text-neon-blue mb-3" size={32} />
                <h3 className="font-semibold">18hr Battery</h3>
                <p className="text-sm text-gray-400 mt-2">Energy-efficient operation with quick charging</p>
              </div>
            </div>
          </div>

          <div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-neon-blue/20 to-neon-cyan/20 blur-xl opacity-70"></div>
              <div className="relative glass-card rounded-xl overflow-hidden">
                <div className="h-[400px] bg-gradient-to-br from-dark-800 to-dark-900 p-6 flex flex-col">
                  <h3 className="text-xl font-semibold mb-4">Development Timeline</h3>
                  
                  {/* Timeline */}
                  <div className="relative pl-8 pb-2 border-l border-neon-blue/30 mt-4 flex-1">
                    <div className="space-y-8">
                      <div className="relative">
                        <span className="absolute -left-[25px] flex h-6 w-6 items-center justify-center rounded-full bg-dark-800 border border-neon-blue">
                          <span className="h-2 w-2 rounded-full bg-neon-blue"></span>
                        </span>
                        <div>
                          <h4 className="text-neon-blue font-semibold">2021</h4>
                          <p className="text-sm text-gray-300">First prototype developed by our research team</p>
                        </div>
                      </div>
                      
                      <div className="relative">
                        <span className="absolute -left-[25px] flex h-6 w-6 items-center justify-center rounded-full bg-dark-800 border border-neon-blue">
                          <span className="h-2 w-2 rounded-full bg-neon-blue"></span>
                        </span>
                        <div>
                          <h4 className="text-neon-blue font-semibold">2022</h4>
                          <p className="text-sm text-gray-300">Clinical trials and medical certification</p>
                        </div>
                      </div>
                      
                      <div className="relative">
                        <span className="absolute -left-[25px] flex h-6 w-6 items-center justify-center rounded-full bg-dark-800 border border-neon-blue">
                          <span className="h-2 w-2 rounded-full bg-neon-blue"></span>
                        </span>
                        <div>
                          <h4 className="text-neon-blue font-semibold">2023</h4>
                          <p className="text-sm text-gray-300">Production optimization and initial release</p>
                        </div>
                      </div>
                      
                      <div className="relative">
                        <span className="absolute -left-[25px] flex h-6 w-6 items-center justify-center rounded-full bg-dark-800 border border-neon-blue">
                          <span className="h-2 w-2 rounded-full bg-neon-blue"></span>
                        </span>
                        <div>
                          <h4 className="text-neon-blue font-semibold">2024</h4>
                          <p className="text-sm text-gray-300">Next-generation V2 launch with enhanced features</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
