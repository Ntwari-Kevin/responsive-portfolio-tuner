
import { Code, Server, Layout, Cpu, Database, GitBranch, Globe, Zap, Terminal } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      icon: <Layout className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />,
      skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux', 'GSAP', 'Framer Motion']
    },
    {
      category: 'Backend',
      icon: <Server className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />,
      skills: ['Node.js', 'Express', 'Python', 'Django', 'RESTful APIs', 'GraphQL', 'Spring Boot', 'Flask']
    },
    {
      category: 'Database',
      icon: <Database className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />,
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Redis', 'Supabase', 'Prisma']
    },
    {
      category: 'DevOps',
      icon: <GitBranch className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />,
      skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'GitHub Actions', 'Vercel', 'Netlify', 'Heroku']
    },
    {
      category: 'Mobile',
      icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />,
      skills: ['React Native', 'Flutter', 'Ionic', 'PWA', 'App Store Optimization']
    },
    {
      category: 'Tools',
      icon: <Cpu className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />,
      skills: ['VS Code', 'Git', 'Postman', 'Jira', 'Slack', 'Notion', 'Figma', 'Lighthouse']
    },
    {
      category: 'Languages',
      icon: <Terminal className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />,
      skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'HTML', 'CSS', 'SQL', 'Bash']
    }
  ];

  return (
    <section id="skills" className="section bg-secondary/30" data-aos="fade-up">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="mb-8 sm:mb-12 text-center">
          <h2 className="mb-3">My Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Expertise and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-card rounded-lg p-4 sm:p-6 shadow-md border border-border transition-all hover:shadow-lg hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-base sm:text-xl font-bold ml-2 sm:ml-3">{category.category}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
