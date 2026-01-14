import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ArrowUp } from "lucide-react";
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation('projects');
  
  const projects = [
    {
      key: "haus",
      image: "images/will.png",
      tags: ["Next.js", "TypeScript", "Neon", "Vercel"],
      github: "https://github.com/veuuapp/Web-MVP",
      live: "https://www.hausin.app/en",
      featured: true,
    },
    {
      key: "autothread",
      image: "images/autothread.png",
      tags: ["Next.js", "Tailwind CSS", "NextAuth", "Framer Motion", "Google Gemini"],
      github: "https://github.com/priyanka8637kumari/Auto-thread-generator",
      live: "https://auto-thread-generator.vercel.app/",
      featured: true,
    },
    {
      key: "musicSchool",
      image: "images/music-app.png",
      tags: ["Next.js", "Acertainity UI", "Tailwind CSS"],
      github: "https://github.com/priyanka8637kumari/Music-School-App",
      live: "https://music-school-app06.vercel.app/",
      featured: true,
    },
    {
      key: "moneymate",
      image: "images/moneymate.png",
      tags: ["React", "Express", "MongoDB"],
      github: "https://github.com/priyanka8637kumari/Expense-Tracker-MERN-",
      live: "https://moneymate4u.netlify.app/",
      featured: false,
    },
    {
      key: "anonymousInbox",
      image: "images/Anonymous-Inbox.png",
      tags: ["Next.js", "MongoDB", "NextAuth", "Resend"],
      github: "https://github.com/priyanka8637kumari/Anonymous-Inbox",
      live: "https://anonymous-inbox.netlify.app/",
      featured: false,
    },
    {
      key: "hyperIsland",
      image: "images/webXR.png",
      tags: ["A-Frame", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/priyanka8637kumari/HyperIsalnd-Evolution",
      live: "https://hievolution.netlify.app/",
      featured: false,
    },
    {
      key: "todoApp",
      image: "images/Todo.png",
      tags: ["React", "Redux Toolkit", "Tailwind CSS"],
      github: "https://github.com/priyanka8637kumari/Todo-App-with-Redux-Toolkit",
      live: "https://todosreduxtoolkit.netlify.app/",
      featured: false,
    },
    {
      key: "cocktailApp",
      image: "images/recipes.png",
      tags: ["React", "Context API", "API", "CSS"],
      github: "https://github.com/priyanka8637kumari/Cocktail-Recipes-App",
      live: "https://cocktail-kungen.netlify.app/",
      featured: false,
    },
    {
      key: "ticTacToe",
      image: "images/tictactoe.png",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/priyanka8637kumari/Tic-Tac-Toe-Project",
      live: "https://bucolic-crisp-8c9366.netlify.app/",
      featured: false,
    },
  ];
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            {t('title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6" />
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card
              key={project.key}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-border bg-card/50 backdrop-blur-sm animate-scale-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={t(`projectsList.${project.key}.title`)}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {t(`projectsList.${project.key}.title`)}
                </CardTitle>
                <CardDescription className="text-base">
                  {t(`projectsList.${project.key}.description`)}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <Button size="sm" asChild className="flex-1">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ArrowUp className="mr-2 h-4 w-4 rotate-45" />
                      {t('buttons.liveDemo')}
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex-1"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      {t('buttons.code')}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">
            {t('otherProjects')}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card
                key={project.key}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border bg-card/30 backdrop-blur-sm animate-fade-in-up"
                style={{ animationDelay: `${(index + 2) * 150}ms` }}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={t(`projectsList.${project.key}.title`)}
                    className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {t(`projectsList.${project.key}.title`)}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {t(`projectsList.${project.key}.description`)}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      className="flex-1"
                    >
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ArrowUp className="mr-1 h-3 w-3 rotate-45" />
                        {t('buttons.demo')}
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      className="flex-1"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-1 h-3 w-3" />
                        {t('buttons.code')}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://github.com/priyanka8637kumari"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              {t('buttons.viewAllGithub')}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
