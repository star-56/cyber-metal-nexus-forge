
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import CustomCursor from '../components/CustomCursor';
import Navigation from '../components/Navigation';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import ApproachSection from '../components/sections/ApproachSection';
import ContactSection from '../components/sections/ContactSection';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
    // Global GSAP animations and setup
    gsap.from('body', {
      duration: 1,
      opacity: 0,
      ease: 'power2.out',
    });

    // Smooth scrolling setup
    gsap.registerPlugin(ScrollTrigger);
    
    // Parallax effect for background elements
    gsap.utils.toArray('.neural-network').forEach((element: any) => {
      gsap.to(element, {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    // Console welcome message
    const styles = [
      'background: linear-gradient(45deg, #00d4ff, #8000ff)',
      'color: white',
      'padding: 10px 20px',
      'border-radius: 10px',
      'font-size: 16px',
      'font-weight: bold'
    ].join(';');

    console.log('%c🚀 WELCOME TO CYBER2070 🚀', styles);
    console.log('%c⚡ Neural interface activated', 'color: #00d4ff');
    console.log('%c🧠 Consciousness synchronized', 'color: #8000ff');
    console.log('%c🔮 Quantum systems online', 'color: #00ff41');
    console.log('%c✨ Ready for dimensional interaction', 'color: #ff0080');
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* About Section */}
        <AboutSection />
        
        {/* Projects Section */}
        <ProjectsSection />
        
        {/* Testimonials Section */}
        <TestimonialsSection />
        
        {/* Approach Section */}
        <ApproachSection />
        
        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Matrix Rain Effect (optional overlay) */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-5">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute text-neon-green font-tech text-xs animate-matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
