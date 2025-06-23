import React, { useEffect, useState } from "react";
import { ChevronDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Full Stack Developer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <div className="pt-2 sm:pt-8 min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#fefefe] via-[#f9f9f7] to-[#f2f2f2] dark:bg-gradient-to-br dark:from-[#0a0a0a] dark:via-[#1b181e] dark:to-[#0c0c0c] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center lg:justify-center text-center lg:text-left">
          {/* Image */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-center mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0}
          >
            <div className="relative">
              <div className="p-0.5 rounded-full bg-gradient-to-r from-gray-400 to-purple-200 dark:from-purple-200 dark:to-purple-300">
                <div className="w-40 h-40 sm:w-52 sm:h-52 lg:w-80 lg:h-80 rounded-full overflow-hidden bg-white dark:bg-[#1b181e] shadow-xl">
                  <img
                    src="/Infinity.jpg"
                    alt="Tarkeshvar"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="order-2 lg:order-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-6 mt-0">
            {/* Heading */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white leading-tight whitespace-nowrap"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={1}
            >
              Hello, I’m{" "}
              <span className="bg-gradient-to-r from-black to-purple-500 dark:from-white dark:to-purple-400 bg-clip-text text-transparent">
                Tarkeshvar
              </span>
            </motion.h1>

            {/* Subheading Typing */}
            <motion.div
              className="text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-300 h-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={2}
            >
              {text}
              <span
                className={`${
                  showCursor ? "opacity-100" : "opacity-0"
                } transition-opacity text-blue-600 dark:text-blue-400`}
              >
                |
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={3}
            >
              A passionate full-stack developer interested in AI, data science,
              and crafting user-focused web applications. Quick learner. Curious
              soul. Always building.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex justify-center items-center gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={4}
            >
              <a
                href="https://drive.google.com/file/d/1sMu8SPmL2D5TcFtHjwF_tdSRpxBhGoR2/view?usp=drivesdk"
                download
                className="w-36 sm:w-40 flex items-center justify-center gap-2 px-4 py-2.5 rounded-full font-semibold shadow transition-all duration-300
                bg-black text-white dark:bg-white dark:text-black hover:opacity-90"
              >
                <Download className="w-5 h-5" />
                Resume
              </a>

              <button
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="w-36 sm:w-40 text-center px-4 py-2.5 rounded-full font-semibold border text-black dark:text-white border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
              >
                Contact Me
              </button>
            </motion.div>

            <motion.div
              className="flex space-x-4 pt-2 justify-center lg:justify-start"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={5}
            >
              <a
                href="https://github.com/Tarkeshvar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200/50 dark:bg-gray-700/40 hover:bg-black/10 dark:hover:bg-white/10 text-gray-600 dark:text-gray-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/tarkeshvar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200/50 dark:bg-gray-700/40 hover:bg-black/10 dark:hover:bg-white/10 text-gray-600 dark:text-gray-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:tarkeshvarmani@gmail.com"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200/50 dark:bg-gray-700/40 hover:bg-black/10 dark:hover:bg-white/10 text-gray-600 dark:text-gray-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll Icon */}
        <motion.button
          onClick={scrollToAbout}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-white transition-colors"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: 1.1 }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
