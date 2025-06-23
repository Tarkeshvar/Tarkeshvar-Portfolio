import React from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science",
      institution: "XYZ University",
      location: "Mumbai, India",
      period: "2020 - 2024",
      grade: "CGPA: 8.5/10",
      description:
        "Specialized in Software Engineering and Web Development. Active member of the coding club and regular hackathon participant.",
    },
    {
      degree: "Higher Secondary (Science)",
      institution: "ABC School",
      location: "Mumbai, India",
      period: "2018 - 2020",
      grade: "92.5%",
      description:
        "Studied Physics, Chemistry, Mathematics, and CS. Topped the school in Computer Science.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gradient-to-br dark:from-[#1c1920] dark:via-[#141217] dark:to-[#0c0c0c] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            The academic background that helped build my foundation in tech.
          </p>
        </motion.div>

        <motion.div
          className="space-y-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -4 }}
            >
              <div className="flex flex-col lg:flex-row lg:justify-between gap-6">
                <div className="flex items-start space-x-4">
                  <motion.div
                    className="p-3 rounded-lg border border-blue-400/20 bg-blue-500/10 text-blue-600 dark:text-blue-400"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <GraduationCap className="w-6 h-6" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                      {edu.degree}
                    </h3>
                    <h4 className="text-blue-600 dark:text-blue-400 font-medium">
                      {edu.institution}
                    </h4>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600 dark:text-gray-400 text-sm">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {edu.period}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {edu.location}
                  </div>
                </div>
              </div>

              <div className="mt-4 mb-2">
                <span className="inline-block bg-green-100 dark:bg-green-800/30 text-green-700 dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium border border-green-300 dark:border-green-600/50">
                  {edu.grade}
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-2">
                {edu.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
