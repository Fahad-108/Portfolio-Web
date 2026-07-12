import React, { useState, useEffect } from "react";
import { ArrowRight, Mail, Cpu, Terminal, Link } from "lucide-react";
import Image from "../images/image.jpeg";

export default function Hero({ onNavigate }) {
  const [typingText, setTypingText] = useState("");

  // Typing Animation Logic
  useEffect(() => {
    const words = ["Full Stack MERN Developer", "React.js Developer", "Node.js Developer" ];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId;

    function type() {
      const currentWord = words[wordIndex];
      let nextText = "";
      if (isDeleting) {
        nextText = currentWord.substring(0, charIndex - 1);
        charIndex--;
      } else {
        nextText = currentWord.substring(0, charIndex + 1);
        charIndex++;
      }
      setTypingText(nextText);

      if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        timeoutId = setTimeout(type, 2500); // newWordDelay
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        timeoutId = setTimeout(type, 500);
      } else {
        timeoutId = setTimeout(type, isDeleting ? 30 : 70); // erasingSpeed vs typingSpeed
      }
    }

    timeoutId = setTimeout(type, 1000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <main id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-6 pb-24 overflow-hidden">
      {/* Decorative Floaties */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-[20%] left-[5%] animate-float delay-1">
          <div className="code-glass p-4 rounded-2xl rotate-6">
            <p className="font-label-mono text-[10px] text-primary/40 leading-relaxed">
              const app = express();
              <br />
              app.use(cors());
            </p>
          </div>
        </div>
        <div className="absolute bottom-[20%] right-[5%] animate-float">
          <div className="code-glass p-4 rounded-2xl -rotate-3">
            <p className="font-label-mono text-[10px] text-secondary/40 leading-relaxed">
              export const useStore = create((set) =&gt; (&#123;
              <br />
              &nbsp;&nbsp;items: [],
              <br />
              &nbsp;&nbsp;addItem: (id) =&gt; set(...)
            </p>
          </div>
        </div>
        {/* Atmospheric Blobs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-[200px] rounded-full"></div>
      </div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center py-section-gap relative z-10">
        {/* Left Column Content */}
        <div className="flex flex-col gap-y-6 md:gap-y-10 text-left">
          {/* Header Block: Greeting, Name, Job Title */}
          <div className="space-y-4 md:space-y-6">
            <div className="inline-flex items-center gap-3 glass-premium px-6 py-2.5 rounded-full">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
              </span>
              <span className="font-label-mono text-[11px] text-primary tracking-[0.4em] font-bold uppercase">
                Ready for new challenges
              </span>
            </div>

            <div className="space-y-4">
              <p className="font-body-lg text-sm text-primary font-bold tracking-[0.5em] opacity-80 uppercase">
                Full Stack MERN Developer
              </p>
              <h1 className="font-display-xl text-4xl sm:text-5xl lg:text-display-xl leading-[0.9] tracking-tighter">
                <span className="block text-on-surface opacity-95">Muhammad</span>
                <span className="text-gradient">Fahad Raza</span>
              </h1>
              <div className="h-[2em] flex items-center justify-start">
                <span className="font-headline-md text-headline-sm md:text-headline-md text-primary/90 font-semibold tracking-tight typing-cursor">
                  {typingText}
                </span>
              </div>
            </div>
          </div>

          {/* Professional Introduction */}
          <p className="max-w-xl mx-auto md:mx-0 font-body-lg text-body-lg text-on-surface-variant leading-relaxed opacity-80">
            Crafting high-performance digital solutions with the{" "}
            <span className="text-on-surface font-bold decoration-primary/50 underline underline-offset-4 decoration-2">
              MERN Stack
            </span>
            . Specializing in building scalable architectures and immersive user interfaces that push modern web boundaries.
          </p>

          {/* Placement A: Developer Image (Visible only on mobile devices) */}
          <div className="md:hidden w-full flex justify-center items-center py-4 my-2">
            <div className="relative w-full max-w-[260px] xs:max-w-[280px] aspect-square flex items-center justify-center mx-auto">
              <div className="rotating-aura"></div>
              <div className="absolute w-[240px] h-[240px] bg-primary/20 rounded-full blur-[80px] animate-pulse"></div>

              {/* Main Glass Container */}
              <div className="relative w-full h-full glass-premium rounded-[32px] overflow-hidden p-2 group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                <div className="w-full h-full rounded-[26px] overflow-hidden bg-background/50">
                  <img
                    alt="Muhammad Fahad Raza"
                    className="w-full h-full object-cover scale-100 brightness-95 contrast-105 saturate-105 group-hover:scale-105 group-hover:brightness-110 group-hover:contrast-110 group-hover:saturate-110 transition-all duration-700 ease-out"                    src={Image}
                  />
                </div>
                {/* Integrated Tag */}
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="glass-premium backdrop-blur-3xl rounded-xl p-2.5 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_8px_#10b981]"></div>
                      <span className="text-[8px] font-label-mono uppercase tracking-[0.15em] text-on-surface font-bold">
                        Full Stack Developer
                      </span>
                    </div>
                    <span className="text-[8px] font-label-mono text-primary font-black px-2 py-0.5 rounded-full glass-premium">
                      2026
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Overlays */}
              <div className="absolute -top-2 -right-2 animate-float delay-1">
                <div className="glass-premium p-2.5 rounded-xl border border-primary/40 shadow-xl">
                  <Cpu className="text-primary" size={20} />
                </div>
              </div>
              <div className="absolute -bottom-3 -left-2 animate-float delay-2">
                <div className="glass-premium p-2.5 rounded-xl border border-secondary/40 shadow-xl">
                  <Terminal className="text-secondary" size={20} />
                </div>
              </div>
            </div>
          </div>

          {/* Primary CTA Buttons */}
          <div className="flex flex-row sm:flex-row items-center gap-3 pt-2">
            <button
              onClick={() => onNavigate("/projects", "projects")}
              className="flex-1 px-5 py-4 rounded-2xl font-extrabold flex items-center justify-center gap-3 group shimmer-btn shadow-[0_20px_50px_-10px_rgba(16,185,129,0.5)] hover:-translate-y-1.5 transition-all active:scale-95"
            >
              View Projects
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
            </button>
            <button
              onClick={() => onNavigate("/contact", "contact")}
              className="flex-1 px-5 py-4 rounded-2xl font-extrabold flex items-center justify-center hover:bg-on-surface/5 transition-all active:scale-95"
            >
              Get in Touch
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center md:justify-start gap-6 pt-2">
            <a
              className="glass-premium w-14 h-14 flex items-center justify-center rounded-2xl hover:text-primary hover:border-primary/50 transition-all hover:-translate-y-1"
              href="https://github.com/Fahad-108" target="_blank" rel="noopener noreferrer"
            >
              <Terminal size={24} />
            </a>
            <a
              className="glass-premium w-14 h-14 flex items-center justify-center rounded-2xl hover:text-primary hover:border-primary/50 transition-all hover:-translate-y-1"
              href="https://www.linkedin.com/in/muhmmad-fahad-raza-779524372/" target="_blank" rel="noopener noreferrer"
            >
              <Link size={24} />
            </a>
            <a
              className="glass-premium w-14 h-14 flex items-center justify-center rounded-2xl hover:text-primary hover:border-primary/50 transition-all hover:-translate-y-1"
              href="mailto:fahiiraza8@gmail.com" target="_blank" rel="noopener noreferrer"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Right Visual Container (Placement B: Visible on tablet/desktop only) */}
        <div className="hidden md:flex relative justify-center items-center h-[500px] lg:h-[700px]">
          <div className="rotating-aura"></div>
          <div className="absolute w-[450px] h-[450px] bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>

          {/* Layered Card Setup */}
          <div className="relative w-full max-w-[340px] md:max-w-[480px] aspect-square flex items-center justify-center mx-auto">
            {/* Main Glass Container */}
            <div className="relative w-full h-full glass-premium rounded-[36px] md:rounded-[56px] overflow-hidden p-2 md:p-2.5 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              <div className="w-full h-full rounded-[30px] md:rounded-[48px] overflow-hidden bg-background/50">
                <img
                  alt="Muhammad Fahad Raza"
                  className="w-full h-full object-cover scale-100 brightness-95 contrast-105 saturate-105 group-hover:scale-105 group-hover:brightness-110 group-hover:contrast-110 group-hover:saturate-110 transition-all duration-700 ease-out"                  src={Image}
                />
              </div>
              {/* Integrated Tag */}
              <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8">
                <div className="glass-premium backdrop-blur-3xl rounded-2xl md:rounded-3xl p-3 md:p-5 flex items-center justify-between">
                  <div className="flex items-center gap-2 md:gap-4">
                    <div className="w-2.5 h-2.5 bg-primary rounded-full shadow-[0_0_10px_#10b981]"></div>
                    <span className="text-[11px] font-label-mono uppercase tracking-[0.2em] text-on-surface font-bold">
                      Full Stack Developer
                    </span>
                  </div>
                  <span className="text-[11px] font-label-mono text-primary font-black px-3 py-1 rounded-full glass-premium">
                    2026
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Overlays */}
            <div className="absolute -top-6 -right-4 animate-float delay-1">
              <div className="glass-premium p-6 rounded-[32px] border border-primary/40 shadow-2xl dark:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                <Cpu className="text-primary" size={48} />
              </div>
            </div>
            <div className="absolute -bottom-12 -left-12 animate-float delay-2">
              <div className="glass-premium p-6 rounded-[32px] border border-secondary/40 shadow-2xl dark:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                <Terminal className="text-secondary" size={48} />
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
