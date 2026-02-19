import React from "react";
import { Code2, ShieldCheck, Database, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack MERN Development",
    description:
      "Building scalable full-stack applications using React, Node.js, Express, and MongoDB with clean architecture and reusable components.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Authentication & Authorization",
    description:
      "Implementing JWT-secured private routes, Firebase authentication, and role-based dashboards for secure and reliable user experiences.",
  },
  {
    icon: Database,
    title: "REST APIs & Database Design",
    description:
      "Designing robust REST APIs and managing MongoDB CRUD operations with optimized queries and structured data models.",
  },
  {
    icon: Rocket,
    title: "Performance & Modern UI",
    description:
      "Creating responsive, high-performance interfaces using Tailwind CSS, React Router, and modern state management tools.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200 ">
              <p>
                I’m a passionate MERN Stack Developer dedicated to building
                scalable and user-centric web applications that solve real-world
                problems. My journey into development started with curiosity
                about how modern web platforms work and has grown into hands-on
                experience creating full-stack solutions using React, Node.js,
                Express, and MongoDB.
              </p>

              <p>
                I specialize in developing secure authentication systems,
                role-based dashboards, and RESTful APIs while crafting
                responsive and modern interfaces with Tailwind CSS. Through
                projects like blood donation and community reporting platforms,
                I’ve gained practical experience implementing payment
                integrations, data-driven features, and performance-focused UI.
              </p>

              <p>
                When I’m not coding, I enjoy exploring emerging technologies,
                improving my development workflow, and continuously learning to
                become a better engineer and collaborator.
              </p>
            </div>

            <div className="glass rounded-2xl p-4 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium itali text-foreground ">
                "My mission is to create scalable and user-focused web
                applications that are not only functional but truly impactful —
                solutions users trust and developers can confidently maintain."
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="grid sm:grid-cols-2 gap-6 ">
            {highlights.map((item, i) => (
              <div key={i} className="glass p-6 rounded-2xl group animate-fade-in "
              style={{animationDelay : `${(i + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex justify-center items-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
