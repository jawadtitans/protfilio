import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle, FileDown } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      if (!formRef.current) return;

      await emailjs.sendForm(
        'service_3awva8d', // Replace with your EmailJS service ID
        'template_kim0rat', // Replace with your EmailJS template ID
        formRef.current,
        'agJWS10A7kzDKKkBT' // Replace with your EmailJS public key
      );

      setSubmitStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      title: "Email",
      value: "engjawadrahimi@gmail.com",
      link: "mailto:engjawadrahimi@gmail.com"
    },
    {
      icon: <Phone size={20} />,
      title: "Phone",
      value: "+93767180833",
      link: "tel:+93767180833"
    },
    {
      icon: <MapPin size={20} />,
      title: "Location",
      value: "Kabul, Afghanistan",
      link: "https://maps.google.com/?q=Kabul,Afghanistan"
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      title: "GitHub",
      link: "https://github.com/jawadtitans"
    },
    {
      icon: <Linkedin size={20} />,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/jawad-rahimi-751695306"
    },
    {
      icon: <MessageCircle size={20} />,
      title: "WhatsApp",
      link: "https://wa.me/0767180833"
    }
  ];

  return (
    <section
      id="contact"
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
            Get In <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Ready to start your next project? Let's collaborate and bring your ideas to life with innovative technology solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
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
              Send Me a Message
            </h3>

            {submitStatus.type && (
              <div className={`mb-6 p-4 rounded-lg ${
                submitStatus.type === 'success' 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-red-100 text-red-700'
              }`}>
                {submitStatus.message}
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                        : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                        : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                      : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 resize-none ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                      : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="Tell me about your project or idea..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className={`text-2xl font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Let's Connect
              </h3>
              <p className={`text-lg leading-relaxed mb-8 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                I'm always interested in new opportunities and exciting projects. Whether you need a mobile app, web application, or just want to discuss technology, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 ${
                    darkMode
                      ? 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                      : 'bg-gray-50 hover:bg-gray-100 text-gray-600'
                  }`}
                >
                  <div className="text-blue-600">{info.icon}</div>
                  <div>
                    <p className="text-sm font-medium">{info.title}</p>
                    <p className="text-sm">{info.value}</p>
                  </div>
                </a>
              ))}
              <a
                href="/resume.pdf"
                download
                className={`flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 ${
                  darkMode
                    ? 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                    : 'bg-gray-50 hover:bg-gray-100 text-gray-600'
                }`}
              >
                <div className="text-blue-600"><FileDown size={20} /></div>
                <div>
                  <p className="text-sm font-medium">Resume</p>
                  <p className="text-sm">Download my resume</p>
                </div>
              </a>
            </div>

            {/* Social Links */}
            <div>
              <h4 className={`text-lg font-semibold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`p-3 rounded-full transition-all duration-300 ${
                      darkMode
                        ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                        : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md hover:shadow-lg'
                    }`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className={`p-6 rounded-xl ${
                darkMode 
                  ? 'bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/20'
                  : 'bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200'
              }`}
            >
              <h5 className={`text-lg font-semibold mb-2 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Ready to get started?
              </h5>
              <p className={`text-sm ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Let's discuss your project and see how we can create something amazing together.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;