import { ArrowUpRight, Github, Monitor, Server } from "lucide-react";
import React from "react";
import { AnimatedBorderButton } from "../Components/AnimatedBorderButton";

const projects = [
  {
    title: "RedPulseBD - Blood Donation Platform",
    description:
      "A full-stack blood donation management system featuring role-based dashboards, secure authentication, donor search, donation request management, and Stripe payment integration.",
    image: "/Projects/RPBD.JPG",
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase",
      "JWT",
      "Stripe",
      "Tailwind CSS",
    ],
    link: "https://redpulse-bd-97fc6.web.app/",
    github: {
      client: "https://github.com/AsadChowdhury020/RedPusle-BD-Client", // client repo
      server: "https://github.com/AsadChowdhury020/RedPusle-BD-Server", // server repo
    },
  },
  {
    title: "UrbanCare - Issue Reporting Portal",
    description:
      "A community-driven platform for reporting environmental issues, tracking resolutions, managing contributions, and downloading payment receipts with secure authentication and responsive UI.",
    image: "/Projects/UC.JPG",
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase Auth",
      "Stripe",
      "Axios",
      "Tailwind CSS",
    ],
    link: "https://elaborate-florentine-d629eb.netlify.app/",
    github: {
      client: "https://github.com/AsadChowdhury020/UrbanCare-Client", // client repo
      server: "https://github.com/AsadChowdhury020/UrbanCare-Server", // server repo
    },
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in ">Featured Work</span>
            <h2 className="text-4xl md:text-5xl font-bold bt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">Projects that
                <span className="font-serif italic font-normal text-white"> make an impact.</span>
            </h2>

            <p className="text-muted-foreground animate-fade-in animation-delay-200">A showcase of my recent projects, ranging from advanced web applications to creative solutions addressing real-world challenges.</p>
        </div>
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 ">
            {projects.map((project, i) => (
                <div key={i} className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                style={{animationDelay : `${(i + 1) * 100}ms`}}
                >
                    {/* Image */}
                    <div className="relative overflow-hidden aspect-video ">
                        <img src={project.image} alt={project.title} className="w-full h-full p-5 rounded-2xl object-cover transition-transform duration-700 group-hover:scale-110 " />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

                        {/* Overlay links */}
                        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                            <a href={project.link} target="_blank" className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                <ArrowUpRight className="w-5 h-5"/>
                            </a>
                            <a href={project.github.client} target="_blank" className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                <Monitor className="w-5 h-5" />
                            </a>
                            
                            <a href={project.github.server} target="_blank" className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                <Server className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4 ">
                        <div className="flex items-center justify-between ">
                            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                        </div>
                        <p className="text-muted-foreground text-sm">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, i) => (
                                <span key={i} className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* View all call to action */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
            <AnimatedBorderButton className="">
                View All Projects
                < ArrowUpRight className="h-5 w-5" />
            </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};

export default Projects;
