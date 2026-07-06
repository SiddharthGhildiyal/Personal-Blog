import React, { useState } from 'react';
import { ChevronDown, MapPin, ExternalLink, Briefcase } from 'lucide-react';
import './Experience.css';

interface Job {
  id: number;
  position: string;
  company: string;
  companyLink?: string;
  time: string;
  location: string;
  description: string;
  tech: string[];
}

const experienceData: Job[] = [
  {
    id: 1,
    position: 'Senior Lead Software Engineer',
    company: 'Saimon Global Ltd',
    companyLink: 'https://saimonglobal.com',
    time: '2019 - 2024',
    location: 'Dhaka, Bangladesh',
    description: 'Led a frontend team to design and develop robust B2C and B2B Travel Tech solutions. Utilized React/Next.js for web applications and Flutter SDK for cross-platform mobile apps, with a focus on responsive design, performance optimization, and scalable styling systems.',
    tech: ['React', 'NextJS', 'TypeScript', 'Flutter', 'Dart', 'Redux', 'GDS API']
  },
  {
    id: 2,
    position: 'Web Developer',
    company: 'influenceTHIS Canada',
    companyLink: 'https://www.influencethis.ca',
    time: '2018 - 2019',
    location: 'Remote (Toronto, Canada)',
    description: 'Developed the UI and UX ecosystem for a conference event platform. Implemented highly responsive web pages using modular component structures with Javascript, SCSS, and Gulp on Node.',
    tech: ['Javascript', 'SCSS', 'Gulp', 'Node.js', 'BEM methodology']
  },
  {
    id: 3,
    position: 'Top Rated Web Developer',
    company: 'Upwork Inc.',
    companyLink: 'https://upwork.com',
    time: '2017 - Present',
    location: 'Remote',
    description: 'Provide high-quality freelance consulting and frontend development. Completed 150+ jobs with a 100% job success rate. Specialized in React, single page applications, WordPress core custom themes, and Figma-to-code conversions.',
    tech: ['React', 'Javascript', 'WordPress', 'PHP', 'HTML5', 'CSS3', 'Figma']
  }
];

export const Experience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(1); // Expand first by default

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="experience-section">
      <div className="glow-effect exp-glow-circle" style={{ top: '20%', right: '5%', width: '400px', height: '400px', backgroundColor: 'var(--magenta)' }}></div>

      <div className="container">
        <div className="section-header">
          <span className="section-number">// 03.</span>
          <h2 className="section-title">Professional Experience</h2>
        </div>

        <div className="timeline-accordion-wrap">
          {experienceData.map((job) => {
            const isExpanded = expandedId === job.id;
            return (
              <div 
                className={`accordion-item ${isExpanded ? 'active' : ''}`} 
                key={job.id}
              >
                {/* Header */}
                <div 
                  className="accordion-header"
                  onClick={() => toggleExpand(job.id)}
                >
                  <div className="header-meta">
                    <div className="job-role-info">
                      <Briefcase size={18} className="role-icon" />
                      <h3 className="job-role-title">
                        {job.position} <span className="company-text">@ {job.company}</span>
                      </h3>
                    </div>
                    <span className="job-time-badge">{job.time}</span>
                  </div>
                  
                  <button 
                    className="accordion-toggle-btn"
                    aria-label={isExpanded ? 'Collapse details' : 'Expand details'}
                  >
                    <ChevronDown size={20} className="arrow-icon" />
                  </button>
                </div>

                {/* Content Body */}
                <div className="accordion-content">
                  <div className="accordion-content-inner">
                    <div className="meta-details">
                      <div className="meta-item">
                        <MapPin size={16} />
                        <span>{job.location}</span>
                      </div>
                      {job.companyLink && (
                        <a 
                          href={job.companyLink} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="meta-item link"
                        >
                          <ExternalLink size={16} />
                          <span>{job.company.toLowerCase()}.com</span>
                        </a>
                      )}
                    </div>

                    <p className="job-description">{job.description}</p>

                    <div className="job-tech-list">
                      {job.tech.map((t) => (
                        <span className="tech-badge" key={t}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
