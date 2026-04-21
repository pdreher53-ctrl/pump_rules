// Screen 8 — RAWT IN HAIL (Streak-3 Full-Screen)

const RH = {
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
  flame: '#FF6B1A',
};

// Deterministic PRNG so confetti is stable
function rng(seed) { let s = seed; return () => { s = (s * 9301 + 49297) % 233280; return s / 233280; }; }

function ConfettiField() {
  const r = rng(42);
  const bits = Array.from({ length: 36 }).map((_, i) => {
    const shape = ['star','bone','diamond','bell'][Math.floor(r()*4)];
    const color = [RH.goldBright, RH.hotPink, RH.cream, RH.flame][Math.floor(r()*4)];
    return {
      x: r() * 100,
      y: r() * 100,
      rot: r() * 360,
      size: 8 + r() * 10,
      dur: 3 + r() * 4,
      delay: -r() * 5,
      shape, color,
    };
  });
  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      {bits.map((b, i) => (
        <span key={i} style={{
          position: 'absolute',
          left: `${b.x}%`, top: `${b.y}%`,
          width: b.size, height: b.size,
          transform: `rotate(${b.rot}deg)`,
          animation: `confettiFall ${b.dur}s linear ${b.delay}s infinite`,
          opacity: 0.85,
        }}>
          {b.shape === 'star' && <svg viewBox="0 0 10 10" width={b.size} height={b.size}><path d="M5 0.5l1.4 3 3.1.4-2.3 2.2.6 3.1L5 7.7 2.2 9.2l.6-3.1L.5 3.9l3.1-.4L5 .5z" fill={b.color}/></svg>}
          {b.shape === 'bone' && <svg viewBox="0 0 12 8" width={b.size} height={b.size*0.7}><path d="M2 2 A2 2 0 1 1 2 6 L3 4 L3 4 L2 2 Z M10 2 A2 2 0 1 0 10 6 L9 4 L9 4 L10 2 Z M3 3.5 L9 3.5 L9 4.5 L3 4.5 Z" fill={b.color}/></svg>}
          {b.shape === 'diamond' && <svg viewBox="0 0 10 10" width={b.size} height={b.size}><path d="M5 0 L10 5 L5 10 L0 5 Z" fill={b.color}/></svg>}
          {b.shape === 'bell' && <svg viewBox="0 0 10 10" width={b.size} height={b.size}><path d="M5 1 C3 1 2 2.5 2 5 L2 7 L1 8 L9 8 L8 7 L8 5 C8 2.5 7 1 5 1 Z" fill={b.color}/></svg>}
        </span>
      ))}
    </div>
  );
}

// Sound wave lines radiating from title
function SoundRays() {
  return (
    <svg viewBox="0 0 375 400" style={{
      position: 'absolute', inset: 0, width: '100%', height: '100%',
      pointerEvents: 'none', mixBlendMode: 'screen', opacity: 0.6,
    }}>
      {Array.from({length: 18}).map((_, i) => {
        const angle = (i / 18) * 360;
        const rad = angle * Math.PI / 180;
        const cx = 187.5, cy = 200;
        const x1 = cx + Math.cos(rad) * 60;
        const y1 = cy + Math.sin(rad) * 60;
        const x2 = cx + Math.cos(rad) * 220;
        const y2 = cy + Math.sin(rad) * 220;
        return (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke={RH.goldBright} strokeWidth="1.2" opacity="0.7"
            style={{ animation: `rayPulse 2.2s ease-in-out ${i*0.1}s infinite` }}
          />
        );
      })}
    </svg>
  );
}

