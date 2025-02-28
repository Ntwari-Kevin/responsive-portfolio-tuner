
import { Calendar, GraduationCap, Award, MapPin } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      location: "Stanford, CA",
      duration: "2018 - 2020",
      description: "Specialized in Artificial Intelligence and Machine Learning. Graduated with honors and completed a thesis on neural network optimization techniques.",
      achievements: ["Dean's List", "Research Assistant", "Teaching Assistant for Data Structures and Algorithms"]
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "University of California, Berkeley",
      location: "Berkeley, CA",
      duration: "2014 - 2018",
      description: "Focused on software development methodologies and systems design. Participated in multiple hackathons and coding competitions.",
      achievements: ["Cum Laude", "First Place in University Hackathon", "Software Engineering Club President"]
    },
    {
      degree: "High School Diploma",
      institution: "Tech Academy High School",
      location: "San Francisco, CA",
      duration: "2010 - 2014",
      description: "Advanced placement courses in Computer Science, Mathematics, and Physics.",
      achievements: ["Valedictorian", "Programming Competition Winner", "Math Team Captain"]
    }
  ];

  return (
    <section id="education" className="section">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="mb-12 text-center" data-aos="fade-up">
          <h2 className="mb-3">Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey and qualifications
          </p>
        </div>
        
        <div className="space-y-8 sm:space-y-10">
          {educationData.map((item, index) => (
            <div 
              key={index} 
              className="relative pl-6 sm:pl-8 border-l-2 border-primary/30 ml-2 sm:ml-4"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Timeline dot */}
              <div className="absolute w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded-full -left-3 top-0 flex items-center justify-center">
                <GraduationCap className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary-foreground" />
              </div>
              
              <div className="bg-card rounded-lg p-4 sm:p-6 shadow-md border border-border hover:shadow-lg transition-all">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-lg sm:text-xl font-bold">{item.degree}</h3>
                  <div className="flex items-center text-xs sm:text-sm text-muted-foreground mt-2 md:mt-0">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" /> 
                    {item.duration}
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center text-primary font-medium mb-1 text-sm sm:text-base">
                    {item.institution}
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
                      Achievements
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

export default Education;
