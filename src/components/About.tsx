import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Users, Zap } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const achievements = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Top Academic Performance",
      description: "Achieved highest scores throughout academic career"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Rushd Foundation Work",
      description: "Contributing to educational initiatives and community development"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Continuous Learning",
      description: "Always exploring new technologies and methodologies"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Innovation Focus",
      description: "Passionate about creating solutions that make a difference"
    }
  ];

  const timeline = [
    {
      year: "2023",
      title: "Senior Flutter Developer",
      description: "Leading mobile app development projects with Django backends"
    },
    {
      year: "2022",
      title: "Full-Stack Developer",
      description: "Expanded expertise in web development and API integration"
    },
    {
      year: "2021",
      title: "Mobile Development Focus",
      description: "Specialized in Flutter development for cross-platform solutions"
    },
    {
      year: "2020",
      title: "Programming Journey Begins",
      description: "Started with Python and discovered passion for app development"
    }
  ];

  return (
    <section
      id="about"
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
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            I'm a passionate developer from Kabul, Afghanistan, dedicated to creating innovative solutions 
            that bridge technology and human needs. Inspired by leaders like Sam Altman and the potential 
            of AI, I strive to build applications that make a meaningful impact.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`${
              darkMode ? 'bg-gray-800' : 'bg-white'
            } rounded-2xl p-8 shadow-xl`}
          >
            <h3 className={`text-2xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              My Journey
            </h3>
            <p className={`text-lg leading-relaxed mb-6 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              My passion for technology began with a curiosity about how apps work. This led me to 
              explore Flutter for mobile development and Django for robust backend solutions. I believe 
              in the power of technology to solve real-world problems and create opportunities.
            </p>
            <p className={`text-lg leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              When I'm not coding, I'm involved with the Rushd Foundation, working on educational 
              initiatives that help empower the next generation of developers and innovators in Afghanistan.
            </p>
          </motion.div>

          {/* Skills & Expertise */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`${
              darkMode ? 'bg-gray-800' : 'bg-white'
            } rounded-2xl p-8 shadow-xl`}
          >
            <h3 className={`text-2xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Technical Expertise
            </h3>
            <div className="space-y-4">
              {[
                { skill: "Flutter Development", level: 95 },
                { skill: "Django & Python", level: 90 },
                { skill: "UI/UX Design", level: 85 },
                { skill: "API Integration", level: 88 },
                { skill: "Database Design", level: 82 }
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className={`font-medium ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {item.skill}
                    </span>
                    <span className={`text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {item.level}%
                    </span>
                  </div>
                  <div className={`w-full rounded-full h-2 ${
                    darkMode ? 'bg-gray-700' : 'bg-gray-200'
                  }`}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className={`text-3xl font-bold text-center mb-12 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Key Achievements
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                } p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300`}
              >
                <div className="text-blue-600 mb-4 flex justify-center">
                  {achievement.icon}
                </div>
                <h4 className={`text-lg font-semibold mb-3 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {achievement.title}
                </h4>
                <p className={`text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className={`text-3xl font-bold text-center mb-12 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            My Journey
          </h3>
          <div className="relative">
            <div className={`absolute left-1/2 transform -translate-x-1/2 h-full w-1 ${
              darkMode ? 'bg-gray-700' : 'bg-gray-300'
            }`}></div>
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-5/12 ${
                  index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'
                }`}>
                  <div className={`${
                    darkMode ? 'bg-gray-800' : 'bg-white'
                  } p-6 rounded-xl shadow-lg`}>
                    <div className="text-blue-600 font-bold text-lg mb-2">
                      {item.year}
                    </div>
                    <h4 className={`text-xl font-semibold mb-2 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {item.title}
                    </h4>
                    <p className={`${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;