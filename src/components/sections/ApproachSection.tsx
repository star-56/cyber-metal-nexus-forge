
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ApproachSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.approach-step', {
        scrollTrigger: {
          trigger: '.approach-content',
          start: 'top 80%',
        },
        duration: 1,
        y: 100,
        opacity: 0,
        stagger: 0.3,
        ease: 'power3.out',
      });

      gsap.from('.approach-line', {
        scrollTrigger: {
          trigger: '.approach-content',
          start: 'top 60%',
        },
        duration: 2,
        scaleY: 0,
        transformOrigin: 'top',
        stagger: 0.2,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const approaches = [
    {
      phase: '01',
      title: 'NEURAL_ANALYSIS',
      description: 'Deep neural scanning of project requirements using quantum consciousness interfaces.',
      details: [
        'Quantum requirement parsing',
        'Stakeholder neural mapping',
        'Risk probability matrices',
        'Timeline dimension analysis'
      ],
      icon: '◆',
      color: 'neon-blue'
    },
    {
      phase: '02',
      title: 'QUANTUM_ARCHITECTURE',
      description: 'Designing system architecture that scales across parallel computing dimensions.',
      details: [
        'Multi-dimensional system design',
        'Quantum scalability protocols',
        'Neural network topology',
        'Security quantum encryption'
      ],
      icon: '◇',
      color: 'neon-purple'
    },
    {
      phase: '03',
      title: 'CYBERNETIC_DEVELOPMENT',
      description: 'Implementation using advanced AI-assisted coding and neural development interfaces.',
      details: [
        'AI-enhanced programming',
        'Neural code optimization',
        'Quantum testing protocols',
        'Dimensional debugging'
      ],
      icon: '◈',
      color: 'neon-cyan'
    },
    {
      phase: '04',
      title: 'NEURAL_TESTING',
      description: 'Comprehensive testing across multiple dimensions and consciousness levels.',
      details: [
        'Multi-dimensional testing',
        'Neural compatibility checks',
        'Quantum performance analysis',
        'Consciousness integration tests'
      ],
      icon: '◉',
      color: 'neon-green'
    },
    {
      phase: '05',
      title: 'QUANTUM_DEPLOYMENT',
      description: 'Deployment to quantum servers with real-time neural monitoring and optimization.',
      details: [
        'Quantum server deployment',
        'Neural monitoring systems',
        'Real-time optimization',
        'Dimensional load balancing'
      ],
      icon: '◎',
      color: 'neon-yellow'
    },
    {
      phase: '06',
      title: 'CONSCIOUSNESS_SUPPORT',
      description: 'Ongoing support through AI-enhanced monitoring and neural feedback loops.',
      details: [
        'AI-powered monitoring',
        'Neural feedback systems',
        'Quantum maintenance',
        'Evolutionary updates'
      ],
      icon: '◐',
      color: 'neon-pink'
    }
  ];

  return (
    <section id="approach" className="section-container relative py-20" ref={sectionRef}>
      {/* Background Effects */}
      <div className="neural-network" />
      <div className="absolute inset-0 bg-cyber-grid bg-cyber-grid opacity-5" />

      <div className="container mx-auto px-4 z-10 relative">
        {/* Section Title */}
        <motion.div className="text-center mb-16">
          <h2 className="font-orbitron text-5xl md:text-7xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-green">
              DEVELOPMENT_PROTOCOL
            </span>
          </h2>
          <div className="glass-morphism inline-block px-6 py-2 rounded-full">
            <span className="font-tech text-neon-cyan">
              &gt; INITIALIZING_WORKFLOW_SEQUENCE...
            </span>
          </div>
        </motion.div>

        {/* Approach Timeline */}
        <div className="approach-content max-w-5xl mx-auto">
          <div className="relative">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-neon-blue to-neon-pink opacity-30" />
            
            {approaches.map((approach, index) => (
              <motion.div
                key={approach.phase}
                className={`approach-step relative mb-16 ${
                  index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:text-right'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-black border-2 border-neon-blue rounded-full flex items-center justify-center z-10">
                  <span className={`text-${approach.color} text-sm`}>
                    {approach.icon}
                  </span>
                </div>

                {/* Content Card */}
                <div className={`glass-morphism-strong p-6 rounded-2xl cyber-border ${
                  index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                }`}>
                  {/* Phase Header */}
                  <div className="flex items-center mb-4">
                    <span className="font-tech text-sm text-gray-400 mr-4">
                      PHASE_{approach.phase}
                    </span>
                    <span className={`text-${approach.color} font-orbitron text-xl font-bold`}>
                      {approach.title}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="font-rajdhani text-gray-300 mb-4 leading-relaxed">
                    {approach.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-2">
                    {approach.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center">
                        <span className={`text-${approach.color} mr-2 text-xs`}>▸</span>
                        <span className="font-tech text-sm text-gray-400">{detail}</span>
                      </div>
                    ))}
                  </div>

                  {/* Connection Line */}
                  <div className={`approach-line absolute top-1/2 w-12 h-0.5 bg-gradient-to-r from-${approach.color} to-transparent ${
                    index % 2 === 0 
                      ? 'right-0 translate-x-full' 
                      : 'left-0 -translate-x-full'
                  }`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technologies Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="font-orbitron text-3xl font-bold text-neon-purple mb-8">
            QUANTUM_TECHNOLOGIES
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Quantum Computing', icon: '⚛️', level: '99%' },
              { name: 'Neural Networks', icon: '🧠', level: '96%' },
              { name: 'Holographic UI', icon: '🔮', level: '94%' },
              { name: 'Time Manipulation', icon: '⏰', level: '87%' },
            ].map((tech, index) => (
              <motion.div
                key={index}
                className="glass-morphism p-4 rounded-xl text-center"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-3xl mb-2">{tech.icon}</div>
                <h4 className="font-tech text-sm text-gray-300 mb-2">{tech.name}</h4>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className={`h-2 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full`}
                    style={{ width: tech.level }}
                  />
                </div>
                <span className="font-tech text-xs text-neon-cyan mt-1 block">
                  {tech.level}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ApproachSection;
