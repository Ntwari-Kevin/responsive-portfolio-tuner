
import { useState, useRef } from 'react';
import { testimonials } from '../lib/data';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

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
        size={16}
        className={`${
          index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="section">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-3">Testimonials</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            What people are saying about working with me
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Carousel */}
          <div 
            ref={sliderRef}
            className="overflow-hidden"
          >
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="min-w-full px-4"
                >
                  <div className="testimonial-card bg-card rounded-lg p-6 md:p-8 shadow-md border border-border">
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      {testimonial.avatar && (
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name} 
                          className="w-12 h-12 rounded-full object-cover"
                        />
                      )}
                      <div>
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                    
                    <blockquote className="mb-6 italic">
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

          {/* Controls */}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-secondary text-secondary-foreground transition-all hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => selectSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-primary w-4'
                      : 'bg-secondary hover:bg-secondary/80'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-secondary text-secondary-foreground transition-all hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
