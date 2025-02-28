
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

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
    <footer className="py-10 sm:py-12 bg-secondary/30 border-t border-border">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Name and Description */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Jovin Abayo</h3>
            <p className="text-muted-foreground mb-4 text-xs sm:text-sm">
              A passionate software developer specializing in creating beautiful, functional, and user-focused digital experiences.
            </p>
            <div className="flex items-center">
              <p className="flex items-center gap-1 text-xs sm:text-sm">
                Made with <Heart size={14} className="text-red-500 fill-red-500" /> and code
              </p>
            </div>
          </div>
          
          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)} 
                    className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Contact Information */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                <a 
                  href="mailto:contact@example.com" 
                  className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm"
                >
                  contact@example.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                <a 
                  href="tel:+11234567890" 
                  className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm"
                >
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                <span className="text-muted-foreground text-xs sm:text-sm">
                  San Francisco, CA, USA
                </span>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Legal Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-6 sm:pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-xs sm:text-sm">
            &copy; {currentYear} Jovin Abayo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
