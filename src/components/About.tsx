import React from "react";
import { motion, Variants } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";

const up: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.11, duration: 0.6, ease: "easeOut" },
  }),
};

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

      <div className="relative z-10 w-full max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Heading */}
        <motion.div
          className="flex flex-col items-center text-center mb-14 sm:mb-18"
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

        {/* Bio card */}
        <motion.div
          variants={up}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={1}
          className="relative rounded-3xl p-8 sm:p-10 lg:p-12
            bg-white dark:bg-white/[0.02]
            border border-gray-200/70 dark:border-white/[0.07]
            shadow-sm overflow-hidden"
        >
          {/* Inner corner glow */}
          <div
            className="absolute -top-16 -right-16 w-52 h-52 rounded-full blur-[80px] opacity-20 dark:opacity-25 pointer-events-none"
            style={{ background: "linear-gradient(135deg,#a855f7,#ec4899)" }}
          />
          <div
            className="absolute -bottom-16 -left-16 w-44 h-44 rounded-full blur-[70px] opacity-10 dark:opacity-15 pointer-events-none"
            style={{ background: "linear-gradient(135deg,#38bdf8,#6366f1)" }}
          />

          <div className="relative z-10 flex flex-col gap-7">
            {/* Location */}
            <motion.div
              variants={up}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={2}
              className="inline-flex items-center gap-2 self-start
                px-3 py-1.5 rounded-full text-[11px] font-medium
                bg-gray-50 dark:bg-white/[0.04]
                border border-gray-200 dark:border-white/[0.08]
                text-gray-400 dark:text-gray-500"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              <MapPin className="w-3 h-3" />
              Gorakhpur, India · MMMUT CSE '27
            </motion.div>

            {/* Para 1 — Identity */}
            <motion.p
              variants={up}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={3}
              className="text-[15px] sm:text-[16px] leading-[2] font-light text-gray-500 dark:text-gray-400"
            >
              I'm{" "}
              <span
                className="font-extrabold text-[18px] sm:text-[20px] tracking-tight bg-clip-text text-transparent"
                style={{
                  fontFamily: "'Syne', sans-serif",
                  backgroundImage: "linear-gradient(135deg,#a855f7,#ec4899)",
                }}
              >
                Tarkeshvar Mani Yadav,
              </span>{" "}
              a{" "}
              <span className="font-semibold text-gray-800 dark:text-gray-100">
                Computer Science Engineering
              </span>{" "}
              student at{" "}
              <span className="font-medium italic text-gray-600 dark:text-gray-300">
                Madan Mohan Malaviya University of Technology,
              </span>{" "}
              Gorakhpur. Batch of{" "}
              <span
                className="font-bold text-gray-700 dark:text-gray-200 not-italic"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                2027.
              </span>
            </motion.p>

            {/* Thin divider */}
            <div
              className="h-px w-16 rounded-full opacity-30"
              style={{
                backgroundImage: "linear-gradient(90deg,#a855f7,#ec4899)",
              }}
            />

            {/* Para 2 — What I build */}
            <motion.p
              variants={up}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={4}
              className="text-[15px] sm:text-[16px] leading-[2] font-light text-gray-500 dark:text-gray-400"
            >
              I genuinely love{" "}
              <span
                className="font-semibold bg-clip-text text-transparent"
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
                intelligent AI-powered tools,
              </span>{" "}
              I bring together{" "}
              <span
                className="font-semibold bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(90deg,#a855f7,#ec4899)",
                }}
              >
                clean code
              </span>{" "}
              and{" "}
              <span
                className="font-semibold bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(90deg,#a855f7,#ec4899)",
                }}
              >
                thoughtful design
              </span>{" "}
              to craft experiences that{" "}
              <span className="italic font-medium text-gray-600 dark:text-gray-300">
                truly feel right.
              </span>
            </motion.p>

            {/* Para 3 — Mindset */}
            <motion.p
              variants={up}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={5}
              className="text-[15px] sm:text-[16px] leading-[2] font-light text-gray-500 dark:text-gray-400"
            >
              At heart, I'm a{" "}
              <span
                className="font-semibold bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(90deg,#34d399,#06b6d4)",
                }}
              >
                curious learner
              </span>{" "}
              and a{" "}
              <span
                className="font-semibold bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(90deg,#34d399,#06b6d4)",
                }}
              >
                passionate problem-solver
              </span>{" "}
              who is always exploring what's next and turning ideas into{" "}
              <span className="font-medium text-gray-700 dark:text-gray-200">
                impactful digital products.
              </span>
            </motion.p>

            {/* Thin divider */}
            <div
              className="h-px w-16 rounded-full opacity-30"
              style={{
                backgroundImage: "linear-gradient(90deg,#34d399,#06b6d4)",
              }}
            />

            {/* CTA */}
            <motion.button
              variants={up}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={6}
              onClick={() =>
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="self-start flex items-center gap-2.5 group"
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
        </motion.div>
      </div>
    </section>
  );
}
