import React from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const contactItems = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "tarkeshvarmani@gmail.com",
      href: "mailto:tarkeshvarmani@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 7880626736",
      href: "tel:7880626736",
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "Tarkeshvar",
      href: "https://github.com/Tarkeshvar",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "Tarkeshvar",
      href: "https://www.linkedin.com/in/tarkeshvar",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#fefefe] via-[#f9f9f7] to-[#f2f2f2] dark:bg-gradient-to-br dark:from-[#0a0a0a] dark:via-[#1b181e] dark:to-[#0c0c0c] transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Let’s{" "}
            <span className="bg-gradient-to-r from-black to-purple-500 dark:from-white dark:to-purple-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-400 max-w-xl mx-auto">
            Reach out through any of the platforms below.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {contactItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              className="group bg-white dark:bg-white/5 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-md transition duration-300 hover:shadow-lg flex items-start gap-4"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <div className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg text-blue-600 dark:text-blue-400">
                {item.icon}
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.label}
                </p>
                <p className="font-semibold text-gray-600 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors break-words">
                  {item.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
