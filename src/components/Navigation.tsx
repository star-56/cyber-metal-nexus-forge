
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon } from 'lucide-react';
import Terminal from './Terminal';

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'HOME', icon: '◆' },
    { id: 'about', label: 'ABOUT', icon: '◇' },
    { id: 'projects', label: 'PROJECTS', icon: '◈' },
    { id: 'testimonials', label: 'TESTIMONIALS', icon: '◉' },
    { id: 'approach', label: 'APPROACH', icon: '◎' },
    { id: 'contact', label: 'CONTACT', icon: '◐' },
  ];

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    const handleScroll = () => {
      controlNavbar();
      
      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, navItems]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-50 p-4"
          >
            <div className="max-w-7xl mx-auto">
              <div className="glass-morphism-strong rounded-2xl p-4">
                <div className="flex items-center justify-between">
                  {/* Logo */}
                  <motion.div
                    className="font-orbitron text-2xl font-bold neon-text-soft"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-neon-green">Loki</span>
                    <span className="text-neon-cyan">/E</span>
                  </motion.div>

                  {/* Navigation Items */}
                  <div className="hidden md:flex items-center space-x-1">
                    {navItems.map((item) => (
                      <motion.button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`interactive px-4 py-2 rounded-lg font-tech text-sm transition-all duration-300 ${
                          activeSection === item.id
                            ? 'neon-glow-soft text-neon-green bg-neon-green/10'
                            : 'text-gray-300 hover:text-neon-green hover:bg-white/5'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="mr-2">{item.icon}</span>
                        {item.label}
                      </motion.button>
                    ))}
                    
                    {/* Terminal Button */}
                    <motion.button
                      onClick={() => setIsTerminalOpen(true)}
                      className="interactive px-4 py-2 rounded-lg font-tech text-sm transition-all duration-300 text-neon-green hover:text-neon-cyan hover:bg-white/5 border border-neon-green/30 hover:border-neon-cyan/50"
                      whileHover={{ scale: 1.05, boxShadow: '0 0 15px #00ff00' }}
                      whileTap={{ scale: 0.95 }}
                      title="Open Quantum Terminal"
                    >
                      <TerminalIcon className="w-4 h-4 mr-2 inline" />
                      TERMINAL
                    </motion.button>
                  </div>

                  {/* Mobile Menu Button */}
                  <motion.button
                    className="md:hidden text-neon-green interactive"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Neural network animation */}
            <div className="absolute inset-0 neural-network pointer-events-none" />
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Terminal Component */}
      <Terminal 
        isOpen={isTerminalOpen} 
        onClose={() => setIsTerminalOpen(false)} 
      />
    </>
  );
};

export default Navigation;
