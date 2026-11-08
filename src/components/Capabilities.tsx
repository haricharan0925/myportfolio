import { capabilities } from '../data/profile';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function Capabilities() {
  return (
    <section id="capabilities" className="section" aria-labelledby="capabilities-title">
      <div className="container">
        <SectionHeading id="capabilities-title" eyebrow="Core capabilities" title="What I bring to a team" />
        <ul className="cap-grid">
          {capabilities.map(({ icon: Icon, label }, i) => (
            <Reveal as="li" key={label} delay={(i % 3) * 70} className="cap-item spotlight">
              <span className="cap-num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="cap-icon" aria-hidden="true">
                <Icon />
              </span>
              <span className="cap-label">{label}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
