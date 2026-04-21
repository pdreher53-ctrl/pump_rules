import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import type { Archetype } from '../types';

const CC = {
  hotPink: '#E91E63',
  hotPinkDeep: '#B0124D',
  goldBright: '#FFD700',
  champagne: '#D4AF37',
  goldDeep: '#A8820E',
  plumDeep: '#4A0E2E',
  plumDeeper: '#2A0519',
  black: '#0A0A0A',
  cream: '#FFF9F0',
  paper: '#F5E8D0',
  paperShadow: '#C8B48A',
};

function ClapperHeader() {
  return (
    <div style={{ position: 'relative', margin: '14px 0 0' }}>
      <div style={{ height: 28, display: 'flex', borderBottom: `3px solid ${CC.black}` }}>
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} style={{
            flex: 1,
            background: i % 2 ? CC.black : CC.cream,
            transform: 'skewX(-22deg)',
            borderRight: i === 11 ? 'none' : `1.5px solid ${CC.black}`,
          }}/>
        ))}
      </div>
      <div style={{
        background: CC.black, padding: '10px 16px 12px',
        borderBottom: `3px solid ${CC.goldBright}`,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10,
      }}>
        <div>
          <div style={{
            fontFamily: 'Inter, system-ui', fontSize: 8, fontWeight: 900,
            letterSpacing: '0.3em', color: CC.goldBright,
          }}>PROD · PUMP RULES</div>
          <div style={{
            fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
            fontWeight: 900, fontSize: 20, color: CC.cream, lineHeight: 1,
            marginTop: 2, letterSpacing: -0.3,
          }}>Casting Call</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{
            fontFamily: 'Courier New, monospace', fontSize: 8.5, fontWeight: 700,
            color: 'rgba(255,215,0,0.7)', letterSpacing: '0.1em',
          }}>TAKE 1 · ROLL A</div>
          <div style={{
            fontFamily: 'Courier New, monospace', fontSize: 8.5, fontWeight: 700,
            color: 'rgba(255,249,240,0.55)', letterSpacing: '0.1em', marginTop: 1,
          }}>SC. 001 · INT.</div>
        </div>
      </div>
    </div>
  );
}

