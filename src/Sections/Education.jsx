import React from "react";
import { GraduationCap } from "lucide-react";

const educations = [
  {
    period: "2020 - 2025",
    degree: "Bachelor of Science in Computer Science & Engineering",
    institution: "Ahsanullah University of Science & Technology",
    result: "CGPA: 3.722 / 4.00",
    current: true,
  },
  {
    period: "2017 - 2019",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Notre Dame College, Dhaka",
    result: "CGPA: 5.00 / 5.00",
    current: false,
  },
  {
    period: "2012 - 2017",
    degree: "Secondary School Certificate (SSC)",
    institution: "Barabaul High School",
    result: "CGPA: 5.00 / 5.00",
    current: false,
  },
];

const Education = () => {
  return (
    <section id="education" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Academic Background
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Education that{" "}
            <span className="font-serif italic font-normal text-white">
              shaped my journey.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            My academic path built a strong foundation in computer science,
            problem solving, and software engineering principles that support
            my development career.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* center line */}
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          <div className="space-y-12">
            {educations.map((edu, i) => (
              <div
                key={i}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(i + 1) * 150}ms` }}
              >
                {/* dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {edu.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    i % 2 === 0 ? "md:pr-16" : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
                    {/* icon */}
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex justify-center items-center mb-4">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>

                    <span className="text-sm font-medium text-primary">
                      {edu.period}
                    </span>

                    <h3 className="text-xl font-semibold mt-2">{edu.degree}</h3>

                    <p className="text-muted-foreground">{edu.institution}</p>

                    <p className="text-sm text-muted-foreground mt-3 font-medium">
                      {edu.result}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;