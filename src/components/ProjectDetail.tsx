import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Award, Zap } from 'lucide-react';

interface ProjectDetailProps {
  darkMode: boolean;
  projectId: string;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ darkMode, projectId, onBack }) => {
  const projects = {
    'afghansport-app': {
      title: "AfghanSport App",
      subtitle: "Comprehensive Sports Platform for Afghanistan",
      description: "AfghanSport is a comprehensive mobile application designed specifically for Afghan sports enthusiasts. The app provides real-time sports news, live scores, team information, and player statistics across various sports popular in Afghanistan including cricket, football, and traditional sports.",
      challenge: "The main challenge was creating a unified platform that could handle multiple sports, provide real-time updates, and work reliably with limited internet connectivity - a common issue in Afghanistan. We also needed to ensure the app was culturally appropriate and supported local languages.",
      solution: "I developed a robust Flutter application with offline-first architecture, implementing smart caching mechanisms and progressive data loading. The backend was built with Django to handle real-time data feeds and user management, with a focus on performance optimization for low-bandwidth scenarios.",
      images: [
        "https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/163452/basketball-dunk-blue-game-163452.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      technologies: ["Flutter", "Django", "REST API", "SQLite", "Firebase", "WebSocket", "Dart", "Python"],
      features: [
        "Real-time sports scores and updates",
        "Comprehensive team and player profiles",
        "News aggregation from multiple sources",
        "Offline reading capabilities",
        "Push notifications for important matches",
        "Multi-language support (Dari, Pashto, English)",
        "Social features for fan engagement",
        "Live match commentary"
      ],
      metrics: {
        downloads: "10,000+",
        rating: "4.7/5",
        retention: "78%",
        performance: "95/100"
      },
      timeline: "4 months",
      team: "Solo Developer",
      client: "Afghan Sports Federation",
      testimonial: {
        content: "Jawad created an exceptional app that has become the go-to platform for sports fans in Afghanistan. The attention to detail and understanding of local needs is remarkable.",
        author: "Ahmad Farid",
        role: "Sports Federation Director"
      },
      challenges: [
        {
          title: "Connectivity Issues",
          description: "Designed offline-first architecture with smart caching to handle poor internet connectivity."
        },
        {
          title: "Multi-language Support",
          description: "Implemented comprehensive localization for Dari, Pashto, and English with RTL text support."
        },
        {
          title: "Real-time Updates",
          description: "Built efficient WebSocket connections with fallback mechanisms for live score updates."
        }
      ],
      results: [
        "Achieved 10,000+ downloads within first 3 months",
        "Maintained 4.7/5 star rating on app stores",
        "78% user retention rate after 30 days",
        "Featured as 'App of the Month' by local tech community"
      ]
    },
    'dukandar': {
      title: "Dukandar",
      subtitle: "E-commerce Platform for Local Businesses",
      description: "Dukandar is a comprehensive e-commerce platform specifically designed for local Afghan businesses. The platform enables small and medium enterprises to establish their online presence, manage inventory, process orders, and connect with customers through a user-friendly mobile and web interface.",
      challenge: "Local businesses in Afghanistan faced significant barriers to entering the digital marketplace. They needed a solution that was affordable, easy to use, and culturally appropriate. The platform also needed to handle local payment methods and delivery logistics.",
      solution: "I developed a complete e-commerce ecosystem with both mobile and web applications. The Flutter mobile app provides customers with an intuitive shopping experience, while the Django-powered admin panel gives businesses comprehensive tools for inventory management, order processing, and analytics.",
      images: [
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      technologies: ["Flutter", "Django", "PostgreSQL", "Redis", "Stripe", "Firebase", "Docker", "AWS"],
      features: [
        "Multi-vendor marketplace functionality",
        "Comprehensive inventory management",
        "Order tracking and management",
        "Integrated payment processing",
        "Customer review and rating system",
        "Analytics dashboard for businesses",
        "Push notifications for orders",
        "Multi-language product listings"
      ],
      metrics: {
        businesses: "150+",
        transactions: "$50,000+",
        users: "5,000+",
        uptime: "99.8%"
      },
      timeline: "6 months",
      team: "Lead Developer + 2 Junior Developers",
      client: "Local Business Association",
      testimonial: {
        content: "Dukandar transformed our business. We went from a small local shop to serving customers across the city. The platform is incredibly user-friendly and the support is excellent.",
        author: "Fatima Karimi",
        role: "Business Owner"
      },
      challenges: [
        {
          title: "Payment Integration",
          description: "Integrated multiple local payment methods while ensuring security and compliance."
        },
        {
          title: "Scalability",
          description: "Designed architecture to handle growing number of vendors and increasing transaction volume."
        },
        {
          title: "User Experience",
          description: "Created intuitive interfaces for both tech-savvy and traditional business owners."
        }
      ],
      results: [
        "Onboarded 150+ local businesses in first year",
        "Processed over $50,000 in transactions",
        "Achieved 99.8% uptime with robust infrastructure",
        "Reduced business setup time from weeks to hours"
      ]
    }
  };

  const project = projects[projectId as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <button onClick={onBack} className="text-blue-600 hover:text-blue-800">
            Go back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Header */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-50'} py-8`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={onBack}
            className={`flex items-center mb-6 ${
              darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            } transition-colors duration-200`}
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Projects
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {project.title}
            </h1>
            <p className={`text-xl ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {project.subtitle}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Project Images */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="grid md:grid-cols-3 gap-4 p-4">
          {project.images.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg">
              <img
                src={image}
                alt={`${project.title} screenshot ${index + 1}`}
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Project Info */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className={`text-3xl font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Project Overview
              </h2>
              <p className={`text-lg leading-relaxed mb-8 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {project.description}
              </p>

              <h3 className={`text-2xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                The Challenge
              </h3>
              <p className={`text-lg leading-relaxed mb-8 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {project.challenge}
              </p>

              <h3 className={`text-2xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                The Solution
              </h3>
              <p className={`text-lg leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {project.solution}
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`${darkMode ? 'bg-gray-800' : 'bg-gray-50'} rounded-2xl p-6`}
          >
            <h3 className={`text-xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Project Details
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <Calendar size={20} className="text-blue-600 mr-3" />
                <div>
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Timeline
                  </div>
                  <div className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {project.timeline}
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <Users size={20} className="text-blue-600 mr-3" />
                <div>
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Team
                  </div>
                  <div className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {project.team}
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <Award size={20} className="text-blue-600 mr-3" />
                <div>
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Client
                  </div>
                  <div className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {project.client}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h4 className={`font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 rounded-full text-sm ${
                      darkMode
                        ? 'bg-gray-700 text-gray-300'
                        : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
              >
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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
          </motion.div>
        </div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className={`text-3xl font-bold mb-8 text-center ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Key Metrics
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {Object.entries(project.metrics).map(([key, value], index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-xl ${
                  darkMode ? 'bg-gray-800' : 'bg-gray-50'
                }`}
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {value}
                </div>
                <div className={`text-sm capitalize ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className={`text-3xl font-bold mb-8 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.features.map((feature, index) => (
              <div
                key={index}
                className={`flex items-center p-4 rounded-lg ${
                  darkMode ? 'bg-gray-800' : 'bg-gray-50'
                }`}
              >
                <Zap size={20} className="text-blue-600 mr-3 flex-shrink-0" />
                <span className={`${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Challenges & Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className={`text-3xl font-bold mb-8 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Challenges & Solutions
          </h2>
          <div className="space-y-6">
            {project.challenges.map((challenge, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl ${
                  darkMode ? 'bg-gray-800' : 'bg-gray-50'
                }`}
              >
                <h3 className={`text-xl font-semibold mb-3 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {challenge.title}
                </h3>
                <p className={`${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {challenge.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-16"
        >
          <h2 className={`text-3xl font-bold mb-8 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Results & Impact
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.results.map((result, index) => (
              <div
                key={index}
                className={`flex items-start p-4 rounded-lg ${
                  darkMode ? 'bg-gray-800' : 'bg-gray-50'
                }`}
              >
                <Award size={20} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span className={`${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {result}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <div className={`p-8 rounded-2xl text-center ${
            darkMode ? 'bg-gray-800' : 'bg-gray-50'
          }`}>
            <p className={`text-xl italic mb-6 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              "{project.testimonial.content}"
            </p>
            <div>
              <div className={`font-semibold text-lg ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {project.testimonial.author}
              </div>
              <div className={`${
                darkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>
                {project.testimonial.role}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-center"
        >
          <div className={`p-8 rounded-2xl ${
            darkMode ? 'bg-gradient-to-r from-gray-800 to-gray-700' : 'bg-gradient-to-r from-blue-50 to-purple-50'
          }`}>
            <h3 className={`text-2xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Interested in a Similar Project?
            </h3>
            <p className={`mb-6 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Let's discuss how I can help bring your vision to life with the same attention to detail and quality.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
            >
              Start Your Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;