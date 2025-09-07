import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyBithire from './components/WhyBithire';
import Process from './components/Process';
import TechStack from './components/TechStack';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FloatingLogos from './components/FloatingLogos';
import ParticleSystem from './components/ParticleSystem';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="App">
      <FloatingLogos />
      <ParticleSystem />
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyBithire />
        <Process />
        <TechStack />
        <CTA />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
