import type { Experience } from '../../types';
import { useScrollAnimation } from '../../hooks';
import './Resume.css';

interface ResumeProps {
  experience: Experience[];
}

export function Resume({ experience }: ResumeProps) {
  const [headerRef, headerState] = useScrollAnimation({ threshold: 0.2 });

  // Reorganize into the specific categories shown in the design
  const skillCategories = {
    languages: ['Dart', 'TypeScript', 'JavaScript', 'Python'],
    frameworks: ['Flutter', 'React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Riverpod'],
    tools: ['Firebase', 'Supabase', 'Figma', 'Git', 'Docker', 'VS Code'],
  };

  return (
    <section id="resume" className="resume">
      <div className="resume-container">
        <div
          ref={headerRef}
          className={`resume-header ${headerState.isVisible ? 'visible' : ''}`}
        >
          <h2 className="resume-title">Resume</h2>
          <p className="resume-subtitle">
            Where I've worked and the tools I use every day.
          </p>
        </div>

        <div className="resume-content">
          {/* Experience Column */}
          <div className="resume-experience">
            <h3 className="resume-section-title">EXPERIENCE</h3>
            <div className="experience-timeline">
              {experience.map((exp, index) => (
                <ExperienceItem key={exp.id} experience={exp} index={index} />
              ))}
            </div>
          </div>

          {/* Skills Column */}
          <div className="resume-skills">
            <h3 className="resume-section-title">SKILLS</h3>
            
            <div className="skills-category">
              <h4 className="skills-category-title">LANGUAGES</h4>
              <div className="skills-tags">
                {skillCategories.languages.map((skill) => (
                  <span key={skill} className="skill-pill">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skills-category">
              <h4 className="skills-category-title">FRAMEWORKS</h4>
              <div className="skills-tags">
                {skillCategories.frameworks.map((skill) => (
                  <span key={skill} className="skill-pill">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skills-category">
              <h4 className="skills-category-title">TOOLS</h4>
              <div className="skills-tags">
                {skillCategories.tools.map((skill) => (
                  <span key={skill} className="skill-pill">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ExperienceItemProps {
  experience: Experience;
  index: number;
}

function ExperienceItem({ experience, index }: ExperienceItemProps) {
  const [ref, state] = useScrollAnimation({ threshold: 0.1, delay: index * 100 });

  const formatDate = (date: string) => {
    const d = new Date(date);
    return d.getFullYear();
  };

  const dateRange = experience.current
    ? `${formatDate(experience.startDate)} — Present`
    : `${formatDate(experience.startDate)} — ${experience.endDate ? formatDate(experience.endDate) : ''}`;

  return (
    <article
      ref={ref}
      className={`experience-item ${state.isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="experience-icon">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M5 6H11M5 8H11M5 10H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>
      <div className="experience-content">
        <span className="experience-date">{dateRange}</span>
        <h4 className="experience-role">{experience.role}</h4>
        <span className="experience-company">{experience.company}</span>
        <p className="experience-description">{experience.description}</p>
      </div>
    </article>
  );
}

export default Resume;
