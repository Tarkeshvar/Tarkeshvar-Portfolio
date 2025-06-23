import React from "react";
import { motion } from "framer-motion";

const Achievements = () => {
  const achievements = [
    {
      title: "University Topper",
      description: "Achieved 1st rank in 1st year of university.",
      year: "2023-2024",
      category: "Academic",
    },
    {
      title: "Bytegram Runner Up (UIC)",
      description:
        "Secured runner up position in Bytegram competition organized by UIC.",
      year: "2023",
      category: "Competition",
    },
    {
      title: "4th Rank in HackBlitz",
      description:
        "Achieved 4th position in HackBlitz hackathon organized by Google Developer Groups.",
      year: "2025",
      category: "Hackathon",
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
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#fefefe] via-[#f9f9f7] to-[#f2f2f2] dark:bg-gradient-to-br dark:from-[#0a0a0a] dark:via-[#1b181e] dark:to-[#0c0c0c] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-black to-purple-500 dark:from-white dark:to-purple-400 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Milestones and recognition that showcase my academic and competitive
            journey.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.title}
              className="p-6 sm:p-7 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/30 backdrop-blur-md shadow-md hover:shadow-lg transition-all group"
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1 group-hover:text-purple-500 transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full text-gray-600 dark:text-gray-300 font-medium">
                    {achievement.category}
                  </span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {achievement.year}
                </p>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
