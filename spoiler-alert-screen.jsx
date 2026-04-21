// Screen 10 — Spoiler Alert (Study Plan)

const SP = {
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
  flex: '#9B6BD9',
};

// 21-day plan — today is day 4
const PLAN = [
  // Week 1 — FOUNDATIONS
  { d: 1, label: 'M', cast: 'Lisa_base.webp',     focus: 'center 20%', domain: 'License Law',      mins: 22, status: 'done', theme: 1 },
  { d: 2, label: 'T', cast: 'Stassi_base.png',    focus: 'center 10%', domain: 'Agency',           mins: 24, status: 'done', theme: 1 },
  { d: 3, label: 'W', cast: 'Arinana_base.png',   focus: 'center 10%', domain: 'Agency',           mins: 21, status: 'done', theme: 1 },
  { d: 4, label: 'T', cast: 'Brittany_Hyped.png', focus: 'center 15%', domain: 'Fair Housing',     mins: 25, status: 'today', theme: 1 },
  { d: 5, label: 'F', cast: 'Katie_base.png',     focus: 'center 10%', domain: 'Fair Housing',     mins: 20, status: 'next', theme: 1 },
  { d: 6, label: 'S', cast: null,                 domain: 'Flex day',        mins: 0,  status: 'flex', theme: 1 },
  { d: 7, label: 'S', cast: 'Raquel_base.png',    focus: 'center 10%', domain: 'Fair Housing',     mins: 18, status: 'scheduled', theme: 1 },
  // Week 2 — CONTRACTS & AGENCY
  { d: 8,  label: 'M', cast: 'Schwartz_base.png', focus: 'center 10%', domain: 'Contracts',        mins: 26, status: 'scheduled', theme: 2 },
  { d: 9,  label: 'T', cast: 'Sandavol_base.png', focus: 'center 10%', domain: 'Contracts',        mins: 24, status: 'scheduled', theme: 2 },
  { d: 10, label: 'W', cast: 'Jax_base.png',      focus: 'center 10%', domain: 'Disclosure',       mins: 22, status: 'scheduled', theme: 2 },
  { d: 11, label: 'T', cast: 'James_base.png',    focus: 'center 10%', domain: 'Financing',        mins: 28, status: 'scheduled', theme: 2 },
  { d: 12, label: 'F', cast: 'lala_base.png',     focus: 'center 10%', domain: 'Financing',        mins: 22, status: 'scheduled', theme: 2 },
  { d: 13, label: 'S', cast: null,                domain: 'Flex day',        mins: 0,  status: 'flex', theme: 2 },
  { d: 14, label: 'S', cast: 'Kristen_base.png',  focus: 'center 10%', domain: 'Property',         mins: 25, status: 'scheduled', theme: 2 },
  // Week 3 — FINALE PREP
  { d: 15, label: 'M', cast: 'Schena_base.png',   focus: 'center 10%', domain: 'Property',         mins: 24, status: 'scheduled', theme: 3 },
  { d: 16, label: 'T', cast: 'LISA_disapprove.png',focus: 'center 20%', domain: 'Mock · Part 1',    mins: 40, status: 'scheduled', theme: 3 },
  { d: 17, label: 'W', cast: 'Ariana_Smug.png',   focus: 'center 10%', domain: 'Mock · Part 2',    mins: 40, status: 'scheduled', theme: 3 },
  { d: 18, label: 'T', cast: 'Stassi_Backhand.png',focus: 'center 10%', domain: 'Weak Spots',       mins: 30, status: 'scheduled', theme: 3 },
  { d: 19, label: 'F', cast: null,                domain: 'Rest day',        mins: 0,  status: 'flex', theme: 3 },
  { d: 20, label: 'S', cast: 'Andy_WWHL.png',     focus: 'center 10%', domain: 'Full Dress',       mins: 60, status: 'scheduled', theme: 3 },
  { d: 21, label: 'S', cast: 'ANDY_mazel.png',    focus: 'center 10%', domain: 'REUNION',          mins: 180, status: 'exam', theme: 3 },
];

