// Act Map — Screen 2 of 12.
// Season roadmap: 10 acts tied to GA real-estate exam domains.

const AM = {
  hotPink: '#E91E63',
  hotPinkDeep: '#B0124D',
  champagne: '#D4AF37',
  goldBright: '#FFD700',
  plumDeep: '#4A0E2E',
  plumDeeper: '#2A0519',
  black: '#0A0A0A',
  cream: '#FFF9F0',
};

const ACTS = [
  { n: 1, title: 'Welcome to SUR',          domain: 'License Law',        qs: 18, mins: 22, char: 'Lisa',     portrait: 'assets/Lisa_base.webp',     status: 'complete', stars: 3 },
  { n: 2, title: 'The Friend Group',        domain: 'Agency',             qs: 22, mins: 28, char: 'Stassi',   portrait: 'assets/Stassi_base.png',    status: 'complete', stars: 3 },
  { n: 3, title: "It's Not About the Pasta", domain: 'Contracts',         qs: 24, mins: 30, char: 'Ariana',   portrait: 'assets/Arinana_base.png',   status: 'complete', stars: 2 },
  { n: 4, title: 'Girls Night',             domain: 'Fair Housing',       qs: 16, mins: 20, char: 'Katie',    portrait: 'assets/Katie_base.png',     status: 'playing',  stars: 0 },
  { n: 5, title: 'The Affair',              domain: 'Disclosure',         qs: 20, mins: 26, char: 'Raquel',   portrait: 'assets/Raquel_base.png',    status: 'locked',   stars: 0 },
  { n: 6, title: "Sandoval's Band",         domain: 'Financing',          qs: 22, mins: 28, char: 'Sandoval', portrait: 'assets/Sandavol_base.png',  status: 'locked',   stars: 0 },
  { n: 7, title: 'Jax Lies',                domain: 'Ethics',             qs: 18, mins: 22, char: 'Jax',      portrait: 'assets/Jax_base.png',       status: 'locked',   stars: 0 },
  { n: 8, title: 'Scandoval',               domain: 'Closing',            qs: 24, mins: 32, char: 'Schwartz', portrait: 'assets/Schwartz_base.png',  status: 'locked',   stars: 0 },
  { n: 9, title: 'Finale Setup',            domain: 'GA-Specific Law',    qs: 20, mins: 26, char: 'James',    portrait: 'assets/James_base.png',     status: 'locked',   stars: 0 },
  { n: 10,title: 'The Reunion',             domain: 'Full Exam',          qs: 152,mins: 240,char: 'Andy',     portrait: 'assets/Andy_base.png',      status: 'locked',   stars: 0, finale: true },
];

