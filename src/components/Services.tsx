import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Globe, Palette, Server, Brain, GraduationCap } from 'lucide-react';

interface ServicesProps {
  darkMode: boolean;
  onServiceClick?: (serviceId: string) => void;
}

const Services: React.FC<ServicesProps> = ({ darkMode, onServiceClick }) => {
  const services = [
    {
      id: 'mobile-development',
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      description: "Cross-platform mobile applications using Flutter with beautiful UI and seamless performance.",
      features: ["iOS & Android", "Custom UI/UX", "State Management", "Performance Optimized"]
    },
    {
      id: 'web-development',
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description: "Full-stack web applications with Django backend and modern frontend technologies.",
      features: ["Django REST API", "Responsive Design", "Database Design", "Security Implementation"]
    },
    {
      id: 'ui-ux-design',
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "User-centered design solutions that create intuitive and engaging experiences.",
      features: ["Figma Prototyping", "User Research", "Design Systems", "Usability Testing"]
    },
    {
      id: 'api-integration',
      icon: <Server className="w-8 h-8" />,
      title: "API Integration & Backend",
      description: "Robust backend solutions and seamless third-party API integrations.",
      features: ["RESTful APIs", "Database Management", "Cloud Integration", "Authentication Systems"]
    },
    {
      id: 'ai-integration',
      icon: <Brain className="w-8 h-8" />,
      title: "AI Integration",
      description: "Intelligent features powered by machine learning and AI technologies.",
      features: ["Python ML", "AI-Powered Features", "Data Analysis", "Automation Solutions"]
    },
    {
      id: 'mentorship',
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Educational Content & Mentorship",
      description: "Sharing knowledge through tutorials, mentorship, and educational content creation.",
      features: ["Technical Writing", "Code Reviews", "Mentorship", "Workshop Facilitation"]
    }
  ];

  const handleServiceClick = (serviceId: string) => {
    if (onServiceClick) {
      onServiceClick(serviceId);
    }
  };

  return (
    <section
      id="services"
      className={`py-20 ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            I offer comprehensive development services to help bring your ideas to life with cutting-edge technology and thoughtful design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => handleServiceClick(service.id)}
              className={`${
                darkMode ? 'bg-gray-900' : 'bg-gray-50'
              } rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group border cursor-pointer ${
                darkMode ? 'border-gray-700 hover:border-blue-500/30' : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className={`text-xl font-bold ml-4 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {service.title}
                </h3>
              </div>

              <p className={`text-base mb-6 leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {service.description}
              </p>

              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.05) }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3"></div>
                    <span className={`text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
                className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700"
              >
                <button className="text-blue-600 hover:text-purple-600 font-medium transition-colors duration-200 flex items-center group">
                  <span>Learn More</span>
                  <motion.svg
                    className="w-4 h-4 ml-2"
                    whileHover={{ x: 5 }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </motion.svg>
                </button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className={`${
            darkMode ? 'bg-gradient-to-r from-gray-900 to-gray-800' : 'bg-gradient-to-r from-blue-50 to-purple-50'
          } rounded-2xl p-8 md:p-12`}>
            <h3 className={`text-3xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Ready to Start Your Project?
            </h3>
            <p className={`text-lg mb-8 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Let's collaborate to bring your ideas to life with innovative technology solutions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;