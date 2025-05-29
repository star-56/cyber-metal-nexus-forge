
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section title animation
      gsap.from('.about-title', {
        scrollTrigger: {
          trigger: '.about-title',
          start: 'top 80%',
        },
        duration: 1.5,
        y: 100,
        opacity: 0,
        ease: 'power3.out',
      });

      // Content cards animation
      gsap.from('.about-card', {
        scrollTrigger: {
          trigger: '.about-content',
          start: 'top 80%',
        },
        duration: 1,
        y: 80,
        opacity: 0,
        stagger: 0.2,
        ease: 'power2.out',
      });

      // Stats counter animation
      gsap.from('.stat-number', {
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 80%',
        },
        duration: 2,
        textContent: 0,
        snap: { textContent: 1 },
        stagger: 0.1,
        ease: 'power2.out',
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const skills = [
    { category: 'NEURAL_INTERFACES', items: ['React', 'TypeScript', 'Next.js', 'Vue.js'] },
    { category: 'QUANTUM_PROCESSING', items: ['Node.js', 'Python', 'GraphQL', 'PostgreSQL'] },
    { category: 'CYBER_SECURITY', items: ['JWT', 'OAuth', 'Encryption', 'Firewall'] },
    { category: 'AI_INTEGRATION', items: ['Machine Learning', 'TensorFlow', 'Neural Networks', 'Deep Learning'] },
  ];

  const stats = [
    { label: 'PROJECTS_COMPLETED', value: 150, suffix: '+' },
    { label: 'CLIENTS_SATISFIED', value: 98, suffix: '%' },
    { label: 'YEARS_EXPERIENCE', value: 8, suffix: '+' },
    { label: 'NEURAL_EFFICIENCY', value: 99, suffix: '%' },
  ];

  return (
    <section id="about" className="section-container relative py-20" ref={sectionRef}>
      {/* Background Effects */}
      <div className="neural-network" />
      <div className="absolute inset-0 hologram-effect" />

      <div className="container mx-auto px-4 z-10 relative">
        {/* Section Title */}
        <motion.div className="text-center mb-16">
          <h2 className="about-title font-orbitron text-5xl md:text-7xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
              NEURAL_PROFILE
            </span>
          </h2>
          <div className="glass-morphism inline-block px-6 py-2 rounded-full">
            <span className="font-tech text-neon-cyan">
              &gt; ACCESSING_PERSONAL_DATABASE...
            </span>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="about-content grid lg:grid-cols-2 gap-12 mb-20">
          {/* Bio Section */}
          <motion.div className="about-card">
            <div className="glass-morphism-strong p-8 rounded-2xl cyber-border">
              <h3 className="font-orbitron text-2xl font-bold text-neon-blue mb-6">
                ◆ DIGITAL_CONSCIOUSNESS
              </h3>
              <div className="space-y-4 font-rajdhani text-lg text-gray-300 leading-relaxed">
                <p>
                  In the year 2070, I exist as a <span className="text-neon-cyan">cybernetic developer</span> bridging 
                  the gap between human creativity and artificial intelligence. My neural pathways have been 
                  enhanced to process complex algorithms at unprecedented speeds.
                </p>
                <p>
                  Through <span className="text-neon-purple">quantum computing</span> and advanced neural interfaces, 
                  I craft digital experiences that transcend traditional boundaries, creating immersive worlds 
                  where technology becomes an extension of human consciousness.
                </p>
                <p>
                  My mission: to forge the future of <span className="text-neon-green">human-AI collaboration</span> 
                  through revolutionary digital solutions that reshape reality itself.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Skills Matrix */}
          <motion.div className="about-card">
            <div className="glass-morphism-strong p-8 rounded-2xl">
              <h3 className="font-orbitron text-2xl font-bold text-neon-purple mb-6">
                ◇ SKILL_MATRIX
              </h3>
              <div className="space-y-6">
                {skills.map((skillGroup, index) => (
                  <div key={index} className="border border-neon-blue/20 rounded-lg p-4">
                    <h4 className="font-tech text-sm text-neon-cyan mb-3">
                      {skillGroup.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-neon-blue/10 border border-neon-blue/30 rounded-md text-sm font-tech text-white hover:bg-neon-blue/20 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div ref={statsRef} className="about-card">
          <div className="glass-morphism-strong rounded-2xl p-8">
            <h3 className="font-orbitron text-2xl font-bold text-center text-neon-green mb-8">
              ◈ PERFORMANCE_METRICS
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="font-orbitron text-3xl md:text-4xl font-bold text-neon-blue mb-2">
                    <span className="stat-number">{stat.value}</span>
                    <span>{stat.suffix}</span>
                  </div>
                  <div className="font-tech text-xs text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
