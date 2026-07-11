import React, { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [activePath, setActivePath] = useState("/");
  const isNavigatingRef = useRef(false);

  // Scroll to section based on initial URL path on load
  useEffect(() => {
    const path = window.location.pathname;
    setActivePath(path);

    let targetId = "";
    if (path === "/about") {
      targetId = "about";
    } else if (path === "/skills") {
      targetId = "skills";
    } else if (path === "/projects") {
      targetId = "projects";
    } else if (path === "/contact") {
      targetId = "contact";
    }

    if (targetId) {
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 500); // Allow brief moment for components to mount
    }
  }, []);

  // Update URL based on scroll position using IntersectionObserver (Scroll Spy)
  useEffect(() => {
    const sections = [
      { id: "home", path: "/" },
      { id: "about", path: "/about" },
      { id: "skills", path: "/skills" },
      { id: "projects", path: "/projects" },
      { id: "contact", path: "/contact" },
    ];

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // Trigger when section occupies screen center
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      // Do not update URL if programmatic navigation is currently active
      if (isNavigatingRef.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = sections.find((s) => s.id === entry.target.id);
          if (section) {
            setActivePath(section.path);
            window.history.pushState(null, "", section.path);
          }
        }
      });
    }, observerOptions);

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Triggered when clicking navigation bar items
  const handleNavigate = (pathName, sectionId) => {
    isNavigatingRef.current = true;
    setActivePath(pathName);
    window.history.pushState(null, "", pathName);

    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }

    // Release lock once scroll animation is finished
    setTimeout(() => {
      isNavigatingRef.current = false;
    }, 800);
  };

  return (
    <div className="bg-background text-on-surface selection:bg-primary/40 font-body-md overflow-x-hidden min-h-screen relative bg-[#0e1511]">
      <div className="vignette"></div>

      {/* Background Shader Integration */}
      <div className="shader-overlay">
        <div className="w-full h-full opacity-10 bg-radial-gradient-emerald"></div>
      </div>
      <Header
        onNavigate={handleNavigate}
        activePath={activePath}
      />

      <Hero onNavigate={handleNavigate} />

      <About />

      <Skills />

      <Projects />

      <Contact />

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
