
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Store from "@/components/Store";
import FutureVision from "@/components/FutureVision";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-800 text-white">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <HowItWorks />
      <Store />
      <FutureVision />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
