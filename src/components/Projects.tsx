import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  Variants,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import {
  ExternalLink,
  ArrowUpRight,
  Github,
  Sparkles,
  Code2,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────────
   PROJECT DATA — add / remove projects here
───────────────────────────────────────────────────────────── */
const PROJECTS = [
  {
    title: "Infora",
    tagline: "Rental Listing Platform",
    description:
      "Full-stack property rental platform with secure auth via Passport.js, map-based listings using Geoapify, image uploads via Cloudinary, deployed on Render.",
    tags: ["MERN", "Node.js", "Express", "MongoDB", "Geoapify", "Cloudinary"],
    liveUrl: "https://infora-live.onrender.com/listings",
    githubUrl: "#",
    accent: "linear-gradient(135deg,#a855f7,#ec4899)",
    glow: "#a855f7",
    glowRgba: "rgba(168,85,247,0.15)",
    category: "Web",
    year: "Feb 2025",
    num: "01",
  },
  {
    title: "Evaluate",
    tagline: "AI-Powered Evaluation System",
    description:
      "Automated grading system with bias-free AI evaluation, real-time analytics dashboard, digital whiteboard, and dynamic PPT report generation.",
    tags: ["AI/ML", "React", "Node.js", "MongoDB", "OAuth"],
    liveUrl: "https://ai-evaluaite-1.onrender.com/",
    githubUrl: "#",
    accent: "linear-gradient(135deg,#38bdf8,#6366f1)",
    glow: "#38bdf8",
    glowRgba: "rgba(56,189,248,0.15)",
    category: "AI",
    year: "Mar 2025",
    num: "02",
  },
  {
    title: "Dine Time",
    tagline: "Restaurant Booking App",
    description:
      "Cross-platform mobile app for real-time restaurant table booking with role-based Firebase Auth, Razorpay payments, and Android APK via EAS Build.",
    tags: ["React Native", "Expo", "TypeScript", "Firebase", "Razorpay"],
    liveUrl:
      "https://drive.google.com/file/d/1b5D3ZoShPmFRgnJHP7o7NGazk8SMpdIG/view?usp=drivesdk",
    githubUrl: "#",
    accent: "linear-gradient(135deg,#34d399,#06b6d4)",
    glow: "#34d399",
    glowRgba: "rgba(52,211,153,0.15)",
    category: "Mobile",
    year: "May 2025",
    num: "03",
  },
  {
    title: "WhatsApp AI Bot",
    tagline: "n8n Automation Workflow",
    description:
      "AI-powered WhatsApp chatbot using n8n workflows with Google Gemini LLM, conversational memory, Google Sheets FAQ/inventory lookup and order logging.",
    tags: ["n8n", "WhatsApp API", "Gemini API", "Google Sheets"],
    liveUrl:
      "https://drive.google.com/file/d/1O3t526_ZXMqbFT5gMYvLTi9-IWF2T4NI/view?usp=drivesdk",
    githubUrl: "#",
    accent: "linear-gradient(135deg,#fb923c,#f59e0b)",
    glow: "#fb923c",
    glowRgba: "rgba(251,146,60,0.15)",
    category: "AI",
    year: "Dec 2025",
    num: "04",
  },
  {
    title: "Scholarship Portal",
    tagline: "MMMUT Student Platform",
    description:
      "Scholarship discovery portal helping MMMUT students explore, apply, and track applications with real-time status updates via Firebase.",
    tags: ["React", "Firebase", "Tailwind CSS", "shadcn/ui"],
    liveUrl: "https://mmmut-scholarship.vercel.app/",
    githubUrl: "#",
    accent: "linear-gradient(135deg,#ec4899,#f97316)",
    glow: "#ec4899",
    glowRgba: "rgba(236,72,153,0.15)",
    category: "Web",
    year: "2024",
    num: "05",
  },
  {
    title: "CGPA Calculator",
    tagline: "Academic Grading Tool",
    description:
      "Smart grading calculator supporting absolute and relative grading, SGPA and CGPA computation with animated, user-friendly interface.",
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    liveUrl: "https://cgpa-azure.vercel.app/",
    githubUrl: "#",
    accent: "linear-gradient(135deg,#818cf8,#a855f7)",
    glow: "#818cf8",
    glowRgba: "rgba(129,140,248,0.15)",
    category: "Web",
    year: "2024",
    num: "06",
  },
  {
    title: "NutriAI",
    tagline: "AI-Powered Meal Planner",
    description:
      "Cross-platform mobile app for personalized meal planning and calorie tracking with Firebase Auth, real-time backend, AI-based recipe generation, and Android APK via EAS Build.",
    tags: ["React Native", "Expo", "JavaScript", "Firebase", "Convex"],
    liveUrl:
      "https://drive.google.com/file/d/11mgITr3whr5YgWOt3Ly-VfXixOYWCsFD/view?usp=drivesdk",
    githubUrl: "#",
    accent: "linear-gradient(135deg,#f97316,#ef4444)",
    glow: "#f97316",
    glowRgba: "rgba(249,115,22,0.15)",
    category: "Mobile",
    year: "May 2025",
    num: "07",
  },
] as const;

const FILTERS = ["All", "Web", "AI", "Mobile"] as const;

/* ── Tilt hook ── */
function useTilt() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 22 });
  const sy = useSpring(y, { stiffness: 200, damping: 22 });
  const rotateX = useTransform(sy, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-6, 6]);
  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  return { rotateX, rotateY, onMouseMove, onMouseLeave };
}

