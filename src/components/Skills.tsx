import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      color: "from-blue-400 to-blue-600",
      lightBg: "bg-[#dbeafe]",
      darkBg: "dark:bg-blue-900/20",
      border: "border-blue-200 dark:border-blue-800/50",
      technologies: ["JavaScript", "TypeScript", "Java", "C", "HTML", "CSS"],
    },
    {
      title: "Frontend",
      color: "from-purple-400 to-purple-600",
      lightBg: "bg-[#f3e8ff]",
      darkBg: "dark:bg-purple-900/20",
      border: "border-purple-200 dark:border-purple-800/50",
      technologies: [
        "React",
        "Next.js",
        "Recoil",
        "Context API",
        "ShadCN",
        "Tailwind CSS",
        "Framer Motion",
        "Redux",
        "Material UI",
      ],
    },
    {
      title: "Backend",
      color: "from-green-400 to-green-600",
      lightBg: "bg-[#d1fae5]",
      darkBg: "dark:bg-green-900/20",
      border: "border-green-200 dark:border-green-800/50",
      technologies: [
        "Node.js",
        "Express",
        "MongoDB",
        "PostgreSQL",
        "Supabase",
        "ClerkAuth",
        "GAPIS",
        "Firebase",
        "REST API",
      ],
    },
    {
      title: "Tools & Others",
      color: "from-orange-400 to-orange-600",
      lightBg: "bg-[#ffedd5]",
      darkBg: "dark:bg-orange-800/20",
      border: "border-orange-200 dark:border-orange-800/50",
      technologies: ["Git", "GitHub", "VS Code", "Figma", "Docker", "AWS"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 bg-gradient-to-br from-[#fefefe] via-[#f9f9f7] to-[#f2f2f2] dark:bg-gradient-to-br dark:from-[#0a0a0a] dark:via-[#1b181e] dark:to-[#0c0c0c]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skill &{" "}
            <span className="bg-gradient-to-r from-black to-purple-500 dark:from-white dark:to-purple-400 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Technologies and tools I've worked with and mastered over the years
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              className={`p-6 sm:p-8 ${category.lightBg} ${category.darkBg} ${category.border} backdrop-blur-sm rounded-2xl border shadow-md hover:shadow-lg transition-all duration-300`}
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -4 }}
            >
              <h3
                className={`text-xl font-bold text-gray-900 dark:text-white bg-gradient-to-r ${category.color} bg-clip-text text-transparent mb-5`}
              >
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="min-w-[30%] text-center bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 px-4 py-1.5 rounded-full text-sm font-medium border border-gray-300 dark:border-gray-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
