import React from "react";
import { Terminal, Rocket } from "lucide-react";
import Dukaan from "../images/Dukaan.JPG";
import Mini from "../images/MiniXpress.png";
import Ticket from "../images/TicketXpress.JPG";

export default function Projects() {
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
      className="py-section-gap px-margin-mobile md:px-gutter max-w-container-max mx-auto relative"
      id="projects"
    >
      <div className="mb-24 text-left">
        <span className="font-label-mono text-label-mono text-primary tracking-[0.3em] uppercase mb-4 block">
          FEATURED PROJECTS
        </span>
        <h3 className="font-display-lg text-display-lg md:text-display-xl text-gradient mb-8 leading-tight">
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
          className="project-grid-item project-card glass-card-premium rounded-[2.5rem] overflow-hidden group flex flex-col h-full transition-all duration-300"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative overflow-hidden h-62">
            <img
              className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
              alt="Dukaan Digital POS"
              src={Dukaan}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80"></div>
            <div className="absolute top-6 left-6">
              <span className="px-4 py-2 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold rounded-full border border-white/10 tracking-wider shadow-lg">
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
            <div className="mt-auto flex gap-4 sm:gap-6">
              <a
                className="flex-1 px-4 py-4 bg-surface-container/40 hover:bg-surface-container-high text-primary font-semibold rounded-2xl text-center transition-all border border-outline-variant/20 flex items-center justify-center gap-3 group/btn"
                href="https://github.com/Fahad-108/Dukaan-Digital" target="_blank" rel="noopener noreferrer"
              >
                <Terminal className="group-hover/btn:rotate-12 transition-transform" size={20} />
                GitHub
              </a>
              <a
                className="flex-1 px-4 py-4 btn-primary text-on-primary-container font-semibold rounded-2xl text-center flex items-center justify-center gap-3"
                href="https://fahad-108.github.io/Dukaan-Digital/login" target="_blank" rel="noopener noreferrer"
              >
                <Rocket size={20} /> Demo
              </a>
            </div>
          </div>
        </div>

        {/* Project Card 2 */}
        <div
          className="project-grid-item project-card glass-card-premium rounded-[2.5rem] overflow-hidden group flex flex-col h-full transition-all duration-300"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative overflow-hidden h-62">
            <img
              className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
              alt="Expense Tracker"
              src={Ticket}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80"></div>
            <div className="absolute top-6 left-6">
              <span className="px-4 py-2 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold rounded-full border border-white/10 tracking-wider shadow-lg">
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
            <div className="mt-auto flex gap-4 sm:gap-6">
              <a
                className="flex-1 px-4 py-4 bg-surface-container/40 hover:bg-surface-container-high text-primary font-semibold rounded-2xl text-center transition-all border border-outline-variant/20 flex items-center justify-center gap-3 group/btn"
                href="https://github.com/Fahad-108/TicketXpress"
              >
                <Terminal className="group-hover/btn:rotate-12 transition-transform" size={20} />
                GitHub
              </a>
              <button
                className="flex-1 px-4 py-4 btn-primary text-on-primary-container font-semibold rounded-2xl text-center flex items-center justify-center gap-3"
              >
                <Rocket size={20} /> Soon
              </button>
            </div>
          </div>
        </div>

        {/* Project Card 3 */}
        <div
          className="project-grid-item project-card glass-card-premium rounded-[2.5rem] overflow-hidden group flex flex-col h-full transition-all duration-300"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative overflow-hidden h-62">
            <img
              className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
              alt="Chat Application"
              src={Mini}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80"></div>
            <div className="absolute top-6 left-6">
              <span className="px-4 py-2 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold rounded-full border border-white/10 tracking-wider shadow-lg">
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
            <div className="mt-auto flex gap-4 sm:gap-6">
              <a
                className="flex-1 px-4 py-4 bg-surface-container/40 hover:bg-surface-container-high text-primary font-semibold rounded-2xl text-center transition-all border border-outline-variant/20 flex items-center justify-center gap-3 group/btn"
                href="https://github.com/Fahad-108/MINIEXPRESS" target="_blank" rel="noopener noreferrer"
              >
                <Terminal className="group-hover/btn:rotate-12 transition-transform" size={20} />
                GitHub
              </a>
              <a
                className="flex-1 px-4 py-4 btn-primary text-on-primary-container font-semibold rounded-2xl text-center flex items-center justify-center gap-3"
                href="https://fahad-108.github.io/MINIEXPRESS/" target="_blank" rel="noopener noreferrer"
              >
                <Rocket size={20} /> Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
