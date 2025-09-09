import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const FallingCode = () => {
  const canvasRef = useRef(null);

  // Programming keywords and code snippets
  const keywords = [
    'React', 'JavaScript', 'Python', 'Node.js', 'TypeScript', 'Vue.js', 'Angular',
    'Docker', 'Kubernetes', 'AWS', 'Git', 'MongoDB', 'PostgreSQL', 'Redis',
    'Express', 'Django', 'Flask', 'Spring', 'Laravel', 'Rails', 'Next.js',
    'GraphQL', 'REST', 'API', 'CSS', 'HTML', 'SASS', 'Webpack', 'Babel',
    'Jest', 'Cypress', 'JWT', 'OAuth', 'Microservices', 'DevOps', 'CI/CD'
  ];

  const codeSnippets = [
    'const developer = {',
    '  skills: ["React", "Node.js"],',
    '  experience: "5+ years",',
    '  location: "Remote"',
    '};',
    '',
    'function hireDeveloper() {',
    '  return "Welcome to BitHire!";',
    '}',
    '',
    'import { useState } from "react";',
    '',
    'const [isHired, setIsHired] = useState(false);',
    '',
    'if (developer.skills.includes("React")) {',
    '  setIsHired(true);',
    '}',
    '',
    'const api = {',
    '  endpoint: "/api/developers",',
    '  method: "POST"',
    '};',
    '',
    'async function applyToBitHire() {',
    '  const response = await fetch(api.endpoint, {',
    '    method: api.method,',
    '    body: JSON.stringify(developer)',
    '  });',
    '  return response.json();',
    '}',
    '',
    'class Developer {',
    '  constructor(name, skills) {',
    '    this.name = name;',
    '    this.skills = skills;',
    '  }',
    '}',
    '',
    'const newDeveloper = new Developer("You", ["React", "Python"]);',
    '',
    'export default Developer;',
    '',
    '// BitHire Application',
    'const application = {',
    '  status: "pending",',
    '  timeline: "2-4 weeks"',
    '};'
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const particles = [];
    const codeElements = [];

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class for keywords
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = -50;
        this.text = keywords[Math.floor(Math.random() * keywords.length)];
        this.speed = Math.random() * 2 + 0.5;
        this.opacity = Math.random() * 0.6 + 0.2;
        this.fontSize = Math.random() * 12 + 10;
        this.color = `rgba(59, 130, 246, ${this.opacity})`; // Blue with varying opacity
      }

      update() {
        this.y += this.speed;
        if (this.y > canvas.height + 50) {
          this.y = -50;
          this.x = Math.random() * canvas.width;
          this.text = keywords[Math.floor(Math.random() * keywords.length)];
        }
      }

      draw() {
        ctx.font = `${this.fontSize}px 'Inter', monospace`;
        ctx.fillStyle = this.color;
        ctx.fillText(this.text, this.x, this.y);
      }
    }

    // Code element class for code snippets
    class CodeElement {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = -200;
        this.lines = this.generateCodeLines();
        this.speed = Math.random() * 1.5 + 0.3;
        this.opacity = Math.random() * 0.4 + 0.1;
        this.lineHeight = 18;
        this.fontSize = 12;
        this.color = `rgba(249, 115, 22, ${this.opacity})`; // Orange with varying opacity
      }

      generateCodeLines() {
        const snippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        return snippet.split('\n').filter(line => line.trim() !== '');
      }

      update() {
        this.y += this.speed;
        if (this.y > canvas.height + 200) {
          this.y = -200;
          this.x = Math.random() * canvas.width;
          this.lines = this.generateCodeLines();
        }
      }

      draw() {
        ctx.font = `${this.fontSize}px 'Inter', monospace`;
        ctx.fillStyle = this.color;
        
        this.lines.forEach((line, index) => {
          const y = this.y + (index * this.lineHeight);
          if (y > -20 && y < canvas.height + 20) {
            ctx.fillText(line, this.x, y);
          }
        });
      }
    }

    // Create particles and code elements
    for (let i = 0; i < 25; i++) {
      particles.push(new Particle());
    }

    for (let i = 0; i < 8; i++) {
      codeElements.push(new CodeElement());
    }

    // Animation loop
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

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
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
