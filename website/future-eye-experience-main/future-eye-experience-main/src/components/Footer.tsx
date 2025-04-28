
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-900 relative">
      {/* Contact section */}
      <div id="contact" className="container-width py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
            <p className="text-gray-300 mb-8 max-w-lg">
              Have questions about our Smart AR Lenses? Our team is here to help you with any inquiries.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-neon-blue/10 flex items-center justify-center mr-4">
                  <MapPin className="text-neon-blue" size={18} />
                </div>
                <span>1234 Technology Drive, San Francisco, CA 94103</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-neon-blue/10 flex items-center justify-center mr-4">
                  <Mail className="text-neon-blue" size={18} />
                </div>
                <span>contact@visionarlens.com</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-neon-blue/10 flex items-center justify-center mr-4">
                  <Phone className="text-neon-blue" size={18} />
                </div>
                <span>+1 (800) 555-1234</span>
              </div>
            </div>
          </div>
          
          <div className="glass-card rounded-xl p-8">
            <form>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="bg-dark-700 text-white rounded-md w-full px-4 py-3 border border-dark-600 focus:outline-none focus:border-neon-blue"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="bg-dark-700 text-white rounded-md w-full px-4 py-3 border border-dark-600 focus:outline-none focus:border-neon-blue"
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="bg-dark-700 text-white rounded-md w-full px-4 py-3 border border-dark-600 focus:outline-none focus:border-neon-blue"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <Button className="group btn-primary w-full">
                  <span>Send Message</span>
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      {/* Main footer */}
      <div className="border-t border-dark-700">
        <div className="container-width py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center">
                <a href="/" className="text-xl font-display text-white flex items-center">
                  <span className="text-neon-blue">Vision</span><span>AR</span>
                </a>
              </div>
              <p className="text-gray-400 text-sm mt-2">
                Redefining visual experiences through advanced AR technology
              </p>
            </div>
            
            <div className="flex flex-wrap gap-8">
              <div>
                <h4 className="font-medium mb-3">Product</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#features" className="hover:text-white">Features</a></li>
                  <li><a href="#store" className="hover:text-white">Store</a></li>
                  <li><a href="#testimonials" className="hover:text-white">Testimonials</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Company</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#about" className="hover:text-white">About</a></li>
                  <li><a href="#" className="hover:text-white">Careers</a></li>
                  <li><a href="#" className="hover:text-white">Press</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Resources</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white">Blog</a></li>
                  <li><a href="#" className="hover:text-white">Support</a></li>
                  <li><a href="#" className="hover:text-white">Documentation</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-dark-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} VisionAR Lenses. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
