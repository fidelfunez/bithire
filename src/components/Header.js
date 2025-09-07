import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
      isScrolled 
        ? 'bg-black/20 backdrop-blur-md border-white/20' 
        : 'bg-transparent border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
              <img 
                src="/logos/Bithire Logos/bithire-logo.svg" 
                alt="BitHire Logo"
                loading="eager" 
                className="w-8 h-8"
              />
            </div>
            <span className="text-2xl font-bold text-white">
              Bit<span className="gradient-text">Hire</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#services" className="text-white/80 hover:text-white transition-colors duration-200">
              Services
            </a>
            <a href="#why-us" className="text-white/80 hover:text-white transition-colors duration-200">
              Why Bithire
            </a>
            <a href="#process" className="text-white/80 hover:text-white transition-colors duration-200">
              Process
            </a>
            <a href="#tech-stack" className="text-white/80 hover:text-white transition-colors duration-200">
              Tech Stack
            </a>
            <a href="#contact" className="glass-button">
              Get Started
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/20 backdrop-blur-md rounded-xl border border-white/10 mt-4">
              <a
                href="#services"
                className="block px-3 py-2 text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#why-us"
                className="block px-3 py-2 text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Why Bithire
              </a>
              <a
                href="#process"
                className="block px-3 py-2 text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Process
              </a>
              <a
                href="#tech-stack"
                className="block px-3 py-2 text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Tech Stack
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-white font-semibold rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
