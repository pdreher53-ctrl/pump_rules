import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { questionsForAct } from '../data/questions';

const P = {
  hotPink: '#E91E63',
  hotPinkDeep: '#B0124D',
  champagne: '#D4AF37',
  goldBright: '#FFD700',
  plumDeep: '#4A0E2E',
  plumDeeper: '#2A0519',
  black: '#0A0A0A',
  cream: '#FFF9F0',
};

const ACT_TITLES: Record<number, { title: string; portrait: string; mins: string }> = {
  1: { title: 'Welcome to SUR', portrait: '/assets/Lisa_base.webp', mins: '8 MIN' },
  2: { title: 'The Friend Group', portrait: '/assets/Stassi_base.png', mins: '14 MIN' },
  3: { title: "It's Not About the Pasta", portrait: '/assets/Arinana_base.png', mins: '19 MIN' },
};

function StarField() {
  const stars = useMemo(() => {
    const out: Array<{ x: number; y: number; size: number; opacity: number; delay: number; duration: number; tint: string; }> = [];
    let seed = 7;
    const rand = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
    for (let i = 0; i < 60; i++) {
      out.push({
        x: rand() * 100, y: rand() * 100,
        size: rand() * 1.6 + 0.6,
        opacity: rand() * 0.6 + 0.15,
        delay: rand() * 4, duration: rand() * 3 + 2,
        tint: rand() > 0.7 ? '#FFD700' : '#FFE0EC',
      });
    }
    return out;
  }, []);
  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
      {stars.map((s, i) => (
        <div key={i} style={{
          position: 'absolute',
          left: `${s.x}%`, top: `${s.y}%`,
          width: s.size, height: s.size, borderRadius: '50%',
          background: s.tint, opacity: s.opacity,
          boxShadow: `0 0 ${s.size * 2}px ${s.tint}`,
          animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
        }} />
      ))}
      <style>{`@keyframes twinkle { 0%,100% { opacity: 0.2; } 50% { opacity: 1; } }`}</style>
    </div>
  );
}

