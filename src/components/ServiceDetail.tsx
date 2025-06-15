import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Star, Users, Clock, Award } from 'lucide-react';

interface ServiceDetailProps {
  darkMode: boolean;
  serviceId: string;
  onBack: () => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ darkMode, serviceId, onBack }) => {
  const services = {
    'mobile-development': {
      title: "Mobile App Development",
      subtitle: "Cross-platform excellence with Flutter",
      description: "I specialize in creating beautiful, high-performance mobile applications using Flutter that work seamlessly across iOS and Android platforms. My approach combines modern design principles with robust functionality to deliver apps that users love.",
      image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Cross-platform development with single codebase",
        "Native performance and smooth animations",
        "Custom UI components and design systems",
        "State management with Provider/Bloc patterns",
        "Integration with REST APIs and databases",
        "Push notifications and real-time features",
        "App store deployment and optimization",
        "Performance monitoring and analytics"
      ],
      technologies: ["Flutter", "Dart", "Firebase", "SQLite", "REST APIs", "Provider", "Bloc", "Git"],
      process: [
        {
          step: "Discovery & Planning",
          description: "Understanding your requirements, target audience, and business goals to create a comprehensive development strategy."
        },
        {
          step: "UI/UX Design",
          description: "Creating wireframes, mockups, and interactive prototypes that prioritize user experience and visual appeal."
        },
        {
          step: "Development",
          description: "Building the app with clean, maintainable code following best practices and industry standards."
        },
        {
          step: "Testing & QA",
          description: "Comprehensive testing across devices and platforms to ensure reliability and performance."
        },
        {
          step: "Deployment",
          description: "App store submission, optimization, and ongoing support for updates and maintenance."
        }
      ],
      stats: [
        { label: "Apps Developed", value: "15+" },
        { label: "Client Satisfaction", value: "100%" },
        { label: "Average Rating", value: "4.8/5" },
        { label: "Code Quality", value: "A+" }
      ],
      testimonials: [
        {
          name: "Ahmad Hassan",
          role: "Business Owner",
          content: "Jawad delivered an exceptional mobile app that exceeded our expectations. The attention to detail and user experience is outstanding."
        },
        {
          name: "Sarah Khan",
          role: "Startup Founder",
          content: "Working with Jawad was a pleasure. He understood our vision and brought it to life with a beautiful, functional app."
        }
      ]
    },
    'web-development': {
      title: "Web Development",
      subtitle: "Full-stack solutions with Django & Modern Frontend",
      description: "I create robust, scalable web applications using Django for the backend and modern frontend technologies. My solutions are designed to handle real-world business needs with security, performance, and user experience as top priorities.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Django REST API development",
        "Responsive frontend with React/Vue.js",
        "Database design and optimization",
        "User authentication and authorization",
        "Payment gateway integration",
        "Real-time features with WebSockets",
        "SEO optimization and performance tuning",
        "Cloud deployment and DevOps"
      ],
      technologies: ["Django", "Python", "React", "PostgreSQL", "Redis", "Docker", "AWS", "Nginx"],
      process: [
        {
          step: "Requirements Analysis",
          description: "Detailed analysis of business requirements, user stories, and technical specifications."
        },
        {
          step: "Architecture Design",
          description: "Designing scalable system architecture, database schema, and API structure."
        },
        {
          step: "Backend Development",
          description: "Building robust Django APIs with proper authentication, validation, and error handling."
        },
        {
          step: "Frontend Integration",
          description: "Creating responsive, interactive user interfaces that consume the backend APIs."
        },
        {
          step: "Deployment & Monitoring",
          description: "Cloud deployment with monitoring, logging, and automated backup systems."
        }
      ],
      stats: [
        { label: "Web Apps Built", value: "20+" },
        { label: "Uptime Achieved", value: "99.9%" },
        { label: "Performance Score", value: "95+" },
        { label: "Security Rating", value: "A+" }
      ],
      testimonials: [
        {
          name: "Omar Farid",
          role: "E-commerce Manager",
          content: "The web application Jawad built for us handles thousands of users daily without any issues. Excellent work!"
        },
        {
          name: "Fatima Ali",
          role: "NGO Director",
          content: "Our organization's web platform has transformed how we operate. Jawad's expertise made all the difference."
        }
      ]
    },
    'ui-ux-design': {
      title: "UI/UX Design",
      subtitle: "User-centered design that converts",
      description: "I create intuitive, beautiful user interfaces that not only look great but also provide exceptional user experiences. My design process is rooted in user research, usability principles, and modern design trends.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "User research and persona development",
        "Wireframing and prototyping",
        "Visual design and branding",
        "Responsive design systems",
        "Usability testing and iteration",
        "Accessibility compliance",
        "Design handoff and documentation",
        "Conversion rate optimization"
      ],
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle", "Zeplin", "Miro", "Hotjar"],
      process: [
        {
          step: "Research & Discovery",
          description: "Understanding users, business goals, and market landscape through research and analysis."
        },
        {
          step: "Information Architecture",
          description: "Organizing content and features in a logical, user-friendly structure."
        },
        {
          step: "Wireframing",
          description: "Creating low-fidelity wireframes to establish layout and functionality."
        },
        {
          step: "Visual Design",
          description: "Developing high-fidelity designs with colors, typography, and visual elements."
        },
        {
          step: "Testing & Iteration",
          description: "User testing and iterative improvements based on feedback and analytics."
        }
      ],
      stats: [
        { label: "Designs Created", value: "50+" },
        { label: "User Satisfaction", value: "96%" },
        { label: "Conversion Increase", value: "40%" },
        { label: "Design Awards", value: "3" }
      ],
      testimonials: [
        {
          name: "Nadia Karimi",
          role: "Product Manager",
          content: "Jawad's design work significantly improved our user engagement. The interface is both beautiful and functional."
        },
        {
          name: "Hassan Ahmadi",
          role: "Marketing Director",
          content: "The redesign led to a 40% increase in conversions. Jawad truly understands user psychology."
        }
      ]
    }
  };

  const service = services[serviceId as keyof typeof services];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Service not found</h2>
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
            Back to Services
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {service.title}
            </h1>
            <p className={`text-xl ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {service.subtitle}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-96 overflow-hidden"
      >
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <p className={`text-lg leading-relaxed ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {service.description}
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid md:grid-cols-4 gap-8 mb-16"
        >
          {service.stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center p-6 rounded-xl ${
                darkMode ? 'bg-gray-800' : 'bg-gray-50'
              }`}
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <div className={`text-sm ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className={`text-3xl font-bold mb-8 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              What's Included
            </h2>
            <div className="space-y-4">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <Check size={20} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className={`${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2 className={`text-3xl font-bold mb-8 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-3">
              {service.technologies.map((tech, index) => (
                <span
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    darkMode
                      ? 'bg-gray-800 text-gray-300'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <h2 className={`text-3xl font-bold mb-12 text-center ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            My Process
          </h2>
          <div className="space-y-8">
            {service.process.map((step, index) => (
              <div
                key={index}
                className={`flex items-start p-6 rounded-xl ${
                  darkMode ? 'bg-gray-800' : 'bg-gray-50'
                }`}
              >
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className={`text-xl font-semibold mb-2 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {step.step}
                  </h3>
                  <p className={`${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16"
        >
          <h2 className={`text-3xl font-bold mb-12 text-center ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Client Testimonials
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {service.testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl ${
                  darkMode ? 'bg-gray-800' : 'bg-gray-50'
                }`}
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className={`mb-4 italic ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  "{testimonial.content}"
                </p>
                <div>
                  <div className={`font-semibold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {testimonial.name}
                  </div>
                  <div className={`text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className={`p-8 rounded-2xl ${
            darkMode ? 'bg-gradient-to-r from-gray-800 to-gray-700' : 'bg-gradient-to-r from-blue-50 to-purple-50'
          }`}>
            <h3 className={`text-2xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Ready to Get Started?
            </h3>
            <p className={`mb-6 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Let's discuss your project and see how I can help bring your vision to life.
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

export default ServiceDetail;