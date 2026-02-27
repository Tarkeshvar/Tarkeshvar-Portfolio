import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const ACCENT = "linear-gradient(135deg,#a855f7,#ec4899)";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

const SOCIALS = [
  { href: "https://github.com/Tarkeshvar", Icon: Github, label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/tarkeshvar",
    Icon: Linkedin,
    label: "LinkedIn",
  },
  { href: "mailto:tarkeshvarmani@gmail.com", Icon: Mail, label: "Email" },
];

export default function Footer() {
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer
      className="relative overflow-hidden
        bg-[#f7f7f5] dark:bg-[#070709]
        border-t border-gray-200/60 dark:border-white/[0.06]
        transition-colors duration-500"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Subtle top glow */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2
          w-[500px] h-[2px] opacity-40"
        style={{ backgroundImage: ACCENT }}
      />
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2
          w-[300px] h-[60px] blur-[40px] opacity-[0.08] dark:opacity-[0.12]"
        style={{ backgroundImage: ACCENT }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-14">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8 sm:gap-6">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center sm:items-start gap-2"
          >
            <button
              onClick={() => scrollTo("#home")}
              className="flex items-center gap-1.5 group"
            >
              <span
                className="text-xl font-extrabold tracking-tight text-gray-900 dark:text-white"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Tarkeshvar
              </span>
              <motion.span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundImage: ACCENT }}
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </button>
            <p
              className="text-[11px] text-gray-400 dark:text-gray-500 font-medium tracking-widest uppercase"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Full Stack · App Dev · AI / ML
            </p>
          </motion.div>

          {/* Nav links */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
            className="flex flex-wrap justify-center sm:justify-end gap-x-6 gap-y-2"
          >
            {NAV_LINKS.map(({ href, label }) => (
              <button
                key={label}
                onClick={() => scrollTo(href)}
                className="text-sm font-medium text-gray-400 dark:text-gray-500
                  hover:text-gray-900 dark:hover:text-white
                  transition-colors duration-200"
              >
                {label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gray-200/60 dark:bg-white/[0.06]" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-[12px] text-gray-400 dark:text-gray-600 font-light flex items-center gap-1.5"
          >
            © {new Date().getFullYear()}
            <span className="font-medium text-gray-500 dark:text-gray-400">
              Tarkeshvar Mani Yadav
            </span>
          </motion.p>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="flex items-center gap-2"
          >
            {SOCIALS.map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 rounded-full flex items-center justify-center
                  bg-gray-100 dark:bg-white/[0.04]
                  border border-gray-200 dark:border-white/[0.08]
                  text-gray-400 dark:text-gray-500
                  hover:scale-110 active:scale-95
                  transition-all duration-200"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundImage = ACCENT;
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.borderColor = "transparent";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundImage = "";
                  e.currentTarget.style.color = "";
                  e.currentTarget.style.borderColor = "";
                }}
              >
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
