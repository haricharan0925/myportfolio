import { LuBriefcase, LuMail, LuMapPin, LuSparkles } from 'react-icons/lu';
import { about, profile } from '../data/profile';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

const facts = [
  { icon: LuBriefcase, label: 'Experience', value: `${profile.experienceYears}, professional` },
  { icon: LuSparkles, label: 'Focus', value: 'Python · AI & LLMs · Azure' },
  { icon: LuMapPin, label: 'Based in', value: profile.location },
  { icon: LuMail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
];

export function About() {
  const [lead, ...body] = about;
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading id="about-title" eyebrow="About" title="Engineering AI that ships." />
        <div className="about-grid">
          <div className="about-copy">
            <Reveal as="p" className="about-lead">
              {lead}
            </Reveal>
            {body.map((p, i) => (
              <Reveal as="p" key={i} delay={80 * (i + 1)}>
                {p}
              </Reveal>
            ))}
          </div>

          <Reveal className="card about-card spotlight" delay={120}>
            <div className="about-card-head">
              <span className="avatar" aria-hidden="true">
                {profile.initials}
              </span>
              <div>
                <p className="about-card-name">{profile.name}</p>
                <p className="about-card-role">{profile.role}</p>
              </div>
            </div>
            <dl className="facts">
              {facts.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="fact">
                  <dt>
                    <Icon aria-hidden="true" />
                    {label}
                  </dt>
                  <dd>{href ? <a href={href}>{value}</a> : value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
