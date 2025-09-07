import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, CheckCircle } from 'lucide-react';

const Hero = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  // Job titles to cycle through - you can customize these
  const jobTitles = [
    "Developers",
    "Engineers", 
    "UX/UI Designers",
    "Full-Stack Devs",
    "DevOps",
    "Data Scientists"
  ];

  const currentTitle = jobTitles[currentTitleIndex];
  const typewriterSpeed = 100;

  useEffect(() => {
    if (!isTyping) return;

    let charIndex = 0;
    const timer = setInterval(() => {
      if (charIndex <= currentTitle.length) {
        setDisplayText(currentTitle.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(timer);
        // Wait before starting to delete
        setTimeout(() => {
          setIsTyping(false);
          // Start deleting
          let deleteIndex = currentTitle.length;
          const deleteTimer = setInterval(() => {
            if (deleteIndex >= 0) {
              setDisplayText(currentTitle.slice(0, deleteIndex));
              deleteIndex--;
            } else {
              clearInterval(deleteTimer);
              // Move to next title
              setCurrentTitleIndex((prev) => (prev + 1) % jobTitles.length);
              setIsTyping(true);
            }
          }, typewriterSpeed / 2); // Delete faster than typing
        }, 2000); // Wait 2 seconds before deleting
      }
    }, typewriterSpeed);

    return () => clearInterval(timer);
  }, [currentTitle, isTyping, currentTitleIndex, jobTitles.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
        </div>
      </div>

      {/* Floating Code Elements */}
      <div className="absolute top-20 left-10 opacity-20 animate-float">
        <div className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 p-4 rounded-lg backdrop-blur-sm">
          <code className="text-primary-300 text-sm">
            {`<div className="developer">`}<br/>
            {`  <skill>React</skill>`}<br/>
            {`  <skill>Node.js</skill>`}<br/>
            {`</div>`}
          </code>
        </div>
      </div>

      <div className="absolute top-40 right-20 opacity-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="bg-gradient-to-br from-secondary-500/20 to-primary-500/20 p-4 rounded-lg backdrop-blur-sm">
          <code className="text-secondary-300 text-sm">
            {`function hireDev() {`}<br/>
            {`  return "Success!";`}<br/>
            {`}`}
          </code>
        </div>
      </div>

      {/* Bottom Left Code Block */}
      <div className="absolute bottom-32 left-16 opacity-20 animate-float" style={{ animationDelay: '1s' }}>
        <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 p-4 rounded-lg backdrop-blur-sm">
          <code className="text-green-300 text-sm">
            {`const talent = {`}<br/>
            {`  location: "LatAm",`}<br/>
            {`  quality: "vetted"`}<br/>
            {`};`}
          </code>
        </div>
      </div>

      {/* Bottom Center Code Block */}
      <div className="absolute bottom-20 right-32 opacity-20 animate-float" style={{ animationDelay: '3s' }}>
        <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-4 rounded-lg backdrop-blur-sm">
          <code className="text-purple-300 text-sm">
            {`if (developer.vetted) {`}<br/>
            {`  hire(developer);`}<br/>
            {`}`}
          </code>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-blue-400/20 backdrop-blur-sm border border-white/20 rounded-full px-5 py-1.5"
          >
            <Globe className="w-4 h-4 text-orange-400" />
            <span className="text-white/90 font-medium text-sm">Start with 2 free hires, risk-free, no strings attached.</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
          >
            <div className="text-white">Hire Vetted</div>
            <div className="gradient-text">
              {displayText}
              <span className="text-white animate-pulse font-bold">|</span>
            </div>
            <div className="text-white">from Latin America</div>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed"
          >
            BitHire connects U.S. companies with pre-vetted remote engineers from Latin America through technical assessments and developer-led interviews.<br />
            No AI shortcuts, just real talent. Built by developers, for developers.<br />
            Trusted by forward-thinking companies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#contact"
              className="group bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold px-8 py-4 rounded-xl hover:shadow-2xl hover:shadow-primary-500/25 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="#process"
              className="glass-button group px-8 py-4 flex items-center space-x-2"
            >
              <span>How It Works</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center items-center gap-8 pt-8"
          >
            <div className="flex items-center space-x-2 text-white/70">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="font-medium">Human + Technical Vetting</span>
            </div>
            <div className="flex items-center space-x-2 text-white/70">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="font-medium">Top Latin American Talent Pool</span>
            </div>
            <div className="flex items-center space-x-2 text-white/70">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="font-medium">Optional Bitcoin Payroll</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500"></div>
    </section>
  );
};

export default Hero;
