import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Mail, ArrowDown, Linkedin, MapPin, Calendar } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Modern Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-blue-500/5 to-purple-600/5 animate-gradient-shift bg-[length:200%_200%]" />
      </div>

      {/* Floating Elements - More Subtle */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-32 right-16 w-40 h-40 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-purple-600/10 to-primary/10 rounded-full blur-3xl animate-pulse delay-2000" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Status Badge */}
          <div className="flex justify-center mb-6">
            <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
              Available for Internship Opportunities
            </Badge>
          </div>

          {/* Main Heading */}
          <div className="space-y-4 mb-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">
                Priyanka
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-4xl mx-auto">
              Stockholm-based developer studying at Hyper Island. I specialize in building modern, user-focused web applications with{" "}
              <span className="text-primary font-medium">React</span>,{" "}
              <span className="text-primary font-medium">Next.js</span>,{" "}
              <span className="text-primary font-medium">TypeScript</span>, and{" "}
              <span className="text-primary font-medium">AI-Integrated Solutions</span>.
            </p>
          </div>

          {/* Current Focus Card */}
          <div className="mb-8 max-w-2xl mx-auto">
            <div className="bg-card/60 backdrop-blur-sm border border-border/60 rounded-lg p-6 hover:bg-card/80 hover:border-border/80 transition-all duration-300 shadow-md hover:shadow-lg">
              <h3 className="text-lg font-semibold mb-3 text-primary">Current Focus</h3>
              <p className="text-base text-foreground leading-relaxed">
                Exploring AI-powered automation, secure authentication systems, and turning cutting-edge technologies into real, usable products.
              </p>
            </div>
          </div>

         
        
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="text-base px-6 py-3 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToContact}
              className="text-base px-6 py-3 border-primary/20 hover:bg-primary/5 transition-all duration-300"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
          </div>

          {/* Social Links - Improved Layout */}
          <div className="flex justify-center items-center gap-6">
            <a
              href="https://github.com/priyanka8637kumari"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted/30 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="mailto:prisri0801@gmail.com"
              className="p-3 rounded-full bg-muted/30 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label="Email Contact"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/priyanka-kumari-995901274/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted/30 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center bg-background/50 backdrop-blur-sm">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
