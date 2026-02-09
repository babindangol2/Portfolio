import type { Project } from '../../types';
import { useScrollAnimation } from '../../hooks';
import './Projects.css';

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  const [headerRef, headerState] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div
          ref={headerRef}
          className={`projects-header ${headerState.isVisible ? 'visible' : ''}`}
        >
          <h2 className="projects-title">Featured Work</h2>
          <p className="projects-subtitle">
            Selected projects showcasing my expertise in Flutter development and UI engineering
          </p>
        </div>

        <div className="projects-grid">
          {projects.filter(p => p.featured).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {projects.some(p => !p.featured) && (
          <div className="other-projects">
            <h3 className="other-projects-title">Other Projects</h3>
            <div className="other-projects-list">
              {projects.filter(p => !p.featured).map((project) => (
                <div key={project.id} className="other-project-item">
                  <span className="other-project-year">{project.year}</span>
                  <span className="other-project-title">{project.title}</span>
                  <div className="other-project-tags">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="other-project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const [ref, state] = useScrollAnimation({ threshold: 0.1, delay: index * 150 });

  return (
    <article
      ref={ref}
      className={`project-card ${state.isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="project-thumbnail">
        <div className="project-thumbnail-placeholder">
          <span>{project.title.charAt(0)}</span>
        </div>
        <div className="project-thumbnail-overlay" />
      </div>
      
      <div className="project-content">
        <div className="project-meta">
          <span className="project-year">{project.year}</span>
          {project.featured && <span className="project-featured-badge">Featured</span>}
        </div>
        
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">{tag}</span>
          ))}
        </div>
        
        <div className="project-links">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <span>View Live</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M4 10L10 4M10 4H5M10 4V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          )}
          {project.sourceUrl && (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link secondary"
            >
              <span>Source</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M4 10L10 4M10 4H5M10 4V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default Projects;
