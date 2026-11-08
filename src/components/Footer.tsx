import { LuArrowUp, LuMail } from 'react-icons/lu';
import { SiGithub } from 'react-icons/si';
import { profile } from '../data/profile';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React &amp; TypeScript.
        </p>
        <div className="footer-links">
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <LuMail aria-hidden="true" />
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)">
            <SiGithub aria-hidden="true" />
          </a>
          <a href="#home" className="to-top" aria-label="Back to top">
            <LuArrowUp aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
