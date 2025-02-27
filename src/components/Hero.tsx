
import { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Mouse follow animation
    const handleMouseMove = (e: MouseEvent) => {
      if (!backgroundRef.current) return;
      
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) - 0.5;
      const y = (clientY / window.innerHeight) - 0.5;
      
      backgroundRef.current.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      ref={containerRef}
    >
      {/* Background gradient */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 transition-transform duration-300 ease-out"
        style={{
          background: 'radial-gradient(circle at center, rgba(29, 78, 216, 0.15) 0%, transparent 70%)',
          zIndex: -1
        }}
      />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="px-4 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
              Software Developer
            </div>
          </div>
          
          <h1 className="mb-6 animate-fade-in">
            <span className="flex items-center justify-center text-5xl sm:text-6xl md:text-7xl font-bold leading-tight md:leading-tight">
              Hey there <span className="inline-block ml-2 animate-wave">👋</span>
            </span>
            <span className="block text-5xl sm:text-6xl md:text-7xl font-bold leading-tight md:leading-tight">
              I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Jovin Abayo</span>
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Building beautiful, functional, and user-focused digital experiences. I turn ideas into elegant solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium transition-all hover:bg-primary/90 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Get in Touch
            </a>
            <a 
              href="#projects" 
              className="w-full sm:w-auto px-6 py-3 rounded-md bg-secondary text-secondary-foreground font-medium transition-all hover:bg-secondary/80 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
            >
              View Projects
            </a>
          </div>
          
          <div className="flex items-center justify-center gap-6">
            <a 
              href="https://github.com" 
              className="p-2 rounded-full bg-secondary text-secondary-foreground transition-all hover:bg-secondary/80 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
              aria-label="Github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              className="p-2 rounded-full bg-secondary text-secondary-foreground transition-all hover:bg-secondary/80 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://twitter.com" 
              className="p-2 rounded-full bg-secondary text-secondary-foreground transition-all hover:bg-secondary/80 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="mailto:contact@example.com" 
              className="p-2 rounded-full bg-secondary text-secondary-foreground transition-all hover:bg-secondary/80 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
              aria-label="Email"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#about" 
          className="p-2 rounded-full bg-secondary text-secondary-foreground transition-all hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
          aria-label="Scroll down"
        >
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
