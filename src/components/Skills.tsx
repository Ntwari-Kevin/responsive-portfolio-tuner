
import { Code, Server, Layout, Cpu, Database, GitBranch, Globe, Zap, Terminal, Figma } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      icon: <Layout className="w-8 h-8 text-primary" />,
      skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux', 'GSAP', 'Framer Motion']
    },
    {
      category: 'Backend',
      icon: <Server className="w-8 h-8 text-primary" />,
      skills: ['Node.js', 'Express', 'Python', 'Django', 'RESTful APIs', 'GraphQL', 'Spring Boot', 'Flask']
    },
    {
      category: 'Database',
      icon: <Database className="w-8 h-8 text-primary" />,
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Redis', 'Supabase', 'Prisma']
    },
    {
      category: 'DevOps',
      icon: <GitBranch className="w-8 h-8 text-primary" />,
      skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'GitHub Actions', 'Vercel', 'Netlify', 'Heroku']
    },
    {
      category: 'Mobile',
      icon: <Zap className="w-8 h-8 text-primary" />,
      skills: ['React Native', 'Flutter', 'Ionic', 'PWA', 'App Store Optimization']
    },
    {
      category: 'Tools',
      icon: <Cpu className="w-8 h-8 text-primary" />,
      skills: ['VS Code', 'Git', 'Postman', 'Jira', 'Slack', 'Notion', 'Figma', 'Lighthouse']
    },
    {
      category: 'Languages',
      icon: <Terminal className="w-8 h-8 text-primary" />,
      skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'HTML', 'CSS', 'SQL', 'Bash']
    },
    {
      category: 'Design',
      icon: <Figma className="w-8 h-8 text-primary" />,
      skills: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'UI/UX Design', 'Wireframing', 'Prototyping']
    }
  ];

  return (
    <section id="skills" className="section bg-secondary/30">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-3">My Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Expertise and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-card rounded-lg p-6 shadow-md border border-border transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-bold ml-3">{category.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 text-sm font-medium rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
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
