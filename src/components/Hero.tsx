
import { useEffect, useRef, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const [particlesLoaded, setParticlesLoaded] = useState(false);

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

  const particlesInit = async (engine: Engine) => {
    await loadFull(engine);
    setParticlesLoaded(true);
  };

  // Smooth scroll function
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId) as HTMLElement;
    
    if (targetElement) {
      // Get the navbar height to offset the scroll position
      const navbarHeight = document.querySelector('nav')?.clientHeight || 0;
      
      // Calculate scroll position
      const offsetTop = targetElement.offsetTop - navbarHeight;
      
      // Smooth scroll to the element
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      
      // Update URL hash without scrolling
      window.history.pushState(null, '', targetId);
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-10 px-4"
      ref={containerRef}
    >
      {/* TS Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: {
            enable: false,
            zIndex: -1
          },
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: "#F97316"
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000"
              },
              polygon: {
                nb_sides: 5
              }
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 5,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
              }
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#F97316",
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "grab"
              },
              onclick: {
                enable: true,
                mode: "push"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 140,
                line_linked: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
              },
              repulse: {
                distance: 200,
                duration: 0.4
              },
              push: {
                particles_nb: 4
              },
              remove: {
                particles_nb: 2
              }
            }
          },
          retina_detect: true
        }}
      />

      {/* Background gradient */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 transition-transform duration-300 ease-out"
        style={{
          background: 'radial-gradient(circle at center, rgba(249, 115, 22, 0.15) 0%, transparent 70%)',
          zIndex: -1
        }}
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <div className="px-3 py-1 sm:px-4 sm:py-1 rounded-full bg-secondary text-secondary-foreground text-xs sm:text-sm font-medium">
              Software Developer
            </div>
          </div>
          
          <h1 className="mb-4 sm:mb-6 animate-fade-in">
            <span className="flex items-center justify-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Hey there <span className="inline-block ml-2 animate-wave">👋</span>
            </span>
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Jovin Abayo</span>
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
            Building beautiful, functional, and user-focused digital experiences. I turn ideas into elegant solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-2">
            <a 
              href="#contact" 
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 rounded-md bg-primary text-primary-foreground font-medium transition-all hover:bg-primary/90 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 text-sm sm:text-base"
            >
              Get in Touch
            </a>
            <a 
              href="#projects" 
              onClick={(e) => handleSmoothScroll(e, '#projects')}
              className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 rounded-md bg-secondary text-secondary-foreground font-medium transition-all hover:bg-secondary/80 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 text-sm sm:text-base mt-3 sm:mt-0"
            >
              View Projects
            </a>
          </div>
          
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            <a 
              href="https://github.com" 
              className="p-1.5 sm:p-2 rounded-full bg-secondary text-secondary-foreground transition-all hover:bg-secondary/80 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
              aria-label="Github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={16} className="sm:w-5 sm:h-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              className="p-1.5 sm:p-2 rounded-full bg-secondary text-secondary-foreground transition-all hover:bg-secondary/80 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={16} className="sm:w-5 sm:h-5" />
            </a>
            <a 
              href="https://twitter.com" 
              className="p-1.5 sm:p-2 rounded-full bg-secondary text-secondary-foreground transition-all hover:bg-secondary/80 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter size={16} className="sm:w-5 sm:h-5" />
            </a>
            <a 
              href="mailto:contact@example.com" 
              className="p-1.5 sm:p-2 rounded-full bg-secondary text-secondary-foreground transition-all hover:bg-secondary/80 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
              aria-label="Email"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail size={16} className="sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#about"
          onClick={(e) => handleSmoothScroll(e, '#about')}
          className="p-1.5 sm:p-2 rounded-full bg-secondary text-secondary-foreground transition-all hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
          aria-label="Scroll down"
        >
          <ArrowDown size={16} className="sm:w-5 sm:h-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
