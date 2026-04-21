import { useMemo } from 'react';
import { useStore } from '../store/useStore';
import { getQuestionById } from '../data/questions';
import type { Domain } from '../types';

const C = {
  hotPink: '#E91E63',
  hotPinkDeep: '#B0124D',
  goldBright: '#FFD700',
  plumDeep: '#4A0E2E',
  plumDeeper: '#2A0519',
  black: '#0A0A0A',
  cream: '#FFF9F0',
  green: '#4ADE80',
  red: '#F43F5E',
};

const DOMAINS: Domain[] = [
  'License Law', 'Agency', 'Fair Housing', 'Contracts',
  'Financing', 'Disclosure', 'Property', 'GA-Specific',
];

export default function Reunion() {
  const answers = useStore(s => s.answers);

  const stats = useMemo(() => {
    const out: Record<Domain, { total: number; correct: number }> = Object.fromEntries(
      DOMAINS.map(d => [d, { total: 0, correct: 0 }])
    ) as Record<Domain, { total: number; correct: number }>;
    answers.forEach(a => {
      const q = getQuestionById(a.questionId);
      if (!q) return;
      out[q.domain].total += 1;
      if (a.correct) out[q.domain].correct += 1;
    });
    return out;
  }, [answers]);

  const overallTotal = answers.length;
  const overallCorrect = answers.filter(a => a.correct).length;
  const overallPct = overallTotal ? Math.round((overallCorrect / overallTotal) * 100) : 0;

  return (
    <div style={{
      width: '100%', minHeight: '100%', position: 'relative',
      background: `
        radial-gradient(ellipse 90% 40% at 50% 0%, rgba(233, 30, 99, 0.28) 0%, transparent 60%),
        linear-gradient(180deg, ${C.plumDeep} 0%, ${C.plumDeeper} 45%, ${C.black} 100%)
      `,
      paddingBottom: 40,
    }}>
      {/* Reunion couch backdrop */}
      <div style={{
        height: 160, position: 'relative', overflow: 'hidden',
        marginBottom: -40, opacity: 0.42,
      }}>
        <img src="/assets/Reunion_Couch.png" alt="" style={{
          width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%',
          filter: 'brightness(0.55)',
        }}/>
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(180deg, transparent 0%, ${C.plumDeeper} 100%)`,
        }}/>
      </div>

      <div style={{ position: 'relative', zIndex: 1, padding: '0 18px' }}>
        <div style={{ textAlign: 'center', paddingTop: 6 }}>
          <div style={{
            fontFamily: 'Inter, system-ui', fontSize: 10, fontWeight: 900,
            letterSpacing: '0.3em', color: C.goldBright, textTransform: 'uppercase',
            textShadow: '0 0 8px rgba(255,215,0,0.4)',
          }}>The Reunion</div>
          <div style={{
            fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
            fontWeight: 900, fontSize: 36, color: C.cream,
            letterSpacing: -1, lineHeight: 1, marginTop: 6,
            textShadow: '0 2px 12px rgba(233,30,99,0.5)',
          }}>Domain Scorecard</div>
        </div>

        {/* Overall ring */}
        <div style={{
          marginTop: 18, padding: '14px 16px', borderRadius: 14,
          background: `linear-gradient(180deg, rgba(255,215,0,0.14) 0%, rgba(74,14,46,0.6) 100%)`,
          border: `1.5px solid ${C.goldBright}`,
          display: 'flex', alignItems: 'center', gap: 14,
        }}>
          <div style={{
            width: 80, height: 80, borderRadius: '50%',
            background: `conic-gradient(${C.goldBright} ${overallPct * 3.6}deg, rgba(255,255,255,0.12) 0deg)`,
            padding: 3,
            boxShadow: `0 0 0 1.5px ${C.black}, 0 0 16px rgba(255,215,0,0.45)`,
          }}>
            <div style={{
              width: '100%', height: '100%', borderRadius: '50%',
              background: C.plumDeeper,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexDirection: 'column',
            }}>
              <div style={{
                fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
                fontWeight: 900, fontSize: 24, color: C.goldBright, lineHeight: 1,
              }}>{overallPct}%</div>
              <div style={{
                fontFamily: 'Inter, system-ui', fontSize: 7, fontWeight: 900,
                letterSpacing: '0.2em', color: 'rgba(255,249,240,0.6)', marginTop: 2,
              }}>OVERALL</div>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{
              fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
              fontWeight: 800, fontSize: 16, color: C.cream, lineHeight: 1.2,
            }}>{overallCorrect} of {overallTotal} questions nailed</div>
            <div style={{
              marginTop: 4,
              fontFamily: 'Inter, system-ui', fontSize: 11, fontWeight: 500,
              color: 'rgba(255,249,240,0.65)', lineHeight: 1.4,
            }}>Pass mark on the real exam: <span style={{ color: C.goldBright, fontWeight: 800 }}>72%</span> national, <span style={{ color: C.goldBright, fontWeight: 800 }}>73%</span> GA-specific.</div>
          </div>
        </div>

        {/* Domain breakdown */}
        <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {DOMAINS.map(d => {
            const s = stats[d];
            const pct = s.total ? Math.round((s.correct / s.total) * 100) : 0;
            const tone = pct >= 80 ? C.green : pct >= 60 ? C.goldBright : pct > 0 ? C.hotPink : 'rgba(255,249,240,0.3)';
            return (
              <div key={d} style={{
                padding: '10px 12px', borderRadius: 10,
                background: 'rgba(10,10,10,0.5)',
                border: `1px solid rgba(255,249,240,0.1)`,
              }}>
                <div style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6,
                }}>
                  <div style={{
                    fontFamily: 'Inter, system-ui', fontSize: 10, fontWeight: 900,
                    letterSpacing: '0.16em', color: C.cream, textTransform: 'uppercase',
                  }}>{d}</div>
                  <div style={{
                    fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
                    fontWeight: 900, fontSize: 16, color: tone,
                  }}>{s.total ? `${pct}%` : '—'}</div>
                </div>
                <div style={{ height: 4, borderRadius: 2, background: 'rgba(255,249,240,0.08)', overflow: 'hidden' }}>
                  <div style={{
                    width: `${pct}%`, height: '100%', background: tone,
                    boxShadow: `0 0 6px ${tone}`,
                  }}/>
                </div>
                <div style={{
                  marginTop: 4,
                  fontFamily: 'Inter, system-ui', fontSize: 10, fontWeight: 500,
                  color: 'rgba(255,249,240,0.5)',
                }}>{s.correct} of {s.total} attempted</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
