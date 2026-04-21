import { useStore } from '../store/useStore';

const C = {
  hotPink: '#E91E63',
  hotPinkDeep: '#B0124D',
  goldBright: '#FFD700',
  goldDeep: '#A8820E',
  champagne: '#D4AF37',
  plumDeep: '#4A0E2E',
  plumDeeper: '#2A0519',
  black: '#0A0A0A',
  cream: '#FFF9F0',
};

export default function SeriesFinale() {
  const name = useStore(s => s.name) || 'Elizabeth';
  const bestStreak = useStore(s => s.bestStreak);
  const bravoPoints = useStore(s => s.bravoPoints);
  const answers = useStore(s => s.answers);
  const correct = answers.filter(a => a.correct).length;

  // Gating: requires the user to have answered at least 80% of seed questions correctly.
  // For the MVP demo we still render the celebration so all routes are navigable.
  return (
    <div style={{
      width: '100%', minHeight: '100%', position: 'relative', overflow: 'hidden',
      background: `
        radial-gradient(ellipse 90% 50% at 50% 20%, rgba(255,215,0,0.4) 0%, transparent 60%),
        radial-gradient(ellipse 80% 35% at 50% 60%, rgba(233,30,99,0.25) 0%, transparent 60%),
        linear-gradient(180deg, ${C.plumDeep} 0%, ${C.plumDeeper} 50%, ${C.black} 100%)
      `,
      paddingBottom: 40,
    }}>
      {/* Confetti dots */}
      {Array.from({ length: 60 }).map((_, i) => {
        const seed = (i * 9301 + 49297) % 233280;
        const x = (seed / 233280) * 100;
        const y = ((seed * 13) % 233280) / 233280 * 90;
        const size = ((seed * 7) % 8) + 4;
        return (
          <div key={i} style={{
            position: 'absolute',
            left: `${x}%`, top: `${y}%`,
            width: size, height: size, borderRadius: '50%',
            background: i % 3 === 0 ? C.goldBright : i % 3 === 1 ? C.hotPink : C.cream,
            boxShadow: `0 0 6px currentColor`,
            color: i % 3 === 0 ? C.goldBright : i % 3 === 1 ? C.hotPink : C.cream,
            animation: `floatPiece ${2 + (i % 4)}s ease-in-out ${(i % 5) * 0.4}s infinite`,
            pointerEvents: 'none',
            opacity: 0.8,
          }}/>
        );
      })}

      <div style={{ position: 'relative', zIndex: 2, paddingTop: 30 }}>
        {/* Title */}
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontFamily: 'Inter, system-ui', fontSize: 11, fontWeight: 900,
            letterSpacing: '0.4em', color: C.goldBright,
            textShadow: `0 0 12px ${C.goldBright}`,
          }}>SERIES FINALE</div>
          <div style={{
            marginTop: 14,
            fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
            fontWeight: 900, fontSize: 64, lineHeight: 0.92,
            letterSpacing: -2,
            background: `linear-gradient(180deg, ${C.cream} 0%, ${C.goldBright} 50%, ${C.goldDeep} 100%)`,
            WebkitBackgroundClip: 'text', backgroundClip: 'text',
            WebkitTextStroke: `2.5px ${C.black}`, color: 'transparent',
            textShadow: `0 4px 0 ${C.black}, 0 8px 32px rgba(255,215,0,0.6)`,
            transform: 'rotate(-2deg)',
          }}>YOU<br/>PASSED!</div>
          <div style={{
            marginTop: 10,
            fontFamily: '"Bonheur Royale", cursive', fontSize: 32,
            color: C.hotPink,
            textShadow: `0 0 12px ${C.hotPink}, 0 2px 4px rgba(0,0,0,0.5)`,
            transform: 'rotate(-1deg)',
          }}>Go sell a house, {name}.</div>
        </div>

        {/* WWHL clubhouse photo */}
        <div style={{ marginTop: 18, display: 'flex', justifyContent: 'center', position: 'relative' }}>
          <div style={{
            width: 240, height: 160,
            border: `3px solid ${C.cream}`,
            borderRadius: 6,
            overflow: 'hidden',
            boxShadow: `0 8px 0 ${C.black}, 0 16px 32px rgba(0,0,0,0.5)`,
            transform: 'rotate(-2deg)',
            position: 'relative',
          }}>
            <img src="/assets/WWHL_Clubhouse.webp" alt="" style={{
              width: '100%', height: '100%', objectFit: 'cover',
            }}/>
            <div style={{
              position: 'absolute', bottom: 6, left: 8,
              padding: '2px 6px', background: C.cream,
              fontFamily: '"Bonheur Royale", cursive', fontSize: 16,
              color: C.hotPinkDeep,
              transform: 'rotate(-2deg)',
            }}>{name} \u2014 the talent</div>
          </div>
        </div>

        {/* Stats */}
        <div style={{ margin: '24px 18px 0', display: 'flex', gap: 8 }}>
          {[
            { label: 'CORRECT', value: correct },
            { label: 'BEST STREAK', value: bestStreak },
            { label: 'BRAVO PTS', value: bravoPoints },
          ].map(s => (
            <div key={s.label} style={{
              flex: 1, padding: '10px 10px',
              borderRadius: 12,
              background: `linear-gradient(180deg, rgba(74,14,46,0.85) 0%, rgba(10,10,10,0.85) 100%)`,
              border: `1px solid ${C.hotPinkDeep}`,
              boxShadow: 'inset 0 0 0 1px rgba(255,215,0,0.2)',
              textAlign: 'center',
            }}>
              <div style={{
                fontFamily: 'Inter, system-ui', fontSize: 8, fontWeight: 800,
                letterSpacing: '0.18em', color: C.hotPink, textTransform: 'uppercase',
              }}>{s.label}</div>
              <div style={{
                marginTop: 4,
                fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
                fontWeight: 900, fontSize: 28, color: C.goldBright,
                textShadow: `0 0 14px rgba(255,215,0,0.6)`, lineHeight: 1,
              }}>{s.value}</div>
            </div>
          ))}
        </div>

        {/* Closing card */}
        <div style={{ margin: '20px 18px 0' }}>
          <div style={{
            padding: '16px 16px',
            background: C.cream, color: C.black,
            border: `2px solid ${C.black}`,
            borderRadius: 14,
            boxShadow: `0 6px 0 ${C.black}, 0 14px 30px rgba(0,0,0,0.5)`,
            position: 'relative',
            transform: 'rotate(-0.4deg)',
          }}>
            <div style={{
              position: 'absolute', top: -10, left: 14,
              padding: '3px 10px',
              background: C.goldBright,
              border: `1.5px solid ${C.black}`,
              borderRadius: 999,
              boxShadow: `0 2px 0 ${C.black}`,
              fontFamily: 'Inter, system-ui', fontSize: 9, fontWeight: 900,
              letterSpacing: '0.2em', color: C.black,
            }}>FROM LISA</div>
            <div style={{
              fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
              fontWeight: 700, fontSize: 14, color: C.black, lineHeight: 1.4,
              marginTop: 4,
            }}>"Darling. You showed up. Every night. You deserve every commission cheque coming your way. Now \u2014 don\u2019t embarrass me at closing."</div>
            <div style={{
              marginTop: 10,
              fontFamily: '"Bonheur Royale", cursive', fontSize: 28,
              color: C.hotPinkDeep, textAlign: 'right',
            }}>Lisa V.</div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes floatPiece {
          0%, 100% { transform: translateY(0); opacity: 0.8; }
          50% { transform: translateY(-12px); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
