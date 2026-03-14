import React, { useEffect, useState } from "react";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Download,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { motion, useMotionValue, useSpring, Variants } from "framer-motion";

/* ── Load Google Fonts once ── */
const FontLoader = () => {
  useEffect(() => {
    if (document.getElementById("hero-fonts")) return;
    const link = document.createElement("link");
    link.id = "hero-fonts";
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=JetBrains+Mono:wght@400;500&display=swap";
    document.head.appendChild(link);
  }, []);
  return null;
};

const ROLES = [
  {
    label: "Full Stack Developer",
    gradient: "linear-gradient(135deg,#a855f7,#ec4899)",
    glow: "rgba(168,85,247,0.20)",
    tw: "from-purple-500 to-pink-500",
  },
  {
    label: "App Developer",
    gradient: "linear-gradient(135deg,#38bdf8,#6366f1)",
    glow: "rgba(56,189,248,0.20)",
    tw: "from-sky-400 to-indigo-500",
  },
  {
    label: "AI / ML Engineer",
    gradient: "linear-gradient(135deg,#34d399,#06b6d4)",
    glow: "rgba(52,211,153,0.20)",
    tw: "from-emerald-400 to-cyan-500",
  },
];

export default function Hero() {
  const [ri, setRi] = useState(0);
  const [typed, setTyped] = useState("");
  const [del, setDel] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const t = setInterval(() => setBlink((p) => !p), 520);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const full = ROLES[ri].label;
    let id;
    if (!del && typed === full) {
      id = setTimeout(() => setDel(true), 2000);
    } else if (del && typed === "") {
      setDel(false);
      setRi((p) => (p + 1) % ROLES.length);
    } else {
      id = setTimeout(
        () =>
          setTyped(
            del
              ? full.slice(0, typed.length - 1)
              : full.slice(0, typed.length + 1),
          ),
        del ? 45 : 85,
      );
    }
    return () => clearTimeout(id);
  }, [typed, del, ri]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 40, damping: 18 });
  const sy = useSpring(my, { stiffness: 40, damping: 18 });
  useEffect(() => {
    const fn = (e) => {
      mx.set(((e.clientX - window.innerWidth / 2) / window.innerWidth) * 28);
      my.set(((e.clientY - window.innerHeight / 2) / window.innerHeight) * 28);
    };
    window.addEventListener("mousemove", fn);
    return () => window.removeEventListener("mousemove", fn);
  }, []);

  const role = ROLES[ri];

  const up: Variants = {
    hidden: { opacity: 0, y: 28 },
    show: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.12,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const switchRole = (i) => {
    setRi(i);
    setTyped("");
    setDel(false);
  };

  return (
    <>
      <FontLoader />
      <section
        className="relative min-h-screen w-full flex items-center justify-center overflow-hidden
          bg-[#f7f7f5] dark:bg-[#070709] transition-colors duration-500"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {/* ── Background ── */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.04] dark:opacity-[0.07]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <motion.div
            style={{ x: sx, y: sy, background: role.glow }}
            className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full blur-[110px] transition-[background] duration-700"
          />
          <motion.div
            style={{ x: sx, y: sy, background: "rgba(99,102,241,0.09)" }}
            className="absolute -bottom-20 -left-20 w-[360px] h-[360px] rounded-full blur-[90px]"
          />
        </div>

        {/* ── Layout ── */}
        <div
          className="relative z-10 w-full max-w-6xl mx-auto
          px-5 sm:px-8 lg:px-12
          py-24 sm:py-28 lg:py-0
          min-h-screen flex items-center"
        >
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* ════ TEXT ════ */}
            <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-4 sm:gap-5">
              {/* Status */}
              <motion.div
                variants={up}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={0}
                className="inline-flex items-center gap-2
                  px-3 py-1.5 rounded-full
                  text-[11px] font-medium tracking-wide
                  bg-white dark:bg-white/5
                  border border-gray-200/80 dark:border-white/10
                  text-gray-500 dark:text-gray-400 shadow-sm"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for opportunities
              </motion.div>

              {/* Eyebrow */}
              <motion.p
                variants={up}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={1}
                className="text-xs sm:text-sm text-gray-400 dark:text-gray-500
                  tracking-[0.18em] uppercase font-light"
              >
                Hello, I'm
              </motion.p>

              {/* Name */}
              <motion.h1
                variants={up}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={2}
                className="text-[2.8rem] leading-[1.0] sm:text-[3.8rem] lg:text-[4.8rem] xl:text-[5.6rem]
                  font-extrabold tracking-[-0.03em]
                  text-gray-900 dark:text-white"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Tarkeshvar
                <motion.span
                  className="inline-block w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 rounded-full ml-1 align-bottom mb-1.5"
                  style={{ backgroundImage: role.gradient }}
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                />
              </motion.h1>

              {/* Typewriter */}
              <motion.div
                variants={up}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={3}
                className="flex items-center gap-0.5"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  minHeight: "2.2rem",
                }}
              >
                <span
                  className="text-lg sm:text-2xl lg:text-3xl font-medium bg-clip-text text-transparent"
                  style={{ backgroundImage: role.gradient }}
                >
                  {typed}
                </span>
                <span
                  className="text-lg sm:text-2xl lg:text-3xl font-light transition-opacity duration-100"
                  style={{
                    opacity: blink ? 1 : 0,
                    backgroundImage: role.gradient,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  |
                </span>
              </motion.div>

              {/* Description */}
              <motion.div
                variants={up}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={4}
                className="flex flex-col gap-2 max-w-[300px] sm:max-w-md lg:max-w-lg"
              >
                <p className="text-sm sm:text-base lg:text-[1.05rem] leading-[2] font-light text-gray-400 dark:text-gray-500">
                  Building{" "}
                  <span
                    className="font-semibold bg-clip-text text-transparent"
                    style={{
                      backgroundImage: "linear-gradient(90deg,#a855f7,#ec4899)",
                    }}
                  >
                    scalable web platforms,
                  </span>{" "}
                  crafting{" "}
                  <span
                    className="font-semibold bg-clip-text text-transparent"
                    style={{
                      backgroundImage: "linear-gradient(90deg,#38bdf8,#6366f1)",
                    }}
                  >
                    mobile experiences,
                  </span>{" "}
                  and engineering{" "}
                  <span
                    className="font-semibold bg-clip-text text-transparent"
                    style={{
                      backgroundImage: "linear-gradient(90deg,#34d399,#06b6d4)",
                    }}
                  >
                    intelligent AI solutions
                  </span>{" "}
                  that make a real difference.
                </p>
              </motion.div>

              {/* CTAs */}
              <motion.div
                variants={up}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={6}
                className="flex flex-wrap justify-center lg:justify-start gap-3 pt-1"
              >
                <a
                  href="https://drive.google.com/file/d/1w9Ft_ZKILLjjZ4yRI2mnhbe6PtKwENip/view?usp=drivesdk"
                  download
                  className="group flex items-center gap-2
                    px-5 sm:px-6 py-2.5 sm:py-3 rounded-full
                    text-xs sm:text-sm font-semibold text-white
                    hover:scale-[1.04] active:scale-[0.97] transition-transform duration-200 shadow-lg"
                  style={{
                    backgroundImage: role.gradient,
                    boxShadow: `0 6px 22px ${role.glow}`,
                  }}
                >
                  <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:-translate-y-0.5 transition-transform" />
                  Resume
                  <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 opacity-70" />
                </a>
                <button
                  onClick={() =>
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full
                    text-xs sm:text-sm font-semibold
                    border border-gray-200 dark:border-white/10
                    text-gray-700 dark:text-gray-300
                    hover:bg-gray-100 dark:hover:bg-white/5
                    hover:scale-[1.04] active:scale-[0.97] transition-all duration-200"
                >
                  Contact Me
                </button>
              </motion.div>

              {/* Socials */}
              <motion.div
                variants={up}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={7}
                className="flex gap-2.5 sm:gap-3 pt-1 justify-center lg:justify-start"
              >
                {[
                  {
                    href: "https://github.com/Tarkeshvar",
                    Icon: Github,
                    label: "GitHub",
                  },
                  {
                    href: "https://www.linkedin.com/in/tarkeshvar",
                    Icon: Linkedin,
                    label: "LinkedIn",
                  },
                  {
                    href: "mailto:tarkeshvarmani@gmail.com",
                    Icon: Mail,
                    label: "Email",
                  },
                ].map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center
                      bg-white dark:bg-white/5
                      border border-gray-200 dark:border-white/10
                      text-gray-500 dark:text-gray-400
                      hover:scale-110 active:scale-95
                      transition-all duration-200"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundImage = role.gradient;
                      e.currentTarget.style.color = "#fff";
                      e.currentTarget.style.borderColor = "transparent";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundImage = "";
                      e.currentTarget.style.color = "";
                      e.currentTarget.style.borderColor = "";
                    }}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </motion.div>
            </div>

            {/* ════ PHOTO ════ */}
            <motion.div
              variants={up}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={1}
              className="order-1 lg:order-2 flex justify-center lg:justify-end"
            >
              <div className="relative flex-shrink-0">
                {/* Outer spinning ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute rounded-full border border-dashed"
                  style={{
                    inset: "-14px",
                    borderColor: "rgba(168,85,247,0.25)",
                  }}
                />
                {/* Inner counter ring */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 34,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute rounded-full border border-dotted"
                  style={{
                    inset: "-26px",
                    borderColor: "rgba(56,189,248,0.18)",
                  }}
                />

                {/* Gradient border ring */}
                <div
                  className="absolute rounded-full transition-all duration-700"
                  style={{
                    inset: "-3px",
                    backgroundImage: role.gradient,
                    borderRadius: "9999px",
                    padding: "3px",
                  }}
                />

                {/* Photo */}
                {/*
                  Size ladder:
                  mobile  < 640px  → 160×160
                  sm      ≥ 640px  → 208×208
                  lg      ≥ 1024px → 288×288
                  xl      ≥ 1280px → 320×320
                */}
                <div
                  className="relative z-10 rounded-full overflow-hidden
                    w-40 h-40 sm:w-52 sm:h-52 lg:w-72 lg:h-72 xl:w-80 xl:h-80
                    bg-white dark:bg-[#111]
                    ring-[3px] ring-[#f7f7f5] dark:ring-[#070709]
                    shadow-2xl"
                >
                  <img
                    src="/abc.png"
                    alt="Tarkeshvar"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Stat cards — only on large screens */}
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.4,
                  }}
                  className="hidden lg:flex absolute -left-12 top-[30%]
                    flex-col items-center
                    bg-white dark:bg-[#161618]
                    border border-gray-100 dark:border-white/10
                    shadow-xl rounded-2xl px-3 py-2 min-w-[72px]"
                >
                  <span
                    className="text-base font-bold text-gray-900 dark:text-white"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    3rd
                  </span>
                  <span className="text-[10px] text-gray-400 dark:text-gray-500 leading-tight mt-0.5">
                    Yr Student
                  </span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 3.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.1,
                  }}
                  className="hidden lg:flex absolute -left-12 top-[54%]
                    flex-col items-center
                    bg-white dark:bg-[#161618]
                    border border-gray-100 dark:border-white/10
                    shadow-xl rounded-2xl px-3 py-2 min-w-[72px]"
                >
                  <span
                    className="text-base font-bold text-gray-900 dark:text-white"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    10+
                  </span>
                  <span className="text-[10px] text-gray-400 dark:text-gray-500 leading-tight mt-0.5">
                    projects
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll cue */}
        <motion.button
          onClick={() =>
            document
              .querySelector("#about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2.2, repeat: Infinity }}
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2
            flex flex-col items-center gap-1
            text-gray-300 dark:text-gray-600
            hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        >
          <span
            className="text-[9px] sm:text-[10px] tracking-[0.22em] uppercase font-medium"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            scroll
          </span>
          <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </motion.button>
      </section>
    </>
  );
}
