import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#fefefe] via-[#f9f9f7] to-[#f2f2f2] dark:bg-gradient-to-br dark:from-[#0a0a0a] dark:via-[#1b181e] dark:to-[#0c0c0c] transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Who{" "}
            <span className="bg-gradient-to-r from-black to-purple-500 dark:from-white dark:to-purple-400 bg-clip-text text-transparent">
              I Am ?
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A little insight into my journey and what drives me.
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          className="bg-[#fffefb] dark:bg-gray-800/30 backdrop-blur-sm rounded-3xl p-10 sm:p-12 border border-gray-200 dark:border-gray-700 shadow-xl"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-base sm:text-lg text-gray-800 dark:text-gray-300 leading-8 sm:leading-9 space-y-6">
            <p>
              I’m{" "}
              <span className="bg-gradient-to-r from-black to-purple-500 dark:from-white dark:to-purple-400 bg-clip-text text-transparent font-bold">
                Tarkeshvar
              </span>
              , a Computer Science Engineering student from the Batch of 2027 at
              Madan Mohan Malaviya University of Technology (MMMUT), Gorakhpur.
            </p>

            <p>
              I enjoy building clean, scalable full-stack applications. My core
              interests lie in web development, artificial intelligence, and
              data science.
            </p>

            <p>
              I'm a curious learner and passionate problem-solver who loves
              exploring new technologies and converting ideas into impactful
              digital experiences.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
