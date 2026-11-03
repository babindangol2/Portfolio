import type { AboutContent, Skill } from '../../types';
import { useScrollAnimation } from '../../hooks';
import './About.css';

interface AboutProps {
  content: AboutContent;
}

export function About({ content }: AboutProps) {
  const [headlineRef, headlineState] = useScrollAnimation({ threshold: 0.2 });
  const [contentRef, contentState] = useScrollAnimation({ threshold: 0.1, delay: 200 });
  const [skillsRef, skillsState] = useScrollAnimation({ threshold: 0.1, delay: 400 });

  const skillsByCategory = content.skills.reduce<Record<string, Skill[]>>((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const categoryLabels: Record<string, string> = {
    frontend: 'Frontend',
    backend: 'Backend',
    mobile: 'Mobile',
    design: 'Design',
    tools: 'Tools',
  };

  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2
          ref={headlineRef}
          className={`about-headline ${headlineState.isVisible ? 'visible' : ''}`}
        >
          {content.headline}
        </h2>

        <div
          ref={contentRef}
          className={`about-content ${contentState.isVisible ? 'visible' : ''}`}
        >
          {content.paragraphs.map((paragraph, index) => (
            <p key={index} className="about-paragraph">
              {paragraph}
            </p>
          ))}
        </div>

        <div
          ref={skillsRef}
          className={`about-skills ${skillsState.isVisible ? 'visible' : ''}`}
        >
          <h3 className="skills-title">Skills & Technologies</h3>
          <div className="skills-grid">
            {Object.entries(skillsByCategory).map(([category, skills]) => (
              <div key={category} className="skill-category">
                <span className="skill-category-label">
                  {categoryLabels[category] || category}
                </span>
                <div className="skill-tags">
                  {skills.map((skill) => (
                    <span key={skill.name} className="skill-tag">
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
