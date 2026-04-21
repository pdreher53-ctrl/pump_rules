// Screen 13 — Series Finale · You Passed

const SF = {
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
  green: '#4ADE80',
  greenDeep: '#1E8A4A',
};

// ─────────────────────────────────────────────────────────────
// CONFETTI RAIN
// ─────────────────────────────────────────────────────────────
function Confetti() {
  const pieces = Array.from({ length: 60 });
  return (
    <svg style={{
      position: 'absolute', inset: 0, width: '100%', height: '100%',
      pointerEvents: 'none', zIndex: 1,
    }} preserveAspectRatio="none" viewBox="0 0 375 812">
      {pieces.map((_, i) => {
        const x = (i * 29 + (i % 7) * 11) % 375;
        const y = (i * 53 + (i % 4) * 17) % 812;
        const rot = (i * 37) % 360;
        const c = i % 3 === 0 ? SF.hotPink : i % 3 === 1 ? SF.goldBright : SF.cream;
        const w = i % 2 ? 5 : 3;
        const h = i % 2 ? 10 : 7;
        return (
          <rect key={i} x={x} y={y} width={w} height={h} fill={c}
            transform={`rotate(${rot} ${x + w/2} ${y + h/2})`}
            opacity={0.75 + (i % 3) * 0.08}/>
        );
      })}
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────
// MARQUEE HEADER
// ─────────────────────────────────────────────────────────────
function MarqueeHeader() {
  return (
    <div style={{ position: 'relative', zIndex: 2, padding: '54px 14px 0', textAlign: 'center' }}>
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        padding: '4px 12px',
        background: 'rgba(74,222,128,0.14)',
        border: `1.5px solid ${SF.green}`,
        borderRadius: 999,
        fontFamily: 'Inter, system-ui', fontSize: 8.5, fontWeight: 900,
        letterSpacing: '0.28em', color: SF.green, textTransform: 'uppercase',
        boxShadow: `0 0 14px rgba(74,222,128,0.4)`,
      }}>
        <span style={{
          width: 6, height: 6, borderRadius: '50%', background: SF.green,
          animation: 'pulse 1.2s ease-in-out infinite',
        }}/>
        SERIES FINALE · NOW AIRING
      </div>

      <div style={{
        marginTop: 10,
        fontFamily: 'Inter, system-ui', fontSize: 9, fontWeight: 900,
        letterSpacing: '0.32em', color: SF.goldBright, textTransform: 'uppercase',
      }}>GEORGIA'S NEWEST</div>
      <div style={{
        marginTop: 2,
        fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
        fontWeight: 900, fontSize: 38, color: SF.cream, lineHeight: 1,
        letterSpacing: -1,
        textShadow: `0 0 24px ${SF.hotPink}, 0 0 48px rgba(255,215,0,0.5)`,
      }}>Real Estate</div>
      <div style={{
        marginTop: -2,
        fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
        fontWeight: 900, fontSize: 38, color: SF.goldBright, lineHeight: 1,
        letterSpacing: -1,
        textShadow: `0 0 24px ${SF.goldBright}`,
      }}>Agent.</div>

      {/* Name in neon marquee bulbs */}
      <div style={{
        marginTop: 14, display: 'inline-flex', alignItems: 'center', gap: 8,
        padding: '8px 20px',
        background: SF.black,
        border: `2px solid ${SF.hotPink}`,
        borderRadius: 6,
        boxShadow: `0 0 0 2px ${SF.black}, 0 0 20px rgba(233,30,99,0.5), inset 0 0 20px rgba(233,30,99,0.2)`,
        position: 'relative',
      }}>
        {/* bulbs */}
        <div style={{ position: 'absolute', inset: -2, borderRadius: 6, pointerEvents: 'none' }}>
          {[0,1,2,3,4,5,6,7].map(i => (
            <div key={`t${i}`} style={{
              position: 'absolute', top: -2, left: `${8 + i * 12}%`,
              width: 4, height: 4, borderRadius: '50%',
              background: i % 2 ? SF.goldBright : SF.hotPink,
              boxShadow: `0 0 6px ${i % 2 ? SF.goldBright : SF.hotPink}`,
            }}/>
          ))}
          {[0,1,2,3,4,5,6,7].map(i => (
            <div key={`b${i}`} style={{
              position: 'absolute', bottom: -2, left: `${8 + i * 12}%`,
              width: 4, height: 4, borderRadius: '50%',
              background: i % 2 ? SF.hotPink : SF.goldBright,
              boxShadow: `0 0 6px ${i % 2 ? SF.hotPink : SF.goldBright}`,
            }}/>
          ))}
        </div>
        <span style={{
          fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
          fontWeight: 900, fontSize: 28, color: SF.cream,
          letterSpacing: 0.5,
          textShadow: `0 0 12px ${SF.hotPink}`,
        }}>ELIZABETH</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// SCORE REVEAL
// ─────────────────────────────────────────────────────────────
function ScoreReveal() {
  return (
    <div style={{
      position: 'relative', zIndex: 2,
      margin: '22px 14px 0',
      padding: '16px 16px 14px',
      borderRadius: 16,
      background: `
        radial-gradient(ellipse at 50% 40%, rgba(74,222,128,0.18) 0%, transparent 60%),
        linear-gradient(180deg, ${SF.plumDeeper} 0%, ${SF.black} 100%)
      `,
      border: `2px solid ${SF.black}`,
      boxShadow: `0 0 0 2px ${SF.goldBright}, 0 0 28px rgba(255,215,0,0.4), 0 10px 28px rgba(0,0,0,0.6)`,
      display: 'flex', alignItems: 'center', gap: 14,
    }}>
      {/* big ring */}
      <div style={{ position: 'relative', width: 110, height: 110, flexShrink: 0 }}>
        <svg width="110" height="110" viewBox="0 0 110 110">
          <defs>
            <linearGradient id="passRing" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor={SF.green}/>
              <stop offset="0.55" stopColor={SF.goldBright}/>
              <stop offset="1" stopColor={SF.hotPink}/>
            </linearGradient>
          </defs>
          <circle cx="55" cy="55" r="48" fill="none" stroke="rgba(255,249,240,0.1)" strokeWidth="7"/>
          <circle cx="55" cy="55" r="48" fill="none" stroke="url(#passRing)" strokeWidth="7"
            strokeLinecap="round" strokeDasharray="301.6" strokeDashoffset="48.3"
            transform="rotate(-90 55 55)"
            style={{ filter: `drop-shadow(0 0 8px ${SF.goldBright})` }}/>
        </svg>
        <div style={{
          position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{
            fontFamily: 'Inter, system-ui', fontSize: 7, fontWeight: 900,
            letterSpacing: '0.26em', color: SF.goldBright,
          }}>SCORE</div>
          <div style={{
            fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
            fontWeight: 900, fontSize: 36, color: SF.cream, lineHeight: 1,
            textShadow: `0 0 10px ${SF.goldBright}`,
          }}>84<span style={{ fontSize: 18, color: SF.goldBright }}>%</span></div>
        </div>
      </div>

      <div style={{ flex: 1, minWidth: 0, position: 'relative' }}>
        {/* PASS stamp */}
        <div style={{
          position: 'absolute', top: -6, right: -4,
          padding: '6px 12px 5px',
          border: `2.5px solid ${SF.green}`,
          color: SF.green,
          fontFamily: 'Courier New, monospace', fontSize: 18, fontWeight: 900,
          letterSpacing: '0.18em',
          transform: 'rotate(9deg)',
          opacity: 0.92,
          textShadow: `0 0 10px ${SF.green}`,
          lineHeight: 1,
        }}>PASS</div>

        <div style={{
          fontFamily: 'Inter, system-ui', fontSize: 8, fontWeight: 900,
          letterSpacing: '0.22em', color: 'rgba(255,249,240,0.5)',
        }}>GA SALESPERSON EXAM</div>
        <div style={{
          marginTop: 3,
          fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
          fontWeight: 900, fontSize: 18, color: SF.cream, lineHeight: 1.1,
        }}>"Darling, you<br/>didn't just pass."</div>
        <div style={{
          marginTop: 6,
          fontFamily: 'Inter, system-ui', fontSize: 10, fontWeight: 600,
          color: SF.goldBright, lineHeight: 1.3,
        }}>72 was the cutoff. You cleared it by <span style={{ color: SF.cream, fontWeight: 900 }}>+12</span>.</div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// LICENSE CARD
// ─────────────────────────────────────────────────────────────
function LicenseCard() {
  return (
    <div style={{
      position: 'relative', zIndex: 2,
      margin: '16px 14px 0',
      padding: '14px 16px 16px',
      background: `linear-gradient(180deg, ${SF.paper} 0%, #EEDDB8 100%)`,
      color: SF.black,
      border: `1.5px solid ${SF.black}`,
      borderRadius: 4,
      boxShadow: `4px 4px 0 ${SF.goldDeep}, 8px 8px 24px rgba(0,0,0,0.5)`,
      position: 'relative',
    }}>
      {/* gold corners */}
      {['tl','tr','bl','br'].map(c => (
        <div key={c} style={{
          position: 'absolute',
          ...(c.includes('t') ? { top: 6 } : { bottom: 6 }),
          ...(c.includes('l') ? { left: 6 } : { right: 6 }),
          width: 14, height: 14,
          borderTop: c.includes('t') ? `2px solid ${SF.goldDeep}` : 'none',
          borderBottom: c.includes('b') ? `2px solid ${SF.goldDeep}` : 'none',
          borderLeft: c.includes('l') ? `2px solid ${SF.goldDeep}` : 'none',
          borderRight: c.includes('r') ? `2px solid ${SF.goldDeep}` : 'none',
        }}/>
      ))}

      <div style={{ textAlign: 'center' }}>
        <div style={{
          fontFamily: 'Inter, system-ui', fontSize: 7.5, fontWeight: 900,
          letterSpacing: '0.3em', color: SF.goldDeep, textTransform: 'uppercase',
        }}>State of Georgia</div>
        <div style={{
          fontFamily: '"Playfair Display", serif', fontWeight: 900,
          fontSize: 14, color: SF.black, marginTop: 1, letterSpacing: -0.2,
        }}>Real Estate Commission</div>
        <div style={{
          margin: '6px auto', width: 60, height: 1.5,
          background: `linear-gradient(90deg, transparent 0%, ${SF.black} 50%, transparent 100%)`,
        }}/>
        <div style={{
          fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
          fontWeight: 900, fontSize: 10, color: SF.hotPinkDeep,
          letterSpacing: 0.3,
        }}>· Salesperson License ·</div>
      </div>

      {/* body */}
      <div style={{ display: 'flex', gap: 12, marginTop: 10, alignItems: 'flex-start' }}>
        <div style={{ flex: 1 }}>
          <div style={{
            fontFamily: 'Inter, system-ui', fontSize: 6.5, fontWeight: 900,
            letterSpacing: '0.22em', color: SF.goldDeep, textTransform: 'uppercase',
            marginBottom: 1,
          }}>Issued to</div>
          <div style={{
            fontFamily: '"Bonheur Royale", cursive',
            fontSize: 26, color: SF.hotPinkDeep,
            lineHeight: 1, letterSpacing: 0.4,
          }}>Elizabeth</div>
          <div style={{
            marginTop: 8,
            fontFamily: 'Courier New, monospace', fontSize: 9, fontWeight: 700,
            color: SF.black, letterSpacing: '0.08em',
          }}>LIC NO. <span style={{ color: SF.hotPinkDeep }}>GA-401-88214</span></div>
          <div style={{
            fontFamily: 'Courier New, monospace', fontSize: 8, fontWeight: 700,
            color: SF.goldDeep, letterSpacing: '0.08em', marginTop: 2,
          }}>ISSUED · 26.APR.2025</div>
        </div>
        {/* gold seal */}
        <div style={{
          width: 54, height: 54, flexShrink: 0,
          borderRadius: '50%',
          background: `radial-gradient(circle at 35% 30%, #FFEE88 0%, ${SF.goldBright} 40%, ${SF.goldDeep} 100%)`,
          border: `2px solid ${SF.goldDeep}`,
          boxShadow: `0 2px 4px rgba(0,0,0,0.3), inset -1px -1px 4px rgba(0,0,0,0.15)`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          position: 'relative',
        }}>
          <div style={{
            position: 'absolute', inset: 4, borderRadius: '50%',
            border: `1px dashed ${SF.goldDeep}`,
          }}/>
          <div style={{
            fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
            fontWeight: 900, fontSize: 18, color: SF.hotPinkDeep,
            textShadow: `0 1px 0 rgba(255,255,255,0.3)`,
          }}>★</div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// CAST APPLAUSE ROW
// ─────────────────────────────────────────────────────────────
function CastApplause() {
  const cast = [
    { src: 'Andy_base.png',     focus: 'center 15%', ring: SF.hotPink },
    { src: 'Stassi_base.png',   focus: 'center 12%', ring: SF.goldBright },
    { src: 'Lisa_base.webp',    focus: 'center 20%', ring: SF.hotPink, hero: true },
    { src: 'Brittany_Hyped.png',focus: 'center 15%', ring: SF.goldBright },
    { src: 'Jax_base.png',      focus: 'center 12%', ring: SF.hotPink },
  ];
  return (
    <div style={{ position: 'relative', zIndex: 2, margin: '18px 0 0' }}>
      <div style={{
        padding: '0 14px 6px',
        fontFamily: 'Inter, system-ui', fontSize: 8.5, fontWeight: 900,
        letterSpacing: '0.26em', color: SF.goldBright, textTransform: 'uppercase',
        textAlign: 'center',
      }}>· The Cast Stands ·</div>

      <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'flex-end',
        gap: 6, padding: '0 14px',
      }}>
        {cast.map((p, i) => {
          const size = p.hero ? 72 : 52;
          return (
            <div key={i} style={{
              width: size, height: size, borderRadius: '50%',
              border: `2px solid ${SF.black}`,
              boxShadow: `0 0 0 2px ${p.ring}, 0 0 ${p.hero ? 20 : 10}px ${p.ring}66, 0 4px 10px rgba(0,0,0,0.5)`,
              overflow: 'hidden',
              background: `radial-gradient(ellipse at 50% 40%, #6B1A3C 0%, ${SF.plumDeeper} 100%)`,
              transform: `translateY(${i === 2 ? -4 : (i % 2 === 0 ? 2 : 0)}px)`,
            }}>
              <img src={`assets/${p.src}`} alt="" style={{
                width: '100%', height: '100%', objectFit: 'cover', objectPosition: p.focus,
              }}/>
            </div>
          );
        })}
      </div>

      {/* Clapping emoji row */}
      <div style={{
        display: 'flex', justifyContent: 'center', gap: 10, marginTop: 6,
        fontSize: 16, opacity: 0.9,
      }}>
        <span style={{ animation: 'clap 0.6s ease-in-out 0s infinite alternate' }}>👏</span>
        <span style={{ animation: 'clap 0.6s ease-in-out 0.1s infinite alternate' }}>🥂</span>
        <span style={{ animation: 'clap 0.6s ease-in-out 0.2s infinite alternate' }}>👏</span>
        <span style={{ animation: 'clap 0.6s ease-in-out 0.05s infinite alternate' }}>✨</span>
        <span style={{ animation: 'clap 0.6s ease-in-out 0.15s infinite alternate' }}>👏</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// LISA'S FINAL DM
// ─────────────────────────────────────────────────────────────
function LisaFinalDM() {
  return (
    <div style={{
      position: 'relative', zIndex: 2,
      margin: '16px 14px 0',
      padding: '14px 14px 14px',
      borderRadius: 14,
      background: `linear-gradient(180deg, #3A0A24 0%, ${SF.plumDeeper} 100%)`,
      border: `2px solid ${SF.goldBright}`,
      boxShadow: `0 0 0 2px ${SF.black}, 0 0 22px rgba(255,215,0,0.35)`,
      display: 'flex', gap: 12, alignItems: 'flex-start',
    }}>
      <div style={{
        width: 54, height: 54, borderRadius: '50%',
        border: `2px solid ${SF.black}`,
        boxShadow: `0 0 0 2px ${SF.goldBright}`,
        overflow: 'hidden', flexShrink: 0,
        background: SF.plumDeeper,
      }}>
        <img src="assets/Lisa_base.webp" alt="" style={{
          width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%',
        }}/>
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <div style={{
            fontFamily: 'Inter, system-ui', fontSize: 8, fontWeight: 900,
            letterSpacing: '0.22em', color: SF.goldBright,
          }}>LISA VANDERPUMP</div>
          <svg width="10" height="10" viewBox="0 0 10 10"><circle cx="5" cy="5" r="5" fill={SF.goldBright}/><path d="M2.5 5L4 6.5L7.5 3" stroke={SF.black} strokeWidth="1.3" fill="none" strokeLinecap="round"/></svg>
        </div>
        <div style={{
          marginTop: 4,
          fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
          fontWeight: 500, fontSize: 13.5, color: SF.cream,
          lineHeight: 1.35, letterSpacing: -0.1,
        }}>"I told you I'd fix you, darling. <span style={{ color: SF.goldBright, fontWeight: 700 }}>Now go sell a house</span> — and for god's sake, <span style={{ fontStyle: 'italic', color: SF.hotPink }}>do your contingencies properly.</span>"</div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// SEASON STATS RIBBON
// ─────────────────────────────────────────────────────────────
function SeasonStats() {
  const stats = [
    { n: '18', l: 'Days', c: SF.cream },
    { n: '42', l: 'Streaks', c: SF.hotPink },
    { n: '94', l: 'Cards', c: SF.goldBright },
    { n: '2.8k', l: 'Bravo Pts', c: SF.green },
  ];
  return (
    <div style={{
      position: 'relative', zIndex: 2,
      margin: '16px 14px 0',
      display: 'flex', gap: 6,
    }}>
      {stats.map(s => (
        <div key={s.l} style={{
          flex: 1,
          padding: '10px 6px 9px',
          background: 'rgba(255,249,240,0.04)',
          border: `1px solid rgba(255,249,240,0.1)`,
          borderRadius: 10,
          textAlign: 'center',
        }}>
          <div style={{
            fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
            fontWeight: 900, fontSize: 20, color: s.c, lineHeight: 1,
            textShadow: `0 0 10px ${s.c}88`,
          }}>{s.n}</div>
          <div style={{
            marginTop: 3,
            fontFamily: 'Inter, system-ui', fontSize: 7.5, fontWeight: 900,
            letterSpacing: '0.22em', color: 'rgba(255,249,240,0.55)',
            textTransform: 'uppercase',
          }}>{s.l}</div>
        </div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// SHARE CARD PREVIEW
// ─────────────────────────────────────────────────────────────
function ShareCard() {
  return (
    <div style={{ position: 'relative', zIndex: 2, margin: '18px 14px 0' }}>
      <div style={{
        fontFamily: 'Inter, system-ui', fontSize: 8, fontWeight: 900,
        letterSpacing: '0.24em', color: 'rgba(255,249,240,0.5)',
        textTransform: 'uppercase', marginBottom: 6,
        display: 'flex', alignItems: 'center', gap: 6,
      }}>
        <span>TEASER · IG STORY</span>
        <div style={{ flex: 1, height: 1, background: 'rgba(255,249,240,0.1)' }}/>
      </div>

      <div style={{ display: 'flex', gap: 10 }}>
        {/* Tile */}
        <div style={{
          width: 114, height: 200, borderRadius: 10, flexShrink: 0,
          background: `
            radial-gradient(ellipse at 50% 35%, rgba(255,215,0,0.3) 0%, transparent 70%),
            linear-gradient(180deg, ${SF.hotPinkDeep} 0%, ${SF.plumDeeper} 100%)
          `,
          border: `2px solid ${SF.black}`,
          boxShadow: `0 0 0 1.5px ${SF.goldBright}, 4px 4px 12px rgba(0,0,0,0.5)`,
          padding: 10, position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            fontFamily: 'Inter, system-ui', fontSize: 6.5, fontWeight: 900,
            letterSpacing: '0.3em', color: SF.goldBright, textTransform: 'uppercase',
          }}>I JUST</div>
          <div style={{
            fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
            fontWeight: 900, fontSize: 34, color: SF.cream, lineHeight: 0.95,
            marginTop: 2, letterSpacing: -1,
            textShadow: `0 0 14px ${SF.hotPink}`,
          }}>PASSED.</div>
          <div style={{
            marginTop: 4,
            fontFamily: 'Inter, system-ui', fontSize: 7, fontWeight: 700,
            color: SF.cream, letterSpacing: '0.14em', opacity: 0.85,
          }}>GA REAL ESTATE · 84%</div>
          {/* mini crown */}
          <div style={{ position: 'absolute', bottom: 10, right: 8, fontSize: 24 }}>👑</div>
          {/* mini Elizabeth name */}
          <div style={{
            position: 'absolute', bottom: 10, left: 10,
            fontFamily: '"Bonheur Royale", cursive',
            fontSize: 18, color: SF.goldBright,
            textShadow: `0 0 6px ${SF.goldBright}`,
          }}>Elizabeth</div>
        </div>

        {/* Share buttons */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6, justifyContent: 'center' }}>
          {[
            { label: 'Post to story', icon: '📸', pri: true },
            { label: 'Copy link', icon: '🔗' },
            { label: 'Save to camera roll', icon: '⬇' },
          ].map((b, i) => (
            <button key={i} style={{
              padding: '10px 12px',
              background: b.pri ? `linear-gradient(180deg, ${SF.hotPink} 0%, ${SF.hotPinkDeep} 100%)` : 'rgba(255,249,240,0.05)',
              border: b.pri ? `1.5px solid ${SF.black}` : `1.5px solid rgba(255,249,240,0.2)`,
              boxShadow: b.pri ? `0 3px 0 ${SF.black}` : 'none',
              borderRadius: 10,
              fontFamily: 'Inter, system-ui', fontSize: 11, fontWeight: 800,
              color: SF.cream, letterSpacing: '0.04em',
              display: 'flex', alignItems: 'center', gap: 8,
              cursor: 'pointer',
              textAlign: 'left',
            }}>
              <span style={{ fontSize: 14 }}>{b.icon}</span>
              <span>{b.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// REUNION COUCH SEND-OFF
// ─────────────────────────────────────────────────────────────
function NextSeason() {
  return (
    <div style={{
      position: 'relative', zIndex: 2,
      margin: '20px 14px 0',
      padding: '14px 14px 14px',
      borderRadius: 14,
      background: `linear-gradient(180deg, rgba(233,30,99,0.1) 0%, rgba(255,215,0,0.08) 100%)`,
      border: `1.5px dashed rgba(255,215,0,0.5)`,
      display: 'flex', alignItems: 'center', gap: 12,
    }}>
      <div style={{
        width: 46, height: 46, borderRadius: '50%', flexShrink: 0,
        border: `2px solid ${SF.black}`,
        boxShadow: `0 0 0 2px ${SF.hotPink}`,
        overflow: 'hidden',
        background: SF.plumDeeper,
      }}>
        <img src="assets/Andy_base.png" alt="" style={{
          width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%',
        }}/>
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontFamily: 'Inter, system-ui', fontSize: 8, fontWeight: 900,
          letterSpacing: '0.24em', color: SF.hotPink, textTransform: 'uppercase',
        }}>ANDY · TEASER</div>
        <div style={{
          fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
          fontWeight: 900, fontSize: 14, color: SF.cream, lineHeight: 1.15, marginTop: 1,
        }}>"Same time next season?"</div>
        <div style={{
          fontFamily: 'Inter, system-ui', fontSize: 10, fontWeight: 500,
          color: 'rgba(255,249,240,0.55)', marginTop: 2, fontStyle: 'italic',
        }}>Broker Prep drops in 30 days.</div>
      </div>
      <button style={{
        padding: '8px 10px',
        background: 'transparent',
        border: `1.5px solid ${SF.goldBright}`,
        borderRadius: 999,
        fontFamily: 'Inter, system-ui', fontSize: 9, fontWeight: 900,
        color: SF.goldBright, letterSpacing: '0.16em',
        cursor: 'pointer', flexShrink: 0,
      }}>REMIND ME</button>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// MAIN
// ─────────────────────────────────────────────────────────────
function SeriesFinaleScreen() {
  return (
    <div
      data-screen-label="13 Series Finale (You Passed)"
      style={{
        width: '100%', height: '100%',
        overflowY: 'auto', overflowX: 'hidden',
        position: 'relative',
        background: `
          radial-gradient(ellipse 90% 40% at 50% 0%, rgba(255, 215, 0, 0.25) 0%, transparent 55%),
          radial-gradient(ellipse 70% 50% at 50% 50%, rgba(233, 30, 99, 0.22) 0%, transparent 60%),
          radial-gradient(ellipse 60% 40% at 50% 100%, rgba(74, 222, 128, 0.12) 0%, transparent 60%),
          linear-gradient(180deg, ${SF.plumDeep} 0%, ${SF.plumDeeper} 40%, ${SF.black} 100%)
        `,
      }}
    >
      <Confetti/>
      <MarqueeHeader/>
      <ScoreReveal/>
      <LicenseCard/>
      <CastApplause/>
      <LisaFinalDM/>
      <SeasonStats/>
      <ShareCard/>
      <NextSeason/>
      <div style={{ height: 28 }}/>

      <style>{`
        @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.35; } }
        @keyframes clap { 0% { transform: translateY(0) scale(1); } 100% { transform: translateY(-3px) scale(1.1); } }
        ::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}

Object.assign(window, { SeriesFinaleScreen });