function Countdown() {
  return (
    <div style={{ textAlign: 'center', padding: '0 16px 4px' }}>
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        padding: '4px 12px',
        background: 'rgba(255,249,240,0.06)',
        border: `1px solid rgba(255,215,0,0.4)`,
        borderRadius: 999,
        fontFamily: 'Inter, system-ui', fontSize: 9, fontWeight: 800,
        letterSpacing: '0.28em', color: SP.goldBright, textTransform: 'uppercase',
      }}>📺 SPOILER ALERT</div>

      <div style={{
        marginTop: 8,
        fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
        fontWeight: 900, fontSize: 28, color: SP.cream,
        letterSpacing: -0.6, lineHeight: 1,
        textShadow: `0 0 14px rgba(255,215,0,0.3)`,
      }}>Your Season Schedule</div>

      <div style={{
        marginTop: 10,
        display: 'inline-flex', alignItems: 'baseline', gap: 6,
        padding: '7px 16px 8px',
        background: `linear-gradient(180deg, ${SP.hotPinkDeep} 0%, ${SP.plumDeep} 100%)`,
        border: `2px solid ${SP.black}`, borderRadius: 10,
        boxShadow: `0 0 0 2px ${SP.hotPink}, 0 0 20px rgba(233,30,99,0.4), 0 4px 0 ${SP.black}`,
      }}>
        <span style={{
          fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
          fontWeight: 900, fontSize: 32, color: SP.goldBright, lineHeight: 1,
          letterSpacing: -1, textShadow: `0 0 10px ${SP.goldBright}`,
        }}>18</span>
        <span style={{
          fontFamily: 'Inter, system-ui', fontSize: 9, fontWeight: 900,
          letterSpacing: '0.24em', color: SP.cream, textTransform: 'uppercase',
        }}>DAYS TO<br/>THE REUNION</span>
      </div>
    </div>
  );
}

function TodaysDrop() {
  const today = PLAN[3]; // Brittany, day 4
  return (
    <div style={{
      margin: '16px 14px 0',
      borderRadius: 16,
      border: `2px solid ${SP.black}`,
      overflow: 'hidden',
      position: 'relative',
      boxShadow: `0 0 0 2px ${SP.hotPink}, 0 0 28px rgba(233,30,99,0.4), 0 12px 28px rgba(0,0,0,0.55)`,
      display: 'flex',
      background: `linear-gradient(90deg, ${SP.plumDeeper} 0%, #1A0A14 100%)`,
      height: 128,
    }}>
      {/* Brittany */}
      <div style={{
        width: 110, flexShrink: 0, position: 'relative', overflow: 'hidden',
        background: `radial-gradient(ellipse at 50% 40%, #6B1A3C 0%, ${SP.plumDeeper} 80%, ${SP.black} 100%)`,
      }}>
        <img src={`assets/${today.cast}`} alt="" style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: today.focus,
        }}/>
        {/* LIVE badge */}
        <div style={{
          position: 'absolute', top: 8, left: 8,
          padding: '3px 7px',
          background: SP.hotPink, border: `1.5px solid ${SP.black}`,
          borderRadius: 4,
          fontFamily: 'Inter, system-ui', fontSize: 7.5, fontWeight: 900,
          letterSpacing: '0.18em', color: SP.cream,
          boxShadow: `0 2px 0 ${SP.black}`,
          display: 'flex', alignItems: 'center', gap: 3,
        }}>
          <span style={{
            width: 5, height: 5, borderRadius: '50%', background: SP.cream,
            animation: 'livePulse 1.1s ease-in-out infinite',
          }}/>
          TONIGHT
        </div>
      </div>

      {/* Info */}
      <div style={{ flex: 1, padding: '12px 12px 12px 14px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <div style={{
            fontFamily: 'Inter, system-ui', fontSize: 8, fontWeight: 900,
            letterSpacing: '0.22em', color: SP.goldBright, textTransform: 'uppercase',
          }}>AIRING AT 8:00 PM</div>
          <div style={{
            fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
            fontWeight: 900, fontSize: 17, color: SP.cream, marginTop: 2, lineHeight: 1.1,
            letterSpacing: -0.2,
          }}>Girls Night · Pt. 2</div>
          <div style={{
            fontFamily: 'Inter, system-ui', fontSize: 10.5, fontWeight: 500,
            color: 'rgba(255,249,240,0.6)', marginTop: 3, lineHeight: 1.3,
          }}>
            Fair Housing remediation · <span style={{ color: SP.hotPink, fontWeight: 700 }}>Brittany</span> · 25 min
          </div>
        </div>
        <button style={{
          padding: '7px 12px',
          background: `linear-gradient(180deg, ${SP.hotPink} 0%, ${SP.hotPinkDeep} 100%)`,
          border: `1.5px solid ${SP.black}`, borderRadius: 999,
          boxShadow: `0 2.5px 0 ${SP.black}`,
          fontFamily: 'Inter, system-ui', fontSize: 10, fontWeight: 900,
          color: SP.cream, letterSpacing: '0.12em', textTransform: 'uppercase',
          alignSelf: 'flex-start',
          display: 'flex', alignItems: 'center', gap: 5,
          cursor: 'pointer',
        }}>
          <svg width="8" height="8" viewBox="0 0 8 8"><path d="M1 0v8l7-4L1 0z" fill={SP.cream}/></svg>
          Queue it up
        </button>
      </div>
    </div>
  );
}

