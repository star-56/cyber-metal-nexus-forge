
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 'neural-corp',
      name: 'Dr. Sarah Chen',
      title: 'Chief Neural Officer',
      company: 'NEURAL_CORP',
      avatar: '◆',
      content: 'The quantum interface delivered by this cybernetic developer exceeded our neural enhancement projections by 340%. Their ability to bridge human consciousness with AI systems is unprecedented in 2070.',
      rating: 5,
      project: 'NEURAL_OS Integration',
      year: '2070'
    },
    {
      id: 'quantum-industries',
      name: 'Marcus Blackwood',
      title: 'Quantum Systems Director',
      company: 'QUANTUM_INDUSTRIES',
      avatar: '◇',
      content: 'Revolutionary work on our holographic commerce platform. The immersive experience increased user engagement by 450% and established new standards for dimensional retail interfaces.',
      rating: 5,
      project: 'HOLOGRAM_COMMERCE',
      year: '2069'
    },
    {
      id: 'cyber-defense-coalition',
      name: 'Colonel Elena Vasquez',
      title: 'Cybersecurity Commander',
      company: 'CYBER_DEFENSE_COALITION',
      avatar: '◈',
      content: 'The predictive AI security system has maintained a perfect defense record. Zero breaches in 18 months of operation across 12 dimensional servers. Remarkable achievement.',
      rating: 5,
      project: 'CYBER_DEFENSE Protocol',
      year: '2068'
    },
    {
      id: 'temporal-research',
      name: 'Dr. Akira Tanaka',
      title: 'Temporal Physics Lead',
      company: 'TEMPORAL_RESEARCH_LAB',
      avatar: '◉',
      content: 'The time synchronization interface opened new possibilities in parallel dimension communication. 94% sync rate across 12 timelines - a breakthrough in temporal computing.',
      rating: 5,
      project: 'TIME_SYNC Development',
      year: '2070'
    },
    {
      id: 'bio-enhancement',
      name: 'Dr. Zara Al-Rahman',
      title: 'Biotech Innovation Director',
      company: 'BIO_ENHANCEMENT_CORP',
      avatar: '◎',
      content: 'The biological interface platform enhanced human capabilities by 180% while maintaining 96% compatibility. A perfect fusion of biotechnology and digital consciousness.',
      rating: 5,
      project: 'BIO_ENHANCE Platform',
      year: '2071'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.testimonial-title', {
        scrollTrigger: {
          trigger: '.testimonial-title',
          start: 'top 80%',
        },
        duration: 1.5,
        y: 100,
        opacity: 0,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="section-container relative py-20" ref={sectionRef}>
      {/* Background Effects */}
      <div className="neural-network" />
      <div className="absolute inset-0 hologram-effect opacity-30" />

      <div className="container mx-auto px-4 z-10 relative">
        {/* Section Title */}
        <motion.div className="text-center mb-16">
          <h2 className="testimonial-title font-orbitron text-5xl md:text-7xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-blue">
              CLIENT_FEEDBACK
            </span>
          </h2>
          <div className="glass-morphism inline-block px-6 py-2 rounded-full">
            <span className="font-tech text-neon-green">
              &gt; SCANNING_NEURAL_TESTIMONIALS...
            </span>
          </div>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="max-w-4xl mx-auto mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="glass-morphism-strong p-8 md:p-12 rounded-3xl cyber-border"
            >
              {/* Rating Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <span key={i} className="text-neon-yellow text-2xl mx-1">★</span>
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="font-rajdhani text-xl md:text-2xl text-center text-gray-200 mb-8 leading-relaxed">
                "{testimonials[activeTestimonial].content}"
              </blockquote>

              {/* Client Info */}
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center text-2xl font-orbitron font-bold mr-4">
                    {testimonials[activeTestimonial].avatar}
                  </div>
                  <div>
                    <h4 className="font-orbitron text-xl font-bold text-neon-blue">
                      {testimonials[activeTestimonial].name}
                    </h4>
                    <p className="font-tech text-sm text-neon-cyan">
                      {testimonials[activeTestimonial].title}
                    </p>
                    <p className="font-tech text-xs text-gray-400">
                      {testimonials[activeTestimonial].company}
                    </p>
                  </div>
                </div>

                {/* Project Info */}
                <div className="glass-morphism inline-block px-4 py-2 rounded-full">
                  <span className="font-tech text-xs text-neon-purple">
                    PROJECT: {testimonials[activeTestimonial].project} • {testimonials[activeTestimonial].year}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center space-x-4 mb-12">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeTestimonial
                  ? 'bg-neon-blue neon-glow'
                  : 'bg-gray-600 hover:bg-gray-400'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>

        {/* Client Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className={`glass-morphism p-4 rounded-xl text-center cursor-pointer transition-all duration-300 ${
                index === activeTestimonial ? 'neon-glow' : 'hover:bg-white/10'
              }`}
              onClick={() => setActiveTestimonial(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-2xl mb-2">{testimonial.avatar}</div>
              <div className="font-tech text-xs text-gray-400">
                {testimonial.company}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
