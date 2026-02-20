import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import React, { useState } from "react";

const testimonials = [
  {
    quote:
      "Asad demonstrated strong problem-solving skills and dedication while working on full-stack MERN projects. His ability to implement authentication systems and responsive UI stood out.",
    author: "Project Mentor",
    role: "Academic Supervisor",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    quote:
      "Working with Asad during university activities showed his teamwork and leadership capabilities. He consistently contributed ideas and helped coordinate tasks effectively.",
    author: "Team Member",
    role: "University Cultural Fest",
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  {
    quote:
      "Asad's projects reflect practical full-stack development experience, including dashboards, REST APIs, and payment integration. His enthusiasm for learning is impressive.",
    author: "Peer Developer",
    role: "Programming Club",
    avatar: "https://i.pravatar.cc/100?img=3",
  },
  {
    quote:
      "He is a motivated developer who approaches challenges with curiosity and persistence, always striving to improve both technical and collaboration skills.",
    author: "Academic Colleague",
    role: "Computer Science Student",
    avatar: "https://i.pravatar.cc/100?img=4",
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0)  

  const next = () => {
    setActive((prev) => (prev + 1) % testimonials.length)
  }
  const previous = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-200 h-200 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            What People Say
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Kind words from
            <span className="font-serif italic font-normal text-white">
              {" "}
              amazing people.
            </span>
          </h2>
        </div>
        {/* Testimonial carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Main testimonial */}
            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>
              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                "{testimonials[active].quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[active].avatar}
                  alt={testimonials[active].author}
                  className="h-14 w-14 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div className="">
                  <div className="font-semibold">{testimonials[active].author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[active].role}
                  </div>
                </div>
              </div>
            </div>
            {/* Testimonials Navigation */}
            <div className="flex justify-center items-center gap-4 mt-8">
                <button onClick={previous} className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all">
                    <ChevronLeft />
                </button>
                <div className="flex gap-2">
                    {testimonials.map((_, i) => (
                    <button onClick={() => setActive(i)} className={`w-2 h-2 rounded-full transition-all duration-300 ${i === active ? 'w-8 bg-primary ' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'}`} />
                ))}
                </div>
                <button onClick={next} className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all">
                    <ChevronRight />
                </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