function DayCard({ day }) {
  const { d, label, cast, focus, domain, mins, status } = day;
  const isToday = status === 'today';
  const isDone = status === 'done';
  const isFlex = status === 'flex';
  const isExam = status === 'exam';

  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 10,
      padding: '8px 10px',
      borderRadius: 10,
      background: isToday ? 'rgba(233,30,99,0.12)' :
                  isExam  ? `linear-gradient(90deg, rgba(255,215,0,0.18) 0%, rgba(233,30,99,0.15) 100%)` :
                  isFlex  ? 'rgba(155,107,217,0.08)' :
                  'rgba(255,249,240,0.03)',
      border: isToday ? `1.5px solid ${SP.hotPink}` :
              isExam  ? `1.5px solid ${SP.goldBright}` :
              isFlex  ? `1px dashed rgba(155,107,217,0.5)` :
              `1px solid rgba(255,249,240,0.08)`,
      boxShadow: isToday ? `0 0 16px rgba(233,30,99,0.35)` :
                 isExam  ? `0 0 18px rgba(255,215,0,0.35)` : 'none',
      opacity: isDone ? 0.55 : 1,
    }}>
      {/* Day pill */}
      <div style={{
        width: 32, textAlign: 'center', flexShrink: 0,
      }}>
        <div style={{
          fontFamily: 'Inter, system-ui', fontSize: 8, fontWeight: 800,
          letterSpacing: '0.16em', color: 'rgba(255,249,240,0.5)',
          textTransform: 'uppercase',
        }}>{label}</div>
        <div style={{
          fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
          fontWeight: 900, fontSize: 18,
          color: isToday ? SP.hotPink : isExam ? SP.goldBright : SP.cream,
          lineHeight: 1,
          textShadow: isToday ? `0 0 8px ${SP.hotPink}` : isExam ? `0 0 8px ${SP.goldBright}` : 'none',
        }}>{d}</div>
      </div>

      {/* Portrait */}
      {cast ? (
        <div style={{
          width: 36, height: 36, borderRadius: '50%', flexShrink: 0,
          border: `1.5px solid ${SP.black}`,
          boxShadow: `0 0 0 1.5px ${isExam ? SP.goldBright : isToday ? SP.hotPink : 'rgba(255,215,0,0.35)'}`,
          overflow: 'hidden',
          background: SP.plumDeeper,
          filter: isDone ? 'grayscale(0.4) saturate(0.8)' : 'none',
        }}>
          <img src={`assets/${cast}`} alt="" style={{
            width: '100%', height: '100%', objectFit: 'cover', objectPosition: focus,
          }}/>
        </div>
      ) : (
        <div style={{
          width: 36, height: 36, borderRadius: '50%', flexShrink: 0,
          background: 'rgba(155,107,217,0.15)',
          border: `1.5px dashed rgba(155,107,217,0.5)`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 18,
        }}>💅</div>
      )}

      {/* Info */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontFamily: 'Inter, system-ui', fontSize: 12, fontWeight: 700,
          color: SP.cream, lineHeight: 1.2,
          textDecoration: isDone ? 'line-through' : 'none',
          whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
        }}>{domain}</div>
        <div style={{
          fontFamily: 'Inter, system-ui', fontSize: 10, fontWeight: 500,
          color: 'rgba(255,249,240,0.5)', marginTop: 1,
        }}>{mins ? `${mins} min` : 'rest · recharge'}</div>
      </div>

      {/* Status badge */}
      {isDone && (
        <svg width="16" height="16" viewBox="0 0 16 16" style={{ flexShrink: 0 }}>
          <circle cx="8" cy="8" r="7.2" fill={SP.green} stroke={SP.black} strokeWidth="0.6"/>
          <path d="M4.5 8L7 10.5L11.5 5.8" stroke={SP.black} strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
      {isToday && (
        <div style={{
          padding: '3px 7px',
          background: SP.hotPink, border: `1.5px solid ${SP.black}`,
          borderRadius: 4,
          fontFamily: 'Inter, system-ui', fontSize: 7.5, fontWeight: 900,
          letterSpacing: '0.14em', color: SP.cream,
          boxShadow: `0 2px 0 ${SP.black}`,
          flexShrink: 0, whiteSpace: 'nowrap',
        }}>TODAY</div>
      )}
      {isExam && (
        <div style={{
          padding: '3px 7px',
          background: SP.goldBright, border: `1.5px solid ${SP.black}`,
          borderRadius: 4,
          fontFamily: 'Inter, system-ui', fontSize: 7.5, fontWeight: 900,
          letterSpacing: '0.16em', color: SP.black,
          boxShadow: `0 2px 0 ${SP.black}`,
          flexShrink: 0, whiteSpace: 'nowrap',
        }}>EXAM</div>
      )}
    </div>
  );
}

