
import { Calendar, Briefcase, Award, MapPin } from 'lucide-react';

const Experience = () => {
  const experienceData = [
    {
      role: "Senior Software Engineer",
      company: "TechGiant Inc.",
      location: "San Francisco, CA",
      duration: "2021 - Present",
      description: "Lead developer for the company's flagship product, managing a team of 5 engineers. Implemented CI/CD pipelines that reduced deployment time by 40%. Redesigned the architecture to improve scalability and performance.",
      achievements: ["Promoted within first year", "Employee of the Quarter", "Reduced page load time by 60%"]
    },
    {
      role: "Full Stack Developer",
      company: "Innovative Solutions",
      location: "Seattle, WA",
      duration: "2018 - 2021",
      description: "Developed and maintained multiple web applications using React, Node.js, and AWS. Collaborated with design and product teams to implement new features and improve user experience.",
      achievements: ["Led transition to TypeScript", "Implemented real-time analytics dashboard", "Mentored junior developers"]
    },
    {
      role: "Software Engineering Intern",
      company: "StartUpHub",
      location: "Palo Alto, CA",
      duration: "Summer 2017",
      description: "Assisted in developing a mobile application using React Native. Participated in code reviews and agile development processes.",
      achievements: ["Developed key user authentication feature", "Created 10+ reusable components", "Received return offer"]
    }
  ];

  return (
    <section id="experience" className="section bg-secondary/30">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="mb-12 text-center" data-aos="fade-up">
          <h2 className="mb-3">Work Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and accomplishments
          </p>
        </div>
        
        <div className="space-y-8 sm:space-y-10">
          {experienceData.map((item, index) => (
            <div 
              key={index} 
              className="relative pl-6 sm:pl-8 border-l-2 border-primary/30 ml-2 sm:ml-4"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Timeline dot */}
              <div className="absolute w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded-full -left-3 top-0 flex items-center justify-center">
                <Briefcase className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary-foreground" />
              </div>
              
              <div className="bg-card rounded-lg p-4 sm:p-6 shadow-md border border-border hover:shadow-lg transition-all">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-lg sm:text-xl font-bold">{item.role}</h3>
                  <div className="flex items-center text-xs sm:text-sm text-muted-foreground mt-2 md:mt-0">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" /> 
                    {item.duration}
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center text-primary font-medium mb-1 text-sm sm:text-base">
                    {item.company}
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1" /> 
                    {item.location}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 text-xs sm:text-sm">
                  {item.description}
                </p>
                
                {item.achievements.length > 0 && (
                  <div>
                    <h4 className="font-medium mb-2 flex items-center text-xs sm:text-sm">
                      <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-primary" /> 
                      Key Achievements
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-muted-foreground ml-1">
                      {item.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
