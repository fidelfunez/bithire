import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Terminal, Monitor, Cpu, Database, Globe, Brain } from 'lucide-react';

const TechStack = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedCode, setDisplayedCode] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isSelecting, setIsSelecting] = useState(false);

  const developerRoles = [
    {
      role: "Frontend Developer",
      icon: Monitor,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-400/30",
      code: `// BitHire Dashboard
import React from 'react';
import { Bitcoin, Users } from 'lucide-react';

const BitHireDashboard = () => {
  return (
    <div className="dashboard">
      <h2>BitHire Talent Pool</h2>
      <Users className="w-6 h-6" />
      <span>500+ Vetted Developers</span>
      <Bitcoin className="w-6 h-6" />
      <span>Bitcoin Payroll Ready</span>
    </div>
  );
};`
    },
    {
      role: "Backend Engineer",
      icon: Database,
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-400/30",
      code: `# BitHire API
from fastapi import FastAPI
from sqlalchemy.orm import Session

app = FastAPI(title="BitHire API")

@app.post("/api/match-developer/")
async def match_developer(requirements, db: Session):
    # AI-powered matching
    matches = await DeveloperService.find_matches(
        db, requirements.skills
    )
    return {"matches": matches, "total": len(matches)}`
    },
    {
      role: "ML Engineer",
      icon: Brain,
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-400/30",
      code: `# BitHire AI Assessment
import tensorflow as tf

class DeveloperVettingAI:
    def __init__(self):
        self.model = self.build_model()
    
    def build_model(self):
        model = tf.keras.Sequential([
            tf.keras.layers.Dense(128, activation='relu'),
            tf.keras.layers.Dense(1, activation='sigmoid')
        ])
        return model`
    },
    {
      role: "DevOps Engineer",
      icon: Terminal,
      color: "text-orange-400",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-400/30",
      code: `# BitHire Infrastructure
apiVersion: apps/v1
kind: Deployment
metadata:
  name: bithire-platform
spec:
  replicas: 3
  selector:
    matchLabels:
      app: bithire
  template:
    spec:
      containers:
      - name: bithire-api
        image: bithire/platform:latest`
    },
    {
      role: "Full Stack Developer",
      icon: Globe,
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-400/30",
      code: `// BitHire Company Portal
export async function getServerSideProps() {
  const developers = await prisma.developer.findMany({
    where: { 
      status: 'available',
      verified: true,
      bitcoinPayroll: true
    }
  });
  
  return { props: { developers } };
}

export default function CompanyPortal({ developers }) {
  return (
    <div className="portal">
      <h2>Find Your Next Developer</h2>
      <DeveloperGrid developers={developers} />
    </div>
  );
}`
    },
    {
      role: "Blockchain Developer",
      icon: Cpu,
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-400/30",
      code: `// BitHire Bitcoin Payroll
pragma solidity ^0.8.0;

contract BitHirePayroll {
    mapping(address => uint256) public balances;
    
    function payDeveloper(address dev, uint256 satoshis) external {
        require(balances[dev] >= satoshis);
        balances[dev] -= satoshis;
        payable(dev).transfer(satoshis);
    }
}`
    }
  ];

  const currentRole = developerRoles[currentRoleIndex];

  useEffect(() => {
    const typewriterSpeed = 30;
    let timeoutId;

    if (isTyping) {
      if (displayedCode.length < currentRole.code.length) {
        timeoutId = setTimeout(() => {
          setDisplayedCode(currentRole.code.slice(0, displayedCode.length + 1));
        }, typewriterSpeed);
      } else {
        // Finished typing, wait 3 seconds then start selecting
        timeoutId = setTimeout(() => {
          setIsTyping(false);
          setIsSelecting(true);
        }, 3000);
      }
    } else if (isSelecting) {
      // Show selection for 1 second, then delete all at once
      timeoutId = setTimeout(() => {
        setIsSelecting(false);
        setDisplayedCode('');
        // Move to next role after a brief pause
        setTimeout(() => {
          setCurrentRoleIndex((prev) => (prev + 1) % developerRoles.length);
          setIsTyping(true);
        }, 200);
      }, 1000);
    }

    return () => clearTimeout(timeoutId);
  }, [displayedCode, isTyping, isSelecting, currentRole.code, currentRoleIndex, developerRoles.length]);

  return (
    <section id="tech-stack" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Technologies We <span className="gradient-text">Work With</span>
          </h2>
        </motion.div>

        {/* Diversity Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Whether you're building the next AI breakthrough or scaling enterprise infrastructure,
            <br />
            we work across the full spectrum of modern technologies.
            <br />
            <br />
            Specialized talent that goes far beyond typical frontend and backend roles.
          </p>
        </motion.div>

        {/* Animated IDE Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="max-w-4xl mx-auto">
            {/* IDE Window */}
            <div className="bg-gray-900/90 backdrop-blur-sm border border-white/20 rounded-t-xl overflow-hidden shadow-2xl h-[28rem]">
              {/* IDE Header */}
              <div className="bg-gray-800/50 border-b border-white/10 px-4 py-3 flex items-center space-x-2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 text-center">
                  <span className="text-white/70 text-sm font-mono">BitHire IDE - {currentRole.role}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <currentRole.icon className={`w-4 h-4 ${currentRole.color}`} />
                </div>
              </div>
              
              {/* Code Content */}
              <div className={`${currentRole.bgColor} ${currentRole.borderColor} border-l-4 h-full flex flex-col`}>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center space-x-3 mb-4">
                    <currentRole.icon className={`w-6 h-6 ${currentRole.color}`} />
                    <h3 className={`text-xl font-bold ${currentRole.color}`}>
                      {currentRole.role}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-400 text-sm font-mono">Live Coding</span>
                    </div>
                  </div>
                  
                  <div className="bg-black/50 rounded-lg p-4 font-mono text-sm overflow-x-auto flex-1">
                    <pre className={`whitespace-pre-wrap w-full ${
                      isSelecting 
                        ? 'bg-blue-500/30 text-blue-100' 
                        : 'text-white/90'
                    }`}>
                      {displayedCode}
                      {!isSelecting && <span className="animate-pulse text-white">|</span>}
                    </pre>
                  </div>
                  
                  <div className="mt-4 flex items-center justify-between text-sm text-white/60">
                    <span>Real developers, real code, real talent</span>
                    <span className="font-mono">
                      {Math.floor(displayedCode.length / 10)} lines • {currentRoleIndex + 1}/6
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Role Indicators */}
            <div className="flex justify-center space-x-2 mt-4">
              {developerRoles.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentRoleIndex 
                      ? 'bg-white scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
            
            {/* Technology Categories */}
            <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-white/70">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-sm font-medium">Frontend Specialists</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm font-medium">Backend Architects</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-sm font-medium">ML Engineers</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span className="text-sm font-medium">DevOps Experts</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-sm font-medium">Full Stack Leaders</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-sm font-medium">Blockchain Developers & More!</span>
              </div>
            </div>
            
          </div>
        </motion.div>

        {/* 3D Computer Image - Positioned near CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="absolute top-[54rem] right-40 z-20"
        >
          <img 
            src="/logos/3D Logos/3D-computer.webp" 
            alt="3D Computer with code"
            loading="lazy"
            className="w-56 h-56 object-contain hover:scale-110 transition-transform duration-300"
          />
        </motion.div>

        {/* 3D Docs Image - Positioned near CTA on left side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          viewport={{ once: true }}
          className="absolute top-[65rem] left-36 z-20"
        >
          <img 
            src="/logos/3D Logos/3D-docs.webp" 
            alt="3D Documentation"
            loading="lazy"
            className="w-56 h-56 object-contain hover:scale-110 transition-transform duration-300"
          />
        </motion.div>

        {/* 3D Programming Languages Image - Positioned near CTA bottom right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="absolute bottom-20 right-40 z-20"
        >
          <img 
            src="/logos/3D Logos/3D-programming-languages-logos.webp" 
            alt="3D Programming Languages"
            loading="lazy"
            className="w-56 h-56 object-contain hover:scale-110 transition-transform duration-300"
          />
        </motion.div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-secondary-500/10 to-primary-500/10"></div>
          <div className="relative bg-gradient-to-r from-primary-500/5 via-secondary-500/5 to-primary-500/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 lg:p-12">
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 bg-primary-500/20 border border-primary-500/30 rounded-full px-4 py-2 mb-6">
                <Code className="w-5 h-5 text-primary-400" />
                <span className="text-primary-300 font-semibold">Expert Coverage</span>
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-6">
                Need a Developer in a <span className="gradient-text">Specific Technology?</span>
              </h3>
              
              <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                Our network includes specialists in every major programming language and framework. 
                Whether you need a React frontend expert or a Python backend architect, we've got the right developer for you.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#contact"
                  className="glass-button group flex items-center space-x-2"
                >
                    <span>Find Your Expert</span>
                  <Zap className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
                <span className="text-white/60 text-sm">Average response: 24 hours</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