function WeekBand({ theme, title, subtitle, days }) {
  const color = theme === 1 ? SP.hotPink : theme === 2 ? SP.goldBright : SP.flex;
  return (
    <div style={{ margin: '16px 14px 0' }}>
      {/* band header */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8, padding: '0 4px 6px',
      }}>
        <div style={{
          width: 4, height: 20, borderRadius: 2, background: color,
          boxShadow: `0 0 8px ${color}`,
        }}/>
        <div style={{
          fontFamily: 'Inter, system-ui', fontSize: 8, fontWeight: 900,
          letterSpacing: '0.26em', color: color, textTransform: 'uppercase',
        }}>WEEK {theme} · {title}</div>
        <div style={{
          flex: 1, height: 1,
          background: `linear-gradient(90deg, ${color} 0%, transparent 100%)`,
          opacity: 0.4,
        }}/>
        <div style={{
          fontFamily: 'Inter, system-ui', fontSize: 9, fontWeight: 600,
          color: 'rgba(255,249,240,0.45)',
        }}>{subtitle}</div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
        {days.map(d => <DayCard key={d.d} day={d}/>)}
      </div>
    </div>
  );
}

function CommitmentStrip() {
  return (
    <div style={{
      margin: '18px 14px 0',
      padding: '11px 14px',
      borderRadius: 12,
      background: 'rgba(255,215,0,0.08)',
      border: `1px dashed rgba(255,215,0,0.5)`,
      display: 'flex', alignItems: 'center', gap: 10,
    }}>
      <span style={{ fontSize: 20 }}>🤝</span>
      <div style={{ flex: 1 }}>
        <div style={{
          fontFamily: 'Inter, system-ui', fontSize: 8, fontWeight: 900,
          letterSpacing: '0.22em', color: SP.goldBright, textTransform: 'uppercase',
        }}>THE PACK PROMISE</div>
        <div style={{
          fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
          fontWeight: 500, fontSize: 12.5, color: SP.cream, marginTop: 1,
          lineHeight: 1.3,
        }}>25 min a night. Don't break the pack.</div>
      </div>
      <button style={{
        padding: '6px 10px',
        background: 'transparent',
        border: `1.5px solid ${SP.goldBright}`, borderRadius: 999,
        fontFamily: 'Inter, system-ui', fontSize: 9.5, fontWeight: 800,
        color: SP.goldBright, letterSpacing: '0.12em',
        cursor: 'pointer', flexShrink: 0,
      }}>EDIT</button>
    </div>
  );
}

