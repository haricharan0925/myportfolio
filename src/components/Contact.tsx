import { useState } from 'react';
import { LuArrowUpRight, LuCheck, LuCopy, LuMail } from 'react-icons/lu';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa6';
import { profile } from '../data/profile';
import { Reveal } from './Reveal';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* Clipboard unavailable — the mailto link still works. */
    }
  };

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container">
        <Reveal className="contact-panel">
          <div className="contact-glow" aria-hidden="true" />
          <p className="eyebrow">
            <span className="eyebrow-line" aria-hidden="true" />
            Contact
          </p>
          <h2 id="contact-title" className="contact-title">
            Let&rsquo;s build something <span className="text-accent">useful.</span>
          </h2>
          <p className="contact-copy">
            Interested in software engineering, AI development, cloud technologies and technical collaborations.
          </p>

          <div className="contact-links">
            <div className="contact-card spotlight">
              <a href={`mailto:${profile.email}`} className="contact-card-main">
                <span className="contact-icon" aria-hidden="true">
                  <LuMail />
                </span>
                <span>
                  <span className="contact-label">Email</span>
                  <span className="contact-value">{profile.email}</span>
                </span>
              </a>
              <button type="button" className="icon-btn" onClick={copyEmail} aria-label="Copy email address">
                {copied ? <LuCheck aria-hidden="true" /> : <LuCopy aria-hidden="true" />}
              </button>
              <span className="sr-only" aria-live="polite">
                {copied ? 'Email address copied' : ''}
              </span>
            </div>

            <a href={profile.github} className="contact-card spotlight" target="_blank" rel="noopener noreferrer">
              <span className="contact-card-main">
                <span className="contact-icon" aria-hidden="true">
                  <SiGithub />
                </span>
                <span>
                  <span className="contact-label">GitHub</span>
                  <span className="contact-value">github.com/{profile.githubHandle}</span>
                </span>
              </span>
              <LuArrowUpRight aria-hidden="true" className="contact-arrow" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>

            {profile.linkedin && (
              <a href={profile.linkedin} className="contact-card spotlight" target="_blank" rel="noopener noreferrer">
                <span className="contact-card-main">
                  <span className="contact-icon" aria-hidden="true">
                    <FaLinkedin />
                  </span>
                  <span>
                    <span className="contact-label">LinkedIn</span>
                    <span className="contact-value">View profile</span>
                  </span>
                </span>
                <LuArrowUpRight aria-hidden="true" className="contact-arrow" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
