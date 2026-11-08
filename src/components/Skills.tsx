import { skillGroups } from '../data/profile';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function Skills() {
  const primary = skillGroups.filter((g) => g.tier === 'primary');
  const secondary = skillGroups.filter((g) => g.tier === 'secondary');
  const supporting = skillGroups.filter((g) => g.tier === 'supporting');

  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading
          id="skills-title"
          eyebrow="Technical expertise"
          title="Tools I build with"
          description="Python, AI/LLMs and cloud first, supported by full-stack, data and developer tooling."
        />

        <div className="skills-primary">
          {primary.map(({ title, icon: Icon, items }, i) => (
            <Reveal as="article" key={title} delay={i * 90} className="card skill-card skill-card-primary spotlight">
              <header>
                <span className="skill-icon" aria-hidden="true">
                  <Icon />
                </span>
                <h3>{title}</h3>
                <span className="skill-index" aria-hidden="true">
                  0{i + 1}
                </span>
              </header>
              <ul className="skill-list">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <div className="skills-secondary">
          {secondary.map(({ title, icon: Icon, items }, i) => (
            <Reveal as="article" key={title} delay={i * 90} className="card skill-card spotlight">
              <header>
                <span className="skill-icon skill-icon-sm" aria-hidden="true">
                  <Icon />
                </span>
                <h3>{title}</h3>
              </header>
              <p className="skill-inline">{items.join(' · ')}</p>
            </Reveal>
          ))}
        </div>

        {supporting.map(({ title, icon: Icon, items }) => (
          <Reveal key={title} className="skills-supporting">
            <Icon aria-hidden="true" />
            <span className="skills-supporting-title">{title}</span>
            <span className="muted">(secondary)</span>
            <span className="skills-supporting-items">{items.join(' · ')}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
