import React from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const contactItems = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "aryan.dev@example.com",
      href: "mailto:aryan.dev@example.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "github.com/aryandev",
      href: "#",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/aryandev",
      href: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-100 to-white dark:from-[#0c0c0c] dark:via-[#1b181e] dark:to-[#0a0a0a] transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-black dark:text-white mb-4">
            Let’s{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-400 max-w-xl mx-auto">
            Reach out through any of the platforms below.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {contactItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              className="group flex items-start gap-4 p-6 rounded-2xl bg-white/5 dark:bg-gray-800/30 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/50 hover:bg-white/10 dark:hover:bg-gray-800/50 transition-all duration-300 shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-lg text-blue-600 dark:text-blue-400">
                {item.icon}
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.label}
                </p>
                <p className="font-semibold text-black dark:text-white break-words group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
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
