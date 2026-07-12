import React, { useState, useEffect, useRef } from "react";
import { Mail, Smartphone, MapPin, Terminal, Link, ArrowRight } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder submission action
    alert(`Thank you, ${form.name}! Your message has been received. I'll get back to you soon.`);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const contactDetails = [
    {
      title: "Email",
      value: "fahiiraza8@gmail.com",
      link: "mailto:fahiiraza8@gmail.com",
      icon: Mail,
    },
    {
      title: "Phone",
      value: "+92 343 6642014",
      link: "tel:+923436642014",
      icon: Smartphone,
    },
    {
      title: "Location",
      value: "Pakistan",
      link: "https://www.google.com/maps/place/Pakistan",
      icon: MapPin,
    },
    {
      title: "GitHub",
      value: "Fahad-108",
      link: "https://github.com/Fahad-108",
      icon: Terminal,
    },
    {
      title: "LinkedIn",
      value: "Muhammad Fahad Raza",
      link: "https://www.linkedin.com/in/muhmmad-fahad-raza-779524372/",
      icon: Link,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`py-section-gap px-margin-mobile md:px-gutter max-w-container-max mx-auto relative transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="mb-24 text-left">
        <span className="font-label-mono text-label-mono text-primary tracking-[0.3em] uppercase mb-4 block">
          Get In Touch
        </span>
        <h3 className="font-display-lg text-display-lg md:text-display-xl text-gradient mb-8 leading-tight">
          Let's Collaborate
        </h3>
        <p className="max-w-2xl font-body-lg text-body-lg text-on-surface-variant/90 leading-relaxed">
          Have a project, internship opportunity, or just want to say hello? Feel free to reach out. I'm always open to discussing new ideas, collaborations, and exciting opportunities.
        </p>
        <div className="flex justify-start mt-8">
          <div className="h-[2px] w-48 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side: Contact Information */}
        <div className="lg:col-span-5 space-y-8">
          <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold tracking-tight mb-8">
            Contact Information
          </h3>

          <div className="space-y-6">
            {contactDetails.map((detail, idx) => (
              <a
                key={idx}
                href={detail.link}
                target={detail.link.startsWith("http") ? "_blank" : "_self"}
                rel="noreferrer"
                className="glass-card-premium p-6 rounded-2xl flex items-center gap-6 hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="p-3.5 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-all text-primary flex items-center justify-center">
                  <detail.icon size={24} />
                </div>
                <div>
                  <h4 className="font-label-mono text-xs uppercase tracking-wider text-on-surface-variant/70">
                    {detail.title}
                  </h4>
                  <p className="font-body-md text-sm md:text-base text-on-surface font-medium mt-1 truncate max-w-[250px] sm:max-w-md">
                    {detail.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="glass-premium p-6 sm:p-10 rounded-[1rem] border border-outline-variant/20 shadow-[0_30px_60px_rgba(0,0,0,0.15)] space-y-8 relative"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="font-label-mono text-xs uppercase tracking-wider text-on-surface-variant/80">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full bg-background/50 border border-outline-variant/30 rounded-xl px-5 py-4 text-on-surface placeholder:text-on-surface-variant/30 focus:border-primary/60 focus:ring-1 focus:ring-primary/60 transition-all duration-300 outline-none"
                />
              </div>

              <div className="space-y-3">
                <label className="font-label-mono text-xs uppercase tracking-wider text-on-surface-variant/80">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                  className="w-full bg-background/50 border border-outline-variant/30 rounded-xl px-5 py-4 text-on-surface placeholder:text-on-surface-variant/30 focus:border-primary/60 focus:ring-1 focus:ring-primary/60 transition-all duration-300 outline-none"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="font-label-mono text-xs uppercase tracking-wider text-on-surface-variant/80">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
                placeholder="Enter the subject"
                className="w-full bg-background/50 border border-outline-variant/30 rounded-xl px-5 py-4 text-on-surface placeholder:text-on-surface-variant/30 focus:border-primary/60 focus:ring-1 focus:ring-primary/60 transition-all duration-300 outline-none"
              />
            </div>

            <div className="space-y-3">
              <label className="font-label-mono text-xs uppercase tracking-wider text-on-surface-variant/80">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Write your message here..."
                className="w-full bg-background/50 border border-outline-variant/30 rounded-xl px-5 py-4 text-on-surface placeholder:text-on-surface-variant/30 focus:border-primary/60 focus:ring-1 focus:ring-primary/60 transition-all duration-300 outline-none resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full primary-gradient text-on-primary-container py-5 rounded-2xl font-extrabold flex items-center justify-center gap-4 group shimmer-btn shadow-[0_20px_50px_-10px_rgba(16,185,129,0.4)] hover:-translate-y-1.5 transition-all duration-300 active:scale-95 cursor-pointer"
            >
              Send Message
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
