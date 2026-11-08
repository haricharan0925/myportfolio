import { LuBriefcase, LuCheck } from 'react-icons/lu';
import { experience } from '../data/profile';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeading id="experience-title" eyebrow="Experience" title="Professional experience" />
        <div className="timeline">
          <span className="timeline-rail" aria-hidden="true" />
          <Reveal as="article" className="card exp-card spotlight">
            <span className="timeline-node" aria-hidden="true">
              <LuBriefcase />
            </span>
            <header className="exp-head">
              <div>
                <h3>{experience.title}</h3>
                <p className="exp-sub">{experience.subtitle}</p>
              </div>
              <span className="pill pill-accent">{experience.duration}</span>
            </header>
            <ul className="exp-points">
              {experience.points.map((point, i) => (
                <Reveal as="li" key={point} delay={40 * i}>
                  <LuCheck aria-hidden="true" />
                  <span>{point}</span>
                </Reveal>
              ))}
            </ul>
            <ul className="tag-row" aria-label="Key technologies">
              {experience.tags.map((t) => (
                <li key={t} className="tag">
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