function ReceiptThumb({ src, name, focus='center 10%', rot, x, y, delay }) {
  return (
    <div style={{
      position: 'absolute', left: x, top: y,
      transform: `rotate(${rot}deg)`,
      animation: `receiptPop 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}s both`,
    }}>
      <div style={{
        width: 70, height: 90,
        borderRadius: 8,
        border: `2px solid ${RH.black}`,
        boxShadow: `0 0 0 2px ${RH.goldBright}, 0 8px 18px rgba(0,0,0,0.6)`,
        overflow: 'hidden',
        background: RH.plumDeeper,
        position: 'relative',
      }}>
        <img src={src} alt={name} style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: focus,
        }}/>
        {/* CORRECT stamp */}
        <div style={{
          position: 'absolute', top: 6, right: -6,
          padding: '2px 6px',
          background: RH.green, border: `1.5px solid ${RH.black}`,
          borderRadius: 3,
          transform: 'rotate(10deg)',
          boxShadow: `0 2px 0 ${RH.black}`,
          fontFamily: 'Inter, system-ui', fontSize: 8, fontWeight: 900,
          color: RH.black, letterSpacing: '0.14em',
        }}>✓ NAILED</div>
        {/* name plate */}
        <div style={{
          position: 'absolute', left: 0, right: 0, bottom: 0,
          padding: '8px 6px 4px',
          background: 'linear-gradient(180deg, transparent 0%, rgba(10,10,10,0.95) 80%)',
          fontFamily: 'Inter, system-ui', fontSize: 8, fontWeight: 900,
          letterSpacing: '0.14em', color: RH.cream, textAlign: 'center',
        }}>{name}</div>
      </div>
    </div>
  );
}

