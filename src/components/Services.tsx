
import { services } from '../lib/data';
import { Code, Paintbrush, Database, ShoppingCart } from 'lucide-react';

const Services = () => {
  // Map icon strings to Lucide React components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return <Code className="w-10 h-10 text-primary" />;
      case 'paintbrush':
        return <Paintbrush className="w-10 h-10 text-primary" />;
      case 'database':
        return <Database className="w-10 h-10 text-primary" />;
      case 'shopping-cart':
        return <ShoppingCart className="w-10 h-10 text-primary" />;
      default:
        return <Code className="w-10 h-10 text-primary" />;
    }
  };

  return (
    <section id="services" className="section bg-secondary/30">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-3">Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Specialized solutions tailored to meet your development needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-card rounded-lg p-6 shadow-md border border-border transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="mb-4">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm">
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
