
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    name: 'Dr. Sarah Chen',
    role: 'Neurosurgeon',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    quote: 'The medical edition has revolutionized how I perform complex surgeries. The AR overlay provides critical information without taking my focus off the patient.',
    rating: 5
  },
  {
    id: 2,
    name: 'Marcus Thompson',
    role: 'Software Developer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    quote: 'As a developer, the AR lens has changed how I work. I can code while accessing documentation and visualizing data structures in 3D space.',
    rating: 4
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'Architect',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
    quote: 'Being able to overlay 3D models onto physical spaces has transformed my design process. I can walk clients through spaces that don\'t exist yet.',
    rating: 5
  },
  {
    id: 4,
    name: 'James Wilson',
    role: 'Professional Athlete',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5',
    quote: 'The performance metrics displayed during my training have helped me optimize my technique in ways that weren\'t possible before.',
    rating: 5
  }
];

const useCase = [
  {
    id: 1,
    title: 'Healthcare',
    description: 'Medical professionals use VisionAR lenses for surgical assistance, patient monitoring, and medical education.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef'
  },
  {
    id: 2,
    title: 'Education',
    description: 'Students and educators utilize AR overlays for immersive learning experiences across subjects from anatomy to astronomy.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b'
  },
  {
    id: 3,
    title: 'Architecture',
    description: 'Architects and designers visualize buildings and spaces before construction, enhancing client communication and design accuracy.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d'
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeUseCase, setActiveUseCase] = useState(1);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section id="testimonials" className="section-padding bg-dark-800">
      <div className="container-width">
        <div className="text-center mb-16">
          <span className="text-neon-blue text-sm uppercase tracking-wider font-medium">Experiences</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">Testimonials & Use Cases</h2>
          <div className="mt-4 mx-auto w-24 h-1 bg-neon-blue rounded"></div>
        </div>
        
        {/* Testimonials slider */}
        <div className="relative max-w-4xl mx-auto mb-24">
          <div className="absolute -top-6 -left-6 text-neon-blue opacity-30">
            <Quote size={80} />
          </div>
          
          <div className="glass-card rounded-xl p-8 md:p-12 relative z-10">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 flex-shrink-0">
                <div className="relative">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-neon-blue shadow-neon">
                    <img 
                      src={`${testimonials[activeIndex].image}?w=200&h=200&fit=crop`}
                      alt={testimonials[activeIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-dark-800 rounded-full py-1 px-2 flex items-center border border-gray-700">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <Star key={i} size={14} className="fill-neon-blue text-neon-blue" />
                    ))}
                    {[...Array(5 - testimonials[activeIndex].rating)].map((_, i) => (
                      <Star key={i} size={14} className="text-gray-500" />
                    ))}
                  </div>
                </div>
                <div className="mt-4 text-center md:text-left">
                  <h4 className="font-semibold text-lg">{testimonials[activeIndex].name}</h4>
                  <p className="text-gray-400 text-sm">{testimonials[activeIndex].role}</p>
                </div>
              </div>
              <div className="md:w-2/3">
                <blockquote className="text-lg md:text-xl italic text-gray-300">
                  "{testimonials[activeIndex].quote}"
                </blockquote>
              </div>
            </div>
            
            {/* Navigation */}
            <div className="flex justify-center md:justify-end gap-3 mt-8">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-dark-700 hover:text-white transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-dark-700 hover:text-white transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Use cases */}
        <h3 className="text-2xl font-semibold mb-8 text-center">Industry Use Cases</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCase.map(item => (
            <div 
              key={item.id} 
              className={cn(
                "glass-card rounded-xl overflow-hidden transition-all duration-300 cursor-pointer",
                activeUseCase === item.id ? "border-neon-blue shadow-neon" : "border-transparent hover:border-gray-700"
              )}
              onClick={() => setActiveUseCase(item.id)}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={`${item.image}?w=400&fit=crop`}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700"
                  style={{
                    transform: activeUseCase === item.id ? 'scale(1.1)' : 'scale(1)'
                  }}
                />
              </div>
              <div className="p-5">
                <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
