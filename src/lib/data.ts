
export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: 'frontend' | 'backend' | 'fullstack' | 'other';
  link: string;
  github: string;
};

export type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating: number;
};

export type Service = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A fully responsive e-commerce platform with cart functionality, product filtering, and payment processing.",
    image: "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    technologies: ["React", "Next.js", "Tailwind CSS", "Stripe"],
    category: "fullstack",
    link: "https://example.com",
    github: "https://github.com",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A personal portfolio website with smooth animations and responsive design.",
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2880&q=80",
    technologies: ["React", "Tailwind CSS", "GSAP"],
    category: "frontend",
    link: "https://example.com",
    github: "https://github.com",
  },
  {
    id: 3,
    title: "Task Management API",
    description: "A RESTful API for task management with authentication and authorization.",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    technologies: ["Node.js", "Express", "MongoDB", "JWT"],
    category: "backend",
    link: "https://example.com",
    github: "https://github.com",
  },
  {
    id: 4,
    title: "Blog Platform",
    description: "A full-stack blog platform with content management and user authentication.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    category: "fullstack",
    link: "https://example.com",
    github: "https://github.com",
  },
  {
    id: 5,
    title: "Weather App",
    description: "A weather application that displays current weather and forecasts for any location.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    technologies: ["React", "OpenWeather API", "CSS"],
    category: "frontend",
    link: "https://example.com",
    github: "https://github.com",
  },
  {
    id: 6,
    title: "AI Image Generator",
    description: "An application that generates images based on text prompts using AI.",
    image: "https://images.unsplash.com/photo-1684158114144-0fa3ac77fce1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2874&q=80",
    technologies: ["React", "OpenAI API", "Tailwind CSS"],
    category: "other",
    link: "https://example.com",
    github: "https://github.com",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    content: "Working with this developer was an excellent experience. Their attention to detail and commitment to quality resulted in a product that exceeded our expectations.",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO",
    company: "StartupX",
    content: "The portfolio website created for our company was outstanding. Clean code, modern design, and excellent communication throughout the project.",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Jessica Alvarez",
    role: "Founder",
    company: "DesignStudio",
    content: "An incredible talent with a keen eye for design and robust technical skills. The work delivered was precise, creative, and thoroughly professional.",
    avatar: "https://randomuser.me/api/portraits/women/18.jpg",
    rating: 4,
  },
];

export const services: Service[] = [
  {
    id: 1,
    title: "Web Development",
    description: "Creating responsive, user-friendly websites and web applications using modern technologies and best practices.",
    icon: "code",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Designing intuitive user interfaces and experiences that engage users and meet business objectives.",
    icon: "paintbrush",
  },
  {
    id: 3,
    title: "API Development",
    description: "Building secure, scalable, and well-documented APIs that power your applications and services.",
    icon: "database",
  },
  {
    id: 4,
    title: "E-commerce Solutions",
    description: "Developing complete e-commerce platforms with payment processing, inventory management, and customer features.",
    icon: "shopping-cart",
  },
];
