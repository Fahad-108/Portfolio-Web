import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// ScrollToTop component to make sure routes always scroll to top on navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const activePath = location.pathname;

  const handleNavigate = (pathName) => {
    navigate(pathName);
  };

  return (
    <div className="bg-background text-on-surface selection:bg-primary/40 font-body-md overflow-x-hidden min-h-screen relative">
      <ScrollToTop />
      <div className="vignette"></div>

      {/* Background Shader Integration */}
      <div className="shader-overlay">
        <div className="w-full h-full opacity-10 bg-radial-gradient-emerald"></div>
      </div>

      <Header
        onNavigate={handleNavigate}
        activePath={activePath}
      />

      <Routes>
        <Route path="/" element={<Hero onNavigate={handleNavigate} />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
