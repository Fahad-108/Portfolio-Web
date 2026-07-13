import React, { useState, useEffect, useRef } from "react";
import { GraduationCap, Code2, MapPin, Rocket, Lightbulb } from "lucide-react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const infoCards = [
    {
      title: "Education",
      value: "BS Information Technology",
      icon: GraduationCap,
    },
    {
      title: "Specialization",
      value: "Full Stack MERN Development",
      icon: Code2,
    },
    {
      title: "Location",
      value: "Gujrat, Pakistan",
      icon: MapPin,
    },
    {
      title: "Current Goal",
      value: "Building Real-World Solutions",
      icon: Rocket,
    },
  ];

  const stats = [
    { number: "10+", label: "Projects Built" },
    { number: "15+", label: "Technologies" },
    { number: "4+", label: "MERN Stack Apps" },
    { number: "2+", label: "Years Coding" },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`py-section-gap px-margin-mobile md:px-gutter max-w-container-max mx-auto relative transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
    >
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[160px] rounded-full pointer-events-none -z-10"></div>

      {/* Header */}
      <div className="mb-20 text-left">
        <span className="font-label-mono text-label-mono text-primary tracking-[0.3em] uppercase mb-4 block">
          INTRODUCTION
        </span>
        <h3 className="font-display-lg text-display-lg md:text-display-xl mb-4 leading-tight">
          <span className="block">Building Digital</span>
          <span className="block">Experiences</span>
        </h3>
        <p className="max-w-2xl font-body-lg text-body-lg text-on-surface-variant/90 leading-relaxed">
          Get to know more about my journey, passion, and the technologies I use to build modern web applications.
        </p>
        <div className="flex justify-start mt-8">
          <div className="h-[2px] w-48 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        </div>
      </div>

      {/* Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-8">
        {/* Left Column: Description & Tagline */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-6 text-on-surface-variant/90 font-body-md text-base md:text-lg leading-relaxed">
            <p>
              I'm <span className="text-on-surface font-semibold decoration-primary/50 underline underline-offset-4 decoration-2">Muhammad Fahad Raza</span>, a MERN Stack Developer with a background in Information Technology. I focus on bridging the gap between back-end architecture and front-end user experience. Rather than just writing code, I love designing systems that scale, optimizing databases, and crafting clean, maintainable logic that solves real problems.
            </p>
            <p>
              I enjoy working across the entire stack—designing RESTful APIs, securing routes, structuring MongoDB collections, and building smooth, responsive React interfaces. I spend my time building projects that challenge me to learn new design systems and optimization strategies.
            </p>
          </div>

          <div className="card-surface-premium p-6 rounded-2xl border border-primary/20 bg-primary/5 flex items-center gap-4">
            <Lightbulb className="text-primary text-3xl" size={30} />
            <p className="font-body-md text-sm md:text-base text-primary font-semibold tracking-wide italic">
              "Always learning, always building, and always striving to create better digital experiences."
            </p>
          </div>
        </div>

        {/* Right Column: Info List */}
        <div className="lg:col-span-5 space-y-8 pl-6 border-l border-outline-variant/30 py-2 lg:ml-6">
          {infoCards.map((card, idx) => (
            <div key={idx} className="group flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary/20 transition-all flex items-center justify-center shrink-0">
                <card.icon size={20} />
              </div>
              <div>
                <h4 className="font-label-mono text-[11px] uppercase tracking-[0.15em] text-on-surface-variant/50">
                  {card.title}
                </h4>
                <p className="font-body-md text-sm md:text-base text-on-surface font-semibold mt-1">
                  {card.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section: Professional Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-12 border-t border-outline-variant/20">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="card-surface-premium p-6 rounded-2xl text-left flex flex-col justify-start items-start hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
          >
            <span className="font-display-lg text-4xl md:text-5xl font-black text-primary block tracking-tight mb-2">
              {stat.number}
            </span>
            <span className="font-label-mono text-xs uppercase tracking-wider text-on-surface-variant/70">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
