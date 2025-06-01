
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.project-card', {
        scrollTrigger: {
          trigger: '.projects-grid',
          start: 'top 80%',
        },
        duration: 1,
        y: 100,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      id: 'neural-os',
      title: 'NEURAL_OS',
      category: 'OPERATING_SYSTEM',
      description: 'Revolutionary quantum-based operating system that interfaces directly with human consciousness.',
      tech: ['Quantum Computing', 'Neural Interface', 'AI Core', 'Biometric Security'],
      status: 'DEPLOYED',
      year: '2070',
      metrics: { users: '2.3M', uptime: '99.9%', efficiency: '+340%' }
    },
    {
      id: 'hologram-commerce',
      title: 'HOLOGRAM_COMMERCE',
      category: 'E-COMMERCE_PLATFORM',
      description: 'Immersive 3D shopping experience using advanced holographic projection technology.',
      tech: ['Holographic Rendering', 'Blockchain', 'AR/VR', 'Quantum Encryption'],
      status: 'BETA',
      year: '2069',
      metrics: { revenue: '+450%', engagement: '89%', conversion: '23%' }
    },
    {
      id: 'cyber-defense',
      title: 'CYBER_DEFENSE',
      category: 'SECURITY_PROTOCOL',
      description: 'AI-powered cybersecurity system that predicts and prevents attacks before they occur.',
      tech: ['Machine Learning', 'Predictive AI', 'Quantum Firewall', 'Neural Networks'],
      status: 'ACTIVE',
      year: '2068',
      metrics: { threats: '0', response: '<0.1s', accuracy: '99.8%' }
    },
    {
      id: 'time-sync',
      title: 'TIME_SYNC',
      category: 'TEMPORAL_INTERFACE',
      description: 'Experimental interface for synchronizing digital timelines across parallel dimensions.',
      tech: ['Temporal Computing', 'Parallel Processing', 'Quantum Entanglement', 'Dimension API'],
      status: 'EXPERIMENTAL',
      year: '2070',
      metrics: { dimensions: '12', stability: '87%', sync: '94%' }
    },
    {
      id: 'bio-enhance',
      title: 'BIO_ENHANCE',
      category: 'BIOLOGICAL_INTERFACE',
      description: 'Biotechnology platform that enhances human capabilities through digital augmentation.',
      tech: ['Biotech', 'Neural Implants', 'Genetic Sequencing', 'Nano Technology'],
      status: 'RESEARCH',
      year: '2071',
      metrics: { subjects: '1.2K', enhancement: '+180%', compatibility: '96%' }
    },
    {
      id: 'quantum-web',
      title: 'QUANTUM_WEB',
      category: 'INTERNET_PROTOCOL',
      description: 'Next-generation internet infrastructure using quantum entanglement for instant communication.',
      tech: ['Quantum Internet', 'Entanglement Protocol', 'Zero Latency', 'Infinite Bandwidth'],
      status: 'PROTOTYPE',
      year: '2072',
      metrics: { speed: '∞', latency: '0ms', security: '100%' }
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'DEPLOYED': return 'text-neon-green';
      case 'ACTIVE': return 'text-neon-blue';
      case 'BETA': return 'text-neon-cyan';
      case 'EXPERIMENTAL': return 'text-neon-purple';
      case 'RESEARCH': return 'text-neon-yellow';
      case 'PROTOTYPE': return 'text-neon-pink';
      default: return 'text-gray-400';
    }
  };

  return (
    <section id="projects" className="section-container relative py-20" ref={sectionRef}>
      {/* Background Effects */}
      <div className="neural-network" />
      <div className="absolute inset-0 bg-cyber-grid bg-cyber-grid opacity-5" />

      <div className="container mx-auto px-4 z-10 relative">
        {/* Section Title */}
        <motion.div className="text-center mb-16">
          <h2 className="font-orbitron text-5xl md:text-7xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan">
              PROJECT_ARCHIVE
            </span>
          </h2>
          <div className="glass-morphism inline-block px-6 py-2 rounded-full">
            <span className="font-tech text-neon-purple">
              &gt; LOADING_DEVELOPMENT_HISTORY...
            </span>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="projects-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card group cursor-pointer"
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="glass-morphism-strong p-6 rounded-2xl cyber-border h-full flex flex-col hover:neon-glow transition-all duration-500">
                {/* Project Header */}
                <div className="mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-tech text-xs text-gray-400">
                      PROJECT_{String(index + 1).padStart(3, '0')}
                    </span>
                    <span className={`font-tech text-xs ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  <h3 className="font-orbitron text-xl font-bold text-neon-blue mb-1">
                    {project.title}
                  </h3>
                  <p className="font-tech text-sm text-neon-cyan">
                    {project.category}
                  </p>
                </div>

                {/* Project Description */}
                <p className="font-rajdhani text-gray-300 text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-4">
                  <h4 className="font-tech text-xs text-gray-400 mb-2">TECH_STACK:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-neon-blue/10 border border-neon-blue/30 rounded text-xs font-tech"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="border-t border-gray-700 pt-4">
                  <h4 className="font-tech text-xs text-gray-400 mb-2">METRICS:</h4>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key}>
                        <div className="font-tech text-xs text-neon-green">{value}</div>
                        <div className="font-tech text-xs text-gray-500">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Year Badge */}
                <div className="absolute top-4 right-4 glass-morphism px-2 py-1 rounded">
                  <span className="font-tech text-xs text-neon-purple">{project.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <motion.button
            className="interactive glass-morphism-strong px-8 py-4 rounded-xl font-tech cyber-border"
            whileHover={{ 
              boxShadow: '0 0 30px #8000ff',
              scale: 1.05 
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-neon-purple">&gt;</span> ACCESS_FULL_ARCHIVE
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
