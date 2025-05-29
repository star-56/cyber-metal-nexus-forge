
import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners
    document.addEventListener('mousemove', updateMousePosition);
    
    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], .interactive');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        className={`fixed w-4 h-4 bg-neon-blue rounded-full pointer-events-none z-50 mix-blend-mode-difference transition-transform duration-100 ${
          isHovering ? 'scale-150' : 'scale-100'
        }`}
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          boxShadow: '0 0 20px #00d4ff',
        }}
      />
      
      {/* Trailing cursor */}
      <div
        className={`fixed w-8 h-8 border border-neon-blue rounded-full pointer-events-none z-49 transition-all duration-300 ${
          isHovering ? 'scale-200 opacity-60' : 'scale-100 opacity-30'
        }`}
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          boxShadow: '0 0 30px rgba(0, 212, 255, 0.5)',
        }}
      />
    </>
  );
};

export default CustomCursor;
