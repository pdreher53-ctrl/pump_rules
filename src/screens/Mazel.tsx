import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { getQuestionById, questionsForAct } from '../data/questions';

const M = {
  hotPink: '#E91E63',
  hotPinkDeep: '#B0124D',
  goldBright: '#FFD700',
  champagne: '#D4AF37',
  goldDeep: '#A8820E',
  plumDeep: '#4A0E2E',
  plumDeeper: '#2A0519',
  black: '#0A0A0A',
  cream: '#FFF9F0',
  green: '#4ADE80',
};

function Confetti() {
  const pieces = useMemo(() => {
    const out: Array<{ x: number; y: number; size: number; rot: number; shape: string; color: string; delay: number; duration: number; }> = [];
    let seed = 23;
    const rand = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
    const shapes = ['bell', 'star', 'diamond', 'circle'];
    for (let i = 0; i < 42; i++) {
      out.push({
        x: rand() * 100, y: rand() * 75,
        size: rand() * 10 + 6,
        rot: rand() * 360,
        shape: shapes[Math.floor(rand() * shapes.length)],
        color: rand() > 0.5 ? M.goldBright : (rand() > 0.5 ? M.hotPink : M.champagne),
        delay: rand() * 2,
        duration: rand() * 3 + 2,
      });
    }
    return out;
  }, []);

  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1, overflow: 'hidden' }}>
      {pieces.map((p, i) => (
        <div key={i} style={{
          position: 'absolute', left: `${p.x}%`, top: `${p.y}%`,
          width: p.size, height: p.size,
          transform: `rotate(${p.rot}deg)`,
          animation: `floatPiece ${p.duration}s ease-in-out ${p.delay}s infinite`,
          filter: `drop-shadow(0 0 4px ${p.color})`,
        }}>
          {p.shape === 'bell' && (
            <svg viewBox="0 0 10 10" width="100%" height="100%"><path d="M5 0.5C3 0.5 2 1.8 2 3.5v2.5c0 0.4-.2.8-.5 1.2H8.5c-.3-.4-.5-.8-.5-1.2v-2.5C8 1.8 7 0.5 5 0.5z" fill={p.color} stroke={M.black} strokeWidth="0.4"/><circle cx="5" cy="8.5" r="0.8" fill={p.color} stroke={M.black} strokeWidth="0.4"/></svg>
          )}
          {p.shape === 'star' && (
            <svg viewBox="0 0 10 10" width="100%" height="100%"><path d="M5 0.5l1.4 3 3.1.4-2.3 2.2.6 3.1L5 7.7 2.2 9.2l.6-3.1L.5 3.9l3.1-.4L5 .5z" fill={p.color} stroke={M.black} strokeWidth="0.4"/></svg>
          )}
          {p.shape === 'diamond' && (
            <svg viewBox="0 0 10 10" width="100%" height="100%"><path d="M5 0l5 5-5 5-5-5 5-5z" fill={p.color} stroke={M.black} strokeWidth="0.4"/></svg>
          )}
          {p.shape === 'circle' && (
            <svg viewBox="0 0 10 10" width="100%" height="100%"><circle cx="5" cy="5" r="4.5" fill={p.color} stroke={M.black} strokeWidth="0.4"/></svg>
          )}
        </div>
      ))}
    </div>
  );
}

