import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ArrowUp } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution built with React, Redux Toolkit, and TypeScript. Features include product catalog, shopping cart, user authentication, and payment integration.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Redux Toolkit", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/priyanka/ecommerce-platform",
    live: "https://ecommerce-demo.netlify.app",
    featured: true
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "TypeScript", "Firebase", "Shadcn/UI"],
    github: "https://github.com/priyanka/task-manager",
    live: "https://task-manager-demo.netlify.app",
    featured: true
  },
  {
    title: "Weather Dashboard",
    description: "An interactive weather dashboard with location-based forecasts, beautiful visualizations, and responsive design.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "API Integration", "Chart.js", "CSS Modules"],
    github: "https://github.com/priyanka/weather-dashboard",
    live: "https://weather-dashboard-demo.netlify.app",
    featured: false
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing projects and skills with modern design principles and smooth animations.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "MDX"],
    github: "https://github.com/priyanka/portfolio",
    live: "https://priyanka-portfolio.netlify.app",
    featured: false
  },
  {
    title: "Recipe Finder App",
    description: "A recipe discovery application with search functionality, favorites system, and detailed cooking instructions.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Context API", "REST API", "Responsive Design"],
    github: "https://github.com/priyanka/recipe-finder",
    live: "https://recipe-finder-demo.netlify.app",
    featured: false
  },
  {
    title: "Chat Application",
    description: "Real-time messaging application with group chats, file sharing, and user presence indicators.",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Socket.io", "Node.js", "MongoDB"],
    github: "https://github.com/priyanka/chat-app",
    live: "https://chat-app-demo.netlify.app",
    featured: false
  }
];

const Projects = () => {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, highlighting my expertise in modern web development 
            and user interface design.
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
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ArrowUp className="mr-2 h-4 w-4 rotate-45" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="flex-1">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
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
          <h3 className="text-2xl font-bold mb-8 text-center">Other Projects</h3>
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
                    <Button size="sm" variant="outline" asChild className="flex-1">
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ArrowUp className="mr-1 h-3 w-3 rotate-45" />
                        Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild className="flex-1">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
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
            <a href="https://github.com/priyanka" target="_blank" rel="noopener noreferrer">
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
