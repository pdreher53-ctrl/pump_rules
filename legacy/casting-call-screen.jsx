// Screen 11 — Casting Call (Onboarding)

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

// ─────────────────────────────────────────────────────────────
// CLAPPERBOARD HEADER
// ─────────────────────────────────────────────────────────────
function ClapperHeader() {
  return (
    <div style={{ position: 'relative', margin: '54px 0 0' }}>
      {/* stripes */}
      <div style={{
        height: 28, display: 'flex', borderBottom: `3px solid ${CC.black}`,
      }}>
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} style={{
            flex: 1,
            background: i % 2 ? CC.black : CC.cream,
            transform: 'skewX(-22deg)',
            borderRight: i === 11 ? 'none' : `1.5px solid ${CC.black}`,
          }}/>
        ))}
      </div>
      {/* slate body */}
      <div style={{
        background: CC.black,
        padding: '10px 16px 12px',
        borderBottom: `3px solid ${CC.goldBright}`,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: 10,
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

// ─────────────────────────────────────────────────────────────
// REEL PROGRESS STRIP (film sprocket)
// ─────────────────────────────────────────────────────────────
function ReelProgress({ active }) {
  const steps = ['NAME', 'DATE', 'VIBE', 'SIGN'];
  return (
    <div style={{
      position: 'relative',
      background: CC.black,
      padding: '10px 12px 10px',
      borderTop: `1px solid rgba(255,215,0,0.25)`,
      borderBottom: `1px solid rgba(255,215,0,0.25)`,
      display: 'flex', alignItems: 'center', gap: 6, justifyContent: 'center',
    }}>
      {/* sprocket holes top */}
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
          <React.Fragment key={s}>
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
                {isDone ? (
                  <svg width="9" height="9" viewBox="0 0 9 9"><path d="M1 4.5L3.5 7L8 2" stroke={CC.black} strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                ) : (i + 1)}
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
                background: isDone
                  ? CC.goldBright
                  : `repeating-linear-gradient(90deg, rgba(255,249,240,0.2) 0 4px, transparent 4px 8px)`,
              }}/>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// STEP PANEL (shared shell)
// ─────────────────────────────────────────────────────────────
function StepPanel({ step, title, kicker, children, accent = 'pink' }) {
  const accentColor = accent === 'gold' ? CC.goldBright : CC.hotPink;
  return (
    <div style={{
      margin: '14px 14px 0',
      padding: '0 0 16px',
      borderRadius: 16,
      background: 'linear-gradient(180deg, rgba(255,249,240,0.04) 0%, rgba(0,0,0,0.25) 100%)',
      border: `1.5px solid rgba(255,249,240,0.12)`,
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* step banner */}
      <div style={{
        background: `linear-gradient(90deg, ${CC.black} 0%, ${CC.plumDeep} 100%)`,
        padding: '9px 14px',
        borderBottom: `1.5px solid ${accentColor}`,
        display: 'flex', alignItems: 'center', gap: 9,
      }}>
        <div style={{
          padding: '3px 8px',
          background: accentColor,
          border: `1.5px solid ${CC.black}`,
          boxShadow: `0 2px 0 ${CC.black}`,
          fontFamily: 'Inter, system-ui', fontSize: 8.5, fontWeight: 900,
          letterSpacing: '0.24em',
          color: accent === 'gold' ? CC.black : CC.cream,
        }}>STEP {step}</div>
        <div style={{
          fontFamily: 'Inter, system-ui', fontSize: 8.5, fontWeight: 800,
          letterSpacing: '0.24em', color: accentColor, textTransform: 'uppercase',
        }}>{kicker}</div>
      </div>
      {/* title + body */}
      <div style={{ padding: '14px 16px 0' }}>
        <div style={{
          fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
          fontWeight: 900, fontSize: 22, color: CC.cream,
          lineHeight: 1.1, letterSpacing: -0.4,
        }}>{title}</div>
      </div>
      <div style={{ padding: '14px 16px 0' }}>
        {children}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// STEP 1 — NAME
// ─────────────────────────────────────────────────────────────
function Step1Name() {
  return (
    <StepPanel step={1} kicker="CAST THE LEAD" title="What do we call you on camera?">
      {/* Andy with speech bubble */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 14 }}>
        <div style={{
          width: 54, height: 54, borderRadius: '50%',
          border: `1.5px solid ${CC.black}`,
          boxShadow: `0 0 0 1.5px ${CC.goldBright}`,
          overflow: 'hidden', flexShrink: 0,
          background: CC.plumDeeper,
        }}>
          <img src="assets/Andy_base.png" alt="" style={{
            width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%',
          }}/>
        </div>
        <div style={{
          flex: 1,
          background: CC.cream,
          color: CC.black,
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

      {/* Input */}
      <div>
        <div style={{
          fontFamily: 'Inter, system-ui', fontSize: 8, fontWeight: 900,
          letterSpacing: '0.24em', color: 'rgba(255,249,240,0.55)', marginBottom: 6,
          textTransform: 'uppercase',
        }}>Name on the Marquee</div>
        <div style={{
          padding: '12px 14px',
          background: 'rgba(255,249,240,0.06)',
          border: `1.5px solid ${CC.hotPink}`,
          borderRadius: 10,
          boxShadow: `0 0 12px rgba(233,30,99,0.3)`,
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <span style={{
            fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
            fontSize: 22, fontWeight: 900,
            color: CC.cream, letterSpacing: -0.3,
          }}>Elizabeth</span>
          <span style={{
            width: 2, height: 22, background: CC.hotPink,
            animation: 'caret 1s ease-in-out infinite',
          }}/>
        </div>
        <div style={{
          marginTop: 6, display: 'flex', alignItems: 'center', gap: 5,
          fontFamily: 'Inter, system-ui', fontSize: 10, fontWeight: 500,
          color: 'rgba(255,249,240,0.5)',
        }}>
          <span style={{ color: CC.goldBright }}>✎</span>
          <span style={{ fontStyle: 'italic' }}>Appears as <span style={{ color: CC.cream, fontWeight: 700 }}>"ELIZABETH"</span> in the opening titles</span>
        </div>
      </div>
    </StepPanel>
  );
}

// ─────────────────────────────────────────────────────────────
// STEP 2 — EXAM DATE
// ─────────────────────────────────────────────────────────────
function Step2Date() {
  const days = [];
  for (let i = 1; i <= 31; i++) days.push(i);
  const today = 8;
  const examDay = 26;
  return (
    <StepPanel step={2} accent="gold" kicker="SET THE AIR DATE" title="When's your reunion?">
      <div style={{
        fontFamily: 'Inter, system-ui', fontSize: 11, fontWeight: 500,
        color: 'rgba(255,249,240,0.65)', lineHeight: 1.4, marginBottom: 12,
        fontStyle: 'italic',
      }}>Pick the day you sit for the GA salesperson exam. That's your finale — we work backwards from there.</div>

      {/* Month header */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '8px 2px 6px',
      }}>
        <svg width="9" height="14" viewBox="0 0 9 14"><path d="M8 1L2 7l6 6" stroke={CC.cream} strokeWidth="1.8" fill="none" strokeLinecap="round"/></svg>
        <div style={{
          fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
          fontWeight: 900, fontSize: 17, color: CC.cream, letterSpacing: -0.2,
        }}>April <span style={{ color: CC.goldBright }}>2025</span></div>
        <svg width="9" height="14" viewBox="0 0 9 14"><path d="M1 1l6 6-6 6" stroke={CC.cream} strokeWidth="1.8" fill="none" strokeLinecap="round"/></svg>
      </div>

      {/* Weekday row */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 3,
        marginBottom: 4,
      }}>
        {['S','M','T','W','T','F','S'].map((d, i) => (
          <div key={i} style={{
            textAlign: 'center',
            fontFamily: 'Inter, system-ui', fontSize: 8, fontWeight: 900,
            letterSpacing: '0.2em', color: 'rgba(255,249,240,0.4)',
          }}>{d}</div>
        ))}
      </div>

      {/* Day grid */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 3,
      }}>
        {/* offset for April starting Tue */}
        {Array.from({ length: 2 }).map((_, i) => <div key={`o${i}`}/>)}
        {days.map(d => {
          const isToday = d === today;
          const isExam = d === examDay;
          const past = d < today;
          return (
            <div key={d} style={{
              aspectRatio: '1',
              borderRadius: 6,
              background: isExam ? CC.goldBright :
                          isToday ? 'rgba(233,30,99,0.18)' : 'transparent',
              border: isExam ? `1.5px solid ${CC.black}` :
                      isToday ? `1.5px solid ${CC.hotPink}` :
                      `1px solid rgba(255,249,240,0.08)`,
              boxShadow: isExam ? `0 0 0 1.5px ${CC.goldBright}, 0 0 14px rgba(255,215,0,0.5)` : 'none',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
              fontWeight: 900, fontSize: 12,
              color: isExam ? CC.black : past ? 'rgba(255,249,240,0.25)' : CC.cream,
              position: 'relative',
              textDecoration: past ? 'line-through' : 'none',
            }}>
              {d}
              {isExam && (
                <div style={{
                  position: 'absolute', top: -3, right: -3,
                  width: 10, height: 10, borderRadius: '50%',
                  background: CC.hotPink, border: `1.2px solid ${CC.black}`,
                  boxShadow: `0 0 6px ${CC.hotPink}`,
                }}/>
              )}
            </div>
          );
        })}
      </div>

      {/* Selected readout */}
      <div style={{
        marginTop: 12, padding: '10px 12px',
        borderRadius: 10,
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
          }}>Sat, Apr 26 · 9:00 AM</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{
            fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
            fontWeight: 900, fontSize: 22, color: CC.goldBright, lineHeight: 1,
            textShadow: `0 0 8px ${CC.goldBright}`,
          }}>18</div>
          <div style={{
            fontFamily: 'Inter, system-ui', fontSize: 7, fontWeight: 900,
            letterSpacing: '0.2em', color: 'rgba(255,249,240,0.6)',
          }}>DAYS OUT</div>
        </div>
      </div>
    </StepPanel>
  );
}

// ─────────────────────────────────────────────────────────────
// STEP 3 — MAIN CHARACTER ENERGY
// ─────────────────────────────────────────────────────────────
function ArchetypeCard({ emoji, label, tagline, cast, focus, selected, accent = CC.hotPink }) {
  return (
    <div style={{
      padding: '10px 10px 12px',
      borderRadius: 12,
      background: selected
        ? `linear-gradient(180deg, rgba(233,30,99,0.2) 0%, rgba(74,14,46,0.4) 100%)`
        : 'rgba(255,249,240,0.04)',
      border: selected ? `2px solid ${accent}` : `1.5px solid rgba(255,249,240,0.1)`,
      boxShadow: selected ? `0 0 0 2px ${CC.black}, 0 0 16px rgba(233,30,99,0.4)` : 'none',
      position: 'relative',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      textAlign: 'center',
    }}>
      {selected && (
        <div style={{
          position: 'absolute', top: -7, right: -7,
          padding: '3px 8px',
          background: accent,
          border: `1.5px solid ${CC.black}`,
          borderRadius: 999,
          boxShadow: `0 2px 0 ${CC.black}`,
          fontFamily: 'Inter, system-ui', fontSize: 7, fontWeight: 900,
          letterSpacing: '0.2em', color: CC.cream,
          transform: 'rotate(6deg)',
        }}>CAST ✓</div>
      )}
      <div style={{
        width: 54, height: 54, borderRadius: '50%',
        border: `1.5px solid ${CC.black}`,
        boxShadow: `0 0 0 1.5px ${selected ? accent : 'rgba(255,215,0,0.4)'}`,
        overflow: 'hidden',
        background: `radial-gradient(ellipse at 50% 40%, #6B1A3C 0%, ${CC.plumDeeper} 100%)`,
      }}>
        <img src={`assets/${cast}`} alt="" style={{
          width: '100%', height: '100%', objectFit: 'cover', objectPosition: focus,
        }}/>
      </div>
      <div style={{
        marginTop: 7,
        fontSize: 14,
      }}>{emoji}</div>
      <div style={{
        marginTop: 1,
        fontFamily: 'Inter, system-ui', fontSize: 10, fontWeight: 900,
        letterSpacing: '0.18em', color: selected ? accent : CC.cream,
        textTransform: 'uppercase',
      }}>{label}</div>
      <div style={{
        marginTop: 3,
        fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
        fontSize: 10, fontWeight: 500,
        color: 'rgba(255,249,240,0.65)', lineHeight: 1.25,
      }}>"{tagline}"</div>
    </div>
  );
}

function Step3Vibe() {
  return (
    <StepPanel step={3} kicker="MAIN CHARACTER ENERGY" title="Who are you this season?">
      <div style={{
        fontFamily: 'Inter, system-ui', fontSize: 11, fontWeight: 500,
        color: 'rgba(255,249,240,0.65)', lineHeight: 1.4, marginBottom: 12,
        fontStyle: 'italic',
      }}>Pick a vibe. We'll match your tone, nudges, and confessionals.</div>

      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8,
      }}>
        <ArchetypeCard
          emoji="💼"
          label="The Boss"
          tagline="I built this town."
          cast="Lisa_base.webp"
          focus="center 20%"
          selected={false}
        />
        <ArchetypeCard
          emoji="🥂"
          label="The Schemer"
          tagline="Smile, stab, repeat."
          cast="Stassi_base.png"
          focus="center 12%"
          selected={true}
        />
        <ArchetypeCard
          emoji="🍰"
          label="The Sweetheart"
          tagline="I'm literally so nice."
          cast="Brittany_Hyped.png"
          focus="center 15%"
          selected={false}
        />
        <ArchetypeCard
          emoji="🔥"
          label="The Wildcard"
          tagline="Chaos is a strategy."
          cast="Jax_base.png"
          focus="center 12%"
          selected={false}
        />
      </div>

      <div style={{
        marginTop: 12, padding: '9px 12px',
        borderRadius: 10,
        background: 'rgba(233,30,99,0.08)',
        border: `1px dashed rgba(233,30,99,0.45)`,
        display: 'flex', alignItems: 'center', gap: 8,
      }}>
        <span style={{ fontSize: 14 }}>🎭</span>
        <div style={{
          flex: 1,
          fontFamily: 'Inter, system-ui', fontSize: 10.5, fontWeight: 500,
          color: 'rgba(255,249,240,0.75)', lineHeight: 1.3,
        }}>Stassi's energy: <span style={{ color: CC.cream, fontWeight: 700, fontStyle: 'italic' }}>sharp nudges, zero pity, big "and I oop—" energy.</span></div>
      </div>
    </StepPanel>
  );
}

// ─────────────────────────────────────────────────────────────
// STEP 4 — THE CONTRACT
// ─────────────────────────────────────────────────────────────
function Step4Contract() {
  return (
    <StepPanel step={4} accent="gold" kicker="SIGN THE RELEASE" title="The Talent Release.">
      {/* Document */}
      <div style={{
        background: `linear-gradient(180deg, ${CC.paper} 0%, #EEDDB8 100%)`,
        color: CC.black,
        padding: '14px 16px 16px',
        borderRadius: 4,
        border: `1.5px solid ${CC.black}`,
        boxShadow: `4px 4px 0 ${CC.paperShadow}, 8px 8px 24px rgba(0,0,0,0.5)`,
        position: 'relative',
        transform: 'rotate(-0.6deg)',
      }}>
        {/* Classified stamp */}
        <div style={{
          position: 'absolute', top: 10, right: -8,
          padding: '4px 8px',
          background: 'transparent',
          border: `2px solid ${CC.hotPinkDeep}`,
          color: CC.hotPinkDeep,
          fontFamily: 'Courier New, monospace', fontSize: 9, fontWeight: 900,
          letterSpacing: '0.22em',
          transform: 'rotate(9deg)',
          opacity: 0.85,
        }}>CONFIDENTIAL</div>

        <div style={{
          fontFamily: 'Inter, system-ui', fontSize: 8, fontWeight: 900,
          letterSpacing: '0.26em', color: CC.goldDeep, textTransform: 'uppercase',
        }}>Pump Rules Productions</div>
        <div style={{
          fontFamily: '"Playfair Display", serif', fontWeight: 900,
          fontSize: 16, color: CC.black, marginTop: 2,
          letterSpacing: -0.3,
        }}>Talent Release Agreement</div>
        <div style={{
          marginTop: 2, height: 1.5,
          background: `linear-gradient(90deg, ${CC.black} 0%, transparent 100%)`,
        }}/>

        {/* Clauses */}
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
                fontSize: 11.5, fontWeight: 500, color: CC.black,
                lineHeight: 1.35,
              }}>{c.t}</div>
            </div>
          ))}
        </div>

        {/* Signature line */}
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
            borderBottom: `1.5px solid ${CC.black}`,
            paddingBottom: 2,
          }}>Elizabeth</div>
          <div style={{
            display: 'flex', justifyContent: 'space-between', marginTop: 5,
            fontFamily: 'Courier New, monospace', fontSize: 8, fontWeight: 700,
            color: CC.goldDeep, letterSpacing: '0.1em',
          }}>
            <span>ELIZABETH · THE TALENT</span>
            <span>08.APR.2025</span>
          </div>
        </div>
      </div>

      {/* Primary CTA */}
      <button style={{
        marginTop: 16, width: '100%',
        padding: '13px 18px',
        background: `linear-gradient(180deg, ${CC.goldBright} 0%, ${CC.goldDeep} 100%)`,
        border: `2px solid ${CC.black}`,
        borderRadius: 12,
        boxShadow: `0 4px 0 ${CC.black}, 0 0 20px rgba(255,215,0,0.4)`,
        fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
        fontWeight: 900, fontSize: 17, color: CC.black,
        letterSpacing: -0.3,
        cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
      }}>
        <span>Roll the opening credits</span>
        <svg width="12" height="12" viewBox="0 0 12 12"><path d="M1 6h9M7 2l4 4-4 4" stroke={CC.black} strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      <div style={{
        marginTop: 8, textAlign: 'center',
        fontFamily: 'Inter, system-ui', fontSize: 9.5, fontWeight: 600,
        color: 'rgba(255,249,240,0.5)', fontStyle: 'italic',
      }}>Season 1 · 18 episodes · <span style={{ color: CC.hotPink }}>premieres tonight at 8</span></div>
    </StepPanel>
  );
}

// ─────────────────────────────────────────────────────────────
// MAIN SCREEN
// ─────────────────────────────────────────────────────────────
function CastingCallScreen() {
  return (
    <div
      data-screen-label="11 Casting Call (Onboarding)"
      style={{
        width: '100%', height: '100%',
        overflowY: 'auto', overflowX: 'hidden',
        position: 'relative',
        background: `
          radial-gradient(ellipse 90% 40% at 50% 0%, rgba(255, 215, 0, 0.14) 0%, transparent 55%),
          radial-gradient(ellipse 70% 50% at 50% 60%, rgba(233, 30, 99, 0.18) 0%, transparent 60%),
          linear-gradient(180deg, ${CC.plumDeep} 0%, ${CC.plumDeeper} 40%, ${CC.black} 100%)
        `,
      }}
    >
      <ClapperHeader/>
      <ReelProgress active={2}/>

      <Step1Name/>
      <Step2Date/>
      <Step3Vibe/>
      <Step4Contract/>

      <div style={{ height: 28 }}/>

      <style>{`
        @keyframes caret { 0%, 50% { opacity: 1; } 51%, 100% { opacity: 0; } }
        ::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}

Object.assign(window, { CastingCallScreen });
