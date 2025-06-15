import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, User, Calendar, Clock, BookOpen, Share2, MessageCircle } from 'lucide-react';

interface ArticleDetailProps {
  darkMode: boolean;
  articleId: string;
  onBack: () => void;
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ darkMode, articleId, onBack }) => {
  const articles = {
    'flutter-cross-platform': {
      title: "Why I Chose Flutter for Cross-Platform Development",
      subtitle: "Exploring the advantages of Flutter for building beautiful, natively compiled applications",
      date: "2024-01-15",
      readTime: "5 min read",
      author: "Jawad Rahimi",
      category: "Development",
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800",
      content: [
        {
          type: "paragraph",
          text: "When I first started my journey in mobile development, I was faced with a crucial decision: should I learn native development for both iOS and Android, or should I explore cross-platform solutions? After extensive research and hands-on experience, I chose Flutter, and it has been one of the best decisions in my development career."
        },
        {
          type: "heading",
          text: "The Cross-Platform Dilemma"
        },
        {
          type: "paragraph",
          text: "As a developer in Afghanistan, I often work with clients who have limited budgets but need their applications to reach users on both iOS and Android platforms. Native development would mean building two separate applications, doubling the development time and cost. This is where cross-platform solutions become invaluable."
        },
        {
          type: "heading",
          text: "Why Flutter?"
        },
        {
          type: "paragraph",
          text: "Flutter's key advantages include its single codebase approach, hot reload feature, and beautiful Material Design widgets. The framework's performance is close to native, and the development experience is smooth and efficient."
        },
        {
          type: "heading",
          text: "Real-World Impact"
        },
        {
          type: "paragraph",
          text: "In my projects like Dukandar and Baksack, Flutter has enabled me to deliver high-quality applications that serve real users with real needs. The framework's reliability and performance have been crucial in building trust with clients and end-users alike."
        }
      ],
      tags: ["Flutter", "Mobile Development", "Cross-Platform", "Dart", "UI/UX"],
      relatedArticles: ["django-ai-integration", "sam-altman-inspiration"]
    },
    'django-ai-integration': {
      title: "How I Built a Smart App with Django & AI",
      subtitle: "A deep dive into integrating artificial intelligence features into Django applications",
      date: "2024-01-08",
      readTime: "8 min read",
      author: "Jawad Rahimi",
      category: "AI & Backend",
      image: "https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=800",
      content: [
        {
          type: "paragraph",
          text: "Artificial Intelligence is no longer a futuristic concept—it's a practical tool that can enhance applications in meaningful ways. In this article, I'll share my experience building an intelligent recommendation system for the Dukandar e-commerce platform using Django and machine learning."
        },
        {
          type: "heading",
          text: "The Challenge: Personalized Shopping Experience"
        },
        {
          type: "paragraph",
          text: "When developing Dukandar, I realized that customers were overwhelmed by the variety of products available. They needed a way to discover products that matched their preferences and shopping history. This is where AI could make a real difference."
        },
        {
          type: "heading",
          text: "Implementation Strategy"
        },
        {
          type: "paragraph",
          text: "I implemented a hybrid recommendation system that combines collaborative filtering with content-based filtering. This approach allows us to provide personalized recommendations even for new users and products."
        }
      ],
      tags: ["Django", "AI", "Machine Learning", "Python", "Recommendations"],
      relatedArticles: ["flutter-cross-platform", "sam-altman-inspiration"]
    },
    'sam-altman-inspiration': {
      title: "The Role of Sam Altman and OpenAI in My Inspiration",
      subtitle: "How visionary leaders in AI are shaping the future of technology",
      date: "2023-12-22",
      readTime: "6 min read",
      author: "Jawad Rahimi",
      category: "Inspiration",
      image: "https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=800",
      content: [
        {
          type: "paragraph",
          text: "The rapid advancement of artificial intelligence, led by visionaries like Sam Altman and organizations like OpenAI, has profoundly influenced my approach to technology and development. This article explores how these innovations are shaping the future of software development."
        },
        {
          type: "heading",
          text: "The AI Revolution"
        },
        {
          type: "paragraph",
          text: "The emergence of powerful AI tools like GPT and DALL-E has transformed how we think about software development. These tools aren't just novelties—they're becoming essential parts of our development toolkit."
        },
        {
          type: "heading",
          text: "Impact on Development"
        },
        {
          type: "paragraph",
          text: "AI tools have significantly improved my productivity and creativity in development. From code generation to problem-solving, these tools have become invaluable assets in my workflow."
        }
      ],
      tags: ["AI", "OpenAI", "Technology", "Innovation", "Future"],
      relatedArticles: ["flutter-cross-platform", "django-ai-integration"]
    },
    'responsive-flutter-ui': {
      title: "Building Responsive UIs with Flutter",
      subtitle: "Best practices for creating beautiful, responsive user interfaces",
      date: "2023-12-15",
      readTime: "7 min read",
      author: "Jawad Rahimi",
      category: "UI/UX",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      content: [
        {
          type: "paragraph",
          text: "Creating responsive user interfaces that work seamlessly across different screen sizes is crucial in today's multi-device world. In this article, I share my approach to building responsive UIs with Flutter."
        },
        {
          type: "heading",
          text: "Understanding Responsive Design"
        },
        {
          type: "paragraph",
          text: "Responsive design isn't just about making things fit—it's about creating optimal user experiences across all devices. Flutter's flexible layout system makes this possible with relative ease."
        },
        {
          type: "heading",
          text: "Best Practices"
        },
        {
          type: "paragraph",
          text: "I'll share practical tips and techniques for implementing responsive designs in Flutter, including layout strategies, widget sizing, and adaptive components."
        }
      ],
      tags: ["Flutter", "UI/UX", "Responsive Design", "Mobile Development"],
      relatedArticles: ["flutter-cross-platform", "api-integration-strategies"]
    },
    'api-integration-strategies': {
      title: "API Integration Strategies for Mobile Apps",
      subtitle: "Comprehensive guide to implementing robust API integrations",
      date: "2023-12-01",
      readTime: "10 min read",
      author: "Jawad Rahimi",
      category: "Backend",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
      content: [
        {
          type: "paragraph",
          text: "API integration is a critical aspect of modern mobile app development. This article covers essential strategies for implementing robust API integrations in Flutter applications."
        },
        {
          type: "heading",
          text: "API Design Principles"
        },
        {
          type: "paragraph",
          text: "Good API design is fundamental to successful integration. I'll discuss RESTful principles, error handling, and security considerations that every developer should know."
        },
        {
          type: "heading",
          text: "Implementation Patterns"
        },
        {
          type: "paragraph",
          text: "Learn about effective patterns for API integration, including state management, caching strategies, and offline support."
        }
      ],
      tags: ["API", "Flutter", "Backend", "Integration", "Mobile Development"],
      relatedArticles: ["flutter-cross-platform", "responsive-flutter-ui"]
    },
    'afghan-tech-community': {
      title: "The Future of Afghan Tech Community",
      subtitle: "Thoughts on building and growing the tech community in Afghanistan",
      date: "2023-11-20",
      readTime: "4 min read",
      author: "Jawad Rahimi",
      category: "Community",
      image: "https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=800",
      content: [
        {
          type: "paragraph",
          text: "The tech community in Afghanistan is growing rapidly, despite numerous challenges. This article explores the current state and future potential of our tech ecosystem."
        },
        {
          type: "heading",
          text: "Current Landscape"
        },
        {
          type: "paragraph",
          text: "Despite infrastructure challenges, Afghan developers are making significant contributions to the global tech community. We're seeing more startups, tech meetups, and educational initiatives."
        },
        {
          type: "heading",
          text: "Future Opportunities"
        },
        {
          type: "paragraph",
          text: "The future is bright for Afghan tech. With increasing internet penetration and growing interest in technology, we're well-positioned to contribute to global innovation."
        }
      ],
      tags: ["Community", "Afghanistan", "Technology", "Development", "Future"],
      relatedArticles: ["sam-altman-inspiration", "django-ai-integration"]
    }
  };

  const article = articles[articleId as keyof typeof articles];

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Article not found</h2>
          <button onClick={onBack} className="text-blue-600 hover:text-blue-800">
            Go back
          </button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const renderContent = (content: any) => {
    switch (content.type) {
      case 'heading':
        return (
          <h2 className={`text-2xl font-bold mt-8 mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {content.text}
          </h2>
        );
      case 'paragraph':
        return (
          <p className={`text-lg leading-relaxed mb-6 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {content.text}
          </p>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Header */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-50'} py-8`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={onBack}
            className={`flex items-center mb-6 ${
              darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            } transition-colors duration-200`}
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Blog
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="mb-4">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {article.category}
              </span>
            </div>
            <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {article.title}
            </h1>
            <p className={`text-xl mb-6 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {article.subtitle}
            </p>

            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center">
                <User size={16} className="mr-2 text-blue-600" />
                <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                  {article.author}
                </span>
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-2 text-blue-600" />
                <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                  {formatDate(article.date)}
                </span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2 text-blue-600" />
                <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                  {article.readTime}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Featured Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-96 overflow-hidden"
      >
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </motion.div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="prose prose-lg max-w-none">
              {article.content.map((content, index) => (
                <div key={index}>
                  {renderContent(content)}
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h3 className={`text-lg font-semibold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 rounded-full text-sm ${
                      darkMode
                        ? 'bg-gray-800 text-gray-300'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Share */}
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h3 className={`text-lg font-semibold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Share this article
              </h3>
              <div className="flex space-x-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-2 rounded-full ${
                    darkMode
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Share2 size={20} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-2 rounded-full ${
                    darkMode
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <MessageCircle size={20} />
                </motion.button>
              </div>
            </div>
          </motion.article>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-1"
          >
            {/* Author Info */}
            <div className={`${
              darkMode ? 'bg-gray-800' : 'bg-gray-50'
            } rounded-2xl p-6 mb-8`}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  JR
                </div>
                <h3 className={`text-lg font-semibold mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {article.author}
                </h3>
                <p className={`text-sm mb-4 ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Flutter Developer & Django Expert
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300"
                >
                  Follow
                </motion.button>
              </div>
            </div>

            {/* Table of Contents */}
            <div className={`${
              darkMode ? 'bg-gray-800' : 'bg-gray-50'
            } rounded-2xl p-6 mb-8`}>
              <h3 className={`text-lg font-semibold mb-4 flex items-center ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                <BookOpen size={20} className="mr-2" />
                Table of Contents
              </h3>
              <ul className="space-y-2">
                {article.content
                  .filter(content => content.type === 'heading')
                  .map((heading, index) => (
                    <li key={index}>
                      <button className={`text-sm hover:text-blue-600 transition-colors duration-200 text-left ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {heading.text}
                      </button>
                    </li>
                  ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className={`${
              darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-700' : 'bg-gradient-to-br from-blue-50 to-purple-50'
            } rounded-2xl p-6`}>
              <h3 className={`text-lg font-semibold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Stay Updated
              </h3>
              <p className={`text-sm mb-4 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Get notified when I publish new articles about technology and development.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={`w-full px-3 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
