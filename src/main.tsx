import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <div className="flex items-center space-x-4">
      <a
        href="/resume.pdf"
        download
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300"
      >
        Download CV
      </a>
    </div>
  </StrictMode>
);
