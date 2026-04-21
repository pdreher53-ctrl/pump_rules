// Screen 12 — The Streak Break

const SB = {
  hotPink: '#E91E63',
  hotPinkDeep: '#B0124D',
  goldBright: '#FFD700',
  champagne: '#D4AF37',
  goldDeep: '#A8820E',
  plumDeep: '#4A0E2E',
  plumDeeper: '#2A0519',
  plumWet: '#1A0612',
  black: '#0A0A0A',
  cream: '#FFF9F0',
  mascara: '#1C1620',
  rain: 'rgba(180, 200, 230, 0.12)',
};

// ─────────────────────────────────────────────────────────────
// BACKGROUND RAIN + STORM
// ─────────────────────────────────────────────────────────────
function StormBackground() {
  return (
    <>
      {/* rain streaks - vertical lines */}
      <svg style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        pointerEvents: 'none', opacity: 0.35,
      }} preserveAspectRatio="none" viewBox="0 0 375 812">
        {Array.from({ length: 42 }).map((_, i) => {
          const x = (i * 23 + (i % 3) * 11) % 375;
          const y = (i * 47) % 812;
          const len = 28 + (i % 4) * 12;
          return (
            <line key={i} x1={x} y1={y} x2={x - 4} y2={y + len}
              stroke="rgba(180,200,230,0.5)" strokeWidth={i % 5 === 0 ? 1.2 : 0.6}/>
          );
        })}
      </svg>
      {/* heavy vignette */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: `radial-gradient(ellipse 80% 60% at 50% 40%, transparent 0%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0.75) 100%)`,
      }}/>
    </>
  );
}

