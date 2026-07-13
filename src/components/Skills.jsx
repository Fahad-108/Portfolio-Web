import React, { useState, useEffect, useRef } from "react";
import { Code2, Server, Database, Wrench } from "lucide-react";

export default function Skills() {
  const [animateBars, setAnimateBars] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
    setAnimateBars(true);
    setIsVisible(true);
}
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
  ref={skillsRef}
  id="skills"
  className={`relative pb-10 pt-28 px-margin-mobile md:px-gutter max-w-container-max mx-auto overflow-hidden transition-all duration-1000 ${
    isVisible
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-10"
  }`}
>
      <div className="mb-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-8">
          <div className="max-w-3xl text-left">
            <span className="font-label-mono text-label-mono text-primary/80 tracking-[0.2em] uppercase mb-6 block">
              Technical Skills
            </span>
            <h3 className="font-display-lg text-display-lg md:text-display-xl mb-8 leading-tight">
              Skills & Technologies
            </h3>
            <p className="font-body-lg text-body-lg text-on-surface-variant/90 leading-relaxed">
              I specialize in building modern, responsive, and scalable web applications using the MERN stack while focusing on clean code, performance, and user experience.
            </p>
          </div>
        </div>
        <div className="flex justify-start">
          <div className="h-[2px] w-48 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Frontend */}
        <div className="card-surface-premium p-6 sm:p-10 rounded-[1.5rem] sm:rounded-[2rem] group relative">
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/20 transition-all"></div>
          <div className="mb-8 flex justify-between items-center">
            <div className="p-3 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-all flex items-center justify-center">
              <Code2 className="text-primary" size={32} />
            </div>
            <span className="font-label-mono text-label-mono text-primary/40 text-xl">01</span>
          </div>
          <h3 className="font-headline-sm text-headline-sm mb-8 text-on-surface font-bold tracking-tight">
            Frontend
          </h3>
          <div className="space-y-8">
            <div className="space-y-3">
              <div className="flex justify-between font-label-mono text-sm tracking-wide text-on-surface-variant">
                <span>React.js</span>
                <span className="text-primary">85%</span>
              </div>
              <div className="h-2 w-full bg-surface-container/50 rounded-full overflow-hidden border border-outline-variant/20">
                <div
                  className="progress-bar-fill h-full rounded-full"
                  style={{
                    width: animateBars ? "85%" : "0%",
                    transition: animateBars ? "width 1.8s cubic-bezier(0.16, 1, 0.3, 1)" : "none",
                  }}
                ></div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between font-label-mono text-sm tracking-wide text-on-surface-variant">
                <span>Tailwind CSS</span>
                <span className="text-primary">90%</span>
              </div>
              <div className="h-2 w-full bg-surface-container/50 rounded-full overflow-hidden border border-outline-variant/20">
                <div
                  className="progress-bar-fill h-full rounded-full"
                  style={{
                    width: animateBars ? "90%" : "0%",
                    transition: animateBars ? "width 1.8s cubic-bezier(0.16, 1, 0.3, 1)" : "none",
                  }}
                ></div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-outline-variant/20">
              <span className="px-3 py-1 badge-pill text-[10px] rounded-lg tracking-wider uppercase">HTML5</span>
              <span className="px-3 py-1 badge-pill text-[10px] rounded-lg tracking-wider uppercase">CSS3</span>
              <span className="px-3 py-1 badge-pill text-[10px] rounded-lg tracking-wider uppercase">JavaScript</span>
            </div>
          </div>
        </div>

        {/* Backend */}
        <div className="card-surface-premium p-6 sm:p-10 rounded-[1.5rem] sm:rounded-[2rem] group relative">
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/20 transition-all"></div>
          <div className="mb-8 flex justify-between items-center">
            <div className="p-3 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-all flex items-center justify-center">
              <Server className="text-primary" size={32} />
            </div>
            <span className="font-label-mono text-label-mono text-primary/40 text-xl">02</span>
          </div>
          <h3 className="font-headline-sm text-headline-sm mb-8 text-on-surface font-bold tracking-tight">
            Backend
          </h3>
          <div className="space-y-8">
            <div className="space-y-3">
              <div className="flex justify-between font-label-mono text-sm tracking-wide text-on-surface-variant">
                <span>Node.js</span>
                <span className="text-primary">85%</span>
              </div>
              <div className="h-2 w-full bg-surface-container/50 rounded-full overflow-hidden border border-outline-variant/20">
                <div
                  className="progress-bar-fill h-full rounded-full"
                  style={{
                    width: animateBars ? "85%" : "0%",
                    transition: animateBars ? "width 1.8s cubic-bezier(0.16, 1, 0.3, 1)" : "none",
                  }}
                ></div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between font-label-mono text-sm tracking-wide text-on-surface-variant">
                <span>Express.js</span>
                <span className="text-primary">80%</span>
              </div>
              <div className="h-2 w-full bg-surface-container/50 rounded-full overflow-hidden border border-outline-variant/20">
                <div
                  className="progress-bar-fill h-full rounded-full"
                  style={{
                    width: animateBars ? "80%" : "0%",
                    transition: animateBars ? "width 1.8s cubic-bezier(0.16, 1, 0.3, 1)" : "none",
                  }}
                ></div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-outline-variant/20">
              <span className="px-3 py-1 badge-pill text-[10px] rounded-lg tracking-wider uppercase">REST API</span>
              <span className="px-3 py-1 badge-pill text-[10px] rounded-lg tracking-wider uppercase">JWT Authentication</span>
            </div>
          </div>
        </div>

        {/* Database */}
        <div className="card-surface-premium p-6 sm:p-10 rounded-[1.5rem] sm:rounded-[2rem] group relative">
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/20 transition-all"></div>
          <div className="mb-8 flex justify-between items-center">
            <div className="p-3 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-all flex items-center justify-center">
              <Database className="text-primary" size={32} />
            </div>
            <span className="font-label-mono text-label-mono text-primary/40 text-xl">03</span>
          </div>
          <h3 className="font-headline-sm text-headline-sm mb-8 text-on-surface font-bold tracking-tight">
            Database
          </h3>
          <div className="space-y-8">
            <div className="space-y-3">
              <div className="flex justify-between font-label-mono text-sm tracking-wide text-on-surface-variant">
                <span>MongoDB</span>
                <span className="text-primary">85%</span>
              </div>
              <div className="h-2 w-full bg-surface-container/50 rounded-full overflow-hidden border border-outline-variant/20">
                <div
                  className="progress-bar-fill h-full rounded-full"
                  style={{
                    width: animateBars ? "85%" : "0%",
                    transition: animateBars ? "width 1.8s cubic-bezier(0.16, 1, 0.3, 1)" : "none",
                  }}
                ></div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between font-label-mono text-sm tracking-wide text-on-surface-variant">
                <span>Mongoose</span>
                <span className="text-primary">80%</span>
              </div>
              <div className="h-2 w-full bg-surface-container/50 rounded-full overflow-hidden border border-outline-variant/20">
                <div
                  className="progress-bar-fill h-full rounded-full"
                  style={{
                    width: animateBars ? "80%" : "0%",
                    transition: animateBars ? "width 1.8s cubic-bezier(0.16, 1, 0.3, 1)" : "none",
                  }}
                ></div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-outline-variant/20">
              <span className="px-3 py-1 badge-pill text-[10px] rounded-lg tracking-wider uppercase">MongoDB Atlas</span>
              <span className="px-3 py-1 badge-pill text-[10px] rounded-lg tracking-wider uppercase">Mongoose</span>
            </div>
          </div>
        </div>

        {/* Tools */}
        <div className="card-surface-premium p-6 sm:p-10 rounded-[1.5rem] sm:rounded-[2rem] group relative">
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/20 transition-all"></div>
          <div className="mb-8 flex justify-between items-center">
            <div className="p-3 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-all flex items-center justify-center">
              <Wrench className="text-primary" size={32} />
            </div>
            <span className="font-label-mono text-label-mono text-primary/40 text-xl">04</span>
          </div>
          <h3 className="font-headline-sm text-headline-sm mb-8 text-on-surface font-bold tracking-tight">
            Tools
          </h3>
          <div className="space-y-8">
            <div className="space-y-3">
              <div className="flex justify-between font-label-mono text-sm tracking-wide text-on-surface-variant">
                <span>Git &amp; GitHub</span>
                <span className="text-primary">90%</span>
              </div>
              <div className="h-2 w-full bg-surface-container/50 rounded-full overflow-hidden border border-outline-variant/20">
                <div
                  className="progress-bar-fill h-full rounded-full"
                  style={{
                    width: animateBars ? "90%" : "0%",
                    transition: animateBars ? "width 1.8s cubic-bezier(0.16, 1, 0.3, 1)" : "none",
                  }}
                ></div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between font-label-mono text-sm tracking-wide text-on-surface-variant">
                <span>Postman</span>
                <span className="text-primary">85%</span>
              </div>
              <div className="h-2 w-full bg-surface-container/50 rounded-full overflow-hidden border border-outline-variant/20">
                <div
                  className="progress-bar-fill h-full rounded-full"
                  style={{
                    width: animateBars ? "85%" : "0%",
                    transition: animateBars ? "width 1.8s cubic-bezier(0.16, 1, 0.3, 1)" : "none",
                  }}
                ></div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-outline-variant/20">
              <span className="px-3 py-1 badge-pill text-[10px] rounded-lg tracking-wider uppercase">VS Code</span>
              <span className="px-3 py-1 badge-pill text-[10px] rounded-lg tracking-wider uppercase">Antigravity</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
