// Screen 5 — Jackhole! (Wrong answer takeover)

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

// Dripping confetti — broken bells, sad stickers
function JackConfetti() {
  const pieces = React.useMemo(() => {
    const out = []; let seed = 41;
    const rand = () => { seed = (seed*9301 + 49297) % 233280; return seed/233280; };
    const shapes = ['brokenBell', 'x', 'sad', 'crack'];
    for (let i = 0; i < 32; i++) {
      out.push({
        x: rand()*100, y: rand()*80,
        size: rand()*10 + 6,
        rot: rand()*40 - 20,
        shape: shapes[Math.floor(rand()*shapes.length)],
        color: rand() > 0.5 ? J.red : J.redDeep,
        delay: rand()*2,
        duration: rand()*2.5 + 2.5,
      });
    }
    return out;
  }, []);

  return (
    <div style={{ position:'absolute', inset:0, pointerEvents:'none', zIndex:1, overflow:'hidden' }}>
      {pieces.map((p, i) => (
        <div key={i} style={{
          position:'absolute', left:`${p.x}%`, top:`${p.y}%`,
          width: p.size, height: p.size,
          transform: `rotate(${p.rot}deg)`,
          animation: `dropPiece ${p.duration}s ease-in-out ${p.delay}s infinite`,
          filter: `drop-shadow(0 0 4px ${p.color})`,
        }}>
          {p.shape === 'brokenBell' && (
            <svg viewBox="0 0 10 10" width="100%" height="100%">
              <path d="M5 0.5C3 0.5 2 1.8 2 3.5v2.5L8 6V3.5C8 1.8 7 0.5 5 0.5z" fill={p.color} stroke={J.black} strokeWidth="0.4"/>
              <path d="M2 6L1.5 7H8.5L8 6z" fill={p.color} stroke={J.black} strokeWidth="0.4"/>
              <path d="M3 7.5l1.5 2M6.5 7.5l-1 2" stroke={J.black} strokeWidth="0.5" strokeLinecap="round"/>
            </svg>
          )}
          {p.shape === 'x' && (
            <svg viewBox="0 0 10 10" width="100%" height="100%">
              <circle cx="5" cy="5" r="4.5" fill={p.color} stroke={J.black} strokeWidth="0.4"/>
              <path d="M3 3l4 4M7 3l-4 4" stroke={J.cream} strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          )}
          {p.shape === 'sad' && (
            <svg viewBox="0 0 10 10" width="100%" height="100%">
              <circle cx="5" cy="5" r="4.5" fill={p.color} stroke={J.black} strokeWidth="0.4"/>
              <circle cx="3.6" cy="4" r="0.5" fill={J.black}/>
              <circle cx="6.4" cy="4" r="0.5" fill={J.black}/>
              <path d="M3.5 7.5 Q5 6 6.5 7.5" stroke={J.black} strokeWidth="0.6" fill="none" strokeLinecap="round"/>
            </svg>
          )}
          {p.shape === 'crack' && (
            <svg viewBox="0 0 10 10" width="100%" height="100%">
              <path d="M5 0.5L4 3L6 4.5L3.5 7L5.5 9.5" stroke={p.color} strokeWidth="1.4" fill="none" strokeLinecap="round"/>
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}

// JACKHOLE! red foil dripping title
function JackholeTitle() {
  return (
    <div style={{ position: 'relative', textAlign: 'center', zIndex: 3 }}>
      <div style={{
        position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
        pointerEvents: 'none',
      }}>
        <div style={{
          width: 300, height: 240, borderRadius: '50%',
          background: `radial-gradient(circle, rgba(244,63,94,0.55) 0%, transparent 65%)`,
          filter: 'blur(10px)',
        }}/>
      </div>
      <div style={{
        fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
        fontWeight: 900, fontSize: 70, lineHeight: 0.9,
        letterSpacing: -2.5,
        background: `linear-gradient(180deg, ${J.red} 0%, ${J.hotPink} 40%, ${J.redDeep} 70%, ${J.red} 100%)`,
        WebkitBackgroundClip: 'text', backgroundClip: 'text',
        WebkitTextStroke: `2.5px ${J.black}`,
        color: 'transparent',
        textShadow: `
          0 4px 0 ${J.black},
          0 8px 22px rgba(244, 63, 94, 0.5),
          0 0 42px rgba(159, 29, 58, 0.5)
        `,
        position: 'relative',
        transform: 'rotate(-4deg)',
      }}>
        JACKHOLE!
      </div>
      <div style={{
        marginTop: -2,
        fontFamily: '"Bonheur Royale", cursive', fontSize: 30,
        color: J.cream,
        textShadow: `0 0 10px rgba(244,63,94,0.8), 0 0 22px rgba(244,63,94,0.4), 0 2px 4px rgba(0,0,0,0.5)`,
        transform: 'rotate(1deg)',
      }}>
        oh, honey...
      </div>
    </div>
  );
}

// Andy with Jackhole sign
function AndyJackhole() {
  return (
    <div style={{
      position: 'relative', marginTop: 8,
      display: 'flex', justifyContent: 'center', gap: 0,
      zIndex: 3,
    }}>
      {/* red spotlight */}
      <div style={{
        position: 'absolute', inset: '-20px -20% 0',
        background: `radial-gradient(ellipse at 50% 40%, rgba(244,63,94,0.28) 0%, transparent 60%)`,
        pointerEvents: 'none',
      }}/>

      {/* Katie reacting — smaller, left, in the shadow */}
      <img src="assets/Katie_base.png" alt="Katie disappointed" style={{
        height: 150, width: 'auto',
        marginRight: -18, alignSelf: 'flex-end',
        filter: 'drop-shadow(0 6px 14px rgba(0,0,0,0.6)) grayscale(0.3) brightness(0.75)',
        transform: 'translateY(20px) rotate(-4deg)',
        position: 'relative', zIndex: 1,
      }}/>

      <img src="assets/ANDY_jackhole.png" alt="Andy holding Jackhole sign" style={{
        height: 240, width: 'auto',
        filter: 'drop-shadow(0 10px 22px rgba(0,0,0,0.7))',
        position: 'relative', zIndex: 2,
        animation: 'jackSway 2.2s ease-in-out infinite',
      }}/>

      {/* "SIDE-EYE" sticker on Katie */}
      <div style={{
        position: 'absolute', top: 10, left: 40, zIndex: 3,
        padding: '3px 8px',
        background: J.black,
        border: `1.5px solid ${J.cream}`,
        borderRadius: 3,
        transform: 'rotate(-8deg)',
        boxShadow: `0 3px 0 rgba(0,0,0,0.6)`,
      }}>
        <div style={{
          fontFamily: 'Inter, system-ui', fontSize: 8, fontWeight: 900,
          color: J.cream, letterSpacing: '0.2em',
        }}>👀 SIDE-EYE</div>
      </div>
    </div>
  );
}

// The teaching card — bigger than Mazel's (more learning content)
function TeachingCard() {
  return (
    <div style={{
      margin: '0 18px',
      position: 'relative',
      zIndex: 3,
    }}>
      <div style={{
        padding: '14px 16px 16px',
        borderRadius: 16,
        background: J.cream,
        border: `2px solid ${J.black}`,
        boxShadow: `0 6px 0 ${J.black}, 0 12px 28px rgba(0,0,0,0.5)`,
        position: 'relative',
      }}>
        {/* WRONG stamp */}
        <div style={{
          position: 'absolute', top: -12, right: 14,
          padding: '3px 10px',
          background: J.red,
          border: `1.5px solid ${J.black}`,
          borderRadius: 999,
          boxShadow: `0 2px 0 ${J.black}`,
          fontFamily: 'Inter, system-ui', fontSize: 9, fontWeight: 900,
          letterSpacing: '0.16em', color: J.cream,
          display: 'flex', alignItems: 'center', gap: 4,
        }}>
          <svg width="10" height="10" viewBox="0 0 10 10"><path d="M2 2l6 6M8 2l-6 6" stroke={J.cream} strokeWidth="2" strokeLinecap="round"/></svg>
          MISSED IT
        </div>

        {/* YOUR PICK */}
        <div style={{
          fontFamily: 'Inter, system-ui', fontSize: 9, fontWeight: 800,
          letterSpacing: '0.2em', color: J.redDeep, textTransform: 'uppercase',
        }}>YOU SAID</div>

        <div style={{
          marginTop: 4,
          fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
          fontWeight: 700, fontSize: 14, lineHeight: 1.3, color: 'rgba(10,10,10,0.5)',
          letterSpacing: -0.2,
          textDecoration: 'line-through', textDecorationColor: J.red,
          textDecorationThickness: 2,
        }}>
          "Yes, tons of families live here — great schools too."
        </div>

        {/* Divider */}
        <div style={{
          height: 1, background: `linear-gradient(90deg, transparent 0%, ${J.black} 20%, ${J.black} 80%, transparent 100%)`,
          opacity: 0.2, margin: '12px 0',
        }}/>

        {/* CORRECT */}
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
          WHAT KATIE NEEDED
        </div>

        <div style={{
          marginTop: 4,
          fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
          fontWeight: 700, fontSize: 14, lineHeight: 1.3, color: J.black,
          letterSpacing: -0.2,
        }}>
          "I can share school ratings and demographics — let me pull those up."
        </div>

        {/* Divider */}
        <div style={{
          height: 1, background: `linear-gradient(90deg, transparent 0%, ${J.black} 20%, ${J.black} 80%, transparent 100%)`,
          opacity: 0.2, margin: '12px 0',
        }}/>

        {/* WHY IT MATTERS — more detail than Mazel card */}
        <div style={{
          fontFamily: 'Inter, system-ui', fontSize: 9, fontWeight: 800,
          letterSpacing: '0.2em', color: J.redDeep, textTransform: 'uppercase',
        }}>WHY IT MATTERS</div>

        <div style={{
          marginTop: 4,
          fontFamily: 'Inter, system-ui', fontSize: 12.5, lineHeight: 1.45,
          color: J.black, fontWeight: 500,
        }}>
          Answering "good for kids?" steers the buyer based on <span style={{ background: 'rgba(244,63,94,0.25)', padding: '0 3px' }}>familial status</span> — a protected class. This is <b>steering</b>, a Fair Housing violation that can cost Katie her license and <b>$16,000+ per incident</b>.
        </div>

        {/* Common traps */}
        <div style={{
          marginTop: 10,
          padding: '8px 10px',
          borderRadius: 8,
          background: 'rgba(244,63,94,0.08)',
          border: `1px dashed ${J.redDeep}`,
        }}>
          <div style={{
            fontFamily: 'Inter, system-ui', fontSize: 8, fontWeight: 900,
            letterSpacing: '0.2em', color: J.redDeep, textTransform: 'uppercase',
            marginBottom: 4,
          }}>⚠ OTHER TRAPS</div>
          <div style={{
            fontFamily: 'Inter, system-ui', fontSize: 11, lineHeight: 1.4,
            color: 'rgba(10,10,10,0.75)',
          }}>
            "Safe neighborhood" · "Your kind of community" · "Nearby church" — all steering. Always redirect to public data.
          </div>
        </div>

        {/* Footer */}
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
          }}>
            📜 Fair Housing · §804(c)
          </div>
          <button style={{
            padding: 0, background: 'transparent', border: 'none',
            fontFamily: 'Inter, system-ui', fontSize: 10, fontWeight: 800,
            letterSpacing: '0.12em', color: J.redDeep, textTransform: 'uppercase',
            cursor: 'pointer', textDecoration: 'underline', textDecorationThickness: 1.5,
          }}>READ CASE LAW →</button>
        </div>
      </div>
    </div>
  );
}

// Stat strip — streak BROKEN
function JackStatStrip({ prevStreak, inARow }) {
  return (
    <div style={{
      margin: '14px 18px 0',
      display: 'flex', gap: 8, zIndex: 3, position: 'relative',
    }}>
      {/* Streak broken */}
      <div style={{
        flex: 1.2,
        padding: '8px 10px',
        borderRadius: 12,
        background: `linear-gradient(180deg, rgba(159,29,58,0.5) 0%, rgba(10,10,10,0.85) 100%)`,
        border: `1px solid ${J.red}`,
        boxShadow: 'inset 0 0 0 1px rgba(244,63,94,0.3)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          fontFamily: 'Inter, system-ui', fontSize: 8, fontWeight: 800,
          letterSpacing: '0.18em', color: J.red, textTransform: 'uppercase',
          marginBottom: 2,
        }}>STREAK BROKEN</div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
          <span style={{ fontSize: 14, filter: 'grayscale(0.7)' }}>💨</span>
          <span style={{
            fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
            fontWeight: 900, fontSize: 22, color: 'rgba(255,249,240,0.4)',
            lineHeight: 1,
            textDecoration: 'line-through', textDecorationColor: J.red,
            textDecorationThickness: 2,
          }}>{prevStreak}</span>
          <span style={{
            fontFamily: 'Inter, system-ui', fontSize: 10, fontWeight: 800,
            color: J.red, letterSpacing: '0.06em',
          }}>→ 0</span>
        </div>
      </div>

      {/* In a row reset */}
      <div style={{
        flex: 1,
        padding: '8px 10px',
        borderRadius: 12,
        background: `linear-gradient(180deg, rgba(74,14,46,0.85) 0%, rgba(10,10,10,0.85) 100%)`,
        border: `1px solid rgba(255,249,240,0.2)`,
      }}>
        <div style={{
          fontFamily: 'Inter, system-ui', fontSize: 8, fontWeight: 800,
          letterSpacing: '0.18em', color: 'rgba(255,249,240,0.6)', textTransform: 'uppercase',
          marginBottom: 2,
        }}>IN A ROW</div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
          <span style={{
            fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
            fontWeight: 900, fontSize: 22, color: 'rgba(255,249,240,0.4)',
            lineHeight: 1,
            textDecoration: 'line-through', textDecorationColor: J.red,
            textDecorationThickness: 2,
          }}>{inARow}</span>
          <span style={{
            fontFamily: 'Inter, system-ui', fontSize: 10, fontWeight: 800,
            color: J.red, letterSpacing: '0.06em',
          }}>→ 0</span>
        </div>
      </div>
    </div>
  );
}

// Safety-net: streak insurance offer
function StreakInsurance() {
  return (
    <div style={{
      margin: '10px 18px 0',
      padding: '10px 12px',
      borderRadius: 12,
      background: `linear-gradient(90deg, rgba(255,215,0,0.14) 0%, rgba(233,30,99,0.1) 100%)`,
      border: `1px dashed ${J.goldBright}`,
      display: 'flex', alignItems: 'center', gap: 10,
      zIndex: 3, position: 'relative',
    }}>
      <span style={{ fontSize: 22 }}>🛡️</span>
      <div style={{ flex: 1 }}>
        <div style={{
          fontFamily: 'Inter, system-ui', fontSize: 9, fontWeight: 900,
          letterSpacing: '0.16em', color: J.goldBright, textTransform: 'uppercase',
        }}>Lisa's on your side</div>
        <div style={{
          fontFamily: 'Inter, system-ui', fontSize: 11, fontWeight: 500,
          color: 'rgba(255,249,240,0.8)', marginTop: 1,
        }}>
          Get it right next try and your <span style={{ color: J.goldBright, fontWeight: 700 }}>6-day streak</span> is saved.
        </div>
      </div>
    </div>
  );
}

// CTAs
function JackCTAs() {
  return (
    <div style={{
      margin: '14px 18px 0',
      position: 'relative', zIndex: 3,
      display: 'flex', flexDirection: 'column', gap: 10,
    }}>
      <button style={{
        width: '100%',
        padding: '14px 18px',
        borderRadius: 14,
        background: `linear-gradient(180deg, ${J.red} 0%, ${J.redDeep} 100%)`,
        border: `2px solid ${J.black}`,
        boxShadow: `
          0 4px 0 ${J.black},
          0 12px 28px -4px rgba(244, 63, 94, 0.6),
          inset 0 1px 0 rgba(255,255,255,0.25)
        `,
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
        cursor: 'pointer',
      }}>
        <svg width="16" height="16" viewBox="0 0 16 16"><path d="M3 8a5 5 0 015-5 5 5 0 014.5 2.8M13 3v3h-3" stroke={J.cream} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
        <span style={{
          fontFamily: 'Inter, system-ui', fontSize: 14, fontWeight: 900,
          color: J.cream, letterSpacing: '0.06em', textTransform: 'uppercase',
        }}>Give Me Another Shot</span>
      </button>

      <button style={{
        width: '100%',
        padding: '12px 18px',
        borderRadius: 12,
        background: 'rgba(255,255,255,0.06)',
        border: `1.5px solid rgba(255,249,240,0.3)`,
        backdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        cursor: 'pointer',
      }}>
        <svg width="14" height="14" viewBox="0 0 14 14"><path d="M7 1a6 6 0 100 12A6 6 0 007 1zm0 3v3l2 1.5" stroke={J.cream} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
        <span style={{
          fontFamily: 'Inter, system-ui', fontSize: 12, fontWeight: 800,
          color: J.cream, letterSpacing: '0.08em', textTransform: 'uppercase',
        }}>Rewatch the scene</span>
      </button>
    </div>
  );
}

function JackholeScreen({ tweaks }) {
  return (
    <div
      data-screen-label="05 Jackhole (Wrong Reveal)"
      style={{
        width: '100%', height: '100%',
        overflowY: 'auto', overflowX: 'hidden',
        position: 'relative',
        background: `
          radial-gradient(ellipse 90% 50% at 50% 15%, rgba(244, 63, 94, 0.35) 0%, transparent 55%),
          radial-gradient(ellipse 80% 40% at 50% 50%, rgba(159, 29, 58, 0.3) 0%, transparent 60%),
          linear-gradient(180deg, ${J.redDark} 0%, ${J.plumDeeper} 45%, ${J.black} 100%)
        `,
      }}
    >
      {/* Red light rays */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 340,
        background: `conic-gradient(from 180deg at 50% 0%,
          transparent 0deg,
          rgba(244,63,94,0.1) 20deg, transparent 40deg,
          rgba(244,63,94,0.14) 60deg, transparent 80deg,
          rgba(244,63,94,0.08) 100deg, transparent 120deg,
          rgba(244,63,94,0.12) 160deg, transparent 180deg,
          rgba(244,63,94,0.1) 220deg, transparent 240deg,
          rgba(244,63,94,0.14) 280deg, transparent 320deg,
          transparent 360deg)`,
        pointerEvents: 'none', zIndex: 0,
        maskImage: 'linear-gradient(180deg, black 0%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(180deg, black 0%, transparent 100%)',
      }}/>

      <JackConfetti/>

      <div style={{ position: 'relative', zIndex: 2, paddingBottom: 40 }}>
        <div style={{ height: 50 }}/>

        <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '0 14px' }}>
          <button style={{
            width: 34, height: 34, borderRadius: '50%',
            background: 'rgba(10,10,10,0.55)',
            border: '1px solid rgba(255,224,236,0.2)',
            backdropFilter: 'blur(10px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer',
          }}>
            <svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 2l8 8M10 2l-8 8" stroke={J.cream} strokeWidth="1.8" strokeLinecap="round"/></svg>
          </button>
        </div>

        <JackholeTitle/>
        <AndyJackhole/>

        <div style={{ marginTop: 10 }}>
          <TeachingCard/>
        </div>

        <JackStatStrip prevStreak={tweaks.prevStreak} inARow={tweaks.prevInARow}/>

        {tweaks.showInsurance && <StreakInsurance/>}

        <JackCTAs/>

        <div style={{ height: 30 }}/>
      </div>

      <style>{`
        @keyframes jackSway {
          0%, 100% { transform: rotate(-1deg); }
          50% { transform: rotate(2deg); }
        }
        @keyframes dropPiece {
          0% { transform: translateY(0) rotate(-12deg); opacity: 0.85; }
          100% { transform: translateY(20px) rotate(12deg); opacity: 0.55; }
        }
        ::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}

Object.assign(window, { JackholeScreen });
