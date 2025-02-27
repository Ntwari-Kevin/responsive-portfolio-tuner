
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 backdrop-blur-md bg-background/80 shadow-md' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between">
        <a 
          href="#" 
          className="text-xl md:text-2xl font-bold transition-colors hover:text-primary/80"
        >
          Jovin.dev
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="nav-link text-sm font-medium transition-colors hover:text-primary/80"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-4 py-2 rounded-md bg-primary text-primary-foreground transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Navigation Button */}
        <button
          className="md:hidden p-2 rounded-md transition-colors hover:bg-secondary"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border animate-slide-in-top">
          <div className="container py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="py-2 text-base font-medium transition-colors hover:text-primary/80"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="py-2 px-4 rounded-md bg-primary text-primary-foreground text-center transition-all hover:bg-primary/90"
              onClick={() => setIsOpen(false)}
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
