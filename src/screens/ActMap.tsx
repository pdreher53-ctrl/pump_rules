import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { questionsForAct } from '../data/questions';

const AM = {
  hotPink: '#E91E63',
  hotPinkDeep: '#B0124D',
  goldBright: '#FFD700',
  plumDeep: '#4A0E2E',
  plumDeeper: '#2A0519',
  black: '#0A0A0A',
  cream: '#FFF9F0',
};

const ACTS = [
  { n: 1, title: 'Welcome to SUR',           domain: 'License Law',     mins: 22, char: 'Lisa',     portrait: '/assets/Lisa_base.webp' },
  { n: 2, title: 'The Friend Group',         domain: 'Agency',          mins: 28, char: 'Stassi',   portrait: '/assets/Stassi_base.png' },
  { n: 3, title: "It's Not About the Pasta", domain: 'Contracts',       mins: 30, char: 'Ariana',   portrait: '/assets/Arinana_base.png' },
  { n: 4, title: 'Girls Night',              domain: 'Fair Housing',    mins: 20, char: 'Katie',    portrait: '/assets/Katie_base.png' },
  { n: 5, title: 'The Affair',               domain: 'Disclosure',      mins: 26, char: 'Raquel',   portrait: '/assets/Raquel_base.png' },
  { n: 6, title: "Sandoval's Band",          domain: 'Financing',       mins: 28, char: 'Sandoval', portrait: '/assets/Sandavol_base.png' },
  { n: 7, title: 'Jax Lies',                 domain: 'Ethics',          mins: 22, char: 'Jax',      portrait: '/assets/Jax_base.png' },
  { n: 8, title: 'Scandoval',                domain: 'Closing',         mins: 32, char: 'Schwartz', portrait: '/assets/Schwartz_base.png' },
  { n: 9, title: 'Finale Setup',             domain: 'GA-Specific Law', mins: 26, char: 'James',    portrait: '/assets/James_base.png' },
];

function StarField() {
  const stars = useMemo(() => {
    const out: Array<any> = []; let seed = 11;
    const rand = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
    for (let i = 0; i < 55; i++) {
      out.push({
        x: rand() * 100, y: rand() * 100,
        size: rand() * 1.4 + 0.5,
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
          position: 'absolute', left: `${s.x}%`, top: `${s.y}%`,
          width: s.size, height: s.size, borderRadius: '50%',
          background: s.tint, opacity: s.opacity,
          boxShadow: `0 0 ${s.size * 2}px ${s.tint}`,
          animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
        }}/>
      ))}
    </div>
  );
}

function diffDays(iso?: string | null) {
  if (!iso) return null;
  const d = new Date(iso + 'T00:00:00');
  const today = new Date(); today.setHours(0,0,0,0);
  return Math.round((d.getTime() - today.getTime()) / 86_400_000);
}

