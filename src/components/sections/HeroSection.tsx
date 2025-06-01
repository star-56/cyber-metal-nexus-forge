
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero text animation
      gsap.from('.hero-title', {
        duration: 2,
        y: 100,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out',
      });

      gsap.from('.hero-subtitle', {
        duration: 1.5,
        y: 50,
        opacity: 0,
        delay: 1,
        ease: 'power2.out',
      });

      gsap.from('.hero-cta', {
        duration: 1,
        scale: 0,
        opacity: 0,
        delay: 1.5,
        ease: 'back.out(1.7)',
      });

      // Floating particles animation
      gsap.to('.particle', {
        duration: 'random(3, 6)',
        y: 'random(-100, 100)',
        x: 'random(-50, 50)',
        rotation: 'random(0, 360)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: {
          amount: 2,
          from: 'random'
        }
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" className="section-container relative pt-32 md:pt-40" ref={heroRef}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-cyber-grid bg-cyber-grid opacity-10" />
      <div className="neural-network" />
      
      {/* Floating Particles */}
      <div ref={particlesRef} className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-2 h-2 bg-neon-blue rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: '0 0 10px #00d4ff',
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 z-10 relative" ref={textRef}>
        <div className="text-center max-w-6xl mx-auto">
          {/* Main Title */}
          <motion.div className="mb-8">
            <h1 className="hero-title font-orbitron text-6xl md:text-8xl lg:text-9xl font-black mb-4">
              <span className="block neon-text text-neon-blue">WELCOME</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan">
                TO 2070
              </span>
            </h1>
            
            <div className="hero-title glass-morphism inline-block px-6 py-3 rounded-full mb-6">
              <span className="font-tech text-lg md:text-xl text-neon-green animate-flicker">
                &gt; CYBERNETIC_PORTFOLIO.EXE LOADING...
              </span>
            </div>
          </motion.div>

          {/* Personal Introduction */}
          <motion.div className="hero-subtitle mb-8">
            <h2 className="font-rajdhani text-2xl md:text-3xl lg:text-4xl text-neon-cyan mb-4 font-bold">
              Transforming Complex into Seamless Experiences
            </h2>
            <p className="font-rajdhani text-xl md:text-2xl text-gray-300">
              Hi! I'm <span className="text-neon-purple font-bold">Lokesh</span>, a 
              <span className="text-neon-blue"> React Developer</span> Based in 
              <span className="text-neon-green"> India</span>
            </p>
          </motion.div>

          {/* Subtitle */}
          <motion.p className="hero-subtitle font-rajdhani text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Immerse yourself in a <span className="text-neon-cyan">neural-enhanced</span> digital experience.
            Where <span className="text-neon-purple">innovation</span> meets <span className="text-neon-blue">technology</span>,
            and the future becomes reality.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div className="hero-cta flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.button
              className="interactive glass-morphism-strong px-8 py-4 rounded-xl font-tech text-lg cyber-border neon-glow hover:scale-105 transition-all duration-300"
              whileHover={{ 
                boxShadow: '0 0 30px #00d4ff',
                y: -5 
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-neon-blue">&gt;</span> ENTER_MATRIX
            </motion.button>
            
            <motion.button
              className="interactive glass-morphism px-8 py-4 rounded-xl font-tech text-lg border border-neon-purple/30 hover:border-neon-purple hover:scale-105 transition-all duration-300"
              whileHover={{ 
                boxShadow: '0 0 20px #8000ff',
                y: -5 
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-neon-purple">◇</span> VIEW_PROTOCOLS
            </motion.button>
          </motion.div>

          {/* Status Indicators */}
          <motion.div 
            className="mt-12 flex justify-center space-x-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            {[
              { label: 'SYSTEM_STATUS', value: 'ONLINE', color: 'text-neon-green' },
              { label: 'NEURAL_LINK', value: 'ACTIVE', color: 'text-neon-blue' },
              { label: 'FIREWALL', value: 'SECURED', color: 'text-neon-purple' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="font-tech text-xs text-gray-500 mb-1">{item.label}</div>
                <div className={`font-tech text-sm ${item.color} animate-flicker`}>
                  {item.value}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, repeat: Infinity, repeatType: 'reverse', duration: 1 }}
      >
        <div className="w-6 h-10 border-2 border-neon-cyan rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neon-cyan rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>

      {/* Data Stream Effect */}
      <div className="data-stream absolute inset-0 pointer-events-none" />
    </section>
  );
};

export default HeroSection;
