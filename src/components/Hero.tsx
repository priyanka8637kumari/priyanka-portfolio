import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Mail, ArrowDown, Linkedin } from "lucide-react";
import { BackgroundBeams } from "./ui/background-beams";
import { useTranslation, Trans } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation('hero');
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
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-blue-500/5 to-purple-600/5 animate-gradient-shift bg-[length:200%_200%]" />
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-32 right-16 w-40 h-40 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-purple-600/10 to-primary/10 rounded-full blur-3xl animate-pulse delay-2000" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Status badge */}
          <div className="flex justify-center mb-6">
            <Badge
              variant="outline"
              className="px-4 py-2 text-sm font-medium border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
              {t('badge')}
            </Badge>
          </div>

          {/* Main heading */}
          <div className="space-y-4 mb-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              {t('greeting')}{" "}
              <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">
                {t('name')}
              </span>
            </h1>

            <p className="text-sm md:text-lg text-muted-foreground font-light leading-relaxed max-w-4xl mx-auto">
              <Trans
                i18nKey="intro"
                ns="hero"
                components={{
                  highlight: <span className="text-primary font-medium" />,
                  link: (
                    <a
                      href="https://usewill.com.br/en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-medium underline underline-offset-4 decoration-primary/40 hover:decoration-primary"
                    />
                  ),
                }}
              />
            </p>
          </div>

          {/* Current focus card */}
          <div className="mb-8 max-w-2xl mx-auto">
            <div className="bg-card/60 backdrop-blur-sm border border-border/60 rounded-lg p-6 hover:bg-card/80 hover:border-border/80 transition-all duration-300 shadow-md hover:shadow-lg">
              <h3 className="text-lg font-semibold mb-3 text-primary">
                {t('focusTitle')}
              </h3>
              <p className="text-base text-foreground leading-relaxed">
                {t('focusDescription')}
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="text-base px-6 py-3 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {t('buttons.viewWork')}
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToContact}
              className="text-base px-6 py-3 border-primary/20 hover:bg-primary/5 transition-all duration-300"
            >
              <Mail className="mr-2 h-4 w-4" />
              {t('buttons.getInTouch')}
            </Button>
          </div>

          {/* Short availability line */}
          {/* <p className="mb-8 text-sm text-muted-foreground">
            Actively looking for junior frontend roles and internships in
            Stockholm and remote-friendly teams[web:0].
          </p> */}

          {/* Social links */}
          <div className="flex justify-center items-center gap-6">
            <a
              href="https://github.com/priyanka8637kumari"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted/30 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label={t('socialLinks.github')}
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="mailto:prisri0801@gmail.com"
              className="p-3 rounded-full bg-muted/30 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label={t('socialLinks.email')}
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/priyanka-kumari-995901274/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted/30 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label={t('socialLinks.linkedin')}
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center bg-background/50 backdrop-blur-sm">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>

      <BackgroundBeams />
    </section>
  );
};

export default Hero;
