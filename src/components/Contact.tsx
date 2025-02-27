
import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-3">Get in Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to chat? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-4 p-2 rounded-full bg-secondary text-secondary-foreground">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a href="mailto:contact@example.com" className="text-muted-foreground hover:text-primary">
                      contact@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-2 rounded-full bg-secondary text-secondary-foreground">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <a href="tel:+11234567890" className="text-muted-foreground hover:text-primary">
                      +1 (123) 456-7890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-2 rounded-full bg-secondary text-secondary-foreground">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-muted-foreground">
                      San Francisco, CA, USA
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-4">
                Follow me on social media to stay updated with my latest projects and insights.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-secondary text-secondary-foreground transition-all hover:bg-secondary/80 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                  aria-label="GitHub"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-secondary text-secondary-foreground transition-all hover:bg-secondary/80 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                  aria-label="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-secondary text-secondary-foreground transition-all hover:bg-secondary/80 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                  aria-label="Twitter"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-lg p-6 md:p-8 shadow-md border border-border">
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Your message"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-4 py-2 rounded-md bg-primary text-primary-foreground font-medium transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