// ─────────────────────────────────────────────────────────────
// "AND…CUT." BANNER
// ─────────────────────────────────────────────────────────────
function CutBanner() {
  return (
    <div style={{
      position: 'relative', zIndex: 2,
      margin: '54px 14px 0',
      padding: '9px 14px',
      background: SB.black,
      border: `2px solid ${SB.cream}`,
      borderRadius: 6,
      boxShadow: `4px 4px 0 ${SB.hotPinkDeep}, 0 0 24px rgba(0,0,0,0.8)`,
      display: 'flex', alignItems: 'center', gap: 10,
      transform: 'rotate(-1.5deg)',
    }}>
      <div style={{
        fontFamily: 'Inter, system-ui', fontSize: 7, fontWeight: 900,
        letterSpacing: '0.2em', color: SB.cream,
        padding: '2px 6px',
        background: SB.hotPink, border: `1px solid ${SB.cream}`,
        borderRadius: 3,
      }}>DIRECTOR</div>
      <div style={{
        fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
        fontWeight: 900, fontSize: 22, color: SB.cream,
        letterSpacing: -0.3, lineHeight: 1, flex: 1,
      }}>And… <span style={{ color: SB.hotPink }}>cut.</span></div>
      <div style={{
        fontFamily: 'Courier New, monospace', fontSize: 8, fontWeight: 700,
        color: 'rgba(255,249,240,0.5)', letterSpacing: '0.1em', textAlign: 'right',
      }}>TAKE 3<br/>BLOWN</div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// SHATTERED CROWN HERO
// ─────────────────────────────────────────────────────────────
function ShatteredCrown() {
  return (
    <div style={{
      position: 'relative', zIndex: 2,
      margin: '24px auto 0', width: 'calc(100% - 28px)',
      padding: '28px 16px 18px',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
    }}>
      {/* Shattered crown SVG */}
      <div style={{ position: 'relative', width: 200, height: 110 }}>
        <svg width="200" height="110" viewBox="0 0 200 110" style={{ filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.6))' }}>
          <defs>
            <linearGradient id="crownGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#FFE880"/>
              <stop offset="0.45" stopColor={SB.goldBright}/>
              <stop offset="1" stopColor={SB.goldDeep}/>
            </linearGradient>
            <filter id="shatterGlow">
              <feGaussianBlur stdDeviation="1.5"/>
              <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>
          {/* LEFT half of crown */}
          <g transform="translate(-12, 4) rotate(-10, 50, 60)">
            <path d="M20 70 L28 30 L42 60 L55 25 L68 60 L82 35 L95 70 Z"
                  fill="url(#crownGrad)" stroke={SB.black} strokeWidth="2.5" strokeLinejoin="round" opacity="0.85"/>
            <path d="M20 70 L95 70 L95 82 L20 82 Z" fill="url(#crownGrad)" stroke={SB.black} strokeWidth="2.5"/>
            <circle cx="28" cy="30" r="3" fill={SB.hotPink} stroke={SB.black} strokeWidth="1.2"/>
            <circle cx="55" cy="25" r="3" fill={SB.hotPink} stroke={SB.black} strokeWidth="1.2"/>
            {/* 3 numeral fragment */}
            <text x="40" y="79" fontFamily="Playfair Display" fontStyle="italic" fontWeight="900"
                  fontSize="16" fill={SB.black}>3</text>
          </g>
          {/* RIGHT half of crown */}
          <g transform="translate(16, 6) rotate(12, 150, 60)">
            <path d="M105 70 L118 35 L132 60 L145 25 L158 60 L172 30 L180 70 Z"
                  fill="url(#crownGrad)" stroke={SB.black} strokeWidth="2.5" strokeLinejoin="round" opacity="0.78"/>
            <path d="M105 70 L180 70 L180 82 L105 82 Z" fill="url(#crownGrad)" stroke={SB.black} strokeWidth="2.5"/>
            <circle cx="145" cy="25" r="3" fill={SB.hotPink} stroke={SB.black} strokeWidth="1.2"/>
            <circle cx="172" cy="30" r="3" fill={SB.hotPink} stroke={SB.black} strokeWidth="1.2"/>
          </g>
          {/* crack lines between */}
          <g stroke={SB.cream} strokeWidth="1.5" fill="none" opacity="0.65" strokeLinecap="round">
            <path d="M96 40 L92 55 L100 62 L94 75"/>
            <path d="M104 45 L108 58 L102 66 L106 78"/>
            <path d="M98 50 L102 52" strokeWidth="0.8"/>
          </g>
          {/* gold shards falling */}
          <g fill="url(#crownGrad)" stroke={SB.black} strokeWidth="1">
            <polygon points="40,98 45,102 38,106" opacity="0.7"/>
            <polygon points="120,95 127,100 121,105" opacity="0.6"/>
            <polygon points="85,100 90,104 84,108" opacity="0.5"/>
            <polygon points="155,92 160,96 153,100" opacity="0.65"/>
          </g>
        </svg>
        {/* dripping mascara accent under */}
        <div style={{
          position: 'absolute', bottom: -4, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', gap: 3,
        }}>
          {[0,1,2].map(i => (
            <div key={i} style={{
              width: 3, height: 8 + i * 3,
              background: `linear-gradient(180deg, ${SB.mascara} 0%, transparent 100%)`,
              borderRadius: '0 0 2px 2px',
              opacity: 0.6,
            }}/>
          ))}
        </div>
      </div>

      {/* headline */}
      <div style={{
        marginTop: 14,
        fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
        fontWeight: 900, fontSize: 32, color: SB.cream,
        lineHeight: 1, textAlign: 'center', letterSpacing: -0.8,
        textShadow: `0 2px 16px rgba(0,0,0,0.8)`,
      }}>The streak<br/><span style={{ color: SB.hotPink, textShadow: `0 0 18px ${SB.hotPink}` }}>shattered.</span></div>
      <div style={{
        marginTop: 10,
        fontFamily: 'Inter, system-ui', fontSize: 10.5, fontWeight: 500,
        color: 'rgba(255,249,240,0.7)',
        fontStyle: 'italic', textAlign: 'center', lineHeight: 1.45,
        maxWidth: 290,
      }}>One wrong answer on a streak-2. No Rawt in Hail tonight, love. Mascara's running.</div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// RIPPED SCORECARD
// ─────────────────────────────────────────────────────────────
function RippedScorecard() {
  return (
    <div style={{
      position: 'relative', zIndex: 2,
      margin: '16px 14px 0',
      display: 'flex', alignItems: 'stretch', gap: 2,
      justifyContent: 'center',
    }}>
      {/* "2" card — torn on right */}
      <div style={{
        padding: '14px 22px 14px 18px',
        background: `linear-gradient(135deg, #F5E8D0 0%, #E8D4A8 100%)`,
        color: SB.black,
        border: `1.5px solid ${SB.black}`,
        borderRight: 'none',
        clipPath: 'polygon(0 0, 100% 4%, 94% 18%, 100% 32%, 92% 48%, 100% 62%, 96% 78%, 100% 92%, 0 100%)',
        boxShadow: `-3px 3px 0 ${SB.goldDeep}`,
        transform: 'rotate(-2.5deg)',
      }}>
        <div style={{
          fontFamily: 'Inter, system-ui', fontSize: 7.5, fontWeight: 900,
          letterSpacing: '0.26em', color: SB.goldDeep,
        }}>STREAK</div>
        <div style={{
          fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
          fontWeight: 900, fontSize: 56, color: SB.black,
          lineHeight: 0.95, marginTop: -4,
        }}>2</div>
      </div>
      {/* arrow */}
      <div style={{
        display: 'flex', alignItems: 'center', padding: '0 4px',
      }}>
        <svg width="24" height="16" viewBox="0 0 24 16">
          <path d="M1 8h20M16 2l6 6-6 6" stroke={SB.hotPink} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"
                style={{ filter: `drop-shadow(0 0 4px ${SB.hotPink})` }}/>
        </svg>
      </div>
      {/* "0" card — smaller, tilted other way */}
      <div style={{
        padding: '14px 16px',
        background: SB.black,
        color: SB.cream,
        border: `1.5px solid ${SB.hotPink}`,
        boxShadow: `0 0 18px rgba(233,30,99,0.45), 3px 3px 0 ${SB.hotPinkDeep}`,
        transform: 'rotate(3deg)',
      }}>
        <div style={{
          fontFamily: 'Inter, system-ui', fontSize: 7.5, fontWeight: 900,
          letterSpacing: '0.26em', color: SB.hotPink,
        }}>NOW</div>
        <div style={{
          fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
          fontWeight: 900, fontSize: 56, color: SB.cream,
          lineHeight: 0.95, marginTop: -4,
          textShadow: `0 0 18px ${SB.hotPink}`,
        }}>0</div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// LISA SAFETY NET
// ─────────────────────────────────────────────────────────────
function LisaSafetyNet() {
  return (
    <div style={{
      position: 'relative', zIndex: 2,
      margin: '24px 14px 0',
      padding: '0',
      borderRadius: 16,
      background: `linear-gradient(180deg, #3A0A24 0%, ${SB.plumDeeper} 100%)`,
      border: `2px solid ${SB.black}`,
      boxShadow: `0 0 0 2px ${SB.hotPink}, 0 0 28px rgba(233,30,99,0.4), 0 10px 24px rgba(0,0,0,0.6)`,
      overflow: 'hidden',
    }}>
      {/* Header band */}
      <div style={{
        background: SB.hotPink,
        padding: '5px 12px',
        borderBottom: `2px solid ${SB.black}`,
        display: 'flex', alignItems: 'center', gap: 6,
        fontFamily: 'Inter, system-ui', fontSize: 8, fontWeight: 900,
        letterSpacing: '0.24em', color: SB.cream, textTransform: 'uppercase',
      }}>
        <span style={{
          width: 6, height: 6, borderRadius: '50%', background: SB.cream,
          animation: 'pulse 1.2s ease-in-out infinite',
        }}/>
        INCOMING · LISA IS TYPING
      </div>

      <div style={{ display: 'flex', padding: '14px 14px 14px 14px', gap: 12, alignItems: 'flex-start' }}>
        {/* Lisa portrait */}
        <div style={{
          width: 62, height: 62, borderRadius: '50%', flexShrink: 0,
          border: `2px solid ${SB.black}`,
          boxShadow: `0 0 0 2px ${SB.goldBright}, 0 0 14px rgba(255,215,0,0.45)`,
          overflow: 'hidden',
          background: `radial-gradient(ellipse at 50% 40%, #6B1A3C 0%, ${SB.plumDeeper} 100%)`,
        }}>
          <img src="assets/Lisa_base.webp" alt="" style={{
            width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%',
          }}/>
        </div>

        {/* Message */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontFamily: 'Inter, system-ui', fontSize: 8, fontWeight: 900,
            letterSpacing: '0.2em', color: SB.goldBright,
          }}>LISA VANDERPUMP</div>
          <div style={{
            marginTop: 4,
            fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
            fontWeight: 500, fontSize: 14, color: SB.cream,
            lineHeight: 1.35, letterSpacing: -0.1,
          }}>"Darling. Don't spiral. I've seen worse in Vegas and I've saved worse than this. <span style={{ color: SB.goldBright, fontWeight: 700 }}>Sixty seconds with me, and we salvage the streak.</span>"</div>
        </div>
      </div>

      {/* Save offer card */}
      <div style={{
        margin: '0 14px 14px',
        padding: '12px 14px',
        borderRadius: 10,
        background: `linear-gradient(90deg, rgba(255,215,0,0.16) 0%, rgba(233,30,99,0.12) 100%)`,
        border: `1.5px solid rgba(255,215,0,0.5)`,
        display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <div style={{
          width: 44, height: 44, borderRadius: 10,
          background: SB.black,
          border: `1.5px solid ${SB.goldBright}`,
          boxShadow: `0 0 12px rgba(255,215,0,0.5)`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          <svg width="16" height="20" viewBox="0 0 16 20">
            <path d="M3 2l10 8-10 8V2z" fill={SB.goldBright} stroke={SB.black} strokeWidth="0.8"/>
          </svg>
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontFamily: 'Inter, system-ui', fontSize: 8, fontWeight: 900,
            letterSpacing: '0.22em', color: SB.goldBright, textTransform: 'uppercase',
          }}>Redemption Scene</div>
          <div style={{
            fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
            fontWeight: 900, fontSize: 14, color: SB.cream, lineHeight: 1.2, marginTop: 1,
          }}>60 sec · 3 questions · no mercy</div>
        </div>
      </div>

      {/* Two-door CTA */}
      <div style={{
        padding: '0 14px 14px',
        display: 'flex', flexDirection: 'column', gap: 8,
      }}>
        <button style={{
          padding: '14px 16px',
          background: `linear-gradient(180deg, ${SB.hotPink} 0%, ${SB.hotPinkDeep} 100%)`,
          border: `2px solid ${SB.black}`,
          borderRadius: 10,
          boxShadow: `0 4px 0 ${SB.black}, 0 0 20px rgba(233,30,99,0.5)`,
          fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
          fontWeight: 900, fontSize: 17, color: SB.cream,
          letterSpacing: -0.3,
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          cursor: 'pointer',
          animation: 'saveBtnPulse 2s ease-in-out infinite',
        }}>
          <span>Take the save</span>
          <svg width="14" height="14" viewBox="0 0 14 14"><path d="M7 1l2 4 4 .5-3 3 .8 4.5L7 11l-3.8 2L4 8.5 1 5.5 5 5z" fill={SB.goldBright} stroke={SB.black} strokeWidth="0.8"/></svg>
        </button>
        <button style={{
          padding: '11px 16px',
          background: 'transparent',
          border: `1.5px solid ${SB.goldBright}`,
          borderRadius: 10,
          fontFamily: 'Inter, system-ui',
          fontWeight: 800, fontSize: 11, color: SB.goldBright,
          letterSpacing: '0.18em', textTransform: 'uppercase',
          cursor: 'pointer',
        }}>Own it · start fresh</button>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// WHAT WENT WRONG
// ─────────────────────────────────────────────────────────────
function WhatWentWrong() {
  return (
    <div style={{
      position: 'relative', zIndex: 2,
      margin: '16px 14px 0',
      padding: '12px 14px',
      background: 'rgba(10, 5, 10, 0.6)',
      border: `1px solid rgba(255,249,240,0.1)`,
      borderRadius: 12,
      backdropFilter: 'blur(8px)',
    }}>
      <div style={{
        fontFamily: 'Inter, system-ui', fontSize: 8, fontWeight: 900,
        letterSpacing: '0.24em', color: 'rgba(255,249,240,0.5)',
        textTransform: 'uppercase', marginBottom: 6,
      }}>THE CUTTING ROOM FLOOR</div>

      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
        <div style={{
          padding: '5px 9px 4px',
          background: SB.hotPinkDeep,
          border: `1.5px solid ${SB.black}`,
          borderRadius: 4,
          boxShadow: `0 2px 0 ${SB.black}`,
          fontFamily: 'Inter, system-ui', fontSize: 8, fontWeight: 900,
          letterSpacing: '0.18em', color: SB.cream,
          flexShrink: 0,
        }}>Q · 3 OF 3</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
            fontWeight: 500, fontSize: 12.5, color: SB.cream,
            lineHeight: 1.35,
          }}>You said <span style={{ color: '#FF6B6B', fontWeight: 700 }}>"earnest money is refundable after contingencies."</span></div>
          <div style={{
            marginTop: 4,
            fontFamily: 'Inter, system-ui', fontSize: 10.5, fontWeight: 600,
            color: SB.goldBright, lineHeight: 1.3,
          }}>It's refundable <span style={{ fontStyle: 'italic' }}>during</span>. The second you close contingencies, it's not yours anymore.</div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// DOG CONFESSIONAL (wink)
// ─────────────────────────────────────────────────────────────
function DogConfessional() {
  return (
    <div style={{
      position: 'relative', zIndex: 2,
      margin: '14px 14px 0',
      display: 'flex', alignItems: 'center', gap: 10,
      padding: '9px 12px',
      background: 'rgba(255,249,240,0.03)',
      border: `1px dashed rgba(255,249,240,0.15)`,
      borderRadius: 12,
    }}>
      <div style={{
        width: 34, height: 34, borderRadius: '50%',
        border: `1.5px solid ${SB.black}`,
        boxShadow: `0 0 0 1.5px rgba(255,215,0,0.5)`,
        overflow: 'hidden',
        background: SB.plumDeeper,
        flexShrink: 0,
      }}>
        <img src="assets/DOG1_base.png" alt="" style={{
          width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%',
        }}/>
      </div>
      <div style={{ flex: 1 }}>
        <div style={{
          fontFamily: 'Inter, system-ui', fontSize: 7, fontWeight: 900,
          letterSpacing: '0.22em', color: 'rgba(255,249,240,0.45)',
          textTransform: 'uppercase',
        }}>PRODUCER (off-camera)</div>
        <div style={{
          fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
          fontSize: 12, fontWeight: 500, color: 'rgba(255,249,240,0.8)',
          lineHeight: 1.3, marginTop: 1,
        }}>"woof. she'll live. probably."</div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// MAIN
// ─────────────────────────────────────────────────────────────
function StreakBreakScreen() {
  return (
    <div
      data-screen-label="12 The Streak Break"
      style={{
        width: '100%', height: '100%',
        overflowY: 'auto', overflowX: 'hidden',
        position: 'relative',
        background: `
          radial-gradient(ellipse 80% 40% at 50% 20%, rgba(180, 40, 100, 0.25) 0%, transparent 60%),
          radial-gradient(ellipse 60% 50% at 50% 80%, rgba(30, 40, 80, 0.35) 0%, transparent 60%),
          linear-gradient(180deg, ${SB.plumWet} 0%, ${SB.plumDeeper} 40%, #050306 100%)
        `,
      }}
    >
      <StormBackground/>

      <CutBanner/>
      <ShatteredCrown/>
      <RippedScorecard/>
      <LisaSafetyNet/>
      <WhatWentWrong/>
      <DogConfessional/>

      <div style={{ height: 28 }}/>

      <style>{`
        @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.35; } }
        @keyframes saveBtnPulse {
          0%,100% { box-shadow: 0 4px 0 #0A0A0A, 0 0 20px rgba(233,30,99,0.5); }
          50% { box-shadow: 0 4px 0 #0A0A0A, 0 0 36px rgba(233,30,99,0.85); }
        }
        ::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}

Object.assign(window, { StreakBreakScreen });
