import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Users, TrendingUp, Code } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO",
      company: "TechFlow Solutions",
      content: "BitHire delivered exceptional engineers who integrated seamlessly with our team. Their vetting process is thorough and their 2-free-hires offer is incredible. We've already hired 3 engineers through them.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Marcus Rodriguez",
      role: "Engineering Manager",
      company: "InnovateCorp",
      content: "As a developer myself, I appreciate that BitHire's team actually understands our technical needs. They didn't just send us resumes - they sent us engineers who could hit the ground running.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Jennifer Park",
      role: "VP of Engineering",
      company: "StartupScale",
      content: "The combination of technical assessments and developer-led interviews gives us confidence in every hire. Plus, their Bitcoin payroll option aligns perfectly with our open-source values.",
      rating: 5,
      avatar: "JP"
    }
  ];

  const stats = [
    { number: "~3 weeks", label: "Average time to hire", icon: Clock },
    { number: "60-day", label: "Free replacement guarantee", icon: Shield },
    { number: "Pre-vetted", label: "Engineers via technical assessments", icon: Code },
    { number: "Developer-led", label: "Interviews", icon: Users }
  ];

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Success <span className="gradient-text">Stories</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what companies are saying about 
            their experience with BitHire.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 text-center card-hover"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-white/70 font-medium text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-card p-6 card-hover"
            >
              {/* Quote Icon */}
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-full flex items-center justify-center mb-4">
                <Quote className="w-5 h-5 text-primary-400" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-white/90 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-white/70 text-sm">{testimonial.role}</div>
                  <div className="text-primary-400 text-sm">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-card p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Build Your <span className="gradient-text">Dream Team</span>?
            </h3>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Join hundreds of companies who've transformed their development teams with BitHire. 
              Start with 2 free hires, risk-free, no strings attached.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#contact"
                className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold px-8 py-4 rounded-xl hover:shadow-2xl hover:shadow-primary-500/25 transition-all duration-300 hover:scale-105"
              >
                Start Hiring Today
              </a>
              <a
                href="#process"
                className="glass-button"
              >
                View Process
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
