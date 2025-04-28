
import { ArrowRight, BrainCog, Network, Share2, Braces, Fingerprint } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const FutureVision = () => {
  return (
    <section id="future" className="section-padding bg-dark-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-neon-blue/5 rounded-full blur-[120px] -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-neon-purple/5 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container-width relative z-10">
        <div className="text-center mb-16">
          <span className="text-neon-blue text-sm uppercase tracking-wider font-medium">Looking Ahead</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">Future Vision</h2>
          <div className="mt-4 mx-auto w-24 h-1 bg-neon-blue rounded"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video section with enhanced styling */}
          <div className="glass-card p-2 rounded-xl overflow-hidden shadow-neon relative group">
            <div className="aspect-w-16 aspect-h-9 relative overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-dark-900/90 to-dark-800/90 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                <div className="text-center p-6">
                  <motion.div 
                    className="w-20 h-20 rounded-full bg-neon-blue/20 border border-neon-blue mx-auto flex items-center justify-center"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                  </motion.div>
                  <p className="mt-4 text-gray-300">Experience the Future</p>
                </div>
              </div>
            </div>
            
            {/* Video overlay effects */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-blue"></div>
              <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-neon-purple via-neon-blue to-neon-purple"></div>
            </div>
          </div>
          
          {/* Content section with enhanced features */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              The Next Evolution of AR
            </h3>
            <p className="text-gray-300 mb-6">
              We're pushing the boundaries of what's possible in augmented reality. Our next-generation 
              technologies will revolutionize how you interact with the digital and physical worlds.
            </p>
            
            <div className="space-y-6">
              {[
                {
                  icon: Network,
                  title: "5G Integration",
                  description: "Ultra-low latency connections enabling real-time AR experiences and seamless data streaming."
                },
                {
                  icon: BrainCog,
                  title: "Advanced AI",
                  description: "Personalized AI assistance that learns and adapts to your preferences and needs."
                },
                {
                  icon: Share2,
                  title: "Shared Experiences",
                  description: "Connect with others in shared AR spaces for collaborative work and social interaction."
                },
                {
                  icon: Braces,
                  title: "Open Platform",
                  description: "Developer-friendly SDK for creating custom AR applications and experiences."
                },
                {
                  icon: Fingerprint,
                  title: "Biometric Integration",
                  description: "Advanced health monitoring and biometric authentication systems."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-lg p-4 bg-gradient-to-r from-dark-700/50 to-dark-800/50 hover:from-dark-700/70 hover:to-dark-800/70 transition-all duration-300"
                >
                  <div className="flex items-start">
                    <div className="p-2 bg-gradient-to-br from-neon-blue to-neon-purple rounded-lg mr-4">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{feature.title}</h4>
                      <p className="text-sm text-gray-400 mt-1">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8">
              <Button className="group btn-primary">
                <span>Join Beta Program</span>
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureVision;
