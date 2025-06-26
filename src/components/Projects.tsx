import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ArrowUp } from "lucide-react";

const projects = [
  {
    title: "Music School App",
    description:
      "A modern and basic music academy website built with Nextjs, Acertainity UI and Tailwind CSS. Features include beautiful visualizations, smooth animations and responsive design.",
    image: "images/music-app.png",
    tags: ["Next.js", "Acertainity UI", "Tailwind CSS"],
    github: "https://github.com/priyanka8637kumari/Music-School-App",
    live: "https://music-school-app06.vercel.app/",
    featured: true,
  },
  {
    title: "MoneyMate App",
    description:
      "A full-stack expense tracker application built with the MERN stack. Features include secure login and CRUD implementation of transactions - all in a clean, intuitive interface.",
    image: "images/moneymate.png",
    tags: ["React", "JavaScript", "Tailwind CSS", "MongoDB"],
    github: "https://github.com/priyanka8637kumari/Expense-Tracker-MERN-",
    live: "https://moneymate4u.netlify.app/",
    featured: true,
  },
  {
    title: "Hyper Island Evolution",
    description:
      "A browser-based WebXR experience built using A-Frame that immerses the user in a series of 3D models and custom VR interactions.",
    image: "images/webXR.png",
    tags: ["A-frame", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/priyanka8637kumari/HyperIsalnd-Evolution",
    live: "https://hievolution.netlify.app/",
    featured: false,
  },
  {
    title: "Todo App with Redux Toolkit",
    description:
      "A simple yet functional To-Do List App using Redux Toolkit to understand state management, slices, and async actions. .",
    image: "images/Todo.png",
    tags: ["React", "Redux Toolkit", "Tailwind CSS"],
    github: "https://github.com/priyanka8637kumari/Todo-App-with-Redux-Toolkit",
    live: "https://todosreduxtoolkit.netlify.app/",
    featured: false,
  },
  {
    title: "Cocktail Kungen App",
    description:
      "A web application that allows users to explore a collection of cocktail recipes, built using TheCocktailDB API to fetch cocktail data dynamically.",
    image:
      "images/recipes.png",
    tags: ["React", "Context API", "API", "CSS"],
    github: "https://github.com/priyanka8637kumari/Cocktail-Recipes-App",
    live: "https://cocktail-kungen.netlify.app/",
    featured: false,
  },
  {
    title: "Tic Tac Toe Game",
    description:
      "A classic Tic Tac Toe game built with HTML, CSS, and JavaScript. Features include a simple UI, game logic.",
    image:
      "images/tictactoe.png",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/priyanka8637kumari/Tic-Tac-Toe-Project",
    live: "https://bucolic-crisp-8c9366.netlify.app/",
    featured: false,
  },
];

const Projects = () => {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, highlighting my expertise in modern
            web development and user interface design.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card
              key={project.title}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-border bg-card/50 backdrop-blur-sm animate-scale-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {project.description}
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
                      Live Demo
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
                      Code
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
            Other Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card
                key={project.title}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border bg-card/30 backdrop-blur-sm animate-fade-in-up"
                style={{ animationDelay: `${(index + 2) * 150}ms` }}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {project.description}
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
                        Demo
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
                        Code
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
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
