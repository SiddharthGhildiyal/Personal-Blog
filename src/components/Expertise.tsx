import React from 'react';
import { Monitor, Code, Smartphone } from 'lucide-react';
import './Expertise.css';

interface SkillItem {
  icon: React.ReactNode;
  title: string;
  underlineClass: string;
  fileName: string;
  fileLang: string;
  codeLines: string[];
}

const skillsData: SkillItem[] = [
  {
    icon: <Code className="exp-icon cyan-color" />,
    title: 'Software Development',
    underlineClass: 'underline-magenta',
    fileName: 'softwareDev.ts',
    fileLang: 'TypeScript',
    codeLines: [
      "// Clean, modular architectures",
      "import { Developer } from './types';",
      "",
      "class Engineer implements Developer {",
      "  readonly languages = [",
      "    'TypeScript', 'JavaScript',",
      "    'Python', 'Dart', 'Java'",
      "  ];",
      "  ",
      "  writeCode() {",
      "    return 'Functional & OOP';",
      "  }",
      "}"
    ]
  },
  {
    icon: <Monitor className="exp-icon magenta-color" />,
    title: 'Frontend Dev',
    underlineClass: 'underline-blue',
    fileName: 'frontend.css',
    fileLang: 'CSS',
    codeLines: [
      "/* Responsive, beautiful layouts */",
      ":root {",
      "  --framework: 'React / NextJS';",
      "  --ui-ux: 'Interactive Designs';",
      "  --responsive: true;",
      "}",
      "",
      ".portfolio-card {",
      "  transition: cubic-bezier(0.25, 0.8);",
      "  backdrop-filter: blur(12px);",
      "  display: grid;",
      "  gap: 2rem;",
      "}"
    ]
  },
  {
    icon: <Smartphone className="exp-icon yellow-color" />,
    title: 'Mobile Dev',
    underlineClass: 'underline-yellow',
    fileName: 'mobileApp.dart',
    fileLang: 'Dart',
    codeLines: [
      "// Hybrid Android & iOS development",
      "import 'package:flutter/material.dart';",
      "",
      "class MyApp extends StatelessWidget {",
      "  @override",
      "  Widget build(BuildContext context) {",
      "    return MaterialApp(",
      "      theme: ThemeData.dark(),",
      "      home: Scaffold(",
      "        body: Center(child: Text('Flutter')),",
      "      ),",
      "    );",
      "  }",
      "}"
    ]
  }
];

export const Expertise: React.FC = () => {
  return (
    <section id="expertise" className="expertise-section">
      <div className="glow-effect exp-glow" style={{ top: '30%', left: '50%', transform: 'translateX(-50%)', width: '500px', height: '500px', backgroundColor: 'var(--violet)' }}></div>

      <div className="container">
        <div className="section-header">
          <span className="section-number">// 01.</span>
          <h2 className="section-title">My Expertise</h2>
        </div>

        <div className="expertise-grid">
          {skillsData.map((skill, index) => (
            <div className="expertise-card" key={index}>
              <div className="code-editor-frame">
                <div className="code-editor-header">
                  <div className="editor-dots">
                    <div className="editor-dot red"></div>
                    <div className="editor-dot yellow"></div>
                    <div className="editor-dot green"></div>
                  </div>
                  <div className="editor-tab">
                    {skill.icon}
                    <span>{skill.fileName}</span>
                  </div>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{skill.fileLang}</span>
                </div>
                
                <div className="code-editor-body">
                  {skill.codeLines.map((line, lIndex) => (
                    <div className="code-line" key={lIndex}>
                      <span className="line-num">{lIndex + 1}</span>
                      <span className="code-line-content">{line}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card-info">
                <h3 className={`chonky-underline ${skill.underlineClass}`}>
                  {skill.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
