const About = () => {
  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              About Me
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left column – text */}
            <div className="space-y-7 animate-fade-in-up">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I&apos;m a frontend developer based in Stockholm, currently
                studying at
                <span className="text-primary font-semibold"> Hyper Island </span>
                and interning as a frontend developer at
                <span className="text-primary font-semibold"> Swirl</span>. At
                Swirl, I contribute to
                <a
                  href="https://usewill.com.br/en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary ml-1"
                >
                  Will
                </a>
                , a financial health web app used by real customers, which has
                given me experience with production deployments and
                cross‑functional collaboration.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I enjoy turning ideas into fast, accessible interfaces using
                <span className="text-primary font-semibold"> React</span>,
                <span className="text-primary font-semibold"> Next.js</span>,
                <span className="text-primary font-semibold"> TypeScript</span>,
                and modern UI libraries like
                <span className="text-primary font-semibold"> Tailwind CSS </span>
                and
                <span className="text-primary font-semibold"> shadcn/ui</span>.
                I&apos;ve also built full‑stack projects with the
                <span className="text-primary font-semibold"> MERN stack </span>
                and
                <span className="text-primary font-semibold">
                  {" "}
                  React + Strapi
                </span>
                , and I&apos;m beginning to explore mobile UI development with
                <span className="text-primary font-semibold"> Flutter</span>.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Right now, I&apos;m looking for junior frontend roles where I
                can keep growing, ship features in production, and learn from a
                supportive team. Outside of coding, I enjoy spending time with
                my family and staying curious about new tools, patterns, and web
                technologies.
              </p>
            </div>

            {/* Right column – skills + internships */}
            <div className="space-y-8 animate-fade-in-up">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  Profile
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Based in Stockholm, open to hybrid and remote‑friendly junior
                  frontend roles.
                </p>

                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Technical Skills
                </h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {[
                    "React",
                    "Next.js",
                    "TypeScript",
                    "JavaScript",
                    "Redux Toolkit",
                    "Tailwind CSS",
                    "shadcn/ui",
                    "MERN stack",
                    "Strapi",
                    "Git & GitHub",
                    "Flutter (beginner)",
                  ].map((skill, index) => (
                    <div
                      key={skill}
                      className="bg-secondary/50 px-3 py-2 rounded-lg font-medium text-center hover:bg-secondary transition-colors"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">
                  Internships
                </h3>

                <div className="bg-secondary/30 p-4 rounded-lg border border-border">
                  <h4 className="font-semibold text-primary">
                    Frontend Developer Intern
                  </h4>
                  <p className="text-muted-foreground">Swirl, Stockholm</p>
                  <p className="text-sm text-muted-foreground">
                    September 2025 – present
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Contributing to Will, a financial health web app built with
                    Next.js, Neon, and Vercel, focusing on UI implementation and
                    collaboration with the design and backend teams. 
                  </p>
                </div>

                <div className="bg-secondary/30 p-4 rounded-lg border border-border">
                  <h4 className="font-semibold text-primary">
                    Frontend Developer Intern
                  </h4>
                  <p className="text-muted-foreground">YOICE, Stockholm</p>
                  <p className="text-sm text-muted-foreground">
                    July 2025 – September 2025
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Working on developing AI-enhanced features and improving the user interface of our content generation tool.
                  </p>
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