function SpoilerAlertScreen({ tweaks }) {
  const w1 = PLAN.slice(0, 7);
  const w2 = PLAN.slice(7, 14);
  const w3 = PLAN.slice(14, 21);

  return (
    <div
      data-screen-label="10 Spoiler Alert (Study Plan)"
      style={{
        width: '100%', height: '100%',
        overflowY: 'auto', overflowX: 'hidden',
        position: 'relative',
        background: `
          radial-gradient(ellipse 90% 30% at 50% 0%, rgba(233, 30, 99, 0.22) 0%, transparent 55%),
          radial-gradient(ellipse 60% 40% at 50% 100%, rgba(255, 215, 0, 0.08) 0%, transparent 60%),
          linear-gradient(180deg, ${SP.plumDeep} 0%, ${SP.plumDeeper} 40%, ${SP.black} 100%)
        `,
      }}
    >
      {/* top chrome */}
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '54px 14px 10px' }}>
        <button style={{
          width: 30, height: 30, borderRadius: '50%',
          background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,249,240,0.2)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
        }}>
          <svg width="8" height="14" viewBox="0 0 8 14"><path d="M7 1L1 7l6 6" stroke={SP.cream} strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <div style={{
          fontFamily: 'Inter, system-ui', fontSize: 9, fontWeight: 800,
          letterSpacing: '0.24em', color: 'rgba(255,249,240,0.5)',
          textTransform: 'uppercase', alignSelf: 'center',
        }}>Study Plan</div>
        <button style={{
          width: 30, height: 30, borderRadius: '50%',
          background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,249,240,0.2)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
        }}>
          <svg width="12" height="12" viewBox="0 0 12 12"><circle cx="6" cy="3" r="1" fill={SP.cream}/><circle cx="6" cy="6" r="1" fill={SP.cream}/><circle cx="6" cy="9" r="1" fill={SP.cream}/></svg>
        </button>
      </div>

      <Countdown/>
      <TodaysDrop/>
      <CommitmentStrip/>

      <WeekBand theme={1} title="Foundations"       subtitle="Fair Housing focus" days={w1}/>
      <WeekBand theme={2} title="Contracts & $$$"   subtitle="The fun mess"       days={w2}/>
      <WeekBand theme={3} title="Finale Prep"       subtitle="The reunion looms"  days={w3}/>

      <div style={{ height: 28 }}/>

      <style>{`
        @keyframes livePulse { 0%,100% { opacity: 1; } 50% { opacity: 0.35; } }
        ::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}

Object.assign(window, { SpoilerAlertScreen });
