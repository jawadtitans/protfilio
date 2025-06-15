import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Globe, ShoppingCart, Book, Database } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
  onProjectClick?: (projectId: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode, onProjectClick }) => {
  const projects = [
    {
      id: 'afghansport-app',
      title: "AfghanSport App",
      description: "A comprehensive sports application for Afghan sports enthusiasts featuring live scores, news, and team information with beautiful UI and seamless performance.",
      tech: ["Flutter", "Django", "REST API", "SQLite"],
      icon: <Smartphone className="w-6 h-6" />,
      image: "https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Mobile App",
      featured: true
    },
    {
      id: 'dukandar',
      title: "Dukandar",
      description: "E-commerce platform tailored for local businesses with inventory management, customer tracking, and sales analytics.",
      tech: ["Flutter", "Django", "PostgreSQL", "Payment Integration"],
      icon: <ShoppingCart className="w-6 h-6" />,
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "E-commerce",
      featured: true
    },
    {
      id: 'barchi-store',
      title: "Barchi Store",
      description: "Modern retail management system with point-of-sale functionality and comprehensive business analytics dashboard.",
      tech: ["Django", "React", "PostgreSQL", "Chart.js"],
      icon: <Globe className="w-6 h-6" />,
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Web App",
      featured: false
    },
    {
      id: 'baksack',
      title: "Baksack",
      description: "Digital wallet and payment solution with secure transaction processing and user-friendly interface for financial management.",
      tech: ["Flutter", "Django", "Stripe API", "Encryption"],
      icon: <Smartphone className="w-6 h-6" />,
      image: "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Fintech",
      featured: false
    },
    {
      id: 'library-management',
      title: "Library Management System",
      description: "Complete library management solution with book cataloging, member management, and automated fine calculation system.",
      tech: ["Django", "Bootstrap", "MySQL", "PDF Generation"],
      icon: <Book className="w-6 h-6" />,
      image: "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Management System",
      featured: false
    },
    {
      id: 'exam-management',
      title: "Exam Management Portal",
      description: "Online examination platform with automated grading, result analysis, and comprehensive reporting for educational institutions.",
      tech: ["Django", "React", "WebRTC", "PostgreSQL"],
      icon: <Database className="w-6 h-6" />,
      image: "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Education",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const handleProjectClick = (projectId: string) => {
    if (onProjectClick) {
      onProjectClick(projectId);
    }
  };

  return (
    <section
      id="projects"
      className={`py-20 ${
        darkMode ? 'bg-gray-900' : 'bg-gray-50'
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
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            A showcase of my recent work, demonstrating expertise in mobile and web development with modern technologies.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-20">
          <h3 className={`text-2xl font-bold mb-8 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Featured Work
          </h3>
          <div className="grid lg:grid-cols-2 gap-12">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                onClick={() => handleProjectClick(project.id)}
                className={`${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                } rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="text-blue-600 mr-3">
                      {project.icon}
                    </div>
                    <h3 className={`text-2xl font-bold ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {project.title}
                    </h3>
                  </div>

                  <p className={`text-base mb-6 leading-relaxed ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 rounded-full text-sm ${
                          darkMode
                            ? 'bg-gray-700 text-gray-300'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        // Handle live demo click
                      }}
                      className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        // Handle code click
                      }}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium border-2 transition-all duration-300 ${
                        darkMode
                          ? 'border-gray-600 text-gray-300 hover:bg-gray-700'
                          : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className={`text-2xl font-bold mb-8 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Other Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                onClick={() => handleProjectClick(project.id)}
                className={`${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                } rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer`}
              >
                <div className="flex items-center mb-4">
                  <div className="text-blue-600 mr-3">
                    {project.icon}
                  </div>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                    {project.category}
                  </span>
                </div>

                <h4 className={`text-xl font-bold mb-3 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h4>

                <p className={`text-sm mb-4 leading-relaxed ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-2 py-1 rounded text-xs ${
                        darkMode
                          ? 'bg-gray-700 text-gray-300'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className={`px-2 py-1 rounded text-xs ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex space-x-3">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      // Handle live demo
                    }}
                    className="text-blue-600 hover:text-purple-600 transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      // Handle code
                    }}
                    className="text-blue-600 hover:text-purple-600 transition-colors duration-200"
                  >
                    <Github size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-3 rounded-full font-medium border-2 transition-all duration-300 ${
              darkMode
                ? 'border-gray-600 text-gray-300 hover:bg-gray-800'
                : 'border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
          >
            View All Projects on GitHub
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;