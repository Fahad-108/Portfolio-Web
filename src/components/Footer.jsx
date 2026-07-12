import React from "react";
import { Terminal, Link as LucideLink, Mail, ArrowRight, Heart, ArrowUp } from "lucide-react";

export default function Footer({ onNavigate }) {
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/Fahad-108", icon: Terminal },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/muhmmad-fahad-raza-779524372/", icon: LucideLink },
    { name: "Email", url: "mailto:fahiiraza8@gmail.com", icon: Mail },
  ];

  const quickLinks = [
    { name: "Home", sectionId: "home", path: "/" },
    { name: "About", sectionId: "about", path: "/about" },
    { name: "Skills", sectionId: "skills", path: "/skills" },
    { name: "Projects", sectionId: "projects", path: "/projects" },
    { name: "Contact", sectionId: "contact", path: "/contact" },
  ];

  const techStack = ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"];

  const handleBackToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="w-full relative bg-surface-container-lowest/20 backdrop-blur-3xl border-t border-outline-variant/20 pt-24 pb-12 overflow-hidden z-10">
      {/* Background radial glow on bottom-center */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-12 pb-16">
          {/* Column 1: Branding & Intro */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex flex-col gap-3">
              <h3 className="font-display-lg text-3xl font-extrabold tracking-tighter">
                <span className="text-slate-900 dark:text-white">Muhammad</span>{" "}
                <span className="text-primary">Fahad Raza</span>
              </h3>
            </div>
            
            <p className="text-on-surface-variant/80 text-sm md:text-base leading-relaxed max-w-md font-medium">
              Building modern web applications with the MERN Stack while focusing on performance, clean architecture, and intuitive user experiences.
            </p>

            {/* Social Links with premium hover states */}
            <div className="flex items-center gap-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-premium w-11 h-11 flex items-center justify-center rounded-xl hover:text-primary hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(16,185,129,0.15)] group"
                  title={social.name}
                >
                  <social.icon size={20} className="transition-transform duration-300 group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 space-y-6 text-center md:text-left">
            <h4 className="font-label-mono text-xs uppercase tracking-[0.2em] text-slate-900 dark:text-white font-bold pb-2 border-b border-outline-variant/20 w-fit mx-auto md:mx-0">
              Navigation
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.sectionId}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(link.path, link.sectionId);
                    }}
                    className="text-on-surface-variant/85 hover:text-primary transition-colors duration-300 text-sm font-semibold flex items-center justify-center md:justify-start gap-2.5 group"
                  >
                    <ArrowRight className="text-primary/40 group-hover:text-primary transition-colors group-hover:translate-x-1 duration-300" size={14} />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Tech Stack Badges */}
          <div className="md:col-span-4 space-y-6 text-center md:text-left">
            <h4 className="font-label-mono text-xs uppercase tracking-[0.2em] text-slate-900 dark:text-white font-bold pb-2 border-b border-outline-variant/20 w-fit">
              Core Tech Stack
            </h4>
            <p className="text-on-surface-variant/70 text-xs md:text-sm font-medium leading-relaxed">
              Technologies I use to build responsive, scalable, and user-friendly web applications.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-2.5 pt-1">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 glass-pill text-[10px] rounded-lg tracking-wider uppercase font-semibold border border-outline-variant/20 hover:border-primary/20 transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-outline-variant/50 to-transparent"></div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-on-surface-variant/60 text-xs font-label-mono uppercase tracking-wider text-center md:text-left">
              © {new Date().getFullYear()} Muhammad Fahad Raza. All rights reserved.
            </p>
            <p className="text-on-surface-variant/40 text-[12px] font-label-mono flex items-center gap-1.5 mt-1">
              Designed & Developed using React.js & Tailwind CSS
              <Heart className="text-red-500 animate-pulse inline" size={12} fill="currentColor" />
            </p>
          </div>

          {/* Scroll to Top button */}
            <button
              onClick={handleBackToTop}
              className="glass-premium px-5 py-3 rounded-xl font-label-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:text-primary hover:border-primary/40 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(16,185,129,0.1)] active:scale-95 transition-all duration-300 group cursor-pointer border border-outline-variant/20"
            >
              Back to Top
              <ArrowUp className="transition-transform duration-300 group-hover:-translate-y-1" size={16} />
            </button>
        </div>
      </div>
    </footer>
  );
}
