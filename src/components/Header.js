import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // Function to handle navigation to homepage sections
  const handleHomepageNavigation = (sectionId) => {
    if (location.pathname === '/') {
      // Already on homepage, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Not on homepage, navigate to homepage with section
      navigate(`/#${sectionId}`);
      // Scroll to section after navigation (with slight delay for page load)
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer to track active section
  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('');
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Trigger when section is 20% from top
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe all sections
    const sections = ['services', 'why-us', 'process', 'tech-stack'];
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [location.pathname]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
      isScrolled 
        ? 'bg-black/20 backdrop-blur-md border-white/20' 
        : 'bg-transparent border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
              <img 
                src="/logos/Bithire Logos/bithire-logo.svg" 
                alt="BitHire logo - Remote developer recruitment from Latin America"
                loading="eager" 
                className="w-8 h-8"
              />
            </div>
            <span className="text-2xl font-bold text-white">
              Bit<span className="gradient-text">Hire</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => handleHomepageNavigation('services')}
              className={`transition-colors duration-200 ${
                activeSection === 'services'
                  ? 'text-orange-400 font-semibold' 
                  : 'text-white/80 hover:text-white'
              }`}
            >
              Services
            </button>
            <button 
              onClick={() => handleHomepageNavigation('why-us')}
              className={`transition-colors duration-200 ${
                activeSection === 'why-us'
                  ? 'text-orange-400 font-semibold' 
                  : 'text-white/80 hover:text-white'
              }`}
            >
              Why Bithire
            </button>
            <button 
              onClick={() => handleHomepageNavigation('process')}
              className={`transition-colors duration-200 ${
                activeSection === 'process'
                  ? 'text-orange-400 font-semibold' 
                  : 'text-white/80 hover:text-white'
              }`}
            >
              Process
            </button>
            <button 
              onClick={() => handleHomepageNavigation('tech-stack')}
              className={`transition-colors duration-200 ${
                activeSection === 'tech-stack'
                  ? 'text-orange-400 font-semibold' 
                  : 'text-white/80 hover:text-white'
              }`}
            >
              Tech Stack
            </button>
            <Link 
              to="/talent" 
              className={`transition-colors duration-200 ${
                location.pathname === '/talent' 
                  ? 'text-orange-400 font-semibold' 
                  : 'text-white/80 hover:text-white'
              }`}
            >
              For Developers
            </Link>
            <button 
              onClick={() => handleHomepageNavigation('contact')}
              className="glass-button"
            >
              Get Started
            </button>
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
              <button
                onClick={() => handleHomepageNavigation('services')}
                className={`block w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 ${
                  activeSection === 'services'
                    ? 'text-orange-400 font-semibold bg-orange-400/10'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                Services
              </button>
              <button
                onClick={() => handleHomepageNavigation('why-us')}
                className={`block w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 ${
                  activeSection === 'why-us'
                    ? 'text-orange-400 font-semibold bg-orange-400/10'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                Why Bithire
              </button>
              <button
                onClick={() => handleHomepageNavigation('process')}
                className={`block w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 ${
                  activeSection === 'process'
                    ? 'text-orange-400 font-semibold bg-orange-400/10'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                Process
              </button>
              <button
                onClick={() => handleHomepageNavigation('tech-stack')}
                className={`block w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 ${
                  activeSection === 'tech-stack'
                    ? 'text-orange-400 font-semibold bg-orange-400/10'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                Tech Stack
              </button>
              <Link
                to="/talent"
                className={`block px-3 py-2 rounded-lg transition-colors duration-200 ${
                  location.pathname === '/talent'
                    ? 'text-orange-400 font-semibold bg-orange-400/10'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                For Developers
              </Link>
              <button
                onClick={() => handleHomepageNavigation('contact')}
                className="block w-full text-left px-3 py-2 text-white font-semibold rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
