import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

const up: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

/* ── Skill icon using devicon CDN ── */
function SkillIcon({ icon, color }: { icon: string; color: string }) {
  const [errored, setErrored] = useState(false);
  if (errored) {
    return (
      <span className="text-[10px] font-bold leading-none" style={{ color }}>
        {icon.slice(0, 2).toUpperCase()}
      </span>
    );
  }
  return (
    <img
      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg`}
      alt={icon}
      className="w-6 h-6 object-contain"
      onError={() => setErrored(true)}
    />
  );
}

type Skill = { name: string; icon: string; color: string };

const CATEGORIES: {
  id: string;
  label: string;
  gradient: string;
  from: string;
  to: string;
  accent: string;
  glow: string;
  skills: Skill[];
}[] = [
  {
    id: "languages",
    label: "Languages",
    gradient: "linear-gradient(135deg,#3b82f6,#6366f1)",
    from: "#3b82f6",
    to: "#6366f1",
    accent: "#3b82f6",
    glow: "rgba(99,102,241,0.15)",
    skills: [
      { name: "C", icon: "c", color: "#555555" },
      { name: "C++", icon: "cplusplus", color: "#00599C" },
      { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
      { name: "Python", icon: "python", color: "#3776AB" },
      { name: "HTML", icon: "html5", color: "#E34F26" },
      { name: "CSS", icon: "css3", color: "#1572B6" },
    ],
  },
  {
    id: "libraries",
    label: "Libraries & Frameworks",
    gradient: "linear-gradient(135deg,#a855f7,#ec4899)",
    from: "#a855f7",
    to: "#ec4899",
    accent: "#a855f7",
    glow: "rgba(168,85,247,0.15)",
    skills: [
      { name: "React.js", icon: "react", color: "#61DAFB" },
      { name: "React Native", icon: "react", color: "#61DAFB" },
      { name: "Node.js", icon: "nodejs", color: "#339933" },
      { name: "Express.js", icon: "express", color: "#000000" },
      { name: "MongoDB", icon: "mongodb", color: "#47A248" },
      { name: "OpenAI APIs", icon: "openai", color: "#412991" },
    ],
  },
  {
    id: "ui",
    label: "UI Frameworks",
    gradient: "linear-gradient(135deg,#ec4899,#f97316)",
    from: "#ec4899",
    to: "#f97316",
    accent: "#ec4899",
    glow: "rgba(236,72,153,0.15)",
    skills: [
      { name: "Tailwind CSS", icon: "tailwindcss", color: "#06B6D4" },
      { name: "Bootstrap", icon: "bootstrap", color: "#7952B3" },
      { name: "Material UI", icon: "materialui", color: "#0081CB" },
    ],
  },
  {
    id: "tools",
    label: "Tools & Platforms",
    gradient: "linear-gradient(135deg,#f59e0b,#fb923c)",
    from: "#f59e0b",
    to: "#fb923c",
    accent: "#f59e0b",
    glow: "rgba(245,158,11,0.15)",
    skills: [
      { name: "Git", icon: "git", color: "#F05032" },
      { name: "GitHub", icon: "github", color: "#181717" },
      { name: "VS Code", icon: "vscode", color: "#007ACC" },
    ],
  },
  {
    id: "devops",
    label: "DevOps & Deployment",
    gradient: "linear-gradient(135deg,#38bdf8,#6366f1)",
    from: "#38bdf8",
    to: "#6366f1",
    accent: "#38bdf8",
    glow: "rgba(56,189,248,0.15)",
    skills: [
      { name: "Firebase", icon: "firebase", color: "#FFCA28" },
      { name: "Docker", icon: "docker", color: "#2496ED" },
      { name: "Vercel", icon: "vercel", color: "#000000" },
      { name: "Render", icon: "render", color: "#46E3B7" },
    ],
  },
  {
    id: "aiml",
    label: "AI / Machine Learning",
    gradient: "linear-gradient(135deg,#34d399,#06b6d4)",
    from: "#34d399",
    to: "#06b6d4",
    accent: "#34d399",
    glow: "rgba(52,211,153,0.15)",
    skills: [
      { name: "NumPy", icon: "numpy", color: "#013243" },
      { name: "Pandas", icon: "pandas", color: "#150458" },
      { name: "Matplotlib", icon: "matplotlib", color: "#11557c" },
      { name: "Scikit-Learn", icon: "scikitlearn", color: "#F7931E" },
      { name: "Feature Eng.", icon: "python", color: "#3776AB" },
      { name: "ML Algorithms", icon: "python", color: "#3776AB" },
    ],
  },
];

export default function Skills() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section
      id="skills"
      className="relative py-24 sm:py-32 overflow-hidden
        bg-[#f7f7f5] dark:bg-[#070709] transition-colors duration-500"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] dark:opacity-[0.055]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Orbs */}
      <div
        className="pointer-events-none absolute -top-24 -right-16 w-[420px] h-[420px] rounded-full blur-[120px] opacity-[0.09] dark:opacity-[0.13]"
        style={{ background: "linear-gradient(135deg,#a855f7,#ec4899)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-16 -left-16 w-[320px] h-[320px] rounded-full blur-[100px] opacity-[0.07] dark:opacity-[0.1]"
        style={{ background: "linear-gradient(135deg,#38bdf8,#6366f1)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Heading */}
        <motion.div
          className="text-center mb-14 sm:mb-20"
          variants={up}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={0}
        >
          <span
            className="inline-flex items-center gap-1.5 mb-5 px-3 py-1 rounded-full
              text-[11px] tracking-[0.18em] uppercase font-medium
              bg-white dark:bg-white/[0.04] border border-gray-200 dark:border-white/[0.08]
              text-gray-400 dark:text-gray-500"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "linear-gradient(135deg,#a855f7,#ec4899)" }}
            />
            What I work with
          </span>
          <h2
            className="text-4xl sm:text-5xl lg:text-[3.6rem] font-extrabold tracking-[-0.03em] leading-[1.08] text-gray-900 dark:text-white"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Skills &{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg,#a855f7,#ec4899)",
              }}
            >
              Tech Stack
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg font-light text-gray-400 dark:text-gray-500 max-w-md mx-auto">
            Technologies and tools I've built real projects with.
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          variants={up}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={1}
        >
          <button
            onClick={() => setActive(null)}
            className="px-3 py-1.5 rounded-full text-[11px] font-semibold border transition-all duration-200"
            style={
              active === null
                ? {
                    backgroundImage: "linear-gradient(135deg,#a855f7,#ec4899)",
                    color: "#fff",
                    borderColor: "transparent",
                  }
                : {
                    background: "transparent",
                    color: "#9ca3af",
                    borderColor: "rgba(156,163,175,0.3)",
                  }
            }
          >
            All
          </button>
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(active === c.id ? null : c.id)}
              className="px-3 py-1.5 rounded-full text-[11px] font-semibold border transition-all duration-200"
              style={
                active === c.id
                  ? {
                      backgroundImage: c.gradient,
                      color: "#fff",
                      borderColor: "transparent",
                    }
                  : {
                      background: "transparent",
                      color: "#9ca3af",
                      borderColor: "rgba(156,163,175,0.3)",
                    }
              }
            >
              {c.label}
            </button>
          ))}
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {CATEGORIES.filter((c) => active === null || c.id === active).map(
            (cat, i) => (
              <motion.div
                key={cat.id}
                layout
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.08 + i * 0.09,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative flex flex-col gap-5 p-6 sm:p-7 rounded-2xl sm:rounded-3xl overflow-hidden
                bg-white dark:bg-white/[0.03]
                border border-gray-200/60 dark:border-white/[0.07]
                shadow-sm hover:shadow-xl dark:hover:shadow-black/25
                transition-shadow duration-300"
              >
                {/* Corner glow */}
                <div
                  className="absolute -top-8 -right-8 w-36 h-36 rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                  style={{ background: cat.glow }}
                />

                {/* Card header */}
                <div className="relative z-10 flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0
                    transition-transform duration-200 group-hover:scale-110"
                    style={{ backgroundImage: cat.gradient }}
                  >
                    {/* gradient dot as category icon */}
                    <span className="w-3 h-3 rounded-full bg-white/80" />
                  </div>
                  <h3
                    className="text-sm sm:text-base font-bold text-gray-800 dark:text-white"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {cat.label}
                  </h3>
                </div>

                {/* Thin gradient rule */}
                <div
                  className="relative z-10 h-px w-full"
                  style={{ backgroundImage: cat.gradient, opacity: 0.25 }}
                />

                {/* Skill pills with icons */}
                <div className="relative z-10 flex flex-wrap gap-2">
                  {cat.skills.map(({ name, icon, color }, si) => (
                    <motion.div
                      key={name}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.15 + si * 0.05,
                        duration: 0.3,
                        ease: "easeOut",
                      }}
                      whileHover={{
                        scale: 1.08,
                        transition: { duration: 0.15 },
                      }}
                      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl
                      bg-gray-50 dark:bg-white/[0.04]
                      border border-gray-200/60 dark:border-white/[0.07]
                      cursor-default"
                    >
                      {/* Devicon image */}
                      <SkillIcon icon={icon} color={color} />
                      <span
                        className="text-[11px] sm:text-xs font-semibold text-gray-600 dark:text-gray-300 leading-none"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        {name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
