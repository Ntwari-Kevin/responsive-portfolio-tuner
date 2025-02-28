
const About = () => {
  return (
    <section id="about" className="section" data-aos="fade-up">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div data-aos="fade-right" data-aos-delay="100">
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Experience badge */}
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-lg px-4 py-2 shadow-lg">
                <span className="block text-xs sm:text-sm font-medium">Experience</span>
                <span className="block text-xl sm:text-2xl font-bold">5+ Years</span>
              </div>
            </div>
          </div>
          
          <div data-aos="fade-left" data-aos-delay="200" className="mt-12 lg:mt-0">
            <div>
              <h2 className="mb-3 text-center lg:text-left">About Me</h2>
              <p className="text-muted-foreground mb-4 text-sm sm:text-base md:text-lg">
                I'm a passionate software developer with expertise in building responsive and
                interactive web applications. With 5+ years of experience in the industry,
                I've worked on a variety of projects ranging from small business websites to
                large-scale enterprise applications.
              </p>
              <p className="text-muted-foreground mb-4 text-sm sm:text-base md:text-lg">
                My goal is to create elegant, efficient, and user-friendly digital experiences
                that solve real-world problems. I'm constantly learning and exploring new technologies
                to stay at the forefront of web development.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
                When I'm not coding, you can find me exploring new hiking trails, reading tech blogs,
                or experimenting with new recipes in the kitchen. I believe in continuous learning and
                growth, both professionally and personally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
