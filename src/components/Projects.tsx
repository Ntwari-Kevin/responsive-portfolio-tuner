
import { useState, useEffect, useRef } from 'react';
import { projects } from '../lib/data';
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [visibleProjects, setVisibleProjects] = useState(projects);
  const [animate, setAnimate] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const projectsContainerRef = useRef<HTMLDivElement>(null);

  const initialCount = isMobile ? 3 : 6;
  const displayedProjects = showAll ? visibleProjects : visibleProjects.slice(0, initialCount);
  const showButton = visibleProjects.length > initialCount;

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'fullstack', name: 'Fullstack' },
    { id: 'other', name: 'Others' },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setAnimate(false);
    setShowAll(false);
    
    setTimeout(() => {
      if (selectedCategory === 'all') {
        setVisibleProjects(projects);
      } else {
        const filtered = projects.filter(project => project.category === selectedCategory);
        setVisibleProjects(filtered);
      }
      setAnimate(true);
    }, 300);
  }, [selectedCategory]);

  const toggleShowAll = () => {
    // First scroll back to the projects section to make transition visible
    if (showAll && projectsContainerRef.current) {
      const offset = projectsContainerRef.current.offsetTop - 100; // 100px offset for padding
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    }

    // Delay state change to allow scroll to complete
    setTimeout(() => {
      setShowAll(!showAll);
    }, showAll ? 500 : 0);
  };

  return (
    <section id="projects" className="section bg-secondary/30" data-aos="fade-up">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-3">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills and experience in software development.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-2" data-aos="fade-up">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/70'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div 
          ref={projectsContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ease-in-out"
          style={{ 
            maxHeight: showAll ? '5000px' : `${Math.ceil(initialCount / 3) * 500}px`,
            overflow: 'hidden'
          }}
        >
          {visibleProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card rounded-lg overflow-hidden bg-card shadow-md border border-border transition-all duration-500 ${
                animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              data-aos="fade-up"
              data-aos-delay={index % 3 * 100}
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center space-x-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Show More/Less Button */}
        {showButton && (
          <div className="mt-10 text-center" data-aos="fade-up">
            <button
              onClick={toggleShowAll}
              className="px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium transition-all hover:bg-primary/90 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 inline-flex items-center gap-2"
            >
              {showAll ? (
                <>
                  <span>Show Less</span>
                  <ChevronUp size={18} />
                </>
              ) : (
                <>
                  <span>Show More</span>
                  <ChevronDown size={18} />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
