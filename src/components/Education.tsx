import React from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Education = () => {
  const education = [
    {
      degree: "B.Tech (CSE)",
      institution: "MMMUT",
      location: "Gorakhpur",
      period: "2023 - Ongoing",
      grade: "CGPA: 9.34",
      description: "",
    },
    {
      degree: "Class XII (CBSE)",
      institution: "Aatmdeep Vidyalaya",
      location: "Gorakhpur",
      period: "2022",
      grade: "88.4%",
      description: "",
    },
    {
      degree: "Class X (CBSE)",
      institution: "Aatmdeep Vidyalaya",
      location: "Gorakhpur",
      period: "2020",
      grade: "95.6%",
      description: "",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#fefefe] via-[#f9f9f7] to-[#f2f2f2] dark:bg-gradient-to-br dark:from-[#0a0a0a] dark:via-[#1b181e] dark:to-[#0c0c0c] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-black to-purple-500 dark:from-white dark:to-purple-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A quick look at my academic background.
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="space-y-10">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-md transition duration-300 hover:shadow-lg"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <div className="flex flex-col lg:flex-row lg:justify-between gap-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg border border-blue-400/20 bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                      {edu.degree}
                    </h3>
                    <h4 className="bg-gradient-to-r from-black to-purple-500 dark:from-white dark:to-purple-400 bg-clip-text text-transparent font-medium">
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

              <div className="mt-4">
                <span className="inline-block bg-green-100 dark:bg-green-800/30 text-green-700 dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium border border-green-300 dark:border-green-600/50">
                  {edu.grade}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
