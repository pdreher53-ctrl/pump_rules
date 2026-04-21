import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { getQuestionById } from '../data/questions';

const J = {
  hotPink: '#E91E63',
  hotPinkDeep: '#B0124D',
  goldBright: '#FFD700',
  champagne: '#D4AF37',
  plumDeep: '#4A0E2E',
  plumDeeper: '#2A0519',
  black: '#0A0A0A',
  cream: '#FFF9F0',
  green: '#4ADE80',
  red: '#F43F5E',
  redDeep: '#9F1D3A',
  redDark: '#4A0A18',
};

function JackConfetti() {
  const pieces = useMemo(() => {
    const out: Array<{ x: number; y: number; size: number; rot: number; shape: string; color: string; delay: number; duration: number; }> = [];
    let seed = 41;
    const rand = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
    const shapes = ['brokenBell', 'x', 'sad', 'crack'];
    for (let i = 0; i < 32; i++) {
      out.push({
        x: rand() * 100, y: rand() * 80,
        size: rand() * 10 + 6,
        rot: rand() * 40 - 20,
        shape: shapes[Math.floor(rand() * shapes.length)],
        color: rand() > 0.5 ? J.red : J.redDeep,
        delay: rand() * 2,
        duration: rand() * 2.5 + 2.5,
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
          animation: `dropPiece ${p.duration}s ease-in-out ${p.delay}s infinite`,
          filter: `drop-shadow(0 0 4px ${p.color})`,
        }}>
          {p.shape === 'brokenBell' && (
            <svg viewBox="0 0 10 10" width="100%" height="100%"><path d="M5 0.5C3 0.5 2 1.8 2 3.5v2.5L8 6V3.5C8 1.8 7 0.5 5 0.5z" fill={p.color} stroke={J.black} strokeWidth="0.4"/><path d="M2 6L1.5 7H8.5L8 6z" fill={p.color} stroke={J.black} strokeWidth="0.4"/><path d="M3 7.5l1.5 2M6.5 7.5l-1 2" stroke={J.black} strokeWidth="0.5" strokeLinecap="round"/></svg>
          )}
          {p.shape === 'x' && (
            <svg viewBox="0 0 10 10" width="100%" height="100%"><circle cx="5" cy="5" r="4.5" fill={p.color} stroke={J.black} strokeWidth="0.4"/><path d="M3 3l4 4M7 3l-4 4" stroke={J.cream} strokeWidth="1.2" strokeLinecap="round"/></svg>
          )}
          {p.shape === 'sad' && (
            <svg viewBox="0 0 10 10" width="100%" height="100%"><circle cx="5" cy="5" r="4.5" fill={p.color} stroke={J.black} strokeWidth="0.4"/><circle cx="3.6" cy="4" r="0.5" fill={J.black}/><circle cx="6.4" cy="4" r="0.5" fill={J.black}/><path d="M3.5 7.5 Q5 6 6.5 7.5" stroke={J.black} strokeWidth="0.6" fill="none" strokeLinecap="round"/></svg>
          )}
          {p.shape === 'crack' && (
            <svg viewBox="0 0 10 10" width="100%" height="100%"><path d="M5 0.5L4 3L6 4.5L3.5 7L5.5 9.5" stroke={p.color} strokeWidth="1.4" fill="none" strokeLinecap="round"/></svg>
          )}
        </div>
      ))}
    </div>
  );
}