/* ── Project Card ── */
function ProjectCard({ p, i }: { p: (typeof PROJECTS)[number]; i: number }) {
  const { rotateX, rotateY, onMouseMove, onMouseLeave } = useTilt();
  const [hov, setHov] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 40, scale: 0.93 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, y: 16 }}
      transition={{ delay: i * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={onMouseMove}
      onMouseLeave={() => {
        onMouseLeave();
        setHov(false);
      }}
      onMouseEnter={() => setHov(true)}
      className="group relative flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl cursor-default
        bg-white dark:bg-[#0d0d0f]
        border border-gray-200/60 dark:border-white/[0.07]
        shadow-sm hover:shadow-2xl dark:hover:shadow-black/50
        transition-shadow duration-300 h-full"
    >
      {/* Hover border ring */}
      <div
        className="absolute inset-0 rounded-2xl sm:rounded-3xl pointer-events-none z-20 transition-opacity duration-300"
        style={{
          opacity: hov ? 1 : 0,
          boxShadow: `0 0 0 1.5px ${p.glow}55, 0 20px 60px ${p.glow}1a`,
        }}
      />

      {/* ── Gradient top bar ── */}
      <div
        className="h-1.5 w-full flex-shrink-0 transition-all duration-500"
        style={{
          backgroundImage: p.accent,
          height: hov ? "5px" : "3px",
        }}
      />

      {/* ── Card body ── */}
      <div className="relative flex flex-col flex-1 p-6 sm:p-7 gap-5">
        {/* Ambient glow */}
        <motion.div
          className="absolute -bottom-12 -right-12 w-52 h-52 rounded-full blur-3xl pointer-events-none"
          style={{ background: p.glowRgba }}
          animate={{ opacity: hov ? 1 : 0, scale: hov ? 1 : 0.7 }}
          transition={{ duration: 0.5 }}
        />

        {/* Row 1: number + category + year */}
        <div className="relative z-10 flex items-center justify-between">
          <span
            className="text-4xl sm:text-5xl font-extrabold leading-none select-none"
            style={{
              fontFamily: "'Syne', sans-serif",
              backgroundImage: p.accent,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              opacity: 0.18,
            }}
          >
            {p.num}
          </span>

          <div className="flex items-center gap-2">
            <span
              className="px-2.5 py-0.5 rounded-full text-[10px] font-bold"
              style={{
                backgroundImage: p.accent,
                color: "#fff",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              {p.category}
            </span>
            <span
              className="text-[10px] font-medium text-gray-400 dark:text-gray-500"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {p.year}
            </span>
          </div>
        </div>

        {/* Row 2: icon + title */}
        <div className="relative z-10 flex items-start gap-3">
          <motion.div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
            style={{ backgroundImage: p.accent }}
            animate={{ scale: hov ? 1.1 : 1, rotate: hov ? 6 : 0 }}
            transition={{ duration: 0.25 }}
          >
            <Code2 className="w-4 h-4 text-white" />
          </motion.div>
          <div>
            <motion.h3
              className="text-[17px] sm:text-[19px] font-extrabold leading-tight text-gray-900 dark:text-white"
              style={{ fontFamily: "'Syne', sans-serif" }}
              animate={{ x: hov ? 2 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {p.title}
            </motion.h3>
            <p
              className="text-[11px] font-medium mt-0.5 bg-clip-text text-transparent"
              style={{
                backgroundImage: p.accent,
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              {p.tagline}
            </p>
          </div>
        </div>

        {/* Row 3: description */}
        <p
          className="relative z-10 text-[13px] sm:text-sm leading-[1.9] font-light flex-1
            text-gray-500 dark:text-gray-400"
        >
          {p.description}
        </p>

        {/* Row 4: tech tags */}
        <div className="relative z-10 flex flex-wrap gap-1.5">
          {p.tags.map((tag, ti) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + ti * 0.04, duration: 0.3 }}
              className="px-2 py-0.5 rounded-md text-[10px] font-semibold
                bg-gray-100 dark:bg-white/[0.05]
                text-gray-500 dark:text-gray-400
                border border-gray-200/60 dark:border-white/[0.07]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          className="relative z-10 h-px w-full rounded-full"
          style={{ backgroundImage: p.accent }}
          animate={{ opacity: hov ? 0.5 : 0.15 }}
          transition={{ duration: 0.3 }}
        />

        {/* Row 5: links */}
        <div className="relative z-10 flex items-center gap-4">
          {p.liveUrl && (
            <a
              href={p.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[12px] font-semibold"
            >
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: p.accent }}
              >
                Live Demo
              </span>
              <motion.div
                animate={{ x: hov ? 2 : 0, y: hov ? -2 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowUpRight
                  className="w-3.5 h-3.5"
                  style={{ color: p.glow }}
                />
              </motion.div>
            </a>
          )}
          {p.githubUrl !== "#" && (
            <a
              href={p.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[12px] font-semibold
                text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              Source
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

/* ── Page ── */
export default function Projects() {
  const [filter, setFilter] = useState<string>("All");
  const visible = PROJECTS.filter(
    (p) => filter === "All" || p.category === filter,
  );

  return (
    <section
      id="projects"
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
        className="pointer-events-none absolute -top-24 -right-16 w-[420px] h-[420px] rounded-full blur-[120px] opacity-[0.09] dark:opacity-[0.14]"
        style={{ background: "linear-gradient(135deg,#a855f7,#ec4899)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-16 -left-16 w-[320px] h-[320px] rounded-full blur-[100px] opacity-[0.07] dark:opacity-[0.1]"
        style={{ background: "linear-gradient(135deg,#38bdf8,#6366f1)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Heading */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-1.5 mb-5 px-3 py-1 rounded-full
              text-[11px] tracking-[0.18em] uppercase font-medium
              bg-white dark:bg-white/[0.04] border border-gray-200 dark:border-white/[0.08]
              text-gray-400 dark:text-gray-500"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <Sparkles className="w-3 h-3 text-violet-400" />
            What I've built
          </motion.span>

          <h2
            className="text-4xl sm:text-5xl lg:text-[3.8rem] font-extrabold tracking-[-0.03em] leading-[1.06] text-gray-900 dark:text-white"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            My{" "}
            <span className="relative inline-block">
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg,#a855f7,#ec4899)",
                }}
              >
                Projects
              </span>
              <motion.svg
                className="absolute -bottom-1 left-0 w-full overflow-visible"
                viewBox="0 0 200 8"
                fill="none"
              >
                <motion.path
                  d="M2 6 Q50 1 100 5 Q150 9 198 4"
                  stroke="url(#sw)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.9, ease: "easeOut" }}
                />
                <defs>
                  <linearGradient id="sw" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </motion.svg>
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-5 text-base sm:text-lg font-light text-gray-400 dark:text-gray-500 max-w-md mx-auto"
          >
            A showcase of things I've designed, built, and shipped.
          </motion.p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10 sm:mb-14"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          {FILTERS.map((f) => (
            <motion.button
              key={f}
              onClick={() => setFilter(f)}
              whileTap={{ scale: 0.93 }}
              className="relative px-4 py-1.5 rounded-full text-[11px] font-semibold border transition-all duration-200"
              style={
                filter === f
                  ? {
                      backgroundImage:
                        "linear-gradient(135deg,#a855f7,#ec4899)",
                      color: "#fff",
                      borderColor: "transparent",
                      boxShadow: "0 4px 16px rgba(168,85,247,0.3)",
                    }
                  : {
                      background: "transparent",
                      color: "#9ca3af",
                      borderColor: "rgba(156,163,175,0.3)",
                    }
              }
            >
              {f}
              {filter === f && (
                <motion.span
                  layoutId="fpip"
                  className="inline-block w-1 h-1 rounded-full bg-white/70 ml-1.5 align-middle"
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <ProjectCard key={p.title} p={p} i={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Count */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-10 text-[11px] text-gray-400 dark:text-gray-600"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          {visible.length} project{visible.length !== 1 ? "s" : ""} · more
          coming soon
        </motion.p>
      </div>
    </section>
  );
}
