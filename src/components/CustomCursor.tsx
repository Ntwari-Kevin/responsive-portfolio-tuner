
import React, { useState, useEffect } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [trailingPosition, setTrailingPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Hide the default cursor
    document.body.style.cursor = 'none';
    
    const updatePosition = (e: MouseEvent) => {
      // Immediately update the small cursor
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    // Set up the trailing effect for the larger cursor
    const trailInterval = setInterval(() => {
      setTrailingPosition(prev => {
        // Calculate the distance between current position and trailing position
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        
        // Calculate new position with easing
        const newX = prev.x + dx * 0.15;
        const newY = prev.y + dy * 0.15;
        
        return { x: newX, y: newY };
      });
    }, 16); // ~60fps

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const handleLinkHoverEnter = () => setLinkHovered(true);
    const handleLinkHoverLeave = () => setLinkHovered(false);

    const addLinkHoverListeners = () => {
      const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select, [tabindex]:not([tabindex="-1"])');
      interactiveElements.forEach((element) => {
        element.addEventListener('mouseenter', handleLinkHoverEnter);
        element.addEventListener('mouseleave', handleLinkHoverLeave);
        // Also hide default cursor on interactive elements
        (element as HTMLElement).style.cursor = 'none';
      });
    };

    const removeLinkHoverListeners = () => {
      const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select, [tabindex]:not([tabindex="-1"])');
      interactiveElements.forEach((element) => {
        element.removeEventListener('mouseenter', handleLinkHoverEnter);
        element.removeEventListener('mouseleave', handleLinkHoverLeave);
      });
    };

    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    // Add event listeners
    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);

    addLinkHoverListeners();

    // Use MutationObserver to monitor DOM changes and update link hover listeners
    const observer = new MutationObserver(() => {
      removeLinkHoverListeners();
      addLinkHoverListeners();
    });

    observer.observe(document.body, { 
      childList: true, 
      subtree: true 
    });

    return () => {
      // Clean up
      document.body.style.cursor = '';
      window.addEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      removeLinkHoverListeners();
      observer.disconnect();
      clearInterval(trailInterval);
    };
  }, [position.x, position.y]);

  // Only render custom cursor on desktop
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null;
  }

  return (
    <>
      {/* Trailing larger cursor */}
      <div 
        className="cursor"
        style={{
          transform: `translate(${trailingPosition.x - 15}px, ${trailingPosition.y - 15}px) scale(${clicked ? 0.8 : linkHovered ? 1.5 : 1})`,
          opacity: hidden ? 0 : 0.4,
          transition: "transform 0.3s ease-out, opacity 0.2s ease-out"
        }}
      />
      {/* Fast small cursor */}
      <div 
        className="cursor-dot"
        style={{
          transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
          opacity: hidden ? 0 : 1
        }}
      />
    </>
  );
};

export default CustomCursor;
