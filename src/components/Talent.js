import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Globe, 
  DollarSign,
  Clock,
  MessageCircle,
  Send,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Zap,
  Medal,
  ShieldCheck,
  HeartCrack,
  HelpCircle
} from 'lucide-react';
import FallingCode from './FallingCode';
import SectionFloatingLogos from './SectionFloatingLogos';
import ParticleSystem from './ParticleSystem';

const Talent = () => {
  // Update meta tags for talent page
  useEffect(() => {
    // Update page title
    document.title = "BitHire - Join Our Developer Network | Apply for Remote Opportunities";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Join BitHire\'s developer network. Apply to work with U.S. companies through our streamlined process. Remote opportunities for Latin American developers.');
    }
    
    // Add canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://bithire.co/talent');
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', 'https://bithire.co/talent');
      document.head.appendChild(canonical);
    }
    
    // Add Open Graph tags for social sharing
    const ogTags = [
      { property: 'og:title', content: 'BitHire - Join Our Developer Network | Apply for Remote Opportunities' },
      { property: 'og:description', content: 'Join BitHire\'s developer network. Apply to work with U.S. companies through our streamlined process. Remote opportunities for Latin American developers.' },
      { property: 'og:url', content: 'https://bithire.co/talent' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://bithire.co/photos/bithire-success-celebration.webp' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'BitHire - Join Our Developer Network' },
      { name: 'twitter:description', content: 'Join BitHire\'s developer network. Apply to work with U.S. companies through our streamlined process.' },
      { name: 'twitter:image', content: 'https://bithire.co/photos/bithire-success-celebration.webp' }
    ];
    
    ogTags.forEach(tag => {
      let metaTag = document.querySelector(`meta[property="${tag.property}"], meta[name="${tag.name}"]`);
      if (metaTag) {
        metaTag.setAttribute('content', tag.content);
      } else {
        metaTag = document.createElement('meta');
        if (tag.property) {
          metaTag.setAttribute('property', tag.property);
        } else {
          metaTag.setAttribute('name', tag.name);
        }
        metaTag.setAttribute('content', tag.content);
        document.head.appendChild(metaTag);
      }
    });
    
    // Cleanup function to restore original meta tags when leaving page
    return () => {
      document.title = "BitHire - Hire pre-vetted Remote Engineers from Latin America | Start with 2 Free Hires";
      if (metaDescription) {
        metaDescription.setAttribute('content', 'BitHire helps U.S. companies hire pre-vetted remote engineers from Latin America through technical assessments and developer-led interviews. No AI shortcuts, just real talent. Start with 2 free hires, risk-free, no strings attached.');
      }
      if (canonical) {
        canonical.setAttribute('href', 'https://bithire.co/');
      }
    };
  }, []);

  // Add structured data for job opportunities
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "JobPosting",
      "title": "Remote Developer Opportunities",
      "description": "Join BitHire's network of developers for remote opportunities with U.S. companies through our streamlined application process.",
      "hiringOrganization": {
        "@type": "Organization",
        "name": "BitHire",
        "url": "https://bithire.co"
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "Latin America"
        }
      },
      "employmentType": "FULL_TIME",
      "workHours": "Flexible",
      "datePosted": new Date().toISOString(),
      "validThrough": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString()
    };

    // Add FAQ structured data
    const faqStructuredData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What types of developers do you work with?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We connect U.S. companies with engineers across frontend, backend, full stack, data, DevOps, blockchain, and more."
          }
        },
        {
          "@type": "Question",
          "name": "Do I have to get paid in Bitcoin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Payments are flexible (USD, stablecoins, or Bitcoin)."
          }
        }
      ]
    };

    // Add structured data scripts
    const jobScript = document.createElement('script');
    jobScript.type = 'application/ld+json';
    jobScript.text = JSON.stringify(structuredData);
    jobScript.id = 'job-posting-schema';
    
    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.text = JSON.stringify(faqStructuredData);
    faqScript.id = 'faq-schema';

    document.head.appendChild(jobScript);
    document.head.appendChild(faqScript);

    return () => {
      const existingJobScript = document.getElementById('job-posting-schema');
      const existingFaqScript = document.getElementById('faq-schema');
      if (existingJobScript) document.head.removeChild(existingJobScript);
      if (existingFaqScript) document.head.removeChild(existingFaqScript);
    };
  }, []);

  const [currentStep, setCurrentStep] = useState(1);
  const [step3SubStep, setStep3SubStep] = useState('a'); // 'a' for Languages+Frameworks, 'b' for Databases+Tools
  const [, setActiveSection] = useState('personal');
  const [completedSections, setCompletedSections] = useState(new Set());
  const [scrollProgress, setScrollProgress] = useState(0);
  const [bootPhase, setBootPhase] = useState(0); // 0: boot, 1: logo, 2: progress, 3: form
  const [showInstructions, setShowInstructions] = useState(true); // Show instructions first
  const [isFormSubmitted, setIsFormSubmitted] = useState(false); // Track form submission
  const [countdownTimer, setCountdownTimer] = useState(0); // Countdown timer
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
    education: '',
    previousCompanies: '',
    employmentType: '',
    startDate: '',
    workStatus: '',
    
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
    resumeFile: null,
    
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
  // eslint-disable-next-line no-unused-vars
  const _ = isRequirementsInView; // Suppress unused variable warning
  const isFormInView = useInView(formRef, { once: true, margin: "-100px" });
  const isFaqInView = useInView(faqRef, { once: true, margin: "-100px" });

  // Scroll progress tracking
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  // Boot sequence management
  useEffect(() => {
    if (isFormInView && !showInstructions) {
      // Phase 0: Boot animation (3.5 seconds)
      const timer1 = setTimeout(() => setBootPhase(1), 3500);
      // Phase 1: Logo (2 seconds)
      const timer2 = setTimeout(() => setBootPhase(2), 5500);
      // Phase 2: Progress bar (3 seconds)
      const timer3 = setTimeout(() => setBootPhase(3), 8500);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
  }, [isFormInView, showInstructions]);

  // Handle terminal click to start application
  const handleTerminalClick = () => {
    setShowInstructions(false);
    setBootPhase(0); // Reset to boot sequence
  };


  const processSteps = [
    {
      step: 1,
      title: "Apply",
      description: "Submit your application with portfolio and experience details.",
      image: "/photos/placement-process-visualization.webp"
    },
    {
      step: 2,
      title: "Technical Assessment",
      description: "Complete an assessment to validate your skills.",
      image: "/photos/vetting-process-visualization.webp"
    },
    {
      step: 3,
      title: "Developer Interview",
      description: "Have a peer-to-peer interview with our technical team.",
      image: "/photos/human-coding-reviews.webp"
    },
    {
      step: 4,
      title: "Client Interview",
      description: "Interview directly with the U.S. company to ensure mutual fit.",
      image: "/photos/interview-process-visualization.webp"
    },
    {
      step: 5,
      title: "Start Working",
      description: "Begin your new role with confidence and support.",
      image: "/photos/work-team-celebrating-hire.webp"
    }
  ];


  const faqs = [
    {
      question: "What types of developers do you work with?",
      answer: "We connect U.S. companies with engineers across frontend, backend, full stack, data, DevOps, blockchain, and more."
    },
    {
      question: "Do I have to get paid in Bitcoin?",
      answer: "No. Payments are flexible (USD, stablecoins, or Bitcoin)."
    },
    {
      question: "How long does the process take?",
      answer: "On average, most qualified candidates are matched within 2–4 weeks."
    },
    {
      question: "Can I apply from anywhere in Latin America?",
      answer: "Yes. As long as you have reliable, stable internet and English proficiency, you can apply."
    },
    {
      question: "What's the technical assessment like?",
      answer: "Our assessment focuses on practical coding skills, problem-solving, and real-world scenarios. No trick questions or gotchas."
    },
    {
      question: "Do I need to know specific frameworks?",
      answer: "We work with companies using various tech stacks. Strong fundamentals in your area of expertise are more important than specific frameworks."
    },
    {
      question: "Do developers pay any fees to BitHire?",
      answer: "Never! Our services are completely free for developers, forever. We only charge U.S. companies for the introduction, vetting, and matchmaking process. Once you're placed, you work directly with the company. No ongoing fees or commissions."
    },
    {
      question: "What programming languages are most in demand?",
      answer: "JavaScript/TypeScript, Python, React, Node.js, and cloud technologies (AWS, Azure) are highly sought after by U.S. companies."
    },
    {
      question: "Can I work part-time or only full-time?",
      answer: "Most positions are full-time, but we also have part-time and contract opportunities available depending on your preferences."
    },
    {
      question: "What time zones do U.S. companies typically work in?",
      answer: "Most companies are flexible with time zones, but expect some overlap with U.S. business hours (EST/PST) for meetings and collaboration."
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

  const handleFileUpload = (file) => {
    if (!file) return;
    
    // Validate file type
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowedTypes.includes(file.type)) {
      alert('Please upload a PDF, DOC, or DOCX file.');
      return;
    }
    
    // Validate file size (10MB max)
    if (file.size > 10 * 1024 * 1024) {
      alert('File size must be less than 10MB.');
      return;
    }
    
    setFormData(prev => ({
      ...prev,
      resumeFile: file,
      resume: file.name
    }));
  };

  // Function to check if a section is completed
  const isSectionCompleted = useCallback((sectionId) => {
    switch (sectionId) {
      case 'personal':
        return formData.firstName && formData.lastName && formData.email && formData.phone && formData.location && formData.timezone;
      case 'experience':
        return formData.experience && formData.currentRole && formData.availability && formData.expectedSalary && 
               formData.education && formData.previousCompanies && formData.employmentType && formData.startDate;
      case 'skills':
        return formData.primaryLanguages.length > 0 && formData.frameworks.length > 0 && 
               formData.databases.length > 0 && formData.tools.length > 0;
      case 'portfolio':
        return formData.github && formData.motivation && formData.remoteExperience && formData.englishLevel;
      default:
        return false;
    }
  }, [formData]);

  // Function to check if an individual field is completed
  const isFieldCompleted = (fieldName, fieldType = 'text') => {
    const value = formData[fieldName];
    
    if (fieldType === 'array') {
      return Array.isArray(value) && value.length > 0;
    }
    
    if (fieldType === 'textarea') {
      return value && value.trim().length > 0;
    }
    
    return value && value.toString().trim().length > 0;
  };

  // Function to get border color class based on completion
  const getBorderClass = (fieldName, fieldType = 'text') => {
    return isFieldCompleted(fieldName, fieldType) 
      ? 'border-green-400 ring-1 ring-green-400/30' 
      : 'border-blue-400';
  };

  // Function to get checkbox container class based on completion
  const getCheckboxContainerClass = (fieldName) => {
    return isFieldCompleted(fieldName, 'array') 
      ? 'border-green-400/30 bg-green-400/5' 
      : 'border-blue-400/30 bg-blue-400/5';
  };

  // Update completed sections when form data changes
  useEffect(() => {
    const newCompletedSections = new Set();
    
    if (isSectionCompleted('personal')) newCompletedSections.add('personal');
    if (isSectionCompleted('experience')) newCompletedSections.add('experience');
    if (isSectionCompleted('skills')) newCompletedSections.add('skills');
    if (isSectionCompleted('portfolio')) newCompletedSections.add('portfolio');
    
    setCompletedSections(newCompletedSections);
  }, [formData, isSectionCompleted]);

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      resume: e.target.files[0]
    }));
  };

  const nextStep = () => {
    // Handle Step 3 sub-steps
    if (currentStep === 3 && step3SubStep === 'a') {
      setStep3SubStep('b');
      return;
    }
    
    // Normal step progression
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    // Handle Step 3 sub-steps
    if (currentStep === 3 && step3SubStep === 'b') {
      setStep3SubStep('a');
      return;
    }
    
    // Normal step progression
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Calculate form completion percentage
  const calculateCompletion = useCallback(() => {
    const sections = [
      { key: 'personal', fields: ['firstName', 'lastName', 'email'] },
      { key: 'experience', fields: ['experience', 'englishLevel'] },
      { key: 'skills', fields: ['primaryLanguages', 'frameworks', 'databases', 'tools'] },
      { key: 'portfolio', fields: ['github', 'linkedin', 'motivation'] }
    ];
    
    let completedCount = 0;
    const newCompletedSections = new Set();
    
    sections.forEach(section => {
      const hasRequiredFields = section.fields.every(field => {
        if (Array.isArray(formData[field])) {
          return formData[field].length > 0;
        }
        return formData[field] && formData[field].trim() !== '';
      });
      
      if (hasRequiredFields) {
        completedCount++;
        newCompletedSections.add(section.key);
      }
    });
    
    setCompletedSections(newCompletedSections);
    return Math.round((completedCount / sections.length) * 100);
  }, [formData]);

  // Auto-save functionality
  useEffect(() => {
    const completionPercentage = calculateCompletion();
    setScrollProgress(completionPercentage);
  }, [formData, calculateCompletion]);

  // Intersection Observer for active section tracking
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
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
    const sections = ['personal', 'experience', 'skills', 'portfolio'];
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
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('handleSubmit called!'); // Debug log
    console.log('Form submitted:', formData);
    
    // Show confirmation message
    setIsFormSubmitted(true);
    setCountdownTimer(30);
    
    // Start countdown timer
    const timer = setInterval(() => {
      setCountdownTimer((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsFormSubmitted(false);
          // Reset form data
          setFormData({
            firstName: '', lastName: '', email: '', phone: '', location: '', timezone: '',
            experience: '', currentRole: '', availability: '', expectedSalary: '', 
            education: '', previousCompanies: '', employmentType: '', startDate: '', workStatus: '',
            primaryLanguages: [], frameworks: [], databases: [], tools: [],
            github: '', linkedin: '', portfolio: '', resume: null, resumeFile: null,
            motivation: '', remoteExperience: '', englishLevel: '', additionalInfo: ''
          });
          setCompletedSections(new Set());
          setBootPhase(0);
          setShowInstructions(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
  <div className="min-h-screen bg-dark-900">
    {/* Breadcrumb Navigation - Screen reader only */}
    <nav aria-label="Breadcrumb" className="sr-only">
      <ol className="flex items-center space-x-2 text-sm">
        <li>
          <a href="/" className="hover:underline">
            Home
          </a>
        </li>
        <li>/</li>
        <li>For Developers</li>
      </ol>
    </nav>
      
      {/* Circular Progress Indicator */}
      <div className="fixed bottom-6 left-6 z-40">
        <div className="relative w-12 h-12">
          <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 40 40">
            {/* Background Circle */}
            <circle
              cx="20"
              cy="20"
              r="16"
              fill="none"
              stroke="rgba(75, 85, 99, 0.3)"
              strokeWidth="3"
            />
            {/* Progress Circle */}
            <circle
              cx="20"
              cy="20"
              r="16"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="100.48"
              strokeDashoffset={`${100.48 - (scrollProgress * 1.0048)}`}
              style={{
                transition: 'stroke-dashoffset 0.05s ease-out'
              }}
            />
          </svg>
          {/* Percentage Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-semibold text-white">
              {Math.round(scrollProgress)}%
            </span>
          </div>
        </div>
      </div>

      {/* Unified Background Elements */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>
      <ParticleSystem />
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-orange-600/20"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <FallingCode />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center w-full space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-blue-400/20 backdrop-blur-sm border border-white/20 rounded-full px-5 py-1.5"
            >
              <Medal className="w-4 h-4 text-orange-400" />
              <span className="text-white/90 font-medium text-sm">Join the Premier Developer Network</span>
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6">
              Build Your
              <span className="block bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent text-7xl md:text-9xl lg:text-10xl">
                Dream Career
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              Work with top U.S. companies, earn competitive salaries (with optional Bitcoin payments), and build a global career. Join Latin America's premier network of engineers and take your career to the next level.
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
                className="glass-button group inline-flex items-center space-x-2"
              >
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center items-center gap-6 pt-8"
          >
            <div className="flex items-center space-x-2 text-white/70">
              <CheckCircle className="w-5 h-5 text-blue-400" />
              <span className="font-medium">U.S. Market Salaries</span>
            </div>
            <div className="flex items-center space-x-2 text-white/70">
              <CheckCircle className="w-5 h-5 text-blue-400" />
              <span className="font-medium">Remote-First Opportunities</span>
            </div>
            <div className="flex items-center space-x-2 text-white/70">
              <CheckCircle className="w-5 h-5 text-blue-400" />
              <span className="font-medium">Optional Bitcoin Payroll</span>
            </div>
          </motion.div>
        </div>
        
        {/* Bottom Gradient Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500"></div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} id="benefits" className="py-16 relative">
        <SectionFloatingLogos />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="text-white">Bit</span><span className="gradient-text">Hire</span>?
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
              We're not just another recruitment platform. We're your gateway to remote developer jobs in the U.S. tech market with benefits designed specifically for Latin American software engineers and developers.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center justify-center space-x-2 text-orange-400"
            >
              <ChevronDown className="w-5 h-5" />
              <span className="text-sm font-semibold">Apply below to get started</span>
            </motion.div>
          </motion.div>

          {/* Interactive Comparison Dashboard */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Traditional Job Hunting Side */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isBenefitsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
              {/* Wrong Mark - Top Left */}
              <img 
                src="/graphics/3D-wrong-mark.webp"
                alt="3D wrong mark icon indicating traditional job hunting drawbacks"
                className="absolute -top-8 -left-8 w-32 h-32 z-20 transform -rotate-12"
              />
              <div className="bg-gradient-to-br from-red-500/10 to-red-600/5 border border-red-400/20 rounded-3xl p-6 h-full backdrop-blur-md">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center space-x-2 bg-red-500/20 border border-red-500/30 rounded-full px-3 py-1.5 mb-3">
                    <Users className="w-4 h-4 text-red-400" />
                    <span className="text-red-300 font-semibold text-sm">Traditional Job Hunting</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">The Old Way</h3>
                </div>

                {/* Image */}
                <div className="aspect-[3/2] rounded-xl border border-red-400/20 overflow-hidden mb-6">
                  <img 
                    src="/photos/traditional-job-hunting-process.webp"
                    alt="Traditional job hunting process showing months of applications and lower success rates"
                    className="w-full h-full object-cover opacity-60"
                    loading="lazy"
                  />
                </div>

                  {/* Pain Points */}
                <div className="space-y-2">
                    <div className="flex items-center space-x-3 p-3 bg-red-500/10 rounded-xl border border-red-400/20">
                      <Clock className="w-5 h-5 text-red-400" />
                        <div className="text-red-300 font-semibold">Months of applications</div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-red-500/10 rounded-xl border border-red-400/20">
                      <HeartCrack className="w-5 h-5 text-red-400" />
                        <div className="text-red-300 font-semibold">Lower salaries</div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-red-500/10 rounded-xl border border-red-400/20">
                      <HelpCircle className="w-5 h-5 text-red-400" />
                        <div className="text-red-300 font-semibold">Generic positions</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* BitHire Side */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isBenefitsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative"
              >
              {/* Checkmark - Bottom Right */}
              <img 
                src="/graphics/3D-checkmark.webp"
                alt="3D checkmark icon indicating BitHire network benefits"
                className="absolute -bottom-8 -right-6 w-32 h-32 z-20"
              />
              <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-400/20 rounded-3xl p-6 h-full backdrop-blur-md">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center space-x-2 bg-green-500/20 border border-green-500/30 rounded-full px-3 py-1.5 mb-3">
                    <Zap className="w-4 h-4 text-green-400" />
                    <span className="text-green-300 font-semibold text-sm">BitHire Network</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">The BitHire Way</h3>
                </div>

                {/* Image */}
                <div className="aspect-[3/2] rounded-xl border border-blue-400/20 overflow-hidden mb-6">
                  <img 
                    src="/photos/bithire-job-process.webp"
                    alt="Successful developer placement through BitHire network with faster hiring process"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                  {/* Benefits */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 p-3 bg-green-500/10 rounded-xl border border-blue-400/20">
                      <Zap className="w-5 h-5 text-green-400" />
                        <div className="text-green-300 font-semibold">Faster placements (avg. 2–4 weeks)</div>
                      </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-500/10 rounded-xl border border-blue-400/20">
                      <DollarSign className="w-5 h-5 text-green-400" />
                        <div className="text-green-300 font-semibold">Competitive U.S.-aligned salaries</div>
                      </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-500/10 rounded-xl border border-blue-400/20">
                      <ShieldCheck className="w-5 h-5 text-green-400" />
                        <div className="text-green-300 font-semibold">Premium U.S. clients</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Persuasive CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
          </motion.div>
                </div>
      </section>

      {/* Application Form Section */}
      <section ref={formRef} id="apply" className="relative pt-20 pb-32 overflow-hidden hidden lg:block">
        {/* Background - Transparent */}
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title and Description Section */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={isFormInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  <span className="gradient-text">Apply Now</span> - Use the Terminal Below
                </h2>
                <p className="text-xl text-white/70">
                  Complete your application using our interactive terminal interface
                </p>
              </motion.div>

        {/* Computer Screen Design */}
          <div className="flex justify-center">
          {/* Monitor Frame */}
          <div 
              className={`relative w-[1200px] h-[700px] bg-gray-800 rounded-lg shadow-2xl transition-all duration-300 ${
                showInstructions 
                  ? 'hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] cursor-pointer' 
                  : 'cursor-default'
              }`}
              onClick={showInstructions ? handleTerminalClick : undefined}
          >
            {/* Monitor Bezel */}
            <div className="absolute inset-4 bg-gray-900 rounded-lg">
              {/* Screen */}
              <div className="absolute inset-4 bg-black rounded-lg border border-gray-700">
                {/* Screen Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-blue-500/10 to-orange-600/20 rounded-lg shadow-[0_0_50px_rgba(59,130,246,0.4)]"></div>
                
                {/* Scan Lines */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/3 to-transparent bg-[length:100%_2px] animate-pulse rounded-lg"></div>
                
                {/* Boot Animation & Terminal Interface */}
                <div className="absolute inset-4 p-4 text-blue-400 text-sm font-mono pointer-events-auto">
                  {/* Show Instructions First */}
                  {showInstructions && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8 }}
                      className="flex items-center justify-center h-full text-center"
                    >
                      <div className="space-y-6">
                        {/* Company Logo */}
                        <div className="flex justify-center mb-6">
                          <img 
                            src="/logos/Bithire Logos/bithire-logo.svg" 
                            alt="BitHire Logo" 
                            className="w-16 h-16"
                          />
                        </div>
                        
                        <div className="text-2xl font-bold text-orange-400 mb-4">BitHire Terminal</div>
                        <div className="text-blue-400 text-lg">Click anywhere to Start Application</div>
                      </div>
                    </motion.div>
                  )}

                  {/* Show Boot Sequence & Form After Click */}
                  {!showInstructions && isFormInView && (
                    <>
                      {/* Phase 0: Boot Sequence */}
                      {bootPhase === 0 && (
          <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 2, delay: 0.5 }}
                          className="space-y-1"
                        >
                          <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                          >
                            BitHire Terminal v1.0 - Booting...
          </motion.div>

          <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1 }}
                          >
                            [OK] Loading system modules...
                          </motion.div>
                          
                          <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1.5 }}
                          >
                            [OK] Initializing developer network...
                          </motion.div>
                          
                          <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 2 }}
                          >
                            [OK] Connecting to US tech market...
                          </motion.div>
                          
                          <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 2.5 }}
                          >
                            [OK] Ready for applications
                          </motion.div>
                          
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 3 }}
                            className="pt-4"
                          >
                            <span className="text-blue-400">$</span> <span className="animate-pulse">_</span>
                          </motion.div>
                          
                          <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 3.2 }}
                          >
                            <span className="text-blue-400">$</span> <span className="text-white">bithire --apply</span>
                          </motion.div>
                        </motion.div>
                      )}

                      {/* Phase 1: BitHire Logo */}
                      {bootPhase === 1 && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 1 }}
                          className="flex items-center justify-center h-full"
                        >
                          <div className="text-center">
                            <div className="text-4xl font-bold text-orange-400 mb-2">BitHire</div>
                            <div className="text-blue-400 text-lg">Loading Application System...</div>
                </div>
                        </motion.div>
                      )}

                      {/* Phase 2: Progress Bar */}
                      {bootPhase === 2 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                          className="flex items-center justify-center h-full"
                        >
                          <div className="w-full max-w-md">
                            <div className="text-center text-white mb-4">
                              <div className="text-lg font-bold">Initializing Application Form</div>
                              <div className="text-sm text-blue-400">Please wait...</div>
              </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                              <motion.div 
                                className="bg-gradient-to-r from-blue-500 to-orange-500 h-2 rounded-full"
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 3, ease: "easeInOut" }}
                              />
              </div>
                          </div>
                        </motion.div>
                      )}

                      {/* Phase 3: Terminal Form */}
                      {bootPhase === 3 && !isFormSubmitted && (
              <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8 }}
                          className="h-full flex flex-col space-y-3"
                        >
                          <div className="text-orange-400 font-bold text-lg px-4 pt-4">BitHire Application System</div>
                          
                          <div className="flex-1 overflow-y-auto px-4 pb-4">
                              <form onSubmit={handleSubmit} name="talent-application-terminal" method="POST" data-netlify="true">
                                <input type="hidden" name="form-name" value="talent-application-terminal" />
              
              {/* Section 1: Personal Information */}
              <div id="personal" className="mb-12">
                                <div className="space-y-3">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="text-blue-400 font-semibold text-lg">[SECTION 1/4] Personal Information</div>
                    {completedSections.has('personal') && (
                      <div className="text-green-400 text-sm">✓ Completed</div>
                    )}
                  </div>
                                  
                                  <div className="space-y-2">
                                    <div className="flex items-center">
                                      <span className="text-blue-400 mr-2">&gt;</span>
                                      <span className="text-white">first_name:</span>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                                        className={`ml-2 bg-black border-b ${getBorderClass('firstName')} text-blue-400 outline-none flex-1 font-mono`}
                        placeholder="Enter your first name"
                      />
                    </div>
                    
                                    <div className="flex items-center">
                                      <span className="text-blue-400 mr-2">&gt;</span>
                                      <span className="text-white">last_name:</span>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                                        className={`ml-2 bg-black border-b ${getBorderClass('lastName')} text-blue-400 outline-none flex-1 font-mono`}
                        placeholder="Enter your last name"
                      />
                  </div>

                                    <div className="flex items-center">
                                      <span className="text-blue-400 mr-2">&gt;</span>
                                      <span className="text-white">email:</span>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                                        className={`ml-2 bg-black border-b ${getBorderClass('email')} text-blue-400 outline-none flex-1 font-mono`}
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                                    <div className="flex items-center">
                                      <span className="text-blue-400 mr-2">&gt;</span>
                                      <span className="text-white">phone:</span>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                                        className={`ml-2 bg-black border-b ${getBorderClass('phone')} text-blue-400 outline-none flex-1 font-mono`}
                        placeholder="+1 (281) 541-7279"
                      />
                  </div>

                                    <div className="flex items-center">
                                      <span className="text-blue-400 mr-2">&gt;</span>
                                      <span className="text-white">location:</span>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        required
                                        className={`ml-2 bg-black border-b ${getBorderClass('location')} text-blue-400 outline-none flex-1 font-mono`}
                        placeholder="City, Country"
                      />
                    </div>
                    
                                    <div className="flex items-center">
                                      <span className="text-blue-400 mr-2">&gt;</span>
                                      <span className="text-white">timezone:</span>
                      <select
                        name="timezone"
                        value={formData.timezone}
                        onChange={handleInputChange}
                        required
                                        className={`ml-2 bg-black border ${getBorderClass('timezone')} text-blue-400 outline-none flex-1 font-mono`}
                      >
                                        <option value="">Select timezone</option>
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
                                </div>
              </div>

              <div id="experience" className="mb-12">
                                <div className="space-y-3">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="text-blue-400 font-semibold text-lg">[SECTION 2/4] Professional Information</div>
                    {completedSections.has('experience') && (
                      <div className="text-green-400 text-sm">✓ Completed</div>
                    )}
                  </div>
                                  
                                  <div className="space-y-2">
                                    <div className="flex items-center">
                                      <span className="text-blue-400 mr-2">&gt;</span>
                                      <span className="text-white">experience:</span>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      required
                                        className={`ml-2 bg-black border ${getBorderClass('experience')} text-blue-400 outline-none flex-1 font-mono`}
                    >
                                        <option value="">Select experience level</option>
                      <option value="3-5">3-5 years</option>
                      <option value="5-7">5-7 years</option>
                      <option value="7-10">7-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                  </div>

                                    <div className="flex items-center">
                                      <span className="text-blue-400 mr-2">&gt;</span>
                                      <span className="text-white">current_role:</span>
                    <input
                      type="text"
                      name="currentRole"
                      value={formData.currentRole}
                      onChange={handleInputChange}
                      required
                                        className={`ml-2 bg-black border-b ${getBorderClass('currentRole')} text-blue-400 outline-none flex-1 font-mono`}
                      placeholder="e.g., Senior Full-Stack Developer"
                    />
                  </div>

                                    <div className="flex items-center">
                                      <span className="text-blue-400 mr-2">&gt;</span>
                                      <span className="text-white">availability:</span>
                    <select
                      name="availability"
                      value={formData.availability}
                      onChange={handleInputChange}
                      required
                                        className={`ml-2 bg-black border ${getBorderClass('availability')} text-blue-400 outline-none flex-1 font-mono`}
                    >
                                        <option value="">Select availability</option>
                      <option value="immediate">Immediate (within 2 weeks)</option>
                      <option value="1-month">1 month notice</option>
                      <option value="2-months">2 months notice</option>
                      <option value="3-months">3+ months notice</option>
                    </select>
                  </div>

                                    <div className="flex items-center">
                                      <span className="text-blue-400 mr-2">&gt;</span>
                                      <span className="text-white">expected_salary:</span>
                    <select
                      name="expectedSalary"
                      value={formData.expectedSalary}
                      onChange={handleInputChange}
                      required
                                        className={`ml-2 bg-black border ${getBorderClass('expectedSalary')} text-blue-400 outline-none flex-1 font-mono`}
                    >
                      <option value="">Select salary range</option>
                      <option value="30k-50k">$30,000 - $50,000</option>
                      <option value="50k-70k">$50,000 - $70,000</option>
                      <option value="70k-90k">$70,000 - $90,000</option>
                      <option value="90k-120k">$90,000 - $120,000</option>
                      <option value="120k+">$120,000+</option>
                    </select>
                  </div>

                                    <div className="flex items-center">
                                      <span className="text-blue-400 mr-2">&gt;</span>
                                      <span className="text-white">education:</span>
                    <select
                      name="education"
                      value={formData.education}
                      onChange={handleInputChange}
                      required
                                        className={`ml-2 bg-black border ${getBorderClass('education')} text-blue-400 outline-none flex-1 font-mono`}
                    >
                      <option value="">Select education level</option>
                      <option value="high-school">High School</option>
                      <option value="associates">Associate's Degree</option>
                      <option value="bachelors">Bachelor's Degree</option>
                      <option value="masters">Master's Degree</option>
                      <option value="phd">PhD</option>
                      <option value="self-taught">Self-Taught</option>
                      <option value="bootcamp">Bootcamp/Certification</option>
                      <option value="other">Other</option>
                    </select>
                                  </div>

                                    <div className="flex items-center">
                                      <span className="text-blue-400 mr-2">&gt;</span>
                                      <span className="text-white">previous_companies:</span>
                    <input
                      type="text"
                      name="previousCompanies"
                      value={formData.previousCompanies}
                      onChange={handleInputChange}
                      required
                                        className={`ml-2 bg-black border-b ${getBorderClass('previousCompanies')} text-blue-400 outline-none flex-1 font-mono`}
                      placeholder="e.g., Google, Microsoft, StartupXYZ (last 2-3 companies)"
                    />
                                </div>

                                    <div className="flex items-center">
                                      <span className="text-blue-400 mr-2">&gt;</span>
                                      <span className="text-white">employment_type:</span>
                    <select
                      name="employmentType"
                      value={formData.employmentType}
                      onChange={handleInputChange}
                      required
                                        className={`ml-2 bg-black border ${getBorderClass('employmentType')} text-blue-400 outline-none flex-1 font-mono`}
                    >
                      <option value="">Select employment type</option>
                      <option value="full-time">Full-Time</option>
                      <option value="part-time">Part-Time</option>
                      <option value="contract">Contract</option>
                      <option value="freelance">Freelance</option>
                    </select>
                  </div>

                                    <div className="flex items-center">
                                      <span className="text-blue-400 mr-2">&gt;</span>
                                      <span className="text-white">start_date:</span>
                    <select
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleInputChange}
                      required
                                        className={`ml-2 bg-black border ${getBorderClass('startDate')} text-blue-400 outline-none flex-1 font-mono`}
                    >
                      <option value="">Select start date</option>
                      <option value="immediate">Immediate (within 2 weeks)</option>
                      <option value="1-month">1 month</option>
                      <option value="2-months">2 months</option>
                      <option value="3-months">3 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>

                                    <div className="flex items-center">
                                      <span className="text-blue-400 mr-2">&gt;</span>
                                      <span className="text-white">work_status:</span>
                    <select
                      name="workStatus"
                      value={formData.workStatus}
                      onChange={handleInputChange}
                                        className={`ml-2 bg-black border ${getBorderClass('workStatus')} text-blue-400 outline-none flex-1 font-mono`}
                    >
                      <option value="">Select work status preference</option>
                      <option value="contractor">Contractor (1099)</option>
                      <option value="employee">Employee (W2)</option>
                      <option value="no-preference">No Preference</option>
                    </select>
                  </div>
                                  </div>
                </div>
              </div>

              <div id="skills" className="mb-12">
                                <div className="space-y-3">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="text-blue-400 font-semibold text-lg">[SECTION 3/4] Technical Skills</div>
                    {completedSections.has('skills') && (
                      <div className="text-green-400 text-sm">✓ Completed</div>
                    )}
                  </div>
                                  <div className="text-yellow-400 text-sm">* Select at least one skill in each category</div>
                                  
                                  <div className="space-y-2">
                                    <div className="text-yellow-400">Primary Languages: *</div>
                                    <div className={`grid grid-cols-2 gap-2 ml-4 p-3 rounded border ${getCheckboxContainerClass('primaryLanguages')}`}>
                                      {['JavaScript', 'Python', 'Java', 'C#', 'Go', 'Rust', 'PHP', 'Ruby', 'TypeScript', 'C++', 'N/A', 'Other'].map((lang) => (
                                        <label key={lang} className="flex items-center text-sm">
                          <input
                            type="checkbox"
                            name="primaryLanguages"
                            value={lang}
                            checked={formData.primaryLanguages.includes(lang)}
                            onChange={handleInputChange}
                                            className="mr-2 text-green-500"
                          />
                                          <span className="text-blue-400">{lang}</span>
                        </label>
                      ))}
                  </div>

                                    <div className="text-yellow-400 mt-4">Frameworks & Libraries:</div>
                                    <div className={`grid grid-cols-2 gap-2 ml-4 p-3 rounded border ${getCheckboxContainerClass('frameworks')}`}>
                                      {['React', 'Vue.js', 'Angular', 'Node.js', 'Express', 'Django', 'Flask', 'Spring', 'Laravel', 'Rails', 'N/A', 'Other'].map((framework) => (
                                        <label key={framework} className="flex items-center text-sm">
                          <input
                            type="checkbox"
                            name="frameworks"
                            value={framework}
                            checked={formData.frameworks.includes(framework)}
                            onChange={handleInputChange}
                                            className="mr-2 text-green-500"
                          />
                                          <span className="text-blue-400">{framework}</span>
                        </label>
                      ))}
                  </div>

                                    <div className="text-yellow-400 mt-4">Databases:</div>
                                    <div className={`grid grid-cols-2 gap-2 ml-4 p-3 rounded border ${getCheckboxContainerClass('databases')}`}>
                                      {['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'SQLite', 'Oracle', 'SQL Server', 'N/A', 'Other'].map((db) => (
                                        <label key={db} className="flex items-center text-sm">
                          <input
                            type="checkbox"
                            name="databases"
                            value={db}
                            checked={formData.databases.includes(db)}
                            onChange={handleInputChange}
                                            className="mr-2 text-green-500"
                          />
                                          <span className="text-blue-400">{db}</span>
                        </label>
                      ))}
                  </div>

                                    <div className="text-yellow-400 mt-4">Tools & Cloud:</div>
                                    <div className={`grid grid-cols-2 gap-2 ml-4 p-3 rounded border ${getCheckboxContainerClass('tools')}`}>
                                      {['Docker', 'Kubernetes', 'AWS', 'Azure', 'GCP', 'Git', 'Jenkins', 'CI/CD', 'N/A', 'Other'].map((tool) => (
                                        <label key={tool} className="flex items-center text-sm">
                          <input
                            type="checkbox"
                            name="tools"
                            value={tool}
                            checked={formData.tools.includes(tool)}
                            onChange={handleInputChange}
                                            className="mr-2 text-green-500"
                          />
                                          <span className="text-blue-400">{tool}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                                </div>
              </div>

              {/* Section 4: Portfolio & Additional Info */}
              <div id="portfolio" className="mb-12">
                                <div className="space-y-3">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="text-blue-400 font-semibold text-lg">[SECTION 4/4] Portfolio & Additional Info</div>
                    {completedSections.has('portfolio') && (
                      <div className="text-green-400 text-sm">✓ Completed</div>
                    )}
                  </div>
                                  
                                  <div className="space-y-2">
                                    <div className="flex items-center">
                                      <span className="text-blue-400 mr-2">&gt;</span>
                                      <span className="text-white">github:</span>
                      <input
                        type="url"
                        name="github"
                        value={formData.github}
                        onChange={handleInputChange}
                                        className={`ml-2 bg-black border-b ${getBorderClass('github')} text-blue-400 outline-none flex-1 font-mono`}
                        placeholder="https://github.com/username"
                      />
                    </div>
                    
                                    <div className="flex items-center">
                                      <span className="text-blue-400 mr-2">&gt;</span>
                                      <span className="text-white">resume:</span>
                    </div>
                    
                    {/* Resume Upload Section */}
                    <div className="ml-4 mt-2">
                      <div 
                        className={`border-2 border-dashed rounded-lg p-6 text-center transition-all duration-300 cursor-pointer ${
                          formData.resumeFile 
                            ? 'border-green-400 bg-green-400/10' 
                            : 'border-blue-400/50 bg-blue-400/5 hover:border-blue-400 hover:bg-blue-400/10'
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          document.getElementById('resume-upload').click();
                        }}
                        onDragOver={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          e.currentTarget.classList.add('border-blue-400', 'bg-blue-400/20');
                        }}
                        onDragLeave={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          e.currentTarget.classList.remove('border-blue-400', 'bg-blue-400/20');
                        }}
                        onDrop={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          e.currentTarget.classList.remove('border-blue-400', 'bg-blue-400/20');
                          const files = e.dataTransfer.files;
                          if (files.length > 0) {
                            handleFileUpload(files[0]);
                          }
                        }}
                      >
                        {formData.resumeFile ? (
                          <div className="space-y-2">
                            <div className="text-green-400 text-sm font-mono">✓ Resume uploaded</div>
                            <div className="text-blue-400 text-xs">{formData.resumeFile.name}</div>
                            <div className="text-blue-400 text-xs">Click to change file</div>
                          </div>
                        ) : (
                          <div className="space-y-2">
                            <div className="text-blue-400 text-sm font-mono">📄 Drop resume here or click to browse</div>
                            <div className="text-blue-400/70 text-xs">PDF, DOC, DOCX (max 10MB)</div>
                          </div>
                        )}
                      </div>
                      
                      <input
                        id="resume-upload"
                        type="file"
                        name="resume"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => handleFileUpload(e.target.files[0])}
                        className="hidden"
                      />
                    </div>
                    
                                    <div className="flex items-center">
                                      <span className="text-blue-400 mr-2">&gt;</span>
                                      <span className="text-white">linkedin:</span>
                      <input
                        type="url"
                        name="linkedin"
                        value={formData.linkedin}
                        onChange={handleInputChange}
                                        className={`ml-2 bg-black border-b ${getBorderClass('linkedin')} text-blue-400 outline-none flex-1 font-mono`}
                        placeholder="https://linkedin.com/in/username"
                      />
                  </div>

                                    <div className="flex items-center">
                                      <span className="text-blue-400 mr-2">&gt;</span>
                                      <span className="text-white">portfolio:</span>
                    <input
                      type="url"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleInputChange}
                                        className={`ml-2 bg-black border-b ${getBorderClass('portfolio')} text-blue-400 outline-none flex-1 font-mono`}
                      placeholder="https://yourportfolio.com"
                    />
                  </div>

                                    <div className="flex items-center">
                                      <span className="text-blue-400 mr-2">&gt;</span>
                                      <span className="text-white">english_level:</span>
                                      <select
                                        name="englishLevel"
                                        value={formData.englishLevel}
                                        onChange={handleInputChange}
                                        required
                                        className={`ml-2 bg-black border ${getBorderClass('englishLevel')} text-blue-400 outline-none flex-1 font-mono`}
                                      >
                                        <option value="">Select English level</option>
                                        <option value="intermediate">Intermediate</option>
                                        <option value="advanced">Advanced</option>
                                        <option value="fluent">Fluent</option>
                                        <option value="native">Native</option>
                                      </select>
                  </div>

                                    <div className="text-white mt-4">
                                      <span className="text-blue-400">&gt;</span> motivation:
                                    </div>
                    <textarea
                      name="motivation"
                      value={formData.motivation}
                      onChange={handleInputChange}
                      required
                                      rows={3}
                                      className={`w-full bg-black border ${getBorderClass('motivation', 'textarea')} text-blue-400 outline-none font-mono p-2`}
                      placeholder="Tell us about your career goals and why you're interested in working with US companies through BitHire..."
                    />

                                    <div className="text-white mt-4">
                                      <span className="text-blue-400">&gt;</span> remote_experience:
                                    </div>
                    <textarea
                      name="remoteExperience"
                      value={formData.remoteExperience}
                      onChange={handleInputChange}
                                      rows={2}
                                      className={`w-full bg-black border ${getBorderClass('remoteExperience', 'textarea')} text-blue-400 outline-none font-mono p-2`}
                                      placeholder="Describe your experience working remotely..."
                                    />
                                  </div>
                                </div>
              </div>
                              </form>
                            </div>
                            
                          {/* Submit Button */}
                          <div className="pt-6 border-t border-blue-400/30 mx-4 pb-4">
                            <div className="flex justify-center">
                                    <button 
                                      type="button"
                                      onClick={handleSubmit}
                                className="bg-gradient-to-r from-blue-600 to-orange-600 hover:from-blue-700 hover:to-orange-700 text-white px-8 py-3 rounded font-mono text-sm transition-all duration-300 hover:scale-105 shadow-lg"
                                    >
                                      $ submit_application()
                                    </button>
                            </div>
                          </div>
                        </motion.div>
              )}

                      {/* Phase 4: Confirmation Message */}
                      {isFormSubmitted && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="h-full flex flex-col items-center justify-center text-center space-y-6"
                        >
                          {/* Success Icon */}
                          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                            <CheckCircle className="w-10 h-10 text-green-400" />
                                </div>
                          
                          {/* Success Message */}
                          <div className="space-y-4 text-center">
                            <h3 className="text-2xl md:text-3xl font-bold text-green-400">
                              Application Submitted Successfully!
                            </h3>
                            <p className="text-lg text-blue-400 max-w-md mx-auto">
                              Thank you for applying to BitHire! We'll review your application and get back to you within 24-48 hours.
                            </p>
                              </div>
                          
                          {/* Additional Info */}
                          <div className="bg-blue-400/10 border border-blue-400/30 rounded-lg p-4 max-w-lg">
                            <p className="text-sm text-blue-300">
                              <span className="font-semibold">What's next?</span><br />
                              • Our team will review your skills and experience<br />
                              • We'll match you with suitable US companies<br />
                              • You'll receive interview invitations within 1-2 weeks
                            </p>
                          </div>
                          
                          {/* Contact Info */}
                          <div className="text-sm text-blue-400/70">
                            Questions? Contact us at <span className="text-orange-400">connect@bithire.com</span>
                          </div>
                          
                          {/* Close Button and Countdown */}
                          <div className="flex items-center space-x-4 pt-4">
                            <button
                              onClick={() => {
                                setIsFormSubmitted(false);
                                setCountdownTimer(0);
                              }}
                              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-mono text-sm transition-colors duration-300"
                            >
                              Close
                            </button>
                            <div className="text-sm text-blue-400/70">
                              Auto-closes in {countdownTimer}s
                            </div>
                  </div>
              </motion.div>
              )}
                    </>
                  )}
                </div>
                    </div>
                  </div>

            {/* Power Button */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-gray-700 rounded-full shadow-lg"></div>
            
            {/* Monitor Stand */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-700 rounded-full"></div>
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-40 h-4 bg-gray-600 rounded-full"></div>
                    </div>
                  </div>
        </div>
      </section>

      {/* Mobile Form Section - Clean Version */}
      <section className="relative pt-16 pb-24 overflow-hidden lg:hidden">
        {/* Background - Transparent */}

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="gradient-text">Apply Now</span> - Join Our Network
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Complete your application to join Latin America's premier developer network and start working with top U.S. companies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
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

            <form onSubmit={handleSubmit} name="talent-application-backup" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="talent-application-backup" />
              
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
                        className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[44px]"
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
                        className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[44px]"
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
                        className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[44px]"
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
                        className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[44px]"
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
                        className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[44px]"
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
                    <label className="block text-white font-medium mb-2">Expected Salary Range (USD, Bitcoin, or both) *</label>
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

                  <div>
                    <label className="block text-white font-medium mb-2">Education Level *</label>
                    <select
                      name="education"
                      value={formData.education}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select education level</option>
                      <option value="high-school">High School</option>
                      <option value="associates">Associate's Degree</option>
                      <option value="bachelors">Bachelor's Degree</option>
                      <option value="masters">Master's Degree</option>
                      <option value="phd">PhD</option>
                      <option value="self-taught">Self-Taught</option>
                      <option value="bootcamp">Bootcamp/Certification</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Previous Companies (Last 2-3) *</label>
                    <input
                      type="text"
                      name="previousCompanies"
                      value={formData.previousCompanies}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., Google, Microsoft, StartupXYZ"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Employment Type *</label>
                    <select
                      name="employmentType"
                      value={formData.employmentType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select employment type</option>
                      <option value="full-time">Full-Time</option>
                      <option value="part-time">Part-Time</option>
                      <option value="contract">Contract</option>
                      <option value="freelance">Freelance</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Start Date *</label>
                    <select
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select start date</option>
                      <option value="immediate">Immediate (within 2 weeks)</option>
                      <option value="1-month">1 month</option>
                      <option value="2-months">2 months</option>
                      <option value="3-months">3 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Work Status Preference</label>
                    <select
                      name="workStatus"
                      value={formData.workStatus}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select work status preference</option>
                      <option value="contractor">Contractor (1099)</option>
                      <option value="employee">Employee (W2)</option>
                      <option value="no-preference">No Preference</option>
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
                    <label className="block text-white font-medium mb-3">Tools & Cloud Technologies</label>
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
                        className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[44px]"
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
                        className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[44px]"
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
                  disabled={currentStep === 1 && step3SubStep === 'a'}
                  className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    currentStep === 1 && step3SubStep === 'a'
                      ? 'bg-white/5 text-white/30 cursor-not-allowed'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  {currentStep === 3 && step3SubStep === 'b' ? 'Back to Languages & Frameworks' : 'Previous'}
                </button>

                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-orange-500 text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300"
                  >
                    {currentStep === 3 && step3SubStep === 'a' ? 'Continue to Databases & Tools' : 'Next'}
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
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

      {/* Mobile Confirmation Message */}
      {isFormSubmitted && (
        <section className="py-20 relative lg:hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center space-y-8"
            >
              {/* Success Icon */}
              <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-12 h-12 text-green-400" />
              </div>
              
              {/* Success Message */}
              <div className="space-y-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-green-400">
                  Application Submitted Successfully!
                </h2>
                <p className="text-xl text-blue-400 max-w-2xl mx-auto">
                  Thank you for applying to BitHire! We'll review your application and get back to you within 24-48 hours.
                </p>
              </div>
              
              {/* Additional Info */}
              <div className="bg-blue-400/10 border border-blue-400/30 rounded-xl p-6 max-w-2xl mx-auto">
                <h3 className="text-lg font-semibold text-blue-300 mb-4">What's next?</h3>
                <ul className="text-left text-blue-300 space-y-2">
                  <li>• Our team will review your skills and experience</li>
                  <li>• We'll match you with suitable US companies</li>
                  <li>• You'll receive interview invitations within 1-2 weeks</li>
                </ul>
              </div>
              
              {/* Contact Info */}
              <div className="text-blue-400/70">
                Questions? Contact us at <span className="text-orange-400 font-semibold">hello@bithire.com</span>
              </div>
              
              {/* Close Button and Countdown */}
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 pt-6">
                <button
                  onClick={() => {
                    setIsFormSubmitted(false);
                    setCountdownTimer(0);
                  }}
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-colors duration-300"
                >
                  Close
                </button>
                <div className="text-sm text-blue-400/70">
                  Auto-closes in {countdownTimer}s
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Process Section */}
      <section ref={processRef} id="process" className="py-16 relative">
        <SectionFloatingLogos />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="gradient-text">Proven</span> Process
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              No fluff, no endless interviews. Here's exactly how our remote developer hiring process works to connect you with U.S. companies.
            </p>
          </motion.div>

          {/* Enhanced Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute top-28 left-0 right-0 h-1 bg-orange-500/60"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Step Card */}
                  <div className="glass-card p-6 text-center hover:scale-105 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-blue-500/20">
                    {/* Step Number Badge */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                      {step.step}
                    </div>
                    
                    {/* Image */}
                    <div className="w-40 h-40 mx-auto mb-4 rounded-xl overflow-hidden border border-white/10 group-hover:border-blue-400/30 transition-colors duration-300">
                    <img 
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-base font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-white/70 text-xs leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                </motion.div>
              ))}
            </div>
          </div>

          {/* Process Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 glass-card p-8 lg:p-12 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-orange-600/10"></div>
            <div className="relative z-10 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                From Application to <span className="gradient-text">Job Placement</span> in 3-4 Weeks
              </h3>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Our streamlined process eliminates the typical 2-3 month hiring cycle. 
                We focus on what matters: your skills, experience, and cultural fit.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="py-16 relative">
        <SectionFloatingLogos />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="glass-card p-4 hover:scale-[1.02] transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-blue-500/10">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 pr-4">
                      <h3 className="text-base font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                        {faq.question}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                    
                    {/* Decorative Icon */}
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500/20 to-orange-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <MessageCircle className="w-5 h-5 text-blue-400 group-hover:text-orange-400 transition-colors duration-300" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 relative">
        <SectionFloatingLogos />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main CTA Card */}
            <div className="glass-card p-8 lg:p-12 relative overflow-hidden mb-6">
              {/* Enhanced Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-orange-600/20"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-orange-500/5"></div>
              
              {/* Content */}
              <div className="relative z-10 text-center">
                <motion.div
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 to-orange-500/20 border border-blue-400/30 rounded-full mb-8"
                >
                  <Globe className="w-5 h-5 text-blue-400 mr-2" />
                  <span className="text-blue-300 font-semibold">Join the Next Generation of Remote Engineers</span>
                </motion.div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your <span className="gradient-text">Career</span>?
                </h2>
                
                {/* Success Image */}
                <div className="w-full max-w-[640px] h-48 sm:h-56 md:h-72 mx-auto mb-8 rounded-xl overflow-hidden border border-white/20 shadow-lg">
                  <img 
                    src="/photos/bithire-success-celebration.webp"
                    alt="Developers celebrating successful job placement through BitHire network"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Don't let another opportunity pass you by. Join Latin America's premier developer network and start earning competitive US market rates today.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-6">
                  <a
                    href="#apply"
                    className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-500 to-orange-500 text-white font-bold text-lg rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/30"
                  >
                    <Zap className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                    Apply Now - It's Free Forever!
                    <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                  </a>
                  
                  <a
                    href="mailto:connect@bithire.com"
                    className="group inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/20 hover:scale-105"
                  >
                    <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                    Have Questions?
                  </a>
                </div>

              </div>
            </div>

            {/* Urgency CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="glass-card p-6 text-center"
            >
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Clock className="w-5 h-5 text-orange-400" />
                <span className="text-orange-300 font-semibold">Limited Spots Available</span>
              </div>
              <p className="text-white/80 text-sm">
                We maintain high standards and only work with the top 10% of developers. 
                <span className="text-white font-semibold"> Apply today to secure your spot.</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Talent;
