import React from "react";
import { motion, Variants } from "framer-motion";
import { Trophy, GraduationCap, Swords, Star } from "lucide-react";

const up: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

const ACHIEVEMENTS = [
  {
    Icon: GraduationCap,
    title: "University Topper",
    description:
      "Ranked 1st in the entire university during the 1st year of B.Tech — out of all CSE students.",
    year: "2023 – 2024",
    category: "Academic",
    gradient: "linear-gradient(135deg,#a855f7,#ec4899)",
    bg: "rgba(168,85,247,0.08)",
    color: "#a855f7",
    rank: "#1",
  },
  {
    Icon: Trophy,
    title: "Bytegram Runner-Up",
    description:
      "Secured 2nd place in Bytegram'23 — a tech competition organized by the Institution's Innovation Council (UIC).",
    year: "2023",
    category: "Competition",
    gradient: "linear-gradient(135deg,#f59e0b,#fb923c)",
    bg: "rgba(245,158,11,0.08)",
    color: "#f59e0b",
    rank: "2nd",
  },
  {
    Icon: Swords,
    title: "4th Place — HackBlitz",
    description:
      "Achieved 4th position in HackBlitz hackathon organized by Google Developer Groups, competing among 90+ teams.",
    year: "2025",
    category: "Hackathon",
    gradient: "linear-gradient(135deg,#38bdf8,#6366f1)",
    bg: "rgba(56,189,248,0.08)",
    color: "#38bdf8",
    rank: "Top 5",
  },
];

const CATEGORY_STYLE: Record<string, { text: string; bg: string }> = {
  Academic: { text: "#a855f7", bg: "rgba(168,85,247,0.1)" },
  Competition: { text: "#f59e0b", bg: "rgba(245,158,11,0.1)" },
  Hackathon: { text: "#38bdf8", bg: "rgba(56,189,248,0.1)" },
};

export default function Achievements() {
  return (
    <section
      id="achievements"
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
        className="pointer-events-none absolute -top-24 -left-16 w-[380px] h-[380px]
          rounded-full blur-[110px] opacity-[0.1] dark:opacity-[0.14]"
        style={{ background: "linear-gradient(135deg,#a855f7,#ec4899)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-16 -right-16 w-[300px] h-[300px]
          rounded-full blur-[90px] opacity-[0.08] dark:opacity-[0.1]"
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
            className="inline-flex items-center gap-1.5 mb-5
              px-3 py-1 rounded-full text-[11px] tracking-[0.18em] uppercase font-medium
              bg-white dark:bg-white/[0.04]
              border border-gray-200 dark:border-white/[0.08]
              text-gray-400 dark:text-gray-500"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "linear-gradient(135deg,#a855f7,#ec4899)" }}
            />
            Recognition
          </span>

          <h2
            className="text-4xl sm:text-5xl lg:text-[3.6rem] font-extrabold tracking-[-0.03em] leading-[1.08]
              text-gray-900 dark:text-white"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            My{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg,#a855f7,#ec4899)",
              }}
            >
              Achievements
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg font-light text-gray-400 dark:text-gray-500 max-w-md mx-auto">
            Milestones and recognition from my academic and competitive journey.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {ACHIEVEMENTS.map(
            (
              {
                Icon,
                title,
                description,
                year,
                category,
                gradient,
                bg,
                color,
                rank,
              },
              i,
            ) => {
              const cat = CATEGORY_STYLE[category];
              return (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 28, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.15 + i * 0.13,
                    duration: 0.55,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -6, transition: { duration: 0.22 } }}
                  className="group relative flex flex-col gap-5 p-6 sm:p-7 rounded-2xl sm:rounded-3xl
                  bg-white dark:bg-white/[0.03]
                  border border-gray-200/70 dark:border-white/[0.07]
                  shadow-sm hover:shadow-xl dark:hover:shadow-black/25
                  overflow-hidden transition-shadow duration-300"
                >
                  {/* Background glow */}
                  <div
                    className="absolute -top-8 -right-8 w-32 h-32 rounded-full blur-3xl
                    opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                    style={{ background: bg }}
                  />

                  {/* Top row: icon + rank */}
                  <div className="relative z-10 flex items-start justify-between">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center
                      transition-transform duration-200 group-hover:scale-110"
                      style={{ background: bg }}
                    >
                      <Icon className="w-5 h-5" style={{ color }} />
                    </div>

                    {/* Rank badge */}
                    <span
                      className="text-2xl font-extrabold bg-clip-text text-transparent leading-none"
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        backgroundImage: gradient,
                      }}
                    >
                      {rank}
                    </span>
                  </div>

                  {/* Title + category */}
                  <div className="relative z-10 flex flex-col gap-2">
                    <h3
                      className="text-base sm:text-[17px] font-bold leading-snug
                      text-gray-800 dark:text-white transition-colors duration-300"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundImage = gradient;
                        e.currentTarget.style.webkitBackgroundClip = "text";
                        e.currentTarget.style.webkitTextFillColor =
                          "transparent";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundImage = "";
                        e.currentTarget.style.webkitBackgroundClip = "";
                        e.currentTarget.style.webkitTextFillColor = "";
                      }}
                    >
                      {title}
                    </h3>

                    <span
                      className="self-start px-2.5 py-0.5 rounded-full text-[11px] font-semibold"
                      style={{
                        color: cat.text,
                        background: cat.bg,
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      {category}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="relative z-10 text-sm leading-[1.8] font-light text-gray-500 dark:text-gray-400 flex-1">
                    {description}
                  </p>

                  {/* Footer: year */}
                  <div className="relative z-10 flex items-center justify-between pt-2 border-t border-gray-100 dark:border-white/[0.06]">
                    <span
                      className="text-[11px] font-medium text-gray-400 dark:text-gray-500"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {year}
                    </span>
                    <Star
                      className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ color }}
                      fill={color}
                    />
                  </div>
                </motion.div>
              );
            },
          )}
        </div>
      </div>
    </section>
  );
}
