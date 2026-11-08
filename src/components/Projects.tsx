import type { CSSProperties } from 'react';
import { LuArrowUpRight, LuBrainCircuit, LuFileText, LuLayers, LuLock, LuMessageSquare, LuSearch } from 'react-icons/lu';
import { SiGithub } from 'react-icons/si';
import { projects, type Project } from '../data/profile';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

/** Conceptual RAG flow diagram (illustration, not a screenshot). */
const flow = [
  { icon: LuFileText, label: 'Documents' },
  { icon: LuLayers, label: 'Embeddings' },
  { icon: LuSearch, label: 'Retrieval' },
  { icon: LuBrainCircuit, label: 'LLM' },
  { icon: LuMessageSquare, label: 'Answer' },
];

function RepoLink({ project }: { project: Project }) {
  if (project.isPrivate || !project.repo) {
    return (
      <span className="repo-private">
        <LuLock aria-hidden="true" />
        Private repository · source not public
      </span>
    );
  }
  return (
    <a className="repo-link" href={project.repo} target="_blank" rel="noopener noreferrer">
      <SiGithub aria-hidden="true" />
      View on GitHub
      <LuArrowUpRight aria-hidden="true" className="repo-arrow" />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}

function ProjectMeta({ project }: { project: Project }) {
  return (
    <div className="project-meta">
      <span className="project-category">{project.category}</span>
      {project.isPrivate && (
        <span className="pill">
          <LuLock aria-hidden="true" /> Private
        </span>
      )}
      {project.status && <span className="pill">{project.status}</span>}
    </div>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading id="projects-title" eyebrow="Selected projects" title="Things I've built" />

        {featured.map((project) => {
          const Icon = project.icon;
          return (
            <Reveal as="article" key={project.title} className="card project-featured spotlight">
              <div className="project-featured-copy">
                <ProjectMeta project={project} />
                <h3>
                  <span className="project-icon" aria-hidden="true">
                    <Icon />
                  </span>
                  {project.title}
                </h3>
                <p>{project.description}</p>
                <ul className="tag-row" aria-label="Technologies">
                  {project.tech.map((t) => (
                    <li key={t} className="tag">
                      {t}
                    </li>
                  ))}
                </ul>
                <RepoLink project={project} />
              </div>

              <figure className="rag-flow" aria-label="Conceptual flow: documents, embeddings, retrieval, LLM, answer">
                {flow.map(({ icon: StepIcon, label }, i) => (
                  <div className="rag-step" key={label} style={{ '--i': i } as CSSProperties}>
                    <span className="rag-node" aria-hidden="true">
                      <StepIcon />
                    </span>
                    <span className="rag-label">{label}</span>
                  </div>
                ))}
                <figcaption>Conceptual retrieval-augmented generation flow</figcaption>
              </figure>
            </Reveal>
          );
        })}

        <div className="projects-grid">
          {others.map((project, i) => {
            const Icon = project.icon;
            return (
              <Reveal as="article" key={project.title} delay={i * 90} className="card project-card spotlight">
                <ProjectMeta project={project} />
                <h3>
                  <span className="project-icon project-icon-sm" aria-hidden="true">
                    <Icon />
                  </span>
                  <span>
                    {project.title}
                    {project.subtitle && <span className="project-subtitle">{project.subtitle}</span>}
                  </span>
                </h3>
                <p>{project.description}</p>
                <ul className="tag-row" aria-label="Technologies">
                  {project.tech.map((t) => (
                    <li key={t} className="tag">
                      {t}
                    </li>
                  ))}
                </ul>
                <RepoLink project={project} />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