export default function Home() {
  const navigate = useNavigate();
  const name = useStore(s => s.name) || 'Elizabeth';
  const streak = useStore(s => s.streak);
  const currentAct = useStore(s => s.currentAct);
  const answers = useStore(s => s.answers);

  const continueRow = [1, 2, 3].map(act => {
    const total = questionsForAct(act).length;
    const answered = answers.filter(a => questionsForAct(act).some(q => q.id === a.questionId)).length;
    const progress = total ? Math.round((answered / total) * 100) : 0;
    const meta = ACT_TITLES[act];
    return { actNum: act, title: meta.title, portrait: meta.portrait, progress, minsLeft: meta.mins };
  });

  return (
    <div style={{
      width: '100%', minHeight: '100%', position: 'relative',
      background: `
        radial-gradient(ellipse 80% 45% at 50% 0%, rgba(233, 30, 99, 0.28) 0%, transparent 65%),
        radial-gradient(ellipse 60% 35% at 90% 20%, rgba(212, 175, 55, 0.15) 0%, transparent 60%),
        linear-gradient(180deg, ${P.plumDeep} 0%, ${P.plumDeeper} 45%, ${P.black} 100%)
      `,
      paddingBottom: 60,
    }}>
      <StarField />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ height: 14 }} />

        {/* Top bar */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '10px 18px 0',
        }}>
          <div>
            <div style={{
              fontFamily: 'Inter, system-ui', fontSize: 10, fontWeight: 700,
              letterSpacing: '0.18em', color: 'rgba(255,224,236,0.55)',
              textTransform: 'uppercase',
            }}>Hey, {name}</div>
            <div style={{
              fontFamily: 'Inter, system-ui', fontSize: 14, fontWeight: 600,
              color: P.cream, marginTop: 2,
            }}>Grab your wine. 🍷</div>
          </div>
        </div>

        {/* Neon logo */}
        <div style={{ marginTop: 14, textAlign: 'center', lineHeight: 1, position: 'relative' }}>
          <div style={{
            fontFamily: '"Bonheur Royale", "Playfair Display", cursive',
            fontSize: 54, fontWeight: 400, color: '#FFE6F0',
            letterSpacing: -1, transform: 'rotate(-3deg)',
            textShadow: `
              0 0 2px #fff,
              0 0 8px ${P.hotPink},
              0 0 16px ${P.hotPink},
              0 0 28px ${P.hotPinkDeep},
              0 0 42px ${P.hotPinkDeep}
            `,
            marginBottom: -4,
          }}>Pump Rules</div>
          <div style={{
            fontFamily: 'Inter, system-ui',
            fontSize: 10, fontWeight: 800,
            letterSpacing: '0.42em', color: P.goldBright,
            paddingLeft: '0.42em',
            textShadow: `0 0 6px rgba(255, 215, 0, 0.6), 0 0 12px rgba(212, 175, 55, 0.4)`,
          }}>REAL ESTATE REUNION</div>
        </div>

        {/* Hero */}
        <div style={{
          margin: '18px 18px 0',
          borderRadius: 22, position: 'relative', overflow: 'hidden',
          border: `2px solid ${P.black}`,
          boxShadow: `
            0 0 0 1px rgba(255, 215, 0, 0.35) inset,
            0 18px 40px -10px rgba(233, 30, 99, 0.45),
            0 6px 18px rgba(0,0,0,0.4)
          `,
          aspectRatio: '1 / 1.18',
          background: `radial-gradient(ellipse at 62% 45%, #5A1638 0%, ${P.plumDeeper} 60%, ${P.black} 100%)`,
        }}>
          <img src="/assets/Lisa_base.webp" alt="Lisa Vanderpump" style={{
            position: 'absolute', right: -30, bottom: 0, height: '108%', width: 'auto',
            objectFit: 'contain', filter: 'drop-shadow(-8px 12px 20px rgba(0,0,0,0.55))',
          }}/>
          <div style={{
            position: 'absolute', left: 0, top: 0, bottom: 0,
            width: '58%', padding: '18px 0 18px 18px',
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          }}>
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '5px 10px 5px 8px',
                background: P.goldBright, borderRadius: 999,
                border: `1.5px solid ${P.black}`, boxShadow: '0 2px 0 rgba(0,0,0,0.3)',
              }}>
                <span style={{
                  width: 6, height: 6, borderRadius: '50%',
                  background: '#d60', boxShadow: '0 0 6px rgba(255,60,0,0.8)',
                  animation: 'pulseDot 1.4s ease-in-out infinite',
                }}/>
                <span style={{
                  fontFamily: 'Inter, system-ui', fontSize: 9, fontWeight: 800,
                  color: P.black, letterSpacing: '0.12em',
                }}>TONIGHT'S EPISODE</span>
              </div>
              <div style={{ marginTop: 14 }}>
                <div style={{
                  fontFamily: 'Inter, system-ui', fontSize: 10, fontWeight: 700,
                  letterSpacing: '0.2em', color: P.goldBright, textTransform: 'uppercase',
                }}>Act {currentAct} · Episode 1</div>
                <div style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontStyle: 'italic', fontWeight: 900,
                  fontSize: 30, lineHeight: 1.02, color: P.cream,
                  marginTop: 6, letterSpacing: -0.5,
                  textShadow: '0 2px 8px rgba(0,0,0,0.6)',
                }}>{ACT_TITLES[currentAct]?.title ?? "Tonight's Scene"}</div>
              </div>
            </div>
            <div>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12,
                fontFamily: 'Inter, system-ui', fontSize: 11,
                color: 'rgba(255,249,240,0.75)',
              }}>
                <span style={{
                  padding: '2px 6px', border: '1px solid rgba(255,249,240,0.4)',
                  borderRadius: 3, fontSize: 9, fontWeight: 700, letterSpacing: '0.06em',
                }}>TV-14</span>
                <span>•</span>
                <span>22 MIN</span>
                <span>•</span>
                <span style={{ color: P.goldBright, fontWeight: 600 }}>Act {currentAct}</span>
              </div>
              <button onClick={() => navigate('/play')} style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '11px 18px 11px 14px',
                background: `linear-gradient(180deg, ${P.hotPink} 0%, ${P.hotPinkDeep} 100%)`,
                color: P.cream, border: `1.5px solid ${P.black}`, borderRadius: 999,
                fontFamily: 'Inter, system-ui', fontSize: 13, fontWeight: 800,
                letterSpacing: '0.04em',
                boxShadow: `
                  0 3px 0 ${P.black},
                  0 8px 22px -4px rgba(233, 30, 99, 0.7),
                  inset 0 1px 0 rgba(255,255,255,0.3)
                `,
                cursor: 'pointer',
              }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 1.5v11l9.5-5.5L3 1.5z" fill={P.cream} stroke={P.black} strokeWidth="1.2" strokeLinejoin="round"/>
                </svg>
                ROLL THE TAPE
              </button>
            </div>
          </div>
          <div style={{
            position: 'absolute', top: 0, right: 0, width: 60, height: 60,
            background: `linear-gradient(225deg, ${P.goldBright} 0%, transparent 55%)`,
            opacity: 0.35, pointerEvents: 'none',
          }}/>
        </div>

        {/* Continue Watching */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          padding: '22px 18px 10px',
        }}>
          <div style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontStyle: 'italic', fontWeight: 900,
            fontSize: 20, color: P.cream, letterSpacing: -0.3,
          }}>Continue Watching</div>
          <button onClick={() => navigate('/act-map')} style={{
            background: 'transparent', border: 'none', cursor: 'pointer',
            fontFamily: 'Inter, system-ui', fontSize: 11, fontWeight: 700,
            color: P.goldBright, letterSpacing: '0.08em', textTransform: 'uppercase',
          }}>See All</button>
        </div>
        <div style={{
          display: 'flex', gap: 12, padding: '0 18px',
          overflowX: 'auto', scrollbarWidth: 'none',
        }}>
          {continueRow.map(c => (
            <div key={c.actNum} onClick={() => navigate('/act-map')} style={{
              flexShrink: 0, width: 150, borderRadius: 14,
              border: `2px solid ${P.black}`, background: P.black,
              overflow: 'hidden',
              boxShadow: '0 6px 16px rgba(0,0,0,0.4)',
              cursor: 'pointer',
            }}>
              <div style={{
                height: 170, position: 'relative', overflow: 'hidden',
                background: `radial-gradient(ellipse at 50% 50%, #6B1A3C 0%, ${P.plumDeeper} 70%, ${P.black} 100%)`,
              }}>
                <img src={c.portrait} alt="" style={{
                  position: 'absolute', inset: 0, width: '100%', height: '100%',
                  objectFit: 'cover', objectPosition: 'center 10%',
                }}/>
                <div style={{
                  position: 'absolute', top: 8, left: 8,
                  width: 28, height: 28, borderRadius: '50%',
                  background: P.black, border: `1.5px solid ${P.goldBright}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
                  fontWeight: 900, fontSize: 13, color: P.goldBright,
                }}>{c.actNum}</div>
                <div style={{
                  position: 'absolute', left: 0, right: 0, bottom: 0, height: '40%',
                  background: `linear-gradient(180deg, transparent 0%, rgba(10,10,10,0.85) 100%)`,
                }}/>
                <div style={{
                  position: 'absolute', right: 6, bottom: 38,
                  padding: '3px 7px', borderRadius: 6,
                  background: 'rgba(10,10,10,0.8)',
                  border: '0.5px solid rgba(255,249,240,0.2)',
                  fontFamily: 'Inter, system-ui', fontSize: 9, fontWeight: 700,
                  color: P.cream, letterSpacing: '0.04em',
                }}>{c.minsLeft} LEFT</div>
              </div>
              <div style={{ padding: '10px 10px 12px' }}>
                <div style={{
                  fontFamily: 'Inter, system-ui', fontSize: 9, fontWeight: 700,
                  letterSpacing: '0.14em', color: P.goldBright, textTransform: 'uppercase',
                }}>Act {c.actNum}</div>
                <div style={{
                  fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
                  fontWeight: 700, fontSize: 14, color: P.cream,
                  marginTop: 2, lineHeight: 1.15, height: 32, overflow: 'hidden',
                }}>{c.title}</div>
                <div style={{
                  marginTop: 10, height: 3, borderRadius: 2,
                  background: 'rgba(255,249,240,0.14)', overflow: 'hidden',
                }}>
                  <div style={{
                    width: `${c.progress}%`, height: '100%',
                    background: `linear-gradient(90deg, ${P.champagne} 0%, ${P.goldBright} 100%)`,
                    boxShadow: `0 0 8px ${P.goldBright}`,
                  }}/>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hosted by the dogs */}
        <div style={{
          margin: '22px 12px 0',
          padding: '12px 12px 14px',
          borderRadius: 20,
          background: `linear-gradient(180deg, rgba(74, 14, 46, 0.9) 0%, rgba(10, 10, 10, 0.95) 100%)`,
          border: `1.5px solid ${P.hotPinkDeep}`,
          boxShadow: `0 0 0 1px rgba(212, 175, 55, 0.25) inset, 0 -4px 20px rgba(233, 30, 99, 0.25)`,
          position: 'relative',
        }}>
          <div style={{
            position: 'absolute', top: -8, left: '50%', transform: 'translateX(-50%)',
            background: P.black, padding: '2px 10px', borderRadius: 999,
            border: `1px solid ${P.goldBright}`,
            fontFamily: 'Inter, system-ui', fontSize: 8, fontWeight: 800,
            letterSpacing: '0.2em', color: P.goldBright,
          }}>HOSTED BY THE DOGS</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 54, height: 54, borderRadius: '50%', overflow: 'hidden',
              border: `2px solid ${P.goldBright}`,
              boxShadow: `0 0 12px rgba(255,215,0,0.45), 0 3px 8px rgba(0,0,0,0.5)`,
              background: P.plumDeeper,
            }}>
              <img src="/assets/DOG1_base.png" alt="Dog 1" style={{
                width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%',
              }}/>
            </div>
            <div style={{ flex: 1, textAlign: 'center' }}>
              <div style={{
                fontFamily: 'Inter, system-ui', fontSize: 8, fontWeight: 800,
                letterSpacing: '0.22em', color: P.hotPink,
              }}>CURRENT STREAK</div>
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                marginTop: 2,
              }}>
                <span style={{ fontSize: 22, lineHeight: 1 }}>🔥</span>
                <span style={{
                  fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
                  fontWeight: 900, fontSize: 32, color: P.goldBright,
                  textShadow: `0 0 14px rgba(255,215,0,0.7)`, lineHeight: 1,
                }}>{streak}</span>
              </div>
              <div style={{
                fontFamily: 'Inter, system-ui', fontSize: 10, fontWeight: 600,
                color: 'rgba(255,249,240,0.6)', marginTop: 2,
              }}>in a row</div>
            </div>
            <div style={{
              width: 54, height: 54, borderRadius: '50%', overflow: 'hidden',
              border: `2px solid ${P.goldBright}`,
              boxShadow: `0 0 12px rgba(255,215,0,0.45), 0 3px 8px rgba(0,0,0,0.5)`,
              background: P.plumDeeper,
            }}>
              <img src="/assets/Dog2_base.png" alt="Dog 2" style={{
                width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%',
              }}/>
            </div>
          </div>
        </div>

        <div style={{ height: 30 }} />
      </div>
      <style>{`
        @keyframes pulseDot { 0%,100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.5; transform: scale(0.85); } }
      `}</style>
    </div>
  );
}
