import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import Talent from './components/Talent';

function HomePage() {
  return (
    <>
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
    </>
  );
}

function TalentPage() {
  return (
    <>
      <Header />
      <Talent />
      <Footer />
      <BackToTop />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/talent" element={<TalentPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
