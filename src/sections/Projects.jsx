import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    title: "AI Resume Analyzer (ATS Optimization Tool)",
    description:
      "A serverless AI-powered resume analyzer that evaluates resumes against job descriptions and provides ATS compatibility insights. The platform processes uploaded PDF resumes, extracts content, and analyzes tone, structure, and keyword alignment with job requirements. It generates an ATS score out of 100 and delivers actionable suggestions to improve resume effectiveness. Built with React, TypeScript, Tailwind CSS, and Zustand for state management, while Puter.js handles authentication, cloud storage, and AI processing without requiring traditional backend infrastructure.",
    image: "./projects/resume-analyzer.png",
    tags: ["React", "TypeScript", "Tailwind", "Zustand", "Puter.js", "AI"],
    link: "https://resume-analyzer-three-liard.vercel.app/",
    github: "https://github.com/gaudakash/Resume-analyzer.git",
  },
  {
    title: "Role-Based Task Management System",
    description:
      "A full-stack task management application featuring JWT-based authentication, role-based access control, and complete CRUD operations. Built with React and Vite for a fast, responsive frontend, while Django REST Framework handles secure API routing and business logic. Implemented a relational PostgreSQL database to support personal and assigned tasks, enforcing strict permission boundaries where assigners and assignees have distinct editing rights.",
    image: "./projects/task-manager.jpeg",
    tags: [
      "React",
      "Django",
      "Python",
      "PostgreSQL",
      "REST API",
      "JWT"
    ],
    link: "https://task-management-system-inky.vercel.app/",
    github: "https://github.com/gaudakash/task-management-system",
  },
  {
    title: "Full Stack Tinder Clone",
    description:
      "A full-stack dating application inspired by Tinder featuring swipe-based interactions, real-time messaging, and secure profile management. Built with Next.js and Tailwind CSS for a fast, responsive frontend, while Supabase handles authentication, PostgreSQL database operations, and media storage. Implemented automated matching logic using database triggers and integrated Stream SDK for real-time chat and video calling between matched users.",
    image: "./projects/tinder-clone.png",
    tags: [
      "Next.js",
      "React",
      "Tailwind",
      "Supabase",
      "PostgreSQL",
      "Stream Chat",
    ],
    link: "https://tinder-app-amber.vercel.app/",
    github: "https://github.com/gaudakash/Tinder-app.git",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <a
            href="https://github.com/gaudakash?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AnimatedBorderButton>
              View All Projects
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};
