import { Reveal } from './Reveal';

type Props = { eyebrow: string; title: string; description?: string; id: string };

export function SectionHeading({ eyebrow, title, description, id }: Props) {
  return (
    <Reveal className="section-heading">
      <p className="eyebrow">
        <span className="eyebrow-line" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 id={id}>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </Reveal>
  );
}