export default function Jackhole() {
  const navigate = useNavigate();
  const lastQuestionId = useStore(s => s.lastQuestionId);
  const lastPickedId = useStore(s => s.lastPickedId);
  const sessionAnswered = useStore(s => s.sessionAnswered);
  const sessionTarget = useStore(s => s.sessionTarget);
  const q = lastQuestionId ? getQuestionById(lastQuestionId) : undefined;
  const pickedText = q && lastPickedId ? q.choices.find(c => c.id === lastPickedId)?.text ?? '' : '';
  const correctText = q ? q.choices.find(c => c.id === q.correctId)?.text ?? '' : '';
  const sessionDone = sessionAnswered >= sessionTarget;

  return (
    <div style={{
      width: '100%', minHeight: '100%', position: 'relative',
      background: `
        radial-gradient(ellipse 90% 50% at 50% 15%, rgba(244, 63, 94, 0.35) 0%, transparent 55%),
        radial-gradient(ellipse 80% 40% at 50% 50%, rgba(159, 29, 58, 0.3) 0%, transparent 60%),
        linear-gradient(180deg, ${J.redDark} 0%, ${J.plumDeeper} 45%, ${J.black} 100%)
      `,
      paddingBottom: 30,
    }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 340,
        background: `conic-gradient(from 180deg at 50% 0%, transparent 0deg,
          rgba(244,63,94,0.1) 20deg, transparent 40deg,
          rgba(244,63,94,0.14) 60deg, transparent 80deg,
          rgba(244,63,94,0.08) 100deg, transparent 120deg,
          rgba(244,63,94,0.12) 160deg, transparent 180deg,
          rgba(244,63,94,0.1) 220deg, transparent 240deg,
          rgba(244,63,94,0.14) 280deg, transparent 320deg, transparent 360deg)`,
        pointerEvents: 'none', zIndex: 0,
        WebkitMaskImage: 'linear-gradient(180deg, black 0%, transparent 100%)',
        maskImage: 'linear-gradient(180deg, black 0%, transparent 100%)',
      }}/>
      <JackConfetti />

      <div style={{ position: 'relative', zIndex: 2, paddingTop: 14 }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '0 14px' }}>
          <button onClick={() => navigate('/home')} style={{
            width: 34, height: 34, borderRadius: '50%',
            background: 'rgba(10,10,10,0.55)', border: '1px solid rgba(255,224,236,0.2)',
            backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer',
          }}>
            <svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 2l8 8M10 2l-8 8" stroke={J.cream} strokeWidth="1.8" strokeLinecap="round"/></svg>
          </button>
        </div>

        {/* Title */}
        <div style={{ position: 'relative', textAlign: 'center', marginTop: 4 }}>
          <div style={{
            position: 'absolute', inset: 0, display: 'flex',
            alignItems: 'center', justifyContent: 'center', pointerEvents: 'none',
          }}>
            <div style={{
              width: 300, height: 240, borderRadius: '50%',
              background: `radial-gradient(circle, rgba(244,63,94,0.55) 0%, transparent 65%)`,
              filter: 'blur(10px)',
            }}/>
          </div>
          <div style={{
            fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
            fontWeight: 900, fontSize: 70, lineHeight: 0.9, letterSpacing: -2.5,
            background: `linear-gradient(180deg, ${J.red} 0%, ${J.hotPink} 40%, ${J.redDeep} 70%, ${J.red} 100%)`,
            WebkitBackgroundClip: 'text', backgroundClip: 'text',
            WebkitTextStroke: `2.5px ${J.black}`, color: 'transparent',
            textShadow: `0 4px 0 ${J.black}, 0 8px 22px rgba(244, 63, 94, 0.5), 0 0 42px rgba(159, 29, 58, 0.5)`,
            position: 'relative', transform: 'rotate(-4deg)',
          }}>JACKHOLE!</div>
          <div style={{
            marginTop: -2,
            fontFamily: '"Bonheur Royale", cursive', fontSize: 30,
            color: J.cream,
            textShadow: `0 0 10px rgba(244,63,94,0.8), 0 0 22px rgba(244,63,94,0.4), 0 2px 4px rgba(0,0,0,0.5)`,
            transform: 'rotate(1deg)',
          }}>oh, honey...</div>
        </div>

        {/* Andy + Katie */}
        <div style={{ position: 'relative', marginTop: 8, display: 'flex', justifyContent: 'center' }}>
          <div style={{
            position: 'absolute', inset: '-20px -20% 0',
            background: `radial-gradient(ellipse at 50% 40%, rgba(244,63,94,0.28) 0%, transparent 60%)`,
            pointerEvents: 'none',
          }}/>
          <img src="/assets/Katie_base.png" alt="Katie disappointed" style={{
            height: 140, width: 'auto',
            marginRight: -18, alignSelf: 'flex-end',
            filter: 'drop-shadow(0 6px 14px rgba(0,0,0,0.6)) grayscale(0.3) brightness(0.75)',
            transform: 'translateY(20px) rotate(-4deg)',
            position: 'relative', zIndex: 1,
          }}/>
          <img src="/assets/ANDY_jackhole.png" alt="Andy holding Jackhole sign" style={{
            height: 220, width: 'auto',
            filter: 'drop-shadow(0 10px 22px rgba(0,0,0,0.7))',
            position: 'relative', zIndex: 2,
            animation: 'jackSway 2.2s ease-in-out infinite',
          }}/>
        </div>

        {/* Teaching card */}
        <div style={{ margin: '10px 18px 0' }}>
          <div style={{
            padding: '14px 16px 16px', borderRadius: 16, background: J.cream,
            border: `2px solid ${J.black}`,
            boxShadow: `0 6px 0 ${J.black}, 0 12px 28px rgba(0,0,0,0.5)`,
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute', top: -12, right: 14,
              padding: '3px 10px', background: J.red,
              border: `1.5px solid ${J.black}`, borderRadius: 999,
              boxShadow: `0 2px 0 ${J.black}`,
              fontFamily: 'Inter, system-ui', fontSize: 9, fontWeight: 900,
              letterSpacing: '0.16em', color: J.cream,
              display: 'flex', alignItems: 'center', gap: 4,
            }}>
              <svg width="10" height="10" viewBox="0 0 10 10"><path d="M2 2l6 6M8 2l-6 6" stroke={J.cream} strokeWidth="2" strokeLinecap="round"/></svg>
              MISSED IT
            </div>

            <div style={{
              fontFamily: 'Inter, system-ui', fontSize: 9, fontWeight: 800,
              letterSpacing: '0.2em', color: J.redDeep, textTransform: 'uppercase',
            }}>YOU SAID</div>
            <div style={{
              marginTop: 4,
              fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
              fontWeight: 700, fontSize: 13, lineHeight: 1.3, color: 'rgba(10,10,10,0.5)',
              letterSpacing: -0.2,
              textDecoration: 'line-through', textDecorationColor: J.red,
              textDecorationThickness: 2,
            }}>"{pickedText}"</div>

            <div style={{
              height: 1, background: `linear-gradient(90deg, transparent 0%, ${J.black} 20%, ${J.black} 80%, transparent 100%)`,
              opacity: 0.2, margin: '12px 0',
            }}/>

            <div style={{
              fontFamily: 'Inter, system-ui', fontSize: 9, fontWeight: 800,
              letterSpacing: '0.2em', color: J.redDeep, textTransform: 'uppercase',
              display: 'flex', alignItems: 'center', gap: 6,
            }}>
              <span style={{
                width: 14, height: 14, borderRadius: '50%',
                background: J.green, border: `1.2px solid ${J.black}`,
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="8" height="8" viewBox="0 0 8 8"><path d="M1 4l2 2L7 1.5" stroke={J.black} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              WHAT YOU NEEDED
            </div>
            <div style={{
              marginTop: 4,
              fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
              fontWeight: 700, fontSize: 14, lineHeight: 1.3, color: J.black,
              letterSpacing: -0.2,
            }}>"{correctText}"</div>

            <div style={{
              height: 1, background: `linear-gradient(90deg, transparent 0%, ${J.black} 20%, ${J.black} 80%, transparent 100%)`,
              opacity: 0.2, margin: '12px 0',
            }}/>

            <div style={{
              fontFamily: 'Inter, system-ui', fontSize: 9, fontWeight: 800,
              letterSpacing: '0.2em', color: J.redDeep, textTransform: 'uppercase',
            }}>WHY IT MATTERS</div>
            <div style={{
              marginTop: 4,
              fontFamily: 'Inter, system-ui', fontSize: 12.5, lineHeight: 1.45,
              color: J.black, fontWeight: 500,
            }}>{q?.explanation}</div>

            {q?.lisaBurn && (
              <div style={{
                marginTop: 10, padding: '8px 10px', borderRadius: 8,
                background: 'rgba(244,63,94,0.08)',
                border: `1px dashed ${J.redDeep}`,
              }}>
                <div style={{
                  fontFamily: 'Inter, system-ui', fontSize: 8, fontWeight: 900,
                  letterSpacing: '0.2em', color: J.redDeep, textTransform: 'uppercase',
                  marginBottom: 4,
                }}>💋 LISA SAYS</div>
                <div style={{
                  fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
                  fontWeight: 700, fontSize: 12, lineHeight: 1.4,
                  color: 'rgba(10,10,10,0.85)',
                }}>"{q.lisaBurn}"</div>
              </div>
            )}

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
                letterSpacing: '0.1em', color: J.black, textTransform: 'uppercase',
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

        {/* CTAs */}
        <div style={{ margin: '14px 18px 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <button onClick={() => navigate(sessionDone ? '/recap' : '/play')} style={{
            width: '100%', padding: '14px 18px', borderRadius: 14,
            background: `linear-gradient(180deg, ${J.red} 0%, ${J.redDeep} 100%)`,
            border: `2px solid ${J.black}`,
            boxShadow: `0 4px 0 ${J.black}, 0 12px 28px -4px rgba(244, 63, 94, 0.6), inset 0 1px 0 rgba(255,255,255,0.25)`,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
            cursor: 'pointer',
          }}>
            <svg width="16" height="16" viewBox="0 0 16 16"><path d="M3 8a5 5 0 015-5 5 5 0 014.5 2.8M13 3v3h-3" stroke={J.cream} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
            <span style={{
              fontFamily: 'Inter, system-ui', fontSize: 14, fontWeight: 900,
              color: J.cream, letterSpacing: '0.06em', textTransform: 'uppercase',
            }}>{sessionDone ? 'Read the Recap' : 'Give Me Another Shot'}</span>
          </button>
          <button onClick={() => navigate('/after-show')} style={{
            width: '100%', padding: '12px 18px', borderRadius: 12,
            background: 'rgba(255,255,255,0.06)',
            border: `1.5px solid rgba(255,249,240,0.3)`,
            backdropFilter: 'blur(8px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            cursor: 'pointer',
          }}>
            <span style={{
              fontFamily: 'Inter, system-ui', fontSize: 12, fontWeight: 800,
              color: J.cream, letterSpacing: '0.08em', textTransform: 'uppercase',
            }}>Text Lisa about it</span>
          </button>
        </div>
      </div>
    </div>
  );
}
