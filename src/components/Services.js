import React from 'react';
import { motion } from 'framer-motion';
import { Users, Bitcoin, Code, Shield, Zap, ArrowRight } from 'lucide-react';

const Services = () => {
  const recruitmentFeatures = [
    { icon: Code, text: "CodeSignal technical assessments" },
    { icon: Shield, text: "Developer-to-developer interviews" },
    { icon: Users, text: "Cultural fit evaluation" },
    { icon: Zap, text: "60-day free replacement" }
  ];

  const bitcoinFeatures = [
    "Multiple payment methods",
    "Compliance handled", 
    "Real-time rates",
    "Developer-friendly integration"
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            No fluff, no generic recruitment speak. Here's exactly how we help you build your team.
          </p>
        </motion.div>

        {/* Main Service - Developer Recruitment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary-500/20 border border-primary-500/30 rounded-full px-4 py-2 mb-6">
                <Users className="w-5 h-5 text-primary-400" />
                <span className="text-primary-300 font-semibold">Our Services</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Remote Engineer <span className="gradient-text">Recruitment</span>
              </h3>
              
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                We source, vet, and place exceptional engineers from Latin America. Built by developers, for developers.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {recruitmentFeatures.map((feature, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center space-x-3 p-3 bg-white/5 rounded-xl group cursor-pointer"
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "rgba(255, 255, 255, 0.1)"
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <feature.icon className="w-5 h-5 text-primary-400 flex-shrink-0 group-hover:text-primary-300 transition-colors duration-200" />
                    </motion.div>
                    <span className="text-white/90 text-sm font-medium group-hover:text-white transition-colors duration-200">{feature.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex items-center space-x-4">
                <a
                  href="#contact"
                  className="glass-button group flex items-center space-x-2"
                >
                  <span>Hire Engineers Now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
                <span className="text-white/60 text-sm">Average time to hire: ~3 weeks</span>
              </div>
            </div>

            {/* Right Side - Visual */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl border border-white/20 overflow-hidden">
                <img 
                  src="/photos/developer-team-working-remotely.webp" 
                  alt="Remote development team from Latin America collaborating on technical projects and code reviews"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Stats */}
              <motion.div 
                className="absolute -top-6 -right-12 glass-card p-4 cursor-pointer"
                whileHover={{ scale: 1.1, rotate: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-2xl font-bold gradient-text">3 Weeks</div>
                <div className="text-white/70 text-sm">Avg. Time</div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Secondary Service - Bitcoin Payroll */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Visual */}
            <div className="lg:order-2 relative">
              <div className="aspect-[4/3] rounded-2xl border border-white/20 overflow-hidden">
                <img 
                  src="/photos/bitcoin-payment-interface.webp" 
                  alt="Bitcoin payroll interface for remote developer payments with secure cryptocurrency transactions"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* 3D Bitcoin Seal Image - Positioned near bottom right of Bitcoin image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute -bottom-12 -right-12 z-20"
              >
                <img 
                  src="/logos/3D Logos/3D-Bitcoin-seal.webp" 
                  alt="3D Bitcoin seal logo representing secure cryptocurrency payment solutions for remote developers"
                  loading="lazy"
                  className="w-32 h-32 object-contain hover:scale-110 transition-transform duration-300"
                />
              </motion.div>
            </div>

            {/* Right Side - Content */}
            <div className="lg:order-1">
              <div className="inline-flex items-center space-x-2 bg-secondary-500/20 border border-secondary-500/30 rounded-full px-4 py-2 mb-6">
                <Bitcoin className="w-5 h-5 text-secondary-400" />
                <span className="text-secondary-300 font-semibold">Bonus Service</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Bitcoin <span className="gradient-text">Payroll Solutions</span>
              </h3>
              
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Optional, compliant payroll. Pay in any fiat currency like USD, or Bitcoin.
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {bitcoinFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-secondary-400 to-orange-400 rounded-full flex-shrink-0"></div>
                    <span className="text-white/90">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center space-x-4">
                <a
                  href="#contact"
                  className="glass-button group flex items-center space-x-2"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
                <span className="text-white/60 text-sm">Optional service</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Special Offer - Redesigned */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-red-500/10"></div>
          <div className="relative bg-gradient-to-r from-yellow-500/5 via-orange-500/5 to-red-500/5 backdrop-blur-sm border border-yellow-400/20 rounded-3xl p-6 lg:p-8">
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 bg-orange-400/20 border border-orange-400/30 rounded-full px-6 py-3 mb-4">
                <Zap className="w-5 h-5 text-orange-400" />
                <span className="text-orange-300 font-semibold">Risk-Free Trial</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Try Our Process, <span className="gradient-text">Risk-Free</span>
              </h3>
              
              <p className="text-xl text-white/80 mb-6 max-w-3xl mx-auto">
                We're genuinely invested in your company's success, and our dedicated team works tirelessly to find your perfect match. Get 2 complimentary placements to experience our commitment firsthand. No strings attached.
              </p>
              
              <a
                href="#contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold px-8 py-4 rounded-xl hover:shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105"
              >
                <span>Claim Free Hires</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
