import React, { useState, useEffect } from "react";

export default function Header({ onNavigate, activePath }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", sectionId: "home", path: "/" },
    { name: "About", sectionId: "about", path: "/about" },
    { name: "Skills", sectionId: "skills", path: "/skills" },
    { name: "Projects", sectionId: "projects", path: "/projects" },
    { name: "Contact", sectionId: "contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 py-1 shadow-2xl" : "bg-background/30 py-0"
        } backdrop-blur-3xl border-b border-outline-variant/20`}
    >
      <div className="max-w-container-max mx-auto h-24 flex justify-between items-center px-margin-mobile md:px-gutter">
        <a
          className="font-display-lg text-2xl font-extrabold tracking-tighter"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onNavigate("/", "home");
          }}
        >
          <span className="text-on-surface">Muhammad</span>{" "}
          <span className="text-primary">Fahad Raza</span>
        </a>

        <div className="hidden md:flex items-center gap-10 font-label-mono text-xs uppercase tracking-[0.2em]">
          {menuItems.map((item) => {
            const isActive = activePath === item.path;
            return (
              <a
                key={item.sectionId}
                className={`relative group cursor-pointer py-2 transition-all duration-300 font-bold uppercase tracking-wider text-xs ${isActive ? "text-primary" : "text-on-surface-variant hover:text-primary"
                  }`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item.path, item.sectionId);
                }}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-primary shadow-[0_0_10px_#10b981] transition-all duration-300 ${isActive
                      ? "w-full opacity-100"
                      : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                    }`}
                ></span>
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-6">
          <a
            href="/Muhammad_Fahad_Raza_CV.pdf"
            download rel="noopener noreferrer"
            className="hidden lg:block primary-gradient text-on-primary-container px-9 py-3.5 rounded-xl font-bold text-sm shimmer-btn shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_45px_rgba(16,185,129,0.5)] transition-all"
          >
            Download CV
          </a>
        </div>
      </div>
    </nav>
  );
}
