
import React, { useState, useEffect } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const handleLinkHoverEnter = () => setLinkHovered(true);
    const handleLinkHoverLeave = () => setLinkHovered(false);

    const addLinkHoverListeners = () => {
      const links = document.querySelectorAll('a, button, [role="button"]');
      links.forEach((link) => {
        link.addEventListener('mouseenter', handleLinkHoverEnter);
        link.addEventListener('mouseleave', handleLinkHoverLeave);
      });
    };

    const removeLinkHoverListeners = () => {
      const links = document.querySelectorAll('a, button, [role="button"]');
      links.forEach((link) => {
        link.removeEventListener('mouseenter', handleLinkHoverEnter);
        link.removeEventListener('mouseleave', handleLinkHoverLeave);
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
        className="cursor bg-white" 
        style={{
          transform: `translate(${position.x - 10}px, ${position.y - 10}px) scale(${clicked ? 0.8 : linkHovered ? 1.5 : 1})`,
          opacity: hidden ? 0 : 1
        }}
      />
      <div 
        className="cursor-dot bg-white" 
        style={{
          transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
          opacity: hidden ? 0 : 1
        }}
      />
    </>
  );
};

export default CustomCursor;
