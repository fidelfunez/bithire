import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const FallingCode = () => {
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
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
    const particleCount = isMobile ? 15 : 25;
    const codeCount = isMobile ? 5 : 8;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      isMobile = window.innerWidth < 768;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse tracking (throttled for performance)
    let mouseThrottle = 0;
    const handleMouseMove = (e) => {
      if (mouseThrottle++ % 3 === 0) { // Throttle to every 3rd frame
        setMousePos({ x: e.clientX, y: e.clientY });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Enhanced Particle class with glow and rotation
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = -50;
        this.text = keywords[Math.floor(Math.random() * keywords.length)];
        this.speed = Math.random() * 2 + 0.5;
        this.opacity = Math.random() * 0.6 + 0.2;
        this.fontSize = Math.random() * 12 + 10;
        this.rotation = Math.random() * 0.1 - 0.05; // Subtle rotation
        this.rotationSpeed = Math.random() * 0.02 - 0.01;
        this.glowIntensity = Math.random() * 0.3 + 0.1;
        this.baseColor = `rgba(59, 130, 246, ${this.opacity})`;
        this.glowColor = `rgba(59, 130, 246, ${this.glowIntensity})`;
      }

      update() {
        this.y += this.speed;
        this.rotation += this.rotationSpeed;
        
        // Subtle mouse interaction
        const dx = mousePos.x - this.x;
        const dy = mousePos.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 150) {
          const force = (150 - distance) / 150;
          this.x += dx * force * 0.01;
          this.y += dy * force * 0.01;
        }

        if (this.y > canvas.height + 50) {
          this.y = -50;
          this.x = Math.random() * canvas.width;
          this.text = keywords[Math.floor(Math.random() * keywords.length)];
          this.rotation = Math.random() * 0.1 - 0.05;
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        
        // Glow effect
        ctx.shadowColor = this.glowColor;
        ctx.shadowBlur = 8;
        ctx.font = `${this.fontSize}px 'Inter', monospace`;
        ctx.fillStyle = this.baseColor;
        ctx.fillText(this.text, 0, 0);
        
        ctx.restore();
      }
    }

    // Enhanced Code element with syntax highlighting
    class CodeElement {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = -200;
        this.snippet = this.generateCodeSnippet();
        this.speed = Math.random() * 1.5 + 0.3;
        this.opacity = Math.random() * 0.4 + 0.1;
        this.lineHeight = 18;
        this.fontSize = 12;
        this.rotation = Math.random() * 0.05 - 0.025;
        this.rotationSpeed = Math.random() * 0.01 - 0.005;
        this.glowIntensity = Math.random() * 0.2 + 0.05;
        this.baseColor = `rgba(249, 115, 22, ${this.opacity})`;
        this.glowColor = `rgba(249, 115, 22, ${this.glowIntensity})`;
      }

      generateCodeSnippet() {
        return codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
      }

      update() {
        this.y += this.speed;
        this.rotation += this.rotationSpeed;
        
        // Subtle mouse interaction
        const dx = mousePos.x - this.x;
        const dy = mousePos.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 200) {
          const force = (200 - distance) / 200;
          this.x += dx * force * 0.005;
          this.y += dy * force * 0.005;
        }

        if (this.y > canvas.height + 200) {
          this.y = -200;
          this.x = Math.random() * canvas.width;
          this.snippet = this.generateCodeSnippet();
          this.rotation = Math.random() * 0.05 - 0.025;
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        
        // Glow effect
        ctx.shadowColor = this.glowColor;
        ctx.shadowBlur = 6;
        ctx.font = `${this.fontSize}px 'Inter', monospace`;
        
        this.snippet.lines.forEach((line, index) => {
          const y = index * this.lineHeight;
          if (y > -20 && y < canvas.height + 20) {
            // Simple syntax highlighting
            let color = this.baseColor;
            if (line.trim().startsWith('//')) {
              color = `rgba(156, 163, 175, ${this.opacity})`; // Gray for comments
            } else if (line.includes('function') || line.includes('class') || line.includes('const') || line.includes('let')) {
              color = `rgba(34, 197, 94, ${this.opacity})`; // Green for keywords
            } else if (line.includes('"') || line.includes("'")) {
              color = `rgba(168, 85, 247, ${this.opacity})`; // Purple for strings
            }
            
            ctx.fillStyle = color;
            ctx.fillText(line, 0, y);
          }
        });
        
        ctx.restore();
      }
    }

    // Create particles and code elements
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    for (let i = 0; i < codeCount; i++) {
      codeElements.push(new CodeElement());
    }

    // Optimized animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Update and draw code elements
      codeElements.forEach(element => {
        element.update();
        element.draw();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePos]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

export default FallingCode;
