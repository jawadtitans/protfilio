import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServiceDetail from './components/ServiceDetail';
import ProjectDetail from './components/ProjectDetail';
import ArticleDetail from './components/ArticleDetail';

type ViewType = 'home' | 'service' | 'project' | 'article';

interface ViewState {
  type: ViewType;
  id?: string;
}

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentView, setCurrentView] = useState<ViewState>({ type: 'home' });

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      setDarkMode(JSON.parse(savedTheme));
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const navigateToService = (serviceId: string) => {
    setCurrentView({ type: 'service', id: serviceId });
    window.scrollTo(0, 0);
  };

  const navigateToProject = (projectId: string) => {
    setCurrentView({ type: 'project', id: projectId });
    window.scrollTo(0, 0);
  };

  const navigateToArticle = (articleId: string) => {
    setCurrentView({ type: 'article', id: articleId });
    window.scrollTo(0, 0);
  };

  const navigateToHome = () => {
    setCurrentView({ type: 'home' });
    window.scrollTo(0, 0);
  };

  // Render different views based on current state
  if (currentView.type === 'service' && currentView.id) {
    return (
      <ServiceDetail
        darkMode={darkMode}
        serviceId={currentView.id}
        onBack={navigateToHome}
      />
    );
  }

  if (currentView.type === 'project' && currentView.id) {
    return (
      <ProjectDetail
        darkMode={darkMode}
        projectId={currentView.id}
        onBack={navigateToHome}
      />
    );
  }

  if (currentView.type === 'article' && currentView.id) {
    return (
      <ArticleDetail
        darkMode={darkMode}
        articleId={currentView.id}
        onBack={navigateToHome}
      />
    );
  }

  // Default home view
  return (
    <div className={`min-h-screen transition-all duration-300 ${
      darkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Services 
          darkMode={darkMode} 
          onServiceClick={navigateToService}
        />
        <Projects 
          darkMode={darkMode} 
          onProjectClick={navigateToProject}
        />
        <Blog 
          darkMode={darkMode} 
          onArticleClick={navigateToArticle}
        />
        <Contact darkMode={darkMode} />
      </main>
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;