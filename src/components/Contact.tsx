import React from "react";
import { Mail, Phone, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

const up: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: "easeOut" },
  }),
};

const CONTACTS = [
  {
    Icon: Mail,
    label: "Email",
    value: "tarkeshvarmani@gmail.com",
    href: "mailto:tarkeshvarmani@gmail.com",
    gradient: "linear-gradient(135deg,#a855f7,#ec4899)",
    bg: "rgba(168,85,247,0.08)",
    color: "#a855f7",
  },
  {
    Icon: Phone,
    label: "Phone",
    value: "+91 78806 26736",
    href: "tel:+917880626736",
    gradient: "linear-gradient(135deg,#34d399,#06b6d4)",
    bg: "rgba(52,211,153,0.08)",
    color: "#34d399",
  },
  {
    Icon: Github,
    label: "GitHub",
    value: "github.com/Tarkeshvar",
    href: "https://github.com/Tarkeshvar",
    gradient: "linear-gradient(135deg,#94a3b8,#475569)",
    bg: "rgba(148,163,184,0.08)",
    color: "#94a3b8",
  },
  {
    Icon: Linkedin,
    label: "LinkedIn",
    value: "in/tarkeshvar",
    href: "https://www.linkedin.com/in/tarkeshvar",
    gradient: "linear-gradient(135deg,#38bdf8,#6366f1)",
    bg: "rgba(56,189,248,0.08)",
    color: "#38bdf8",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
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
        className="pointer-events-none absolute -top-20 -right-20 w-[380px] h-[380px]
          rounded-full blur-[110px] opacity-[0.1] dark:opacity-[0.15]"
        style={{ background: "linear-gradient(135deg,#a855f7,#ec4899)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-16 -left-16 w-[300px] h-[300px]
          rounded-full blur-[90px] opacity-[0.08] dark:opacity-[0.12]"
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
              bg-white dark:bg-white/[0.04]
              border border-gray-200 dark:border-white/[0.08]
              text-gray-400 dark:text-gray-500"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "linear-gradient(135deg,#a855f7,#ec4899)" }}
            />
            Get in touch
          </span>

          <h2
            className="text-4xl sm:text-5xl lg:text-[3.6rem] font-extrabold tracking-[-0.03em] leading-[1.08]
              text-gray-900 dark:text-white"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Let's{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg,#a855f7,#ec4899)",
              }}
            >
              Connect
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg font-light text-gray-400 dark:text-gray-500 max-w-md mx-auto">
            Open to opportunities, collabs, or just a good conversation — reach
            out through any platform below.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-3xl mx-auto">
          {CONTACTS.map(
            ({ Icon, label, value, href, gradient, bg, color }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.15 + i * 0.09,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative flex items-center gap-5 p-5 sm:p-6 rounded-2xl
                bg-white dark:bg-white/[0.03]
                border border-gray-200/70 dark:border-white/[0.07]
                shadow-sm hover:shadow-lg dark:hover:shadow-black/20
                overflow-hidden transition-shadow duration-300"
              >
                {/* Corner glow — only shows on hover */}
                <div
                  className="absolute -top-6 -right-6 w-24 h-24 rounded-full blur-2xl
                  opacity-0 group-hover:opacity-50 transition-opacity duration-400"
                  style={{ background: bg }}
                />

                {/* Icon box */}
                <div
                  className="relative z-10 w-11 h-11 rounded-xl flex items-center justify-center
                  flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                  style={{ background: bg }}
                >
                  <Icon className="w-5 h-5" style={{ color }} />
                </div>

                {/* Text */}
                <div className="relative z-10 flex flex-col min-w-0 flex-1 gap-0.5">
                  <span
                    className="text-[10px] font-medium tracking-[0.18em] uppercase
                    text-gray-400 dark:text-gray-500"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {label}
                  </span>
                  {/* Value — plain text default, gradient only on hover via JS */}
                  <span
                    className="text-sm sm:text-[15px] font-semibold truncate
                    text-gray-700 dark:text-gray-200"
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.backgroundImage = gradient;
                      el.style.webkitBackgroundClip = "text";
                      el.style.webkitTextFillColor = "transparent";
                      el.style.backgroundClip = "text";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.backgroundImage = "";
                      el.style.webkitBackgroundClip = "";
                      el.style.webkitTextFillColor = "";
                      el.style.backgroundClip = "";
                    }}
                  >
                    {value}
                  </span>
                </div>

                {/* Arrow */}
                <ArrowUpRight
                  className="relative z-10 w-4 h-4 flex-shrink-0
                  text-gray-300 dark:text-gray-600
                  group-hover:text-gray-500 dark:group-hover:text-gray-300
                  group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                  transition-all duration-200"
                />
              </motion.a>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
