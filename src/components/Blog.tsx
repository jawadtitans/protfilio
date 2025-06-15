import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';

interface BlogProps {
  darkMode: boolean;
  onArticleClick?: (articleId: string) => void;
}

const Blog: React.FC<BlogProps> = ({ darkMode, onArticleClick }) => {
  const blogPosts = [
    {
      id: 'flutter-cross-platform',
      title: "Why I Chose Flutter for Cross-Platform Development",
      excerpt: "Exploring the advantages of Flutter for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Development",
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: true
    },
    {
      id: 'django-ai-integration',
      title: "How I Built a Smart App with Django & AI",
      excerpt: "A deep dive into integrating artificial intelligence features into Django applications, from machine learning models to intelligent automation.",
      date: "2024-01-08",
      readTime: "8 min read",
      category: "AI & Backend",
      image: "https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: true
    },
    {
      id: 'sam-altman-inspiration',
      title: "The Role of Sam Altman and OpenAI in My Inspiration",
      excerpt: "How visionary leaders in AI are shaping the future of technology and inspiring the next generation of developers to build meaningful solutions.",
      date: "2023-12-22",
      readTime: "6 min read",
      category: "Inspiration",
      image: "https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: false
    },
    {
      id: 'responsive-flutter-ui',
      title: "Building Responsive UIs with Flutter",
      excerpt: "Best practices for creating beautiful, responsive user interfaces that work seamlessly across different screen sizes and orientations.",
      date: "2023-12-15",
      readTime: "7 min read",
      category: "UI/UX",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: false
    },
    {
      id: 'api-integration-strategies',
      title: "API Integration Strategies for Mobile Apps",
      excerpt: "Comprehensive guide to implementing robust API integrations in mobile applications with error handling and performance optimization.",
      date: "2023-12-01",
      readTime: "10 min read",
      category: "Backend",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: false
    },
    {
      id: 'afghan-tech-community',
      title: "The Future of Afghan Tech Community",
      excerpt: "Thoughts on the growing tech community in Afghanistan and how we can contribute to global innovation while building local capacity.",
      date: "2023-11-20",
      readTime: "4 min read",
      category: "Community",
      image: "https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: false
    }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const handleArticleClick = (articleId: string) => {
    if (onArticleClick) {
      onArticleClick(articleId);
    }
  };

  return (
    <section
      id="blog"
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
            Latest <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Articles</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Sharing insights about technology, development practices, and the future of software engineering.
          </p>
        </motion.div>

        {/* Featured Articles */}
        <div className="mb-16">
          <h3 className={`text-2xl font-bold mb-8 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Featured Articles
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                onClick={() => handleArticleClick(post.id)}
                className={`${
                  darkMode ? 'bg-gray-900' : 'bg-gray-50'
                } rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center mb-4 text-sm">
                    <div className="flex items-center mr-6">
                      <User size={16} className="mr-2 text-blue-600" />
                      <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                        Jawad Rahimi
                      </span>
                    </div>
                    <div className="flex items-center mr-6">
                      <Calendar size={16} className="mr-2 text-blue-600" />
                      <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                        {formatDate(post.date)}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-2 text-blue-600" />
                      <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                        {post.readTime}
                      </span>
                    </div>
                  </div>

                  <h3 className={`text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors duration-300 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {post.title}
                  </h3>

                  <p className={`text-base mb-6 leading-relaxed ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {post.excerpt}
                  </p>

                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center text-blue-600 hover:text-purple-600 font-medium transition-colors duration-200"
                  >
                    <span>Read More</span>
                    <ArrowRight size={16} className="ml-2" />
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Recent Articles */}
        <div>
          <h3 className={`text-2xl font-bold mb-8 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Recent Articles
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                onClick={() => handleArticleClick(post.id)}
                className={`${
                  darkMode ? 'bg-gray-900' : 'bg-gray-50'
                } rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center mb-3 text-xs">
                    <Calendar size={14} className="mr-2 text-blue-600" />
                    <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                      {formatDate(post.date)}
                    </span>
                    <Clock size={14} className="ml-4 mr-2 text-blue-600" />
                    <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                      {post.readTime}
                    </span>
                  </div>

                  <h4 className={`text-lg font-bold mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {post.title}
                  </h4>

                  <p className={`text-sm mb-4 leading-relaxed line-clamp-3 ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {post.excerpt}
                  </p>

                  <motion.button
                    whileHover={{ x: 3 }}
                    className="flex items-center text-blue-600 hover:text-purple-600 font-medium text-sm transition-colors duration-200"
                  >
                    <span>Read More</span>
                    <ArrowRight size={14} className="ml-2" />
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className={`${
            darkMode ? 'bg-gradient-to-r from-gray-900 to-gray-800' : 'bg-gradient-to-r from-blue-50 to-purple-50'
          } rounded-2xl p-8 md:p-12 text-center`}>
            <h3 className={`text-3xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Stay Updated
            </h3>
            <p className={`text-lg mb-8 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Get notified when I publish new articles about technology and development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className={`flex-1 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  darkMode 
                    ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400'
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;