import { useEffect, useState } from 'react';
import type { HeroContent, Project } from '../../types';
import './Hero.css';

interface HeroProps {
  content: HeroContent;
  projects: Project[];
}

export function Hero({ content, projects }: HeroProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [runState, setRunState] = useState<'ready' | 'running' | 'launched'>('ready');
  const [phoneScreen, setPhoneScreen] = useState<'portfolio' | 'projects'>('portfolio');

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (runState !== 'running') return;

    const timer = setTimeout(() => setRunState('launched'), 900);
    return () => clearTimeout(timer);
  }, [runState]);

  return (
    <section className={`hero ${isLoaded ? 'loaded' : ''}`}>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-intro">
            <img className="hero-avatar" src={content.profileImage} alt="" />
            <span>Hi, I&apos;m {content.name.split(' ')[0]}</span>
            <span className="hero-intro-divider" aria-hidden="true">·</span>
            <span className="hero-availability">
              <span className="hero-status-dot" />
              Open to Flutter &amp; mobile roles
            </span>
          </div>

          <h1 className="hero-title">
            <span>{content.title}</span>
            <span className="hero-title-accent">shipping polished</span>
            <span>mobile apps.</span>
          </h1>

          <p className="hero-description">{content.description}</p>

          <div className="hero-highlights" aria-label="Specialties">
            <span className="hero-highlight">
              <span aria-hidden="true">⌖</span> Nepal
            </span>
            <span className="hero-highlight">
              <span aria-hidden="true">✳</span> Flutter · Dart · BLoC
            </span>
            <span className="hero-highlight">Android &amp; iOS</span>
          </div>

          <div className="hero-actions">
            <a href="#projects" className="hero-cta hero-cta-primary">
              View projects <span aria-hidden="true">↓</span>
            </a>
            <a href={content.ctaHref} className="hero-cta">
              Get in touch <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="hero-proof-points">
            <div className="hero-proof-item">
              <strong>Flutter</strong>
              <span>Cross-platform apps</span>
            </div>
            <div className="hero-proof-item">
              <strong>BLoC &amp; Firebase</strong>
              <span>Production-ready tools</span>
            </div>
            <div className="hero-proof-item">
              <strong>Nepal</strong>
              <span>Based in Nepal</span>
            </div>
          </div>
        </div>

        <div className="hero-showcase" aria-label="Flutter development preview">
          <div className="editor-window">
            <div className="editor-toolbar">
              <div className="editor-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <span className="editor-project-name">
                BabinPortfolio <b className={runState === 'running' ? 'is-compiling' : ''}>· {runState === 'ready' ? 'Ready' : runState === 'running' ? 'Building…' : 'Running'}</b>
              </span>
              <button
                type="button"
                className="editor-run"
                onClick={() => setRunState('running')}
                disabled={runState === 'running'}
              >
                <span aria-hidden="true">{runState === 'running' ? '◌' : '▶'}</span>
                {runState === 'running' ? 'Building' : runState === 'launched' ? 'Run again' : 'Run'}
              </button>
            </div>

            <div className="editor-body">
              <div className="editor-sidebar">
                <span className="editor-sidebar-heading">PROJECT NAVIGATOR</span>
                <span>◈ BabinPortfolio</span>
                <span className="editor-file-active">▣ main.dart</span>
                <span>▣ profile_view.dart</span>
                <span>▣ contact_sheet.dart</span>
                <span>▾ Apps</span>
                <span><span className="editor-tree-indent" />▣ Hissab POS</span>
                <span><span className="editor-tree-indent" />▣ Nepal Decor</span>
                <span>▾ assets</span>
                <span><span className="editor-tree-indent" />▣ images/</span>
              </div>

              <div className="editor-code" aria-hidden="true">
                <div className="editor-tab"><span className="editor-status-dot" /> main.dart</div>
                <ol>
                  <li><span className="code-purple">import</span> <span className="code-green">&apos;package:flutter/material.dart&apos;</span>;</li>
                  <li><span className="code-purple">import</span> <span className="code-green">&apos;package:flutter_bloc/flutter_bloc.dart&apos;</span>;</li>
                  <li />
                  <li><span className="code-blue">class</span> <span className="code-yellow">BabinDangol</span> {'{'}</li>
                  <li><span className="code-indent" /><span className="code-purple">final</span> role = <span className="code-green">&apos;Flutter Developer&apos;</span>;</li>
                  <li><span className="code-indent" /><span className="code-purple">final</span> focus = <span className="code-green">&apos;Mobile apps&apos;</span>;</li>
                  <li />
                  <li><span className="code-indent" /><span className="code-yellow">Widget</span> build() {'{'}</li>
                  <li><span className="code-indent code-indent-double" /><span className="code-purple">return</span> <span className="code-yellow">MaterialApp</span>(</li>
                  <li><span className="code-indent code-indent-double" />title: <span className="code-green">&apos;Built with care&apos;</span>,</li>
                  <li><span className="code-indent code-indent-double" />home: <span className="code-yellow">Portfolio</span>(),</li>
                  <li><span className="code-indent code-indent-double" />);</li>
                  <li><span className="code-indent" />{'}'}</li>
                  <li>{'}'}</li>
                </ol>
              </div>
            </div>
            <div className="editor-footer">
              <span>
                <span className={`hero-status-dot ${runState === 'running' ? 'is-compiling' : ''}`} />
                {runState === 'ready' ? 'Ready to build' : runState === 'running' ? 'Building app…' : 'Build succeeded'}
              </span>
              <span>Flutter · Dart</span>
            </div>
          </div>

          {runState === 'launched' && <div className="phone-preview" aria-label="Running portfolio app">
            <div className="phone-speaker" />
            <div className="phone-screen">
              <div className="phone-status"><span>9:41</span><span>▮▮▮ ◉</span></div>
              <div className="phone-app-bar">
                <span>{phoneScreen === 'portfolio' ? 'Portfolio' : 'My Projects'}</span>
                <span className="phone-app-indicator">●</span>
              </div>

              <div className="phone-tabs" role="tablist" aria-label="App preview screens">
                <button
                  type="button"
                  role="tab"
                  aria-selected={phoneScreen === 'portfolio'}
                  className={phoneScreen === 'portfolio' ? 'active' : ''}
                  onClick={() => setPhoneScreen('portfolio')}
                >
                  Portfolio
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={phoneScreen === 'projects'}
                  className={phoneScreen === 'projects' ? 'active' : ''}
                  onClick={() => setPhoneScreen('projects')}
                >
                  Projects
                </button>
              </div>

              {phoneScreen === 'portfolio' ? (
                <div className="phone-portfolio-view" role="tabpanel">
                  <div className="phone-profile">
                    <img src={content.profileImage} alt="" />
                    <div>
                      <strong>{content.name}</strong>
                      <span>{content.title}</span>
                    </div>
                  </div>
                  <div className="phone-card">
                    <strong>Building polished mobile apps.</strong>
                    <span>{content.description}</span>
                  </div>
                  <a className="phone-button" href={content.ctaHref}>Get in touch</a>
                </div>
              ) : (
                <div className="phone-project-list" role="tabpanel">
                  {projects.filter((project) => project.featured).map((project) => (
                    <article className="phone-project-card" key={project.id}>
                      <span>{project.tags[0] ?? 'Flutter app'} · {project.year}</span>
                      <strong>{project.title}</strong>
                      <p>{project.description}</p>
                      <div>
                        {project.tags.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
            <div className="phone-home-indicator" />
          </div>}
        </div>
      </div>
    </section>
  );
}

export default Hero;
