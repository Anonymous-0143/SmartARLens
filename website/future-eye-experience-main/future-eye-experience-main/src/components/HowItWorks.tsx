
import React from 'react';
import { Zap, Cloud, Cpu, WifiIcon, Database, Shield, Lock } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-dark-900 relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 grid-bg opacity-10"></div>
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-neon-blue/5 rounded-full blur-[100px] -translate-x-1/3"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[100px] translate-x-1/4"></div>
      
      <div className="container-width relative z-10">
        <div className="text-center mb-16">
          <span className="text-neon-blue text-sm uppercase tracking-wider font-medium">Technology</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">How It Works</h2>
          <div className="mt-4 mx-auto w-24 h-1 bg-neon-blue rounded"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Flow diagram */}
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-12 bottom-12 w-0.5 bg-gradient-to-b from-neon-blue via-neon-cyan to-neon-blue/30 -translate-x-1/2"></div>
            
            <div className="space-y-20 md:space-y-32">
              {/* Step 1 */}
              <div className="relative flex flex-col md:flex-row md:items-center">
                <div className="md:w-1/2 md:pr-8 order-2 md:order-1 mt-6 md:mt-0">
                  <div className="glass-card p-6 rounded-xl border border-neon-blue/10 shadow-lg shadow-neon-blue/5">
                    <h3 className="text-xl font-semibold text-neon-blue mb-3">Micro-Electronics</h3>
                    <p className="text-gray-300">
                      The AR lens contains a sophisticated array of micro-components, including flexible 
                      displays, sensors, and processing units. These components are so small they 
                      remain invisible to the naked eye.
                    </p>
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="flex items-center space-x-2 cursor-help">
                              <Cpu className="text-neon-blue" size={16} />
                              <span className="text-sm">5nm Processor</span>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="text-xs">Ultra-efficient 5nm chipset powers AR calculations</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="flex items-center space-x-2 cursor-help">
                              <Zap className="text-neon-blue" size={16} />
                              <span className="text-sm">Energy Harvesting</span>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="text-xs">Converts eye movement and light into usable power</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-8 order-1 md:order-2 flex justify-center">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-dark-800 border-4 border-neon-blue flex items-center justify-center z-10 relative shadow-xl shadow-neon-blue/20">
                      <Cpu className="text-neon-blue animate-pulse" size={32} />
                    </div>
                    <div className="hidden md:block absolute top-1/2 -right-8 w-8 h-0.5 bg-neon-blue/50 -translate-y-1/2"></div>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="relative flex flex-col md:flex-row md:items-center">
                <div className="md:w-1/2 md:pr-8 order-2 mt-6 md:mt-0">
                  <div className="glass-card p-6 rounded-xl border border-neon-blue/10 shadow-lg shadow-neon-blue/5">
                    <h3 className="text-xl font-semibold text-neon-blue mb-3">Wireless Connectivity</h3>
                    <p className="text-gray-300">
                      The lenses establish secure wireless connections with your smartphone and cloud services.
                      Data is transmitted using ultra-low power wireless technology that's 
                      optimized for minimal latency.
                    </p>
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="flex items-center space-x-2 cursor-help">
                              <WifiIcon className="text-neon-blue" size={16} />
                              <span className="text-sm">Ultra-Low Latency</span>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="text-xs">Sub-millisecond response time for real-time applications</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="flex items-center space-x-2 cursor-help">
                              <Lock className="text-neon-blue" size={16} />
                              <span className="text-sm">End-to-End Encryption</span>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="text-xs">Military-grade security protects all data transmissions</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-8 order-1 flex justify-center">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-dark-800 border-4 border-neon-blue flex items-center justify-center z-10 relative shadow-xl shadow-neon-blue/20">
                      <WifiIcon className="text-neon-blue animate-pulse" size={32} />
                    </div>
                    <div className="hidden md:block absolute top-1/2 -left-8 w-8 h-0.5 bg-neon-blue/50 -translate-y-1/2"></div>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="relative flex flex-col md:flex-row md:items-center">
                <div className="md:w-1/2 md:pr-8 order-2 md:order-1 mt-6 md:mt-0">
                  <div className="glass-card p-6 rounded-xl border border-neon-blue/10 shadow-lg shadow-neon-blue/5">
                    <h3 className="text-xl font-semibold text-neon-blue mb-3">Cloud Processing</h3>
                    <p className="text-gray-300">
                      Complex data processing happens in our secure cloud infrastructure. Advanced AI algorithms 
                      analyze visual inputs, generate AR overlays, and handle resource-intensive 
                      tasks to preserve lens battery life.
                    </p>
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="flex items-center space-x-2 cursor-help">
                              <Database className="text-neon-blue" size={16} />
                              <span className="text-sm">Distributed Computing</span>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="text-xs">Global network provides processing power on demand</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="flex items-center space-x-2 cursor-help">
                              <Cloud className="text-neon-blue" size={16} />
                              <span className="text-sm">Real-time Analysis</span>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="text-xs">Processes 120 frames per second with AI enhancement</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-8 order-1 md:order-2 flex justify-center">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-dark-800 border-4 border-neon-blue flex items-center justify-center z-10 relative shadow-xl shadow-neon-blue/20">
                      <Cloud className="text-neon-blue animate-pulse" size={32} />
                    </div>
                    <div className="hidden md:block absolute top-1/2 -right-8 w-8 h-0.5 bg-neon-blue/50 -translate-y-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tech specifications */}
          <div className="mt-20">
            <div className="glass-card rounded-xl overflow-hidden border border-neon-blue/10 shadow-lg shadow-neon-blue/5">
              <div className="bg-gradient-to-r from-dark-700 to-dark-800 py-3 px-6 border-b border-neon-blue/20">
                <h3 className="font-semibold text-neon-blue">Technical Specifications</h3>
              </div>
              <div className="p-6 bg-dark-800/50 backdrop-blur-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-2 border-b border-dark-700">
                      <span className="text-gray-400">Display Type</span>
                      <span className="font-medium text-white">Micro LED</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-dark-700">
                      <span className="text-gray-400">Resolution</span>
                      <span className="font-medium text-white">1440 × 1080 per eye</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-dark-700">
                      <span className="text-gray-400">Field of View</span>
                      <span className="font-medium text-white">120°</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-dark-700">
                      <span className="text-gray-400">Battery Life</span>
                      <span className="font-medium text-white">18 hours</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-2 border-b border-dark-700">
                      <span className="text-gray-400">Processor</span>
                      <span className="font-medium text-white">Custom ARM 5nm</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-dark-700">
                      <span className="text-gray-400">Memory</span>
                      <span className="font-medium text-white">4GB RAM</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-dark-700">
                      <span className="text-gray-400">Storage</span>
                      <span className="font-medium text-white">128GB Flash</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-dark-700">
                      <span className="text-gray-400">Connectivity</span>
                      <span className="font-medium text-white">Bluetooth 5.2, Wi-Fi 6</span>
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

export default HowItWorks;
