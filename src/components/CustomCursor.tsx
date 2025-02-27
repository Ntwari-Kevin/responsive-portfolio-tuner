
import React, { useState, useEffect } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    // Hide the default cursor
    document.body.style.cursor = 'none';
    
    const updatePosition = (e: MouseEvent) => {
      // Add a slight delay for smoother movement
      setTimeout(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      }, 10);
      setHidden(false);
    };

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
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      removeLinkHoverListeners();
      observer.disconnect();
    };
  }, []);

  // Only render custom cursor on desktop
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null;
  }

  return (
    <>
      <div 
        className="cursor bg-primary" 
        style={{
          transform: `translate(${position.x - 10}px, ${position.y - 10}px) scale(${clicked ? 0.8 : linkHovered ? 1.5 : 1})`,
          opacity: hidden ? 0 : 1,
          transition: "transform 0.15s ease-out, opacity 0.2s ease-out"
        }}
      />
      <div 
        className="cursor-dot bg-white" 
        style={{
          transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
          opacity: hidden ? 0 : 1,
          transition: "transform 0.1s linear"
        }}
      />
    </>
  );
};

export default CustomCursor;
