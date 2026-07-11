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
      value: "Pakistan",
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
    { number: "100%", label: "Dedication" },
    { number: "24/7", label: "Learning" },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`py-section-gap px-margin-mobile md:px-gutter max-w-container-max mx-auto relative transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
    >
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse"></div>

      {/* Header */}
      <div className="mb-20 text-left">
        <span className="font-label-mono text-label-mono text-primary tracking-[0.3em] uppercase mb-4 block">
          INTRODUCTION
        </span>
        <h3 className="font-display-lg text-display-lg md:text-display-xl text-gradient mb-4 leading-tight">
          <span className="block">Building Digital</span>
          <span className="block">Experiences</span>
        </h3>
        <p className="max-w-2xl font-body-lg text-body-lg text-on-surface-variant/90 leading-relaxed">
          Get to know more about my journey, passion, and the technologies I use to build modern web applications.
        </p>
        <div className="flex justify-center mt-8">
          <div className="h-[2px] w-48 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        </div>
      </div>

      {/* Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-8">
        {/* Left Column: Description & Tagline */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-6 text-on-surface-variant/90 font-body-md text-base md:text-lg leading-relaxed">
            <p>
              I'm <span className="text-on-surface font-semibold decoration-primary/50 underline underline-offset-4 decoration-2">Muhammad Fahad Raza</span>, a passionate Full Stack MERN Developer and BS Information Technology student who enjoys transforming ideas into scalable and user-friendly web applications. I focus on writing clean, maintainable code while delivering responsive and high-performance digital experiences.
            </p>
            <p>
              I continuously improve my skills by building real-world projects and exploring modern technologies. My goal is to become a skilled software engineer, contribute to impactful products, and work with innovative teams that value creativity, collaboration, and continuous learning.
            </p>
          </div>

          <div className="glass-premium p-6 rounded-2xl border border-primary/20 bg-primary/5 flex items-center gap-4">
            <Lightbulb className="text-primary text-3xl" size={30} />
            <p className="font-body-md text-sm md:text-base text-primary font-semibold tracking-wide italic">
              "Always learning, always building, and always striving to create better digital experiences."
            </p>
          </div>
        </div>

        {/* Right Column: Info Cards Grid */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {infoCards.map((card, idx) => (
            <div
              key={idx}
              className="glass-card-premium p-6 rounded-2xl flex flex-col justify-between hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="p-3 bg-primary/10 rounded-xl w-fit text-primary mb-4 group-hover:bg-primary/20 transition-all flex items-center justify-center">
                <card.icon size={24} />
              </div>
              <div>
                <h4 className="font-label-mono text-xs uppercase tracking-wider text-on-surface-variant/60">
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
            className="glass-premium p-6 rounded-2xl text-center flex flex-col justify-center items-center hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
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
