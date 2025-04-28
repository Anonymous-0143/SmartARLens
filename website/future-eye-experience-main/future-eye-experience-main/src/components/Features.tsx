import { useState } from 'react';
import { Eye, Activity, MapPin, MessageSquare, Smartphone, BarChart3 } from 'lucide-react';
import { cn } from "@/lib/utils";

const featuresList = [
  {
    id: 1,
    icon: <Eye size={24} />,
    title: 'Eye Control Interface',
    description: 'Control AR elements and applications with natural eye movements and gestures. Our proprietary tracking system provides precision control without external devices.',
    color: 'from-blue-400 to-cyan-300',
  },
  {
    id: 2,
    icon: <Activity size={24} />,
    title: 'Health Monitoring',
    description: 'Track key health metrics including heart rate, blood oxygen, glucose levels, and sleep patterns with medical-grade accuracy.',
    color: 'from-green-400 to-emerald-300',
  },
  {
    id: 3,
    icon: <MapPin size={24} />,
    title: 'Navigation Overlay',
    description: 'Real-time directional guidance with street information, points of interest, and traffic alerts displayed directly in your field of vision.',
    color: 'from-purple-400 to-violet-300',
  },
  {
    id: 4,
    icon: <MessageSquare size={24} />,
    title: 'Visual Communication',
    description: 'Send and receive messages, conduct video calls, and share your POV with others in your network without taking your eyes off the real world.',
    color: 'from-red-400 to-rose-300',
  },
  {
    id: 5,
    icon: <Smartphone size={24} />,
    title: 'Device Integration',
    description: 'Seamlessly connect with your smartphone, tablet, and other smart devices for expanded control and functionality.',
    color: 'from-amber-400 to-yellow-300',
  },
  {
    id: 6,
    icon: <BarChart3 size={24} />,
    title: 'Data Visualization',
    description: 'Convert complex data into intuitive visual overlays for professional applications in medicine, engineering, and business.',
    color: 'from-indigo-400 to-blue-300',
  },
];

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(1);

  return (
    <section id="features" className="section-padding bg-dark-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-neon-blue/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-neon-purple/5 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container-width relative z-10">
        <div className="text-center mb-16">
          <span className="text-neon-blue text-sm uppercase tracking-wider font-medium">Advanced Capabilities</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">Smart Features</h2>
          <div className="mt-4 mx-auto w-24 h-1 bg-neon-blue rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Interactive 3D-like visualization */}
          <div className="order-2 md:order-1">
            <div className="relative h-[400px] w-full max-w-[500px] mx-auto">
              {/* Eye base visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[280px] h-[280px] rounded-full bg-dark-700 animate-pulse-glow">
                  {/* Iris */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] rounded-full"
                       style={{ background: 'radial-gradient(circle, #2b5876 0%, #111827 100%)' }}>
                    {/* Pupil */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] rounded-full bg-black"></div>
                  </div>

                  {/* Feature visualization */}
                  <div className="absolute inset-0">
                    {/* Eye control lines */}
                    {activeFeature === 1 && (
                      <div className="absolute inset-0 animate-fade-in">
                        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
                        <div className="absolute top-0 left-1/2 w-[2px] h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-[150px] h-[150px] rounded-full border-2 border-dashed border-blue-400/50 animate-spin" style={{ animationDuration: '15s' }}></div>
                        </div>
                      </div>
                    )}

                    {/* Health monitoring */}
                    {activeFeature === 2 && (
                      <div className="absolute inset-0 animate-fade-in">
                        <div className="absolute top-1/4 left-1/4 right-1/4 h-[40px] flex items-center">
                          <div className="w-full h-[30px] relative overflow-hidden">
                            <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-green-500 to-green-300 w-3/4 animate-pulse"></div>
                            <div className="absolute inset-y-0 w-full flex items-center px-2">
                              <Activity className="text-white" size={20} />
                              <span className="ml-2 text-white text-xs">72 BPM</span>
                            </div>
                          </div>
                        </div>
                        <div className="absolute top-2/3 left-1/3 right-1/3 flex justify-center">
                          <div className="px-3 py-1 bg-gradient-to-r from-green-500/80 to-green-300/80 rounded-md backdrop-blur-sm">
                            <span className="text-xs font-medium">O²: 98%</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Navigation overlay */}
                    {activeFeature === 3 && (
                      <div className="absolute inset-0 animate-fade-in">
                        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <div className="px-3 py-1 bg-purple-500/20 backdrop-blur-sm rounded-md border border-purple-400/30 flex items-center">
                            <MapPin size={14} className="text-purple-400" />
                            <span className="ml-1 text-xs">250m</span>
                          </div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-[220px] h-[1px] bg-gradient-to-r from-transparent via-purple-400/50 to-transparent rotate-45"></div>
                          <div className="w-[220px] h-[1px] bg-gradient-to-r from-transparent via-purple-400/50 to-transparent -rotate-45"></div>
                        </div>
                      </div>
                    )}

                    {/* Other feature visualizations would go here with conditionals */}
                    {/* This is simplified for brevity */}
                  </div>
                </div>
              </div>
              
              {/* Connection points */}
              {featuresList.map((feature, index) => {
                // Calculate position in a circle
                const angle = (index * (360 / featuresList.length)) * (Math.PI / 180);
                const radius = 180;
                const top = 50 + 45 * Math.sin(angle);
                const left = 50 + 45 * Math.cos(angle);
                
                return (
                  <div 
                    key={feature.id}
                    className={cn(
                      "absolute w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300",
                      activeFeature === feature.id 
                        ? "bg-gradient-to-r scale-125 shadow-lg shadow-neon-blue/20" 
                        : "bg-dark-700 hover:scale-110"
                    )}
                    style={{ 
                      top: `${top}%`, 
                      left: `${left}%`,
                      backgroundImage: activeFeature === feature.id ? `linear-gradient(to right, ${feature.color.split(' ')[1]})` : 'none'
                    }}
                    onClick={() => setActiveFeature(feature.id)}
                  >
                    <div className={cn(
                      "text-white transition-colors",
                      activeFeature === feature.id ? "text-white" : "text-gray-400"
                    )}>
                      {feature.icon}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Feature description */}
          <div className="order-1 md:order-2">
            <div className="space-y-6">
              {featuresList.map((feature) => (
                <div 
                  key={feature.id} 
                  className={cn(
                    "glass-card p-6 rounded-xl transition-all duration-500 cursor-pointer",
                    activeFeature === feature.id 
                      ? "border-l-4 shadow-lg transform translate-x-2" 
                      : "opacity-70 hover:opacity-100"
                  )}
                  style={{
                    borderLeftColor: activeFeature === feature.id ? `rgb(var(--tw-gradient-${feature.color.split(' ')[1].replace(/-\d+$/, '')}))` : 'transparent'
                  }}
                  onClick={() => setActiveFeature(feature.id)}
                >
                  <div className="flex items-start">
                    <div className={cn(
                      "p-2 rounded-lg mr-4",
                      activeFeature === feature.id ? `bg-gradient-to-br ${feature.color}` : "bg-dark-700"
                    )}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{feature.title}</h3>
                      <p className="text-gray-300 mt-1 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
