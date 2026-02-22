import React from "react";
import { Monitor, Server, Database, Wrench } from "lucide-react";

const skillGroups = [
  {
    title: "Frontend",
    icon: Monitor,
    skills: [
      "React.js",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "DaisyUI",
      "React Router",
      "React Hook Form",
      "TanStack Query",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      "Node.js",
      "Express.js",
      "REST API Development",
      "JWT Authentication",
    ],
  },
  {
    title: "Database & Auth",
    icon: Database,
    skills: ["MongoDB", "Firebase Authentication", "CRUD Operations"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git & GitHub", "Vercel", "Netlify", "Stripe", "Axios", "VS Code"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Technical Expertise
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Skills that power{" "}
            <span className="font-serif italic font-normal text-white">
              my development.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A combination of frontend craftsmanship, backend engineering, and
            modern development tools that enable me to build scalable full-stack
            applications.
          </p>
        </div>

        {/* Skill cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, i) => (
            <div
              key={i}
              className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${(i + 1) * 120}ms` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex justify-center items-center mb-4">
                <group.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="text-lg font-semibold mb-4">{group.title}</h3>

              {/* Skills list */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;