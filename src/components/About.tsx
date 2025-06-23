import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#fefefe] via-[#f9f9f7] to-[#f2f2f2] dark:bg-gradient-to-br dark:from-[#0a0a0a] dark:via-[#1b181e] dark:to-[#0c0c0c] transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Who{" "}
            <span className="bg-gradient-to-r from-black to-purple-500 dark:from-white dark:to-purple-400 bg-clip-text text-transparent">
              I Am ?
            </span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Get to know a bit about me and what drives my journey.
          </p>
        </motion.div>

        {/* Info Box */}
        <motion.div
          className="bg-[#fffefb] dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 sm:p-10 border border-gray-200 dark:border-gray-700 shadow-xl"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-base sm:text-lg text-gray-800 dark:text-gray-300 leading-relaxed space-y-4">
            <span className="block mb-4">
              I’m{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                Tarkeshvar
              </span>
              , a CSE student from the{" "}
              <strong className="text-purple-600 dark:text-purple-400">
                Batch of 2027
              </strong>{" "}
              at{" "}
              <strong className="text-blue-500 dark:text-blue-400">
                Madan Mohan Malaviya University of Technology (MMMUT), Gorakhpur
              </strong>
              .
            </span>
            <span className="block mb-4">
              I enjoy building clean, scalable full-stack applications. My
              interests span across{" "}
              <span className="font-medium text-green-600 dark:text-green-400">
                Web Development
              </span>
              ,{" "}
              <span className="font-medium text-indigo-600 dark:text-indigo-400">
                Artificial Intelligence
              </span>
              , and{" "}
              <span className="font-medium text-yellow-600 dark:text-yellow-400">
                Data Science
              </span>
              .
            </span>
            <span className="block mb-4">
              I’m a quick learner, curious by nature, and always open to
              exploring new technologies. My strengths include a deep sense of
              detail, strong logic, and a bit of healthy overthinking — which
              helps me optimize and improve.
            </span>
            <span className="block">
              Outside coding, I enjoy exploring tech trends, writing clean UI,
              and building meaningful digital experiences.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
