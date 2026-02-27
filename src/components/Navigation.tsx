import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

const NAV_ITEMS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

/* matches Hero's role gradients */
const ACCENT = "linear-gradient(135deg,#a855f7,#ec4899)";

const mobileMenuVariants: Variants = {
  hidden: { opacity: 0, y: -8, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.22, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -8,
    scale: 0.97,
    transition: { duration: 0.18, ease: "easeIn" },
  },
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [active, setActive] = useState("#home");
  const menuRef = useRef<HTMLDivElement>(null);

  /* scroll detection */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* active section tracker */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    NAV_ITEMS.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  /* dark mode */
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  /* close on outside click */
  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-[#070709]/80 backdrop-blur-xl shadow-sm border-b border-gray-200/60 dark:border-white/[0.06]"
          : "bg-transparent"
      }`}
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* ── Logo ── */}
          <button
            onClick={() => scrollTo("#home")}
            className="flex-shrink-0 flex items-center gap-1.5 group"
          >
            <span
              className="text-lg sm:text-xl font-extrabold tracking-tight text-gray-900 dark:text-white"
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

          {/* ── Desktop nav ── */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = active === item.href;
              return (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.href)}
                  className="relative px-3 py-1.5 text-sm font-medium transition-colors duration-200
                    text-gray-500 dark:text-gray-400
                    hover:text-gray-900 dark:hover:text-white"
                >
                  {item.label}
                  {/* active underline */}
                  <motion.span
                    className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full"
                    style={{ backgroundImage: ACCENT }}
                    initial={false}
                    animate={{
                      scaleX: isActive ? 1 : 0,
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  />
                </button>
              );
            })}
          </div>

          {/* ── Right controls ── */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Theme toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center
                bg-gray-100 dark:bg-white/5
                border border-gray-200 dark:border-white/10
                text-gray-500 dark:text-gray-400
                hover:scale-110 active:scale-95
                transition-all duration-200"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isDark ? "sun" : "moon"}
                  initial={{ rotate: -30, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 30, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="flex items-center justify-center"
                >
                  {isDark ? <Sun size={15} /> : <Moon size={15} />}
                </motion.span>
              </AnimatePresence>
            </button>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setIsOpen((p) => !p)}
              className="md:hidden w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center
                bg-gray-100 dark:bg-white/5
                border border-gray-200 dark:border-white/10
                text-gray-500 dark:text-gray-400
                hover:scale-110 active:scale-95
                transition-all duration-200"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isOpen ? "x" : "menu"}
                  initial={{ rotate: -20, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 20, opacity: 0 }}
                  transition={{ duration: 0.16 }}
                  className="flex items-center justify-center"
                >
                  {isOpen ? <X size={16} /> : <Menu size={16} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile dropdown ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            variants={mobileMenuVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="md:hidden mx-4 sm:mx-6 mb-3 mt-1 overflow-hidden
              rounded-2xl
              bg-white/95 dark:bg-[#0e0e10]/95
              backdrop-blur-xl
              border border-gray-200/60 dark:border-white/[0.07]
              shadow-xl shadow-black/5 dark:shadow-black/30"
          >
            <div className="px-3 py-3 space-y-0.5">
              {NAV_ITEMS.map((item, i) => {
                const isActive = active === item.href;
                return (
                  <motion.button
                    key={item.label}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: i * 0.04,
                      duration: 0.2,
                      ease: "easeOut",
                    }}
                    onClick={() => scrollTo(item.href)}
                    className="flex items-center justify-between w-full
                      px-3 py-2.5 rounded-xl text-sm font-medium
                      transition-all duration-150 text-left"
                    style={
                      isActive
                        ? {
                            backgroundImage:
                              "linear-gradient(135deg,rgba(168,85,247,0.12),rgba(236,72,153,0.08))",
                            color: "#a855f7",
                          }
                        : {}
                    }
                  >
                    <span
                      className={
                        isActive ? "" : "text-gray-600 dark:text-gray-300"
                      }
                    >
                      {item.label}
                    </span>
                    {isActive && (
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundImage: ACCENT }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