// ─────────────────────────────────────────────────────────────
// Header
// ─────────────────────────────────────────────────────────────
function ActMapHeader({ progress }) {
  return (
    <div style={{ padding: '0 18px', position: 'relative' }}>
      {/* back + menu */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <button style={{
          width: 36, height: 36, borderRadius: '50%',
          background: 'rgba(255,255,255,0.08)',
          border: '1.5px solid rgba(255,224,236,0.18)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer',
        }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 2L4 7l5 5" stroke={AM.cream} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div style={{
          fontFamily: 'Inter, system-ui', fontSize: 10, fontWeight: 800,
          letterSpacing: '0.22em', color: 'rgba(255,224,236,0.5)',
          textTransform: 'uppercase',
        }}>Season 1 · 10 Acts</div>
        <div style={{
          width: 36, height: 36, borderRadius: '50%',
          background: 'rgba(255,255,255,0.08)',
          border: '1.5px solid rgba(255,224,236,0.18)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="3" cy="7" r="1.4" fill={AM.cream}/>
            <circle cx="7" cy="7" r="1.4" fill={AM.cream}/>
            <circle cx="11" cy="7" r="1.4" fill={AM.cream}/>
          </svg>
        </div>
      </div>

      {/* Title block */}
      <div style={{ textAlign: 'center', marginBottom: 4 }}>
        <div style={{
          fontFamily: 'Inter, system-ui', fontSize: 10, fontWeight: 800,
          letterSpacing: '0.3em', color: AM.goldBright, textTransform: 'uppercase',
          textShadow: '0 0 8px rgba(255,215,0,0.4)',
        }}>The Season Map</div>
        <div style={{
          fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
          fontWeight: 900, fontSize: 40, color: AM.cream,
          letterSpacing: -1, lineHeight: 1, marginTop: 6,
          textShadow: '0 2px 12px rgba(233,30,99,0.5)',
        }}>
          Your Real Estate<br/>Redemption Arc
        </div>
      </div>

      {/* Progress strip */}
      <div style={{
        marginTop: 18,
        padding: '12px 14px',
        borderRadius: 14,
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
          }}>{progress}%</div>
        </div>
        <div style={{
          height: 6, borderRadius: 3, overflow: 'hidden',
          background: 'rgba(10,10,10,0.5)',
          border: '0.5px solid rgba(255,215,0,0.25)',
        }}>
          <div style={{
            width: `${progress}%`, height: '100%',
            background: `linear-gradient(90deg, ${AM.hotPink} 0%, ${AM.goldBright} 100%)`,
            boxShadow: `0 0 10px ${AM.goldBright}`,
          }}/>
        </div>
        <div style={{
          marginTop: 6,
          fontFamily: 'Inter, system-ui', fontSize: 11, fontWeight: 500,
          color: 'rgba(255,249,240,0.65)',
        }}>
          Exam in <span style={{ color: AM.hotPink, fontWeight: 800 }}>18 days</span> · keep the drama going
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Stars (for complete acts)
// ─────────────────────────────────────────────────────────────
function Stars({ count, max = 3, size = 10 }) {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {Array.from({ length: max }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 10 10">
          <path d="M5 0.5l1.4 3 3.1.4-2.3 2.2.6 3.1L5 7.7 2.2 9.2l.6-3.1L.5 3.9l3.1-.4L5 .5z"
            fill={i < count ? AM.goldBright : 'rgba(255,249,240,0.15)'}
            stroke={i < count ? AM.black : 'transparent'}
            strokeWidth="0.5"
          />
        </svg>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Act card (row) — one per episode
// ─────────────────────────────────────────────────────────────
function ActCard({ act, side }) {
  const isLocked   = act.status === 'locked';
  const isPlaying  = act.status === 'playing';
  const isComplete = act.status === 'complete';
  const isFinale   = !!act.finale;

  // Side: 'left' means portrait on left, text right; 'right' = reverse
  const portraitLeft = side === 'left';

  const portraitBG = isFinale
    ? `radial-gradient(ellipse at 50% 40%, #8B1A4E 0%, ${AM.plumDeeper} 70%, ${AM.black} 100%)`
    : isLocked
      ? `radial-gradient(ellipse at 50% 40%, #3A0E2A 0%, ${AM.black} 80%)`
      : `radial-gradient(ellipse at 50% 40%, #5A1638 0%, ${AM.plumDeeper} 70%, ${AM.black} 100%)`;

  const borderColor = isPlaying ? AM.goldBright
                    : isComplete ? 'rgba(212,175,55,0.55)'
                    : isFinale ? AM.hotPink
                    : 'rgba(255,249,240,0.15)';

  const glow = isPlaying
    ? `0 0 0 1px ${AM.goldBright} inset, 0 10px 26px -6px rgba(255,215,0,0.5), 0 0 40px -4px rgba(255,215,0,0.35)`
    : isFinale
      ? `0 0 0 1px rgba(233,30,99,0.5) inset, 0 10px 26px -6px rgba(233,30,99,0.45)`
      : `0 6px 14px rgba(0,0,0,0.35)`;

  const statusPill = (() => {
    if (isComplete) return (
      <div style={pillBase(AM.goldBright, AM.black)}>
        <svg width="9" height="9" viewBox="0 0 9 9"><path d="M1 4.5L3.5 7 8 2" stroke={AM.black} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
        WATCHED
      </div>
    );
    if (isPlaying) return (
      <div style={pillBase(AM.hotPink, AM.cream)}>
        <span style={{
          width: 5, height: 5, borderRadius: '50%', background: AM.cream,
          animation: 'pulseDot 1.4s ease-in-out infinite',
        }}/>
        NOW PLAYING
      </div>
    );
    if (isFinale) return (
      <div style={pillBase(AM.black, AM.goldBright, AM.goldBright)}>
        <svg width="9" height="10" viewBox="0 0 9 10"><rect x="1.5" y="4" width="6" height="5" rx="1" stroke={AM.goldBright} strokeWidth="1" fill="none"/><path d="M3 4V2.8a1.5 1.5 0 013 0V4" stroke={AM.goldBright} strokeWidth="1" strokeLinecap="round" fill="none"/></svg>
        FINALE
      </div>
    );
    return (
      <div style={pillBase('rgba(255,249,240,0.08)', 'rgba(255,249,240,0.55)', 'rgba(255,249,240,0.2)')}>
        <svg width="9" height="10" viewBox="0 0 9 10"><rect x="1.5" y="4" width="6" height="5" rx="1" stroke="rgba(255,249,240,0.55)" strokeWidth="1" fill="none"/><path d="M3 4V2.8a1.5 1.5 0 013 0V4" stroke="rgba(255,249,240,0.55)" strokeWidth="1" strokeLinecap="round" fill="none"/></svg>
        LOCKED
      </div>
    );
  })();

  return (
    <div
      data-screen-label={`act-${act.n}`}
      style={{
        display: 'flex',
        flexDirection: portraitLeft ? 'row' : 'row-reverse',
        alignItems: 'stretch',
        gap: 0,
        borderRadius: 16,
        border: `2px solid ${AM.black}`,
        boxShadow: glow,
        background: AM.black,
        overflow: 'hidden',
        position: 'relative',
        outline: `1px solid ${borderColor}`,
        outlineOffset: -3,
        opacity: isLocked ? 0.78 : 1,
      }}
    >
      {/* Portrait panel */}
      <div style={{
        width: 108, flexShrink: 0,
        position: 'relative', overflow: 'hidden',
        background: portraitBG,
      }}>
        <img src={act.portrait} alt={act.char} style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center 12%',
          filter: isLocked ? 'grayscale(0.9) brightness(0.55)' : 'none',
        }}/>
        {/* Act number badge */}
        <div style={{
          position: 'absolute',
          top: 8, [portraitLeft ? 'left' : 'right']: 8,
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
        {/* Character nametag */}
        <div style={{
          position: 'absolute', left: 0, right: 0, bottom: 0,
          padding: '4px 8px 6px',
          background: `linear-gradient(180deg, transparent 0%, rgba(10,10,10,0.95) 80%)`,
          fontFamily: 'Inter, system-ui', fontSize: 9, fontWeight: 800,
          letterSpacing: '0.14em', color: AM.cream, textTransform: 'uppercase',
          textAlign: portraitLeft ? 'left' : 'right',
        }}>{act.char}</div>
      </div>

      {/* Info panel */}
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
            {statusPill}
          </div>
          <div style={{
            fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
            fontWeight: 900, fontSize: 17, lineHeight: 1.1,
            color: isLocked ? 'rgba(255,249,240,0.65)' : AM.cream,
            letterSpacing: -0.3, marginTop: 2,
            textShadow: isPlaying ? '0 1px 6px rgba(0,0,0,0.6)' : 'none',
          }}>{act.title}</div>

          <div style={{
            marginTop: 6,
            display: 'inline-flex', alignItems: 'center', gap: 5,
            padding: '2px 7px 3px',
            borderRadius: 4,
            background: 'rgba(255,215,0,0.1)',
            border: '1px solid rgba(255,215,0,0.3)',
            fontFamily: 'Inter, system-ui', fontSize: 9, fontWeight: 700,
            color: AM.goldBright,
            letterSpacing: '0.06em', textTransform: 'uppercase',
          }}>
            📜 {act.domain}
          </div>
        </div>

        <div style={{
          marginTop: 10,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <div style={{
            fontFamily: 'Inter, system-ui', fontSize: 10, fontWeight: 500,
            color: 'rgba(255,249,240,0.55)',
          }}>
            {act.qs} Qs · {act.mins} min
          </div>
          {isComplete ? <Stars count={act.stars}/>
            : isPlaying ? (
              <div style={{
                fontFamily: 'Inter, system-ui', fontSize: 10, fontWeight: 800,
                color: AM.hotPink, letterSpacing: '0.08em',
                textShadow: '0 0 6px rgba(233,30,99,0.6)',
              }}>▶ RESUME</div>
            ) : <div style={{ width: 30, height: 10 }}/>}
        </div>
      </div>
    </div>
  );
}

function pillBase(bg, fg, border) {
  return {
    display: 'inline-flex', alignItems: 'center', gap: 4,
    padding: '3px 7px', borderRadius: 999,
    background: bg,
    border: border ? `1px solid ${border}` : `1px solid ${AM.black}`,
    fontFamily: 'Inter, system-ui', fontSize: 8, fontWeight: 800,
    color: fg, letterSpacing: '0.1em',
  };
}

// ─────────────────────────────────────────────────────────────
// Screen composition
// ─────────────────────────────────────────────────────────────
function ActMapScreen({ tweaks }) {
  return (
    <div
      data-screen-label="02 Act Map"
      style={{
        width: '100%', height: '100%',
        overflowY: 'auto', overflowX: 'hidden',
        position: 'relative',
        background: `
          radial-gradient(ellipse 90% 30% at 50% 0%, rgba(233, 30, 99, 0.32) 0%, transparent 60%),
          radial-gradient(ellipse 60% 25% at 90% 60%, rgba(212, 175, 55, 0.12) 0%, transparent 60%),
          linear-gradient(180deg, ${AM.plumDeep} 0%, ${AM.plumDeeper} 35%, ${AM.black} 100%)
        `,
      }}
    >
      <StarField/>

      {/* Curtain swag at top */}
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
          {/* draped curtain edge */}
          <path d="M0,0 L375,0 L375,100 Q350,140 325,110 Q300,150 275,115 Q250,155 225,120 Q200,160 175,115 Q150,155 125,118 Q100,150 75,112 Q50,140 25,108 Q12,125 0,100 Z" fill="url(#curtain)" opacity="0.55"/>
        </svg>
      </div>

      <div style={{ position: 'relative', zIndex: 1, paddingBottom: 100 }}>
        <div style={{ height: 55 }}/>
        <ActMapHeader progress={tweaks.examReadiness}/>

        {/* Acts stack */}
        <div style={{
          padding: '24px 16px 0',
          display: 'flex', flexDirection: 'column', gap: 14,
          position: 'relative',
        }}>
          {/* Gold spine rope */}
          <div style={{
            position: 'absolute',
            left: '50%', top: 20, bottom: 20,
            width: 2, transform: 'translateX(-0.5px)',
            background: `repeating-linear-gradient(180deg, ${AM.goldBright} 0px, ${AM.goldBright} 5px, transparent 5px, transparent 11px)`,
            opacity: 0.35, zIndex: 0,
          }}/>
          {ACTS.map((act, i) => (
            <ActCard key={act.n} act={act} side={i % 2 === 0 ? 'left' : 'right'}/>
          ))}
        </div>

        {/* Footer signature */}
        <div style={{
          marginTop: 28, textAlign: 'center',
          fontFamily: '"Bonheur Royale", cursive', fontSize: 22,
          color: AM.goldBright, opacity: 0.6,
          textShadow: '0 0 12px rgba(255,215,0,0.4)',
        }}>End of Season One</div>

        <div style={{ height: 30 }}/>
      </div>

      <style>{`
        @keyframes pulseDot { 0%,100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.5; transform: scale(0.85); } }
        @keyframes twinkle { 0%,100% { opacity: 0.2; } 50% { opacity: 1; } }
        ::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}

// reuse StarField from home-screen.jsx if available; otherwise inline
function StarField() {
  if (window._StarField) return window._StarField();
  const stars = React.useMemo(() => {
    const out = []; let seed = 11;
    const rand = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
    for (let i = 0; i < 55; i++) {
      out.push({
        x: rand()*100, y: rand()*100,
        size: rand()*1.4 + 0.5,
        opacity: rand()*0.6 + 0.15,
        delay: rand()*4, duration: rand()*3 + 2,
        tint: rand()>0.7 ? '#FFD700' : '#FFE0EC',
      });
    }
    return out;
  }, []);
  return (
    <div style={{ position:'absolute', inset:0, pointerEvents:'none', zIndex:0 }}>
      {stars.map((s,i)=>(
        <div key={i} style={{
          position:'absolute', left:`${s.x}%`, top:`${s.y}%`,
          width:s.size, height:s.size, borderRadius:'50%',
          background:s.tint, opacity:s.opacity,
          boxShadow:`0 0 ${s.size*2}px ${s.tint}`,
          animation:`twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
        }}/>
      ))}
    </div>
  );
}

Object.assign(window, { ActMapScreen });
