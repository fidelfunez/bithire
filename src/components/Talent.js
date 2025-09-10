import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Globe, 
  DollarSign,
  Clock,
  Code,
  Award,
  MessageCircle,
  FileText,
  Send,
  ChevronRight,
  ChevronLeft,
  ExternalLink,
  Github,
  Linkedin,
  MapPin,
  Calendar,
  Briefcase,
  Zap
} from 'lucide-react';
import FallingCode from './FallingCode';

const Talent = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    timezone: '',
    
    // Professional Information
    experience: '',
    currentRole: '',
    availability: '',
    expectedSalary: '',
    
    // Technical Skills
    primaryLanguages: [],
    frameworks: [],
    databases: [],
    tools: [],
    
    // Portfolio & Links
    github: '',
    linkedin: '',
    portfolio: '',
    resume: null,
    
    // Additional Information
    motivation: '',
    remoteExperience: '',
    englishLevel: '',
    additionalInfo: ''
  });

  const heroRef = useRef(null);
  const benefitsRef = useRef(null);
  const processRef = useRef(null);
  const requirementsRef = useRef(null);
  const formRef = useRef(null);
  const faqRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const isBenefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" });
  const isProcessInView = useInView(processRef, { once: true, margin: "-100px" });
  const isRequirementsInView = useInView(requirementsRef, { once: true, margin: "-100px" });
  const isFormInView = useInView(formRef, { once: true, margin: "-100px" });
  const isFaqInView = useInView(faqRef, { once: true, margin: "-100px" });

  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Competitive Compensation",
      description: "Earn top-tier salaries that match US market rates, paid in Bitcoin for financial freedom."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Remote-First Culture",
      description: "Work from anywhere in Latin America with flexible hours and full remote support."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Premium Clients",
      description: "Work with innovative US companies and startups building cutting-edge technology."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Career Growth",
      description: "Access to mentorship, training, and opportunities to work on high-impact projects."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast-Track Process",
      description: "Skip the lengthy interview processes. Our pre-vetted system gets you hired faster."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "Join a curated network of top-tier developers. No competition from unqualified candidates."
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Apply",
      description: "Submit your application with portfolio and experience details.",
      icon: <FileText className="w-6 h-6" />
    },
    {
      step: 2,
      title: "Technical Assessment",
      description: "Complete a CodeSignal assessment to showcase your skills.",
      icon: <Code className="w-6 h-6" />
    },
    {
      step: 3,
      title: "Developer Interview",
      description: "Meet with our technical team for a peer-to-peer discussion.",
      icon: <MessageCircle className="w-6 h-6" />
    },
    {
      step: 4,
      title: "Client Matching",
      description: "We match you with companies that align with your skills and goals.",
      icon: <Users className="w-6 h-6" />
    },
    {
      step: 5,
      title: "Start Working",
      description: "Begin your new role with full support from our team.",
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  const requirements = [
    {
      category: "Technical Skills",
      items: [
        "3+ years of professional development experience",
        "Proficiency in at least one modern programming language",
        "Experience with version control (Git)",
        "Understanding of software development best practices"
      ]
    },
    {
      category: "Communication",
      items: [
        "Fluent English (written and spoken)",
        "Strong communication skills for remote collaboration",
        "Experience with agile development methodologies"
      ]
    },
    {
      category: "Professional",
      items: [
        "Previous remote work experience preferred",
        "Portfolio demonstrating technical capabilities",
        "Commitment to continuous learning and improvement"
      ]
    }
  ];

  const faqs = [
    {
      question: "What types of developers are you looking for?",
      answer: "We're looking for experienced developers across all specializations: Full-Stack, Frontend, Backend, DevOps, Data Science, Mobile, and more. The key is having 3+ years of professional experience and strong technical skills."
    },
    {
      question: "How does the Bitcoin payment work?",
      answer: "All payments are processed in Bitcoin, providing you with financial freedom and protection against inflation. We handle the conversion and provide detailed payment reports."
    },
    {
      question: "What's the typical timeline from application to placement?",
      answer: "Our streamlined process typically takes 2-4 weeks from application to job placement, depending on client requirements and your availability."
    },
    {
      question: "Do I need to be located in a specific country?",
      answer: "We work with developers across Latin America. As long as you have reliable internet and can work US business hours (with some flexibility), your location doesn't matter."
    },
    {
      question: "What support do you provide after placement?",
      answer: "We provide ongoing support throughout your engagement, including technical mentorship, career guidance, and assistance with any client-related matters."
    }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: checked 
          ? [...prev[name], value]
          : prev[name].filter(item => item !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      resume: e.target.files[0]
    }));
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-orange-600/20"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <FallingCode />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={isHeroInView ? { scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-orange-500/20 border border-white/20 mb-8"
            >
              <Star className="w-4 h-4 text-yellow-400 mr-2" />
              <span className="text-sm font-medium text-white/90">Join the Elite Developer Network</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Build Your
              <span className="block bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
                Dream Career
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              Work with top U.S. companies, earn competitive salaries (with optional Bitcoin payments), and build a global career. Join Latin America's premier network of developers and take your career to the next level.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a
                href="#apply"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-orange-500 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
              >
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="#process"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/20"
              >
                Learn More
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="gradient-text">BitHire</span>?
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              We're not just another recruitment platform. We're your gateway to the US tech market 
              with benefits designed specifically for Latin American developers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group glass-card p-8 hover:scale-105 transition-all duration-300"
              >
                <div className="text-blue-400 mb-4 group-hover:text-orange-400 transition-colors">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-20 bg-gradient-to-r from-blue-600/10 to-orange-600/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="gradient-text">Streamlined</span> Process
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              No endless interviews or bureaucratic delays. Our proven process gets you from 
              application to job placement in just 2-4 weeks.
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-orange-500 transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative text-center"
                >
                  <div className="relative z-10 w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full flex items-center justify-center text-white">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section ref={requirementsRef} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isRequirementsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What We're <span className="gradient-text">Looking For</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              We maintain high standards to ensure our network consists of the most talented 
              developers in Latin America.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {requirements.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isRequirementsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-8"
              >
                <h3 className="text-xl font-semibold text-white mb-6 text-center">
                  {category.category}
                </h3>
                <ul className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section ref={formRef} id="apply" className="py-20 bg-gradient-to-r from-blue-600/10 to-orange-600/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isFormInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="gradient-text">Apply</span>?
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Join the most exclusive developer network in Latin America. 
              Complete the application below and start your journey to the US tech market.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isFormInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-8"
          >
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-white font-medium">Step {currentStep} of 4</span>
                <span className="text-white/70 text-sm">
                  {Math.round((currentStep / 4) * 100)}% Complete
                </span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-orange-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(currentStep / 4) * 100}%` }}
                ></div>
              </div>
            </div>

            <form onSubmit={handleSubmit} name="talent-application" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="talent-application" />
              
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-semibold text-white mb-6">Personal Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-medium mb-2">First Name *</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your first name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white font-medium mb-2">Last Name *</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-medium mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white font-medium mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+1 (281) 541-7279"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-medium mb-2">Location *</label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="City, Country"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white font-medium mb-2">Timezone *</label>
                      <select
                        name="timezone"
                        value={formData.timezone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select your timezone</option>
                        <option value="EST">Eastern Time (EST)</option>
                        <option value="CST">Central Time (CST)</option>
                        <option value="MST">Mountain Time (MST)</option>
                        <option value="PST">Pacific Time (PST)</option>
                        <option value="GMT-3">GMT-3 (Argentina, Brazil)</option>
                        <option value="GMT-4">GMT-4 (Chile, Venezuela)</option>
                        <option value="GMT-5">GMT-5 (Colombia, Peru)</option>
                        <option value="GMT-6">GMT-6 (Mexico, Costa Rica)</option>
                      </select>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Professional Information */}
              {currentStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-semibold text-white mb-6">Professional Information</h3>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Years of Experience *</label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select your experience level</option>
                      <option value="3-5">3-5 years</option>
                      <option value="5-7">5-7 years</option>
                      <option value="7-10">7-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Current Role *</label>
                    <input
                      type="text"
                      name="currentRole"
                      value={formData.currentRole}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., Senior Full-Stack Developer"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Availability *</label>
                    <select
                      name="availability"
                      value={formData.availability}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select your availability</option>
                      <option value="immediate">Immediate (within 2 weeks)</option>
                      <option value="1-month">1 month notice</option>
                      <option value="2-months">2 months notice</option>
                      <option value="3-months">3+ months notice</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Expected Salary Range (USD) *</label>
                    <select
                      name="expectedSalary"
                      value={formData.expectedSalary}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select salary range</option>
                      <option value="30k-50k">$30,000 - $50,000</option>
                      <option value="50k-70k">$50,000 - $70,000</option>
                      <option value="70k-90k">$70,000 - $90,000</option>
                      <option value="90k-120k">$90,000 - $120,000</option>
                      <option value="120k+">$120,000+</option>
                    </select>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Technical Skills */}
              {currentStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-semibold text-white mb-6">Technical Skills</h3>
                  
                  <div>
                    <label className="block text-white font-medium mb-3">Primary Programming Languages *</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {['JavaScript', 'Python', 'Java', 'C#', 'Go', 'Rust', 'PHP', 'Ruby', 'Swift', 'Kotlin', 'TypeScript', 'C++'].map((lang) => (
                        <label key={lang} className="flex items-center">
                          <input
                            type="checkbox"
                            name="primaryLanguages"
                            value={lang}
                            checked={formData.primaryLanguages.includes(lang)}
                            onChange={handleInputChange}
                            className="mr-2 text-blue-500 focus:ring-blue-500"
                          />
                          <span className="text-white/80">{lang}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-3">Frameworks & Libraries</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {['React', 'Vue.js', 'Angular', 'Node.js', 'Express', 'Django', 'Flask', 'Spring', 'Laravel', 'Rails', 'Next.js', 'Nuxt.js'].map((framework) => (
                        <label key={framework} className="flex items-center">
                          <input
                            type="checkbox"
                            name="frameworks"
                            value={framework}
                            checked={formData.frameworks.includes(framework)}
                            onChange={handleInputChange}
                            className="mr-2 text-blue-500 focus:ring-blue-500"
                          />
                          <span className="text-white/80">{framework}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-3">Databases</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'SQLite', 'Oracle', 'SQL Server', 'DynamoDB', 'Cassandra'].map((db) => (
                        <label key={db} className="flex items-center">
                          <input
                            type="checkbox"
                            name="databases"
                            value={db}
                            checked={formData.databases.includes(db)}
                            onChange={handleInputChange}
                            className="mr-2 text-blue-500 focus:ring-blue-500"
                          />
                          <span className="text-white/80">{db}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-3">Tools & Technologies</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {['Docker', 'Kubernetes', 'AWS', 'Azure', 'GCP', 'Git', 'Jenkins', 'CI/CD', 'Terraform', 'Ansible', 'GraphQL', 'REST APIs'].map((tool) => (
                        <label key={tool} className="flex items-center">
                          <input
                            type="checkbox"
                            name="tools"
                            value={tool}
                            checked={formData.tools.includes(tool)}
                            onChange={handleInputChange}
                            className="mr-2 text-blue-500 focus:ring-blue-500"
                          />
                          <span className="text-white/80">{tool}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Portfolio & Additional Info */}
              {currentStep === 4 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-semibold text-white mb-6">Portfolio & Additional Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-medium mb-2">GitHub Profile</label>
                      <input
                        type="url"
                        name="github"
                        value={formData.github}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="https://github.com/username"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white font-medium mb-2">LinkedIn Profile</label>
                      <input
                        type="url"
                        name="linkedin"
                        value={formData.linkedin}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="https://linkedin.com/in/username"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Portfolio Website</label>
                    <input
                      type="url"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="https://yourportfolio.com"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Resume/CV Upload</label>
                    <input
                      type="file"
                      name="resume"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"
                    />
                    <p className="text-white/60 text-sm mt-2">Accepted formats: PDF, DOC, DOCX (Max 10MB)</p>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Why do you want to join BitHire? *</label>
                    <textarea
                      name="motivation"
                      value={formData.motivation}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us about your career goals and why you're interested in working with US companies through BitHire..."
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Remote Work Experience</label>
                    <textarea
                      name="remoteExperience"
                      value={formData.remoteExperience}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Describe your experience working remotely, including tools you use and how you stay productive..."
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">English Proficiency Level *</label>
                    <select
                      name="englishLevel"
                      value={formData.englishLevel}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select your English level</option>
                      <option value="native">Native</option>
                      <option value="fluent">Fluent</option>
                      <option value="advanced">Advanced</option>
                      <option value="intermediate">Intermediate</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Additional Information</label>
                    <textarea
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Anything else you'd like us to know about your background, skills, or career aspirations..."
                    />
                  </div>
                </motion.div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t border-white/20">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    currentStep === 1
                      ? 'bg-white/5 text-white/30 cursor-not-allowed'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Previous
                </button>

                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-orange-500 text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300"
                  >
                    Next
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-orange-500 text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Submit Application
                  </button>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Everything you need to know about joining the BitHire developer network.
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-orange-600/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your <span className="gradient-text">Career</span>?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Join hundreds of developers who have already made the leap to the US tech market. 
              Your dream career is just one application away.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#apply"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-orange-500 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
              >
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="mailto:connect@bithire.com"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/20"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Have Questions?
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Talent;
