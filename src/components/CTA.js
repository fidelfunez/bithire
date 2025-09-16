import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Zap, Mail, Phone, Clock, Users, Shield, Code } from 'lucide-react';

const CTA = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl mb-20"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-orange-500/20 to-red-500/20"></div>
          
          {/* Content */}
          <div className="relative bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-red-500/10 backdrop-blur-sm border border-yellow-400/20 rounded-3xl p-8 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Content */}
              <div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center space-x-2 bg-yellow-400/20 border border-yellow-400/30 rounded-full px-4 py-2 mb-6"
                >
                  <Zap className="w-5 h-5 text-yellow-400" />
                  <span className="text-yellow-300 font-semibold">Risk-Free Trial</span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-bold text-white mb-6"
                >
                  Get Your First <span className="gradient-text">2 Devs</span> Absolutely Free
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-xl text-white/80 mb-8 leading-relaxed"
                >
                  We've built the most rigorous technical screening process in Latin America. Try it risk-free with two complimentary remote developer placements.
                </motion.p>

                {/* Benefits Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-2 gap-4 mb-8"
                >
                  <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-xl">
                    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                    <span className="text-white/90 font-medium text-sm">Zero Risk</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-xl">
                    <Code className="w-5 h-5 text-orange-400 flex-shrink-0" />
                    <span className="text-white/90 font-medium text-sm">Expert-Level Skills</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-xl">
                    <Shield className="w-5 h-5 text-orange-400 flex-shrink-0" />
                    <span className="text-white/90 font-medium text-sm">60-Day Guarantee</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-xl">
                    <Users className="w-5 h-5 text-orange-400 flex-shrink-0" />
                    <span className="text-white/90 font-medium text-sm">Hand-Picked Talent</span>
                  </div>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <a
                    href="mailto:connect@bithire.com?subject=I want my 2 free hires!"
                    className="group bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold px-8 py-4 rounded-xl hover:shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <span>Claim My 2 Free Hires</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                  <a
                    href="tel:+1 (281) 541-7279"
                    className="glass-button group flex items-center space-x-2"
                  >
                    <span>Talk to an Expert</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                </motion.div>
              </div>

              {/* Right Side - Visual */}
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
                  <img 
                    src="/photos/work-team-celebrating-hire.webp" 
                    alt="Successful team celebrating remote developer hire from Latin America through BitHire recruitment process"
                    loading="lazy" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating Stats */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl p-4 shadow-2xl border border-white/20">
                  <div className="text-2xl font-bold text-white">2 Free</div>
                  <div className="text-white/80 text-md">Hires</div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl p-4 shadow-2xl border border-white/20">
                  <div className="text-2xl font-bold text-white">24h</div>
                  <div className="text-white/80 text-md">Response</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {/* Email */}
          <a 
            href="mailto:connect@bithire.com" 
            className="group relative overflow-hidden bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-400/20 rounded-2xl p-6 hover:border-orange-400/40 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <ArrowRight className="w-5 h-5 text-orange-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
                Drop Us a Line
              </h3>
              <p className="text-white/70 text-sm mb-3 leading-relaxed">
                Tell us about your project and we'll craft a personalized remote developer strategy
              </p>
              <div className="text-orange-400 font-medium text-sm group-hover:text-orange-300 transition-colors">
                connect@bithire.com
              </div>
            </div>
          </a>

          {/* Phone */}
          <a 
            href="tel:+12815417279" 
            className="group relative overflow-hidden bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-400/20 rounded-2xl p-6 hover:border-orange-400/40 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <ArrowRight className="w-5 h-5 text-orange-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
                Call Our Experts
              </h3>
              <p className="text-white/70 text-sm mb-3 leading-relaxed">
                Get instant answers about hiring remote developers and technical requirements
              </p>
              <div className="text-orange-400 font-medium text-sm group-hover:text-orange-300 transition-colors">
                +1 (281) 541-7279
              </div>
            </div>
          </a>

          {/* Video Call */}
          <a 
            href="https://calendly.com/bithire/consultation" 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-400/20 rounded-2xl p-6 hover:border-orange-400/40 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <ArrowRight className="w-5 h-5 text-orange-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
                Book a Strategy Call
              </h3>
              <p className="text-white/70 text-sm mb-3 leading-relaxed">
                15-minute deep dive into your technical needs and ideal developer profile
              </p>
              <div className="text-orange-400 font-medium text-sm group-hover:text-orange-300 transition-colors">
                Schedule Strategy Call →
              </div>
            </div>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default CTA;
