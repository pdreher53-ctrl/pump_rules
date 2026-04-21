import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';

const C = {
  hotPink: '#E91E63',
  hotPinkDeep: '#B0124D',
  goldBright: '#FFD700',
  champagne: '#D4AF37',
  goldDeep: '#A8820E',
  plumDeep: '#4A0E2E',
  plumDeeper: '#2A0519',
  black: '#0A0A0A',
  cream: '#FFF9F0',
  blue: '#2D3F8C',
  blueLight: '#5871D4',
};

export default function RawtInHail() {
  const navigate = useNavigate();
  const streak = useStore(s => s.streak);
  const sessionAnswered = useStore(s => s.sessionAnswered);
  const sessionTarget = useStore(s => s.sessionTarget);
  const sessionDone = sessionAnswered >= sessionTarget;

  return (
    <div style={{
      width: '100%', minHeight: '100%', position: 'relative', overflow: 'hidden',
      background: `
        radial-gradient(ellipse 90% 50% at 50% 30%, rgba(88, 113, 212, 0.35) 0%, transparent 60%),
        radial-gradient(ellipse 60% 30% at 50% 50%, rgba(255, 215, 0, 0.18) 0%, transparent 60%),
        linear-gradient(180deg, ${C.blue} 0%, ${C.plumDeeper} 60%, ${C.black} 100%)
      `,
      paddingBottom: 30,
    }}>
      {/* Lightning streaks */}
      {[0, 1, 2, 3].map(i => (
        <div key={i} style={{
          position: 'absolute', top: 0, bottom: 0,
          left: `${15 + i * 22}%`, width: 2,
          background: `linear-gradient(180deg, transparent 0%, ${C.goldBright} 30%, ${C.cream} 50%, ${C.goldBright} 70%, transparent 100%)`,
          opacity: 0.4 + (i % 2) * 0.3,
          transform: `rotate(${(i % 2 ? -8 : 8)}deg) translateY(-10%)`,
          filter: 'blur(0.5px)',
          animation: `flash ${1.4 + i * 0.3}s ease-in-out ${i * 0.2}s infinite`,
          pointerEvents: 'none',
        }}/>
      ))}

      <div style={{ position: 'relative', zIndex: 2, paddingTop: 30 }}>
        {/* RAWT IN HAIL title */}
        <div style={{ textAlign: 'center', position: 'relative' }}>
          <div style={{
            fontFamily: 'Inter, system-ui', fontSize: 11, fontWeight: 900,
            letterSpacing: '0.4em', color: C.cream,
            textShadow: `0 0 12px ${C.goldBright}`,
            opacity: 0.7,
          }}>STREAK · 3 IN A ROW</div>
          <div style={{
            marginTop: 12,
            fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
            fontWeight: 900, fontSize: 64, lineHeight: 0.92,
            letterSpacing: -2,
            background: `linear-gradient(180deg, ${C.cream} 0%, ${C.goldBright} 50%, ${C.goldDeep} 100%)`,
            WebkitBackgroundClip: 'text', backgroundClip: 'text',
            WebkitTextStroke: `2.5px ${C.black}`, color: 'transparent',
            textShadow: `
              0 4px 0 ${C.black},
              0 0 32px rgba(255,215,0,0.7),
              0 0 56px rgba(88,113,212,0.7)
            `,
            transform: 'rotate(-3deg)',
          }}>RAWT IN<br/>HAIL!</div>
          <div style={{
            marginTop: 6,
            fontFamily: '"Bonheur Royale", cursive', fontSize: 28,
            color: C.cream,
            textShadow: `0 0 10px ${C.goldBright}, 0 2px 4px rgba(0,0,0,0.4)`,
            transform: 'rotate(-1deg)',
          }}>...the storm is you.</div>
        </div>

        {/* Streak number */}
        <div style={{ marginTop: 30, textAlign: 'center' }}>
          <div style={{
            display: 'inline-block', position: 'relative',
            padding: '14px 32px',
            background: `linear-gradient(180deg, ${C.goldBright} 0%, ${C.goldDeep} 100%)`,
            border: `3px solid ${C.black}`, borderRadius: 999,
            boxShadow: `0 6px 0 ${C.black}, 0 0 36px rgba(255,215,0,0.6)`,
          }}>
            <div style={{
              fontFamily: 'Inter, system-ui', fontSize: 9, fontWeight: 900,
              letterSpacing: '0.3em', color: C.black,
            }}>STREAK COUNT</div>
            <div style={{
              fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
              fontWeight: 900, fontSize: 56, color: C.black, lineHeight: 1,
              marginTop: 2,
              display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 6,
            }}>
              <span style={{ fontSize: 28 }}>🔥</span>{streak}
            </div>
          </div>
        </div>

        {/* Brittany hyped */}
        <div style={{ marginTop: 14, display: 'flex', justifyContent: 'center', position: 'relative' }}>
          <img src="/assets/Brittany_Hyped.png" alt="Brittany hyped" style={{
            height: 180, width: 'auto',
            filter: `drop-shadow(0 10px 24px rgba(0,0,0,0.6)) drop-shadow(0 0 20px rgba(255,215,0,0.4))`,
            animation: 'andyBob 1.6s ease-in-out infinite',
            transformOrigin: 'bottom center',
          }}/>
        </div>

        {/* CTA */}
        <div style={{ margin: '20px 18px 0' }}>
          <button onClick={() => navigate(sessionDone ? '/recap' : '/play')} style={{
            width: '100%', padding: '16px 18px', borderRadius: 14,
            background: `linear-gradient(180deg, ${C.goldBright} 0%, ${C.goldDeep} 100%)`,
            border: `2px solid ${C.black}`,
            boxShadow: `0 4px 0 ${C.black}, 0 12px 28px -4px rgba(255,215,0,0.6), inset 0 1px 0 rgba(255,255,255,0.4)`,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
            cursor: 'pointer',
            fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
            fontWeight: 900, fontSize: 17, color: C.black, letterSpacing: -0.3,
          }}>
            <span>{sessionDone ? 'Take a bow at the Recap' : 'Don\u2019t stop, drama queen'}</span>
            <svg width="14" height="12" viewBox="0 0 14 12"><path d="M1 6h11m0 0l-4-5m4 5l-4 5" stroke={C.black} strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <div style={{
            marginTop: 10, textAlign: 'center',
            fontFamily: 'Inter, system-ui', fontSize: 10, fontWeight: 700,
            color: 'rgba(255,249,240,0.55)', letterSpacing: '0.06em',
            fontStyle: 'italic',
          }}>This streak just earned you a {streak * 10} Bravo-pt bonus.</div>
        </div>
      </div>

      <style>{`
        @keyframes flash {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        @keyframes andyBob {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-4px) rotate(-1deg); }
          50% { transform: translateY(0) rotate(0deg); }
          75% { transform: translateY(-4px) rotate(1deg); }
        }
      `}</style>
    </div>
  );
}
