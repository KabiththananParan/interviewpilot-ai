import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import DashboardPreview from './components/DashboardPreview';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function LandingPage() {
  useEffect(() => {
    // Reveal animation on scroll
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    // Native React handling for smooth scrolling to sections
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLAnchorElement;
      const targetId = target.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((anchor) => anchor.addEventListener('click', handleAnchorClick as EventListener));

    return () => {
      observer.disconnect();
      anchors.forEach((anchor) => anchor.removeEventListener('click', handleAnchorClick as EventListener));
    };
  }, []);

  return (
    <div className="selection:bg-primary-container selection:text-on-primary-container bg-background text-on-background min-h-screen relative overflow-x-hidden">
      {/* Global Landing Styles Injector */}
      <style>{`
        body { background-color: #0b1326; color: #dae2fd; font-family: 'Inter', sans-serif; }
        .glass-card {
          background: rgba(30, 41, 59, 0.6);
          backdrop-filter: blur(12px);
          border-top: 1px solid rgba(255, 255, 255, 0.15);
          border-left: 1px solid rgba(255, 255, 255, 0.1);
          border-right: 1px solid rgba(255, 255, 255, 0.1);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        .hero-glow {
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(77, 142, 255, 0.15) 0%, rgba(0, 0, 0, 0) 70%);
          filter: blur(60px);
          pointer-events: none;
          z-index: 0;
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .reveal { opacity: 0; transform: translateY(20px); transition: all 0.8s ease-out; }
        .reveal.active { opacity: 1; transform: translateY(0); }
      `}</style>

      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <DashboardPreview />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}