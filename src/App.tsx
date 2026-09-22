import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Expertise } from './components/Expertise';
import { Work } from './components/Work';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { ArrowUp } from 'lucide-react';

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScrollVisibility = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScrollVisibility);
    return () => window.removeEventListener('scroll', handleScrollVisibility);
  }, []);

  const scrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="portfolio-app">
      {/* Header / Nav */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Expertise Section */}
      <Expertise />

      {/* Work Section */}
      <Work />

      {/* Experience Section */}
      <Experience />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="footer-main" style={{
        padding: '3rem 0',
        backgroundColor: 'var(--bg-darker)',
        borderTop: '1px solid var(--border)',
        textAlign: 'center',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.85rem',
        color: 'var(--text-muted)'
      }}>
        <div className="container">
          <p>© {new Date().getFullYear()}. Made with passion by <span style={{ color: 'var(--cyan)' }}>Siddharth Ghildiyal</span>.</p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.75rem', opacity: 0.7 }}>All rights reserved.</p>
        </div>
      </footer>

      {/* Back to Top button */}
      <button
        onClick={scrollToTop}
        className={`back-to-top-btn ${showScrollTop ? 'show' : ''}`}
        aria-label="Scroll back to top"
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          zIndex: 999,
          backgroundColor: 'var(--bg-card)',
          color: 'var(--cyan)',
          border: '1px solid var(--border-active)',
          borderRadius: '50%',
          width: '45px',
          height: '45px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: 'var(--shadow)',
          opacity: 0,
          visibility: 'hidden',
          transform: 'translateY(10px)',
          transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)'
        }}
      >
        <ArrowUp size={20} />
      </button>

      {/* Inline style overrides for helper states */}
      <style>{`
        .back-to-top-btn.show {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        .back-to-top-btn:hover {
          background-color: var(--cyan);
          color: var(--bg-darker);
          box-shadow: 0 0 15px rgba(102, 217, 237, 0.3);
        }
      `}</style>
    </div>
  );
};

export default App;
