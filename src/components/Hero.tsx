import { LuArrowRight, LuMail, LuMapPin } from 'react-icons/lu';
import { SiGithub } from 'react-icons/si';
import { highlights, profile } from '../data/profile';
import { HeroVisual } from './HeroVisual';
import { Reveal } from './Reveal';

export function Hero() {
  const [first, ...rest] = profile.name.split(' ');
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-eyebrow anim-in" style={{ animationDelay: '60ms' }}>
            <span className="pulse" aria-hidden="true" />
            {profile.role} · {profile.experienceYears} experience
          </p>

          <h1 id="hero-title" className="hero-title anim-in" style={{ animationDelay: '140ms' }}>
            {first} <span className="name-underline">{rest.join(' ')}</span>
          </h1>

          <p className="hero-headline anim-in" style={{ animationDelay: '220ms' }}>
            {profile.headline.map((part, i) => (
              <span key={part}>
                {part}
                {i < profile.headline.length - 1 && (
                  <span className="sep" aria-hidden="true">
                    /
                  </span>
                )}
              </span>
            ))}
          </p>

          <p className="hero-statement anim-in" style={{ animationDelay: '300ms' }}>
            {profile.statement}
          </p>

          <div className="hero-actions anim-in" style={{ animationDelay: '380ms' }}>
            <a href="#projects" className="btn btn-primary">
              View Projects
              <LuArrowRight aria-hidden="true" className="btn-arrow" />
            </a>
            <a href="#contact" className="btn btn-outline">
              <LuMail aria-hidden="true" />
              Contact Me
            </a>
            <a href={profile.github} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
              <SiGithub aria-hidden="true" />
              GitHub
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>

          <p className="hero-location anim-in" style={{ animationDelay: '460ms' }}>
            <LuMapPin aria-hidden="true" />
            {profile.location}
          </p>
        </div>

        <div className="anim-in anim-scale" style={{ animationDelay: '200ms' }}>
          <HeroVisual />
        </div>
      </div>

      <div className="container">
        <ul className="highlights" aria-label="Highlights">
          {highlights.map(({ icon: Icon, title, text }, i) => (
            <Reveal as="li" key={title} delay={i * 80} className="highlight spotlight">
              <span className="highlight-icon" aria-hidden="true">
                <Icon />
              </span>
              <span>
                <strong>{title}</strong>
                <span>{text}</span>
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
