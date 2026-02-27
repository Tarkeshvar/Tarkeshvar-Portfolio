import React from "react";
import { motion, Variants } from "framer-motion";
import { Code2, Cpu, Smartphone, Zap, MapPin, ArrowRight } from "lucide-react";

const up: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.11, duration: 0.6, ease: "easeOut" },
  }),
};

const DOMAINS = [
  {
    icon: Code2,
    label: "Full Stack Dev",
    color: "#a855f7",
    bg: "rgba(168,85,247,0.1)",
  },
  {
    icon: Smartphone,
    label: "App Development",
    color: "#38bdf8",
    bg: "rgba(56,189,248,0.1)",
  },
  { icon: Cpu, label: "AI / ML", color: "#34d399", bg: "rgba(52,211,153,0.1)" },
  {
    icon: Zap,
    label: "n8n Automation",
    color: "#fb923c",
    bg: "rgba(251,146,60,0.1)",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center py-28 sm:py-32 overflow-hidden
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
        className="pointer-events-none absolute top-[-80px] right-[-80px]
          w-[400px] h-[400px] rounded-full blur-[120px] opacity-[0.12] dark:opacity-[0.18]"
        style={{ background: "linear-gradient(135deg,#a855f7,#ec4899)" }}
      />
      <div
        className="pointer-events-none absolute bottom-[-60px] left-[-60px]
          w-[300px] h-[300px] rounded-full blur-[100px] opacity-[0.08] dark:opacity-[0.12]"
        style={{ background: "linear-gradient(135deg,#38bdf8,#6366f1)" }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section label + heading */}
        <motion.div
          className="flex flex-col items-center text-center mb-16 sm:mb-20"
          variants={up}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={0}
        >
          <span
            className="inline-flex items-center gap-1.5 mb-5
              px-3 py-1 rounded-full text-[11px] tracking-[0.18em] uppercase font-medium
              bg-white dark:bg-white/[0.04] border border-gray-200 dark:border-white/[0.08]
              text-gray-400 dark:text-gray-500"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "linear-gradient(135deg,#a855f7,#ec4899)" }}
            />
            About me
          </span>
          <h2
            className="text-4xl sm:text-5xl lg:text-[3.6rem] font-extrabold tracking-[-0.03em] leading-[1.08]
              text-gray-900 dark:text-white"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Who I{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg,#a855f7,#ec4899)",
              }}
            >
              Am
            </span>
          </h2>
        </motion.div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* ── LEFT: Bio ── */}
          <div className="flex flex-col gap-8">
            {/* Location */}
            <motion.div
              variants={up}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={1}
              className="inline-flex items-center gap-2 self-start
                px-3 py-1.5 rounded-full text-[11px] font-medium
                bg-white dark:bg-white/[0.04] border border-gray-200 dark:border-white/[0.08]
                text-gray-400 dark:text-gray-500"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              <MapPin className="w-3 h-3" />
              Gorakhpur, India · MMMUT CSE '27
            </motion.div>

            {/* ── Para 1 — Identity ── */}
            <motion.p
              variants={up}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={2}
              className="text-[15px] sm:text-[16px] leading-[1.95] font-light text-gray-500 dark:text-gray-400"
            >
              I'm{" "}
              <span
                className="font-extrabold text-[18px] sm:text-[20px] tracking-tight bg-clip-text text-transparent"
                style={{
                  fontFamily: "'Syne', sans-serif",
                  backgroundImage: "linear-gradient(135deg,#a855f7,#ec4899)",
                }}
              >
                Tarkeshvar Mani Yadav
              </span>{" "}
              — a{" "}
              <span className="font-semibold text-gray-800 dark:text-gray-100">
                Computer Science Engineering
              </span>{" "}
              student at{" "}
              <span
                className="font-medium italic text-gray-600 dark:text-gray-300"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Madan Mohan Malaviya University of Technology
              </span>
              , Gorakhpur — Batch of{" "}
              <span
                className="font-bold text-gray-700 dark:text-gray-200 not-italic"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                2027
              </span>
              .
            </motion.p>

            {/* ── Para 2 — What I build ── */}
            <motion.p
              variants={up}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={3}
              className="text-[15px] sm:text-[16px] leading-[1.95] font-light text-gray-500 dark:text-gray-400"
            >
              I love{" "}
              <span
                className="font-semibold text-[16px] sm:text-[17px] bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(90deg,#38bdf8,#6366f1)",
                }}
              >
                building things that matter.
              </span>{" "}
              From scalable{" "}
              <span className="font-medium text-gray-700 dark:text-gray-200">
                web platforms
              </span>{" "}
              and{" "}
              <span className="font-medium text-gray-700 dark:text-gray-200">
                cross-platform mobile apps
              </span>{" "}
              to{" "}
              <span className="font-medium text-gray-700 dark:text-gray-200">
                intelligent AI-powered tools
              </span>{" "}
              — I blend{" "}
              <span
                className="font-semibold bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(90deg,#a855f7,#ec4899)",
                }}
              >
                clean code
              </span>{" "}
              with{" "}
              <span
                className="font-semibold bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(90deg,#a855f7,#ec4899)",
                }}
              >
                thoughtful design
              </span>{" "}
              to create experiences that{" "}
              <span className="italic font-medium text-gray-600 dark:text-gray-300">
                feel right.
              </span>
            </motion.p>

            {/* ── Para 3 — Mindset ── */}
            <motion.p
              variants={up}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={4}
              className="text-[15px] sm:text-[16px] leading-[1.95] font-light text-gray-500 dark:text-gray-400"
            >
              I'm a{" "}
              <span
                className="font-semibold bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(90deg,#34d399,#06b6d4)",
                }}
              >
                curious learner
              </span>{" "}
              and{" "}
              <span
                className="font-semibold bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(90deg,#34d399,#06b6d4)",
                }}
              >
                passionate problem-solver
              </span>{" "}
              — always exploring what's next and turning ideas into{" "}
              <span className="font-medium text-gray-700 dark:text-gray-200">
                impactful digital products.
              </span>
            </motion.p>

            {/* CTA */}
            <motion.button
              variants={up}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={5}
              onClick={() =>
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="self-start flex items-center gap-2 group"
            >
              <span
                className="text-sm font-semibold bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg,#a855f7,#ec4899)",
                }}
              >
                See my work
              </span>
              <span
                className="w-6 h-6 rounded-full flex items-center justify-center
                  group-hover:translate-x-1 transition-transform duration-200"
                style={{
                  background: "linear-gradient(135deg,#a855f7,#ec4899)",
                }}
              >
                <ArrowRight className="w-3 h-3 text-white" />
              </span>
            </motion.button>
          </div>

          {/* ── RIGHT: Domain cards ── */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {DOMAINS.map(({ icon: Icon, label, color, bg }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.9, y: 16 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.2 + i * 0.1,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="relative flex flex-col gap-3 p-5 sm:p-6 rounded-2xl sm:rounded-3xl
                  bg-white dark:bg-white/[0.03]
                  border border-gray-200/70 dark:border-white/[0.07]
                  shadow-sm hover:shadow-lg dark:hover:shadow-black/20
                  overflow-hidden cursor-default transition-shadow duration-300"
              >
                <div
                  className="absolute -top-4 -right-4 w-20 h-20 rounded-full blur-2xl opacity-50"
                  style={{ background: bg }}
                />
                <div
                  className="relative z-10 w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: bg }}
                >
                  <Icon className="w-5 h-5" style={{ color }} />
                </div>
                <span
                  className="relative z-10 text-sm sm:text-[15px] font-semibold
                    text-gray-700 dark:text-gray-200 leading-snug"
                >
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
