
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-secondary/30 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-center md:text-left">
              &copy; {currentYear} Jovin Abayo. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center">
            <p className="flex items-center gap-1">
              Made with <Heart size={16} className="text-red-500 fill-red-500" /> by Jovin Abayo
            </p>
          </div>
          
          <div>
            <ul className="flex items-center space-x-4">
              <li>
                <a href="#" className="text-sm hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
