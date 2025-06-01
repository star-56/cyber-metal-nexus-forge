
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
            'Available commands:',
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
            '  clear         - Clear terminal',
            '  exit          - Close terminal',
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
            'CYBER2070 System Information',
            '============================',
            `Operating System: ${systemInfo.os}`,
            `Kernel: ${systemInfo.kernel}`,
            `Processor: ${systemInfo.cpu}`,
            `Memory: ${systemInfo.memory}`,
            `Storage: ${systemInfo.storage}`,
            `Network: ${systemInfo.network}`,
            `Security: ${systemInfo.security}`,
            `Uptime: ${systemInfo.uptime}`,
            ''
          ];
          break;

        case trimmedCmd === 'whoami':
          output = ['cyber_user@quantum-terminal'];
          break;

        case trimmedCmd === 'date':
          output = [new Date().toString()];
          break;

        case trimmedCmd === 'uptime':
          output = [`System uptime: ${systemInfo.uptime}`];
          break;

        case trimmedCmd === 'ps':
          output = [
            'PID    USER      CPU%  MEM%  COMMAND',
            '1      root      0.1   0.2   /sbin/init',
            '247    neural    2.3   4.1   neural-interface',
            '1337   quantum   1.8   3.7   quantum-entangler',
            '2070   cyber     0.5   1.2   hologram-renderer',
            '3141   ai        5.2   8.9   consciousness-sync',
            '4096   user      0.3   0.8   terminal-emulator',
            ''
          ];
          break;

        case trimmedCmd === 'netstat':
          output = [
            'Active Network Connections:',
            'Proto  Local Address     Foreign Address     State',
            'TCP    192.168.1.100:80  quantum.net:443     ESTABLISHED',
            'TCP    10.0.0.1:22       neural.sys:2222     ESTABLISHED',
            'UDP    127.0.0.1:53      dns.cyber:53        CONNECTED',
            'QEP    0.0.0.0:∞         multiverse:∞        ENTANGLED',
            ''
          ];
          break;

        case trimmedCmd === 'clear':
          setHistory([]);
          setIsProcessing(false);
          return;

        case trimmedCmd === 'exit':
          onClose();
          setIsProcessing(false);
          return;

        default:
          output = [`Command not found: ${cmd}`, 'Type "help" for available commands'];
      }

      setHistory(prev => [...prev, { command: cmd, output, timestamp }]);
      setIsProcessing(false);
    }, Math.random() * 500 + 200); // Simulate processing time
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isProcessing) {
      executeCommand(currentInput);
      setCurrentInput('');
    }
  };

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  // Initialize with welcome message
  useEffect(() => {
    if (isOpen && history.length === 0) {
      setHistory([{
        command: '',
        output: [
          '╔═══════════════════════════════════════════════════════╗',
          '║               CYBER2070 TERMINAL v3.14               ║',
          '║          Quantum Neural Interface Activated          ║',
          '╚═══════════════════════════════════════════════════════╝',
          '',
          'Welcome to the Quantum Terminal Interface',
          'Neural pathways synchronized... ✓',
          'Quantum entanglement established... ✓',
          'Cybersecurity protocols active... ✓',
          '',
          'Type "help" for available commands',
          ''
        ],
        timestamp: getCurrentTime()
      }]);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 50 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="w-full max-w-4xl h-[80vh] m-4 glass-morphism-strong rounded-xl border border-neon-blue/30 overflow-hidden cyber-border"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Terminal Header */}
          <div className="flex items-center justify-between p-3 bg-gradient-to-r from-gray-900/90 to-gray-800/90 border-b border-neon-blue/20">
            <div className="flex items-center space-x-3">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex items-center space-x-2">
                <TerminalIcon className="w-4 h-4 text-neon-blue" />
                <span className="font-tech text-sm text-neon-blue">QUANTUM_TERMINAL</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-1 hover:bg-white/10 rounded transition-colors">
                <Minus className="w-4 h-4 text-gray-400" />
              </button>
              <button className="p-1 hover:bg-white/10 rounded transition-colors">
                <Square className="w-4 h-4 text-gray-400" />
              </button>
              <button 
                onClick={onClose}
                className="p-1 hover:bg-red-500/20 rounded transition-colors"
              >
                <X className="w-4 h-4 text-red-400" />
              </button>
            </div>
          </div>

          {/* Terminal Content */}
          <div 
            ref={terminalRef}
            className="flex-1 p-4 bg-black/40 overflow-y-auto font-mono text-sm"
            style={{ height: 'calc(100% - 120px)' }}
          >
            {history.map((entry, index) => (
              <div key={index} className="mb-2">
                {entry.command && (
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-neon-green">cyber_user@quantum:</span>
                    <span className="text-neon-blue">{currentPath}</span>
                    <span className="text-white">$</span>
                    <span className="text-gray-300">{entry.command}</span>
                  </div>
                )}
                {entry.output.map((line, lineIndex) => (
                  <div key={lineIndex} className="text-gray-300 pl-4">
                    {line}
                  </div>
                ))}
              </div>
            ))}
            
            {/* Current Input Line */}
            <div className="flex items-center space-x-2">
              <span className="text-neon-green">cyber_user@quantum:</span>
              <span className="text-neon-blue">{currentPath}</span>
              <span className="text-white">$</span>
              <input
                ref={inputRef}
                type="text"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 bg-transparent text-gray-300 outline-none"
                disabled={isProcessing}
                placeholder={isProcessing ? "Processing..." : ""}
              />
              {isProcessing && (
                <div className="flex space-x-1">
                  <div className="w-1 h-1 bg-neon-blue rounded-full animate-pulse"></div>
                  <div className="w-1 h-1 bg-neon-blue rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-1 h-1 bg-neon-blue rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
              )}
            </div>
          </div>

          {/* Terminal Footer */}
          <div className="px-4 py-2 bg-gradient-to-r from-gray-900/90 to-gray-800/90 border-t border-neon-blue/20">
            <div className="flex justify-between items-center text-xs text-gray-400 font-tech">
              <span>NEURAL_INTERFACE_ACTIVE</span>
              <span>QUANTUM_ENCRYPTION_ENABLED</span>
              <span>{getCurrentTime()}</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Terminal;
