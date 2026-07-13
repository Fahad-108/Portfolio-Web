import React, { useState, useEffect, useRef } from "react";
import { Terminal, Rocket } from "lucide-react";
import Dukaan from "../images/Dukaan.JPG";
import Mini from "../images/MiniXpress.png";
import Ticket from "../images/TicketXpress.JPG";

export default function Projects() {
  
  const [isVisible, setIsVisible] = useState(false);
const sectionRef = useRef(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    },
    {
      threshold: 0.1,
    }
  );

  if (sectionRef.current) {
    observer.observe(sectionRef.current);
  }

  return () => observer.disconnect();
}, []);
  
  // Custom Tilt handlers
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 30;
    const rotateY = (centerX - x) / 30;

    card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-12px)`;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0)`;
  };

  return (
    <section
  ref={sectionRef}
  id="projects"
  className={`pb-10 pt-28 px-margin-mobile md:px-gutter max-w-container-max mx-auto relative transition-all duration-1000 ${
    isVisible
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-10"
  }`}
>
      <div className="mb-24 text-left">
        <span className="font-label-mono text-label-mono text-primary tracking-[0.3em] uppercase mb-4 block">
          FEATURED PROJECTS
        </span>
        <h3 className="font-display-lg text-display-lg md:text-display-xl mb-8 leading-tight">
          Projects That <br />
          Show My Skills
        </h3>
        <p className="max-w-2xl font-body-lg text-body-lg text-on-surface-variant/90 leading-relaxed">
          Here are some of the projects I have built using modern web technologies. Each project reflects my focus on clean code, responsive design, and solving real-world problems.
        </p>
        <div className="flex justify-start mt-8">
          <div className="h-[2px] w-48 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project Card 1 */}
        <div
          className="project-grid-item project-card card-surface-interactive rounded-[2.5rem] overflow-hidden group flex flex-col h-full transition-all duration-300"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative overflow-hidden h-62">
            <img
              className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
              alt="Dukaan Digital POS"
              src={Dukaan}
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent opacity-90"></div>
            <div className="absolute top-4 left-4">
              <span className="px-3.5 py-1.5 bg-[#050810]/95 backdrop-blur-md text-primary text-[10px] font-label-mono uppercase tracking-wider rounded-lg border border-outline-variant/30 shadow-md">
                MERN Stack
              </span>
            </div>
          </div>
          <div className="p-6 sm:p-10 flex flex-col flex-grow">
            <h3 className="font-headline-sm text-headline-sm mb-6 text-on-surface font-bold">
              Dukaan Digital
            </h3>
            <p className="text-on-surface-variant/90 font-body-md mb-10 leading-relaxed min-h-[140px] flex-grow">
              A complete MERN Stack application featuring inventory management, sales and purchase tracking, expense management, customer credit (Udhaar), secure authentication, interactive dashboards, and a fully responsive user interface for modern retail businesses.
            </p>
            <div className="flex gap-4 pt-6 border-t border-outline-variant/20 mt-auto">
              <a
                className="flex-1 px-4 py-4 bg-surface-container/40 hover:bg-surface-container/60 text-on-surface border border-outline-variant/30 font-semibold rounded-2xl text-center transition-all duration-300 flex items-center justify-center gap-3 group/btn hover:border-primary/30"
                href="https://github.com/Fahad-108/Dukaan-Digital" target="_blank" rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" className="group-hover/btn:rotate-12 transition-transform"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                GitHub
              </a>
              <a
                className="flex-1 px-4 py-4 btn-primary text-on-primary-container font-semibold rounded-2xl text-center flex items-center justify-center gap-3"
                href="https://fahad-108.github.io/Dukaan-Digital/login" target="_blank" rel="noopener noreferrer"
              >
                <Rocket size={24} /> Demo
              </a>
            </div>
          </div>
        </div>

        {/* Project Card 2 */}
        <div
          className="project-grid-item project-card card-surface-interactive rounded-[2.5rem] overflow-hidden group flex flex-col h-full transition-all duration-300"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative overflow-hidden h-62">
            <img
              className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
              alt="Expense Tracker"
              src={Ticket}
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent opacity-90"></div>
            <div className="absolute top-4 left-4">
              <span className="px-3.5 py-1.5 bg-[#050810]/95 backdrop-blur-md text-primary text-[10px] font-label-mono uppercase tracking-wider rounded-lg border border-outline-variant/30 shadow-md">
                HTML • CSS • JavaScript
              </span>
            </div>
          </div>
          <div className="p-6 sm:p-10 flex flex-col flex-grow">
            <h3 className="font-headline-sm text-headline-sm mb-6 text-on-surface font-bold">
              TicketXpress
            </h3>
            <p className="text-on-surface-variant/90 font-body-md mb-10 leading-relaxed min-h-[140px] flex-grow">
              A responsive frontend bus ticket booking platform featuring modern UI design, animated interactions with GSAP, authentication pages, and an intuitive booking experience.
            </p>
            <div className="flex gap-4 pt-6 border-t border-outline-variant/20 mt-auto">
              <a
                className="flex-1 px-4 py-4 bg-surface-container/40 hover:bg-surface-container/60 text-on-surface border border-outline-variant/30 font-semibold rounded-2xl text-center transition-all duration-300 flex items-center justify-center gap-3 group/btn hover:border-primary/30"
                href="https://github.com/Fahad-108/TicketXpress"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" className="group-hover/btn:rotate-12 transition-transform"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                GitHub
              </a>
              <button
                className="flex-1 px-4 py-4 btn-primary text-on-primary-container font-semibold rounded-2xl text-center flex items-center justify-center gap-3"
              >
                <Rocket size={24} /> Soon
              </button>
            </div>
          </div>
        </div>

        {/* Project Card 3 */}
        <div
          className="project-grid-item project-card card-surface-interactive rounded-[2.5rem] overflow-hidden group flex flex-col h-full transition-all duration-300"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative overflow-hidden h-62">
            <img
              className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
              alt="Chat Application"
              src={Mini}
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent opacity-90"></div>
            <div className="absolute top-4 left-4">
              <span className="px-3.5 py-1.5 bg-[#050810]/95 backdrop-blur-md text-primary text-[10px] font-label-mono uppercase tracking-wider rounded-lg border border-outline-variant/30 shadow-md">
                React.js
              </span>
            </div>
          </div>
          <div className="p-6 sm:p-10 flex flex-col flex-grow">
            <h3 className="font-headline-sm text-headline-sm mb-6 text-on-surface font-bold">
              MiniXpress
            </h3>
            <p className="text-on-surface-variant/90 font-body-md mb-10 leading-relaxed min-h-[140px] flex-grow">
              An all-in-one React application featuring task management, mini games, useful productivity tools, responsive design, and seamless Dark/Light mode switching.
            </p>
            <div className="flex gap-4 pt-6 border-t border-outline-variant/20 mt-auto">
              <a
                className="flex-1 px-4 py-4 bg-surface-container/40 hover:bg-surface-container/60 text-on-surface border border-outline-variant/30 font-semibold rounded-2xl text-center transition-all duration-300 flex items-center justify-center gap-3 group/btn hover:border-primary/30"
                href="https://github.com/Fahad-108/MINIEXPRESS" target="_blank" rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" className="group-hover/btn:rotate-12 transition-transform"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                GitHub
              </a>
              <a
                className="flex-1 px-4 py-4 btn-primary text-on-primary-container font-semibold rounded-2xl text-center flex items-center justify-center gap-3"
                href="https://fahad-108.github.io/MINIEXPRESS/" target="_blank" rel="noopener noreferrer"
              >
                <Rocket size={24} /> Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