function ReelProgress({ active }: { active: number }) {
  const steps = ['NAME', 'DATE', 'VIBE', 'SIGN'];
  return (
    <div style={{
      position: 'relative', background: CC.black,
      padding: '10px 12px 10px',
      borderTop: `1px solid rgba(255,215,0,0.25)`,
      borderBottom: `1px solid rgba(255,215,0,0.25)`,
      display: 'flex', alignItems: 'center', gap: 6, justifyContent: 'center',
    }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: 3, display: 'flex', justifyContent: 'space-around',
      }}>
        {Array.from({ length: 18 }).map((_, i) => (
          <div key={i} style={{ width: 6, height: 3, background: CC.plumDeeper, borderRadius: 1 }}/>
        ))}
      </div>
      {steps.map((s, i) => {
        const isActive = i === active;
        const isDone = i < active;
        return (
          <span key={s} style={{ display: 'contents' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
              <div style={{
                width: 24, height: 24, borderRadius: '50%',
                background: isDone ? CC.goldBright : isActive ? CC.hotPink : 'transparent',
                border: `1.5px solid ${isDone ? CC.goldBright : isActive ? CC.hotPink : 'rgba(255,249,240,0.3)'}`,
                boxShadow: isActive ? `0 0 10px ${CC.hotPink}` : 'none',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
                fontWeight: 900, fontSize: 11,
                color: isDone ? CC.black : isActive ? CC.cream : 'rgba(255,249,240,0.4)',
              }}>
                {isDone ? <svg width="9" height="9" viewBox="0 0 9 9"><path d="M1 4.5L3.5 7L8 2" stroke={CC.black} strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg> : (i + 1)}
              </div>
              <div style={{
                fontFamily: 'Inter, system-ui', fontSize: 7, fontWeight: 900,
                letterSpacing: '0.2em',
                color: isDone ? CC.goldBright : isActive ? CC.cream : 'rgba(255,249,240,0.35)',
              }}>{s}</div>
            </div>
            {i < steps.length - 1 && (
              <div style={{
                flex: 1, height: 1.5, marginTop: -10,
                background: isDone ? CC.goldBright : `repeating-linear-gradient(90deg, rgba(255,249,240,0.2) 0 4px, transparent 4px 8px)`,
              }}/>
            )}
          </span>
        );
      })}
    </div>
  );
}

function StepPanel({ step, title, kicker, children, accent = 'pink' }: {
  step: number; title: string; kicker: string; children: React.ReactNode; accent?: 'pink' | 'gold';
}) {
  const accentColor = accent === 'gold' ? CC.goldBright : CC.hotPink;
  return (
    <div style={{
      margin: '14px 14px 0', padding: '0 0 16px', borderRadius: 16,
      background: 'linear-gradient(180deg, rgba(255,249,240,0.04) 0%, rgba(0,0,0,0.25) 100%)',
      border: `1.5px solid rgba(255,249,240,0.12)`,
      overflow: 'hidden', position: 'relative',
    }}>
      <div style={{
        background: `linear-gradient(90deg, ${CC.black} 0%, ${CC.plumDeep} 100%)`,
        padding: '9px 14px',
        borderBottom: `1.5px solid ${accentColor}`,
        display: 'flex', alignItems: 'center', gap: 9,
      }}>
        <div style={{
          padding: '3px 8px', background: accentColor,
          border: `1.5px solid ${CC.black}`, boxShadow: `0 2px 0 ${CC.black}`,
          fontFamily: 'Inter, system-ui', fontSize: 8.5, fontWeight: 900,
          letterSpacing: '0.24em',
          color: accent === 'gold' ? CC.black : CC.cream,
        }}>STEP {step}</div>
        <div style={{
          fontFamily: 'Inter, system-ui', fontSize: 8.5, fontWeight: 800,
          letterSpacing: '0.24em', color: accentColor, textTransform: 'uppercase',
        }}>{kicker}</div>
      </div>
      <div style={{ padding: '14px 16px 0' }}>
        <div style={{
          fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
          fontWeight: 900, fontSize: 22, color: CC.cream,
          lineHeight: 1.1, letterSpacing: -0.4,
        }}>{title}</div>
      </div>
      <div style={{ padding: '14px 16px 0' }}>{children}</div>
    </div>
  );
}

const ARCHETYPES: Array<{
  id: Archetype; emoji: string; label: string; tagline: string; cast: string; focus: string; vibe: string;
}> = [
  { id: 'boss',       emoji: '💼', label: 'The Boss',       tagline: 'I built this town.',    cast: 'Lisa_base.webp',    focus: 'center 20%', vibe: 'Lisa\u2019s energy: cool, cutting, never raises her voice. You\u2019ll get a verdict, not a lecture.' },
  { id: 'schemer',    emoji: '🥂', label: 'The Schemer',    tagline: 'Smile, stab, repeat.',  cast: 'Stassi_base.png',   focus: 'center 12%', vibe: 'Stassi\u2019s energy: sharp nudges, zero pity, big "and I oop\u2014" energy.' },
  { id: 'sweetheart', emoji: '🍰', label: 'The Sweetheart', tagline: 'I\u2019m literally so nice.', cast: 'Brittany_Hyped.png', focus: 'center 15%', vibe: 'Brittany\u2019s energy: high fives and gentle rewinds. We\u2019re still going to call it.' },
  { id: 'wildcard',   emoji: '🔥', label: 'The Wildcard',   tagline: 'Chaos is a strategy.',  cast: 'Jax_base.png',      focus: 'center 12%', vibe: 'Jax\u2019s energy: chaotic, loud, occasionally correct. Strap in.' },
];

function todayISO() { return new Date().toISOString().slice(0, 10); }
function addDaysISO(days: number) { const d = new Date(); d.setDate(d.getDate() + days); return d.toISOString().slice(0, 10); }
function diffDays(iso: string) {
  const d = new Date(iso + 'T00:00:00');
  const today = new Date(); today.setHours(0,0,0,0);
  return Math.round((d.getTime() - today.getTime()) / 86_400_000);
}

export default function CastingCall() {
  const navigate = useNavigate();
  const stored = useStore();
  const [name, setName] = useState(stored.name || '');
  const [examDate, setExamDate] = useState(stored.examDate || addDaysISO(21));
  const [archetype, setArchetype] = useState<Archetype | null>(stored.archetype);

  const setOnboarding = useStore(s => s.setOnboarding);
  const finishOnboarding = useStore(s => s.finishOnboarding);

  // sync to store as user fills in
  useEffect(() => { setOnboarding({ name, examDate, archetype: archetype ?? undefined }); }, [name, examDate, archetype, setOnboarding]);

  const days = diffDays(examDate);
  const niceDate = useMemo(() => {
    const d = new Date(examDate + 'T00:00:00');
    return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  }, [examDate]);

  const ready = name.trim().length > 0 && !!archetype && diffDays(examDate) >= 0;

  const submit = () => {
    if (!ready) return;
    finishOnboarding();
    navigate('/home');
  };

  return (
    <div style={{
      width: '100%', minHeight: '100%', position: 'relative',
      background: `
        radial-gradient(ellipse 90% 40% at 50% 0%, rgba(255, 215, 0, 0.14) 0%, transparent 55%),
        radial-gradient(ellipse 70% 50% at 50% 60%, rgba(233, 30, 99, 0.18) 0%, transparent 60%),
        linear-gradient(180deg, ${CC.plumDeep} 0%, ${CC.plumDeeper} 40%, ${CC.black} 100%)
      `,
      paddingBottom: 28,
    }}>
      <ClapperHeader />
      <ReelProgress active={archetype ? 3 : examDate ? 2 : name ? 1 : 0} />

      {/* Step 1 — Name */}
      <StepPanel step={1} kicker="CAST THE LEAD" title="What do we call you on camera?">
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 14 }}>
          <div style={{
            width: 54, height: 54, borderRadius: '50%',
            border: `1.5px solid ${CC.black}`,
            boxShadow: `0 0 0 1.5px ${CC.goldBright}`,
            overflow: 'hidden', flexShrink: 0,
            background: CC.plumDeeper,
          }}>
            <img src="/assets/Andy_base.png" alt="" style={{
              width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%',
            }}/>
          </div>
          <div style={{
            flex: 1, background: CC.cream, color: CC.black,
            padding: '9px 12px 10px',
            borderRadius: '2px 14px 14px 14px',
            border: `1.5px solid ${CC.black}`,
            boxShadow: `2.5px 2.5px 0 ${CC.black}`,
            position: 'relative',
          }}>
            <div style={{
              fontFamily: 'Inter, system-ui', fontSize: 7.5, fontWeight: 900,
              letterSpacing: '0.2em', color: CC.hotPink,
            }}>ANDY</div>
            <div style={{
              fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
              fontSize: 13, fontWeight: 500, color: CC.black, marginTop: 2,
              lineHeight: 1.3,
            }}>"We're casting you in your own season, doll. What's the name on the call sheet?"</div>
          </div>
        </div>
        <div>
          <div style={{
            fontFamily: 'Inter, system-ui', fontSize: 8, fontWeight: 900,
            letterSpacing: '0.24em', color: 'rgba(255,249,240,0.55)', marginBottom: 6,
            textTransform: 'uppercase',
          }}>Name on the Marquee</div>
          <input
            type="text" value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Elizabeth"
            style={{
              width: '100%', padding: '12px 14px',
              background: 'rgba(255,249,240,0.06)',
              border: `1.5px solid ${CC.hotPink}`, borderRadius: 10,
              boxShadow: `0 0 12px rgba(233,30,99,0.3)`,
              fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
              fontSize: 22, fontWeight: 900,
              color: CC.cream, letterSpacing: -0.3,
              outline: 'none',
            }}
          />
          <div style={{
            marginTop: 6, display: 'flex', alignItems: 'center', gap: 5,
            fontFamily: 'Inter, system-ui', fontSize: 10, fontWeight: 500,
            color: 'rgba(255,249,240,0.5)',
          }}>
            <span style={{ color: CC.goldBright }}>✎</span>
            <span style={{ fontStyle: 'italic' }}>Appears as <span style={{ color: CC.cream, fontWeight: 700 }}>"{(name || 'YOUR NAME').toUpperCase()}"</span> in the opening titles</span>
          </div>
        </div>
      </StepPanel>

      {/* Step 2 — Date */}
      <StepPanel step={2} accent="gold" kicker="SET THE AIR DATE" title="When's your reunion?">
        <div style={{
          fontFamily: 'Inter, system-ui', fontSize: 11, fontWeight: 500,
          color: 'rgba(255,249,240,0.65)', lineHeight: 1.4, marginBottom: 12,
          fontStyle: 'italic',
        }}>Pick the day you sit for the GA salesperson exam. That's your finale — we work backwards from there.</div>

        <input
          type="date"
          value={examDate}
          min={todayISO()}
          onChange={e => setExamDate(e.target.value)}
          style={{
            width: '100%', padding: '12px 14px',
            background: 'rgba(255,249,240,0.06)',
            border: `1.5px solid ${CC.goldBright}`, borderRadius: 10,
            color: CC.cream, fontFamily: 'Inter, system-ui', fontSize: 16, fontWeight: 700,
            letterSpacing: '0.04em', outline: 'none',
            colorScheme: 'dark',
          }}
        />

        <div style={{
          marginTop: 12, padding: '10px 12px', borderRadius: 10,
          background: `linear-gradient(90deg, rgba(255,215,0,0.14) 0%, rgba(233,30,99,0.14) 100%)`,
          border: `1px solid rgba(255,215,0,0.4)`,
          display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <span style={{ fontSize: 20 }}>🎬</span>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{
              fontFamily: 'Inter, system-ui', fontSize: 8, fontWeight: 900,
              letterSpacing: '0.22em', color: CC.goldBright, textTransform: 'uppercase',
            }}>Series Finale</div>
            <div style={{
              fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
              fontWeight: 900, fontSize: 14, color: CC.cream, lineHeight: 1.2, marginTop: 1,
            }}>{niceDate} · 9:00 AM</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{
              fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
              fontWeight: 900, fontSize: 22, color: CC.goldBright, lineHeight: 1,
              textShadow: `0 0 8px ${CC.goldBright}`,
            }}>{Math.max(0, days)}</div>
            <div style={{
              fontFamily: 'Inter, system-ui', fontSize: 7, fontWeight: 900,
              letterSpacing: '0.2em', color: 'rgba(255,249,240,0.6)',
            }}>DAYS OUT</div>
          </div>
        </div>
      </StepPanel>

      {/* Step 3 — Vibe */}
      <StepPanel step={3} kicker="MAIN CHARACTER ENERGY" title="Who are you this season?">
        <div style={{
          fontFamily: 'Inter, system-ui', fontSize: 11, fontWeight: 500,
          color: 'rgba(255,249,240,0.65)', lineHeight: 1.4, marginBottom: 12,
          fontStyle: 'italic',
        }}>Pick a vibe. We'll match your tone, nudges, and confessionals.</div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          {ARCHETYPES.map(a => {
            const selected = archetype === a.id;
            return (
              <button key={a.id} onClick={() => setArchetype(a.id)} style={{
                padding: '10px 10px 12px', borderRadius: 12,
                background: selected
                  ? `linear-gradient(180deg, rgba(233,30,99,0.2) 0%, rgba(74,14,46,0.4) 100%)`
                  : 'rgba(255,249,240,0.04)',
                border: selected ? `2px solid ${CC.hotPink}` : `1.5px solid rgba(255,249,240,0.1)`,
                boxShadow: selected ? `0 0 0 2px ${CC.black}, 0 0 16px rgba(233,30,99,0.4)` : 'none',
                position: 'relative',
                display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
                cursor: 'pointer', color: CC.cream,
              }}>
                {selected && (
                  <div style={{
                    position: 'absolute', top: -7, right: -7,
                    padding: '3px 8px', background: CC.hotPink,
                    border: `1.5px solid ${CC.black}`, borderRadius: 999,
                    boxShadow: `0 2px 0 ${CC.black}`,
                    fontFamily: 'Inter, system-ui', fontSize: 7, fontWeight: 900,
                    letterSpacing: '0.2em', color: CC.cream,
                    transform: 'rotate(6deg)',
                  }}>CAST ✓</div>
                )}
                <div style={{
                  width: 54, height: 54, borderRadius: '50%',
                  border: `1.5px solid ${CC.black}`,
                  boxShadow: `0 0 0 1.5px ${selected ? CC.hotPink : 'rgba(255,215,0,0.4)'}`,
                  overflow: 'hidden',
                  background: `radial-gradient(ellipse at 50% 40%, #6B1A3C 0%, ${CC.plumDeeper} 100%)`,
                }}>
                  <img src={`/assets/${a.cast}`} alt="" style={{
                    width: '100%', height: '100%', objectFit: 'cover', objectPosition: a.focus,
                  }}/>
                </div>
                <div style={{ marginTop: 7, fontSize: 14 }}>{a.emoji}</div>
                <div style={{
                  marginTop: 1,
                  fontFamily: 'Inter, system-ui', fontSize: 10, fontWeight: 900,
                  letterSpacing: '0.18em', color: selected ? CC.hotPink : CC.cream,
                  textTransform: 'uppercase',
                }}>{a.label}</div>
                <div style={{
                  marginTop: 3,
                  fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
                  fontSize: 10, fontWeight: 500,
                  color: 'rgba(255,249,240,0.65)', lineHeight: 1.25,
                }}>"{a.tagline}"</div>
              </button>
            );
          })}
        </div>

        {archetype && (
          <div style={{
            marginTop: 12, padding: '9px 12px', borderRadius: 10,
            background: 'rgba(233,30,99,0.08)',
            border: `1px dashed rgba(233,30,99,0.45)`,
            display: 'flex', alignItems: 'center', gap: 8,
          }}>
            <span style={{ fontSize: 14 }}>🎭</span>
            <div style={{
              flex: 1,
              fontFamily: 'Inter, system-ui', fontSize: 10.5, fontWeight: 500,
              color: 'rgba(255,249,240,0.75)', lineHeight: 1.3, fontStyle: 'italic',
            }}>{ARCHETYPES.find(a => a.id === archetype)?.vibe}</div>
          </div>
        )}
      </StepPanel>

      {/* Step 4 — Sign */}
      <StepPanel step={4} accent="gold" kicker="SIGN THE RELEASE" title="The Talent Release.">
        <div style={{
          background: `linear-gradient(180deg, ${CC.paper} 0%, #EEDDB8 100%)`,
          color: CC.black, padding: '14px 16px 16px',
          borderRadius: 4, border: `1.5px solid ${CC.black}`,
          boxShadow: `4px 4px 0 ${CC.paperShadow}, 8px 8px 24px rgba(0,0,0,0.5)`,
          position: 'relative', transform: 'rotate(-0.6deg)',
        }}>
          <div style={{
            position: 'absolute', top: 10, right: -8,
            padding: '4px 8px', background: 'transparent',
            border: `2px solid ${CC.hotPinkDeep}`, color: CC.hotPinkDeep,
            fontFamily: 'Courier New, monospace', fontSize: 9, fontWeight: 900,
            letterSpacing: '0.22em', transform: 'rotate(9deg)', opacity: 0.85,
          }}>CONFIDENTIAL</div>

          <div style={{
            fontFamily: 'Inter, system-ui', fontSize: 8, fontWeight: 900,
            letterSpacing: '0.26em', color: CC.goldDeep, textTransform: 'uppercase',
          }}>Pump Rules Productions</div>
          <div style={{
            fontFamily: '"Playfair Display", serif', fontWeight: 900,
            fontSize: 16, color: CC.black, marginTop: 2, letterSpacing: -0.3,
          }}>Talent Release Agreement</div>
          <div style={{
            marginTop: 2, height: 1.5,
            background: `linear-gradient(90deg, ${CC.black} 0%, transparent 100%)`,
          }}/>
          <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 7 }}>
            {[
              { n: '§1', t: 'I will show up for 25 min a night. No excuses, no ghosting.' },
              { n: '§2', t: 'I will not break character before the finale.' },
              { n: '§3', t: 'Lisa can call me out. It is for my own good.' },
            ].map(c => (
              <div key={c.n} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                <div style={{
                  fontFamily: 'Courier New, monospace', fontSize: 9, fontWeight: 900,
                  color: CC.hotPinkDeep, paddingTop: 2, flexShrink: 0,
                }}>{c.n}</div>
                <div style={{
                  fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
                  fontSize: 11.5, fontWeight: 500, color: CC.black, lineHeight: 1.35,
                }}>{c.t}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 14 }}>
            <div style={{
              fontFamily: 'Inter, system-ui', fontSize: 7.5, fontWeight: 900,
              letterSpacing: '0.2em', color: CC.goldDeep, textTransform: 'uppercase',
              marginBottom: 2,
            }}>Sign here</div>
            <div style={{
              fontFamily: '"Bonheur Royale", cursive',
              fontSize: 32, color: CC.hotPinkDeep,
              lineHeight: 1, letterSpacing: 0.5,
              borderBottom: `1.5px solid ${CC.black}`, paddingBottom: 2,
              minHeight: 38,
            }}>{name || '—'}</div>
            <div style={{
              display: 'flex', justifyContent: 'space-between', marginTop: 5,
              fontFamily: 'Courier New, monospace', fontSize: 8, fontWeight: 700,
              color: CC.goldDeep, letterSpacing: '0.1em',
            }}>
              <span>{(name || 'TALENT').toUpperCase()} · THE TALENT</span>
              <span>{new Date().toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' }).toUpperCase().replace(/\s/g, '·')}</span>
            </div>
          </div>
        </div>

        <button onClick={submit} disabled={!ready} style={{
          marginTop: 16, width: '100%', padding: '13px 18px',
          background: ready
            ? `linear-gradient(180deg, ${CC.goldBright} 0%, ${CC.goldDeep} 100%)`
            : 'rgba(255,255,255,0.1)',
          border: `2px solid ${CC.black}`, borderRadius: 12,
          boxShadow: ready ? `0 4px 0 ${CC.black}, 0 0 20px rgba(255,215,0,0.4)` : 'none',
          fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
          fontWeight: 900, fontSize: 17, color: CC.black,
          letterSpacing: -0.3, cursor: ready ? 'pointer' : 'not-allowed',
          opacity: ready ? 1 : 0.55,
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        }}>
          <span>Roll the opening credits</span>
          <svg width="12" height="12" viewBox="0 0 12 12"><path d="M1 6h9M7 2l4 4-4 4" stroke={CC.black} strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <div style={{
          marginTop: 8, textAlign: 'center',
          fontFamily: 'Inter, system-ui', fontSize: 9.5, fontWeight: 600,
          color: 'rgba(255,249,240,0.5)', fontStyle: 'italic',
        }}>Season 1 · 9 acts · <span style={{ color: CC.hotPink }}>premieres tonight at 8</span></div>
      </StepPanel>

      <div style={{ height: 28 }}/>
    </div>
  );
}
