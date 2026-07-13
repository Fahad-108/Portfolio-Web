import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header({ onNavigate, activePath }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const menuItems = [
    { name: "Home", sectionId: "home", path: "/" },
    { name: "About", sectionId: "about", path: "/about" },
    { name: "Skills", sectionId: "skills", path: "/skills" },
    { name: "Projects", sectionId: "projects", path: "/projects" },
    { name: "Contact", sectionId: "contact", path: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/80 py-1 shadow-2xl" : "bg-background/30 py-0"
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10 font-label-mono text-xs uppercase tracking-[0.2em]">
            {menuItems.map((item) => {
              const isActive = activePath === item.path;
              return (
                <a
                  key={item.sectionId}
                  className={`relative group cursor-pointer py-2 transition-all duration-300 font-bold uppercase tracking-wider text-xs ${
                    isActive ? "text-primary" : "text-on-surface-variant hover:text-primary"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(item.path, item.sectionId);
                  }}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-primary transition-all duration-300 ${
                      isActive
                        ? "w-full opacity-100"
                        : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                    }`}
                  ></span>
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="/Muhammad_Fahad_Raza_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:block bg-primary text-surface px-9 py-3.5 rounded-xl font-bold text-sm hover:bg-primary/90 border border-primary/25 transition-all hover:-translate-y-0.5 shadow-md active:scale-95 duration-200"
            >
              Download CV
            </a>

            {/* Hamburger button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-on-surface hover:text-primary transition-colors p-2.5 rounded-xl bg-surface-container/50 border border-outline-variant/30 flex items-center justify-center"
              aria-label="Toggle Navigation Drawer"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Drawer Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Drawer Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-3/4 max-w-sm z-50 bg-[#0B0F19]/95 backdrop-blur-2xl border-l border-outline-variant/20 p-8 flex flex-col transition-transform duration-300 transform md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-12">
          <span className="font-display-lg text-lg font-bold tracking-tighter text-on-surface">Navigation</span>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-on-surface hover:text-primary transition-colors p-2.5 rounded-xl bg-surface-container/50 border border-outline-variant/30 flex items-center justify-center"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-col gap-6 font-label-mono text-sm uppercase tracking-[0.2em] mb-12">
          {menuItems.map((item) => {
            const isActive = activePath === item.path;
            return (
              <a
                key={item.sectionId}
                className={`py-3 border-b border-outline-variant/10 cursor-pointer transition-all duration-300 font-bold ${
                  isActive ? "text-primary pl-2" : "text-on-surface-variant hover:text-primary"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  onNavigate(item.path, item.sectionId);
                }}
              >
                {item.name}
              </a>
            );
          })}
        </div>

        <div className="mt-auto">
          <a
            href="/Muhammad_Fahad_Raza_Resume.pdf"
            download
            rel="noopener noreferrer"
            className="w-full text-center block bg-primary text-surface px-6 py-4 rounded-xl font-bold text-sm hover:bg-primary/90 border border-primary/25 transition-all active:scale-95 duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Resume
          </a>
        </div>
      </div>
    </>
  );
}