export default function ActMap() {
  const navigate = useNavigate();
  const currentAct = useStore(s => s.currentAct);
  const answers = useStore(s => s.answers);
  const examDate = useStore(s => s.examDate);
  const days = diffDays(examDate);

  const totalAnswered = answers.length;
  const totalSeed = ACTS.reduce((sum, a) => sum + questionsForAct(a.n).length, 0);
  const examReadiness = totalSeed ? Math.round((totalAnswered / totalSeed) * 100) : 0;

  return (
    <div style={{
      width: '100%', minHeight: '100%', position: 'relative',
      background: `
        radial-gradient(ellipse 90% 30% at 50% 0%, rgba(233, 30, 99, 0.32) 0%, transparent 60%),
        radial-gradient(ellipse 60% 25% at 90% 60%, rgba(212, 175, 55, 0.12) 0%, transparent 60%),
        linear-gradient(180deg, ${AM.plumDeep} 0%, ${AM.plumDeeper} 35%, ${AM.black} 100%)
      `,
      paddingBottom: 50,
    }}>
      <StarField />
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 160,
        pointerEvents: 'none', zIndex: 0, overflow: 'hidden',
      }}>
        <svg viewBox="0 0 375 160" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
          <defs>
            <linearGradient id="curtain" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#7A1742"/>
              <stop offset="0.5" stopColor="#4A0E2E"/>
              <stop offset="1" stopColor="#4A0E2E" stopOpacity="0"/>
            </linearGradient>
          </defs>
          <path d="M0,0 L375,0 L375,100 Q350,140 325,110 Q300,150 275,115 Q250,155 225,120 Q200,160 175,115 Q150,155 125,118 Q100,150 75,112 Q50,140 25,108 Q12,125 0,100 Z" fill="url(#curtain)" opacity="0.55"/>
        </svg>
      </div>

      <div style={{ position: 'relative', zIndex: 1, paddingTop: 14 }}>
        {/* Header */}
        <div style={{ padding: '0 18px' }}>
          <div style={{ textAlign: 'center', marginBottom: 4 }}>
            <div style={{
              fontFamily: 'Inter, system-ui', fontSize: 10, fontWeight: 800,
              letterSpacing: '0.3em', color: AM.goldBright, textTransform: 'uppercase',
              textShadow: '0 0 8px rgba(255,215,0,0.4)',
            }}>The Season Map</div>
            <div style={{
              fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
              fontWeight: 900, fontSize: 36, color: AM.cream,
              letterSpacing: -1, lineHeight: 1, marginTop: 6,
              textShadow: '0 2px 12px rgba(233,30,99,0.5)',
            }}>Your Real Estate<br/>Redemption Arc</div>
          </div>

          <div style={{
            marginTop: 18, padding: '12px 14px', borderRadius: 14,
            background: `linear-gradient(180deg, rgba(233,30,99,0.18) 0%, rgba(74,14,46,0.5) 100%)`,
            border: `1.5px solid ${AM.hotPinkDeep}`,
            boxShadow: `inset 0 0 0 1px rgba(255,215,0,0.2)`,
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
              <div style={{
                fontFamily: 'Inter, system-ui', fontSize: 10, fontWeight: 800,
                letterSpacing: '0.16em', color: AM.cream, textTransform: 'uppercase',
              }}>Exam Readiness</div>
              <div style={{
                fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
                fontWeight: 900, fontSize: 18, color: AM.goldBright,
                textShadow: '0 0 8px rgba(255,215,0,0.5)',
              }}>{examReadiness}%</div>
            </div>
            <div style={{
              height: 6, borderRadius: 3, overflow: 'hidden',
              background: 'rgba(10,10,10,0.5)',
              border: '0.5px solid rgba(255,215,0,0.25)',
            }}>
              <div style={{
                width: `${examReadiness}%`, height: '100%',
                background: `linear-gradient(90deg, ${AM.hotPink} 0%, ${AM.goldBright} 100%)`,
                boxShadow: `0 0 10px ${AM.goldBright}`,
              }}/>
            </div>
            <div style={{
              marginTop: 6,
              fontFamily: 'Inter, system-ui', fontSize: 11, fontWeight: 500,
              color: 'rgba(255,249,240,0.65)',
            }}>
              {days !== null ? <>Exam in <span style={{ color: AM.hotPink, fontWeight: 800 }}>{days} days</span> · keep the drama going</> : 'Set an exam date in Casting Call.'}
            </div>
          </div>
        </div>

        {/* Acts list */}
        <div style={{
          padding: '24px 16px 0',
          display: 'flex', flexDirection: 'column', gap: 14,
          position: 'relative',
        }}>
          {ACTS.map((act, i) => {
            const seedQs = questionsForAct(act.n);
            const answered = answers.filter(a => seedQs.some(q => q.id === a.questionId)).length;
            const status: 'complete' | 'playing' | 'locked' =
              act.n < currentAct ? 'complete'
              : act.n === currentAct ? 'playing'
              : 'locked';
            const isLocked = status === 'locked';
            const isPlaying = status === 'playing';
            const isComplete = status === 'complete';
            const portraitLeft = i % 2 === 0;
            const correctInAct = answers.filter(a => a.correct && seedQs.some(q => q.id === a.questionId)).length;
            const stars = isComplete ? Math.min(3, Math.max(1, Math.round((correctInAct / Math.max(seedQs.length, 1)) * 3))) : 0;

            return (
              <button key={act.n} onClick={() => !isLocked && navigate('/play')} style={{
                all: 'unset', cursor: isLocked ? 'default' : 'pointer',
                display: 'flex',
                flexDirection: portraitLeft ? 'row' : 'row-reverse',
                alignItems: 'stretch', gap: 0,
                borderRadius: 16, border: `2px solid ${AM.black}`,
                boxShadow: isPlaying
                  ? `0 0 0 1px ${AM.goldBright} inset, 0 10px 26px -6px rgba(255,215,0,0.5), 0 0 40px -4px rgba(255,215,0,0.35)`
                  : `0 6px 14px rgba(0,0,0,0.35)`,
                background: AM.black, overflow: 'hidden', position: 'relative',
                opacity: isLocked ? 0.78 : 1,
              }}>
                <div style={{
                  width: 108, flexShrink: 0,
                  position: 'relative', overflow: 'hidden',
                  background: `radial-gradient(ellipse at 50% 40%, #5A1638 0%, ${AM.plumDeeper} 70%, ${AM.black} 100%)`,
                }}>
                  <img src={act.portrait} alt={act.char} style={{
                    position: 'absolute', inset: 0, width: '100%', height: '100%',
                    objectFit: 'cover', objectPosition: 'center 12%',
                    filter: isLocked ? 'grayscale(0.9) brightness(0.55)' : 'none',
                  }}/>
                  <div style={{
                    position: 'absolute', top: 8,
                    [portraitLeft ? 'left' : 'right']: 8,
                    width: 30, height: 30, borderRadius: '50%',
                    background: isPlaying ? AM.goldBright : AM.black,
                    border: `1.5px solid ${isPlaying ? AM.black : AM.goldBright}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
                    fontWeight: 900, fontSize: 14,
                    color: isPlaying ? AM.black : AM.goldBright,
                    boxShadow: isPlaying ? `0 0 10px ${AM.goldBright}` : 'none',
                    zIndex: 2,
                  }}>{act.n}</div>
                  <div style={{
                    position: 'absolute', left: 0, right: 0, bottom: 0,
                    padding: '4px 8px 6px',
                    background: `linear-gradient(180deg, transparent 0%, rgba(10,10,10,0.95) 80%)`,
                    fontFamily: 'Inter, system-ui', fontSize: 9, fontWeight: 800,
                    letterSpacing: '0.14em', color: AM.cream, textTransform: 'uppercase',
                    textAlign: portraitLeft ? 'left' : 'right',
                  }}>{act.char}</div>
                </div>
                <div style={{
                  flex: 1, minWidth: 0,
                  padding: '11px 12px 12px',
                  display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                  background: isPlaying
                    ? `linear-gradient(${portraitLeft ? '270deg' : '90deg'}, ${AM.plumDeep} 0%, #1A0A14 100%)`
                    : `linear-gradient(${portraitLeft ? '270deg' : '90deg'}, rgba(42,5,25,0.8) 0%, ${AM.black} 100%)`,
                }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                      <div style={{
                        fontFamily: 'Inter, system-ui', fontSize: 9, fontWeight: 800,
                        letterSpacing: '0.18em',
                        color: isLocked ? 'rgba(255,249,240,0.4)' : AM.goldBright,
                        textTransform: 'uppercase',
                      }}>ACT {act.n}</div>
                      <StatusPill status={status} />
                    </div>
                    <div style={{
                      fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
                      fontWeight: 900, fontSize: 17, lineHeight: 1.1,
                      color: isLocked ? 'rgba(255,249,240,0.65)' : AM.cream,
                      letterSpacing: -0.3, marginTop: 2,
                    }}>{act.title}</div>
                    <div style={{
                      marginTop: 6,
                      display: 'inline-flex', alignItems: 'center', gap: 5,
                      padding: '2px 7px 3px', borderRadius: 4,
                      background: 'rgba(255,215,0,0.1)',
                      border: '1px solid rgba(255,215,0,0.3)',
                      fontFamily: 'Inter, system-ui', fontSize: 9, fontWeight: 700,
                      color: AM.goldBright,
                      letterSpacing: '0.06em', textTransform: 'uppercase',
                    }}>📜 {act.domain}</div>
                  </div>
                  <div style={{
                    marginTop: 10,
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  }}>
                    <div style={{
                      fontFamily: 'Inter, system-ui', fontSize: 10, fontWeight: 500,
                      color: 'rgba(255,249,240,0.55)',
                    }}>{seedQs.length} Qs · {answered} answered · {act.mins} min</div>
                    {isComplete && <Stars count={stars}/>}
                    {isPlaying && (
                      <div style={{
                        fontFamily: 'Inter, system-ui', fontSize: 10, fontWeight: 800,
                        color: AM.hotPink, letterSpacing: '0.08em',
                        textShadow: '0 0 6px rgba(233,30,99,0.6)',
                      }}>▶ RESUME</div>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div style={{
          marginTop: 28, textAlign: 'center',
          fontFamily: '"Bonheur Royale", cursive', fontSize: 22,
          color: AM.goldBright, opacity: 0.6,
          textShadow: '0 0 12px rgba(255,215,0,0.4)',
        }}>End of Season One</div>
      </div>
    </div>
  );
}

function StatusPill({ status }: { status: 'complete' | 'playing' | 'locked' }) {
  if (status === 'complete') return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 4,
      padding: '3px 7px', borderRadius: 999,
      background: AM.goldBright, border: `1px solid ${AM.black}`,
      fontFamily: 'Inter, system-ui', fontSize: 8, fontWeight: 800,
      color: AM.black, letterSpacing: '0.1em',
    }}>
      <svg width="9" height="9" viewBox="0 0 9 9"><path d="M1 4.5L3.5 7 8 2" stroke={AM.black} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
      WATCHED
    </div>
  );
  if (status === 'playing') return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 4,
      padding: '3px 7px', borderRadius: 999,
      background: AM.hotPink, border: `1px solid ${AM.black}`,
      fontFamily: 'Inter, system-ui', fontSize: 8, fontWeight: 800,
      color: AM.cream, letterSpacing: '0.1em',
    }}>
      <span style={{
        width: 5, height: 5, borderRadius: '50%', background: AM.cream,
        animation: 'pulseDot 1.4s ease-in-out infinite',
      }}/>
      NOW PLAYING
    </div>
  );
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 4,
      padding: '3px 7px', borderRadius: 999,
      background: 'rgba(255,249,240,0.08)',
      border: '1px solid rgba(255,249,240,0.2)',
      fontFamily: 'Inter, system-ui', fontSize: 8, fontWeight: 800,
      color: 'rgba(255,249,240,0.55)', letterSpacing: '0.1em',
    }}>LOCKED</div>
  );
}

function Stars({ count, max = 3, size = 10 }: { count: number; max?: number; size?: number }) {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {Array.from({ length: max }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 10 10">
          <path d="M5 0.5l1.4 3 3.1.4-2.3 2.2.6 3.1L5 7.7 2.2 9.2l.6-3.1L.5 3.9l3.1-.4L5 .5z"
            fill={i < count ? AM.goldBright : 'rgba(255,249,240,0.15)'}
            stroke={i < count ? AM.black : 'transparent'} strokeWidth="0.5"
          />
        </svg>
      ))}
    </div>
  );
}
