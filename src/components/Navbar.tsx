import { useEffect, useState, type CSSProperties } from 'react';
import { LuMail, LuMenu, LuX } from 'react-icons/lu';
import { navLinks, profile } from '../data/profile';
import { useActiveSection } from '../hooks/useActiveSection';

const sectionIds = navLinks.map((l) => l.id);

export function Navbar() {
  const active = useActiveSection(sectionIds);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu on Escape and lock background scroll while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <nav className="container navbar-inner" aria-label="Primary">
        <a href="#home" className="brand" aria-label={`${profile.name}, back to top`}>
          <span className="brand-mark" aria-hidden="true">
            {profile.initials}
          </span>
          <span className="brand-divider" aria-hidden="true" />
          <span className="brand-name">{profile.name}</span>
        </a>

        <ul className="nav-links">
          {navLinks
            .filter((l) => l.id !== 'contact')
            .map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={active === link.id ? 'is-active' : ''}
                  aria-current={active === link.id ? 'true' : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
        </ul>

        <a href="#contact" className="btn btn-outline btn-sm nav-cta">
          <LuMail aria-hidden="true" />
          Contact
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <LuX aria-hidden="true" /> : <LuMenu aria-hidden="true" />}
        </button>
      </nav>

      <div id="mobile-menu" className="mobile-menu" hidden={!open}>
        <ul>
          {navLinks.map((link, i) => (
            <li key={link.id} style={{ '--i': i } as CSSProperties}>
              <a
                href={`#${link.id}`}
                className={active === link.id ? 'is-active' : ''}
                onClick={() => setOpen(false)}
              >
                <span className="mobile-index">0{i + 1}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
