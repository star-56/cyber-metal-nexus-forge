
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: '',
    priority: 'standard'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-form', {
        scrollTrigger: {
          trigger: '.contact-form',
          start: 'top 80%',
        },
        duration: 1.5,
        x: -100,
        opacity: 0,
        ease: 'power3.out',
      });

      gsap.from('.contact-info', {
        scrollTrigger: {
          trigger: '.contact-info',
          start: 'top 80%',
        },
        duration: 1.5,
        x: 100,
        opacity: 0,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate quantum transmission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Neural message transmitted:', formData);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      project: '',
      message: '',
      priority: 'standard'
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      type: 'NEURAL_LINK',
      value: 'neural@cyber2070.dev',
      icon: '🧠',
      status: 'ACTIVE',
      description: 'Direct neural interface communication'
    },
    {
      type: 'QUANTUM_COMM',
      value: '+1 (555) CYBER-70',
      icon: '📡',
      status: 'ONLINE',
      description: 'Quantum encrypted voice channel'
    },
    {
      type: 'HOLOGRAM_MEET',
      value: 'Schedule Session',
      icon: '🔮',
      status: 'AVAILABLE',
      description: 'Immersive holographic consultation'
    },
    {
      type: 'DIMENSION_PORTAL',
      value: 'Sector 7, Level 42',
      icon: '🌌',
      status: 'SECURED',
      description: 'Physical dimension coordinates'
    }
  ];

  return (
    <section id="contact" className="section-container relative py-20" ref={sectionRef}>
      {/* Background Effects */}
      <div className="neural-network" />
      <div className="absolute inset-0 hologram-effect opacity-20" />

      <div className="container mx-auto px-4 z-10 relative">
        {/* Section Title */}
        <motion.div className="text-center mb-16">
          <h2 className="font-orbitron text-5xl md:text-7xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-yellow">
              NEURAL_INTERFACE
            </span>
          </h2>
          <div className="glass-morphism inline-block px-6 py-2 rounded-full">
            <span className="font-tech text-neon-pink">
              &gt; ESTABLISHING_CONNECTION_PROTOCOLS...
            </span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div className="contact-form">
            <div className="glass-morphism-strong p-8 rounded-2xl cyber-border">
              <h3 className="font-orbitron text-2xl font-bold text-neon-blue mb-6">
                ◆ TRANSMISSION_FORM
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="block font-tech text-sm text-gray-400 mb-2">
                    NEURAL_ID:
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-neon-blue/30 rounded-lg px-4 py-3 text-white font-rajdhani focus:border-neon-blue focus:ring-1 focus:ring-neon-blue focus:outline-none transition-all"
                    placeholder="Enter your neural identification..."
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block font-tech text-sm text-gray-400 mb-2">
                    QUANTUM_CHANNEL:
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-neon-blue/30 rounded-lg px-4 py-3 text-white font-rajdhani focus:border-neon-blue focus:ring-1 focus:ring-neon-blue focus:outline-none transition-all"
                    placeholder="neural.link@example.com"
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label className="block font-tech text-sm text-gray-400 mb-2">
                    PROJECT_TYPE:
                  </label>
                  <select
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-neon-blue/30 rounded-lg px-4 py-3 text-white font-rajdhani focus:border-neon-blue focus:ring-1 focus:ring-neon-blue focus:outline-none transition-all"
                  >
                    <option value="">Select project type...</option>
                    <option value="neural-interface">Neural Interface Development</option>
                    <option value="quantum-computing">Quantum Computing Solution</option>
                    <option value="ai-integration">AI Integration Project</option>
                    <option value="cybersecurity">Cybersecurity Protocol</option>
                    <option value="holographic-ui">Holographic User Interface</option>
                    <option value="custom">Custom Cybernetic Solution</option>
                  </select>
                </div>

                {/* Priority Level */}
                <div>
                  <label className="block font-tech text-sm text-gray-400 mb-2">
                    PRIORITY_LEVEL:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['standard', 'urgent', 'critical'].map((priority) => (
                      <label key={priority} className="cursor-pointer">
                        <input
                          type="radio"
                          name="priority"
                          value={priority}
                          checked={formData.priority === priority}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <div className={`p-2 rounded-lg border text-center font-tech text-sm transition-all ${
                          formData.priority === priority
                            ? 'border-neon-blue bg-neon-blue/20 text-neon-blue'
                            : 'border-gray-600 text-gray-400 hover:border-gray-400'
                        }`}>
                          {priority.toUpperCase()}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label className="block font-tech text-sm text-gray-400 mb-2">
                    NEURAL_MESSAGE:
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-black/50 border border-neon-blue/30 rounded-lg px-4 py-3 text-white font-rajdhani focus:border-neon-blue focus:ring-1 focus:ring-neon-blue focus:outline-none transition-all resize-none"
                    placeholder="Describe your cybernetic requirements..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full interactive glass-morphism-strong py-4 rounded-xl font-tech text-lg cyber-border relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <div className="animate-spin w-5 h-5 border-2 border-neon-blue border-t-transparent rounded-full mr-2" />
                      TRANSMITTING...
                    </span>
                  ) : (
                    <span className="text-neon-blue">
                      &gt; INITIATE_NEURAL_TRANSMISSION
                    </span>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div className="contact-info space-y-8">
            {/* Status Display */}
            <div className="glass-morphism-strong p-6 rounded-2xl">
              <h3 className="font-orbitron text-xl font-bold text-neon-green mb-4">
                ◇ SYSTEM_STATUS
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-tech text-sm text-gray-400">NEURAL_LINK:</span>
                  <span className="font-tech text-sm text-neon-green animate-flicker">ONLINE</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-tech text-sm text-gray-400">RESPONSE_TIME:</span>
                  <span className="font-tech text-sm text-neon-cyan">&lt; 24 HOURS</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-tech text-sm text-gray-400">ENCRYPTION:</span>
                  <span className="font-tech text-sm text-neon-purple">QUANTUM_LEVEL</span>
                </div>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  className="glass-morphism p-4 rounded-xl hover:glass-morphism-strong transition-all duration-300"
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{method.icon}</span>
                      <span className="font-tech text-sm text-neon-cyan">
                        {method.type}
                      </span>
                    </div>
                    <span className="font-tech text-xs text-neon-green">
                      {method.status}
                    </span>
                  </div>
                  <div className="font-rajdhani text-white mb-1">
                    {method.value}
                  </div>
                  <div className="font-tech text-xs text-gray-400">
                    {method.description}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Emergency Contact */}
            <div className="glass-morphism-strong p-6 rounded-2xl border border-red-500/30">
              <h4 className="font-orbitron text-lg font-bold text-red-400 mb-3">
                ⚠️ EMERGENCY_PROTOCOL
              </h4>
              <p className="font-tech text-sm text-gray-300 mb-3">
                For critical system failures or dimensional breaches:
              </p>
              <div className="font-tech text-red-400">
                EMERGENCY_CODE: RED_ALERT_2070
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
