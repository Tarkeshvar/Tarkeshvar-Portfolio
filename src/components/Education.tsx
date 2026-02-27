import React from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { motion, Variants } from "framer-motion";

const up: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

const EDUCATION = [
  {
    degree: "B.Tech — Computer Science & Engineering",
    short: "B.Tech CSE",
    institution: "Madan Mohan Malaviya University of Technology",
    short_inst: "MMMUT",
    location: "Gorakhpur",
    period: "2023 – Ongoing",
    grade: "9.30 CGPA",
    status: "current",
    gradient: "linear-gradient(135deg,#a855f7,#ec4899)",
    bg: "rgba(168,85,247,0.08)",
    color: "#a855f7",
    gradeBg: "rgba(168,85,247,0.08)",
    gradeColor: "#a855f7",
  },
  {
    degree: "Class XII — CBSE",
    short: "Class XII",
    institution: "Aatmdeep Vidyalaya",
    short_inst: "Aatmdeep Vidyalaya",
    location: "Gorakhpur",
    period: "2022",
    grade: "88.4%",
    status: "completed",
    gradient: "linear-gradient(135deg,#38bdf8,#6366f1)",
    bg: "rgba(56,189,248,0.08)",
    color: "#38bdf8",
    gradeBg: "rgba(56,189,248,0.08)",
    gradeColor: "#38bdf8",
  },
  {
    degree: "Class X — CBSE",
    short: "Class X",
    institution: "Aatmdeep Vidyalaya",
    short_inst: "Aatmdeep Vidyalaya",
    location: "Gorakhpur",
    period: "2020",
    grade: "95.6%",
    status: "completed",
    gradient: "linear-gradient(135deg,#34d399,#06b6d4)",
    bg: "rgba(52,211,153,0.08)",
    color: "#34d399",
    gradeBg: "rgba(52,211,153,0.08)",
    gradeColor: "#34d399",
  },
];

export default function Education() {
  return (
    <section
      id="education"
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
        className="pointer-events-none absolute -top-24 -right-16 w-[400px] h-[400px]
          rounded-full blur-[120px] opacity-[0.1] dark:opacity-[0.15]"
        style={{ background: "linear-gradient(135deg,#a855f7,#ec4899)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-16 -left-16 w-[300px] h-[300px]
          rounded-full blur-[90px] opacity-[0.07] dark:opacity-[0.1]"
        style={{ background: "linear-gradient(135deg,#34d399,#06b6d4)" }}
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
              bg-white dark:bg-white/[0.04]
              border border-gray-200 dark:border-white/[0.08]
              text-gray-400 dark:text-gray-500"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "linear-gradient(135deg,#a855f7,#ec4899)" }}
            />
            Academic background
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
              Education
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg font-light text-gray-400 dark:text-gray-500 max-w-sm mx-auto">
            A look at my academic journey so far.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div
            className="absolute left-5 sm:left-6 top-0 bottom-0 w-px
            bg-gradient-to-b from-transparent via-gray-200 dark:via-white/[0.08] to-transparent"
          />

          <div className="space-y-6 sm:space-y-7">
            {EDUCATION.map(
              (
                {
                  degree,
                  institution,
                  location,
                  period,
                  grade,
                  status,
                  gradient,
                  bg,
                  color,
                  gradeBg,
                  gradeColor,
                },
                i,
              ) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.15 + i * 0.13,
                    duration: 0.55,
                    ease: "easeOut",
                  }}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="group relative flex gap-5 sm:gap-7"
                >
                  {/* Timeline node */}
                  <div className="relative flex-shrink-0 flex flex-col items-center">
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.2 }}
                      className="relative z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl
                      flex items-center justify-center shadow-sm
                      border border-gray-200/60 dark:border-white/[0.08]"
                      style={{ background: bg }}
                    >
                      <GraduationCap
                        className="w-4 h-4 sm:w-5 sm:h-5"
                        style={{ color }}
                      />

                      {/* Active pulse for current */}
                      {status === "current" && (
                        <motion.span
                          className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full"
                          style={{ background: color }}
                          animate={{ scale: [1, 1.6, 1], opacity: [1, 0.3, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      )}
                    </motion.div>
                  </div>

                  {/* Card */}
                  <div
                    className="flex-1 relative overflow-hidden rounded-2xl
                    bg-white dark:bg-white/[0.03]
                    border border-gray-200/70 dark:border-white/[0.07]
                    shadow-sm hover:shadow-lg dark:hover:shadow-black/20
                    transition-shadow duration-300 p-5 sm:p-6"
                  >
                    {/* Corner glow */}
                    <div
                      className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full blur-3xl
                      opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                      style={{ background: bg }}
                    />

                    {/* Top row */}
                    <div className="relative z-10 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
                      <div className="flex flex-col gap-1.5">
                        {/* Degree */}
                        <h3
                          className="text-base sm:text-[17px] font-bold text-gray-800 dark:text-white leading-snug"
                          style={{ fontFamily: "'Syne', sans-serif" }}
                        >
                          {degree}
                        </h3>

                        {/* Institution */}
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          {institution}
                        </p>
                      </div>

                      {/* Grade badge */}
                      <div
                        className="self-start flex-shrink-0 px-3 py-1 rounded-full
                        text-xs font-bold border"
                        style={{
                          background: gradeBg,
                          color: gradeColor,
                          borderColor: gradeColor + "33",
                          fontFamily: "'JetBrains Mono', monospace",
                        }}
                      >
                        {grade}
                      </div>
                    </div>

                    {/* Bottom row: meta */}
                    <div className="relative z-10 flex flex-wrap items-center gap-4 mt-4">
                      <span
                        className="flex items-center gap-1.5 text-[11px] font-medium
                        text-gray-400 dark:text-gray-500"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        <Calendar className="w-3 h-3" />
                        {period}
                      </span>
                      <span
                        className="flex items-center gap-1.5 text-[11px] font-medium
                        text-gray-400 dark:text-gray-500"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        <MapPin className="w-3 h-3" />
                        {location}
                      </span>

                      {status === "current" && (
                        <span
                          className="flex items-center gap-1.5 text-[11px] font-semibold
                          px-2 py-0.5 rounded-full"
                          style={{
                            color,
                            background: bg,
                            fontFamily: "'JetBrains Mono', monospace",
                          }}
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full animate-pulse"
                            style={{ background: color }}
                          />
                          In Progress
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
