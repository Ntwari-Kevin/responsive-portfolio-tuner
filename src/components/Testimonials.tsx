
import { useState, useRef, useEffect } from 'react';
import { testimonials } from '../lib/data';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(testimonials.length - 1);
    }
  };

  const selectSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        size={14}
        className={`${
          index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
        } sm:w-4 sm:h-4`}
      />
    ));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isMobile || !sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isMobile || !sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !sliderRef.current) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const stopDragging = () => {
    setIsDragging(false);
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.offsetWidth;
      const index = Math.round(sliderRef.current.scrollLeft / slideWidth);
      setCurrentIndex(Math.max(0, Math.min(testimonials.length - 1, index)));
      
      sliderRef.current.scrollTo({
        left: index * slideWidth,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: currentIndex * sliderRef.current.offsetWidth,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  return (
    <section id="testimonials" className="section" data-aos="fade-up">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="mb-8 sm:mb-12 text-center">
          <h2 className="mb-3">Testimonials</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            What people are saying about working with me
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div 
            ref={sliderRef}
            className={`overflow-hidden ${isMobile ? 'cursor-grab' : ''} ${isDragging ? 'cursor-grabbing' : ''} rounded-lg`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={stopDragging}
            onMouseLeave={stopDragging}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={stopDragging}
          >
            <div 
              className={`flex ${isMobile ? '' : 'transition-transform duration-500 ease-out'}`}
              style={!isMobile ? { transform: `translateX(-${currentIndex * 100}%)` } : undefined}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="min-w-full px-2 sm:px-4"
                  data-aos="fade-up"
                >
                  <div className="testimonial-card bg-card rounded-lg p-4 sm:p-6 md:p-8 shadow-md border border-border">
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      {testimonial.avatar && (
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name} 
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                        />
                      )}
                      <div>
                        <h4 className="font-bold text-sm sm:text-base">{testimonial.name}</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                    
                    <blockquote className="mb-4 sm:mb-6 italic text-xs sm:text-sm">
                      "{testimonial.content}"
                    </blockquote>
                    
                    <div className="flex items-center flex-wrap">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile indicator */}
          {isMobile && (
            <div className="flex justify-center mt-4 sm:mt-6">
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => selectSlide(index)}
                    className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-primary w-3 sm:w-4'
                        : 'bg-secondary hover:bg-secondary/80'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Desktop Controls */}
          {!isMobile && (
            <div className="flex items-center justify-between mt-4 sm:mt-6">
              <button
                onClick={prevSlide}
                className="p-1.5 sm:p-2 rounded-full bg-secondary text-secondary-foreground transition-all hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={16} className="sm:w-5 sm:h-5" />
              </button>
              
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => selectSlide(index)}
                    className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-primary w-3 sm:w-4'
                        : 'bg-secondary hover:bg-secondary/80'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextSlide}
                className="p-1.5 sm:p-2 rounded-full bg-secondary text-secondary-foreground transition-all hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                aria-label="Next testimonial"
              >
                <ChevronRight size={16} className="sm:w-5 sm:h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
