
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
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="mb-8 sm:mb-12 text-center">
          <h2 className="mb-3">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            A collection of projects that showcase my skills and experience in software development.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-8 sm:mb-12 gap-2" data-aos="fade-up">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 transition-all duration-500 ease-in-out"
          style={{ 
            maxHeight: showAll ? '5000px' : `${Math.ceil(initialCount / (isMobile ? 1 : (window.innerWidth < 1024 ? 2 : 3))) * 500}px`,
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
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-xs sm:text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs sm:text-sm font-medium transition-colors hover:text-primary"
                  >
                    <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs sm:text-sm font-medium transition-colors hover:text-primary"
                  >
                    <Github size={14} className="sm:w-4 sm:h-4" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Show More/Less Button */}
        {showButton && (
          <div className="mt-8 sm:mt-10 text-center" data-aos="fade-up">
            <button
              onClick={toggleShowAll}
              className="px-4 py-2 sm:px-6 sm:py-3 rounded-md bg-primary text-primary-foreground text-xs sm:text-sm font-medium transition-all hover:bg-primary/90 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 inline-flex items-center gap-2"
            >
              {showAll ? (
                <>
                  <span>Show Less</span>
                  <ChevronUp size={16} className="sm:w-5 sm:h-5" />
                </>
              ) : (
                <>
                  <span>Show More</span>
                  <ChevronDown size={16} className="sm:w-5 sm:h-5" />
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
