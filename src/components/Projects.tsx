import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Rental Listing Platform",
      description:
        "A full-stack rental platform with authentication, listing management, and geolocation features. Users can create, update, and delete property listings with integrated maps.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Node.js",
        "Express",
        "MongoDB",
        "Geoapify",
      ],
      image: "/Project1.jpg",
      liveUrl: "https://infinity-h721.onrender.com/listings",
      githubUrl: "#",
    },
    {
      title: "AI-Powered Evaluation System",
      description:
        "Hackathon-winning team project featuring automated answer sheet evaluation, AI-driven analysis, PPT generation, and collaborative whiteboard functionality.",
      technologies: ["AI/ML", "React", "Node.js", "MongoDB", "OAuth"],
      image: "/Project2.jpg",
      liveUrl: "https://ai-evaluaite-1.onrender.com/",
      githubUrl: "#",
    },
    {
      title: "MMMUT Scholarship Portal",
      description:
        "Comprehensive scholarship portal helping students track opportunities with streamlined application process and status updates.",
      technologies: ["React", "Firebase", "Tailwind CSS", "shadcn/ui"],
      image: "/Project3.jpg",
      liveUrl: "https://mmmut-scholarship.vercel.app/",
      githubUrl: "#",
    },
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#fefefe] via-[#f9f9f7] to-[#f2f2f2] dark:from-[#0a0a0a] dark:via-[#1b181e] dark:to-[#0c0c0c] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
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
              Projects
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Featured projects showcasing my full-stack development capabilities
            and problem-solving approach.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="flex flex-col bg-white dark:bg-white/5 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition-shadow duration-300 group"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{ y: -5 }}
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="flex flex-col flex-grow p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-400 mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 border border-gray-200 dark:border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-auto flex space-x-4 pt-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
