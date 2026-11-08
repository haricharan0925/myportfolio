import { useEffect, useRef, useState } from 'react';

/** Simulated AI chat — looks like a real streaming LLM response. Generic questions only. */
const CONVERSATIONS: { q: string; a: string; ms: number; tokens: number }[] = [
  {
    q: 'Summarise the uploaded contract in 3 bullet points.',
    a: `• Effective date is 1 Jan 2025, with auto-renewal unless terminated 30 days prior.\n• Liability is capped at 2× the annual contract value.\n• Governing law: England and Wales; disputes resolved by arbitration.`,
    ms: 1340,
    tokens: 54,
  },
  {
    q: 'Which agent should handle the data-enrichment step?',
    a: 'Routing to the **Enrichment Agent**. It will call the external API, normalise the JSON schema, then hand off to the Summary Agent once complete.',
    ms: 980,
    tokens: 42,
  },
  {
    q: 'Translate the last customer message to English.',
    a: '"I need help setting up the integration — the documentation is not clear on the authentication step."',
    ms: 710,
    tokens: 29,
  },
  {
    q: "What anomalies were detected in this week's sensor data?",
    a: '3 anomalies found:\n1. Temp spike (+14 °C) — sensor T-07, Tuesday 02:41\n2. Pressure drop below threshold — valve V-12, Thursday 09:15\n3. Vibration outlier (σ = 4.2) — motor M-03, Friday 17:52',
    ms: 1120,
    tokens: 61,
  },
];

// Which pipeline step is active for each chat phase
const STEPS = ['query', 'embed', 'retrieve', 'generate', 'done'] as const;
type Step = typeof STEPS[number];

type Phase =
  | { kind: 'idle' }
  | { kind: 'typing-q'; text: string }
  | { kind: 'thinking'; step: Step }
  | { kind: 'streaming'; text: string; step: Step }
  | { kind: 'done'; text: string; ms: number; tokens: number };

