import React from 'react';
import { motion } from 'framer-motion';
import { Code, CheckCircle, ArrowRight, Brain, Globe } from 'lucide-react';

const WhyBithire = () => {
  const differentiators = [
    {
      icon: Code,
      title: "Developers Hiring Developers",
      description: "We're not recruiters pretending to understand tech. Our team consists of experienced developers who actually know what good code looks like.",
      highlight: "Real technical expertise"
    },
    {
      icon: Brain,
      title: "Technical assessments + human insight",
      description: "We use tools like CodeSignal and HackerRank for initial technical assessments, but every final decision is made by a human developer who understands your needs.",
      highlight: "The best of both worlds"
    },
    {
      icon: Globe,
      title: "Latin America advantage",
      description: "Access to exceptional engineers from Latin America with competitive rates, excellent English, and strong work ethic.",
      highlight: "Quality and value"
    }
  ];

  return (
    <section id="why-us" className="py-20 relative">
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
            Why We're <span className="gradient-text">Different</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Most recruitment agencies are run by salespeople. We're run by developers who actually understand what you need.
          </p>
        </motion.div>

        {/* Main Differentiators */}
        <div className="space-y-16 mb-20">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="inline-flex items-center space-x-2 bg-primary-500/20 border border-primary-500/30 rounded-full px-4 py-2 mb-6">
                  <item.icon className="w-5 h-5 text-primary-400" />
                  <span className="text-primary-300 font-semibold">{item.highlight}</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  {item.title}
                </h3>
                
                <p className="text-xl text-white/80 leading-relaxed mb-8">
                  {item.description}
                </p>

                <div className="flex items-center space-x-4">
                  <a
                    href="#contact"
                    className="glass-button group flex items-center space-x-2"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                </div>
              </div>

              {/* Visual */}
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="aspect-[4/3] rounded-2xl border border-white/20 overflow-hidden">
                  <img 
                    src={`/photos/${index === 0 ? 'devs-reviewing-code -together.webp' : 
                                        index === 1 ? 'AI-dashboard-with-human-review.webp' : 
                                        'devs-collaborative-meeting.webp'}`}
                    alt={index === 0 ? 'Developers from Latin America conducting peer code reviews and technical assessments' : 
                         index === 1 ? 'AI-powered technical assessment dashboard combined with human developer review process' : 
                         'Collaborative workspace showing remote Latin American developers working together on technical projects'}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>


        {/* Process Highlight - Redesigned */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10"></div>
          <div className="relative bg-gradient-to-r from-green-500/5 via-blue-500/5 to-purple-500/5 backdrop-blur-sm border border-green-400/20 rounded-3xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-green-400/20 border border-green-400/30 rounded-full px-4 py-2 mb-6">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-300 font-semibold">Quality Process</span>
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-6">
                  No AI Shortcuts, Just <span className="gradient-text">Real Expertise</span>
                </h3>
                
                <p className="text-white/80 mb-8 leading-relaxed">
                  We leverage tools like CodeSignal for initial assessments, then every candidate completes a developer-led interview to evaluate technical depth, problem-solving, and cultural fit.
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-white/90">CodeSignal technical assessments</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-white/90">Proctored coding challenges</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-white/90">Developer-to-developer interviews</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-white/90">Cultural fit evaluation</span>
                  </li>
                </ul>
              </div>
              
              <div className="relative">
                <div className="aspect-square rounded-2xl border border-white/20 overflow-hidden">
                  <img 
                    src="/photos/human-coding-reviews.webp" 
                    alt="Human developers conducting comprehensive technical reviews and assessments for remote engineer vetting process"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-green-500 p-3 rounded-xl">
                  <div className="text-lg font-bold text-white">95%</div>
                  <div className="text-white/90 font-semibold text-sm">Success Rate</div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-green-500 p-3 rounded-xl">
                  <div className="text-lg font-bold text-white">60-Day</div>
                  <div className="text-white/90 font-semibold text-sm">Guarantee</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyBithire;
