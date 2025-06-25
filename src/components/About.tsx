
const About = () => {
  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              About Me
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate frontend developer based in Sweden, recently graduated from 
                <span className="text-primary font-semibold"> Hyper Island</span> where I honed 
                my skills in modern web development and user experience design. My journey into 
                tech has been driven by a love for creating digital solutions that make a real 
                difference in people's lives.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in <span className="text-primary font-semibold">React</span>, 
                <span className="text-primary font-semibold"> Redux Toolkit</span>, and 
                <span className="text-primary font-semibold"> TypeScript</span>, crafting 
                responsive and accessible web applications with <span className="text-primary font-semibold">Tailwind CSS</span> 
                and <span className="text-primary font-semibold">Shadcn/UI</span>. Currently, 
                I'm expanding my expertise with <span className="text-primary font-semibold">Next.js</span> 
                to build full-stack applications that deliver exceptional user experiences.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring Sweden's beautiful landscapes, 
                contributing to open-source projects, or learning about the latest developments 
                in web technologies. I believe in continuous learning and staying at the forefront 
                of modern development practices.
              </p>
            </div>

            <div className="space-y-8 animate-fade-in-up">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Technical Skills</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'React', 'TypeScript', 'Redux Toolkit', 'Next.js',
                    'Tailwind CSS', 'Shadcn/UI', 'JavaScript', 'Git/GitHub'
                  ].map((skill, index) => (
                    <div 
                      key={skill}
                      className="bg-secondary/50 px-3 py-2 rounded-lg text-sm font-medium text-center hover:bg-secondary transition-colors"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Education</h3>
                <div className="bg-secondary/30 p-4 rounded-lg border border-border">
                  <h4 className="font-semibold text-primary">Frontend Developer Program</h4>
                  <p className="text-muted-foreground">Hyper Island, Sweden</p>
                  <p className="text-sm text-muted-foreground mt-1">2023 - 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
