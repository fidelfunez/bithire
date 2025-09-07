import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, Code, Users, CheckCircle, Zap, Clock, Target, MessageSquare, Shield } from 'lucide-react';

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const Process = () => {
  const phases = [
    {
      number: "1",
      title: "Discovery",
      subtitle: "Understanding Your Needs",
      description: "We start by understanding your technical requirements, team culture, and project goals. No generic job descriptions here.",
      icon: Search,
      color: "blue",
      timeline: "Day 1-2",
      details: [
        "Technical stack analysis",
        "Team dynamics assessment", 
        "Project timeline review",
        "Budget considerations"
      ]
    },
    {
      number: "2", 
      title: "Sourcing",
      subtitle: "Finding the Right Talent",
      description: "We tap into our network of pre-vetted engineers and use targeted sourcing to find candidates who match your specific needs.",
      icon: Target,
      color: "green",
      timeline: "Day 3-7",
      details: [
        "Network database search",
        "Targeted outreach",
        "Initial screening calls",
        "Portfolio review"
      ]
    },
    {
      number: "3",
      title: "Vetting",
      subtitle: "Technical assessments + developer-led interviews", 
      description: "Candidates go through our comprehensive evaluation process combining technical assessments with developer-to-developer interviews.",
      icon: Code,
      color: "purple",
      timeline: "Day 8-14",
      details: [
        "CodeSignal technical assessments",
        "Proctored coding challenges",
        "Live coding sessions",
        "Technical deep-dives"
      ]
    },
    {
      number: "4",
      title: "Interview",
      subtitle: "Cultural Fit & Final Review",
      description: "We evaluate communication skills, work ethic, and cultural alignment to ensure perfect team integration.",
      icon: MessageSquare,
      color: "orange",
      timeline: "Day 15-18",
      details: [
        "Communication assessment",
        "Work style evaluation",
        "Cultural fit analysis",
        "Reference verification"
      ]
    },
    {
      number: "5",
      title: "Placement",
      subtitle: "Onboarding & Support",
      description: "We handle the entire onboarding process and provide ongoing support to ensure successful integration.",
      icon: Shield,
      color: "red",
      timeline: "Day 19-21",
      details: [
        "Contract facilitation",
        "Onboarding support",
        "60-day free replacement",
        "Ongoing assistance"
      ]
    }
  ];

  return (
    <section id="process" className="py-20 relative">
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
            Our Proven <span className="gradient-text">Process</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            No fluff, no endless rounds of interviews. Here's exactly what happens when you work with us.
          </p>
        </motion.div>

        {/* Timeline Process */}
        <div className="relative mb-20">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500/30 via-secondary-500/30 to-primary-500/30 transform -translate-x-1/2"></div>
          
          <div className="space-y-16">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <motion.div 
                    className="flex items-center space-x-4 mb-6 group cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary-500/25 transition-all duration-300"
                      whileHover={{ rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-white font-bold text-lg">{phase.number}</span>
                    </motion.div>
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <Clock className="w-4 h-4 text-white/60 group-hover:text-primary-400 transition-colors duration-300" />
                        <span className="text-white/60 text-sm group-hover:text-white/80 transition-colors duration-300">{phase.timeline}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-primary-300 transition-colors duration-300">{phase.title}</h3>
                      <p className="text-primary-400 font-medium group-hover:text-primary-300 transition-colors duration-300">{phase.subtitle}</p>
                    </div>
                  </motion.div>
                  
                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    {phase.description}
                  </p>

                  <ul className="space-y-3">
                    {phase.details.map((detail, detailIndex) => (
                      <motion.li 
                        key={detailIndex} 
                        className="flex items-center space-x-3 group cursor-pointer"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div 
                          className="w-2 h-2 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-200"
                          whileHover={{ scale: 1.5 }}
                          transition={{ duration: 0.2 }}
                        ></motion.div>
                        <span className="text-white/90 group-hover:text-white transition-colors duration-200">{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <motion.div 
                    className="relative group cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="aspect-[4/3] rounded-2xl border border-white/20 overflow-hidden group-hover:border-primary-400/40 transition-all duration-300">
                      <img 
                        src={`/photos/${phase.title.toLowerCase()}-process-visualization.webp`}
                        alt={`${phase.title} process visualization`}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    {/* Timeline Node */}
                    <motion.div 
                      className={`hidden lg:block absolute top-1/2 transform -translate-y-1/2 w-6 h-6 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full border-4 border-gray-900 z-10 ${
                        index % 2 === 0 ? '-left-6' : '-right-6'
                      }`}
                      whileHover={{ 
                        scale: 1.3,
                        boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" 
                      }}
                      transition={{ duration: 0.2 }}
                    ></motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-secondary-500/10 to-primary-500/10"></div>
          <div className="relative bg-gradient-to-r from-primary-500/5 via-secondary-500/5 to-primary-500/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-primary-500/20 border border-primary-500/30 rounded-full px-4 py-2 mb-6">
                  <Zap className="w-5 h-5 text-primary-400" />
                  <span className="text-primary-300 font-semibold">Process Summary</span>
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-6">
                  Why This Process <span className="gradient-text">Works</span>
                </h3>
                
                <p className="text-white/80 mb-8 leading-relaxed">
                  We've eliminated the inefficiencies of traditional recruitment by combining 
                  technical assessments with developer expertise. The result? Faster hiring, 
                  better matches, and guaranteed satisfaction.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <div className="text-2xl font-bold gradient-text mb-1">
                      <AnimatedCounter end={3} suffix=" Weeks" />
                    </div>
                    <div className="text-white/70 text-sm">Average time to hire</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <div className="text-2xl font-bold gradient-text mb-1">
                      <AnimatedCounter end={95} suffix="%" />
                    </div>
                    <div className="text-white/70 text-sm">Free replacement guarantee</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 mt-12">
                <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Technical Assessments</h4>
                    <p className="text-white/70 text-sm">CodeSignal proctored assessments save time</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Developer Expertise</h4>
                    <p className="text-white/70 text-sm">Developer-to-developer evaluation</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Guaranteed Results</h4>
                    <p className="text-white/70 text-sm">60-day free replacement if your hire leaves</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
