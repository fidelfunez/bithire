import React from 'react';
import { Code, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/40 backdrop-blur-md border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <img 
                  src="/logos/Bithire Logos/bithire-logo.svg" 
                  alt="BitHire Logo" 
                  className="w-8 h-8"
                />
              </div>
              <span className="text-2xl font-bold text-white">
                Bit<span className="gradient-text">Hire</span>
              </span>
            </div>
            <p className="text-white/70 mb-6 max-w-md leading-relaxed">
              BitHire connects U.S. companies with pre-vetted remote engineers from Latin America through technical assessments and developer-led interviews. No AI shortcuts, just real talent. Built by developers, for developers.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/bithire"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://twitter.com/bithire"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://github.com/bithire"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors duration-200">
                  Remote Developer Recruitment
                </a>
              </li>
              <li>
                <a href="#process" className="text-white/70 hover:text-white transition-colors duration-200">
                  Technical Vetting Process
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-white/70 hover:text-white transition-colors duration-200">
                  Why Choose Bithire
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-white/70 hover:text-white transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#process" className="text-white/70 hover:text-white transition-colors duration-200">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-6 mb-8 p-6 bg-white/5 rounded-xl border border-white/10">
          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-primary-400" />
            <div>
              <div className="text-white font-medium">Email</div>
              <a 
                href="mailto:connect@bithire.com" 
                className="text-white/70 hover:text-white transition-colors"
              >
                connect@bithire.com
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 text-primary-400" />
            <div>
              <div className="text-white font-medium">Phone</div>
              <a 
                href="tel:+12815417279" 
                className="text-white/70 hover:text-white transition-colors"
              >
                +1 (281) 541-7279
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="w-5 h-5 text-primary-400" />
            <div>
              <div className="text-white font-medium">Location</div>
              <span className="text-white/70">The Woodlands, TX</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/70 text-sm mb-4 md:mb-0">
            © {currentYear} BitHire. All rights reserved. Built by developers, for developers.
            <br />
            BitHire was built between Tegucigalpa, Honduras 🇭🇳 and The Woodlands, Texas 🇺🇸.
            <br />
            <span className="text-white/50 text-xs">
              Dedicated to the talent of Latin America, to those building a future beyond borders, and to companies bold enough to hire differently. ₿
            </span>
          </div>
          <div className="flex flex-col items-end space-y-2">
            <div className="flex items-center space-x-4 text-sm">
              <span className="text-white/70">
                Powered by <span className="text-orange-500 font-semibold">Bitcoin</span>
              </span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-medium">Live</span>
              </div>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#contact" className="text-white/70 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#contact" className="text-white/70 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#contact" className="text-white/70 hover:text-white transition-colors duration-200">
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
