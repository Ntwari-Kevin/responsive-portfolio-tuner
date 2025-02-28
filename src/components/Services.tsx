
import { services } from '../lib/data';
import { Code, Paintbrush, Database, ShoppingCart } from 'lucide-react';

const Services = () => {
  // Map icon strings to Lucide React components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return <Code className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />;
      case 'paintbrush':
        return <Paintbrush className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />;
      case 'database':
        return <Database className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />;
      case 'shopping-cart':
        return <ShoppingCart className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />;
      default:
        return <Code className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />;
    }
  };

  return (
    <section id="services" className="section bg-secondary/30">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="mb-8 sm:mb-12 text-center">
          <h2 className="mb-3">Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Specialized solutions tailored to meet your development needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-card rounded-lg p-4 sm:p-6 shadow-md border border-border transition-all hover:shadow-lg hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={parseInt(service.id) * 100}
            >
              <div className="mb-4">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