function RawtInHailScreen({ tweaks }) {
  return (
    <div
      data-screen-label="08 RAWT IN HAIL (Streak-3)"
      style={{
        width: '100%', height: '100%',
        position: 'relative', overflow: 'hidden',
        background: `
          radial-gradient(ellipse 80% 50% at 50% 40%, rgba(255, 107, 26, 0.55) 0%, transparent 55%),
          radial-gradient(ellipse 60% 40% at 50% 45%, rgba(255, 215, 0, 0.4) 0%, transparent 50%),
          radial-gradient(ellipse 100% 60% at 50% 100%, rgba(233, 30, 99, 0.3) 0%, transparent 60%),
          linear-gradient(180deg, ${RH.plumDeep} 0%, ${RH.plumDeeper} 50%, ${RH.black} 100%)
        `,
      }}
    >
      {/* Sound rays */}
      <SoundRays />

      {/* Confetti */}
      <ConfettiField />

      {/* Top row: close + share */}
      <div style={{
        position: 'absolute', top: 54, left: 0, right: 0, zIndex: 10,
        display: 'flex', justifyContent: 'space-between', padding: '0 16px',
      }}>
        <button style={{
          width: 32, height: 32, borderRadius: '50%',
          background: 'rgba(10,10,10,0.5)',
          border: '1px solid rgba(255,249,240,0.2)',
          backdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer',
        }}>
          <svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 2l8 8M10 2l-8 8" stroke={RH.cream} strokeWidth="1.8" strokeLinecap="round"/></svg>
        </button>
        <div style={{
          padding: '5px 12px',
          background: 'rgba(10,10,10,0.55)',
          border: `1px solid rgba(255,215,0,0.5)`,
          borderRadius: 999,
          backdropFilter: 'blur(8px)',
          fontFamily: 'Inter, system-ui', fontSize: 9, fontWeight: 900,
          letterSpacing: '0.22em', color: RH.goldBright, textTransform: 'uppercase',
          whiteSpace: 'nowrap',
        }}>STREAK · {tweaks.streakLevel}</div>
        <button style={{
          padding: '6px 12px', borderRadius: 999,
          background: RH.hotPink, border: `1.5px solid ${RH.black}`,
          boxShadow: `0 2px 0 ${RH.black}`,
          fontFamily: 'Inter, system-ui', fontSize: 10, fontWeight: 900,
          color: RH.cream, letterSpacing: '0.14em',
          cursor: 'pointer',
        }}>SHARE ↗</button>
      </div>

      {/* Eyebrow — "THE PACK SPEAKS" */}
      <div style={{
        position: 'absolute', top: 112, left: 0, right: 0, textAlign: 'center', zIndex: 5,
      }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          padding: '4px 12px',
          background: 'rgba(255,249,240,0.08)',
          border: `1px solid rgba(255,215,0,0.4)`,
          borderRadius: 999,
          backdropFilter: 'blur(8px)',
          fontFamily: 'Inter, system-ui', fontSize: 9, fontWeight: 800,
          letterSpacing: '0.28em', color: RH.goldBright, textTransform: 'uppercase',
        }}>🐾 THE PACK SPEAKS 🐾</div>
      </div>

      {/* DOGS — flanking Brittany, smaller */}
      <div style={{
        position: 'absolute', top: 180, left: -18, zIndex: 3,
        animation: 'dogBob 2s ease-in-out infinite',
      }}>
        <img src="assets/Dog1_howl.png" alt="Dog 1 howling" style={{
          width: 118, height: 118,
          objectFit: 'cover', objectPosition: 'center 30%',
          borderRadius: '50%',
          border: `2.5px solid ${RH.black}`,
          boxShadow: `0 0 0 2.5px ${RH.goldBright}, 0 0 22px rgba(255,107,26,0.7), 0 8px 18px rgba(0,0,0,0.6)`,
          transform: 'scaleX(-1)',
        }}/>
      </div>

      <div style={{
        position: 'absolute', top: 180, right: -18, zIndex: 3,
        animation: 'dogBob 2s ease-in-out 0.3s infinite',
      }}>
        <img src="assets/Dog2_howl.png" alt="Dog 2 howling" style={{
          width: 118, height: 118,
          objectFit: 'cover', objectPosition: 'center 30%',
          borderRadius: '50%',
          border: `2.5px solid ${RH.black}`,
          boxShadow: `0 0 0 2.5px ${RH.goldBright}, 0 0 22px rgba(255,107,26,0.7), 0 8px 18px rgba(0,0,0,0.6)`,
        }}/>
      </div>

      {/* BRITTANY — the star of the ritual, center stage */}
      <div style={{
        position: 'absolute', top: 140, left: '50%', transform: 'translateX(-50%)', zIndex: 5,
        animation: 'brittHype 1.4s ease-in-out infinite',
      }}>
        <img src="assets/Brittany_Hyped.png" alt="Brittany hyped" style={{
          width: 230, height: 230,
          objectFit: 'cover', objectPosition: 'center 15%',
          borderRadius: '50%',
          border: `3px solid ${RH.black}`,
          boxShadow: `0 0 0 4px ${RH.hotPink}, 0 0 0 7px ${RH.goldBright}, 0 0 45px rgba(233,30,99,0.7), 0 14px 30px rgba(0,0,0,0.65)`,
        }}/>
        {/* Screaming mouth lines */}
        <div style={{
          position: 'absolute', top: -8, left: '50%', transform: 'translateX(-50%) rotate(-10deg)',
          padding: '4px 10px',
          background: RH.cream, border: `2px solid ${RH.black}`,
          borderRadius: 6,
          boxShadow: `0 3px 0 ${RH.black}`,
          fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
          fontWeight: 900, fontSize: 11, color: RH.hotPinkDeep,
          letterSpacing: '0.08em', whiteSpace: 'nowrap',
        }}>AAAAAAHHH!!</div>
      </div>

      {/* The MASSIVE title — RAWT IN HAIL, now BELOW Brittany */}
      <div style={{
        position: 'absolute', top: 360, left: 0, right: 0, zIndex: 6,
        textAlign: 'center',
      }}>
        {/* RAWT */}
        <div style={{
          fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
          fontWeight: 900, fontSize: 78,
          letterSpacing: -3, lineHeight: 0.9,
          background: `linear-gradient(180deg, #FFE98A 0%, ${RH.goldBright} 45%, ${RH.goldDeep} 100%)`,
          WebkitBackgroundClip: 'text', backgroundClip: 'text',
          color: 'transparent',
          WebkitTextStroke: `2.5px ${RH.black}`,
          filter: `drop-shadow(4px 5px 0 ${RH.hotPinkDeep}) drop-shadow(0 0 18px rgba(255,215,0,0.5))`,
          transform: 'rotate(-3deg)',
          display: 'inline-block',
          fontSize: 66,
        }}>RAWT</div>
        {/* IN */}
        <div style={{
          marginTop: -14,
          fontFamily: '"Bonheur Royale", cursive',
          fontSize: 38, color: RH.cream,
          textShadow: `0 0 14px ${RH.hotPink}, 2px 2px 0 ${RH.black}`,
          transform: 'rotate(2deg)',
          letterSpacing: -1,
          lineHeight: 1,
        }}>in</div>
        {/* HAIL */}
        <div style={{
          marginTop: -8,
          fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
          fontWeight: 900, fontSize: 78,
          letterSpacing: -3, lineHeight: 0.9,
          background: `linear-gradient(180deg, #FFE98A 0%, ${RH.goldBright} 45%, ${RH.goldDeep} 100%)`,
          WebkitBackgroundClip: 'text', backgroundClip: 'text',
          color: 'transparent',
          WebkitTextStroke: `2.5px ${RH.black}`,
          filter: `drop-shadow(-4px 5px 0 ${RH.hotPinkDeep}) drop-shadow(0 0 18px rgba(255,215,0,0.5))`,
          transform: 'rotate(3deg)',
          display: 'inline-block',
          fontSize: 66,
        }}>HAIL</div>
      </div>

      {/* x3 stamp */}
      <div style={{
        position: 'absolute', top: 540, left: '50%',
        transform: 'translateX(-50%) rotate(-6deg)',
        zIndex: 7,
        padding: '6px 16px',
        background: RH.hotPink,
        border: `2px solid ${RH.black}`,
        borderRadius: 8,
        boxShadow: `0 3px 0 ${RH.black}, 0 0 22px rgba(233,30,99,0.7)`,
        fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
        fontWeight: 900, fontSize: 22, color: RH.cream,
        letterSpacing: '0.04em',
      }}>× 3 IN A ROW</div>

      {/* Receipts — 3 tiny thumbnails floating up from the bottom strip */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 4, pointerEvents: 'none' }}>
        <ReceiptThumb src="assets/Arinana_base.png" name="Q23 · ARIANA" focus="center 10%" rot={-10} x="-18px" y="560px" delay={0.3}/>
        <ReceiptThumb src="assets/Katie_base.png"    name="Q25 · KATIE"  focus="center 10%" rot={10}  x="322px" y="560px" delay={0.5}/>
      </div>

      {/* Stat strip */}
      <div style={{
        position: 'absolute', left: 16, right: 16, bottom: 128, zIndex: 8,
        padding: '12px 14px',
        borderRadius: 14,
        background: 'rgba(10,10,10,0.55)',
        border: `1.5px solid rgba(255,215,0,0.4)`,
        backdropFilter: 'blur(10px)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
      }}>
        {/* Flame streak */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{
            width: 36, height: 36, borderRadius: '50%',
            background: `radial-gradient(circle, ${RH.flame} 0%, ${RH.hotPinkDeep} 100%)`,
            border: `1.5px solid ${RH.black}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 18,
            boxShadow: `0 0 14px ${RH.flame}`,
            animation: 'flameFlicker 1.3s ease-in-out infinite',
          }}>🔥</div>
          <div>
            <div style={{
              fontFamily: 'Inter, system-ui', fontSize: 8, fontWeight: 900,
              letterSpacing: '0.2em', color: 'rgba(255,249,240,0.55)', textTransform: 'uppercase',
            }}>STREAK</div>
            <div style={{
              fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
              fontWeight: 900, fontSize: 22, color: RH.cream, lineHeight: 1,
            }}>
              <span style={{ color: 'rgba(255,249,240,0.35)', textDecoration: 'line-through', fontSize: 14, marginRight: 4 }}>{tweaks.streak - 1}</span>
              {tweaks.streak}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ width: 1, height: 32, background: 'rgba(255,215,0,0.3)' }}/>

        {/* Bravo Pts */}
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontFamily: 'Inter, system-ui', fontSize: 8, fontWeight: 900,
            letterSpacing: '0.2em', color: 'rgba(255,249,240,0.55)', textTransform: 'uppercase',
          }}>BRAVO PTS</div>
          <div style={{
            fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
            fontWeight: 900, fontSize: 20, color: RH.goldBright, lineHeight: 1,
            textShadow: `0 0 10px rgba(255,215,0,0.5)`,
          }}>+{tweaks.bonus}</div>
          <div style={{
            fontFamily: 'Inter, system-ui', fontSize: 8, fontWeight: 700,
            color: RH.hotPink, letterSpacing: '0.1em', marginTop: 1,
          }}>×2 HOWL BONUS</div>
        </div>

        {/* Divider */}
        <div style={{ width: 1, height: 32, background: 'rgba(255,215,0,0.3)' }}/>

        {/* Exam Ready */}
        <div>
          <div style={{
            fontFamily: 'Inter, system-ui', fontSize: 8, fontWeight: 900,
            letterSpacing: '0.2em', color: 'rgba(255,249,240,0.55)', textTransform: 'uppercase',
          }}>EXAM READY</div>
          <div style={{
            fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
            fontWeight: 900, fontSize: 20, color: RH.cream, lineHeight: 1,
          }}>
            {tweaks.readiness}<span style={{ fontSize: 13, color: RH.goldBright }}>%</span>
          </div>
          <div style={{
            fontFamily: 'Inter, system-ui', fontSize: 8, fontWeight: 700,
            color: RH.green, letterSpacing: '0.08em', marginTop: 1,
          }}>↑ +3 today</div>
        </div>
      </div>

      {/* Primary CTA */}
      <button style={{
        position: 'absolute', left: 16, right: 16, bottom: 62, zIndex: 9,
        padding: '14px 16px',
        background: `linear-gradient(180deg, ${RH.hotPink} 0%, ${RH.hotPinkDeep} 100%)`,
        border: `2px solid ${RH.black}`, borderRadius: 999,
        boxShadow: `0 4px 0 ${RH.black}, 0 12px 28px -4px rgba(233,30,99,0.6)`,
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        fontFamily: 'Inter, system-ui', fontSize: 13, fontWeight: 900,
        color: RH.cream, letterSpacing: '0.14em', textTransform: 'uppercase',
        cursor: 'pointer',
      }}>
        <span>KEEP THE PACK HOWLING</span>
        <span>→</span>
      </button>

      {/* Footer joke */}
      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 30, zIndex: 5,
        textAlign: 'center',
        fontFamily: '"Bonheur Royale", cursive',
        fontSize: 15, color: 'rgba(255,215,0,0.6)',
        letterSpacing: 0.5,
      }}>a registered howl of the pump rules pack™</div>

      <style>{`
        @keyframes brittHype {
          0%,100% { transform: translateX(-50%) scale(1) rotate(-1deg); }
          50%     { transform: translateX(-50%) scale(1.03) rotate(1deg); }
        }
        @keyframes confettiFall {
          0%   { transform: translate(0, -20px) rotate(0deg); opacity: 0; }
          8%   { opacity: 0.9; }
          100% { transform: translate(12px, 120vh) rotate(720deg); opacity: 0; }
        }
        @keyframes rayPulse {
          0%,100% { opacity: 0.2; }
          50%     { opacity: 0.9; }
        }
        @keyframes dogBob {
          0%,100% { transform: translateY(0) rotate(0deg); }
          50%     { transform: translateY(-4px) rotate(1deg); }
        }
        @keyframes flameFlicker {
          0%,100% { transform: scale(1); filter: brightness(1); }
          50%     { transform: scale(1.08); filter: brightness(1.2); }
        }
        @keyframes receiptPop {
          0%   { transform: scale(0.3) rotate(var(--r, 0deg)); opacity: 0; }
          60%  { transform: scale(1.08) rotate(var(--r, 0deg)); }
          100% { transform: scale(1) rotate(var(--r, 0deg)); opacity: 1; }
        }
        ::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}

Object.assign(window, { RawtInHailScreen });