export function HeroVisual() {
  const [convoIdx, setConvoIdx] = useState(0);
  const [phase, setPhase] = useState<Phase>({ kind: 'idle' });
  const timeouts = useRef<ReturnType<typeof setTimeout>[]>([]);
  const wrapRef = useRef<HTMLDivElement>(null);

  /* Parallax */
  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        if (!wrapRef.current) return;
        const rect = wrapRef.current.closest('section')?.getBoundingClientRect();
        if (!rect) return;
        const p = Math.max(0, -rect.top / window.innerHeight);
        wrapRef.current.style.transform = `translateY(${p * -50}px)`;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(frame); };
  }, []);

  const after = (ms: number, fn: () => void) => {
    const t = setTimeout(fn, ms);
    timeouts.current.push(t);
    return t;
  };

  const runConvo = (idx: number) => {
    const { q, a, ms, tokens } = CONVERSATIONS[idx % CONVERSATIONS.length];

    // 1. type question char by char
    let typed = '';
    const chars = q.split('');
    const typeChar = (i: number) => {
      if (i >= chars.length) {
        setPhase({ kind: 'thinking', step: 'embed' });
        after(500,  () => setPhase({ kind: 'thinking', step: 'retrieve' }));
        after(1000, () => setPhase({ kind: 'thinking', step: 'generate' }));
        after(1500, () => startStream(a, ms, tokens, idx));
        return;
      }
      typed += chars[i];
      setPhase({ kind: 'typing-q', text: typed });
      after(28 + Math.random() * 22, () => typeChar(i + 1));
    };

    setPhase({ kind: 'idle' });
    after(600, () => {
      setPhase({ kind: 'thinking', step: 'query' });
      after(300, () => typeChar(0));
    });
  };

  const startStream = (a: string, ms: number, tokens: number, idx: number) => {
    const words = a.split(' ');
    let built = '';
    const streamWord = (i: number) => {
      if (i >= words.length) {
        setPhase({ kind: 'done', text: built, ms, tokens });
        after(3400, () => {
          const next = (idx + 1) % CONVERSATIONS.length;
          setConvoIdx(next);
          runConvo(next);
        });
        return;
      }
      built += (i === 0 ? '' : ' ') + words[i];
      setPhase({ kind: 'streaming', text: built, step: 'generate' });
      after(55 + Math.random() * 40, () => streamWord(i + 1));
    };
    streamWord(0);
  };

  useEffect(() => {
    runConvo(convoIdx);
    return () => { timeouts.current.forEach(clearTimeout); timeouts.current = []; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const questionText =
    phase.kind === 'typing-q' ? phase.text
    : (phase.kind === 'thinking' || phase.kind === 'streaming' || phase.kind === 'done')
      ? CONVERSATIONS[convoIdx % CONVERSATIONS.length].q
      : '';

  const answerText = phase.kind === 'streaming' || phase.kind === 'done' ? phase.text : '';
  const isDone     = phase.kind === 'done';
  const donePhase  = isDone ? (phase as Extract<Phase, { kind: 'done' }>) : null;

  const activeStep: Step =
    phase.kind === 'typing-q' ? 'query'
    : phase.kind === 'thinking' ? phase.step
    : phase.kind === 'streaming' ? phase.step
    : phase.kind === 'done' ? 'done'
    : 'query';

  return (
    <div className="hv-wrap" aria-hidden="true">
      <div className="hv-inner" ref={wrapRef}>

        {/* ── Title bar ── */}
        <div className="hv-titlebar">
          <span className="hv-dot" /><span className="hv-dot" /><span className="hv-dot" />
          <span className="hv-title">AI Assistant</span>
          <span className="hv-status">
            <span className="hv-status-dot" />connected
          </span>
        </div>

        {/* ── Split layout: chat + pipeline ── */}
        <div className="hv-split">

          {/* LEFT — chat */}
          <div className="hv-chat">
            <div className="hv-sys-line">
              <span className="hv-tag hv-tag-sys">system</span>
              <span>You are a helpful AI assistant.</span>
            </div>

            {questionText && (
              <div className="hv-row hv-row-user">
                <span className="hv-tag hv-tag-user">user</span>
                <span className="hv-msg">
                  {questionText}
                  {phase.kind === 'typing-q' && <span className="hv-cursor" />}
                </span>
              </div>
            )}

            {phase.kind === 'thinking' && (
              <div className="hv-row hv-row-ai">
                <span className="hv-tag hv-tag-ai">assistant</span>
                <span className="hv-thinking">
                  <span className="hv-dot-pulse" />
                  <span className="hv-dot-pulse" style={{ animationDelay: '0.18s' }} />
                  <span className="hv-dot-pulse" style={{ animationDelay: '0.36s' }} />
                </span>
              </div>
            )}

            {answerText && (
              <div className="hv-row hv-row-ai">
                <span className="hv-tag hv-tag-ai">assistant</span>
                <span className="hv-msg hv-ai-msg">
                  <FormattedText text={answerText} />
                  {!isDone && <span className="hv-cursor" />}
                </span>
              </div>
            )}

            {isDone && donePhase && (
              <div className="hv-footer">
                <span className="hv-meta">{donePhase.tokens} tokens</span>
                <span className="hv-meta-sep">·</span>
                <span className="hv-meta">{donePhase.ms} ms</span>
                <span className="hv-meta-sep">·</span>
                <span className="hv-meta hv-meta-model">claude-sonnet-5</span>
              </div>
            )}
          </div>

          {/* RIGHT — pipeline */}
          <div className="hv-pipeline" aria-hidden="true">
            <p className="hv-pipeline-title">RAG Pipeline</p>
            <div className="hv-pipeline-steps">
              {PIPELINE.map(({ id, label, icon }, i) => {
                const isActive  = activeStep === id;
                const isDoneStep = isDone || STEPS.indexOf(activeStep) > STEPS.indexOf(id as Step);
                return (
                  <div key={id} className="hv-pipe-row">
                    {/* connector line above (skip first) */}
                    {i > 0 && (
                      <div className={`hv-connector ${isDoneStep ? 'hv-connector-done' : ''}`}>
                        {isDoneStep && <span className="hv-connector-pulse" />}
                      </div>
                    )}
                    <div className={`hv-pipe-node ${isActive ? 'hv-pipe-active' : ''} ${isDoneStep ? 'hv-pipe-done' : ''}`}>
                      <span className="hv-pipe-icon">{icon}</span>
                      <span className="hv-pipe-label">{label}</span>
                      {isActive && <span className="hv-pipe-spin" />}
                      {isDoneStep && <span className="hv-pipe-check">✓</span>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function FormattedText({ text }: { text: string }) {
  return (
    <>
      {text.split('\n').map((line, li) => (
        <span key={li}>
          {li > 0 && <br />}
          {line.split(/(\*\*[^*]+\*\*)/).map((seg, si) =>
            seg.startsWith('**') && seg.endsWith('**')
              ? <strong key={si}>{seg.slice(2, -2)}</strong>
              : seg
          )}
        </span>
      ))}
    </>
  );
}

const PIPELINE: { id: string; label: string; icon: string }[] = [
  { id: 'query',    label: 'Query received',  icon: '⌨' },
  { id: 'embed',    label: 'Embed query',      icon: '⬡' },
  { id: 'retrieve', label: 'Vector search',   icon: '⊛' },
  { id: 'generate', label: 'LLM generate',    icon: '◈' },
  { id: 'done',     label: 'Response ready',  icon: '✦' },
];
