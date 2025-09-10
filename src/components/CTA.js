import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Zap, Mail, Phone, Clock, Users, Shield } from 'lucide-react';

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
                  Start with <span className="gradient-text">2 Free Hires</span> Risk-Free
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-xl text-white/80 mb-8 leading-relaxed"
                >
                  We're so confident in our vetting process that we'll help you find the perfect engineer twice, completely free.
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
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span className="text-white/90 font-medium text-sm">No Risk</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-xl">
                    <Users className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span className="text-white/90 font-medium text-sm">Same Quality</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-xl">
                    <Shield className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span className="text-white/90 font-medium text-sm">60-day free replacement</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-xl">
                    <Clock className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span className="text-white/90 font-medium text-sm">Fast Response</span>
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
                    <span>Start with 2 Free Hires</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                  <a
                    href="tel:+504-9878-1409"
                    className="glass-button group flex items-center space-x-2"
                  >
                    <span>Call Us Now</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                </motion.div>
              </div>

              {/* Right Side - Visual */}
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
                  <img 
                    src="/photos/work-team-celebrating-hire.webp" 
                    alt="Happy team celebrating successful hire"
                    loading="lazy" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating Stats */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl p-4 shadow-2xl border border-white/20">
                  <div className="text-2xl font-bold text-white">2 Free</div>
                  <div className="text-white/80 text-sm">Hires</div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl p-4 shadow-2xl border border-white/20">
                  <div className="text-2xl font-bold text-white">24h</div>
                  <div className="text-white/80 text-sm">Response</div>
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
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {/* Email */}
          <div className="glass-card p-8 text-center card-hover">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Email Us</h3>
            <p className="text-white/80 mb-6">Get a detailed response within 24 hours</p>
            <a 
              href="mailto:connect@bithire.com" 
              className="text-primary-400 hover:text-primary-300 transition-colors font-medium"
            >
              connect@bithire.com
            </a>
          </div>

          {/* Phone */}
          <div className="glass-card p-8 text-center card-hover">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Call Us</h3>
            <p className="text-white/80 mb-6">Speak directly with our team</p>
            <a 
              href="tel:+12815417279" 
              className="text-primary-400 hover:text-primary-300 transition-colors font-medium"
            >
              +1 (281) 541-7279
            </a>
          </div>

          {/* Response Time */}
          <div className="glass-card p-8 text-center card-hover">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Response Time</h3>
            <p className="text-white/80 mb-6">We respond quickly to all inquiries</p>
            <span className="text-primary-400 font-medium">Within 24 hours</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CTA;
