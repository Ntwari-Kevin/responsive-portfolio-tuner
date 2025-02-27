
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
        <div className="w-12 h-12 rounded-full border-2 border-primary border-t-transparent animate-spin"></div>
      </div>
    );
  }

  return (
    <>
      {!isMobile && <CustomCursor />}
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Index;
