import React, { useState, useEffect } from 'react';
import { Terminal, Mail, FileText, ChevronDown } from 'lucide-react';
import './Hero.css';

const roles = ['Software Engineer.', 'Front-end Developer.', 'App Developer.', 'Problem Solver.'];

// Custom brand icons since lucide-react deprecated them in recent versions
const GithubIcon: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide-icon"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide-icon"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[roleIndex];
      if (!isDeleting) {
        // Typing
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullText) {
          // Pause before deleting
          setIsDeleting(true);
          setTypingSpeed(2000);
        }
      } else {
        // Deleting
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(500);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, typingSpeed]);

  const scrollToNextSection = () => {
    const nextSec = document.getElementById('expertise');
    if (nextSec) {
      window.scrollTo({
        top: nextSec.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Decorative Glow Circles */}
      <div className="glow-effect hero-glow-1" style={{ top: '10%', left: '5%', width: '400px', height: '400px', backgroundColor: 'var(--cyan)' }}></div>
      <div className="glow-effect hero-glow-2" style={{ bottom: '20%', right: '10%', width: '350px', height: '350px', backgroundColor: 'var(--magenta)' }}></div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Ready for freelance opportunities
          </div>
          
          <h1 className="hero-title">
            Hi, I'm <span className="chonky-underline underline-magenta">Siddharth</span>
          </h1>
          
          <h2 className="hero-subtitle">
            I am a <span className="cursor-blink highlight-cyan">{currentText}</span>
          </h2>
          
          <p className="hero-description">
            Developer devoted to creating premium web experiences. Specializing in highly interactive applications, beautiful interfaces, and clean architectures.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn-primary">
              Let's talk
            </a>
            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="GitHub">
                <GithubIcon size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
                <LinkedinIcon size={20} />
              </a>
              <a href="mailto:siddharth@example.com" className="social-icon-btn" aria-label="Email">
                <Mail size={20} />
              </a>
              <a href="#" className="social-icon-btn" aria-label="Resume">
                <FileText size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Mock IDE Code Editor Widget */}
        <div className="hero-editor-container">
          <div className="code-editor-frame">
            <div className="code-editor-header">
              <div className="editor-dots">
                <div className="editor-dot red"></div>
                <div className="editor-dot yellow"></div>
                <div className="editor-dot green"></div>
              </div>
              <div className="editor-tab">
                <Terminal size={14} className="tab-icon" />
                <span>developer.json</span>
              </div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>JSON</span>
            </div>
            
            <div className="code-editor-body">
              <div className="code-line"><span className="line-num">1</span><span className="syntax-keyword">const</span> developer <span className="syntax-operator">=</span> &#123;</div>
              <div className="code-line"><span className="line-num">2</span>  name<span className="syntax-operator">:</span> <span className="syntax-string">'Siddharth Ghildiyal'</span>,</div>
              <div className="code-line"><span className="line-num">3</span>  skills<span className="syntax-operator">:</span> [</div>
              <div className="code-line"><span className="line-num">4</span>    <span className="syntax-string">'React'</span>, <span className="syntax-string">'Next.js'</span>, <span className="syntax-string">'TypeScript'</span>,</div>
              <div className="code-line"><span className="line-num">5</span>    <span className="syntax-string">'Node.js'</span>, <span className="syntax-string">'Python'</span>, <span className="syntax-string">'CSS Grid/Flexbox'</span></div>
              <div className="code-line"><span className="line-num">6</span>  ],</div>
              <div className="code-line"><span className="line-num">7</span>  passion<span className="syntax-operator">:</span> <span className="syntax-string">'Building high-performance premium interfaces'</span>,</div>
              <div className="code-line"><span className="line-num">8</span>  experience<span className="syntax-operator">:</span> <span className="syntax-number">5</span> /* years */,</div>
              <div className="code-line"><span className="line-num">9</span>  location<span className="syntax-operator">:</span> <span className="syntax-string">'India'</span>,</div>
              <div className="code-line"><span className="line-num">10</span>  hirable<span className="syntax-operator">:</span> <span className="syntax-boolean">true</span></div>
              <div className="code-line"><span className="line-num">11</span>&#125;;</div>
            </div>
          </div>
        </div>
      </div>

      <button className="scroll-indicator" onClick={scrollToNextSection} aria-label="Scroll down">
        <ChevronDown size={28} />
      </button>
    </section>
  );
};
