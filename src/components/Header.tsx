import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import './Header.css';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: '// home', href: '#home' },
  { label: '// expertise', href: '#expertise' },
  { label: '// work', href: '#work' },
  { label: '// experience', href: '#experience' },
  { label: '// contact', href: '#contact' },
];

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Track active section
      const sections = ['home', 'expertise', 'work', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 120; // offset

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // height of sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className={`header-main ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="logo">
          <Terminal size={20} className="logo-icon" />
          <span className="logo-text">dev<span className="logo-accent">.</span>portfolio</span>
        </a>

        {/* Desktop Menu */}
        <nav className="nav-desktop">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className={`nav-link ${activeSection === item.href.replace('#', '') ? 'active' : ''}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Hamburger Toggle */}
        <button
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Drawer */}
        <div className={`nav-mobile ${isOpen ? 'open' : ''}`}>
          <nav className="nav-mobile-inner">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className={`nav-mobile-link ${
                  activeSection === item.href.replace('#', '') ? 'active' : ''
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};
