import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Square, Terminal as TerminalIcon } from 'lucide-react';

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandOutput {
  command: string;
  output: string[];
  timestamp: string;
}

const Terminal = ({ isOpen, onClose }: TerminalProps) => {
  const [history, setHistory] = useState<CommandOutput[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const getCurrentTime = () => {
    return new Date().toLocaleTimeString('en-US', { 
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const systemInfo = {
    os: 'CYBER_OS v2070.3.1',
    kernel: 'QuantumKernel 7.4.2-neural',
    cpu: 'Intel Quantum Core i9-2070K @ 8.5GHz',
    memory: '128GB Neural RAM',
    storage: '2TB Quantum SSD',
    network: 'Quantum Entanglement Protocol',
    security: 'BioCypher Authentication Active',
    uptime: '47 days, 12:34:56'
  };

  const fileSystem = {
    '/': ['home', 'sys', 'quantum', 'neural', 'projects'],
    '/home': ['user', 'admin', 'guest'],
    '/sys': ['config', 'logs', 'drivers'],
    '/quantum': ['entanglement', 'superposition', 'decoherence'],
    '/neural': ['cortex', 'synapses', 'memory'],
    '/projects': ['neural-os', 'hologram-commerce', 'cyber-defense', 'time-sync', 'bio-enhance', 'quantum-web']
  };

  const [currentPath, setCurrentPath] = useState('/');

  // Cursor blinking effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 530);

    return () => clearInterval(interval);
  }, []);

  const executeCommand = (cmd: string) => {
    const timestamp = getCurrentTime();
    const trimmedCmd = cmd.trim().toLowerCase();
    let output: string[] = [];

    if (trimmedCmd === '') {
      return;
    }

    setIsProcessing(true);

    setTimeout(() => {
      switch (true) {
        case trimmedCmd === 'help':
          output = [
            '═══════════════════════════════════════════════════════',
            '                    QUANTUM TERMINAL HELP              ',
            '═══════════════════════════════════════════════════════',
            '  help          - Show this help message',
            '  ls            - List directory contents',
            '  ls -a         - List all files including hidden',
            '  pwd           - Print working directory',
            '  cd <dir>      - Change directory',
            '  systeminfo    - Display system information',
            '  whoami        - Display current user',
            '  date          - Show current date and time',
            '  uptime        - Show system uptime',
            '  ps            - Show running processes',
            '  netstat       - Show network connections',
            '  matrix        - Display neural matrix status',
            '  quantum       - Check quantum entanglement status',
            '  clear         - Clear terminal',
            '  esc           - Close terminal',
            '  exit          - Close terminal',
            '═══════════════════════════════════════════════════════',
            ''
          ];
          break;

        case trimmedCmd === 'ls':
          output = fileSystem[currentPath] || ['Permission denied'];
          break;

        case trimmedCmd === 'ls -a':
          const files = fileSystem[currentPath] || [];
          output = ['.', '..', ...files];
          break;

        case trimmedCmd === 'pwd':
          output = [currentPath];
          break;

        case trimmedCmd.startsWith('cd '):
          const targetDir = trimmedCmd.substring(3).trim();
          const newPath = targetDir.startsWith('/') ? targetDir : `${currentPath}/${targetDir}`.replace('//', '/');
          if (fileSystem[newPath] || targetDir === '..' || targetDir === '.') {
            if (targetDir === '..') {
              const pathParts = currentPath.split('/').filter(Boolean);
              pathParts.pop();
              setCurrentPath('/' + pathParts.join('/'));
            } else if (targetDir !== '.') {
              setCurrentPath(newPath);
            }
            output = [];
          } else {
            output = [`cd: ${targetDir}: No such file or directory`];
          }
          break;

        case trimmedCmd === 'systeminfo':
          output = [
            '╔═══════════════════════════════════════════════════════╗',
            '║               CYBER2070 SYSTEM INFORMATION           ║',
            '╚═══════════════════════════════════════════════════════╝',
            `Operating System: ${systemInfo.os}`,
            `Kernel: ${systemInfo.kernel}`,
            `Processor: ${systemInfo.cpu}`,
            `Memory: ${systemInfo.memory}`,
            `Storage: ${systemInfo.storage}`,
            `Network: ${systemInfo.network}`,
            `Security: ${systemInfo.security}`,
            `Uptime: ${systemInfo.uptime}`,
            '───────────────────────────────────────────────────────',
            'Status: All systems operational ✓',
            ''
          ];
          break;

        case trimmedCmd === 'whoami':
          output = ['cyber_user@quantum-terminal', 'Access Level: NEURAL_INTERFACE_AUTHORIZED'];
          break;

        case trimmedCmd === 'date':
          output = [new Date().toString()];
          break;

        case trimmedCmd === 'uptime':
          output = [
            `System uptime: ${systemInfo.uptime}`,
            'Neural pathways: STABLE',
            'Quantum coherence: 98.7%'
          ];
          break;

        case trimmedCmd === 'ps':
          output = [
            'PID    USER      CPU%  MEM%  COMMAND',
            '───────────────────────────────────────────────────────',
            '1      root      0.1   0.2   /sbin/init',
            '247    neural    2.3   4.1   neural-interface',
            '1337   quantum   1.8   3.7   quantum-entangler',
            '2070   cyber     0.5   1.2   hologram-renderer',
            '3141   ai        5.2   8.9   consciousness-sync',
            '4096   user      0.3   0.8   terminal-emulator',
            '7777   daemon    1.1   2.3   matrix-guardian',
            ''
          ];
          break;

        case trimmedCmd === 'netstat':
          output = [
            'Active Quantum Network Connections:',
            '───────────────────────────────────────────────────────',
            'Proto  Local Address     Foreign Address     State',
            'TCP    192.168.1.100:80  quantum.net:443     ESTABLISHED',
            'TCP    10.0.0.1:22       neural.sys:2222     ESTABLISHED',
            'UDP    127.0.0.1:53      dns.cyber:53        CONNECTED',
            'QEP    0.0.0.0:∞         multiverse:∞        ENTANGLED',
            'NEU    brain.local:2070  consciousness:∞     SYNCHRONIZED',
            ''
          ];
          break;

        case trimmedCmd === 'matrix':
          output = [
            'Neural Matrix Status:',
            '───────────────────────────────────────────────────────',
            'Matrix Core: ONLINE ████████████ 100%',
            'Data Flow:   ACTIVE ████████████ 100%',
            'Integrity:   STABLE ████████████  98%',
            'Encryption:  ACTIVE ████████████ 100%',
            '',
            'Last sync: ' + new Date().toISOString(),
            'Nodes connected: 12,847,392',
            'Status: NEURAL_PATHWAYS_OPTIMAL'
          ];
          break;

        case trimmedCmd === 'quantum':
          output = [
            'Quantum Entanglement Status:',
            '───────────────────────────────────────────────────────',
            'Entangled Pairs: 2,847,392,847 active',
            'Coherence Time: 47.3 seconds',
            'Decoherence Rate: 0.003%',
            'Bell State Fidelity: 99.97%',
            '',
            'Quantum Gates: OPERATIONAL',
            'Superposition: MAINTAINED',
            'Error Correction: ACTIVE',
            'Status: QUANTUM_SUPREMACY_ACHIEVED'
          ];
          break;

        case trimmedCmd === 'clear':
          setHistory([]);
          setIsProcessing(false);
          // Refocus input after clearing
          setTimeout(() => {
            if (inputRef.current) {
              inputRef.current.focus();
            }
          }, 100);
          return;

        case trimmedCmd === 'esc':
          onClose();
          setIsProcessing(false);
          return;

        case trimmedCmd === 'exit':
          onClose();
          setIsProcessing(false);
          return;

        default:
          output = [
            `Command not found: ${cmd}`,
            'Type "help" for available commands',
            'Or try: ls, systeminfo, matrix, quantum'
          ];
      }

      setHistory(prev => [...prev, { command: cmd, output, timestamp }]);
      setIsProcessing(false);
      
      // Ensure input stays focused after command execution
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 100);
    }, Math.random() * 800 + 300); // More realistic processing time
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isProcessing && currentInput.trim()) {
      executeCommand(currentInput);
      setCurrentInput('');
    }
  };

  // Auto-focus when terminal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [isOpen]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history, isProcessing]);

  // Keep input focused
  useEffect(() => {
    const interval = setInterval(() => {
      if (isOpen && inputRef.current && document.activeElement !== inputRef.current) {
        inputRef.current.focus();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isOpen]);

  // Initialize with welcome message
  useEffect(() => {
    if (isOpen && history.length === 0) {
      setTimeout(() => {
        setHistory([{
          command: '',
          output: [
            '╔═══════════════════════════════════════════════════════╗',
            '║               CYBER2070 TERMINAL v3.14               ║',
            '║          Quantum Neural Interface Activated          ║',
            '╚═══════════════════════════════════════════════════════╝',
            '',
            '🔮 Initializing quantum systems...',
            '⚡ Neural pathways synchronized... ✓',
            '🧠 Quantum entanglement established... ✓',
            '🛡️  Cybersecurity protocols active... ✓',
            '🚀 Consciousness interface ready... ✓',
            '',
            'Welcome, NEURAL_USER. You are now connected to the quantum grid.',
            'Type "help" for available commands.',
            'Type "matrix" or "quantum" for system status.',
            ''
          ],
          timestamp: getCurrentTime()
        }]);
      }, 500);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 50 }}
          transition={{ type: "spring", duration: 0.6, bounce: 0.3 }}
          className="w-full max-w-5xl h-[85vh] m-4 glass-morphism-strong rounded-2xl border-2 border-neon-blue/40 overflow-hidden cyber-border shadow-2xl"
          onClick={(e) => e.stopPropagation()}
          style={{
            boxShadow: '0 0 50px rgba(0, 212, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          }}
        >
          {/* Terminal Header */}
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-900/95 to-gray-800/95 border-b-2 border-neon-blue/30">
            <div className="flex items-center space-x-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500 shadow-lg shadow-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 shadow-lg shadow-green-500/50"></div>
              </div>
              <div className="flex items-center space-x-3">
                <TerminalIcon className="w-5 h-5 text-neon-blue" />
                <span className="font-tech text-sm text-neon-blue tracking-wider">QUANTUM_TERMINAL</span>
                <div className="h-4 w-px bg-neon-blue/50"></div>
                <span className="font-tech text-xs text-neon-green">NEURAL_INTERFACE_ACTIVE</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 hover:bg-white/10 rounded transition-colors group">
                <Minus className="w-4 h-4 text-gray-400 group-hover:text-yellow-400" />
              </button>
              <button className="p-2 hover:bg-white/10 rounded transition-colors group">
                <Square className="w-4 h-4 text-gray-400 group-hover:text-green-400" />
              </button>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-red-500/20 rounded transition-colors group"
              >
                <X className="w-4 h-4 text-red-400 group-hover:text-red-300" />
              </button>
            </div>
          </div>

          {/* Terminal Content */}
          <div 
            ref={terminalRef}
            className="flex-1 p-6 bg-black/60 overflow-y-auto font-mono text-sm leading-relaxed"
            style={{ 
              height: 'calc(100% - 140px)',
              fontFamily: 'Share Tech Mono, monospace'
            }}
          >
            {history.map((entry, index) => (
              <div key={index} className="mb-3">
                {entry.command && (
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-neon-green font-bold">cyber_user@quantum-net:</span>
                    <span className="text-neon-blue font-semibold">{currentPath}</span>
                    <span className="text-neon-cyan">$</span>
                    <span className="text-gray-100">{entry.command}</span>
                  </div>
                )}
                {entry.output.map((line, lineIndex) => (
                  <div key={lineIndex} className="text-gray-200 pl-6 font-tech">
                    {line}
                  </div>
                ))}
              </div>
            ))}
            
            {/* Current Input Line */}
            {!isProcessing && (
              <div className="flex items-center space-x-2">
                <span className="text-neon-green font-bold">cyber_user@quantum-net:</span>
                <span className="text-neon-blue font-semibold">{currentPath}</span>
                <span className="text-neon-cyan">$</span>
                <div className="flex-1 flex items-center">
                  <input
                    ref={inputRef}
                    type="text"
                    value={currentInput}
                    onChange={(e) => setCurrentInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1 bg-transparent text-gray-100 outline-none font-tech"
                    spellCheck={false}
                    autoComplete="off"
                  />
                  <span className={`w-2 h-5 bg-neon-cyan ml-1 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}>
                    █
                  </span>
                </div>
              </div>
            )}

            {/* Processing indicator */}
            {isProcessing && (
              <div className="flex items-center space-x-3 text-neon-blue">
                <span>Processing</span>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-neon-blue rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-neon-blue rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-neon-blue rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            )}
          </div>

          {/* Terminal Footer */}
          <div className="px-6 py-3 bg-gradient-to-r from-gray-900/95 to-gray-800/95 border-t-2 border-neon-blue/30">
            <div className="flex justify-between items-center text-xs text-gray-400 font-tech">
              <div className="flex space-x-4">
                <span className="text-neon-green">● NEURAL_INTERFACE_ACTIVE</span>
                <span className="text-neon-blue">● QUANTUM_ENCRYPTION_ENABLED</span>
              </div>
              <div className="flex space-x-4">
                <span>SYS_TIME: {getCurrentTime()}</span>
                <span className="text-neon-purple">COHERENCE: 98.7%</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Terminal;
