
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'NEURAL_NET', icon: '🧠', url: '#', status: 'ACTIVE' },
    { name: 'QUANTUM_FEED', icon: '⚛️', url: '#', status: 'SYNCED' },
    { name: 'HOLO_STREAM', icon: '🔮', url: '#', status: 'LIVE' },
    { name: 'CYBER_LINK', icon: '🔗', url: '#', status: 'SECURE' },
  ];

  const quickLinks = [
    { name: 'Neural Profile', href: '#about' },
    { name: 'Project Archive', href: '#projects' },
    { name: 'Client Feedback', href: '#testimonials' },
    { name: 'Development Protocol', href: '#approach' },
    { name: 'Neural Interface', href: '#contact' },
  ];

  const systemInfo = [
    { label: 'SYSTEM_VERSION', value: 'CYBER_2070.V3.14' },
    { label: 'LAST_UPDATE', value: '2070.12.25' },
    { label: 'SECURITY_LEVEL', value: 'QUANTUM_ENCRYPTED' },
    { label: 'UPTIME', value: '99.98%' },
  ];

  return (
    <footer className="relative bg-black/50 border-t border-neon-blue/20 overflow-hidden">
      {/* Background Effects */}
      <div className="neural-network opacity-5" />
      <div className="absolute inset-0 bg-cyber-grid bg-cyber-grid opacity-5" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <h3 className="font-orbitron text-3xl font-bold neon-text mb-2">
                <span className="text-neon-blue">CYBER</span>
                <span className="text-neon-purple">2070</span>
              </h3>
              <p className="font-tech text-sm text-gray-400">
                CYBERNETIC_DEVELOPER_INTERFACE
              </p>
            </div>
            
            <p className="font-rajdhani text-gray-300 text-sm leading-relaxed mb-4">
              Bridging human consciousness with artificial intelligence through 
              quantum-enhanced digital experiences in the year 2070.
            </p>
            
            <div className="glass-morphism inline-block px-3 py-1 rounded-full">
              <span className="font-tech text-xs text-neon-green animate-flicker">
                STATUS: ONLINE
              </span>
            </div>
          </motion.div>

          {/* Quick Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-orbitron text-lg font-bold text-neon-cyan mb-4">
              ◇ QUICK_ACCESS
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="font-tech text-sm text-gray-400 hover:text-neon-cyan transition-colors block py-1"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-neon-blue mr-2">▸</span>
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* System Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-orbitron text-lg font-bold text-neon-purple mb-4">
              ◈ SYSTEM_INFO
            </h4>
            <div className="space-y-3">
              {systemInfo.map((info, index) => (
                <div key={index} className="flex flex-col">
                  <span className="font-tech text-xs text-gray-500">
                    {info.label}:
                  </span>
                  <span className="font-tech text-xs text-gray-300">
                    {info.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Social Networks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-orbitron text-lg font-bold text-neon-green mb-4">
              ◉ NEURAL_NETWORKS
            </h4>
            <div className="space-y-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  className="flex items-center justify-between glass-morphism p-2 rounded-lg hover:glass-morphism-strong transition-all duration-300"
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center">
                    <span className="text-lg mr-2">{social.icon}</span>
                    <span className="font-tech text-sm text-gray-300">
                      {social.name}
                    </span>
                  </div>
                  <span className="font-tech text-xs text-neon-green">
                    {social.status}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="font-tech text-sm text-gray-400 mb-4 md:mb-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            © {currentYear} CYBER2070 • NEURAL_INTERFACE_ACTIVATED • ALL_DIMENSIONS_RESERVED
          </motion.div>

          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="font-tech text-xs text-gray-500">
              POWERED_BY:
            </span>
            <div className="flex items-center space-x-2">
              <span className="text-neon-blue">⚛️</span>
              <span className="font-tech text-xs text-neon-blue">QUANTUM_CORE</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-neon-purple">🧠</span>
              <span className="font-tech text-xs text-neon-purple">NEURAL_NET</span>
            </div>
          </motion.div>
        </div>

        {/* Terminal-style footer */}
        <motion.div
          className="mt-8 glass-morphism p-4 rounded-lg border border-neon-green/20"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="font-tech text-xs text-neon-green">
            <span className="text-gray-400">cyber2070@neural-interface:~$</span> 
            <span className="animate-flicker"> connection_established | welcome_to_the_future_</span>
            <span className="animate-pulse">█</span>
          </div>
        </motion.div>
      </div>

      {/* Data Stream Effect */}
      <div className="data-stream absolute inset-0 pointer-events-none opacity-10" />
    </footer>
  );
};

export default Footer;
