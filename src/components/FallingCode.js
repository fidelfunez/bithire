import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const FallingCode = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const burstParticlesRef = useRef([]);
  const realisticFireworksRef = useRef([]);

  // Programming keywords and code snippets
  const keywords = [
    'React', 'JavaScript', 'Python', 'Node.js', 'TypeScript', 'Vue.js', 'Angular',
    'Docker', 'Kubernetes', 'AWS', 'Git', 'MongoDB', 'PostgreSQL', 'Redis',
    'Express', 'Django', 'Flask', 'Spring', 'Laravel', 'Rails', 'Next.js',
    'GraphQL', 'REST', 'API', 'CSS', 'HTML', 'SASS', 'Webpack', 'Babel',
    'Jest', 'Cypress', 'JWT', 'OAuth', 'Microservices', 'DevOps', 'CI/CD'
  ];

  const codeSnippets = [
    {
      lines: [
        'const developer = {',
        '  skills: ["React", "Node.js"],',
        '  experience: "5+ years",',
        '  location: "Remote"',
        '};'
      ],
      type: 'object'
    },
    {
      lines: [
        'function hireDeveloper() {',
        '  return "Welcome to BitHire!";',
        '}'
      ],
      type: 'function'
    },
    {
      lines: [
        'import { useState } from "react";',
        '',
        'const [isHired, setIsHired] = useState(false);'
      ],
      type: 'import'
    },
    {
      lines: [
        'if (developer.skills.includes("React")) {',
        '  setIsHired(true);',
        '}'
      ],
      type: 'conditional'
    },
    {
      lines: [
        'const api = {',
        '  endpoint: "/api/developers",',
        '  method: "POST"',
        '};'
      ],
      type: 'object'
    },
    {
      lines: [
        'async function applyToBitHire() {',
        '  const response = await fetch(api.endpoint, {',
        '    method: api.method,',
        '    body: JSON.stringify(developer)',
        '  });',
        '  return response.json();',
        '}'
      ],
      type: 'async'
    },
    {
      lines: [
        'class Developer {',
        '  constructor(name, skills) {',
        '    this.name = name;',
        '    this.skills = skills;',
        '  }',
        '}'
      ],
      type: 'class'
    },
    {
      lines: [
        '// BitHire Application',
        'const application = {',
        '  status: "pending",',
        '  timeline: "2-4 weeks"',
        '};'
      ],
      type: 'comment'
    },
    {
      lines: [
        'const newDeveloper = new Developer("You", ["React", "Python"]);',
        '',
        'export default Developer;'
      ],
      type: 'export'
    },
    {
      lines: [
        '// BitHire Developer Portal',
        'const bithireAPI = {',
        '  baseURL: "https://api.bithire.co",',
        '  endpoints: {',
        '    apply: "/developers/apply",',
        '    status: "/developers/status"',
        '  }',
        '};'
      ],
      type: 'api'
    },
    {
      lines: [
        'async function joinBitHire() {',
        '  const response = await fetch(bithireAPI.endpoints.apply, {',
        '    method: "POST",',
        '    headers: { "Content-Type": "application/json" },',
        '    body: JSON.stringify(developerProfile)',
        '  });',
        '  return response.json();',
        '}'
      ],
      type: 'function'
    },
    {
      lines: [
        '// Remote Work with BitHire',
        'const remoteWork = {',
        '  benefits: ["Bitcoin payments", "US clients", "Flexible hours"],',
        '  requirements: ["3+ years experience", "English fluency"]',
        '};'
      ],
      type: 'object'
    },
    {
      lines: [
        'import React, { useState } from "react";',
        '',
        'const DeveloperProfile = () => {',
        '  const [skills, setSkills] = useState([]);',
        '  return <div>Apply to BitHire</div>;',
        '};'
      ],
      type: 'react'
    },
    {
      lines: [
        '// CodeSignal Assessment',
        'function findBestDeveloper(candidates) {',
        '  return candidates.filter(dev =>',
        '    dev.experience >= 3 && dev.englishLevel === "fluent"',
        '  );',
        '}'
      ],
      type: 'function'
    },
    {
      lines: [
        'const techStack = {',
        '  frontend: ["React", "Vue", "Angular"],',
        '  backend: ["Node.js", "Python", "Java"],',
        '  database: ["PostgreSQL", "MongoDB", "Redis"]',
        '};'
      ],
      type: 'object'
    },
    {
      lines: [
        '// BitHire Matching Algorithm',
        'async function matchDeveloper(client, developer) {',
        '  const compatibility = calculateCompatibility(client, developer);',
        '  if (compatibility > 0.8) {',
        '    return await createMatch(client, developer);',
        '  }',
        '}'
      ],
      type: 'async'
    },
    {
      lines: [
        'const developer = {',
        '  name: "Your Name",',
        '  location: "Latin America",',
        '  skills: ["JavaScript", "Python", "React"],',
        '  experience: "5+ years",',
        '  remoteReady: true',
        '};'
      ],
      type: 'object'
    },
    {
      lines: [
        '// Bitcoin Payment Integration',
        'const payment = {',
        '  amount: 5000, // USD',
        '  currency: "BTC",',
        '  recipient: developer.walletAddress,',
        '  status: "pending"',
        '};'
      ],
      type: 'object'
    },
    {
      lines: [
        'function validateApplication(application) {',
        '  const required = ["name", "email", "skills", "experience"];',
        '  return required.every(field => application[field]);',
        '}'
      ],
      type: 'function'
    },
    {
      lines: [
        '// US Client Integration',
        'const client = {',
        '  company: "Tech Startup",',
        '  location: "San Francisco",',
        '  project: "Full-Stack Development",',
        '  budget: "$8000/month"',
        '};'
      ],
      type: 'object'
    },
    {
      lines: [
        'const interview = {',
        '  type: "developer-to-developer",',
        '  duration: "45 minutes",',
        '  topics: ["technical", "cultural fit"],',
        '  outcome: "hired"',
        '};'
      ],
      type: 'object'
    }
  ];

  // Realistic Firework Spark class
  class FireworkSpark {
    constructor(x, y, vx, vy, color, size = 2) {
      this.x = x;
      this.y = y;
      this.vx = vx;
      this.vy = vy;
      this.color = color;
      this.size = size;
      this.life = 1.0;
      this.decay = Math.random() * 0.015 + 0.008;
      this.gravity = 0.2;
      this.friction = 0.99;
      this.trail = [];
      this.maxTrailLength = 8;
    }

    update() {
      // Add to trail
      this.trail.push({ x: this.x, y: this.y, life: this.life });
      if (this.trail.length > this.maxTrailLength) {
        this.trail.shift();
      }

      // Update position
      this.x += this.vx;
      this.y += this.vy;
      this.vy += this.gravity;
      this.vx *= this.friction;
      this.vy *= this.friction;
      this.life -= this.decay;
    }

    draw(ctx) {
      if (this.life <= 0) return;

      ctx.save();
      
      // Draw trail
      this.trail.forEach((point, index) => {
        const trailOpacity = (index / this.trail.length) * this.life * 0.3;
        ctx.globalAlpha = trailOpacity;
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.size * 0.5;
        ctx.beginPath();
        if (index > 0) {
          ctx.moveTo(this.trail[index - 1].x, this.trail[index - 1].y);
          ctx.lineTo(point.x, point.y);
        }
        ctx.stroke();
      });

      // Draw spark
      ctx.globalAlpha = this.life;
      
      // Glowing effect
      const gradient = ctx.createRadialGradient(
        this.x, this.y, 0,
        this.x, this.y, this.size * 2
      );
      gradient.addColorStop(0, this.color);
      gradient.addColorStop(0.5, this.color + '80');
      gradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
      ctx.fill();
      
      // Bright center
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size * 0.5, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    }

    isDead() {
      return this.life <= 0;
    }
  }

  // Realistic Firework class
  class RealisticFirework {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.sparks = [];
      this.flashLife = 1.0;
      this.flashDecay = 0.05;
      this.hasExploded = false;
      this.explosionRadius = 0;
      this.maxRadius = 60;
      
      this.createExplosion();
    }

    createExplosion() {
      const colors = [
        '#FFD700', // Gold
        '#FF6B35', // Orange
        '#3B82F6', // Blue
        '#F59E0B'  // Yellow
      ];

      // Create main sparks
      const sparkCount = Math.floor(Math.random() * 15) + 20;
      for (let i = 0; i < sparkCount; i++) {
        const angle = (Math.PI * 2 * i) / sparkCount + Math.random() * 0.5;
        const speed = Math.random() * 8 + 4;
        const vx = Math.cos(angle) * speed;
        const vy = Math.sin(angle) * speed - Math.random() * 3; // Slight upward bias
        
        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = Math.random() * 3 + 1;
        
        this.sparks.push(new FireworkSpark(this.x, this.y, vx, vy, color, size));
      }

      // Create secondary sparks (smaller, faster)
      const secondaryCount = Math.floor(Math.random() * 10) + 10;
      for (let i = 0; i < secondaryCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 12 + 6;
        const vx = Math.cos(angle) * speed;
        const vy = Math.sin(angle) * speed - Math.random() * 2;
        
        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = Math.random() * 2 + 0.5;
        
        this.sparks.push(new FireworkSpark(this.x, this.y, vx, vy, color, size));
      }
    }

    update() {
      // Update flash effect
      if (this.flashLife > 0) {
        this.flashLife -= this.flashDecay;
        this.explosionRadius = (1 - this.flashLife) * this.maxRadius;
      }

      // Update sparks
      this.sparks = this.sparks.filter(spark => {
        spark.update();
        return !spark.isDead();
      });
    }

    draw(ctx) {
      ctx.save();
      
      // Draw explosion flash
      if (this.flashLife > 0) {
        const flashGradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.explosionRadius
        );
        flashGradient.addColorStop(0, '#FFFFFF');
        flashGradient.addColorStop(0.3, '#FFD700');
        flashGradient.addColorStop(1, 'transparent');
        
        ctx.globalAlpha = this.flashLife * 0.8;
        ctx.fillStyle = flashGradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.explosionRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw sparks
      this.sparks.forEach(spark => spark.draw(ctx));
      
      ctx.restore();
    }

    isDead() {
      return this.sparks.length === 0 && this.flashLife <= 0;
    }
  }

  // Enhanced BurstParticle class for explosion effects (keeping as backup)
  class BurstParticle {
    constructor(x, y, color) {
      this.x = x;
      this.y = y;
      this.vx = (Math.random() - 0.5) * 12; // Increased horizontal velocity
      this.vy = -Math.random() * 8 - 3; // Increased upward velocity
      this.life = 1.0;
      this.decay = Math.random() * 0.015 + 0.008; // Slower decay for longer visibility
      this.size = Math.random() * 6 + 4; // Larger particle size (4-10px)
      this.color = color;
      this.gravity = 0.15; // Increased gravity effect
      this.friction = 0.98; // Air resistance
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.vy += this.gravity; // Apply gravity
      this.vx *= this.friction; // Apply friction
      this.vy *= this.friction;
      this.life -= this.decay;
    }

    draw(ctx) {
      if (this.life <= 0) return;
      
      
      ctx.save();
      ctx.globalAlpha = this.life;
      
      // Draw solid center for better visibility
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size * 0.6, 0, Math.PI * 2);
      ctx.fill();
      
      // Create gradient glow around the particle
      const gradient = ctx.createRadialGradient(
        this.x, this.y, this.size * 0.6,
        this.x, this.y, this.size
      );
      gradient.addColorStop(0, this.color);
      gradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    }

    isDead() {
      return this.life <= 0;
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const particles = [];
    const codeElements = [];
    let isMobile = window.innerWidth < 768;

    // Performance optimization: reduce elements on mobile and Safari
    // Changed ratio: 80% code lines, 20% single words
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    const particleCount = isMobile ? 3 : (isSafari ? 4 : 5); // Slightly fewer for Safari
    const codeCount = isMobile ? 12 : (isSafari ? 15 : 18); // Slightly fewer for Safari

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      isMobile = window.innerWidth < 768;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse tracking removed to prevent animation interference

    // Enhanced Particle class with all improvements
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = -50;
        this.text = keywords[Math.floor(Math.random() * keywords.length)];
        this.speed = Math.random() * 4 + 3; // Slightly slower speeds: 3 to 7
        this.opacity = Math.random() * 0.6 + 0.2;
        this.fontSize = Math.random() * 12 + 10;
        this.rotation = 0; // No rotation for natural falling
        this.rotationSpeed = 0;
        this.glowIntensity = Math.random() * 0.3 + 0.1;
        this.baseColor = `rgba(59, 130, 246, ${this.opacity})`;
        this.glowColor = `rgba(59, 130, 246, ${this.glowIntensity})`;
        
        // New enhancements
        this.size = Math.random() * 0.5 + 0.75; // Size variation (0.75x to 1.25x)
        this.fadeInProgress = 0; // For fade-in effect
        this.trail = []; // Trail effect
        this.maxTrailLength = 8;
        this.originalY = this.y;
        this.easeProgress = 0; // For smoother transitions
        this.depth = Math.random() * 0.5 + 0.5; // Depth variation (0.5 to 1.0)
        this.hasTriggered = false; // Track if this particle has already exploded
        this.exploded = false; // Track if this particle has exploded and should be hidden
      }

      update() {
        // Natural falling movement - no easing
        this.y += this.speed;
        this.rotation += this.rotationSpeed;
        
        // Fade-in effect
        if (this.fadeInProgress < 1) {
          this.fadeInProgress += 0.05;
        }
        
        // Trail effect
        this.trail.push({ x: this.x, y: this.y, opacity: this.opacity * this.fadeInProgress });
        if (this.trail.length > this.maxTrailLength) {
          this.trail.shift();
        }
        
        // Hybrid trigger zones with gradual intensity
        const triggerZones = [
          { min: canvas.height * 0.3, max: canvas.height * 0.4, probability: 0.15 }, // Early zone - low probability
          { min: canvas.height * 0.5, max: canvas.height * 0.6, probability: 0.25 }, // Mid zone - medium probability  
          { min: canvas.height * 0.7, max: canvas.height * 0.8, probability: 0.35 }, // Late zone - higher probability
          { min: canvas.height * 0.85, max: canvas.height * 0.95, probability: 0.45 } // Final zone - highest probability
        ];

        // Check if particle is in any trigger zone and should explode
        for (const zone of triggerZones) {
          if (this.y >= zone.min && this.y <= zone.max && !this.hasTriggered) {
            if (Math.random() < zone.probability) {
              this.createBurstEffect();
              this.hasTriggered = true;
              this.exploded = true; // Mark as exploded to make it disappear
              break;
            }
          }
        }

        // Reset when completely off screen
        if (this.y > canvas.height + 50) {
          this.y = -50;
          this.x = Math.random() * canvas.width;
          this.text = keywords[Math.floor(Math.random() * keywords.length)];
          this.rotation = 0;
          this.fadeInProgress = 0;
          this.trail = [];
          this.easeProgress = 0;
          this.depth = Math.random() * 0.5 + 0.5;
          this.hasTriggered = false; // Reset trigger flag
          this.exploded = false; // Reset exploded flag
        }
      }
      
      createBurstEffect() {
        // Create realistic firework explosion
        const firework = new RealisticFirework(this.x, this.y);
        realisticFireworksRef.current.push(firework);
        
        // Also create some circle particles as backup (commented out for now)
        /*
        const colors = [
          '#3B82F6', // Blue
          '#F97316', // Orange
          '#10B981', // Green
          '#F59E0B', // Yellow
          '#EF4444', // Red
          '#8B5CF6'  // Purple
        ];
        
        const particleCount = Math.floor(Math.random() * 5) + 8;
        for (let i = 0; i < particleCount; i++) {
          const color = colors[Math.floor(Math.random() * colors.length)];
          const particle = new BurstParticle(this.x, this.y, color);
          burstParticlesRef.current.push(particle);
        }
        */
      }

      draw() {
        // Don't draw if exploded
        if (this.exploded) return;
        
        // Draw trail effect
        this.trail.forEach((point, index) => {
          const trailOpacity = (index / this.trail.length) * point.opacity * 0.3;
          ctx.save();
          ctx.globalAlpha = trailOpacity;
          ctx.font = `${this.fontSize * this.size}px 'Inter', monospace`;
          ctx.fillStyle = this.baseColor;
          ctx.fillText(this.text, point.x, point.y);
          ctx.restore();
        });
        
        // Draw main particle
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.scale(this.size, this.size); // Size variation
        
        // Glow effect with depth - disabled for Safari performance
        if (!isSafari) {
          ctx.shadowColor = this.glowColor;
          ctx.shadowBlur = 8 * this.depth; // Full blur for other browsers
        }
        ctx.font = `${this.fontSize}px 'Inter', monospace`;
        ctx.globalAlpha = this.fadeInProgress * this.depth; // Deeper elements are more transparent
        ctx.fillStyle = this.baseColor;
        ctx.fillText(this.text, 0, 0);
        
        ctx.restore();
      }
    }

    // Enhanced Code element with all improvements
    class CodeElement {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = -200;
        this.snippet = this.generateCodeSnippet();
        this.speed = Math.random() * 3.5 + 2.5; // Slightly slower speeds: 2.5 to 6
        this.opacity = Math.random() * 0.4 + 0.1;
        this.lineHeight = 18;
        this.fontSize = 12;
        this.rotation = 0; // No rotation for natural falling
        this.rotationSpeed = 0;
        this.glowIntensity = Math.random() * 0.2 + 0.05;
        this.baseColor = `rgba(249, 115, 22, ${this.opacity})`;
        this.glowColor = `rgba(249, 115, 22, ${this.glowIntensity})`;
        
        // New enhancements
        this.size = Math.random() * 0.3 + 0.85; // Size variation
        this.fadeInProgress = 0;
        this.trail = []; // Trail effect
        this.maxTrailLength = 6;
        this.easeProgress = 0;
        this.depth = Math.random() * 0.5 + 0.5; // Depth variation (0.5 to 1.0)
        this.hasTriggered = false; // Track if this code element has already exploded
        this.exploded = false; // Track if this code element has exploded and should be hidden
      }

      generateCodeSnippet() {
        return codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
      }

      update() {
        // Natural falling movement - no easing
        this.y += this.speed;
        this.rotation += this.rotationSpeed;
        
        // Fade-in effect
        if (this.fadeInProgress < 1) {
          this.fadeInProgress += 0.03;
        }
        
        // Trail effect
        this.trail.push({ x: this.x, y: this.y, opacity: this.opacity * this.fadeInProgress });
        if (this.trail.length > this.maxTrailLength) {
          this.trail.shift();
        }
        
        // Hybrid trigger zones with gradual intensity (same as particles)
        const triggerZones = [
          { min: canvas.height * 0.25, max: canvas.height * 0.35, probability: 0.12 }, // Early zone - low probability
          { min: canvas.height * 0.45, max: canvas.height * 0.55, probability: 0.22 }, // Mid zone - medium probability  
          { min: canvas.height * 0.65, max: canvas.height * 0.75, probability: 0.32 }, // Late zone - higher probability
          { min: canvas.height * 0.8, max: canvas.height * 0.9, probability: 0.42 } // Final zone - highest probability
        ];

        // Check if code element is in any trigger zone and should explode
        for (const zone of triggerZones) {
          if (this.y >= zone.min && this.y <= zone.max && !this.hasTriggered) {
            if (Math.random() < zone.probability) {
              this.createBurstEffect();
              this.hasTriggered = true;
              this.exploded = true; // Mark as exploded to make it disappear
              break;
            }
          }
        }

        // Reset when completely off screen
        if (this.y > canvas.height + 100) {
          this.y = -200;
          this.x = Math.random() * canvas.width;
          this.snippet = this.generateCodeSnippet();
          this.rotation = 0;
          this.fadeInProgress = 0;
          this.trail = [];
          this.easeProgress = 0;
          this.depth = Math.random() * 0.5 + 0.5;
          this.hasTriggered = false; // Reset trigger flag
          this.exploded = false; // Reset exploded flag
        }
      }

      draw() {
        // Don't draw if exploded
        if (this.exploded) return;
        
        // Draw trail effect
        this.trail.forEach((point, index) => {
          const trailOpacity = (index / this.trail.length) * point.opacity * 0.2;
          ctx.save();
          ctx.globalAlpha = trailOpacity;
          ctx.font = `${this.fontSize * this.size}px 'Inter', monospace`;
          
          this.snippet.lines.forEach((line, lineIndex) => {
            const y = point.y + (lineIndex * this.lineHeight);
            if (y > -20 && y < canvas.height + 20) {
              let color = this.baseColor;
              if (line.trim().startsWith('//')) {
                color = `rgba(156, 163, 175, ${this.opacity})`;
            } else if (line.includes('function') || line.includes('class') || line.includes('const') || line.includes('let')) {
              color = `rgba(59, 130, 246, ${this.opacity})`;
            } else if (line.includes('"') || line.includes("'")) {
              color = `rgba(255, 255, 255, ${this.opacity})`;
            }
              ctx.fillStyle = color;
              ctx.fillText(line, point.x, y);
            }
          });
          ctx.restore();
        });
        
        // Draw main code element
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.scale(this.size, this.size);
        
        // Glow effect with depth - disabled for Safari performance
        if (!isSafari) {
          ctx.shadowColor = this.glowColor;
          ctx.shadowBlur = 6 * this.depth; // Full blur for other browsers
        }
        ctx.font = `${this.fontSize}px 'Inter', monospace`;
        ctx.globalAlpha = this.fadeInProgress * this.depth; // Deeper elements are more transparent
        
        this.snippet.lines.forEach((line, index) => {
          const y = index * this.lineHeight;
          if (y > -20 && y < canvas.height + 20) {
            // Enhanced syntax highlighting
            let color = this.baseColor;
            if (line.trim().startsWith('//')) {
              color = `rgba(156, 163, 175, ${this.opacity})`; // Gray for comments
            } else if (line.includes('function') || line.includes('class') || line.includes('const') || line.includes('let') || line.includes('async') || line.includes('await')) {
              color = `rgba(59, 130, 246, ${this.opacity})`; // Blue for keywords
            } else if (line.includes('"') || line.includes("'")) {
              color = `rgba(255, 255, 255, ${this.opacity})`; // White for strings
            } else if (line.includes('BitHire') || line.includes('bithire')) {
              color = `rgba(59, 130, 246, ${this.opacity})`; // Blue for BitHire branding
            }
            
            ctx.fillStyle = color;
            ctx.fillText(line, 0, y);
          }
        });
        
        ctx.restore();
      }

      createBurstEffect() {
        // Create realistic firework explosion for code elements
        const firework = new RealisticFirework(this.x, this.y);
        realisticFireworksRef.current.push(firework);
        
        // Also create some circle particles as backup (commented out for now)
        /*
        const colors = [
          '#3B82F6', // Blue
          '#F97316', // Orange
          '#10B981', // Green
          '#F59E0B', // Yellow
          '#EF4444', // Red
          '#8B5CF6'  // Purple
        ];
        
        const particleCount = Math.floor(Math.random() * 6) + 10;
        for (let i = 0; i < particleCount; i++) {
          const color = colors[Math.floor(Math.random() * colors.length)];
          const particle = new BurstParticle(this.x, this.y, color);
          burstParticlesRef.current.push(particle);
        }
        */
      }
    }

    // Create particles and code elements with better spacing
    for (let i = 0; i < particleCount; i++) {
      const particle = new Particle();
      // Better distribution across screen width
      particle.x = (canvas.width / particleCount) * i + Math.random() * (canvas.width / particleCount);
      particles.push(particle);
    }

    for (let i = 0; i < codeCount; i++) {
      const codeElement = new CodeElement();
      // Better distribution across screen width
      codeElement.x = (canvas.width / codeCount) * i + Math.random() * (canvas.width / codeCount);
      codeElements.push(codeElement);
    }

    // Optimized animation loop with depth sorting
    const animate = () => {
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update all elements first
      particles.forEach(particle => particle.update());
      codeElements.forEach(element => element.update());
      
      // Update and filter burst particles
      burstParticlesRef.current = burstParticlesRef.current.filter(particle => {
        particle.update();
        return !particle.isDead();
      });
      
      // Update and filter realistic fireworks
      realisticFireworksRef.current = realisticFireworksRef.current.filter(firework => {
        firework.update();
        return !firework.isDead();
      });
      
      // Combine all elements and sort by depth (back to front)
      const allElements = [
        ...particles.map(p => ({ element: p, depth: p.depth, type: 'particle' })),
        ...codeElements.map(c => ({ element: c, depth: c.depth, type: 'code' }))
      ].sort((a, b) => a.depth - b.depth);
      
      // Draw elements from back to front
      allElements.forEach(({ element }) => {
        element.draw();
      });
      
      // Draw burst particles (always on top)
      burstParticlesRef.current.forEach(particle => {
        particle.draw(ctx);
      });
      
      // Draw realistic fireworks (always on top)
      realisticFireworksRef.current.forEach(firework => {
        firework.draw(ctx);
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

export default FallingCode;
