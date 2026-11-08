import type { CSSProperties } from 'react';
import { heroTech } from '../data/profile';

type Token = [cls: string, text: string];

/** Illustrative snippet only — a generic RAG endpoint, not code from any real project. */
const code: Token[][] = [
  [['kw', 'from '], ['id', 'fastapi '], ['kw', 'import '], ['cls', 'FastAPI']],
  [['kw', 'from '], ['id', 'core.ai '], ['kw', 'import '], ['id', 'retrieve, llm']],
  [],
  [['id', 'app '], ['op', '= '], ['cls', 'FastAPI'], ['op', '()']],
  [],
  [['dec', '@app.post'], ['op', '('], ['str', '"/ask"'], ['op', ')']],
  [['kw', 'async def '], ['fn', 'ask'], ['op', '('], ['id', 'q'], ['op', ': '], ['cls', 'Query'], ['op', '):']],
  [['pad', '    '], ['id', 'docs '], ['op', '= '], ['kw', 'await '], ['fn', 'retrieve'], ['op', '('], ['id', 'q.text'], ['op', ', '], ['id', 'k'], ['op', '='], ['num', '4'], ['op', ')']],
  [['pad', '    '], ['id', 'answer '], ['op', '= '], ['kw', 'await '], ['id', 'llm.'], ['fn', 'generate'], ['op', '(']],
  [['pad', '        '], ['id', 'prompt'], ['op', '='], ['id', 'q.text'], ['op', ', '], ['id', 'context'], ['op', '='], ['id', 'docs']],
  [['pad', '    '], ['op', ')']],
  [['pad', '    '], ['kw', 'return '], ['op', '{'], ['str', '"answer"'], ['op', ': '], ['id', 'answer'], ['op', '}']],
];

export function HeroVisual() {
  const orbit = heroTech.slice(0, 6);
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="hero-glow" />
      <div className="orbit orbit-1">
        {orbit.map(({ icon: Icon, label }, i) => (
          <span
            key={label}
            className="orbit-item"
            style={{ '--angle': `${(360 / orbit.length) * i}deg` } as CSSProperties}
          >
            <span className="orbit-chip">
              <Icon />
            </span>
          </span>
        ))}
      </div>
      <div className="orbit orbit-2" />

      <div className="code-window">
        <div className="code-titlebar">
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
          <span className="code-filename">main.py</span>
        </div>
        <pre className="code-body">
          {code.map((line, i) => (
            <span className="code-line" key={i} style={{ '--l': i } as CSSProperties}>
              <span className="ln">{String(i + 1).padStart(2, '0')}</span>
              {line.map(([cls, text], j) => (
                <span key={j} className={`t-${cls}`}>
                  {text}
                </span>
              ))}
              {i === code.length - 1 && <span className="caret" />}
              {'\n'}
            </span>
          ))}
        </pre>
      </div>

      <div className="float-card float-card-1">
        <span className="float-dot" />
        <span>LLM · RAG pipeline</span>
      </div>
      <div className="float-card float-card-2">
        <span className="float-dot float-dot-alt" />
        <span>Multi-agent workflows</span>
      </div>
    </div>
  );
}
