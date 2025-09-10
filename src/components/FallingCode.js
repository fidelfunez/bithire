import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const FallingCode = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

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

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const particles = [];
    const codeElements = [];
    let isMobile = window.innerWidth < 768;

    // Performance optimization: reduce elements on mobile
    // Changed ratio: 80% code lines, 20% single words
    const particleCount = isMobile ? 3 : 5; // Fewer single words
    const codeCount = isMobile ? 12 : 20; // More code blocks

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
        this.speed = Math.random() * 3 + 0.5; // Faster speeds: 0.5 to 3.5
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
        
        // Removed mouse interaction to prevent animation restart

        if (this.y > canvas.height + 50) {
          // Particle burst effect when reaching bottom
          this.createBurstEffect();
          
          this.y = -50;
          this.x = Math.random() * canvas.width;
          this.text = keywords[Math.floor(Math.random() * keywords.length)];
          this.rotation = 0;
          this.fadeInProgress = 0;
          this.trail = [];
          this.easeProgress = 0;
          this.depth = Math.random() * 0.5 + 0.5;
        }
      }
      
      createBurstEffect() {
        // Simple burst effect - could be enhanced further
        for (let i = 0; i < 3; i++) {
          const burst = {
            x: this.x + (Math.random() - 0.5) * 20,
            y: this.y,
            vx: (Math.random() - 0.5) * 2,
            vy: Math.random() * 2,
            life: 1,
            decay: 0.02
          };
          // Store burst for rendering (would need burst array in main scope)
        }
      }

      draw() {
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
        
        // Glow effect with depth
        ctx.shadowColor = this.glowColor;
        ctx.shadowBlur = 8 * this.depth; // Deeper elements have more glow
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
        this.speed = Math.random() * 2.5 + 0.3; // Faster speeds: 0.3 to 2.8
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
        this.trail = [];
        this.maxTrailLength = 6;
        this.easeProgress = 0;
        this.depth = Math.random() * 0.5 + 0.5; // Depth variation (0.5 to 1.0)
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
        
        // Removed mouse interaction to prevent animation restart

        if (this.y > canvas.height + 200) {
          this.y = -200;
          this.x = Math.random() * canvas.width;
          this.snippet = this.generateCodeSnippet();
          this.rotation = 0;
          this.fadeInProgress = 0;
          this.trail = [];
          this.easeProgress = 0;
          this.depth = Math.random() * 0.5 + 0.5;
        }
      }

      draw() {
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
                color = `rgba(34, 197, 94, ${this.opacity})`;
              } else if (line.includes('"') || line.includes("'")) {
                color = `rgba(168, 85, 247, ${this.opacity})`;
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
        
        // Glow effect with depth
        ctx.shadowColor = this.glowColor;
        ctx.shadowBlur = 6 * this.depth; // Deeper elements have more glow
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
              color = `rgba(34, 197, 94, ${this.opacity})`; // Green for keywords
            } else if (line.includes('"') || line.includes("'")) {
              color = `rgba(168, 85, 247, ${this.opacity})`; // Purple for strings
            } else if (line.includes('BitHire') || line.includes('bithire')) {
              color = `rgba(59, 130, 246, ${this.opacity})`; // Blue for BitHire branding
            }
            
            ctx.fillStyle = color;
            ctx.fillText(line, 0, y);
          }
        });
        
        ctx.restore();
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
      
      // Combine all elements and sort by depth (back to front)
      const allElements = [
        ...particles.map(p => ({ element: p, depth: p.depth, type: 'particle' })),
        ...codeElements.map(c => ({ element: c, depth: c.depth, type: 'code' }))
      ].sort((a, b) => a.depth - b.depth);
      
      // Draw elements from back to front
      allElements.forEach(({ element }) => {
        element.draw();
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
