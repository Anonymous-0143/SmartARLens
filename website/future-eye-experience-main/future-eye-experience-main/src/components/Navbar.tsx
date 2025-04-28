
import React, { useState, useEffect } from 'react';
import { Menu, X, Search, ShoppingCart } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "py-3 glass-card" : "py-5 bg-transparent"
      )}
    >
      <div className="container-width flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-display text-white flex items-center">
            <span className="text-neon-blue">Vision</span><span>AR</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#about" className="nav-link">About</a>
          <a href="#features" className="nav-link">Features</a>
          <a href="#how-it-works" className="nav-link">How It Works</a>
          <a href="#store" className="nav-link">Store</a>
          <a href="#future" className="nav-link">Future</a>
          <a href="#blog" className="nav-link">Blog</a>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
              <Search size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white relative">
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-neon-blue text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-card py-5">
          <div className="container-width flex flex-col space-y-4">
            <a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#features" className="nav-link" onClick={() => setIsMenuOpen(false)}>Features</a>
            <a href="#how-it-works" className="nav-link" onClick={() => setIsMenuOpen(false)}>How It Works</a>
            <a href="#store" className="nav-link" onClick={() => setIsMenuOpen(false)}>Store</a>
            <a href="#future" className="nav-link" onClick={() => setIsMenuOpen(false)}>Future</a>
            <a href="#blog" className="nav-link" onClick={() => setIsMenuOpen(false)}>Blog</a>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                <Search size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white relative">
                <ShoppingCart size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-neon-blue text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