export default function Mazel() {
  const navigate = useNavigate();
  const lastQuestionId = useStore(s => s.lastQuestionId);
  const streak = useStore(s => s.streak);
  const bravoPoints = useStore(s => s.bravoPoints);
  const sessionAnswered = useStore(s => s.sessionAnswered);
  const sessionTarget = useStore(s => s.sessionTarget);
  const currentAct = useStore(s => s.currentAct);
  const answers = useStore(s => s.answers);

  const q = lastQuestionId ? getQuestionById(lastQuestionId) : undefined;
  const correctText = q ? q.choices.find(c => c.id === q.correctId)?.text ?? '' : '';
  const sessionDone = sessionAnswered >= sessionTarget;
  const actQs = questionsForAct(currentAct);
  const answeredInActIds = new Set(answers.map(a => a.questionId).filter(id => actQs.some(qq => qq.id === id)));
  const actLeft = Math.max(0, actQs.length - answeredInActIds.size);

  const next = () => navigate(sessionDone ? '/recap' : '/play');

  return (
    <div style={{
      width: '100%', minHeight: '100%', position: 'relative',
      background: `
        radial-gradient(ellipse 90% 50% at 50% 15%, rgba(255, 215, 0, 0.25) 0%, transparent 55%),
        radial-gradient(ellipse 80% 40% at 50% 50%, rgba(233, 30, 99, 0.18) 0%, transparent 60%),
        linear-gradient(180deg, ${M.plumDeep} 0%, ${M.plumDeeper} 45%, ${M.black} 100%)
      `,
      paddingBottom: 30,
    }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 320,
        background: `conic-gradient(from 180deg at 50% 0%,
          transparent 0deg, rgba(255,215,0,0.08) 20deg, transparent 40deg,
          rgba(255,215,0,0.12) 60deg, transparent 80deg,
          rgba(255,215,0,0.06) 100deg, transparent 120deg,
          rgba(255,215,0,0.1) 160deg, transparent 180deg,
          rgba(255,215,0,0.08) 220deg, transparent 240deg,
          rgba(255,215,0,0.12) 280deg, transparent 320deg, transparent 360deg)`,
        pointerEvents: 'none', zIndex: 0,
        WebkitMaskImage: 'linear-gradient(180deg, black 0%, transparent 100%)',
        maskImage: 'linear-gradient(180deg, black 0%, transparent 100%)',
      }}/>

      <Confetti />

      <div style={{ position: 'relative', zIndex: 2, paddingTop: 14 }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '0 14px' }}>
          <button onClick={() => navigate('/home')} style={{
            width: 34, height: 34, borderRadius: '50%',
            background: 'rgba(10,10,10,0.55)', border: '1px solid rgba(255,224,236,0.2)',
            backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer',
          }}>
            <svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 2l8 8M10 2l-8 8" stroke={M.cream} strokeWidth="1.8" strokeLinecap="round"/></svg>
          </button>
        </div>

        {/* Title */}
        <div style={{ position: 'relative', textAlign: 'center', marginTop: 4 }}>
          <div style={{
            position: 'absolute', inset: 0, display: 'flex',
            alignItems: 'center', justifyContent: 'center', pointerEvents: 'none',
          }}>
            <div style={{
              width: 260, height: 260, borderRadius: '50%',
              background: `radial-gradient(circle, rgba(255,215,0,0.45) 0%, transparent 65%)`,
              filter: 'blur(8px)',
            }}/>
          </div>
          <div style={{
            fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
            fontWeight: 900, fontSize: 84, lineHeight: 0.9, letterSpacing: -3,
            background: `linear-gradient(180deg, ${M.goldBright} 0%, ${M.champagne} 45%, ${M.goldDeep} 55%, ${M.goldBright} 100%)`,
            WebkitBackgroundClip: 'text', backgroundClip: 'text',
            WebkitTextStroke: `2.5px ${M.black}`,
            color: 'transparent',
            textShadow: `0 4px 0 ${M.black}, 0 8px 24px rgba(255, 215, 0, 0.55), 0 0 48px rgba(255, 215, 0, 0.35)`,
            position: 'relative', transform: 'rotate(-3deg)',
          }}>MAZEL!</div>
          <div style={{
            marginTop: 2,
            fontFamily: '"Bonheur Royale", cursive', fontSize: 28,
            color: M.hotPink,
            textShadow: `0 0 10px ${M.hotPink}, 0 0 20px rgba(233,30,99,0.6), 0 2px 4px rgba(0,0,0,0.4)`,
            transform: 'rotate(-1deg)',
          }}>...you did that</div>
        </div>

        {/* Andy with bell */}
        <div style={{ position: 'relative', marginTop: 10, display: 'flex', justifyContent: 'center' }}>
          <div style={{
            position: 'absolute', inset: '-20px -20% 0',
            background: `radial-gradient(ellipse at 50% 40%, rgba(255,215,0,0.25) 0%, transparent 60%)`,
            pointerEvents: 'none',
          }}/>
          <img src="/assets/ANDY_mazel.png" alt="Andy ringing the Mazel bell" style={{
            height: 240, width: 'auto',
            filter: 'drop-shadow(0 10px 24px rgba(0,0,0,0.6))',
            position: 'relative', zIndex: 2,
            animation: 'andyBob 1.6s ease-in-out infinite',
            transformOrigin: 'bottom center',
          }}/>
          <div style={{
            position: 'absolute', top: 24, right: 18,
            padding: '5px 10px', background: M.hotPink,
            border: `1.5px solid ${M.black}`, borderRadius: 4,
            transform: 'rotate(8deg)',
            boxShadow: `0 3px 0 ${M.black}, 0 6px 14px rgba(0,0,0,0.4)`,
          }}>
            <div style={{
              fontFamily: 'Inter, system-ui', fontSize: 9, fontWeight: 900,
              color: M.cream, letterSpacing: '0.18em',
            }}>🔔 BELL RANG</div>
          </div>
        </div>

        {/* Answer card */}
        <div style={{ margin: '8px 18px 0' }}>
          <div style={{
            padding: '14px 16px 16px',
            borderRadius: 16, background: M.cream,
            border: `2px solid ${M.black}`,
            boxShadow: `0 6px 0 ${M.black}, 0 12px 28px rgba(0,0,0,0.5)`,
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute', top: -12, right: 14,
              padding: '3px 10px', background: M.green,
              border: `1.5px solid ${M.black}`, borderRadius: 999,
              boxShadow: `0 2px 0 ${M.black}`,
              fontFamily: 'Inter, system-ui', fontSize: 9, fontWeight: 900,
              letterSpacing: '0.16em', color: M.black,
              display: 'flex', alignItems: 'center', gap: 4,
            }}>
              <svg width="10" height="10" viewBox="0 0 10 10"><path d="M1 5l3 3L9 2" stroke={M.black} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
              CORRECT
            </div>

            <div style={{
              fontFamily: 'Inter, system-ui', fontSize: 9, fontWeight: 800,
              letterSpacing: '0.2em', color: M.hotPinkDeep, textTransform: 'uppercase',
            }}>THE RIGHT CALL</div>
            <div style={{
              marginTop: 4,
              fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
              fontWeight: 700, fontSize: 14, lineHeight: 1.3, color: M.black,
              letterSpacing: -0.2,
            }}>"{correctText}"</div>

            <div style={{
              height: 1, background: `linear-gradient(90deg, transparent 0%, ${M.black} 20%, ${M.black} 80%, transparent 100%)`,
              opacity: 0.2, margin: '12px 0',
            }}/>

            <div style={{
              fontFamily: 'Inter, system-ui', fontSize: 9, fontWeight: 800,
              letterSpacing: '0.2em', color: M.hotPinkDeep, textTransform: 'uppercase',
            }}>WHY IT WORKS</div>
            <div style={{
              marginTop: 4,
              fontFamily: 'Inter, system-ui', fontSize: 12.5, lineHeight: 1.45,
              color: M.black, fontWeight: 500,
            }}>{q?.explanation}</div>

            <div style={{
              marginTop: 12,
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 5,
                padding: '3px 8px', borderRadius: 4,
                background: 'rgba(10,10,10,0.08)',
                border: `1px solid rgba(10,10,10,0.15)`,
                fontFamily: 'Inter, system-ui', fontSize: 9, fontWeight: 800,
                letterSpacing: '0.1em', color: M.black, textTransform: 'uppercase',
              }}>📜 {q?.domain}</div>
              {q?.source && (
                <div style={{
                  fontFamily: 'Inter, system-ui', fontSize: 9, fontWeight: 700,
                  letterSpacing: '0.06em', color: 'rgba(10,10,10,0.55)',
                }}>{q.source}</div>
              )}
            </div>
          </div>
        </div>

        {/* Stat strip */}
        <div style={{ margin: '14px 18px 0', display: 'flex', gap: 8 }}>
          <StatBox label="STREAK" value={streak} bump="+1" />
          <StatBox label="BEST" value={useStore.getState().bestStreak} bump="" />
          <StatBox label="BRAVO PTS" value={bravoPoints} bump="" />
        </div>

        {/* CTA */}
        <div style={{ margin: '20px 18px 0' }}>
          <button onClick={next} style={{
            width: '100%', padding: '14px 18px', borderRadius: 14,
            background: `linear-gradient(180deg, ${M.hotPink} 0%, ${M.hotPinkDeep} 100%)`,
            border: `2px solid ${M.black}`,
            boxShadow: `0 4px 0 ${M.black}, 0 12px 28px -4px rgba(233, 30, 99, 0.7), inset 0 1px 0 rgba(255,255,255,0.3)`,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
            cursor: 'pointer',
          }}>
            <span style={{
              fontFamily: 'Inter, system-ui', fontSize: 14, fontWeight: 900,
              color: M.cream, letterSpacing: '0.06em', textTransform: 'uppercase',
            }}>{sessionDone ? 'Read the Recap' : 'Keep the Drama Going'}</span>
            <svg width="18" height="14" viewBox="0 0 18 14"><path d="M1 7h14m0 0l-5-5m5 5l-5 5" stroke={M.cream} strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <div style={{
            marginTop: 10, textAlign: 'center',
            fontFamily: 'Inter, system-ui', fontSize: 11, fontWeight: 600,
            color: 'rgba(255,249,240,0.55)',
          }}>
            {actLeft} questions left in Act {currentAct}
          </div>
        </div>
      </div>
    </div>
  );
}

function StatBox({ label, value, bump }: { label: string; value: number | string; bump: string }) {
  return (
    <div style={{
      flex: 1, padding: '8px 10px', borderRadius: 12,
      background: `linear-gradient(180deg, rgba(74,14,46,0.85) 0%, rgba(10,10,10,0.85) 100%)`,
      border: `1px solid ${M.hotPinkDeep}`,
      boxShadow: 'inset 0 0 0 1px rgba(255,215,0,0.2)',
    }}>
      <div style={{
        fontFamily: 'Inter, system-ui', fontSize: 8, fontWeight: 800,
        letterSpacing: '0.18em', color: M.hotPink, textTransform: 'uppercase',
        marginBottom: 2,
      }}>{label}</div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
        <span style={{
          fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
          fontWeight: 900, fontSize: 22, color: M.goldBright,
          textShadow: '0 0 10px rgba(255,215,0,0.5)', lineHeight: 1,
        }}>{value}</span>
        {bump && <span style={{
          fontFamily: 'Inter, system-ui', fontSize: 10, fontWeight: 800,
          color: M.green, letterSpacing: '0.06em',
        }}>{bump}</span>}
      </div>
    </div>
  );
}
